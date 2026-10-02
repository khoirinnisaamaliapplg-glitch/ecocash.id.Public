import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import BotAssistant from "../components/bot/BotAssistant";

export default function GovernmentSolution() {
  const { t, i18n } = useTranslation();
  const [botFlowData, setBotFlowData] = useState(null);

  const [formData, setFormData] = useState({
    instansi: "",
    wilayah: "",
    namaPic: "",
    jabatan: "",
    whatsapp: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  const currentLang = (i18n.resolvedLanguage || i18n.language || "id")
    .split("-")[0]
    .toLowerCase();

  const apiUrl =
    import.meta.env.VITE_API_BASE_URL ||
    import.meta.env.VITE_API_URL ||
    "http://localhost:3000/api/v1";

  useEffect(() => {
    window.scrollTo(0, 0);

    const fetchBotTree = async () => {
      try {
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

    const cleanedPhone = formData.whatsapp.replace(/[\s\-()]/g, "");

    if (!/^[0-9+]{8,25}$/.test(cleanedPhone)) {
      setIsSubmitting(false);
      setSubmitStatus("error");
      setErrorMessage(
        t("solutionCommon.invalidPhone", "Nomor WhatsApp harus berupa angka valid (minimal 8 digit).")
      );
      return;
    }

    const payload = {
      category: "GOVERNMENT",
      entityName: formData.instansi.trim(),
      picName: formData.namaPic.trim(),
      city: formData.wilayah.trim(),
      whatsapp: cleanedPhone,
      metadata: {
        officialPosition: formData.jabatan.trim(),
        sourcePage: "GovernmentSolution",
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
        throw new Error(result.message || `Gagal mengirim pengajuan (${response.status})`);
      }

      setSubmitStatus("success");
      setFormData({
        instansi: "",
        wilayah: "",
        namaPic: "",
        jabatan: "",
        whatsapp: "",
      });
    } catch (err) {
      console.error("[Gov Leads Error]:", err);
      setSubmitStatus("error");
      setErrorMessage(
        err.message || t("solutionCommon.errorAlert", "Terjadi kendala saat mengirim pengajuan.")
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="w-full min-h-screen bg-white font-body text-slate-700">
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-gradient-to-b from-sky-50/50 via-white to-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            <div className="max-w-xl relative z-10">
              <span className="inline-flex items-center gap-2 bg-slate-100/80 text-slate-600 px-4 py-2 rounded-full font-heading text-xs font-bold tracking-wider mb-6 border border-slate-200/60 shadow-sm backdrop-blur-sm">
                <svg className="w-4 h-4 text-eco-cyan" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L3 6v4.44C3 15.65 6.87 20.44 12 22c5.13-1.56 9-6.35 9-11.56V6l-9-4zm0 2.22l7 3.12v3.1c0 4.1-3.14 8.08-7 9.42-3.86-1.34-7-5.32-7-9.42v-3.1l7-3.12z" />
                </svg>
                {t("govSolution.badge", "Solusi Civic & Urban")}
              </span>

              <h1 className="text-4xl md:text-5xl lg:text-[44px] font-extrabold text-slate-900 font-heading leading-[1.25] mb-6">
                {t("govSolution.heroTitle", "Transformasi Pengelolaan Sampah Kota Berbasis")}{" "}
                <span className="text-eco-cyan">
                  {t("govSolution.heroHighlight", "AI, IoT & Ekonomi Sirkular")}
                </span>{" "}
                {t("govSolution.heroTitleSuffix", "Terpadu")}
              </h1>

              <p className="text-base sm:text-lg text-slate-500 font-body mb-8 leading-relaxed max-w-lg">
                {t(
                  "govSolution.heroDesc",
                  "Wujudkan Smart City yang bersih dan berkelanjutan dengan sistem manajemen sampah terintegrasi untuk reduksi beban TPA secara signifikan."
                )}
              </p>

              <a
                href="#form-kolaborasi"
                className="inline-flex items-center justify-center gap-2 bg-eco-cyan hover:bg-[#1eb5b1] text-white px-8 py-4 rounded-full font-heading font-bold text-sm transition-all transform hover:-translate-y-0.5 shadow-lg shadow-eco-cyan/30 w-fit"
              >
                {t("govSolution.heroBtn", "Ajukan Audiensi / Studi Kelayakan")}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>

            <div className="relative w-full flex justify-center lg:justify-end">
              <div className="absolute top-1/2 right-10 -translate-y-1/2 w-72 h-72 bg-eco-cyan/20 blur-[80px] rounded-full -z-10"></div>
              <div className="relative w-full max-w-lg rounded-2xl overflow-hidden shadow-2xl shadow-slate-200/50 bg-white border border-slate-100">
                <img
                  src="img/hero-sg.jpg"
                  alt="Dashboard Smart City EcoCash"
                  className="w-full h-auto object-cover"
                  onError={(e) => {
                    e.target.style.display = "none";
                    e.target.parentElement.innerHTML = `<div class="w-full h-[350px] flex items-center justify-center bg-slate-50 text-slate-400 font-body text-sm text-center p-6 border-2 border-dashed border-slate-200 rounded-2xl">hero-sg.jpg</div>`;
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. PILAR SOLUSI SMART CITY */}
      <section className="py-24 max-w-6xl mx-auto px-6 lg:px-10 bg-white">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-slate-900 font-heading mb-4">
            {t("govSolution.pillarsTitle", "Pilar Solusi Smart City")}
          </h2>
          <p className="text-slate-500 font-body text-lg max-w-2xl mx-auto">
            {t(
              "govSolution.pillarsDesc",
              "Pendekatan holistik untuk mengatasi tantangan manajemen sampah urban skala besar."
            )}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-lg transition-shadow group">
            <div className="w-14 h-14 bg-eco-cyan/10 text-eco-cyan rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 13h2.25l2.25 5.25L12 3l2.25 15.25L16.5 13H21" />
              </svg>
            </div>
            <h3 className="text-xl font-bold font-heading text-slate-900 mb-3">
              {t("govSolution.pillar1Title", "Centralized Waste Monitoring")}
            </h3>
            <p className="text-slate-500 font-body text-sm leading-relaxed">
              {t(
                "govSolution.pillar1Desc",
                "Dashboard pemantauan terpusat untuk visibilitas real-time seluruh titik RVM. Pantau kapasitas, status operasional, dan prediksi pengangkutan secara efisien."
              )}
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-lg transition-shadow group">
            <div className="w-14 h-14 bg-eco-cyan/10 text-eco-cyan rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold font-heading text-slate-900 mb-3">
              {t("govSolution.pillar2Title", "Informal Sector Empowerment")}
            </h3>
            <p className="text-slate-500 font-body text-sm leading-relaxed">
              {t(
                "govSolution.pillar2Desc",
                "Pemberdayaan pekerja lapangan dan pemulung lokal melalui integrasi sistem logistik. Tingkatkan kesejahteraan sekaligus efisiensi pengumpulan."
              )}
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-lg transition-shadow group">
            <div className="w-14 h-14 bg-eco-cyan/10 text-eco-cyan rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
              </svg>
            </div>
            <h3 className="text-xl font-bold font-heading text-slate-900 mb-3">
              {t("govSolution.pillar3Title", "Landfill Diversion Analytics")}
            </h3>
            <p className="text-slate-500 font-body text-sm leading-relaxed">
              {t(
                "govSolution.pillar3Desc",
                "Analisis data akurat untuk mereduksi volume sampah yang berakhir di TPA kota. Lacak tonase material terdaur ulang berdasarkan distrik."
              )}
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-lg transition-shadow group">
            <div className="w-14 h-14 bg-eco-cyan/10 text-eco-cyan rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold font-heading text-slate-900 mb-3">
              {t("govSolution.pillar4Title", "Policy Compliance Data")}
            </h3>
            <p className="text-slate-500 font-body text-sm leading-relaxed">
              {t(
                "govSolution.pillar4Desc",
                "Laporan data spasial dan tonase terstruktur untuk mendukung regulasi pengelolaan sampah daerah dan target pembangunan berkelanjutan (SDGs)."
              )}
            </p>
          </div>
        </div>
      </section>

      {/* 3. FORMULIR KOLABORASI */}
      <section id="form-kolaborasi" className="py-24 bg-slate-50 px-6 scroll-mt-10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row rounded-[2rem] overflow-hidden shadow-xl shadow-slate-200/50">
          <div className="w-full md:w-[40%] bg-[#064e3b] p-10 md:p-12 text-white flex flex-col">
            <div className="mb-10">
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-6 backdrop-blur-sm border border-white/10">
                <svg className="w-8 h-8 text-eco-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 21v-4m22 4v-4m-22-4h22M3 13h22m-22-4h22M8 4h8m-8 0a2 2 0 00-2 2v3m10-5a2 2 0 012 2v3" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 11l4-3-4-3-4 3 4 3z" />
                </svg>
              </div>
              <h2 className="text-3xl font-extrabold font-heading mb-4">
                {t("govSolution.sidebarTitle", "Mari Berkolaborasi")}
              </h2>
              <p className="text-emerald-100 font-body text-sm md:text-base leading-relaxed">
                {t(
                  "govSolution.sidebarDesc",
                  "Tim spesialis government relations kami siap mendiskusikan kebutuhan spesifik kota atau daerah Anda untuk implementasi sistem EcoCash."
                )}
              </p>
            </div>

            <div className="mt-auto space-y-4 pt-8 border-t border-white/10">
              <div className="flex items-center gap-3 text-emerald-100 text-sm font-body">
                <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                gov@ecocash.id
              </div>
              <div className="flex items-center gap-3 text-emerald-100 text-sm font-body">
                <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Jakarta Selatan, Indonesia
              </div>
            </div>
          </div>

          <div className="w-full md:w-[60%] bg-white p-10 md:p-12">
            <h3 className="text-2xl font-bold font-heading text-slate-900 mb-8">
              {t("govSolution.formTitle", "Formulir Inkuiri Resmi")}
            </h3>

            {submitStatus === "success" && (
              <div className="mb-8 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-sm flex items-center gap-3">
                <svg className="w-5 h-5 text-emerald-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>{t("govSolution.successAlert", "Permintaan inkuiri Anda berhasil dikirim. Tim Government Relations kami akan segera menghubungi Anda.")}</span>
              </div>
            )}

            {submitStatus === "error" && (
              <div className="mb-8 p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-sm flex items-center gap-3">
                <svg className="w-5 h-5 text-rose-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
                <span>{errorMessage}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-xs font-bold text-slate-700 font-heading mb-2">
                  {t("govSolution.labelAgency", "Nama Instansi/Dinas")} *
                </label>
                <input
                  type="text"
                  name="instansi"
                  value={formData.instansi}
                  onChange={handleInputChange}
                  placeholder="Cth: Dinas Lingkungan Hidup Kota X"
                  className="w-full bg-slate-50 border border-slate-200 py-3.5 px-4 rounded-xl focus:outline-none focus:border-eco-cyan focus:ring-2 focus:ring-eco-cyan/20 transition-all text-sm font-body"
                  required
                  disabled={isSubmitting}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-slate-700 font-heading mb-2">
                    {t("govSolution.labelCity", "Wilayah/Kota")} *
                  </label>
                  <input
                    type="text"
                    name="wilayah"
                    value={formData.wilayah}
                    onChange={handleInputChange}
                    placeholder="Masukkan nama kota"
                    className="w-full bg-slate-50 border border-slate-200 py-3.5 px-4 rounded-xl focus:outline-none focus:border-eco-cyan focus:ring-2 focus:ring-eco-cyan/20 transition-all text-sm font-body"
                    required
                    disabled={isSubmitting}
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 font-heading mb-2">
                    {t("govSolution.labelPicName", "Nama Pejabat PIC")} *
                  </label>
                  <input
                    type="text"
                    name="namaPic"
                    value={formData.namaPic}
                    onChange={handleInputChange}
                    placeholder="Nama lengkap"
                    className="w-full bg-slate-50 border border-slate-200 py-3.5 px-4 rounded-xl focus:outline-none focus:border-eco-cyan focus:ring-2 focus:ring-eco-cyan/20 transition-all text-sm font-body"
                    required
                    disabled={isSubmitting}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-slate-700 font-heading mb-2">
                    {t("govSolution.labelPosition", "Jabatan")} *
                  </label>
                  <input
                    type="text"
                    name="jabatan"
                    value={formData.jabatan}
                    onChange={handleInputChange}
                    placeholder="Cth: Kepala Bidang"
                    className="w-full bg-slate-50 border border-slate-200 py-3.5 px-4 rounded-xl focus:outline-none focus:border-eco-cyan focus:ring-2 focus:ring-eco-cyan/20 transition-all text-sm font-body"
                    required
                    disabled={isSubmitting}
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 font-heading mb-2">
                    {t("govSolution.labelWhatsapp", "WhatsApp Resmi")} *
                  </label>
                  <input
                    type="tel"
                    name="whatsapp"
                    value={formData.whatsapp}
                    onChange={handleInputChange}
                    placeholder="+62 812 3456 7890"
                    className="w-full bg-slate-50 border border-slate-200 py-3.5 px-4 rounded-xl focus:outline-none focus:border-eco-cyan focus:ring-2 focus:ring-eco-cyan/20 transition-all text-sm font-body"
                    required
                    disabled={isSubmitting}
                  />
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-eco-cyan hover:bg-[#1eb5b1] text-white py-4 rounded-xl font-heading font-bold text-sm transition-all shadow-lg shadow-eco-cyan/20 flex items-center justify-center gap-2 disabled:opacity-50 cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>{t("solutionCommon.btnSubmitting", "Mengirim...")}</span>
                    </>
                  ) : (
                    t("govSolution.btnSubmit", "Kirim Permintaan")
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