import React, { useState, useEffect } from "react";

export default function CaraKerjaKelolaLokasi() {
  // State untuk form penempatan RVM
  const [formData, setFormData] = useState({
    namaPengelola: "",
    namaProperti: "",
    kota: "",
    whatsapp: "",
  });

  // Scroll otomatis ke atas saat halaman dimuat
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      "Pengajuan Anda berhasil dikirim! Tim operasional kami akan segera meninjau lokasi Anda.",
    );
  };

  return (
    <main className="w-full min-h-screen bg-white font-body text-slate-700">
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Hero Teks */}
          <div className="max-w-xl">
            <h1 className="text-4xl md:text-5xl lg:text-[46px] font-extrabold text-slate-900 font-heading leading-[1.25] mb-6 tracking-tight">
              Hadirkan Titik Daur Ulang Pintar di Properti Anda Tanpa Biaya
              Repot
            </h1>

            <p className="text-base sm:text-lg text-slate-500 font-body mb-10 leading-relaxed max-w-lg">
              Optimalkan ruang publik Anda dengan solusi keberlanjutan berbasis
              AI. Kami tangani operasionalnya, Anda nikmati dampaknya.
            </p>

            <a
              href="#form-pengelola"
              className="inline-flex items-center justify-center gap-2 bg-eco-cyan hover:bg-[#1eb5b1] text-white px-8 py-3.5 rounded-lg font-heading font-bold text-sm transition-all transform hover:-translate-y-0.5 shadow-lg shadow-eco-cyan/30"
            >
              Ajukan Penempatan RVM
              <svg
                className="w-4 h-4"
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
            </a>
          </div>

          {/* Hero Gambar */}
          <div className="relative w-full flex justify-center lg:justify-end">
            <div className="absolute top-1/2 right-10 -translate-y-1/2 w-72 h-72 bg-eco-cyan/10 blur-[80px] rounded-full -z-10"></div>

            <div className="relative w-full max-w-lg rounded-[2rem] overflow-hidden shadow-2xl shadow-slate-200/50">
              <img
                src="img/hero-kelola-lokasi.png"
                alt="Orang menggunakan RVM di dalam gedung properti"
                className="w-full h-auto object-cover"
                onError={(e) => {
                  e.target.style.display = "none";
                  e.target.parentElement.innerHTML = `<div class="w-full h-[400px] flex items-center justify-center bg-slate-50 text-slate-400 font-body text-sm text-center p-6 border-2 border-dashed border-slate-200 rounded-[2rem]">Siapkan gambar hero-pengelola.jpg<br/>di folder public/img</div>`;
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
            Proses Penempatan yang Mudah
          </h2>

          {/* Grid 4 Langkah */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {/* Langkah 1 */}
            <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-[0_2px_15px_rgb(0,0,0,0.02)] hover:shadow-lg transition-shadow relative overflow-hidden group">
              {/* Watermark Icon (Faded in background) */}
              <div className="absolute top-4 right-4 text-slate-100/80 group-hover:text-eco-cyan/5 transition-colors">
                <svg
                  className="w-20 h-20"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1"
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
              <div className="relative z-10">
                <span className="inline-block bg-[#e0f8f7] text-eco-cyan text-xs font-bold px-3 py-1.5 rounded-lg mb-6">
                  Langkah 1
                </span>
                <h3 className="text-lg font-bold font-heading text-slate-900 mb-3">
                  Pengajuan Formulir Lokasi
                </h3>
                <p className="text-slate-500 font-body text-sm leading-relaxed">
                  Isi detail properti dan estimasi trafik pengunjung harian
                  Anda.
                </p>
              </div>
            </div>

            {/* Langkah 2 */}
            <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-[0_2px_15px_rgb(0,0,0,0.02)] hover:shadow-lg transition-shadow relative overflow-hidden group">
              <div className="absolute top-4 right-4 text-slate-100/80 group-hover:text-eco-cyan/5 transition-colors">
                <svg
                  className="w-20 h-20"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1"
                    d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zm-7.518-.267A8.25 8.25 0 1120.25 10.5M8.288 14.212A5.25 5.25 0 1117.25 10.5"
                  />
                </svg>
              </div>
              <div className="relative z-10">
                <span className="inline-block bg-[#e0f8f7] text-eco-cyan text-xs font-bold px-3 py-1.5 rounded-lg mb-6">
                  Langkah 2
                </span>
                <h3 className="text-lg font-bold font-heading text-slate-900 mb-3">
                  Analisis & Survei Titik
                </h3>
                <p className="text-slate-500 font-body text-sm leading-relaxed">
                  Tim teknis kami melakukan verifikasi kelayakan daya listrik
                  dan sinyal IoT.
                </p>
              </div>
            </div>

            {/* Langkah 3 */}
            <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-[0_2px_15px_rgb(0,0,0,0.02)] hover:shadow-lg transition-shadow relative overflow-hidden group">
              <div className="absolute top-4 right-4 text-slate-100/80 group-hover:text-eco-cyan/5 transition-colors">
                <svg
                  className="w-20 h-20"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1"
                    d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 011.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 01-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.397.165-.71.505-.78.929l-.15.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 01-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.107-1.204l-.527-.738a1.125 1.125 0 01.12-1.45l.773-.773a1.125 1.125 0 011.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <div className="relative z-10">
                <span className="inline-block bg-[#e0f8f7] text-eco-cyan text-xs font-bold px-3 py-1.5 rounded-lg mb-6">
                  Langkah 3
                </span>
                <h3 className="text-lg font-bold font-heading text-slate-900 mb-3">
                  Instalasi Mesin Siap Pakai
                </h3>
                <p className="text-slate-500 font-body text-sm leading-relaxed">
                  Pengiriman dan pemasangan unit RVM dilakukan dalam 1 hari
                  kerja.
                </p>
              </div>
            </div>

            {/* Langkah 4 */}
            <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-[0_2px_15px_rgb(0,0,0,0.02)] hover:shadow-lg transition-shadow relative overflow-hidden group">
              <div className="absolute top-4 right-4 text-slate-100/80 group-hover:text-eco-cyan/5 transition-colors">
                <svg
                  className="w-20 h-20"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1"
                    d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
                  />
                </svg>
              </div>
              <div className="relative z-10">
                <span className="inline-block bg-[#e0f8f7] text-eco-cyan text-xs font-bold px-3 py-1.5 rounded-lg mb-6">
                  Langkah 4
                </span>
                <h3 className="text-lg font-bold font-heading text-slate-900 mb-3">
                  Logistik Pengosongan Otomatis
                </h3>
                <p className="text-slate-500 font-body text-sm leading-relaxed">
                  Sensor kami mendeteksi kapasitas penuh dan mengirim mitra
                  penjemput secara otomatis.
                </p>
              </div>
            </div>
          </div>

          {/* Grid 2 Value Proposition */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {/* Value 1 */}
            <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-[0_2px_15px_rgb(0,0,0,0.02)] flex flex-col md:flex-row items-start md:items-center gap-5 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-[#e0f8f7] text-eco-cyan rounded-full flex items-center justify-center shrink-0">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.492-3.053c.24-.294.24-.712.002-1.006A3.992 3.992 0 0010 9a3.992 3.992 0 00-3.915 2.11m7.827 3.055L9 10m-3.414 4.586l3.414-3.414M9 10a1.5 1.5 0 00-2.121-2.121M3 9a6 6 0 1112 0 6 6 0 01-12 0z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold font-heading text-slate-900 mb-2">
                  Zero Maintenance Effort
                </h3>
                <p className="text-slate-500 font-body text-sm leading-relaxed">
                  Kami bertanggung jawab penuh atas pemeliharaan rutin dan
                  perbaikan teknis. Anda tidak perlu khawatir tentang
                  operasional mesin sehari-hari.
                </p>
              </div>
            </div>

            {/* Value 2 */}
            <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-[0_2px_15px_rgb(0,0,0,0.02)] flex flex-col md:flex-row items-start md:items-center gap-5 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-[#e0f8f7] text-eco-cyan rounded-full flex items-center justify-center shrink-0">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M3 13h2.25l2.25 5.25L12 3l2.25 15.25L16.5 13H21"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold font-heading text-slate-900 mb-2">
                  ESG Monthly Reporting
                </h3>
                <p className="text-slate-500 font-body text-sm leading-relaxed">
                  Dapatkan laporan dashboard bulanan mengenai volume sampah dan
                  reduksi emisi karbon (CO2e) untuk mendukung inisiatif hijau
                  perusahaan Anda.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FORMULIR PENEMPATAN (CENTERED CARD - SESUAI DESAIN GAMBAR) */}
      <section id="form-pengelola" className="py-24 bg-[#eaf1fb] scroll-mt-10">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-white p-10 md:p-14 rounded-[2rem] shadow-xl border border-slate-100 text-center">
            {/* Ikon Daun (Leaf) di Tengah Atas */}
            <div className="flex justify-center mb-5">
              <div className="text-[#064e3b]">
                <svg
                  className="w-10 h-10"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"
                  />
                </svg>
              </div>
            </div>

            <h2 className="text-2xl md:text-3xl font-extrabold font-heading text-slate-900 mb-3">
              Mulai Langkah Hijau Anda
            </h2>
            <p className="text-slate-500 font-body text-sm md:text-base mb-10">
              Daftarkan properti Anda untuk penempatan unit RVM pintar.
            </p>

            <form onSubmit={handleSubmit} className="text-left space-y-6">
              {/* Row 1 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[11px] font-bold text-slate-700 font-heading mb-2 uppercase tracking-wide">
                    Nama Pengelola
                  </label>
                  <input
                    type="text"
                    name="namaPengelola"
                    value={formData.namaPengelola}
                    onChange={handleInputChange}
                    placeholder="Masukkan nama lengkap"
                    className="w-full bg-white border border-slate-300 py-3.5 px-4 rounded-xl focus:outline-none focus:border-eco-cyan focus:ring-2 focus:ring-eco-cyan/20 transition-all text-sm font-body"
                    required
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-slate-700 font-heading mb-2 uppercase tracking-wide">
                    Nama Gedung/Properti
                  </label>
                  <input
                    type="text"
                    name="namaProperti"
                    value={formData.namaProperti}
                    onChange={handleInputChange}
                    placeholder="Contoh: Gedung Nusantara"
                    className="w-full bg-white border border-slate-300 py-3.5 px-4 rounded-xl focus:outline-none focus:border-eco-cyan focus:ring-2 focus:ring-eco-cyan/20 transition-all text-sm font-body"
                    required
                  />
                </div>
              </div>

              {/* Row 2 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[11px] font-bold text-slate-700 font-heading mb-2 uppercase tracking-wide">
                    Kota
                  </label>
                  <input
                    type="text"
                    name="kota"
                    value={formData.kota}
                    onChange={handleInputChange}
                    placeholder="Contoh: Jakarta Selatan"
                    className="w-full bg-white border border-slate-300 py-3.5 px-4 rounded-xl focus:outline-none focus:border-eco-cyan focus:ring-2 focus:ring-eco-cyan/20 transition-all text-sm font-body"
                    required
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-slate-700 font-heading mb-2 uppercase tracking-wide">
                    Nomor WhatsApp
                  </label>
                  <input
                    type="tel"
                    name="whatsapp"
                    value={formData.whatsapp}
                    onChange={handleInputChange}
                    placeholder="08xx xxxx xxxx"
                    className="w-full bg-white border border-slate-300 py-3.5 px-4 rounded-xl focus:outline-none focus:border-eco-cyan focus:ring-2 focus:ring-eco-cyan/20 transition-all text-sm font-body"
                    required
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full bg-eco-cyan hover:bg-[#1eb5b1] text-white py-4 rounded-xl font-heading font-bold text-sm transition-all shadow-lg shadow-eco-cyan/20"
                >
                  Kirim Pengajuan
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
