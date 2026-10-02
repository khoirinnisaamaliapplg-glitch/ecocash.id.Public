import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import BotAssistant from "../components/bot/BotAssistant";

export default function ProgramDonasi() {
  const { t, i18n } = useTranslation();
  const [formData, setFormData] = useState({
    namaYayasan: "",
    legalitas: "",
    fokusKegiatan: "",
    kota: "",
    whatsapp: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [botFlowData, setBotFlowData] = useState(null);

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

  // Integrasi Backend: Pengajuan Kemitraan Program Donasi
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
        t("donation.invalidPhone", "Nomor WhatsApp harus berupa angka valid (minimal 8 digit).")
      );
      return;
    }

    const payload = {
      category: "DONATION_PROGRAM",
      entityName: formData.namaYayasan.trim(),
      picName: formData.namaYayasan.trim(),
      city: formData.kota.trim(),
      whatsapp: cleanedPhone,
      metadata: {
        legalNumber: formData.legalitas.trim(),
        activityFocus: formData.fokusKegiatan,
        sourcePage: "ProgramDonasi",
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
        namaYayasan: "",
        legalitas: "",
        fokusKegiatan: "",
        kota: "",
        whatsapp: "",
      });
    } catch (err) {
      console.error("[Donation Leads Error]:", err);
      setSubmitStatus("error");
      setErrorMessage(
        err.message || t("donation.errorAlert", "Terjadi kendala saat mengirim pengajuan.")
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="w-full min-h-screen font-body text-slate-700 bg-white">
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 overflow-hidden bg-gradient-to-b from-sky-50/50 to-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-xl relative z-10">
              <h1 className="text-4xl lg:text-5xl font-extrabold text-slate-900 font-heading leading-[1.2] mb-6 tracking-tight">
                {t(
                  "donation.heroTitle",
                  "Ubah Setiap Botol Daur Ulang Menjadi Amal dan Bantuan Sosial"
                )}
              </h1>
              <p className="text-base sm:text-lg text-slate-500 font-body mb-8 leading-relaxed">
                {t(
                  "donation.heroDesc",
                  "Penyaluran dana otomatis yang transparan ke yayasan amal pilihan Anda langsung dari setiap poin yang Anda kumpulkan."
                )}
              </p>
              <a
                href="#form-yayasan"
                className="inline-flex items-center justify-center bg-eco-cyan hover:bg-[#1eb5b1] text-white px-8 py-3.5 rounded-full font-heading font-bold text-[15px] transition-all transform hover:-translate-y-0.5 shadow-lg shadow-eco-cyan/30"
              >
                {t("donation.heroBtn", "Daftarkan Yayasan Amal")}
              </a>
            </div>

            <div className="relative w-full flex justify-center lg:justify-end">
              <div className="relative w-full max-w-md rounded-[2rem] overflow-hidden shadow-2xl shadow-slate-200/60 bg-white border border-slate-100">
                <img
                  src="img/donation.png"
                  alt="Mesin EcoCash Mode Donasi"
                  className="w-full h-auto object-cover"
                  onError={(e) => {
                    e.target.style.display = "none";
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CARA KERJA DONASI */}
      <section className="py-24 bg-white max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-slate-900 font-heading mb-3">
            {t("donation.howTitle", "Cara Kerja Donasi")}
          </h2>
          <p className="text-slate-500 text-lg">
            {t("donation.howSubtitle", "Transparan, cepat, dan berdampak langsung.")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-4">
          <div className="relative bg-white rounded-3xl p-8 border border-slate-100 shadow-sm text-center">
            <div className="absolute -top-4 -left-2 md:-left-4 w-8 h-8 rounded-full bg-eco-cyan text-white flex items-center justify-center font-bold font-heading shadow-md shadow-eco-cyan/30">
              1
            </div>
            <div className="w-16 h-16 mx-auto bg-sky-50 text-eco-cyan rounded-full flex items-center justify-center mb-6">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm14 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
              </svg>
            </div>
            <h3 className="font-bold text-slate-900 font-heading text-lg mb-2">
              {t("donation.step1Title", "Setor Sampah")}
            </h3>
            <p className="text-slate-500 font-body text-sm leading-relaxed">
              {t("donation.step1Desc", "Scan QR dan masukkan botol ke mesin RVM terdekat.")}
            </p>
          </div>

          <div className="relative bg-white rounded-3xl p-8 border border-slate-100 shadow-sm text-center">
            <div className="absolute -top-4 -left-2 md:-left-4 w-8 h-8 rounded-full bg-eco-cyan text-white flex items-center justify-center font-bold font-heading shadow-md shadow-eco-cyan/30">
              2
            </div>
            <div className="w-16 h-16 mx-auto bg-sky-50 text-eco-cyan rounded-full flex items-center justify-center mb-6">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
              </svg>
            </div>
            <h3 className="font-bold text-slate-900 font-heading text-lg mb-2">
              {t("donation.step2Title", "Pilih Program Amal")}
            </h3>
            <p className="text-slate-500 font-body text-sm leading-relaxed">
              {t("donation.step2Desc", "Pilih kategori bantuan sosial di aplikasi atau langsung di layar mesin.")}
            </p>
          </div>

          <div className="relative bg-white rounded-3xl p-8 border border-slate-100 shadow-sm text-center">
            <div className="absolute -top-4 -left-2 md:-left-4 w-8 h-8 rounded-full bg-eco-cyan text-white flex items-center justify-center font-bold font-heading shadow-md shadow-eco-cyan/30">
              3
            </div>
            <div className="w-16 h-16 mx-auto bg-sky-50 text-eco-cyan rounded-full flex items-center justify-center mb-6">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
              </svg>
            </div>
            <h3 className="font-bold text-slate-900 font-heading text-lg mb-2">
              {t("donation.step3Title", "Penyaluran Otomatis")}
            </h3>
            <p className="text-slate-500 font-body text-sm leading-relaxed">
              {t("donation.step3Desc", "Dana dikirimkan secara real-time ke mitra yayasan terpercaya.")}
            </p>
          </div>
        </div>
      </section>

      {/* 3. MITRA YAYASAN AMAL */}
      <section className="py-24 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
            <div>
              <h2 className="text-3xl font-extrabold text-slate-900 font-heading mb-2">
                {t("donation.partnerTitle", "Mitra Yayasan Amal")}
              </h2>
              <p className="text-slate-500">
                {t("donation.partnerSubtitle", "Dukung program yang paling relevan dengan Anda.")}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Yayasan 1 */}
            <div className="bg-white rounded-[2rem] overflow-hidden border border-slate-100 shadow-sm hover:shadow-lg transition-shadow flex flex-col">
              <div className="relative h-48 bg-slate-200">
                <img
                  src="img/generasi-cerdas.png"
                  alt="Pendidikan"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = "none";
                  }}
                />
                <span className="absolute top-4 left-4 bg-white/95 backdrop-blur px-3 py-1.5 rounded-full text-[11px] font-bold text-eco-cyan font-heading flex items-center gap-1.5 shadow-sm">
                  {t("donation.tagEducation", "Pendidikan Anak")}
                </span>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="font-bold text-slate-900 font-heading leading-tight mb-2 text-lg">
                  Yayasan Generasi Cerdas
                </h3>
                <p className="text-sm text-slate-500 font-body mb-6 flex-1 line-clamp-3">
                  {t(
                    "donation.f1Desc",
                    "Memberikan akses pendidikan dan fasilitas belajar digital untuk anak-anak prasejahtera di daerah tertinggal."
                  )}
                </p>
                <div className="mb-6">
                  <div className="flex justify-between text-[11px] font-bold font-heading mb-2 uppercase tracking-wider">
                    <span className="text-slate-400">{t("donation.collectedLabel", "Terkumpul")}</span>
                    <span className="text-slate-900">Rp 45.000.000</span>
                  </div>
                  <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                    <div className="h-full bg-eco-cyan w-[65%] rounded-full"></div>
                  </div>
                </div>
                <a
                  href="/#location-map"
                  className="w-full py-3.5 rounded-xl border-2 border-slate-100 text-slate-600 font-bold font-heading text-sm hover:border-eco-cyan hover:text-eco-cyan transition-colors text-center"
                >
                  {t("donation.donateBtn", "Donasi Sekarang")}
                </a>
              </div>
            </div>

            {/* Yayasan 2 */}
            <div className="bg-white rounded-[2rem] overflow-hidden border border-slate-100 shadow-sm hover:shadow-lg transition-shadow flex flex-col">
              <div className="relative h-48 bg-slate-200">
                <img
                  src="img/reboisasi.jpg"
                  alt="Penghijauan"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = "none";
                  }}
                />
                <span className="absolute top-4 left-4 bg-white/95 backdrop-blur px-3 py-1.5 rounded-full text-[11px] font-bold text-emerald-500 font-heading flex items-center gap-1.5 shadow-sm">
                  {t("donation.tagReforestation", "Penghijauan Hutan")}
                </span>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="font-bold text-slate-900 font-heading leading-tight mb-2 text-lg">
                  Aksi Bumi Hijau
                </h3>
                <p className="text-sm text-slate-500 font-body mb-6 flex-1 line-clamp-3">
                  {t(
                    "donation.f2Desc",
                    "Program reboisasi lahan kritis dan perlindungan ekosistem hutan lindung di berbagai wilayah Indonesia."
                  )}
                </p>
                <div className="mb-6">
                  <div className="flex justify-between text-[11px] font-bold font-heading mb-2 uppercase tracking-wider">
                    <span className="text-slate-400">{t("donation.collectedLabel", "Terkumpul")}</span>
                    <span className="text-slate-900">Rp 120.500.000</span>
                  </div>
                  <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                    <div className="h-full bg-emerald-500 w-[85%] rounded-full"></div>
                  </div>
                </div>
                <a
                  href="/#location-map"
                  className="w-full py-3.5 rounded-xl border-2 border-slate-100 text-slate-600 font-bold font-heading text-sm hover:border-emerald-500 hover:text-emerald-600 transition-colors text-center"
                >
                  {t("donation.donateBtn", "Donasi Sekarang")}
                </a>
              </div>
            </div>

            {/* Yayasan 3 */}
            <div className="bg-white rounded-[2rem] overflow-hidden border border-slate-100 shadow-sm hover:shadow-lg transition-shadow flex flex-col">
              <div className="relative h-48 bg-slate-200">
                <img
                  src="img/pantiasuhan.png"
                  alt="Panti Asuhan"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = "none";
                  }}
                />
                <span className="absolute top-4 left-4 bg-white/95 backdrop-blur px-3 py-1.5 rounded-full text-[11px] font-bold text-amber-500 font-heading flex items-center gap-1.5 shadow-sm">
                  {t("donation.tagOrphanage", "Panti Asuhan")}
                </span>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="font-bold text-slate-900 font-heading leading-tight mb-2 text-lg">
                  Rumah Kasih Bangsa
                </h3>
                <p className="text-sm text-slate-500 font-body mb-6 flex-1 line-clamp-3">
                  {t(
                    "donation.f3Desc",
                    "Dukungan operasional harian, gizi, dan kesehatan untuk anak-anak yatim piatu di berbagai panti asuhan."
                  )}
                </p>
                <div className="mb-6">
                  <div className="flex justify-between text-[11px] font-bold font-heading mb-2 uppercase tracking-wider">
                    <span className="text-slate-400">{t("donation.collectedLabel", "Terkumpul")}</span>
                    <span className="text-slate-900">Rp 18.200.000</span>
                  </div>
                  <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                    <div className="h-full bg-amber-500 w-[30%] rounded-full"></div>
                  </div>
                </div>
                <a
                  href="/#location-map"
                  className="w-full py-3.5 rounded-xl border-2 border-slate-100 text-slate-600 font-bold font-heading text-sm hover:border-amber-500 hover:text-amber-600 transition-colors text-center"
                >
                  {t("donation.donateBtn", "Donasi Sekarang")}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FORM PENDAFTARAN YAYASAN */}
      <section id="form-yayasan" className="py-24 bg-white scroll-mt-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-gradient-to-b from-[#f8fbff] to-white p-8 md:p-14 rounded-[2.5rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 font-heading mb-3">
                {t("donation.formTitle", "Daftarkan Organisasi Anda")}
              </h2>
              <p className="text-slate-500 text-sm md:text-base">
                {t(
                  "donation.formSubtitle",
                  "Jadilah mitra penyalur dana EcoCash dan bantu lebih banyak orang bersama kami."
                )}
              </p>
            </div>

            {submitStatus === "success" && (
              <div className="mb-8 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-sm flex items-center gap-3">
                <svg className="w-5 h-5 text-emerald-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>{t("donation.successAlert", "Terima kasih! Pengajuan kemitraan yayasan Anda telah kami terima dan akan segera ditinjau.")}</span>
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
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-slate-700 font-heading mb-2">
                    {t("donation.labelFoundation", "Nama Yayasan/Organisasi")} *
                  </label>
                  <input
                    type="text"
                    name="namaYayasan"
                    value={formData.namaYayasan}
                    onChange={handleInputChange}
                    placeholder={t("donation.placeholderFoundation", "Masukkan nama resmi")}
                    className="w-full bg-white border border-slate-200 py-3.5 px-4 rounded-xl focus:outline-none focus:border-eco-cyan focus:ring-2 focus:ring-eco-cyan/20 transition-all text-sm"
                    required
                    disabled={isSubmitting}
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 font-heading mb-2">
                    {t("donation.labelLegal", "Nomor Izin Hukum/Legal")} *
                  </label>
                  <input
                    type="text"
                    name="legalitas"
                    value={formData.legalitas}
                    onChange={handleInputChange}
                    placeholder={t("donation.placeholderLegal", "SK Kemenkumham / NIB")}
                    className="w-full bg-white border border-slate-200 py-3.5 px-4 rounded-xl focus:outline-none focus:border-eco-cyan focus:ring-2 focus:ring-eco-cyan/20 transition-all text-sm"
                    required
                    disabled={isSubmitting}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 font-heading mb-2">
                  {t("donation.labelFocus", "Fokus Kegiatan")} *
                </label>
                <div className="relative">
                  <select
                    name="fokusKegiatan"
                    value={formData.fokusKegiatan}
                    onChange={handleInputChange}
                    className="w-full bg-white border border-slate-200 py-3.5 px-4 rounded-xl focus:outline-none focus:border-eco-cyan focus:ring-2 focus:ring-eco-cyan/20 transition-all text-sm appearance-none"
                    required
                    disabled={isSubmitting}
                  >
                    <option value="" disabled>
                      {t("donation.optSelectFocus", "Pilih kategori fokus utama")}
                    </option>
                    <option value="Pendidikan">{t("donation.optEdu", "Pendidikan & Beasiswa")}</option>
                    <option value="Lingkungan">{t("donation.optEnv", "Lingkungan & Konservasi")}</option>
                    <option value="Kemanusiaan">{t("donation.optHumanitarian", "Kemanusiaan & Bencana Alam")}</option>
                    <option value="Panti Asuhan">{t("donation.optOrphanage", "Panti Asuhan & Sosial")}</option>
                    <option value="Kesehatan">{t("donation.optHealth", "Kesehatan & Medis")}</option>
                  </select>
                  <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-slate-400">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-slate-700 font-heading mb-2">
                    {t("donation.labelCity", "Kota Domisili")} *
                  </label>
                  <input
                    type="text"
                    name="kota"
                    value={formData.kota}
                    onChange={handleInputChange}
                    placeholder={t("donation.placeholderCity", "Kota operasional utama")}
                    className="w-full bg-white border border-slate-200 py-3.5 px-4 rounded-xl focus:outline-none focus:border-eco-cyan focus:ring-2 focus:ring-eco-cyan/20 transition-all text-sm"
                    required
                    disabled={isSubmitting}
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 font-heading mb-2">
                    {t("donation.labelWhatsapp", "WhatsApp PIC (Aktif)")} *
                  </label>
                  <input
                    type="tel"
                    name="whatsapp"
                    value={formData.whatsapp}
                    onChange={handleInputChange}
                    placeholder="081234567890"
                    className="w-full bg-white border border-slate-200 py-3.5 px-4 rounded-xl focus:outline-none focus:border-eco-cyan focus:ring-2 focus:ring-eco-cyan/20 transition-all text-sm"
                    required
                    disabled={isSubmitting}
                  />
                </div>
              </div>

              <div className="pt-6">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-eco-cyan hover:bg-[#1eb5b1] text-white py-4 rounded-xl font-heading font-bold text-sm transition-all shadow-lg shadow-eco-cyan/20 flex items-center justify-center gap-2 disabled:opacity-50 cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>{t("donation.btnSubmitting", "Mengirim...")}</span>
                    </>
                  ) : (
                    <>
                      {t("donation.btnSubmit", "Kirim Pengajuan Kemitraan")}
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </>
                  )}
                </button>
                <p className="text-center text-xs text-slate-400 mt-4 font-body">
                  {t("donation.note", "Tim kami akan meninjau pengajuan Anda dalam 2-3 hari kerja.")}
                </p>
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