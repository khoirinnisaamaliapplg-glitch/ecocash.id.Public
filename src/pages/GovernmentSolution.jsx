import React, { useState, useEffect } from "react";

export default function GovernmentSolution() {
  // State untuk form inkuiri
  const [formData, setFormData] = useState({
    instansi: "",
    wilayah: "",
    namaPic: "",
    jabatan: "",
    whatsapp: "",
  });

  // Scroll ke atas saat halaman dimuat
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
      "Permintaan inkuiri Anda berhasil dikirim. Tim Government Relations kami akan segera menghubungi Anda.",
    );
  };

  return (
    <main className="w-full min-h-screen bg-white font-body text-slate-700">
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-gradient-to-b from-sky-50/50 via-white to-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            {/* Hero Teks */}
            <div className="max-w-xl relative z-10">
              {/* Badge */}
              <span className="inline-flex items-center gap-2 bg-slate-100/80 text-slate-600 px-4 py-2 rounded-full font-heading text-xs font-bold tracking-wider mb-6 border border-slate-200/60 shadow-sm backdrop-blur-sm">
                <svg
                  className="w-4 h-4 text-eco-cyan"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2L3 6v4.44C3 15.65 6.87 20.44 12 22c5.13-1.56 9-6.35 9-11.56V6l-9-4zm0 2.22l7 3.12v3.1c0 4.1-3.14 8.08-7 9.42-3.86-1.34-7-5.32-7-9.42v-3.1l7-3.12z" />
                </svg>
                Solusi Civic & Urban
              </span>

              <h1 className="text-4xl md:text-5xl lg:text-[44px] font-extrabold text-slate-900 font-heading leading-[1.25] mb-6">
                Transformasi Pengelolaan Sampah Kota Berbasis{" "}
                <span className="text-eco-cyan">
                  AI, IoT & Ekonomi Sirkular
                </span>{" "}
                Terpadu
              </h1>

              <p className="text-base sm:text-lg text-slate-500 font-body mb-8 leading-relaxed max-w-lg">
                Wujudkan Smart City yang bersih dan berkelanjutan dengan sistem
                manajemen sampah terintegrasi untuk reduksi beban TPA secara
                signifikan.
              </p>

              <a
                href="#form-kolaborasi"
                className="inline-flex items-center justify-center gap-2 bg-eco-cyan hover:bg-[#1eb5b1] text-white px-8 py-4 rounded-full font-heading font-bold text-sm transition-all transform hover:-translate-y-0.5 shadow-lg shadow-eco-cyan/30 w-fit"
              >
                Ajukan Audiensi / Studi Kelayakan
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

            {/* Hero Gambar (Dashboard Mockup) */}
            <div className="relative w-full flex justify-center lg:justify-end">
              {/* Efek Glow Biru/Cyan di belakang gambar */}
              <div className="absolute top-1/2 right-10 -translate-y-1/2 w-72 h-72 bg-eco-cyan/20 blur-[80px] rounded-full -z-10"></div>

              <div className="relative w-full max-w-lg rounded-2xl overflow-hidden shadow-2xl shadow-slate-200/50 bg-white border border-slate-100">
                <img
                  src="img/dashboard-smartcity.png"
                  alt="Dashboard Smart City EcoCash"
                  className="w-full h-auto object-cover"
                  onError={(e) => {
                    e.target.style.display = "none";
                    e.target.parentElement.innerHTML = `<div class="w-full h-[350px] flex items-center justify-center bg-slate-50 text-slate-400 font-body text-sm text-center p-6 border-2 border-dashed border-slate-200 rounded-2xl">Siapkan gambar dashboard-smartcity.png<br/>di folder public/img</div>`;
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
            Pilar Solusi Smart City
          </h2>
          <p className="text-slate-500 font-body text-lg max-w-2xl mx-auto">
            Pendekatan holistik untuk mengatasi tantangan manajemen sampah urban
            skala besar.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {/* Card 1 */}
          <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-lg transition-shadow group">
            <div className="w-14 h-14 bg-eco-cyan/10 text-eco-cyan rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <svg
                className="w-7 h-7"
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
            <h3 className="text-xl font-bold font-heading text-slate-900 mb-3">
              Centralized Waste Monitoring
            </h3>
            <p className="text-slate-500 font-body text-sm leading-relaxed">
              Dashboard pemantauan terpusat untuk visibilitas real-time seluruh
              titik RVM. Pantau kapasitas, status operasional, dan prediksi
              pengangkutan secara efisien.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-lg transition-shadow group">
            <div className="w-14 h-14 bg-eco-cyan/10 text-eco-cyan rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <svg
                className="w-7 h-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold font-heading text-slate-900 mb-3">
              Informal Sector Empowerment
            </h3>
            <p className="text-slate-500 font-body text-sm leading-relaxed">
              Pemberdayaan pekerja lapangan dan pemulung lokal melalui integrasi
              sistem logistik. Tingkatkan kesejahteraan sekaligus efisiensi
              pengumpulan.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-lg transition-shadow group">
            <div className="w-14 h-14 bg-eco-cyan/10 text-eco-cyan rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <svg
                className="w-7 h-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold font-heading text-slate-900 mb-3">
              Landfill Diversion Analytics
            </h3>
            <p className="text-slate-500 font-body text-sm leading-relaxed">
              Analisis data akurat untuk mereduksi volume sampah yang berakhir
              di TPA kota. Lacak tonase material terdaur ulang berdasarkan
              distrik.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-lg transition-shadow group">
            <div className="w-14 h-14 bg-eco-cyan/10 text-eco-cyan rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <svg
                className="w-7 h-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold font-heading text-slate-900 mb-3">
              Policy Compliance Data
            </h3>
            <p className="text-slate-500 font-body text-sm leading-relaxed">
              Laporan data spasial dan tonase terstruktur untuk mendukung
              regulasi pengelolaan sampah daerah dan target pembangunan
              berkelanjutan (SDGs).
            </p>
          </div>
        </div>
      </section>

      {/* 3. FORMULIR KOLABORASI (Split Layout Dark Green & White) */}
      <section
        id="form-kolaborasi"
        className="py-24 bg-slate-50 px-6 scroll-mt-10"
      >
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row rounded-[2rem] overflow-hidden shadow-xl shadow-slate-200/50">
          {/* Bagian Kiri: Info Box (Dark Green) */}
          <div className="w-full md:w-[40%] bg-[#064e3b] p-10 md:p-12 text-white flex flex-col">
            <div className="mb-10">
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-6 backdrop-blur-sm border border-white/10">
                <svg
                  className="w-8 h-8 text-eco-cyan"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M3 21v-4m22 4v-4m-22-4h22M3 13h22m-22-4h22M8 4h8m-8 0a2 2 0 00-2 2v3m10-5a2 2 0 012 2v3"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M12 11l4-3-4-3-4 3 4 3z"
                  />
                </svg>
              </div>
              <h2 className="text-3xl font-extrabold font-heading mb-4">
                Mari Berkolaborasi
              </h2>
              <p className="text-emerald-100 font-body text-sm md:text-base leading-relaxed">
                Tim spesialis government relations kami siap mendiskusikan
                kebutuhan spesifik kota atau daerah Anda untuk implementasi
                sistem EcoCash.
              </p>
            </div>

            <div className="mt-auto space-y-4 pt-8 border-t border-white/10">
              <div className="flex items-center gap-3 text-emerald-100 text-sm font-body">
                <svg
                  className="w-5 h-5 shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                gov@ecocash.id
              </div>
              <div className="flex items-center gap-3 text-emerald-100 text-sm font-body">
                <svg
                  className="w-5 h-5 shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                Jakarta Selatan, Indonesia
              </div>
            </div>
          </div>

          {/* Bagian Kanan: Formulir Inkuiri (White) */}
          <div className="w-full md:w-[60%] bg-white p-10 md:p-12">
            <h3 className="text-2xl font-bold font-heading text-slate-900 mb-8">
              Formulir Inkuiri Resmi
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Row 1: Instansi (Full width) */}
              <div>
                <label className="block text-xs font-bold text-slate-700 font-heading mb-2">
                  Nama Instansi/Dinas *
                </label>
                <input
                  type="text"
                  name="instansi"
                  value={formData.instansi}
                  onChange={handleInputChange}
                  placeholder="Cth: Dinas Lingkungan Hidup Kota X"
                  className="w-full bg-slate-50 border border-slate-200 py-3.5 px-4 rounded-xl focus:outline-none focus:border-eco-cyan focus:ring-2 focus:ring-eco-cyan/20 transition-all text-sm font-body"
                  required
                />
              </div>

              {/* Row 2: Wilayah & Nama Pejabat */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-slate-700 font-heading mb-2">
                    Wilayah/Kota *
                  </label>
                  <input
                    type="text"
                    name="wilayah"
                    value={formData.wilayah}
                    onChange={handleInputChange}
                    placeholder="Masukkan nama kota"
                    className="w-full bg-slate-50 border border-slate-200 py-3.5 px-4 rounded-xl focus:outline-none focus:border-eco-cyan focus:ring-2 focus:ring-eco-cyan/20 transition-all text-sm font-body"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 font-heading mb-2">
                    Nama Pejabat PIC *
                  </label>
                  <input
                    type="text"
                    name="namaPic"
                    value={formData.namaPic}
                    onChange={handleInputChange}
                    placeholder="Nama lengkap"
                    className="w-full bg-slate-50 border border-slate-200 py-3.5 px-4 rounded-xl focus:outline-none focus:border-eco-cyan focus:ring-2 focus:ring-eco-cyan/20 transition-all text-sm font-body"
                    required
                  />
                </div>
              </div>

              {/* Row 3: Jabatan & WhatsApp */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-slate-700 font-heading mb-2">
                    Jabatan *
                  </label>
                  <input
                    type="text"
                    name="jabatan"
                    value={formData.jabatan}
                    onChange={handleInputChange}
                    placeholder="Cth: Kepala Bidang"
                    className="w-full bg-slate-50 border border-slate-200 py-3.5 px-4 rounded-xl focus:outline-none focus:border-eco-cyan focus:ring-2 focus:ring-eco-cyan/20 transition-all text-sm font-body"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 font-heading mb-2">
                    WhatsApp Resmi *
                  </label>
                  <input
                    type="tel"
                    name="whatsapp"
                    value={formData.whatsapp}
                    onChange={handleInputChange}
                    placeholder="+62"
                    className="w-full bg-slate-50 border border-slate-200 py-3.5 px-4 rounded-xl focus:outline-none focus:border-eco-cyan focus:ring-2 focus:ring-eco-cyan/20 transition-all text-sm font-body"
                    required
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full bg-eco-cyan hover:bg-[#1eb5b1] text-white py-4 rounded-xl font-heading font-bold text-sm transition-all shadow-lg shadow-eco-cyan/20 flex items-center justify-center"
                >
                  Kirim Permintaan
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
