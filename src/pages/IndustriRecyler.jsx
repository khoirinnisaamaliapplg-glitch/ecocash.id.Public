import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import BotAssistant from "../components/bot/BotAssistant";

export default function IndustriRecyler() {
  const { t } = useTranslation();
  const [botFlowData, setBotFlowData] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    const fetchBotTree = async () => {
      try {
        const apiUrl =
          import.meta.env.VITE_API_BASE_URL ||
          import.meta.env.VITE_API_URL ||
          "https://api.ecocash.id/api/v1";

        const response = await fetch(`${apiUrl}/bot/tree`);

        if (!response.ok) throw new Error("Gagal mengambil data");

        const result = await response.json();

        if (result.success && result.data) {
          setBotFlowData(result.data);
        }
      } catch (err) {
        console.error("Kesalahan API Bot:", err.message);
      }
    };

    fetchBotTree();
  }, []);

  return (
    <main className="w-full min-h-screen bg-white">
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden bg-slate-50 border-b border-slate-100">
        <div className="absolute inset-0 z-0">
          <img
            src="img/bg-industri.png"
            alt="Fasilitas Daur Ulang Skala Industri"
            className="w-full h-full object-cover object-right"
            onError={(e) => {
              e.target.style.display = "none";
              e.target.parentElement.classList.add("bg-slate-100");
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 bg-slate-100 text-slate-600 px-4 py-2 rounded-full font-heading text-xs font-bold tracking-wider uppercase border border-slate-200 mb-6 shadow-sm">
              <svg
                className="w-4 h-4 text-eco-cyan"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                />
              </svg>
              {t("industriRecycler.badge", "B2B Services")}
            </span>

            <h1 className="text-4xl md:text-5xl lg:text-[54px] font-extrabold text-slate-900 font-heading leading-[1.2] mb-6">
              {t("industriRecycler.heroTitle1", "Jaminan Pasokan")}{" "}
              <br className="hidden md:block" />
              {t("industriRecycler.heroTitle2", "Bahan Baku Daur Ulang")}{" "}
              <br className="hidden md:block" />
              {t("industriRecycler.heroTitle3", "Berkualitas Skala Industri")}
            </h1>

            <p className="text-base sm:text-lg text-slate-600 font-body mb-8 leading-relaxed max-w-xl">
              {t(
                "industriRecycler.heroDesc",
                "Solusi rantai pasok sirkular yang transparan dan terukur untuk kebutuhan bahan baku industri manufaktur dan daur ulang Anda.",
              )}
            </p>

            <Link
              to="/partnership"
              className="inline-flex items-center gap-3 bg-eco-cyan hover:bg-[#1eb5b1] text-white px-8 py-4 rounded-xl font-heading font-bold text-[15px] transition-all transform hover:-translate-y-0.5 shadow-lg shadow-eco-cyan/30"
            >
              {t("industriRecycler.heroBtn", "Bermitra Sebagai Recycler")}
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* 2. VALUE PROPOSITION SECTION */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 font-heading mb-4">
              {t(
                "industriRecycler.valueTitle",
                "Mengapa Bermitra dengan EcoCash?",
              )}
            </h2>
            <p className="text-lg text-slate-600 font-body">
              {t(
                "industriRecycler.valueSubtitle",
                "Standar industri yang kami terapkan untuk memastikan kelancaran operasi pabrik Anda.",
              )}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-10 rounded-3xl shadow-sm hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 border border-slate-100 flex flex-col group">
              <div className="w-16 h-16 bg-[#f0f6ff] text-slate-700 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.792 0-5.484-.285-8.07-1.127-1.717-.293-2.3-2.379-1.067-3.61L5 14.5"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold font-heading text-slate-900 mb-3">
                {t("industriRecycler.card1Title", "High-Purity Material")}
              </h3>
              <p className="text-slate-600 font-body text-sm leading-relaxed">
                {t(
                  "industriRecycler.card1Desc",
                  "<2% Contamination Rate. Standar kualitas tinggi dengan pemilahan sensor optik AI.",
                )}
              </p>
            </div>

            <div className="bg-white p-10 rounded-3xl shadow-sm hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 border border-slate-100 flex flex-col group">
              <div className="w-16 h-16 bg-[#f0f6ff] text-slate-700 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold font-heading text-slate-900 mb-3">
                {t("industriRecycler.card2Title", "Complete Chain-of-Custody")}
              </h3>
              <p className="text-slate-600 font-body text-sm leading-relaxed">
                {t(
                  "industriRecycler.card2Desc",
                  "Traceability & audit data material transparan untuk laporan keberlanjutan (ESG) perusahaan.",
                )}
              </p>
            </div>

            <div className="bg-white p-10 rounded-3xl shadow-sm hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 border border-slate-100 flex flex-col group">
              <div className="w-16 h-16 bg-[#f0f6ff] text-slate-700 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg
                  className="w-8 h-8"
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
              </div>
              <h3 className="text-xl font-bold font-heading text-slate-900 mb-3">
                {t("industriRecycler.card3Title", "Bulk Ton-scale Logistics")}
              </h3>
              <p className="text-slate-600 font-body text-sm leading-relaxed">
                {t(
                  "industriRecycler.card3Desc",
                  "Pengiriman terjadwal dengan armada truk terintegrasi untuk volume skala industri.",
                )}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bot Assistant */}
      <BotAssistant botFlowData={botFlowData} />
    </main>
  );
}
