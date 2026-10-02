import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import BotAssistant from "../components/bot/BotAssistant";

export default function BankSampah() {
  const { t, i18n } = useTranslation();
  const [formData, setFormData] = useState({
    namaFasilitas: "",
    tipeFasilitas: "Bank Sampah Induk",
    lokasiOperasional: "",
    whatsappPic: "",
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

    const cleanedPhone = formData.whatsappPic.replace(/[\s\-()]/g, "");

    if (!/^[0-9+]{8,25}$/.test(cleanedPhone)) {
      setIsSubmitting(false);
      setSubmitStatus("error");
      setErrorMessage(
        t("bankSampah.invalidPhone", "Nomor WhatsApp harus berupa angka valid (minimal 8 digit).")
      );
      return;
    }

    const payload = {
      category: "WASTE_BANK",
      entityName: formData.namaFasilitas.trim(),
      picName: formData.namaFasilitas.trim(),
      city: formData.lokasiOperasional.trim(),
      whatsapp: cleanedPhone,
      metadata: {
        facilityType: formData.tipeFasilitas,
        sourcePage: "BankSampah",
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
        namaFasilitas: "",
        tipeFasilitas: "Bank Sampah Induk",
        lokasiOperasional: "",
        whatsappPic: "",
      });
    } catch (err) {
      console.error("[WasteBank Leads Error]:", err);
      setSubmitStatus("error");
      setErrorMessage(
        err.message || t("bankSampah.errorAlert", "Terjadi kendala saat mengirim pengajuan.")
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="w-full min-h-screen bg-white font-body text-slate-700">
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            <div className="max-w-xl relative z-10">
              <h1 className="text-4xl md:text-5xl lg:text-[46px] font-extrabold text-slate-900 font-heading leading-[1.25] mb-6">
                {t("bankSampah.heroTitlePrefix", "Transformasi Bank Sampah & TPS3R Menjadi")}{" "}
                <span className="text-eco-cyan">
                  {t("bankSampah.heroTitleHighlight", "Digital Drop-Off Hub Modern")}
                </span>
              </h1>

              <p className="text-base sm:text-lg text-slate-500 font-body mb-10 leading-relaxed max-w-lg">
                {t(
                  "bankSampah.heroDesc",
                  "Digitalisasi operasional fasilitas pengelolaan sampah Anda. Tingkatkan efisiensi penimbangan, amankan pasokan material bersih, dan pantau keuangan secara real-time dengan ekosistem IoT EcoCash."
                )}
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="#form-transformasi"
                  className="inline-flex items-center justify-center bg-eco-cyan hover:bg-[#1eb5b1] text-white px-8 py-3.5 rounded-full font-heading font-bold text-sm transition-all shadow-lg shadow-eco-cyan/30"
                >
                  {t("bankSampah.heroBtnRegister", "Daftarkan Bank Sampah")}
                </a>
                <a
                  href="#fitur-utama"
                  className="inline-flex items-center justify-center bg-transparent border-2 border-slate-200 text-slate-700 hover:border-eco-cyan hover:text-eco-cyan px-8 py-3.5 rounded-full font-heading font-bold text-sm transition-colors"
                >
                  {t("bankSampah.heroBtnLearn", "Pelajari Lebih Lanjut")}
                </a>
              </div>
            </div>

            <div className="relative w-full flex justify-center lg:justify-end">
              <div className="absolute top-1/2 right-10 -translate-y-1/2 w-72 h-72 bg-eco-cyan/10 blur-[80px] rounded-full -z-10"></div>
              <div className="relative w-full max-w-lg rounded-3xl overflow-hidden shadow-2xl shadow-slate-200/50">
                <img
                  src="img/hero-bs.jpg"
                  alt="Dashboard Hub Digital"
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

      {/* 2. FITUR UTAMA HUB DIGITAL */}
      <section id="fitur-utama" className="py-24 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-slate-900 font-heading mb-4">
              {t("bankSampah.featuresTitle", "Fitur Utama Hub Digital")}
            </h2>
            <p className="text-slate-500 font-body text-lg max-w-2xl mx-auto">
              {t(
                "bankSampah.featuresSubtitle",
                "Tingkatkan kapasitas dan transparansi operasional dengan teknologi terintegrasi."
              )}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 md:p-10 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-sky-50 text-eco-cyan rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 3h12l-4 8 4 8H6l4-8-4-8z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12h6" />
                </svg>
              </div>
              <h3 className="text-lg font-bold font-heading text-slate-900 mb-3">
                {t("bankSampah.feat1Title", "Smart Digital Scale Integration")}
              </h3>
              <p className="text-slate-500 font-body text-[13px] leading-relaxed">
                {t(
                  "bankSampah.feat1Desc",
                  "Otomatisasi pencatatan timbangan melalui integrasi IoT. Data langsung masuk ke sistem tanpa input manual, mencegah human error dan kecurangan."
                )}
              </p>
            </div>

            <div className="bg-white p-8 md:p-10 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-sky-50 text-eco-cyan rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold font-heading text-slate-900 mb-3">
                {t("bankSampah.feat2Title", "Guaranteed Clean Material Supply")}
              </h3>
              <p className="text-slate-500 font-body text-[13px] leading-relaxed">
                {t(
                  "bankSampah.feat2Desc",
                  "Akses prioritas ke pasokan material daur ulang yang bersih dan terpilah dari jaringan Reverse Vending Machine (RVM) EcoCash."
                )}
              </p>
            </div>

            <div className="bg-white p-8 md:p-10 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-sky-50 text-eco-cyan rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 12a2.25 2.25 0 00-2.25-2.25H15a3 3 0 11-6 0H4.5A2.25 2.25 0 002.25 12v6.75A2.25 2.25 0 004.5 21h15a2.25 2.25 0 002.25-2.25V12zm-9-2.25h.008v.008H12V9.75z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M2.25 9.75v-.375c0-.621.504-1.125 1.125-1.125h15.75c.621 0 1.125.504 1.125 1.125v.375" />
                </svg>
              </div>
              <h3 className="text-lg font-bold font-heading text-slate-900 mb-3">
                {t("bankSampah.feat3Title", "Cloud Inventory & Cashbook")}
              </h3>
              <p className="text-slate-500 font-body text-[13px] leading-relaxed">
                {t(
                  "bankSampah.feat3Desc",
                  "Buku kas digital dan manajemen inventaris berbasis cloud. Pantau stok material dan arus kas secara real-time dari perangkat mana saja."
                )}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. ALUR SERAH TERIMA DIGITAL */}
      <section className="py-24 bg-white border-y border-slate-100">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <div className="text-center md:text-left mb-16 max-w-2xl">
            <h2 className="text-3xl font-extrabold text-slate-900 font-heading mb-4">
              {t("bankSampah.workflowTitle", "Alur Serah Terima Digital")}
            </h2>
            <p className="text-slate-500 font-body text-lg">
              {t(
                "bankSampah.workflowSubtitle",
                "Proses operasional yang mulus dan transparan dari kolektor ke fasilitas Anda."
              )}
            </p>
          </div>

          <div className="relative">
            <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-[2px] border-t-2 border-dashed border-slate-200 z-0"></div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
              <div className="bg-white flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-[#0f766e] text-white flex items-center justify-center font-bold font-heading mb-6 ring-8 ring-white">
                  1
                </div>
                <h4 className="text-lg font-bold font-heading text-slate-900 mb-2">
                  {t("bankSampah.step1Title", "Kedatangan Kolektor")}
                </h4>
                <p className="text-slate-500 font-body text-[13px] px-4">
                  {t("bankSampah.step1Desc", "RVM Collector tiba membawa material terpilah.")}
                </p>
              </div>

              <div className="bg-white flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-eco-cyan text-white flex items-center justify-center font-bold font-heading mb-6 ring-8 ring-white">
                  2
                </div>
                <h4 className="text-lg font-bold font-heading text-slate-900 mb-2">
                  {t("bankSampah.step2Title", "Scan QR Handover")}
                </h4>
                <p className="text-slate-500 font-body text-[13px] px-4">
                  {t(
                    "bankSampah.step2Desc",
                    "Verifikasi serah terima instan melalui scan kode QR di aplikasi operasional."
                  )}
                </p>
              </div>

              <div className="bg-white flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-[#16a34a] text-white flex items-center justify-center font-bold font-heading mb-6 ring-8 ring-white">
                  3
                </div>
                <h4 className="text-lg font-bold font-heading text-slate-900 mb-2">
                  {t("bankSampah.step3Title", "Pembaruan Saldo Otomatis")}
                </h4>
                <p className="text-slate-500 font-body text-[13px] px-4">
                  {t(
                    "bankSampah.step3Desc",
                    "Inventaris tercatat dan saldo kredit hub terupdate secara otomatis dalam sistem."
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FORMULIR TRANSFORMASI */}
      <section id="form-transformasi" className="py-24 bg-[#eaf1fb] scroll-mt-10">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-white p-10 md:p-14 rounded-3xl shadow-lg border border-slate-100">
            <div className="mb-10">
              <h2 className="text-2xl md:text-3xl font-extrabold font-heading text-slate-900 mb-3">
                {t("bankSampah.formTitle", "Mulai Transformasi Digital")}
              </h2>
              <p className="text-slate-500 font-body text-sm md:text-base">
                {t("bankSampah.formSubtitle", "Isi formulir di bawah ini untuk berdiskusi dengan tim partnership B2B kami.")}
              </p>
            </div>

            {submitStatus === "success" && (
              <div className="mb-8 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-sm flex items-center gap-3">
                <svg className="w-5 h-5 text-emerald-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>{t("bankSampah.successAlert", "Permintaan kemitraan Anda telah kami terima. Tim B2B kami akan segera menghubungi Anda.")}</span>
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
                  <label className="block text-[11px] font-bold text-slate-700 font-heading mb-2 uppercase tracking-wide">
                    {t("bankSampah.labelFacilityName", "Nama Fasilitas / Perusahaan")} *
                  </label>
                  <input
                    type="text"
                    name="namaFasilitas"
                    value={formData.namaFasilitas}
                    onChange={handleInputChange}
                    placeholder={t("bankSampah.placeholderFacilityName", "Masukkan nama...")}
                    className="w-full bg-slate-50 border border-slate-200 py-3.5 px-4 rounded-xl focus:outline-none focus:border-eco-cyan focus:ring-2 focus:ring-eco-cyan/20 transition-all text-sm font-body"
                    required
                    disabled={isSubmitting}
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-slate-700 font-heading mb-2 uppercase tracking-wide">
                    {t("bankSampah.labelFacilityType", "Tipe Fasilitas")} *
                  </label>
                  <div className="relative">
                    <select
                      name="tipeFasilitas"
                      value={formData.tipeFasilitas}
                      onChange={handleInputChange}
                      className="w-full bg-slate-50 border border-slate-200 py-3.5 px-4 rounded-xl focus:outline-none focus:border-eco-cyan focus:ring-2 focus:ring-eco-cyan/20 transition-all text-sm font-body appearance-none"
                      required
                      disabled={isSubmitting}
                    >
                      <option value="Bank Sampah Induk">{t("bankSampah.optBSI", "Bank Sampah Induk")}</option>
                      <option value="Bank Sampah Unit">{t("bankSampah.optBSU", "Bank Sampah Unit")}</option>
                      <option value="TPS3R">TPS3R</option>
                      <option value="Pengepul">{t("bankSampah.optCollector", "Pengepul")}</option>
                    </select>
                    <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-slate-400">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-bold text-slate-700 font-heading mb-2 uppercase tracking-wide">
                  {t("bankSampah.labelLocation", "Lokasi Operasional")} *
                </label>
                <input
                  type="text"
                  name="lokasiOperasional"
                  value={formData.lokasiOperasional}
                  onChange={handleInputChange}
                  placeholder={t("bankSampah.placeholderLocation", "Kota atau Alamat lengkap...")}
                  className="w-full bg-slate-50 border border-slate-200 py-3.5 px-4 rounded-xl focus:outline-none focus:border-eco-cyan focus:ring-2 focus:ring-eco-cyan/20 transition-all text-sm font-body"
                  required
                  disabled={isSubmitting}
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold text-slate-700 font-heading mb-2 uppercase tracking-wide">
                  {t("bankSampah.labelWhatsapp", "Nomor WhatsApp PIC")} *
                </label>
                <input
                  type="tel"
                  name="whatsappPic"
                  value={formData.whatsappPic}
                  onChange={handleInputChange}
                  placeholder="+62 812-1416-1614"
                  className="w-full bg-slate-50 border border-slate-200 py-3.5 px-4 rounded-xl focus:outline-none focus:border-eco-cyan focus:ring-2 focus:ring-eco-cyan/20 transition-all text-sm font-body"
                  required
                  disabled={isSubmitting}
                />
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
                    t("bankSampah.btnSubmit", "Kirim Permintaan Mitra")
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