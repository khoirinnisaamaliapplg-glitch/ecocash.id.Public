import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import BotAssistant from "../components/bot/BotAssistant";

export default function CaraKerjaPengguna() {
  const { t, i18n } = useTranslation();
  const [botFlowData, setBotFlowData] = useState(null);
  const [materials, setMaterials] = useState({ accepted: [], rejected: [] });

  const currentLang = (i18n.resolvedLanguage || i18n.language || "id")
    .split("-")[0]
    .toLowerCase();

  const apiUrl =
    import.meta.env.VITE_API_BASE_URL ||
    import.meta.env.VITE_API_URL ||
    "http://localhost:3000/api/v1";

  useEffect(() => {
    window.scrollTo(0, 0);

    // 1. Fetch data Bot Flow dari API
    const fetchBotTree = async () => {
      try {
        const apiUrl =
          import.meta.env.VITE_API_URL_LOCAL || "http://localhost:3000/api/v1";

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

    // 2. Fetch panduan material dari Backend PostgreSQL sesuai bahasa aktif
    const fetchMaterials = async () => {
      try {
        const response = await fetch(`${apiUrl}/recycle-materials?lang=${currentLang}`);
        if (!response.ok) throw new Error("Gagal mengambil materi");
        const result = await response.json();
        const rawItems = Array.isArray(result.data)
          ? result.data
          : Array.isArray(result.data?.items)
          ? result.data.items
          : [];

        if (rawItems.length > 0) {
          const acc = rawItems.filter(
            (item) =>
              item.rawStatus === "ACCEPTED" ||
              item.status === "ACCEPTED" ||
              item.status === "Diterima" ||
              item.status === "Accepted" ||
              item.status === "已接收"
          );
          const rej = rawItems.filter(
            (item) =>
              item.rawStatus === "REJECTED" ||
              item.status === "REJECTED" ||
              item.status === "Ditolak" ||
              item.status === "Rejected" ||
              item.status === "已拒收"
          );
          setMaterials({ accepted: acc, rejected: rej });
        }
      } catch {
        // Mode offline/fallback ditangani otomatis
      }
    };

    fetchBotTree();
    fetchMaterials();
  }, [apiUrl, currentLang]);

  return (
    <main className="w-full min-h-screen bg-[#fafafc] font-body text-slate-700 pb-20">
      {/* 1. SECTION: HERO & 4 LANGKAH MUDAH */}
      <section className="pt-32 lg:pt-40 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl lg:text-[42px] font-extrabold text-slate-900 font-heading leading-tight mb-6">
            {t("caraKerjaPengguna.heroTitle", "Setor Botol, Kumpulkan Saldo dalam 4 Langkah Mudah")}
          </h1>
          <p className="text-slate-500 font-body text-base md:text-lg max-w-2xl mx-auto mb-8">
            {t(
              "caraKerjaPengguna.heroDesc",
              "Ikuti panduan praktis untuk mulai berkontribusi pada lingkungan sambil mendapatkan reward digital."
            )}
          </p>

          {/* Badge Poin */}
          <div className="inline-flex items-center gap-2 bg-[#e0f8f7] text-eco-cyan px-5 py-2 rounded-full font-bold text-sm shadow-sm border border-eco-cyan/20">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.5 2.5c-4.5 0-8.5 2.5-10.5 6.5-1.5 3-2 6.5-1.5 9.5l-3.5 3.5 1.5 1.5 3.5-3.5c3 .5 6.5 0 9.5-1.5 4-2 6.5-6 6.5-10.5v-5.5h-5.5zm-2.5 9.5c-1.5 1.5-3.5 2.5-6 2.5-.5-2.5.5-4.5 2-6 1.5-1.5 3.5-2.5 6-2.5.5 2.5-.5 4.5-2 6z" />
            </svg>
            {t("caraKerjaPengguna.pointBadge", "1 Botol = 10 Poin")}
          </div>
        </div>

        {/* Grid 4 Langkah */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Langkah 1 */}
          <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-full bg-[#e0f8f7] text-eco-cyan flex items-center justify-center font-bold font-heading mb-6">
              1
            </div>
            <div className="text-eco-cyan mb-4">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
              </svg>
            </div>
            <h3 className="text-lg font-bold font-heading text-slate-900 mb-2">
              {t("caraKerjaPengguna.step1Title", "Unduh & Daftar")}
            </h3>
            <p className="text-slate-500 font-body text-sm leading-relaxed">
              {t(
                "caraKerjaPengguna.step1Desc",
                "Download aplikasi EcoCash di Play Store atau App Store dan buat akun Anda."
              )}
            </p>
          </div>

          {/* Langkah 2 */}
          <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-full bg-[#e0f8f7] text-eco-cyan flex items-center justify-center font-bold font-heading mb-6">
              2
            </div>
            <div className="text-eco-cyan mb-4">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold font-heading text-slate-900 mb-2">
              {t("caraKerjaPengguna.step2Title", "Cari RVM Terdekat")}
            </h3>
            <p className="text-slate-500 font-body text-sm leading-relaxed">
              {t(
                "caraKerjaPengguna.step2Desc",
                "Gunakan fitur peta di aplikasi untuk menemukan lokasi mesin RVM EcoCash di sekitar Anda."
              )}
            </p>
          </div>

          {/* Langkah 3 */}
          <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-full bg-[#e0f8f7] text-eco-cyan flex items-center justify-center font-bold font-heading mb-6">
              3
            </div>
            <div className="text-eco-cyan mb-4">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3.75 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 013.75 9.375v-4.5zM3.75 14.625c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 01-1.125-1.125v-4.5zM13.5 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0113.5 9.375v-4.5z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16.5 16.5h.008v.008h-.008v-.008zM13.5 16.5h.008v.008h-.008v-.008zM19.5 16.5h.008v.008h-.008v-.008zM13.5 13.5h.008v.008h-.008v-.008zM19.5 13.5h.008v.008h-.008v-.008zM16.5 19.5h.008v.008h-.008v-.008z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold font-heading text-slate-900 mb-2">
              {t("caraKerjaPengguna.step3Title", "Scan & Setor")}
            </h3>
            <p className="text-slate-500 font-body text-sm leading-relaxed">
              {t(
                "caraKerjaPengguna.step3Desc",
                "Scan QR code di layar mesin RVM, masukkan botol satu per satu, dan biarkan AI memvalidasi."
              )}
            </p>
          </div>

          {/* Langkah 4 */}
          <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-full bg-[#e0f8f7] text-eco-cyan flex items-center justify-center font-bold font-heading mb-6">
              4
            </div>
            <div className="text-eco-cyan mb-4">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 12a2.25 2.25 0 00-2.25-2.25H15a3 3 0 11-6 0H4.5A2.25 2.25 0 002.25 12v6.75A2.25 2.25 0 004.5 21h15a2.25 2.25 0 002.25-2.25V12zm-9-2.25h.008v.008H12V9.75z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M2.25 9.75v-.375c0-.621.504-1.125 1.125-1.125h15.75c.621 0 1.125.504 1.125 1.125v.375" />
              </svg>
            </div>
            <h3 className="text-lg font-bold font-heading text-slate-900 mb-2">
              {t("caraKerjaPengguna.step4Title", "Terima Saldo")}
            </h3>
            <p className="text-slate-500 font-body text-sm leading-relaxed">
              {t(
                "caraKerjaPengguna.step4Desc",
                "Reward akan langsung masuk ke saldo digital Anda setelah sesi setor selesai."
              )}
            </p>
          </div>
        </div>
      </section>

      {/* 2. SECTION: PANDUAN MATERIAL */}
      <section className="py-24 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-extrabold text-center text-slate-900 font-heading mb-12">
          {t("caraKerjaPengguna.materialTitle", "Panduan Material")}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card Wadah Diterima */}
          <div className="bg-white p-8 md:p-10 rounded-2xl border border-slate-100 shadow-sm border-l-4 border-l-[#16a34a]">
            <div className="flex items-center gap-3 mb-8">
              <svg className="w-7 h-7 text-[#16a34a]" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
              </svg>
              <h3 className="text-xl font-bold font-heading text-slate-900">
                {t("caraKerjaPengguna.acceptedTitle", "Wadah Diterima")}
              </h3>
            </div>

            <ul className="space-y-5">
              {materials.accepted.length > 0 ? (
                materials.accepted.slice(0, 3).map((item) => (
                  <li key={item.id} className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center text-[#16a34a] shrink-0">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-slate-600 font-body text-sm">{item.name}</span>
                  </li>
                ))
              ) : (
                <>
                  <li className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center text-[#16a34a] shrink-0">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7.5 4.5V3h9v1.5L18 8v11.25c0 .828-.672 1.5-1.5 1.5h-9A1.5 1.5 0 016 19.25V8l1.5-3.5zM10.5 3v1.5m3-1.5v1.5" />
                      </svg>
                    </div>
                    <span className="text-slate-600 font-body text-sm">
                      {t("caraKerjaPengguna.acc1", "Botol Plastik PET (Bening/Warna)")}
                    </span>
                  </li>
                  <li className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center text-[#16a34a] shrink-0">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 7.5v9A2.25 2.25 0 008.25 18.75h7.5A2.25 2.25 0 0018 16.5v-9M6 7.5a2.25 2.25 0 012.25-2.25h7.5A2.25 2.25 0 0118 7.5m-12 0C6 8.743 8.686 9.75 12 9.75s6-1.007 6-2.25" />
                      </svg>
                    </div>
                    <span className="text-slate-600 font-body text-sm">
                      {t("caraKerjaPengguna.acc2", "Kaleng Aluminium")}
                    </span>
                  </li>
                  <li className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center text-[#16a34a] shrink-0">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
                      </svg>
                    </div>
                    <span className="text-slate-600 font-body text-sm">
                      {t("caraKerjaPengguna.acc3", "Karton Minuman")}
                    </span>
                  </li>
                </>
              )}
            </ul>
          </div>

          {/* Card Wadah Ditolak */}
          <div className="bg-white p-8 md:p-10 rounded-2xl border border-slate-100 shadow-sm border-l-4 border-l-[#dc2626]">
            <div className="flex items-center gap-3 mb-8">
              <svg className="w-7 h-7 text-[#dc2626]" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z" clipRule="evenodd" />
              </svg>
              <h3 className="text-xl font-bold font-heading text-slate-900">
                {t("caraKerjaPengguna.rejectedTitle", "Wadah Ditolak")}
              </h3>
            </div>

            <ul className="space-y-5">
              {materials.rejected.length > 0 ? (
                materials.rejected.slice(0, 4).map((item) => (
                  <li key={item.id} className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center text-[#dc2626] shrink-0">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </div>
                    <span className="text-slate-600 font-body text-sm">{item.name}</span>
                  </li>
                ))
              ) : (
                <>
                  <li className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center text-[#dc2626] shrink-0">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </div>
                    <span className="text-slate-600 font-body text-sm">
                      {t("caraKerjaPengguna.rej1", "Botol Kaca")}
                    </span>
                  </li>
                  <li className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center text-[#dc2626] shrink-0">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </div>
                    <span className="text-slate-600 font-body text-sm">
                      {t("caraKerjaPengguna.rej2", "Plastik Kotor/Berminyak")}
                    </span>
                  </li>
                  <li className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center text-[#dc2626] shrink-0">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </div>
                    <span className="text-slate-600 font-body text-sm">
                      {t("caraKerjaPengguna.rej3", "Saset")}
                    </span>
                  </li>
                  <li className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center text-[#dc2626] shrink-0">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </div>
                    <span className="text-slate-600 font-body text-sm">
                      {t("caraKerjaPengguna.rej4", "Gelas Sekali Pakai")}
                    </span>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </section>

      {/* 3. SECTION: CALL TO ACTION (CTA) */}
      <section className="px-6 max-w-5xl mx-auto mb-10">
        <div className="bg-[#eaf1fb] p-12 md:p-16 rounded-[2rem] text-center shadow-sm">
          <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 font-heading mb-4">
            {t("caraKerjaPengguna.ctaTitle", "Mulai Daur Ulang Sekarang")}
          </h2>
          <p className="text-slate-500 font-body text-sm md:text-base max-w-lg mx-auto mb-8 leading-relaxed">
            {t(
              "caraKerjaPengguna.ctaDesc",
              "Unduh aplikasi EcoCash untuk mulai mencari RVM terdekat dan kumpulkan poin pertamamu hari ini."
            )}
          </p>

          <Link
            to="/#location-map"
            className="inline-flex items-center justify-center gap-2 bg-eco-cyan hover:bg-[#1eb5b1] text-white px-8 py-3.5 rounded-lg font-heading font-bold text-sm transition-all transform hover:-translate-y-0.5 shadow-lg shadow-eco-cyan/30"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
            </svg>
            {t("caraKerjaPengguna.ctaBtn", "Lihat Peta RVM")}
          </Link>
        </div>
      </section>

      {/* Bot Assistant */}
      <BotAssistant botFlowData={botFlowData} />
    </main>
  );
}