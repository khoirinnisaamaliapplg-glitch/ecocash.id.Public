import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import BotAssistant from "../components/bot/BotAssistant";

export default function CaraKerjaTeknologiRVM() {
  const { t } = useTranslation();
  const [botFlowData, setBotFlowData] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    const fetchBotTree = async () => {
      try {
        const apiUrl =
          import.meta.env.VITE_API_BASE_URL ||
          import.meta.env.VITE_API_URL ||
          "http://localhost:3000/api/v1";
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
    <main className="w-full min-h-screen bg-[#fafafc] font-body text-slate-700 pb-24">
      {/* 1. HEADER SECTION */}
      <section className="pt-32 lg:pt-40 px-6 max-w-4xl mx-auto text-center mb-16">
        <h1 className="text-3xl md:text-4xl lg:text-[42px] font-extrabold text-slate-900 font-heading leading-tight mb-6 tracking-tight">
          {t("teknoRvm.heroTitle", "Teknologi AI, IoT, dan Sensor Presisi di Balik EcoCash RVM")}
        </h1>
        <p className="text-slate-500 font-body text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
          {t(
            "teknoRvm.heroDesc",
            "Infrastruktur cerdas yang mengotomatisasi ekonomi sirkular dengan validasi data real-time dan efisiensi operasional maksimal."
          )}
        </p>
      </section>

      {/* 2. GRID KARTU FITUR TEKNOLOGI */}
      <section className="max-w-6xl mx-auto px-6 mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {/* Card 1 */}
          <div className="bg-white p-8 md:p-10 rounded-2xl border border-slate-100 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-[#e0f8f7] text-eco-cyan rounded-xl flex items-center justify-center mb-6">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8V6a2 2 0 012-2h2M3 16v2a2 2 0 002 2h2M21 8V6a2 2 0 00-2-2h-2M21 16v2a2 2 0 01-2 2h-2M9 9h6v6H9z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold font-heading text-slate-900 mb-3">
              {t("teknoRvm.card1Title", "AI Optical & Barcode Scanner")}
            </h3>
            <p className="text-slate-500 font-body text-[15px] leading-relaxed">
              {t(
                "teknoRvm.card1Desc",
                "Validasi otomatis jenis plastik, warna, dan keaslian kemasan menggunakan computer vision untuk mencegah kontaminasi."
              )}
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-8 md:p-10 rounded-2xl border border-slate-100 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-[#e0f8f7] text-eco-cyan rounded-xl flex items-center justify-center mb-6">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 3h12l-4 8 4 8H6l4-8-4-8z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12h6" />
              </svg>
            </div>
            <h3 className="text-xl font-bold font-heading text-slate-900 mb-3">
              {t("teknoRvm.card2Title", "Digital Load Cell")}
            </h3>
            <p className="text-slate-500 font-body text-[15px] leading-relaxed">
              {t(
                "teknoRvm.card2Desc",
                "Sensor timbangan presisi multi-titik yang memastikan akurasi data berat setiap botol yang masuk dengan toleransi minimal."
              )}
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-8 md:p-10 rounded-2xl border border-slate-100 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-[#e0f8f7] text-eco-cyan rounded-xl flex items-center justify-center mb-6">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 3v18h18" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7 14l4-4 4 4 6-6" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 8v4M21 8h-4" />
              </svg>
            </div>
            <h3 className="text-xl font-bold font-heading text-slate-900 mb-3">
              {t("teknoRvm.card3Title", "MQTT Real-Time Telemetry")}
            </h3>
            <p className="text-slate-500 font-body text-[15px] leading-relaxed">
              {t(
                "teknoRvm.card3Desc",
                "Monitoring status kesehatan mesin, suhu, dan level kepenuhan secara instan untuk optimasi rute logistik penjemputan."
              )}
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-white p-8 md:p-10 rounded-2xl border border-slate-100 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-[#e0f8f7] text-eco-cyan rounded-xl flex items-center justify-center mb-6">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 3v6m0 0l-3-3m3 3l3-3" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 21v-6m0 0l-3 3m3-3l3 3" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 12h14" />
              </svg>
            </div>
            <h3 className="text-xl font-bold font-heading text-slate-900 mb-3">
              {t("teknoRvm.card4Title", "Internal Smart Compactor")}
            </h3>
            <p className="text-slate-500 font-body text-[15px] leading-relaxed">
              {t(
                "teknoRvm.card4Desc",
                "Sistem pemadat botol otomatis yang meningkatkan kapasitas tampungan hingga 5x lipat, mengurangi frekuensi pickup dan jejak karbon."
              )}
            </p>
          </div>
        </div>
      </section>

      {/* 3. SECTION: ARSITEKTUR SISTEM & ALUR DATA */}
      <section className="px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-extrabold text-center text-slate-900 font-heading mb-10">
          {t("teknoRvm.archTitle", "Arsitektur Sistem & Alur Data")}
        </h2>

        <div className="bg-white p-8 md:p-12 lg:p-16 rounded-[2rem] border border-slate-100 shadow-[0_4px_24px_rgb(0,0,0,0.04)] flex flex-col items-center">
          <div className="w-full max-w-3xl mb-12 relative flex justify-center">
            <img
              src="img/tech-arch-system.png"
              alt="Diagram Arsitektur Sistem EcoCash"
              className="w-full h-auto object-contain"
              onError={(e) => {
                e.target.style.display = "none";
                e.target.parentElement.innerHTML = `<div class="w-full h-[350px] flex items-center justify-center bg-slate-50 text-slate-400 font-body text-sm text-center p-6 border-2 border-dashed border-slate-200 rounded-2xl">tech-arch-system.png</div>`;
              }}
            />
          </div>

          {/* Legenda Flow */}
          <div className="flex flex-wrap items-center justify-center gap-3 md:gap-5 text-xs md:text-sm text-slate-500 font-body font-medium bg-slate-50 py-3 px-6 rounded-full border border-slate-100">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-eco-cyan"></span>
              {t("teknoRvm.flowMachine", "Machine IoT")}
            </div>
            <svg className="w-4 h-4 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>

            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-eco-cyan"></span>
              {t("teknoRvm.flowMqtt", "MQTT Broker")}
            </div>
            <svg className="w-4 h-4 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>

            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-eco-cyan"></span>
              {t("teknoRvm.flowExpress", "Express Engine")}
            </div>
            <svg className="w-4 h-4 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>

            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-eco-cyan"></span>
              {t("teknoRvm.flowApp", "User Mobile App")}
            </div>
          </div>
        </div>
      </section>

      {/* Bot Assistant */}
      <BotAssistant botFlowData={botFlowData} />
    </main>
  );
}