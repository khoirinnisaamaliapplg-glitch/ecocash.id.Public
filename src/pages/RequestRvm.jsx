import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import BotAssistant from "../components/bot/BotAssistant";

export default function CustomRequestForm() {
  const { t, i18n } = useTranslation();
  const [formData, setFormData] = useState({
    instansi: "",
    warnaUtama: "#387f79",
    temaIlustrasi: "Edukasi & Anak Sekolah",
    detailIlustrasi: "",
    logoFile: null,
    namaKontak: "",
    nomorWa: "",
  });
  const [logoPreview, setLogoPreview] = useState(null);
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
    "https://api.ecocash.id/api/v1";

  useEffect(() => {
    window.scrollTo(0, 0);

    const fetchBotTree = async () => {
      try {
        const apiUrl =
          import.meta.env.VITE_API_URL_LOCAL || "https://api.ecocash.id/api/v1";

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

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData((prev) => ({ ...prev, logoFile: file }));
      setLogoPreview(URL.createObjectURL(file));
      if (submitStatus) setSubmitStatus(null);
    }
  };

  const handleRemoveLogo = () => {
    setFormData((prev) => ({ ...prev, logoFile: null }));
    if (logoPreview) URL.revokeObjectURL(logoPreview);
    setLogoPreview(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    setErrorMessage("");

    const cleanedPhone = formData.nomorWa.replace(/[\s\-()]/g, "");

    if (!/^[0-9+]{8,25}$/.test(cleanedPhone)) {
      setIsSubmitting(false);
      setSubmitStatus("error");
      setErrorMessage(
        t("requestRvm.invalidPhone", "Nomor WhatsApp harus berupa angka valid (minimal 8 digit).")
      );
      return;
    }

    const payload = new FormData();
    payload.append("institutionCategory", formData.instansi);
    payload.append("instansi", formData.instansi);
    payload.append("primaryColor", formData.warnaUtama);
    payload.append("warnaUtama", formData.warnaUtama);
    payload.append("illustrationTheme", formData.temaIlustrasi);
    payload.append("temaIlustrasi", formData.temaIlustrasi);
    payload.append("illustrationDetail", formData.detailIlustrasi);
    payload.append("detailIlustrasi", formData.detailIlustrasi);
    payload.append("contactName", formData.namaKontak);
    payload.append("namaKontak", formData.namaKontak);
    payload.append("whatsapp", cleanedPhone);
    payload.append("nomorWa", cleanedPhone);

    if (formData.logoFile) {
      payload.append("logo", formData.logoFile);
      payload.append("logoFile", formData.logoFile);
    }

    try {
      const response = await fetch(`${apiUrl}/design-requests`, {
        method: "POST",
        headers: {
          "Accept-Language": currentLang,
        },
        body: payload,
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || `Gagal mengirim kustomisasi (${response.status})`);
      }

      setSubmitStatus("success");
      setFormData({
        instansi: "",
        warnaUtama: "#387f79",
        temaIlustrasi: "Edukasi & Anak Sekolah",
        detailIlustrasi: "",
        logoFile: null,
        namaKontak: "",
        nomorWa: "",
      });
      if (logoPreview) URL.revokeObjectURL(logoPreview);
      setLogoPreview(null);
    } catch (err) {
      console.error("[Design Request Error]:", err);
      setSubmitStatus("error");
      setErrorMessage(
        err.message || t("requestRvm.errorAlert", "Terjadi kendala saat mengirim request.")
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="request-alat" className="max-w-7xl mx-auto px-6 lg:px-10 py-24">
      <div className="mb-12 text-center max-w-3xl mx-auto">
        <span className="inline-flex items-center gap-2 bg-eco-accent/10 text-eco-accent px-4 py-2 rounded-full font-heading text-sm font-semibold border border-eco-accent/20 mb-4">
          <span className="text-eco-accent text-lg">🎨</span> {t("requestRvm.badge", "Request Custom RVM")}
        </span>
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 font-heading mb-4">
          {t("requestRvm.title", "Rancang Mesin Sesuai")}{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-eco-primary to-eco-cyan">
            {t("requestRvm.titleHighlight", "Karakteristik Anda")}
          </span>
        </h2>
        <p className="text-lg text-slate-600 font-body">
          {t(
            "requestRvm.subtitle",
            "Sesuaikan warna, pasang logo instansi, dan pilih tema ilustrasi mesin EcoCash agar selaras dengan lingkungan, budaya, atau identitas visual instansi Anda."
          )}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-7 bg-white p-8 md:p-10 rounded-3xl shadow-xl shadow-slate-200/40 border border-slate-100">
          {submitStatus === "success" && (
            <div className="mb-8 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-sm flex items-center gap-3">
              <svg className="w-5 h-5 text-emerald-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              <span>{t("requestRvm.successAlert", "Request kustomisasi berhasil dikirim! Tim kami akan segera menghubungi Anda.")}</span>
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

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Bagian 1 */}
            <div>
              <h3 className="text-xl font-bold font-heading text-slate-900 mb-4 border-b border-slate-100 pb-2">
                {t("requestRvm.sec1Title", "1. Identitas & Warna Dasar")}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-slate-700 font-heading mb-2">
                    {t("requestRvm.labelCategory", "Kategori Instansi")} *
                  </label>
                  <select
                    name="instansi"
                    value={formData.instansi}
                    onChange={handleInputChange}
                    className="w-full bg-slate-50 border border-slate-200 text-slate-700 py-3 px-4 rounded-xl focus:outline-none focus:border-eco-primary focus:ring-2 focus:ring-eco-primary/20 transition-all font-body text-sm"
                    required
                    disabled={isSubmitting}
                  >
                    <option value="">{t("requestRvm.optSelect", "-- Pilih Instansi --")}</option>
                    <option value="Sekolah / Universitas">{t("requestRvm.optEdu", "Sekolah / Universitas")}</option>
                    <option value="Pemerintah Daerah / Desa">{t("requestRvm.optGov", "Pemerintah Daerah / Desa")}</option>
                    <option value="Perusahaan Swasta (CSR)">{t("requestRvm.optCorp", "Perusahaan Swasta (CSR)")}</option>
                    <option value="Komunitas / Fasilitas Umum">{t("requestRvm.optCommunity", "Komunitas / Fasilitas Umum")}</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 font-heading mb-2">
                    {t("requestRvm.labelColor", "Warna Utama Mesin")}
                  </label>
                  <div className="flex items-center gap-4">
                    <input
                      type="color"
                      name="warnaUtama"
                      value={formData.warnaUtama}
                      onChange={handleInputChange}
                      className="h-12 w-16 p-1 bg-slate-50 border border-slate-200 rounded-xl cursor-pointer"
                      disabled={isSubmitting}
                    />
                    <span className="text-sm font-body text-slate-500 bg-slate-100 px-3 py-1.5 rounded-lg border border-slate-200">
                      HEX: {formData.warnaUtama.toUpperCase()}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bagian 2 */}
            <div>
              <h3 className="text-xl font-bold font-heading text-slate-900 mb-4 border-b border-slate-100 pb-2">
                {t("requestRvm.sec2Title", "2. Desain Ilustrasi (Side Panel)")}
              </h3>
              <div className="mb-4">
                <label className="block text-sm font-bold text-slate-700 font-heading mb-2">
                  {t("requestRvm.labelTheme", "Pilih Tema Besar")}
                </label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {[
                    "Edukasi & Anak Sekolah",
                    "Budaya & Landmark Lokal",
                    "Go Green & Alam",
                    "Bebas / Custom",
                  ].map((tema) => (
                    <label
                      key={tema}
                      className={`cursor-pointer border rounded-xl p-3 text-center transition-all ${
                        formData.temaIlustrasi === tema
                          ? "border-eco-primary bg-eco-primary/10 shadow-sm text-eco-primary font-bold"
                          : "border-slate-200 text-slate-600 hover:bg-slate-50"
                      }`}
                    >
                      <input
                        type="radio"
                        name="temaIlustrasi"
                        value={tema}
                        checked={formData.temaIlustrasi === tema}
                        onChange={handleInputChange}
                        className="hidden"
                        disabled={isSubmitting}
                      />
                      <span className="text-xs font-heading">
                        {t(`requestRvm.theme_${tema}`, tema)}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 font-heading mb-2">
                  {t("requestRvm.labelDetail", "Jelaskan Detail Ilustrasi yang Diinginkan")}
                </label>
                <textarea
                  name="detailIlustrasi"
                  value={formData.detailIlustrasi}
                  onChange={handleInputChange}
                  rows="3"
                  placeholder={t(
                    "requestRvm.placeholderDetail",
                    "Contoh: Kami dari Pemkot Bandung. Kami ingin ilustrasi warga sedang membuang sampah dengan latar belakang Gedung Sate..."
                  )}
                  className="w-full bg-slate-50 border border-slate-200 text-slate-700 py-3 px-4 rounded-xl focus:outline-none focus:border-eco-primary focus:ring-2 focus:ring-eco-primary/20 transition-all font-body text-sm custom-scrollbar"
                  disabled={isSubmitting}
                ></textarea>
              </div>
            </div>

            {/* Bagian 3: Unggah Logo */}
            <div>
              <h3 className="text-xl font-bold font-heading text-slate-900 mb-4 border-b border-slate-100 pb-2">
                {t("requestRvm.sec3Title", "3. Logo Instansi (Opsional)")}
              </h3>

              {!logoPreview ? (
                <div className="border-2 border-dashed border-slate-300 rounded-2xl p-8 flex flex-col items-center justify-center bg-slate-50 hover:bg-eco-secondary/10 transition-colors cursor-pointer relative group">
                  <input
                    type="file"
                    onChange={handleFileChange}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    accept="image/png, image/jpeg, image/svg+xml"
                    disabled={isSubmitting}
                  />
                  <div className="w-12 h-12 bg-white rounded-full shadow-sm flex items-center justify-center mb-3 text-eco-primary group-hover:scale-110 transition-transform">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                    </svg>
                  </div>
                  <p className="text-sm font-bold font-heading text-slate-700">
                    {t("requestRvm.dragLogo", "Klik atau Drag file logo di sini")}
                  </p>
                  <p className="text-xs text-slate-500 font-body mt-1 text-center">
                    {t("requestRvm.formatLogo", "Format wajib PNG (Transparan), JPG, atau SVG. Maks 5MB.")}
                  </p>
                </div>
              ) : (
                <div className="border border-slate-200 rounded-2xl p-4 bg-white shadow-sm flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-xl border border-slate-100 overflow-hidden bg-slate-50 flex items-center justify-center p-1">
                      <img src={logoPreview} alt="Preview Logo" className="w-full h-full object-contain" />
                    </div>
                    <div>
                      <p className="text-sm font-bold font-heading text-slate-800 line-clamp-1">
                        {formData.logoFile?.name}
                      </p>
                      <p className="text-xs text-slate-500 font-body mt-0.5">
                        {formData.logoFile ? (formData.logoFile.size / 1024 / 1024).toFixed(2) : 0} MB
                      </p>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={handleRemoveLogo}
                    className="text-rose-500 hover:text-rose-700 hover:bg-rose-50 p-2.5 rounded-full transition-colors flex items-center justify-center cursor-pointer"
                    title="Hapus Logo"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                  </button>
                </div>
              )}
            </div>

            {/* Bagian 4: Kontak */}
            <div className="bg-eco-secondary/10 p-6 rounded-2xl border border-eco-secondary/30">
              <h3 className="text-lg font-bold font-heading text-slate-900 mb-4">
                {t("requestRvm.sec4Title", "4. Informasi Kontak Pemesan")}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <input
                  type="text"
                  name="namaKontak"
                  value={formData.namaKontak}
                  onChange={handleInputChange}
                  placeholder={t("requestRvm.placeholderContact", "Nama Lengkap / PIC")}
                  className="w-full bg-white border border-slate-200 text-slate-700 py-3 px-4 rounded-xl font-body text-sm outline-none focus:border-eco-primary"
                  required
                  disabled={isSubmitting}
                />
                <input
                  type="tel"
                  name="nomorWa"
                  value={formData.nomorWa}
                  onChange={handleInputChange}
                  placeholder={t("requestRvm.placeholderWa", "Nomor WhatsApp (Cth: 0812...)")}
                  className="w-full bg-white border border-slate-200 text-slate-700 py-3 px-4 rounded-xl font-body text-sm outline-none focus:border-eco-primary"
                  required
                  disabled={isSubmitting}
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-eco-primary hover:opacity-90 text-white py-4 rounded-xl font-heading font-bold text-base transition-all transform hover:-translate-y-0.5 shadow-lg shadow-eco-primary/20 flex items-center justify-center gap-2 disabled:opacity-50 cursor-pointer"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>{t("solutionCommon.btnSubmitting", "Mengirim...")}</span>
                  </>
                ) : (
                  <>
                    <span>{t("requestRvm.btnSubmit", "Kirim Permintaan Custom Desain")}</span>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </>
                )}
              </button>
            </div>
          </form>
        </div>

        {/* Kolom Kanan: Panduan Visual */}
        <div className="lg:col-span-5 relative lg:sticky lg:top-28">
          <div className="bg-slate-900 rounded-3xl p-6 shadow-2xl border border-slate-800 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-48 h-48 bg-eco-cyan/20 blur-3xl rounded-full -z-0"></div>

            <h3 className="text-white font-heading font-bold text-xl mb-4 relative z-10 flex items-center gap-2">
              {t("requestRvm.guideTitle", "Panduan Area Kustomisasi")}
            </h3>

            <div className="relative z-10 rounded-2xl overflow-hidden border border-slate-700 mb-5 group">
              <img
                src="img/rvm.png"
                alt="Referensi Mesin RVM"
                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute top-8 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-sm text-slate-900 text-[10px] font-bold px-2 py-1 rounded-md shadow-lg border border-slate-200 flex items-center gap-1 animate-bounce">
                <span className="w-2 h-2 rounded-full bg-eco-accent"></span> Top Banner
              </div>
              <div className="absolute bottom-12 right-8 bg-white/90 backdrop-blur-sm text-slate-900 text-[10px] font-bold px-2 py-1 rounded-md shadow-lg border border-slate-200 flex items-center gap-1 animate-pulse">
                <span className="w-2 h-2 rounded-full bg-eco-cyan"></span> Side Panel
              </div>
            </div>

            <ul className="space-y-3 relative z-10 text-sm font-body text-slate-300">
              <li className="flex items-start gap-3">
                <span className="text-eco-cyan mt-0.5">■</span>
                <p>
                  <strong className="text-white">{t("requestRvm.guideTopTitle", "Top Banner & Layar:")}</strong>{" "}
                  {t("requestRvm.guideTopDesc", "Area ideal untuk menempatkan Logo Instansi dan Slogan kampanye Anda.")}
                </p>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-eco-cyan mt-0.5">■</span>
                <p>
                  <strong className="text-white">{t("requestRvm.guideSideTitle", "Side Panel:")}</strong>{" "}
                  {t("requestRvm.guideSideDesc", "Area kanvas luas untuk mural/ilustrasi tematik (misal: landmark kota atau alam).")}
                </p>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-eco-accent mt-0.5">★</span>
                <p>
                  <strong className="text-white">{t("requestRvm.guideFrameTitle", "Warna Rangka:")}</strong>{" "}
                  {t("requestRvm.guideFrameDesc", "Warna dasar besi kontainer dapat disesuaikan dengan identitas brand Anda.")}
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bot Assistant */}
      <BotAssistant botFlowData={botFlowData} />
    </section>
  );
}