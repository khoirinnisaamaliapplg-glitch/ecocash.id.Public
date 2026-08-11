import React, { useState } from "react";
import { NAV_ITEMS } from "../../constants/dummyData";
// import logoImg from "img/logo.png";
// import waIcon from "img/wa.png";

export default function Navbar() {
  const [openSidebar, setOpenSidebar] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeSubMobile, setActiveSubMobile] = useState(null);

  return (
    <header className="w-full sticky top-0 z-50">
      {/* Navbar Visuals dengan Efek Kaca (Backdrop Blur) */}
      <nav className="bg-white/85 backdrop-blur-lg border-b border-slate-100 transition-all duration-300 shadow-sm shadow-slate-100/50 relative z-40">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 lg:px-10 py-4">
          {/* Logo EcoCash */}
          <div className="flex items-center shrink-0">
            <a href="/" className="flex items-center gap-2 group relative z-50">
              <img
                src={"img/logo.png"}
                alt="Logo EcoCash"
                className="h-10 w-auto transition-transform duration-300 group-hover:scale-105"
              />
            </a>
          </div>

          {/* Menu Desktop (Layar LG ke atas) */}
          <div className="hidden lg:flex items-center space-x-1">
            {NAV_ITEMS.map((item, index) => (
              <div
                key={index}
                className="relative group"
                onMouseEnter={() => setActiveDropdown(index)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                {/* Tombol Navigasi Utama (Kapsul) */}
                <button className="flex items-center gap-1.5 px-4 py-2.5 rounded-full font-heading font-bold text-slate-600 hover:text-emerald-900 hover:bg-teal-500/10 transition-all duration-200 text-sm tracking-wide focus:outline-none">
                  {item.name}
                  <svg
                    className={`w-4 h-4 text-slate-400 group-hover:text-emerald-900 transition-transform duration-300 ${activeDropdown === index ? "rotate-180" : ""}`}
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

                {/* Dropdown Content */}
                {activeDropdown === index && (
                  <div className="absolute top-full left-0 pt-3 w-64 z-50">
                    <div className="bg-white/95 backdrop-blur-xl border border-slate-100 shadow-xl shadow-slate-200/60 rounded-3xl p-3 flex flex-col gap-1 relative overflow-hidden">
                      {/* Aksen Garis Kombinasi Hijau-Biru Booth Pameran */}
                      <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-eco-dark to-sky-accent"></div>

                      {item.submenu.map((sub, subIdx) => (
                        <a
                          key={subIdx}
                          href={sub.url}
                          className="flex items-center px-4 py-3 rounded-full font-heading text-sm font-semibold text-slate-600 hover:text-emerald-900 hover:bg-teal-500/10 transition-all duration-200 group/link"
                        >
                          <span className="transform group-hover/link:translate-x-1 transition-transform duration-200">
                            {sub.label}
                          </span>
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Actions (Bahasa & CTA WhatsApp) */}
          <div className="hidden lg:flex items-center space-x-5 relative z-50">
            <button className="text-slate-600 hover:text-emerald-900 font-medium text-sm flex items-center gap-1.5 px-3 py-2 rounded-full hover:bg-slate-100 transition">
              🌐 <span>ID</span>
              <svg
                className="w-4 h-4 text-slate-400"
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

            {/* Tombol CTA WhatsApp */}
            <a
              href="https://wa.me/6281214161614"
              target="_blank"
              rel="noreferrer"
              className="bg-eco-light hover:bg-eco-light shadow-led-glow text-white px-7 py-3 rounded-full font-heading font-bold text-sm transition-all duration-300 transform hover:-translate-y-0.5 flex items-center gap-2"
            >
              <span>WhatsApp kami</span>
            </a>
          </div>

          {/* Hamburger Button Mobile / Tablet */}
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
          {/* Overlay Blur */}
          <div
            className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"
            onClick={() => setOpenSidebar(false)}
          ></div>

          {/* Sidebar Content */}
          <div className="absolute right-0 top-0 h-full w-[85%] max-w-sm bg-white shadow-2xl flex flex-col justify-between overflow-y-auto custom-scrollbar">
            <div className="p-6">
              <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-100">
                <span className="font-heading font-bold text-xl text-slate-900">
                  Menu Navigasi
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
                {NAV_ITEMS.map((item, idx) => (
                  <div key={idx} className="flex flex-col">
                    <button
                      onClick={() =>
                        setActiveSubMobile(activeSubMobile === idx ? null : idx)
                      }
                      className={`flex items-center justify-between font-heading text-base font-bold px-5 py-3.5 rounded-full transition-all ${activeSubMobile === idx ? "bg-teal-500/10 text-eco-dark" : "text-slate-700 hover:bg-slate-50"}`}
                    >
                      {item.name}
                      <svg
                        className={`w-5 h-5 transition-transform duration-300 ${activeSubMobile === idx ? "rotate-180" : ""}`}
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

                    {activeSubMobile === idx && (
                      <div className="pl-4 pr-2 py-2 flex flex-col gap-1 border-l-2 border-teal-500/30 ml-6 mt-1 mb-2">
                        {item.submenu.map((sub, sIdx) => (
                          <a
                            key={sIdx}
                            href={sub.url}
                            onClick={() => setOpenSidebar(false)}
                            className="font-body text-sm font-semibold text-slate-600 hover:text-eco-dark hover:bg-teal-500/10 px-4 py-2.5 rounded-full transition-colors"
                          >
                            {sub.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Footer Sidebar Mobile (CTA) */}
            <div className="p-6 border-t border-slate-100 bg-slate-50 mt-auto">
              <a
                href="https://wa.me/6281214161614"
                target="_blank"
                rel="noreferrer"
                className="w-full bg-[#f97316] hover:bg-orange-600 text-white font-heading font-bold py-4 rounded-full flex items-center justify-center shadow-led-glow transition-all transform hover:-translate-y-0.5"
              >
                Hubungi via WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
