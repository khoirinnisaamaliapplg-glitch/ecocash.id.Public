import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { STATIC_BOT_TREE } from "../../constants/chatbotData";

const handleNavigation = (url) => {
  if (!url) return;

  if (url.includes("#")) {
    const targetId = url.split("#")[1];
    const element = document.getElementById(targetId);

    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }
  }

  window.location.href = url;
};

// Helper: Prioritaskan node "initial" sebagai entry point utama
const getRootNode = (tree) => {
  if (!tree || typeof tree !== "object") return null;
  if (tree.initial) return tree.initial;
  if (tree.main) return tree.main;
  if (tree.root) return tree.root;

  const keys = Object.keys(tree);
  return keys.length > 0 ? tree[keys[0]] : null;
};

const getRootKey = (tree) => {
  if (!tree || typeof tree !== "object") return "initial";
  if ("initial" in tree) return "initial";
  if ("main" in tree) return "main";
  if ("root" in tree) return "root";

  const keys = Object.keys(tree);
  return keys.length > 0 ? keys[0] : "initial";
};

export default function BotAssistant({ botFlowData: initialBotFlowData }) {
  const { t, i18n } = useTranslation();
  const [isChatOpen, setIsChatOpen] = useState(false);
  const messagesEndRef = useRef(null);

  const currentLang = (i18n.resolvedLanguage || i18n.language || "id")
    .split("-")[0]
    .toLowerCase();

  // 1. Fallback instan: Ambil data statis lokal sesuai bahasa aktif
  const localTree = STATIC_BOT_TREE[currentLang] || STATIC_BOT_TREE.id;

  // 2. Inisialisasi state dengan data props atau data statis lokal
  const [activeFlowData, setActiveFlowData] = useState(
    initialBotFlowData || localTree
  );

  const buildInitialBotState = (data) => {
    const activeTree = data && Object.keys(data).length > 0 ? data : localTree;
    const rootNode = getRootNode(activeTree);

    return [
      {
        id: Date.now(),
        sender: "bot",
        text: rootNode?.message || t("bot.defaultMessage", "Halo! Ada yang bisa kami bantu?"),
        options: rootNode?.options || [],
      },
    ];
  };

  const [chatHistory, setChatHistory] = useState(() =>
    buildInitialBotState(initialBotFlowData || localTree)
  );

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [chatHistory, isChatOpen]);

  // 3. Stale-While-Revalidate: Re-fetch ke Backend tanpa membuat UI blank jika BE offline
  useEffect(() => {
    let isMounted = true;
    const treeForLang = STATIC_BOT_TREE[currentLang] || STATIC_BOT_TREE.id;

    // Pasang data lokal terlebih dahulu saat bahasa berganti
    setActiveFlowData(treeForLang);
    setChatHistory(buildInitialBotState(treeForLang));

    const fetchLocalizedBotTree = async () => {
      try {
        const apiUrl =
          import.meta.env.VITE_API_URL_LOCAL ||
          import.meta.env.VITE_API_BASE_URL ||
          import.meta.env.VITE_API_URL ||
          "https://api.ecocash.id/api/v1";

        const response = await fetch(`${apiUrl}/bot/tree?lang=${currentLang}`);
        if (!response.ok) throw new Error(`HTTP Error: ${response.status}`);
        const result = await response.json();

        if (isMounted && result.success && result.data && Object.keys(result.data).length > 0) {
          setActiveFlowData(result.data);
          setChatHistory(buildInitialBotState(result.data));
        }
      } catch (err) {
        console.warn(
          "[BotAssistant] Backend offline/error, menggunakan static tree lokal:",
          err.message
        );
      }
    };

    fetchLocalizedBotTree();

    return () => {
      isMounted = false;
    };
  }, [currentLang]);

  const resetChat = () => {
    const currentTree = activeFlowData || localTree;
    const rootNode = getRootNode(currentTree);

    setChatHistory([
      {
        id: Date.now(),
        sender: "bot",
        text: t("bot.resetNotice", "Sesi obrolan diulang. Apa yang ingin Anda eksplorasi?"),
        options: rootNode?.options || [],
      },
    ]);
  };

  const handleOptionClick = (option) => {
    const currentTree = activeFlowData || localTree;
    if (!option || !currentTree) return;

    const userMessage = {
      id: Date.now(),
      sender: "user",
      text: option.label,
    };

    setChatHistory((prev) => [...prev, userMessage]);

    setTimeout(() => {
      // Opsi Berupa Navigasi Tautan Halaman
      if (option.action === "LINK") {
        setChatHistory((prev) => [
          ...prev,
          {
            id: Date.now() + 1,
            sender: "bot",
            text: t("bot.redirecting", "Mengarahkan Anda ke bagian terkait..."),
          },
        ]);

        setTimeout(() => handleNavigation(option.url), 800);

        setTimeout(() => {
          const rootNode = getRootNode(currentTree);

          setChatHistory((prev) => [
            ...prev,
            {
              id: Date.now() + 2,
              sender: "bot",
              text: t("bot.anythingElse", "Ada hal lain yang bisa saya bantu?"),
              options: rootNode?.options || [],
            },
          ]);
        }, 2200);

        return;
      }

      // Opsi Berupa Bantuan CS WhatsApp
      if (option.action === "WHATSAPP") {
        setChatHistory((prev) => [
          ...prev,
          {
            id: Date.now() + 1,
            sender: "bot",
            text: t("bot.openingWa", "Membuka jendela WhatsApp..."),
          },
        ]);

        setTimeout(() => {
          window.open(option.url, "_blank");
        }, 800);

        setTimeout(() => {
          const rootNode = getRootNode(currentTree);

          setChatHistory((prev) => [
            ...prev,
            {
              id: Date.now() + 2,
              sender: "bot",
              text: t("bot.anythingElse", "Ada hal lain yang bisa saya bantu?"),
              options: rootNode?.options || [],
            },
          ]);
        }, 2200);

        return;
      }

      // Opsi Percabangan Berikutnya (Next Step)
      if (option.next && currentTree[option.next]) {
        const nextStep = currentTree[option.next];

        setChatHistory((prev) => [
          ...prev,
          {
            id: Date.now() + 1,
            sender: "bot",
            text: nextStep.message,
            options: nextStep.options,
          },
        ]);
        return;
      }

      // Fallback jika tombol tidak memiliki next maupun action (kembali ke root)
      const rootNode = getRootNode(currentTree);
      setChatHistory((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          sender: "bot",
          text: rootNode?.message || t("bot.anythingElse", "Ada hal lain yang bisa saya bantu?"),
          options: rootNode?.options || [],
        },
      ]);
    }, 400);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {isChatOpen && (
        <div className="mb-4 w-[320px] sm:w-[350px] bg-white rounded-2xl shadow-2xl border border-slate-100 flex flex-col overflow-hidden animate-fadeIn origin-bottom-right">
          {/* Header Widget */}
          <div className="bg-white border-b border-slate-100 p-4 flex items-center justify-between shadow-sm z-10">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-eco-cyan/10 rounded-full flex items-center justify-center text-eco-cyan shrink-0">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12c0 1.72.44 3.34 1.2 4.78L2 22l5.36-1.12C8.78 21.6 10.34 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm0 18c-1.46 0-2.86-.34-4.12-.96l-.3-.14-3.08.64.66-2.96-.16-.3C4.34 14.92 4 13.5 4 12c0-4.42 3.58-8 8-8s8 3.58 8 8-3.58 8-8 8z" />
                </svg>
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-800 font-heading leading-tight">
                  {t("bot.title", "EcoCash Assistant")}
                </h4>
                <p className="text-[10px] text-emerald-500 font-medium">
                  {t("bot.online", "Online")}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1 shrink-0">
              <button
                onClick={resetChat}
                title={t("bot.restartChat", "Mulai Ulang Obrolan")}
                className="text-slate-400 hover:text-eco-cyan transition-colors p-1.5 cursor-pointer rounded-lg hover:bg-slate-50"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </button>

              <button
                onClick={() => setIsChatOpen(false)}
                className="text-slate-400 hover:text-slate-600 transition-colors p-1.5 cursor-pointer rounded-lg hover:bg-slate-50"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>

          {/* Area Percakapan */}
          <div className="p-4 h-72 bg-slate-50 overflow-y-auto flex flex-col gap-4 custom-scrollbar">
            {chatHistory.map((chat, index) => (
              <div key={chat.id} className="flex flex-col gap-2">
                {chat.sender === "bot" ? (
                  <div className="flex gap-2 max-w-[90%]">
                    <div className="w-6 h-6 rounded-full bg-eco-cyan text-white flex shrink-0 items-center justify-center text-[10px] font-bold mt-1">
                      AI
                    </div>
                    <div className="flex flex-col gap-2 w-full">
                      <div className="bg-white border border-slate-200 text-slate-700 text-[13px] p-3 rounded-2xl rounded-tl-sm shadow-sm leading-relaxed">
                        {chat.text}
                      </div>

                      {chat.options && chat.options.length > 0 && (
                        <div className="flex flex-col gap-1.5 mt-1">
                          {chat.options.map((opt, i) => (
                            <button
                              key={i}
                              onClick={() => handleOptionClick(opt)}
                              disabled={index !== chatHistory.length - 1}
                              className={`text-left text-[12px] font-medium font-heading px-3 py-2 rounded-xl transition-all border ${
                                index === chatHistory.length - 1
                                  ? "bg-eco-cyan/5 border-eco-cyan/30 text-eco-cyan hover:bg-eco-cyan hover:text-white cursor-pointer"
                                  : "bg-slate-100 border-slate-200 text-slate-400 cursor-not-allowed"
                              }`}
                            >
                              {opt.label}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                ) : (
                  <div className="flex justify-end w-full">
                    <div className="max-w-[80%] bg-eco-cyan text-white text-[13px] p-3 rounded-2xl rounded-tr-sm shadow-sm leading-relaxed font-body">
                      {chat.text}
                    </div>
                  </div>
                )}
              </div>
            ))}

            <div ref={messagesEndRef} />
          </div>

          {/* Footer Branding */}
          <div className="p-3 bg-white border-t border-slate-100 text-center">
            <span className="text-[10px] text-slate-400 font-body">
              {t("bot.poweredBy", "Powered by EcoCash AI")}
            </span>
          </div>
        </div>
      )}

      {/* Floating Action Button */}
      <button
        onClick={() => setIsChatOpen(!isChatOpen)}
        className="w-14 h-14 rounded-full shadow-2xl flex items-center justify-center cursor-pointer transition-all transform hover:scale-105 bg-eco-cyan text-white hover:bg-eco-cyan/90"
      >
        {isChatOpen ? (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <img
            src="img/cs.png"
            alt="CS EcoCash"
            className="w-10 h-auto cursor-pointer"
            onError={(e) => {
              e.target.style.display = "none";
              e.target.parentElement.innerHTML =
                '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"/></svg>';
            }}
          />
        )}
      </button>
    </div>
  );
}