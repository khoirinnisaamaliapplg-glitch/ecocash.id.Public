import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import BotAssistant from "../components/bot/BotAssistant";

export default function CaraKerjaKelolaLokasi() {
  const { t, i18n } = useTranslation();
  const [formData, setFormData] = useState({
    namaPengelola: "",
    namaProperti: "",
    kota: "",
    whatsapp: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null
  const [errorMessage, setErrorMessage] = useState("");
  const [botFlowData, setBotFlowData] = useState(null);

  const currentLang = (i18n.resolvedLanguage || i18n.language || "id")
    .split("-")[0]
    .toLowerCase();

  const apiUrl =
    import.meta.env.VITE_API_BASE_URL ||
    import.meta.env.VITE_API_URL ||
    "https://api.ecocash.id/api/v1";

  useEffect(() => {
    window.scrollTo(0, 0);

    const fetchBotTree = async () => {
      try {
        const apiUrl =
          import.meta.env.VITE_API_URL_LOCAL || "https://api.ecocash.id/api/v1";

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
  }, [apiUrl]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (submitStatus) setSubmitStatus(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    setErrorMessage("");

    // Bersihkan karakter spasi, strip, dan kurung dari nomor telepon
    const cleanedWhatsapp = formData.whatsapp.replace(/[\s\-()]/g, "");

    // Validasi format nomor telepon lokal sebelum request
    if (!/^[0-9+]{8,25}$/.test(cleanedWhatsapp)) {
      setIsSubmitting(false);
      setSubmitStatus("error");
      setErrorMessage(
        t(
          "kelolaLokasi.invalidPhone",
          "Nomor WhatsApp harus berupa angka valid (minimal 8 digit)."
        )
      );
      return;
    }

    // Payload presisi sesuai kontrak schema model Lead backend
    const payload = {
      category: "PROPERTY_MANAGEMENT",
      picName: formData.namaPengelola.trim(),
      entityName: formData.namaProperti.trim(),
      city: formData.kota.trim(),
      whatsapp: cleanedWhatsapp,
      metadata: {
        sourcePage: "CaraKerjaKelolaLokasi",
        submittedAt: new Date().toISOString(),
        locale: currentLang,
      },
    };

    try {
      const response = await fetch(`${apiUrl}/leads`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept-Language": currentLang,
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(
          result.message || `Gagal mengirim pengajuan (HTTP ${response.status})`
        );
      }

      setSubmitStatus("success");
      setFormData({
        namaPengelola: "",
        namaProperti: "",
        kota: "",
        whatsapp: "",
      });
    } catch (err) {
      console.error("[Leads Submit Error]:", err);
      setSubmitStatus("error");
      setErrorMessage(
        err.message ||
          t("kelolaLokasi.errorAlert", "Terjadi kendala saat mengirim pengajuan.")
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="w-full min-h-screen bg-white font-body text-slate-700">
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <div className="max-w-xl">
            <h1 className="text-4xl md:text-5xl lg:text-[46px] font-extrabold text-slate-900 font-heading leading-[1.25] mb-6 tracking-tight">
              {t(
                "kelolaLokasi.heroTitle",
                "Hadirkan Titik Daur Ulang Pintar di Properti Anda Tanpa Biaya Repot"
              )}
            </h1>

            <p className="text-base sm:text-lg text-slate-500 font-body mb-10 leading-relaxed max-w-lg">
              {t(
                "kelolaLokasi.heroDesc",
                "Optimalkan ruang publik Anda dengan solusi keberlanjutan berbasis AI. Kami tangani operasionalnya, Anda nikmati dampaknya."
              )}
            </p>

            <a
              href="#form-pengelola"
              className="inline-flex items-center justify-center gap-2 bg-eco-cyan hover:bg-[#1eb5b1] text-white px-8 py-3.5 rounded-lg font-heading font-bold text-sm transition-all transform hover:-translate-y-0.5 shadow-lg shadow-eco-cyan/30"
            >
              {t("kelolaLokasi.heroBtn", "Ajukan Penempatan RVM")}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>

          <div className="relative w-full flex justify-center lg:justify-end">
            <div className="absolute top-1/2 right-10 -translate-y-1/2 w-72 h-72 bg-eco-cyan/10 blur-[80px] rounded-full -z-10"></div>

            <div className="relative w-full max-w-lg rounded-[2rem] overflow-hidden shadow-2xl shadow-slate-200/50">
              <img
                src="img/hero-kelola-lokasi.png"
                alt="Orang menggunakan RVM di dalam gedung properti"
                className="w-full h-auto object-cover"
                onError={(e) => {
                  e.target.style.display = "none";
                  e.target.parentElement.innerHTML = `<div class="w-full h-[400px] flex items-center justify-center bg-slate-50 text-slate-400 font-body text-sm text-center p-6 border-2 border-dashed border-slate-200 rounded-[2rem]">hero-kelola-lokasi.png</div>`;
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. PROSES PENEMPATAN & FITUR */}
      <section className="py-24 bg-[#f8fafc] border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-extrabold text-center text-slate-900 font-heading mb-16">
            {t("kelolaLokasi.processTitle", "Proses Penempatan yang Mudah")}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-[0_2px_15px_rgb(0,0,0,0.02)] hover:shadow-lg transition-shadow relative overflow-hidden group">
              <div className="relative z-10">
                <span className="inline-block bg-[#e0f8f7] text-eco-cyan text-xs font-bold px-3 py-1.5 rounded-lg mb-6">
                  {t("kelolaLokasi.step1Badge", "Langkah 1")}
                </span>
                <h3 className="text-lg font-bold font-heading text-slate-900 mb-3">
                  {t("kelolaLokasi.step1Title", "Pengajuan Formulir Lokasi")}
                </h3>
                <p className="text-slate-500 font-body text-sm leading-relaxed">
                  {t(
                    "kelolaLokasi.step1Desc",
                    "Isi detail properti dan estimasi trafik pengunjung harian Anda."
                  )}
                </p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-[0_2px_15px_rgb(0,0,0,0.02)] hover:shadow-lg transition-shadow relative overflow-hidden group">
              <div className="relative z-10">
                <span className="inline-block bg-[#e0f8f7] text-eco-cyan text-xs font-bold px-3 py-1.5 rounded-lg mb-6">
                  {t("kelolaLokasi.step2Badge", "Langkah 2")}
                </span>
                <h3 className="text-lg font-bold font-heading text-slate-900 mb-3">
                  {t("kelolaLokasi.step2Title", "Analisis & Survei Titik")}
                </h3>
                <p className="text-slate-500 font-body text-sm leading-relaxed">
                  {t(
                    "kelolaLokasi.step2Desc",
                    "Tim teknis kami melakukan verifikasi kelayakan daya listrik dan sinyal IoT."
                  )}
                </p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-[0_2px_15px_rgb(0,0,0,0.02)] hover:shadow-lg transition-shadow relative overflow-hidden group">
              <div className="relative z-10">
                <span className="inline-block bg-[#e0f8f7] text-eco-cyan text-xs font-bold px-3 py-1.5 rounded-lg mb-6">
                  {t("kelolaLokasi.step3Badge", "Langkah 3")}
                </span>
                <h3 className="text-lg font-bold font-heading text-slate-900 mb-3">
                  {t("kelolaLokasi.step3Title", "Instalasi Mesin Siap Pakai")}
                </h3>
                <p className="text-slate-500 font-body text-sm leading-relaxed">
                  {t(
                    "kelolaLokasi.step3Desc",
                    "Pengiriman dan pemasangan unit RVM dilakukan dalam 1 hari kerja."
                  )}
                </p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-[0_2px_15px_rgb(0,0,0,0.02)] hover:shadow-lg transition-shadow relative overflow-hidden group">
              <div className="relative z-10">
                <span className="inline-block bg-[#e0f8f7] text-eco-cyan text-xs font-bold px-3 py-1.5 rounded-lg mb-6">
                  {t("kelolaLokasi.step4Badge", "Langkah 4")}
                </span>
                <h3 className="text-lg font-bold font-heading text-slate-900 mb-3">
                  {t("kelolaLokasi.step4Title", "Logistik Pengosongan Otomatis")}
                </h3>
                <p className="text-slate-500 font-body text-sm leading-relaxed">
                  {t(
                    "kelolaLokasi.step4Desc",
                    "Sensor kami mendeteksi kapasitas penuh dan mengirim mitra penjemput secara otomatis."
                  )}
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-[0_2px_15px_rgb(0,0,0,0.02)] flex flex-col md:flex-row items-start md:items-center gap-5 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-[#e0f8f7] text-eco-cyan rounded-full flex items-center justify-center shrink-0">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.492-3.053c.24-.294.24-.712.002-1.006A3.992 3.992 0 0010 9a3.992 3.992 0 00-3.915 2.11m7.827 3.055L9 10m-3.414 4.586l3.414-3.414M9 10a1.5 1.5 0 00-2.121-2.121M3 9a6 6 0 1112 0 6 6 0 01-12 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold font-heading text-slate-900 mb-2">
                  {t("kelolaLokasi.val1Title", "Zero Maintenance Effort")}
                </h3>
                <p className="text-slate-500 font-body text-sm leading-relaxed">
                  {t(
                    "kelolaLokasi.val1Desc",
                    "Kami bertanggung jawab penuh atas pemeliharaan rutin dan perbaikan teknis. Anda tidak perlu khawatir tentang operasional mesin sehari-hari."
                  )}
                </p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-[0_2px_15px_rgb(0,0,0,0.02)] flex flex-col md:flex-row items-start md:items-center gap-5 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-[#e0f8f7] text-eco-cyan rounded-full flex items-center justify-center shrink-0">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 13h2.25l2.25 5.25L12 3l2.25 15.25L16.5 13H21" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold font-heading text-slate-900 mb-2">
                  {t("kelolaLokasi.val2Title", "ESG Monthly Reporting")}
                </h3>
                <p className="text-slate-500 font-body text-sm leading-relaxed">
                  {t(
                    "kelolaLokasi.val2Desc",
                    "Dapatkan laporan dashboard bulanan mengenai volume sampah dan reduksi emisi karbon (CO2e) untuk mendukung inisiatif hijau perusahaan Anda."
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FORMULIR PENEMPATAN */}
      <section id="form-pengelola" className="py-24 bg-[#eaf1fb] scroll-mt-10">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-white p-10 md:p-14 rounded-[2rem] shadow-xl border border-slate-100 text-center">
            <div className="flex justify-center mb-5">
              <div className="text-[#064e3b]">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
                </svg>
              </div>
            </div>

            <h2 className="text-2xl md:text-3xl font-extrabold font-heading text-slate-900 mb-3">
              {t("kelolaLokasi.formTitle", "Mulai Langkah Hijau Anda")}
            </h2>
            <p className="text-slate-500 font-body text-sm md:text-base mb-8">
              {t(
                "kelolaLokasi.formSubtitle",
                "Daftarkan properti Anda untuk penempatan unit RVM pintar."
              )}
            </p>

            {/* Banner Feedback Sukses */}
            {submitStatus === "success" && (
              <div className="mb-8 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-sm flex items-center gap-3 text-left">
                <svg className="w-5 h-5 text-emerald-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>
                  {t(
                    "kelolaLokasi.successAlert",
                    "Pengajuan berhasil dikirim! Tim operasional kami akan segera meninjau lokasi Anda."
                  )}
                </span>
              </div>
            )}

            {/* Banner Feedback Error */}
            {submitStatus === "error" && (
              <div className="mb-8 p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-sm flex items-center gap-3 text-left">
                <svg className="w-5 h-5 text-rose-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
                <span>{errorMessage}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="text-left space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[11px] font-bold text-slate-700 font-heading mb-2 uppercase tracking-wide">
                    {t("kelolaLokasi.labelManagerName", "Nama Pengelola")}
                  </label>
                  <input
                    type="text"
                    name="namaPengelola"
                    value={formData.namaPengelola}
                    onChange={handleInputChange}
                    placeholder={t(
                      "kelolaLokasi.placeholderManagerName",
                      "Masukkan nama lengkap"
                    )}
                    className="w-full bg-white border border-slate-300 py-3.5 px-4 rounded-xl focus:outline-none focus:border-eco-cyan focus:ring-2 focus:ring-eco-cyan/20 transition-all text-sm font-body"
                    required
                    disabled={isSubmitting}
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-slate-700 font-heading mb-2 uppercase tracking-wide">
                    {t("kelolaLokasi.labelPropertyName", "Nama Gedung/Properti")}
                  </label>
                  <input
                    type="text"
                    name="namaProperti"
                    value={formData.namaProperti}
                    onChange={handleInputChange}
                    placeholder={t(
                      "kelolaLokasi.placeholderPropertyName",
                      "Contoh: Gedung Nusantara"
                    )}
                    className="w-full bg-white border border-slate-300 py-3.5 px-4 rounded-xl focus:outline-none focus:border-eco-cyan focus:ring-2 focus:ring-eco-cyan/20 transition-all text-sm font-body"
                    required
                    disabled={isSubmitting}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[11px] font-bold text-slate-700 font-heading mb-2 uppercase tracking-wide">
                    {t("kelolaLokasi.labelCity", "Kota")}
                  </label>
                  <input
                    type="text"
                    name="kota"
                    value={formData.kota}
                    onChange={handleInputChange}
                    placeholder={t(
                      "kelolaLokasi.placeholderCity",
                      "Contoh: Jakarta Selatan"
                    )}
                    className="w-full bg-white border border-slate-300 py-3.5 px-4 rounded-xl focus:outline-none focus:border-eco-cyan focus:ring-2 focus:ring-eco-cyan/20 transition-all text-sm font-body"
                    required
                    disabled={isSubmitting}
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-slate-700 font-heading mb-2 uppercase tracking-wide">
                    {t("kelolaLokasi.labelWa", "Nomor WhatsApp")}
                  </label>
                  <input
                    type="tel"
                    name="whatsapp"
                    value={formData.whatsapp}
                    onChange={handleInputChange}
                    placeholder="08xx xxxx xxxx"
                    className="w-full bg-white border border-slate-300 py-3.5 px-4 rounded-xl focus:outline-none focus:border-eco-cyan focus:ring-2 focus:ring-eco-cyan/20 transition-all text-sm font-body"
                    required
                    disabled={isSubmitting}
                  />
                </div>
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-eco-cyan hover:bg-[#1eb5b1] text-white py-4 rounded-xl font-heading font-bold text-sm transition-all shadow-lg shadow-eco-cyan/20 disabled:opacity-50 cursor-pointer flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>{t("kelolaLokasi.btnSubmitting", "Mengirim...")}</span>
                    </>
                  ) : (
                    t("kelolaLokasi.btnSubmit", "Kirim Pengajuan")
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Bot Assistant */}
      <BotAssistant botFlowData={botFlowData} />
    </main>
  );
}