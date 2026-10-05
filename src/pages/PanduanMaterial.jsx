import React, { useState, useEffect, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { MATERIAL_DATA } from "../constants/dummyData";
import BotAssistant from "../components/bot/BotAssistant";

export default function PanduanMaterial() {
  const { t, i18n } = useTranslation();
  const [searchQuery, setSearchQuery] = useState("");
  const [defaultMaterials, setDefaultMaterials] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [loadingDefault, setLoadingDefault] = useState(true);
  const [searching, setSearching] = useState(false);
  const [botFlowData, setBotFlowData] = useState(null);

  const currentLang = (i18n.resolvedLanguage || i18n.language || "id")
    .split("-")[0]
    .toLowerCase();

  const apiUrl =
    import.meta.env.VITE_API_BASE_URL ||
    import.meta.env.VITE_API_URL ||
    "https://api.ecocash.id/api/v1";

  // 1. Scroll ke atas & Fetch data Bot Flow
  useEffect(() => {
    window.scrollTo(0, 0);

    const fetchBotTree = async () => {
      try {
        const apiUrl =
          import.meta.env.VITE_API_URL_LOCAL || "https://api.ecocash.id/api/v1";

        const response = await fetch(`${apiUrl}/bot/tree`);
        if (!response.ok) throw new Error("Gagal mengambil data bot");
        const result = await response.json();
        if (result.success && result.data) {
          setBotFlowData(result.data);
        }
      } catch (err) {
        console.error("Kesalahan API Bot:", err.message);
      }
    };

    fetchBotTree();
  }, [apiUrl]);

  // 2. Fetch seluruh panduan material saat halaman dimuat & saat bahasa berganti
  useEffect(() => {
    let isMounted = true;

    const fetchDefaultMaterials = async () => {
      setLoadingDefault(true);
      try {
        const response = await fetch(
          `${apiUrl}/recycle-materials?lang=${currentLang}`
        );

        if (!response.ok) {
          throw new Error(`HTTP Error: ${response.status}`);
        }

        const result = await response.json();
        const rawItems = Array.isArray(result.data)
          ? result.data
          : Array.isArray(result.data?.items)
          ? result.data.items
          : [];

        if (isMounted) {
          if (rawItems.length > 0) {
            setDefaultMaterials(rawItems);
          } else {
            setDefaultMaterials(MATERIAL_DATA);
          }
        }
      } catch (err) {
        console.warn(
          "[PanduanMaterial] Gagal memuat data default, beralih ke fallback lokal:",
          err.message
        );
        if (isMounted) {
          setDefaultMaterials(MATERIAL_DATA);
        }
      } finally {
        if (isMounted) setLoadingDefault(false);
      }
    };

    fetchDefaultMaterials();

    return () => {
      isMounted = false;
    };
  }, [currentLang, apiUrl]);

  // 3. Logika Pencarian Dinamis (Backend JSONB Query)
  useEffect(() => {
    if (searchQuery.trim() === "") {
      setSearchResults([]);
      setSearching(false);
      return;
    }

    setSearching(true);
    const debounceTimer = setTimeout(async () => {
      try {
        const response = await fetch(
          `${apiUrl}/recycle-materials?lang=${currentLang}&search=${encodeURIComponent(
            searchQuery.trim()
          )}`
        );

        if (!response.ok) throw new Error(`HTTP Error: ${response.status}`);

        const result = await response.json();
        const rawItems = Array.isArray(result.data)
          ? result.data
          : Array.isArray(result.data?.items)
          ? result.data.items
          : [];

        if (rawItems.length > 0) {
          setSearchResults(rawItems);
        } else {
          // Fallback pencarian lokal
          const lower = searchQuery.toLowerCase();
          const localResults = defaultMaterials.filter(
            (item) =>
              item.name?.toLowerCase().includes(lower) ||
              item.category?.toLowerCase().includes(lower)
          );
          setSearchResults(localResults);
        }
      } catch (err) {
        console.warn("[PanduanMaterial] Fallback search lokal:", err.message);
        const lower = searchQuery.toLowerCase();
        const localResults = defaultMaterials.filter(
          (item) =>
            item.name?.toLowerCase().includes(lower) ||
            item.category?.toLowerCase().includes(lower)
        );
        setSearchResults(localResults);
      } finally {
        setSearching(false);
      }
    }, 300);

    return () => clearTimeout(debounceTimer);
  }, [searchQuery, currentLang, apiUrl, defaultMaterials]);

  // Pisahkan material yang diterima dan ditolak untuk tampilan default
  const { acceptedList, rejectedList } = useMemo(() => {
    const accepted = [];
    const rejected = [];

    defaultMaterials.forEach((item) => {
      const isAccepted =
        item.rawStatus === "ACCEPTED" ||
        item.status === "ACCEPTED" ||
        item.status === "Diterima" ||
        item.status === "Accepted" ||
        item.status === "已接收";

      if (isAccepted) {
        accepted.push(item);
      } else {
        rejected.push(item);
      }
    });

    return { acceptedList: accepted, rejectedList: rejected };
  }, [defaultMaterials]);

  return (
    <main className="w-full min-h-screen bg-[#fafafc] font-body text-slate-700">
      {/* HEADER & SEARCH SECTION */}
      <section className="relative pt-32 pb-16 flex flex-col items-center justify-center text-center px-6 overflow-hidden z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#06b6d4]/20 blur-[100px] rounded-full -z-10 pointer-events-none"></div>

        <h1 className="text-3xl md:text-4xl lg:text-[40px] font-extrabold text-slate-900 font-heading mb-4 tracking-tight">
          {t("panduan.heroTitle", "Panduan Kelayakan Wadah Daur Ulang")}
        </h1>
        <p className="text-slate-600 font-body text-sm md:text-base max-w-2xl mx-auto mb-10 leading-relaxed">
          {t(
            "panduan.heroDesc",
            "Pastikan botol dan kaleng Anda memenuhi kriteria agar dapat diproses oleh mesin RVM kami dan dikonversi menjadi saldo."
          )}
        </p>

        {/* Search Bar Interaktif */}
        <div className="w-full max-w-2xl relative">
          <div className="absolute inset-y-0 left-5 flex items-center pointer-events-none">
            <svg
              className="w-5 h-5 text-slate-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
          <input
            type="text"
            placeholder={t(
              "panduan.searchPlaceholder",
              "Cari jenis kemasan... (contoh: Botol Aqua, Kaleng Pocari)"
            )}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-white border border-slate-200 rounded-xl py-4 pl-14 pr-12 shadow-sm focus:outline-none focus:border-[#06b6d4] focus:ring-2 focus:ring-[#06b6d4]/20 font-body text-sm text-slate-700 transition-all"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute inset-y-0 right-5 flex items-center text-slate-400 hover:text-slate-600 cursor-pointer"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          )}
        </div>
      </section>

      {/* DYNAMIC CONTENT AREA */}
      <section className="max-w-5xl mx-auto px-6 pb-12 relative z-20 min-h-[300px]">
        {searchQuery.trim() !== "" ? (
          /* KONDISI 1: HASIL PENCARIAN */
          <div className="animate-fadeIn">
            <h3 className="text-lg font-bold font-heading text-slate-800 mb-6 border-b border-slate-200 pb-2">
              {t("panduan.searchResultFor", "Hasil Pencarian untuk")} "{searchQuery}"
            </h3>

            {searching ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[1, 2].map((i) => (
                  <div key={i} className="bg-white border rounded-xl p-5 shadow-sm animate-pulse h-28">
                    <div className="h-5 bg-slate-200 rounded w-1/2 mb-2"></div>
                    <div className="h-4 bg-slate-100 rounded w-1/3"></div>
                  </div>
                ))}
              </div>
            ) : searchResults.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {searchResults.map((item) => {
                  const isAccepted =
                    item.rawStatus === "ACCEPTED" ||
                    item.status === "ACCEPTED" ||
                    item.status === "Diterima" ||
                    item.status === "Accepted" ||
                    item.status === "已接收";

                  return (
                    <div
                      key={item.id}
                      className={`bg-white border rounded-xl p-5 shadow-sm flex items-start gap-4 transition-all hover:shadow-md ${
                        isAccepted
                          ? "border-l-4 border-l-[#22c55e] border-slate-100"
                          : "border-l-4 border-l-[#ef4444] border-slate-100"
                      }`}
                    >
                      <div
                        className={`w-10 h-10 rounded-full flex shrink-0 items-center justify-center mt-1 ${
                          isAccepted
                            ? "bg-[#dcfce7] text-[#16a34a]"
                            : "bg-[#fee2e2] text-[#dc2626]"
                        }`}
                      >
                        {isAccepted ? (
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                          </svg>
                        ) : (
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        )}
                      </div>

                      <div className="flex-1">
                        <h4 className="font-bold text-slate-900 font-heading text-[15px] mb-1">
                          {item.name}
                        </h4>
                        <p className="text-xs text-slate-500 font-body mb-2">
                          {t("panduan.categoryLabel", "Kategori")}: {item.category}
                        </p>

                        {isAccepted ? (
                          <span className="inline-block bg-[#dcfce7] text-[#16a34a] text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
                            {item.status}
                          </span>
                        ) : (
                          <div>
                            <span className="inline-block bg-[#fee2e2] text-[#dc2626] text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider mb-1.5">
                              {item.status}
                            </span>
                            {item.reason && (
                              <p className="text-[11px] text-red-600/80 font-medium leading-tight">
                                * {item.reason}
                              </p>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="bg-white border border-slate-200 rounded-2xl p-10 text-center shadow-sm">
                <svg className="w-12 h-12 text-slate-300 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM9 10h.01M15 10h.01M9 16h6" />
                </svg>
                <p className="text-slate-600 font-bold mb-1">
                  {t("panduan.notFoundTitle", "Kemasan tidak ditemukan dalam sistem.")}
                </p>
                <p className="text-sm text-slate-500">
                  {t('panduan.notFoundDesc', 'Coba gunakan kata kunci yang lebih umum seperti "Botol" atau "Kaleng".')}
                </p>
              </div>
            )}
          </div>
        ) : (
          /* KONDISI 2: TAMPILAN DEFAULT (DARI DATABASE MULTIBAHASA) */
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 animate-fadeIn">
            {/* KARTU KIRI: Wadah yang Diterima */}
            <div className="bg-[#f4fcf6] border border-slate-200 border-l-4 border-l-[#22c55e] rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-lg font-bold font-heading text-slate-900 flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-full bg-[#dcfce7] text-[#16a34a] flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                {t("panduan.acceptedCardTitle", "Wadah yang Diterima")}
              </h3>

              {loadingDefault ? (
                <div className="space-y-3 animate-pulse">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="h-4 bg-slate-200 rounded w-4/5"></div>
                  ))}
                </div>
              ) : (
                <ul className="space-y-4">
                  {(acceptedList.length > 0
                    ? acceptedList
                    : [
                        { id: 1, name: "Botol Plastik PET (Bening/Warna)" },
                        { id: 2, name: "Botol Plastik HDPE (Susu/Sabun)" },
                        { id: 3, name: "Kaleng Minuman Aluminium" },
                        { id: 4, name: "Ukuran 150ml - 3L" },
                      ]
                  ).map((item) => (
                    <li key={item.id} className="flex items-start gap-3 text-slate-700 font-body text-sm">
                      <svg className="w-4 h-4 text-[#16a34a] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                      </svg>
                      <div>
                        <span className="font-semibold text-slate-900">{item.name}</span>
                        {item.category && item.category !== "Wadah Daur Ulang" && (
                          <span className="text-xs text-slate-500 block">({item.category})</span>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* KARTU KANAN: Wadah yang Ditolak */}
            <div className="bg-[#fff6f6] border border-slate-200 border-l-4 border-l-[#ef4444] rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-lg font-bold font-heading text-slate-900 flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-full bg-[#fee2e2] text-[#dc2626] flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
                {t("panduan.rejectedCardTitle", "Wadah yang Ditolak")}
              </h3>

              {loadingDefault ? (
                <div className="space-y-3 animate-pulse">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="h-4 bg-slate-200 rounded w-4/5"></div>
                  ))}
                </div>
              ) : (
                <ul className="space-y-4">
                  {(rejectedList.length > 0
                    ? rejectedList
                    : [
                        { id: 5, name: "Plastik Saset/Pouch", reason: "Material multilayer tidak dapat diproses" },
                        { id: 6, name: "Botol Kotor/Berminyak", reason: "Mencemari sensor dan kontainer" },
                        { id: 7, name: "Galon > 3L", reason: "Melebihi kapasitas sensor RVM" },
                        { id: 8, name: "Botol Kaca Alkohol", reason: "Rentan pecah membahayakan sistem" },
                      ]
                  ).map((item) => (
                    <li key={item.id} className="flex items-start gap-3 text-slate-700 font-body text-sm">
                      <svg className="w-4 h-4 text-[#dc2626] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      <div>
                        <span className="font-semibold text-slate-900">{item.name}</span>
                        {item.reason && (
                          <span className="text-xs text-red-600/80 block leading-tight mt-0.5">
                            * {item.reason}
                          </span>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        )}
      </section>

      {/* ATURAN EMAS DAUR ULANG */}
      <section className="max-w-5xl mx-auto px-6 pb-20 relative z-20">
        <div className="bg-[#fef8ef] border border-slate-100 border-l-4 border-l-[#f59e0b] rounded-2xl p-8 md:p-10 shadow-sm">
          <h2 className="text-2xl font-extrabold font-heading text-slate-900 mb-8">
            {t("panduan.goldenRulesTitle", "3 Aturan Emas Daur Ulang")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
            <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row items-start gap-4">
              <div className="w-12 h-12 shrink-0 rounded-full bg-[#fde68a] text-[#d97706] flex items-center justify-center">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <div>
                <h4 className="font-bold text-slate-900 font-heading mb-1.5 text-base">
                  {t("panduan.rule1Title", "Kosongkan Cairan")}
                </h4>
                <p className="text-xs text-slate-600 font-body leading-relaxed">
                  {t("panduan.rule1Desc", "Pastikan tidak ada sisa minuman.")}
                </p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row items-start gap-4">
              <div className="w-12 h-12 shrink-0 rounded-full bg-[#fde68a] text-[#d97706] flex items-center justify-center">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                </svg>
              </div>
              <div>
                <h4 className="font-bold text-slate-900 font-heading mb-1.5 text-base">
                  {t("panduan.rule2Title", "Jangan Lepas Label")}
                </h4>
                <p className="text-xs text-slate-600 font-body leading-relaxed">
                  {t("panduan.rule2Desc", "Mesin perlu memindai kode untuk identifikasi.")}
                </p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row items-start gap-4">
              <div className="w-12 h-12 shrink-0 rounded-full bg-[#fde68a] text-[#d97706] flex items-center justify-center">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 12a8 8 0 018-8 8 8 0 018 8 8 8 0 01-8 8 8 8 0 01-8-8z" />
                </svg>
              </div>
              <div>
                <h4 className="font-bold text-slate-900 font-heading mb-1.5 text-base">
                  {t("panduan.rule3Title", "Jangan Diremukkan")}
                </h4>
                <p className="text-xs text-slate-600 font-body leading-relaxed">
                  {t("panduan.rule3Desc", "Masukkan dalam kondisi utuh agar sensor dapat mengenali bentuk.")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CALL TO ACTION SECTION */}
      <section className="text-center max-w-4xl mx-auto px-6 pb-32">
        <h2 className="text-2xl md:text-3xl font-extrabold font-heading text-slate-900 mb-4">
          {t("panduan.ctaTitle", "Punya Wadah Siap Setor?")}
        </h2>
        <p className="text-slate-500 font-body mb-8 text-sm md:text-base">
          {t(
            "panduan.ctaDesc",
            "Temukan RVM terdekat dan mulai kumpulkan saldo EcoCash Anda hari ini."
          )}
        </p>
        <a
          href="/#location-map"
          className="inline-flex items-center justify-center gap-2 bg-eco-cyan hover:bg-[#26d2cc] text-white px-8 py-3.5 rounded-full font-heading font-bold text-sm shadow-lg shadow-cyan-500/30 transition-all transform hover:-translate-y-0.5"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          {t("panduan.ctaBtn", "Lihat Lokasi RVM Terdekat")}
        </a>
      </section>

      {/* Bot Assistant */}
      <BotAssistant botFlowData={botFlowData} />
    </main>
  );
}