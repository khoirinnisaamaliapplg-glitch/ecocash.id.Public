import React, { useState, useEffect } from "react";

export default function UniversitySchoolSolution() {
  const [formData, setFormData] = useState({
    institusi: "",
    wilayah: "",
    namaPic: "",
    jabatan: "",
    whatsapp: "",
  });
  const [paketTerpilih, setPaketTerpilih] = useState("green-campus");

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
      "Permintaan Anda berhasil dikirim. Tim Edukasi EcoCash akan segera menghubungi sekolah/kampus Anda.",
    );
  };

  return (
    <main className="w-full min-h-screen bg-[#fafafc] font-body text-slate-700">
      {/* 1. HERO SECTION (PERSIS GAMBAR) */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            {/* Hero Teks */}
            <div className="max-w-xl relative z-10">
              <h1 className="text-4xl md:text-5xl lg:text-[44px] font-extrabold text-slate-900 font-heading leading-[1.25] mb-6">
                Wujudkan <span className="text-eco-cyan">Green Campus</span>{" "}
                <br className="hidden lg:block" />
                & Budaya Pilah Sampah <br className="hidden lg:block" />
                Sejak Dini
              </h1>

              <p className="text-base sm:text-lg text-slate-500 font-body mb-10 leading-relaxed max-w-lg">
                Bangun kebiasaan berkelanjutan di lingkungan pendidikan.
                Berdayakan siswa dan mahasiswa dengan tabungan digital,
                gamifikasi ramah lingkungan, dan teknologi Reverse Vending
                Machine (RVM) modern.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="#form-kolaborasi"
                  className="inline-flex items-center justify-center bg-eco-cyan hover:bg-[#1eb5b1] text-white px-8 py-3.5 rounded-full font-heading font-bold text-sm transition-all transform hover:-translate-y-0.5 shadow-lg shadow-eco-cyan/30"
                >
                  Daftarkan Sekolah/Kampus
                </a>
                <a
                  href="#paket-solusi"
                  className="inline-flex items-center justify-center bg-transparent border-2 border-slate-700 text-slate-700 hover:border-eco-cyan hover:text-eco-cyan px-8 py-3.5 rounded-full font-heading font-bold text-sm transition-colors"
                >
                  Pelajari Lebih Lanjut
                </a>
              </div>
            </div>

            {/* Hero Gambar (Foto Mahasiswa) */}
            <div className="relative w-full flex justify-center lg:justify-end">
              <div className="relative w-full max-w-md lg:max-w-lg rounded-3xl overflow-hidden shadow-2xl shadow-slate-200/50">
                <img
                  src="img/hero-solution-edu.jpg"
                  alt="Mahasiswa menggunakan EcoCash RVM"
                  className="w-full h-auto object-cover"
                  onError={(e) => {
                    e.target.style.display = "none";
                    e.target.parentElement.innerHTML = `<div class="w-full h-[450px] flex items-center justify-center bg-slate-100 text-slate-400 font-body text-sm text-center p-6 border-2 border-dashed border-slate-200 rounded-3xl">Siapkan gambar hero-kampus.jpg<br/>di folder public/img</div>`;
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. KEUNGGULAN EKOSISTEM KAMI (3 KARTU PERSIS DESAIN) */}
      <section className="py-24 max-w-7xl mx-auto px-6 lg:px-10 bg-[#fafafc]">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-slate-900 font-heading mb-4">
            Keunggulan Ekosistem Kami
          </h2>
          <p className="text-slate-500 font-body text-lg max-w-2xl mx-auto">
            Solusi terpadu untuk membentuk gaya hidup peduli lingkungan di
            institusi pendidikan.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Kartu 1: Student Digital Savings */}
          <div className="bg-white p-8 md:p-10 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-sky-50 text-eco-cyan rounded-xl flex items-center justify-center mb-6">
              {/* Ikon Dompet/Tabungan */}
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
                  d="M21 12a2.25 2.25 0 00-2.25-2.25H15a3 3 0 11-6 0H4.5A2.25 2.25 0 002.25 12v6.75A2.25 2.25 0 004.5 21h15a2.25 2.25 0 002.25-2.25V12zm-9-2.25h.008v.008H12V9.75z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M2.25 9.75v-.375c0-.621.504-1.125 1.125-1.125h15.75c.621 0 1.125.504 1.125 1.125v.375"
                />
              </svg>
            </div>
            <h3 className="text-lg font-bold font-heading text-slate-900 mb-3">
              Student Digital Savings
            </h3>
            <p className="text-slate-500 font-body text-sm leading-relaxed">
              Konversi botol jadi saldo tabungan digital siswa. Melatih
              kebiasaan menabung sekaligus menjaga kebersihan lingkungan
              sekolah.
            </p>
          </div>

          {/* Kartu 2: Campus Green Leaderboard */}
          <div className="bg-white p-8 md:p-10 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-sky-50 text-eco-cyan rounded-xl flex items-center justify-center mb-6">
              {/* Ikon Grafik/Leaderboard */}
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
            <h3 className="text-lg font-bold font-heading text-slate-900 mb-3">
              Campus Green Leaderboard
            </h3>
            <p className="text-slate-500 font-body text-sm leading-relaxed">
              Gamifikasi kompetisi pilah sampah antar kelas atau fakultas.
              Meningkatkan partisipasi melalui persaingan yang sehat dan
              interaktif.
            </p>
          </div>

          {/* Kartu 3: Educational Workshops */}
          <div className="bg-white p-8 md:p-10 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-sky-50 text-eco-cyan rounded-xl flex items-center justify-center mb-6">
              {/* Ikon Topi Pendidikan */}
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
                  d="M12 4.5L1 10l11 5.5L23 10l-11-5.5z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M5 12.25V17a3 3 0 003 3h8a3 3 0 003-3v-4.75"
                />
              </svg>
            </div>
            <h3 className="text-lg font-bold font-heading text-slate-900 mb-3">
              Educational Workshops
            </h3>
            <p className="text-slate-500 font-body text-sm leading-relaxed">
              Modul belajar lingkungan interaktif dari EcoCash Academy.
              Kurikulum pendukung untuk meningkatkan literasi lingkungan siswa.
            </p>
          </div>
        </div>
      </section>

      {/* 3. PILIH PAKET TRANSFORMASI HIJAU (INTERAKTIF) */}
      <section
        id="paket-solusi"
        className="py-24 max-w-5xl mx-auto px-6 lg:px-10 bg-[#fafafc]"
      >
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-slate-900 font-heading mb-4">
            Pilih Paket Transformasi Hijau
          </h2>
          <p className="text-slate-500 font-body text-lg max-w-2xl mx-auto">
            Sesuaikan solusi dengan skala institusi pendidikan Anda.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-stretch">
          {/* Paket Kiri: Paket Smart School */}
          <div
            onClick={() => setPaketTerpilih("smart-school")}
            className={`bg-white p-10 rounded-[2rem] border-2 flex flex-col h-full relative transition-all duration-300 cursor-pointer group ${
              paketTerpilih === "smart-school"
                ? "border-eco-cyan shadow-lg shadow-eco-cyan/15 -translate-y-2"
                : "border-slate-200 shadow-sm hover:-translate-y-2 hover:shadow-xl hover:border-eco-cyan/50"
            }`}
          >
            {/* Label Kategori Relevan (Muncul statis atau saat dipilih) */}
            <div
              className={`absolute top-0 right-10 -translate-y-1/2 px-5 py-1.5 rounded-full text-[11px] font-bold font-heading uppercase tracking-widest shadow-md flex items-center gap-1.5 transition-all duration-300 ${
                paketTerpilih === "smart-school"
                  ? "bg-eco-cyan text-white"
                  : "bg-slate-200 text-slate-500 opacity-0 group-hover:opacity-100"
              }`}
            >
              Starter Pilihan
            </div>

            <h3
              className={`text-2xl font-bold font-heading mb-2 transition-colors duration-300 ${
                paketTerpilih === "smart-school"
                  ? "text-eco-cyan"
                  : "text-slate-900 group-hover:text-eco-cyan"
              }`}
            >
              Paket Smart School
            </h3>
            <p className="text-sm text-slate-500 font-body mb-8">
              Ideal untuk SD, SMP, dan SMA.
            </p>

            <ul className="space-y-4 flex-1 mb-10">
              {/* List 1 */}
              <li className="flex items-center gap-3 text-sm text-slate-700 font-body font-medium transition-transform duration-300 hover:translate-x-2 hover:text-eco-cyan">
                <div className="w-5 h-5 rounded-full bg-[#10b981] text-white flex items-center justify-center shrink-0 shadow-sm">
                  <svg
                    className="w-3.5 h-3.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="3"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                1 Unit Compact RVM
              </li>
              {/* List 2 */}
              <li className="flex items-center gap-3 text-sm text-slate-700 font-body font-medium transition-transform duration-300 hover:translate-x-2 hover:text-eco-cyan">
                <div className="w-5 h-5 rounded-full bg-[#10b981] text-white flex items-center justify-center shrink-0 shadow-sm">
                  <svg
                    className="w-3.5 h-3.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="3"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                Basic Analytics Dashboard
              </li>
              {/* List 3 */}
              <li className="flex items-center gap-3 text-sm text-slate-700 font-body font-medium transition-transform duration-300 hover:translate-x-2 hover:text-eco-cyan">
                <div className="w-5 h-5 rounded-full bg-[#10b981] text-white flex items-center justify-center shrink-0 shadow-sm">
                  <svg
                    className="w-3.5 h-3.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="3"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                Student App Access
              </li>
            </ul>

            <a
              href="#form-kolaborasi"
              className={`block text-center w-full py-3.5 rounded-xl font-bold font-heading text-sm transition-all duration-300 hover:scale-[1.02] active:scale-95 ${
                paketTerpilih === "smart-school"
                  ? "bg-eco-cyan text-white shadow-lg shadow-eco-cyan/20 hover:bg-[#1eb5b1]"
                  : "border-2 border-slate-300 text-slate-600 hover:border-eco-cyan hover:bg-eco-cyan/5 hover:text-eco-cyan"
              }`}
            >
              Pilih Paket
            </a>
          </div>

          {/* Paket Kanan: Paket Green Campus (Highlighted Default) */}
          <div
            onClick={() => setPaketTerpilih("green-campus")}
            className={`bg-white p-10 rounded-[2rem] border-2 flex flex-col h-full relative transition-all duration-300 cursor-pointer group ${
              paketTerpilih === "green-campus"
                ? "border-eco-cyan shadow-lg shadow-eco-cyan/15 -translate-y-2"
                : "border-slate-200 shadow-sm hover:-translate-y-2 hover:shadow-xl hover:border-eco-cyan/50"
            }`}
          >
            {/* Badge Paling Populer */}
            <div
              className={`absolute top-0 right-10 -translate-y-1/2 px-5 py-1.5 rounded-full text-[11px] font-bold font-heading uppercase tracking-widest shadow-md flex items-center gap-1.5 transition-all duration-300 ${
                paketTerpilih === "green-campus"
                  ? "bg-eco-cyan text-white"
                  : "bg-slate-200 text-slate-500 opacity-0 group-hover:opacity-100"
              }`}
            >
              Paling Populer
            </div>

            <h3
              className={`text-2xl font-bold font-heading mb-2 transition-colors duration-300 ${
                paketTerpilih === "green-campus"
                  ? "text-slate-900"
                  : "text-slate-900 group-hover:text-eco-cyan"
              }`}
            >
              Paket Green Campus
            </h3>
            <p className="text-sm text-slate-500 font-body mb-8">
              Solusi komprehensif untuk Universitas & Kampus Besar.
            </p>

            <ul className="space-y-4 flex-1 mb-10">
              {/* List 1 */}
              <li className="flex items-center gap-3 text-sm text-slate-700 font-body font-medium transition-transform duration-300 hover:translate-x-2 hover:text-eco-cyan">
                <div className="w-5 h-5 rounded-full bg-[#10b981] text-white flex items-center justify-center shrink-0 shadow-sm">
                  <svg
                    className="w-3.5 h-3.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="3"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                Multi-unit RVM Deployment
              </li>
              {/* List 2 */}
              <li className="flex items-center gap-3 text-sm text-slate-700 font-body font-medium transition-transform duration-300 hover:translate-x-2 hover:text-eco-cyan">
                <div className="w-5 h-5 rounded-full bg-[#10b981] text-white flex items-center justify-center shrink-0 shadow-sm">
                  <svg
                    className="w-3.5 h-3.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="3"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                Sustainability Dashboard for Institution
              </li>
              {/* List 3 */}
              <li className="flex items-center gap-3 text-sm text-slate-700 font-body font-medium transition-transform duration-300 hover:translate-x-2 hover:text-eco-cyan">
                <div className="w-5 h-5 rounded-full bg-[#10b981] text-white flex items-center justify-center shrink-0 shadow-sm">
                  <svg
                    className="w-3.5 h-3.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="3"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                EcoCash Academy Workshops
              </li>
              {/* List 4 */}
              <li className="flex items-center gap-3 text-sm text-slate-700 font-body font-medium transition-transform duration-300 hover:translate-x-2 hover:text-eco-cyan">
                <div className="w-5 h-5 rounded-full bg-[#10b981] text-white flex items-center justify-center shrink-0 shadow-sm">
                  <svg
                    className="w-3.5 h-3.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="3"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                Dedicated Account Manager
              </li>
            </ul>

            <a
              href="#form-kolaborasi"
              className={`block text-center w-full py-3.5 rounded-xl font-bold font-heading text-sm transition-all duration-300 hover:scale-[1.02] active:scale-95 ${
                paketTerpilih === "green-campus"
                  ? "bg-eco-cyan text-white shadow-lg shadow-eco-cyan/20 hover:bg-[#1eb5b1] hover:shadow-eco-cyan/40"
                  : "border-2 border-slate-300 text-slate-600 hover:border-eco-cyan hover:bg-eco-cyan/5 hover:text-eco-cyan"
              }`}
            >
              Konsultasi Gratis
            </a>
          </div>
        </div>
      </section>

      {/* 4. FORMULIR KOLABORASI (TETAP KONSISTEN DENGAN HALAMAN LAIN / SPLIT LAYOUT) */}
      <section
        id="form-kolaborasi"
        className="py-24 bg-white px-6 scroll-mt-10 border-t border-slate-100"
      >
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row rounded-[2rem] overflow-hidden shadow-xl shadow-slate-200/50">
          {/* Info Box (Kiri - Hijau Gelap) */}
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
                    d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z"
                  />
                </svg>
              </div>
              <h2 className="text-3xl font-extrabold font-heading mb-4">
                Mulai Program Kampus Hijau
              </h2>
              <p className="text-emerald-100 font-body text-sm md:text-base leading-relaxed">
                Tim edukasi kami siap mendiskusikan implementasi RVM, seminar,
                dan program kesadaran lingkungan di sekolah atau kampus Anda.
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
                edu@ecocash.id
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

          {/* Form (Kanan - Putih) */}
          <div className="w-full md:w-[60%] bg-white p-10 md:p-12 border border-slate-100 md:border-l-0 rounded-b-[2rem] md:rounded-bl-none md:rounded-r-[2rem]">
            <h3 className="text-2xl font-bold font-heading text-slate-900 mb-8">
              Formulir Kemitraan Edukasi
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-xs font-bold text-slate-700 font-heading mb-2">
                  Nama Sekolah / Universitas *
                </label>
                <input
                  type="text"
                  name="institusi"
                  value={formData.institusi}
                  onChange={handleInputChange}
                  placeholder="Cth: SMA Negeri 1 Bandung / Universitas XYZ"
                  className="w-full bg-slate-50 border border-slate-200 py-3.5 px-4 rounded-xl focus:outline-none focus:border-eco-cyan focus:ring-2 focus:ring-eco-cyan/20 transition-all text-sm font-body"
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-slate-700 font-heading mb-2">
                    Kota/Kabupaten *
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
                    Nama Perwakilan (PIC) *
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

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-slate-700 font-heading mb-2">
                    Jabatan / Posisi *
                  </label>
                  <input
                    type="text"
                    name="jabatan"
                    value={formData.jabatan}
                    onChange={handleInputChange}
                    placeholder="Cth: Kepala Sekolah, Rektorat, BEM"
                    className="w-full bg-slate-50 border border-slate-200 py-3.5 px-4 rounded-xl focus:outline-none focus:border-eco-cyan focus:ring-2 focus:ring-eco-cyan/20 transition-all text-sm font-body"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 font-heading mb-2">
                    WhatsApp Aktif *
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

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full bg-eco-cyan hover:bg-[#1eb5b1] text-white py-4 rounded-xl font-heading font-bold text-sm transition-all shadow-lg shadow-eco-cyan/20 flex items-center justify-center gap-2"
                >
                  Kirim Permintaan Presentasi
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
