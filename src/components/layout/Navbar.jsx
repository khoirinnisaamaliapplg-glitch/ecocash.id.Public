import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { NAV_ITEMS } from "../../constants/dummyData";

// Helper me-render Ikon Dinamis berdasarkan Key / Label Menu
const getMenuIcon = (subItem) => {
  const key = typeof subItem === "object" ? (subItem.key || "") : "";
  const label = typeof subItem === "object" ? (subItem.label || "") : subItem;
  const keyword = `${key} ${label}`.toLowerCase();

  if (
    keyword.includes("pickup") ||
    keyword.includes("field") ||
    keyword.includes("penjemput") ||
    keyword.includes("lapangan")
  ) {
    return (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
        />
      </svg>
    );
  }
  if (
    keyword.includes("forusers") ||
    keyword.includes("location") ||
    keyword.includes("wastebank") ||
    keyword.includes("bank sampah") ||
    keyword.includes("daur ulang") ||
    keyword.includes("pengguna")
  ) {
    return (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
        />
      </svg>
    );
  }
  if (
    keyword.includes("recycler") ||
    keyword.includes("retail") ||
    keyword.includes("cooperative") ||
    keyword.includes("industri") ||
    keyword.includes("ritel") ||
    keyword.includes("koprasi")
  ) {
    return (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z"
        />
      </svg>
    );
  }
  if (
    keyword.includes("partnership") ||
    keyword.includes("school") ||
    keyword.includes("government") ||
    keyword.includes("kemitraan") ||
    keyword.includes("sekolah") ||
    keyword.includes("kepemerintahan") ||
    keyword.includes("pemerintahan")
  ) {
    return (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
        />
      </svg>
    );
  }

  // Default Icon (Edukasi, Akademi, Karbon, Donasi)
  return (
    <svg
      className="w-6 h-6"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
      />
    </svg>
  );
};

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const [openSidebar, setOpenSidebar] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeSubMobile, setActiveSubMobile] = useState(null);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const langRef = useRef(null);

  const LANGUAGES = [
    { code: "id", label: "ID", name: "Bahasa Indonesia" },
    { code: "en", label: "EN", name: "English" },
    { code: "zh", label: "ZH", name: "中文 (Simplified)" },
  ];

  const currentLang = (i18n.resolvedLanguage || i18n.language || "id")
    .split("-")[0]
    .toLowerCase();

  // Menutup dropdown jika user klik di luar area tombol
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (langRef.current && !langRef.current.contains(event.target)) {
        setIsLangOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLanguageChange = (code) => {
    i18n.changeLanguage(code);
    setIsLangOpen(false);
  };

  return (
    <header className="w-full sticky top-0 z-50">
      {/* Navbar Visuals dengan Efek Kaca (Backdrop Blur) */}
      <nav className="bg-white/85 backdrop-blur-lg border-b border-slate-100 transition-all duration-300 shadow-sm shadow-slate-100/50 relative z-40">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 lg:px-10 py-4">
          {/* Logo EcoCash */}
          <div className="flex items-center shrink-0">
            <Link
              to="/"
              className="flex items-center gap-2 group relative z-50"
            >
              <img
                src={"img/logo.png"}
                alt="Logo EcoCash"
                className="h-10 w-auto transition-transform duration-300 group-hover:scale-105"
              />
            </Link>
          </div>

          {/* Menu Desktop (Layar LG ke atas) */}
          <div className="hidden lg:flex items-center space-x-1">
            {NAV_ITEMS.map((item, index) => {
              const itemName = item.key ? t(`nav.${item.key}`, item.name) : item.name;

              if (item.name === "Marketplace" || item.key === "marketplace") {
                return (
                  <a
                    key={index}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-4 py-2.5 rounded-full font-heading font-bold text-sm tracking-wide transition-all duration-200 focus:outline-none text-slate-600 hover:text-eco-cyan hover:bg-eco-cyan/5"
                  >
                    {itemName}
                  </a>
                );
              }

              return (
                <div
                  key={index}
                  className="relative group cursor-pointer"
                  onMouseEnter={() => setActiveDropdown(index)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button
                    className={`flex items-center gap-1.5 px-4 py-2.5 rounded-full font-heading font-bold text-sm tracking-wide transition-all duration-200 focus:outline-none ${
                      activeDropdown === index
                        ? "text-eco-cyan bg-eco-cyan/5"
                        : "text-slate-600 hover:text-eco-cyan hover:bg-eco-cyan/5"
                    }`}
                  >
                    {itemName}

                    <svg
                      className={`w-4 h-4 transition-transform duration-300 ${
                        activeDropdown === index
                          ? "rotate-180 text-eco-cyan"
                          : "text-slate-400 group-hover:text-eco-cyan"
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>

                  {/* Dropdown Mega Menu */}
                  {activeDropdown === index && item.submenu && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-5 w-[600px] z-50 animate-fadeIn">
                      <div className="bg-white border border-slate-100 shadow-2xl shadow-slate-200/50 rounded-3xl p-6 relative overflow-hidden">
                        <div className="grid grid-cols-2 gap-x-8 gap-y-6 relative z-10">
                          {item.submenu.map((sub, subIdx) => {
                            const subLabel = sub.key ? t(`nav.items.${sub.key}.label`, sub.label) : sub.label;
                            const subText = sub.key ? t(`nav.items.${sub.key}.desc`, sub.text) : sub.text;

                            return (
                              <a
                                key={subIdx}
                                href={sub.url}
                                className="flex items-start gap-4 p-3 -m-3 rounded-2xl hover:bg-slate-50 transition-colors group/link hover:bg-eco-cyan/5 rounded-sm"
                              >
                                {/* Ikon Box Cyan */}
                                <div className="w-12 h-12 rounded-xl bg-eco-cyan/10 text-eco-cyan flex items-center justify-center shrink-0 group-hover/link:scale-105 group-hover/link:bg-eco-cyan group-hover/link:text-white transition-all duration-300">
                                  {getMenuIcon(sub)}
                                </div>

                                {/* Teks Konten */}
                                <div>
                                  <h4 className="text-sm font-bold text-slate-800 font-heading mb-1 group-hover/link:text-eco-cyan transition-colors">
                                    {subLabel}
                                  </h4>
                                  <p className="text-[13px] text-slate-500 font-body leading-relaxed line-clamp-2">
                                    {subText}
                                  </p>
                                </div>
                              </a>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Actions (Bahasa Interaktif & CTA WhatsApp) */}
          <div className="hidden lg:flex items-center space-x-5 relative z-50">
            {/* Dropdown Bahasa Desktop */}
            <div className="relative" ref={langRef}>
              <button
                type="button"
                onClick={() => setIsLangOpen((prev) => !prev)}
                className="text-slate-600 hover:text-eco-cyan font-medium text-sm flex items-center gap-1.5 px-3 py-2 rounded-full hover:bg-slate-100 transition-colors cursor-pointer"
              >
                <span className="text-eco-cyan">🌐</span>
                <span className="uppercase font-semibold">{currentLang}</span>
                <svg
                  className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${
                    isLangOpen ? "rotate-180 text-eco-cyan" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {isLangOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white border border-slate-100 rounded-2xl shadow-xl py-2 z-50 animate-fadeIn">
                  {LANGUAGES.map((lang) => (
                    <button
                      key={lang.code}
                      type="button"
                      onClick={() => handleLanguageChange(lang.code)}
                      className={`w-full px-4 py-2.5 text-left text-sm flex items-center justify-between hover:bg-slate-50 transition-colors cursor-pointer ${
                        currentLang === lang.code
                          ? "text-eco-cyan font-bold bg-eco-cyan/5"
                          : "text-slate-700"
                      }`}
                    >
                      <span>{lang.name}</span>
                      <span className="text-xs uppercase px-1.5 py-0.5 rounded bg-slate-100 text-slate-500 font-semibold">
                        {lang.label}
                      </span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            <a
              href="https://wa.me/6281214161614"
              target="_blank"
              rel="noreferrer"
              className="bg-eco-cyan hover:bg-[#1eb5b1] shadow-lg shadow-eco-cyan/30 text-white px-7 py-3 rounded-full font-heading font-bold text-sm transition-all duration-300 transform hover:-translate-y-0.5 flex items-center gap-2"
            >
              {t("nav.whatsapp", "WhatsApp kami")}
            </a>
          </div>

          {/* Hamburger Button Mobile */}
          <button
            className="lg:hidden p-2 text-slate-700 rounded-full hover:bg-slate-100 focus:outline-none relative z-50"
            onClick={() => setOpenSidebar(true)}
          >
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile & Tablet Sidebar Menu */}
      {openSidebar && (
        <div className="fixed inset-0 z-[100] lg:hidden">
          <div
            className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"
            onClick={() => setOpenSidebar(false)}
          ></div>
          <div className="absolute right-0 top-0 h-full w-[85%] max-w-sm bg-white shadow-2xl flex flex-col justify-between overflow-y-auto custom-scrollbar animate-slideInRight">
            <div className="p-6">
              <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-100">
                <span className="font-heading font-bold text-xl text-slate-900">
                  {t("nav.menuTitle", "Menu Navigasi")}
                </span>
                <button
                  onClick={() => setOpenSidebar(false)}
                  className="p-2 rounded-full hover:bg-slate-100 text-slate-500"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              <div className="flex flex-col space-y-2">
                {NAV_ITEMS.map((item, idx) => {
                  const itemName = item.key ? t(`nav.${item.key}`, item.name) : item.name;

                  if (item.name === "Marketplace" || item.key === "marketplace") {
                    return (
                      <a
                        key={idx}
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setOpenSidebar(false)}
                        className="flex items-center justify-between font-heading text-base font-bold px-5 py-3.5 rounded-xl transition-all text-slate-700 hover:bg-slate-50"
                      >
                        {itemName}
                      </a>
                    );
                  }

                  return (
                    <div key={idx} className="flex flex-col cursor-pointer">
                      <button
                        onClick={() =>
                          setActiveSubMobile(
                            activeSubMobile === idx ? null : idx
                          )
                        }
                        className={`flex items-center justify-between font-heading text-base font-bold px-5 py-3.5 rounded-xl transition-all ${
                          activeSubMobile === idx
                            ? "bg-eco-cyan/10 text-eco-cyan"
                            : "text-slate-700 hover:bg-slate-50"
                        }`}
                      >
                        {itemName}

                        <svg
                          className={`w-5 h-5 transition-transform duration-300 ${
                            activeSubMobile === idx ? "rotate-180" : ""
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </button>

                      {activeSubMobile === idx && item.submenu && (
                        <div className="pl-4 pr-2 py-3 flex flex-col gap-3 border-l-2 border-eco-cyan/30 ml-6 mt-1 mb-2">
                          {item.submenu.map((sub, sIdx) => {
                            const subLabel = sub.key ? t(`nav.items.${sub.key}.label`, sub.label) : sub.label;
                            const subText = sub.key ? t(`nav.items.${sub.key}.desc`, sub.text) : sub.text;

                            return (
                              <a
                                key={sIdx}
                                href={sub.url}
                                onClick={() => setOpenSidebar(false)}
                                className="flex flex-col gap-0.5 px-4 py-2 rounded-xl transition-colors hover:bg-slate-50 group"
                              >
                                <span className="font-heading text-sm font-bold text-slate-800 group-hover:text-eco-cyan">
                                  {subLabel}
                                </span>
                                <span className="font-body text-[13px] text-slate-500 leading-snug">
                                  {subText}
                                </span>
                              </a>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Mobile Drawer Actions (Pilihan Bahasa & CTA WhatsApp) */}
            <div className="p-6 border-t border-slate-100 bg-slate-50 mt-auto flex flex-col gap-4">
              <div className="flex items-center justify-between bg-white p-1 rounded-xl border border-slate-200 shadow-sm">
                {LANGUAGES.map((lang) => (
                  <button
                    key={lang.code}
                    type="button"
                    onClick={() => handleLanguageChange(lang.code)}
                    className={`flex-1 py-2 text-xs font-heading font-bold rounded-lg transition-all ${
                      currentLang === lang.code
                        ? "bg-eco-cyan text-white shadow-sm"
                        : "text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    {lang.label}
                  </button>
                ))}
              </div>

              <a
                href="https://wa.me/6281214161614"
                target="_blank"
                rel="noreferrer"
                className="w-full bg-eco-cyan hover:bg-[#1eb5b1] text-white font-heading font-bold py-3.5 rounded-xl flex items-center justify-center shadow-lg shadow-eco-cyan/30 transition-all transform hover:-translate-y-0.5 text-sm"
              >
                {t("nav.whatsappMobile", "Hubungi via WhatsApp")}
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}