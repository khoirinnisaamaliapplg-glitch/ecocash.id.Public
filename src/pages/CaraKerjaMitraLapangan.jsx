import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import BotAssistant from "../components/bot/BotAssistant";

export default function CaraKerjaMitraLapangan() {
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
    <main className="w-full min-h-screen bg-[#fafafc] font-body text-slate-700 pb-20">
      {/* 1. HERO SECTION */}
      <section className="pt-32 lg:pt-40 pb-20 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Hero Teks */}
          <div className="max-w-xl">
            <h1 className="text-4xl md:text-5xl lg:text-[46px] font-extrabold text-slate-900 font-heading leading-[1.25] mb-6 tracking-tight">
              {t("caraKerjaMitra.heroTitle", "Alur Kerja Mitra Penjemput: Transparan, Pasti, Langsung Cair")}
            </h1>

            <p className="text-base sm:text-lg text-slate-500 font-body mb-10 leading-relaxed max-w-lg">
              {t(
                "caraKerjaMitra.heroDesc",
                "Sistem logistik cerdas yang memudahkan operasional harian Anda dengan dukungan teknologi IoT dan otomasi pembayaran."
              )}
            </p>

            <Link
              to="/daftar-kemitraan"
              className="inline-flex items-center justify-center bg-eco-cyan hover:bg-[#1eb5b1] text-white px-8 py-3.5 rounded-lg font-heading font-bold text-sm transition-all transform hover:-translate-y-0.5 shadow-lg shadow-eco-cyan/30"
            >
              {t("caraKerjaMitra.heroBtn", "Daftar Jadi Mitra")}
            </Link>
          </div>

          {/* Hero Gambar */}
          <div className="relative w-full flex justify-center lg:justify-end">
            <div className="absolute top-1/2 right-10 -translate-y-1/2 w-72 h-72 bg-eco-cyan/10 blur-[80px] rounded-full -z-10"></div>

            <div className="relative w-full max-w-[550px] rounded-2xl overflow-hidden shadow-xl shadow-slate-200/50 bg-white border border-slate-100">
              <img
                src="img/hero-mitra-lapang.png"
                alt="Ilustrasi Mitra Lapangan EcoCash"
                className="w-full h-auto object-cover"
                onError={(e) => {
                  e.target.style.display = "none";
                  e.target.parentElement.innerHTML = `<div class="w-full h-[350px] flex items-center justify-center bg-slate-50 text-slate-400 font-body text-sm text-center p-6 border-2 border-dashed border-slate-200 rounded-2xl">Siapkan gambar hero-mitra-lapang.png</div>`;
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. SECTION: CARA KERJA MITRA (TIMELINE VERTIKAL) */}
      <section className="py-24 bg-white border-y border-slate-100">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center text-slate-900 font-heading mb-20">
            {t("caraKerjaMitra.timelineTitle", "Cara Kerja Mitra")}
          </h2>

          <div className="relative">
            {/* Garis Tengah (Desktop) */}
            <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-4 bottom-4 w-px bg-slate-200"></div>
            {/* Garis Kiri (Mobile) */}
            <div className="md:hidden absolute left-4 top-4 bottom-4 w-px bg-slate-200"></div>

            {/* Langkah 1 */}
            <div className="relative flex flex-col md:flex-row items-start md:items-center w-full mb-16 md:mb-20">
              <div className="md:w-1/2 md:pr-16 md:text-right w-full pl-12 md:pl-0">
                <h3 className="text-xl font-bold font-heading text-slate-900 mb-3">
                  {t("caraKerjaMitra.step1Title", "Notifikasi Job Otomatis")}
                </h3>
                <p className="text-slate-500 font-body text-sm leading-relaxed max-w-sm ml-auto">
                  {t(
                    "caraKerjaMitra.step1Desc",
                    "Menerima pesanan penjemputan secara otomatis saat sensor RVM mendeteksi kapasitas penuh."
                  )}
                </p>
              </div>
              <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-eco-cyan text-white flex items-center justify-center font-bold text-sm shadow-md shadow-eco-cyan/30 ring-4 ring-white mt-1 md:mt-0">
                1
              </div>
              <div className="md:w-1/2 hidden md:block"></div>
            </div>

            {/* Langkah 2 */}
            <div className="relative flex flex-col md:flex-row items-start md:items-center w-full mb-16 md:mb-20">
              <div className="md:w-1/2 hidden md:block"></div>
              <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-eco-cyan text-white flex items-center justify-center font-bold text-sm shadow-md shadow-eco-cyan/30 ring-4 ring-white mt-1 md:mt-0">
                2
              </div>
              <div className="md:w-1/2 md:pl-16 w-full pl-12">
                <h3 className="text-xl font-bold font-heading text-slate-900 mb-3">
                  {t("caraKerjaMitra.step2Title", "Navigasi Rute Cepat")}
                </h3>
                <p className="text-slate-500 font-body text-sm leading-relaxed max-w-sm">
                  {t(
                    "caraKerjaMitra.step2Desc",
                    "Optimasi rute perjalanan menggunakan peta geospasial untuk efisiensi waktu dan bahan bakar."
                  )}
                </p>
              </div>
            </div>

            {/* Langkah 3 */}
            <div className="relative flex flex-col md:flex-row items-start md:items-center w-full">
              <div className="md:w-1/2 md:pr-16 md:text-right w-full pl-12 md:pl-0">
                <h3 className="text-xl font-bold font-heading text-slate-900 mb-3">
                  {t("caraKerjaMitra.step3Title", "Smart Digital Unlock")}
                </h3>
                <p className="text-slate-500 font-body text-sm leading-relaxed max-w-sm ml-auto">
                  {t(
                    "caraKerjaMitra.step3Desc",
                    "Buka pintu akses mesin secara aman hanya dengan scan QR melalui aplikasi mitra."
                  )}
                </p>
              </div>
              <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-eco-cyan text-white flex items-center justify-center font-bold text-sm shadow-md shadow-eco-cyan/30 ring-4 ring-white mt-1 md:mt-0">
                3
              </div>
              <div className="md:w-1/2 hidden md:block"></div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SECTION: KEUNGGULAN SISTEM KAMI (3 KARTU) */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-slate-900 font-heading mb-16">
          {t("caraKerjaMitra.advantagesTitle", "Keunggulan Sistem Kami")}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-[#fafafc] p-8 md:p-10 rounded-2xl border border-slate-100/80 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-[#e0f8f7] text-eco-cyan rounded-full flex items-center justify-center mb-6">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 3h12l-4 8 4 8H6l4-8-4-8z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12h6" />
              </svg>
            </div>
            <h3 className="text-lg font-bold font-heading text-slate-900 mb-3">
              {t("caraKerjaMitra.adv1Title", "Timbangan Digital Akurat")}
            </h3>
            <p className="text-slate-500 font-body text-sm leading-relaxed">
              {t(
                "caraKerjaMitra.adv1Desc",
                "Integrasi IoT memastikan data berat sampah tercatat presisi tanpa manipulasi."
              )}
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-[#fafafc] p-8 md:p-10 rounded-2xl border border-slate-100/80 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-[#e0f8f7] text-eco-cyan rounded-full flex items-center justify-center mb-6">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 12a2.25 2.25 0 00-2.25-2.25H15a3 3 0 11-6 0H4.5A2.25 2.25 0 002.25 12v6.75A2.25 2.25 0 004.5 21h15a2.25 2.25 0 002.25-2.25V12zm-9-2.25h.008v.008H12V9.75z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M2.25 9.75v-.375c0-.621.504-1.125 1.125-1.125h15.75c.621 0 1.125.504 1.125 1.125v.375" />
              </svg>
            </div>
            <h3 className="text-lg font-bold font-heading text-slate-900 mb-3">
              {t("caraKerjaMitra.adv2Title", "Jaminan Komisi Instan")}
            </h3>
            <p className="text-slate-500 font-body text-sm leading-relaxed">
              {t(
                "caraKerjaMitra.adv2Desc",
                "Sistem escrow otomatis menjamin hak mitra cair tepat waktu tanpa hambatan administrasi."
              )}
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-[#fafafc] p-8 md:p-10 rounded-2xl border border-slate-100/80 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-[#e0f8f7] text-eco-cyan rounded-full flex items-center justify-center mb-6">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold font-heading text-slate-900 mb-3">
              {t("caraKerjaMitra.adv3Title", "Proteksi Order Adil")}
            </h3>
            <p className="text-slate-500 font-body text-sm leading-relaxed">
              {t(
                "caraKerjaMitra.adv3Desc",
                "Algoritma pembagian order yang merata berdasarkan radius terdekat dan performa mitra."
              )}
            </p>
          </div>
        </div>
      </section>

      {/* Bot Assistant */}
      <BotAssistant botFlowData={botFlowData} />
    </main>
  );
}