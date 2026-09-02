import React, { useState, useEffect } from "react";

export default function ProgramDonasi() {
  // State untuk form pendaftaran yayasan
  const [formData, setFormData] = useState({
    namaYayasan: "",
    legalitas: "",
    fokusKegiatan: "",
    kota: "",
    whatsapp: "",
  });

  // Auto-scroll ke atas saat pertama kali dimuat
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
      "Terima kasih! Pengajuan kemitraan yayasan Anda telah kami terima dan akan segera ditinjau.",
    );
  };

  return (
    <main className="w-full min-h-screen font-body text-slate-700 bg-white">
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 overflow-hidden bg-gradient-to-b from-sky-50/50 to-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Teks Hero */}
            <div className="max-w-xl relative z-10">
              <h1 className="text-4xl lg:text-5xl font-extrabold text-slate-900 font-heading leading-[1.2] mb-6 tracking-tight">
                Ubah Setiap Botol Daur Ulang Menjadi Amal dan Bantuan Sosial
              </h1>
              <p className="text-base sm:text-lg text-slate-500 font-body mb-8 leading-relaxed">
                Penyaluran dana otomatis yang transparan ke yayasan amal pilihan
                Anda langsung dari setiap poin yang Anda kumpulkan.
              </p>
              <a
                href="#form-yayasan"
                className="inline-flex items-center justify-center bg-eco-cyan hover:bg-[#1eb5b1] text-white px-8 py-3.5 rounded-full font-heading font-bold text-[15px] transition-all transform hover:-translate-y-0.5 shadow-lg shadow-eco-cyan/30"
              >
                Daftarkan Yayasan Amal
              </a>
            </div>

            {/* Gambar Hero */}
            <div className="relative w-full flex justify-center lg:justify-end">
              <div className="relative w-full max-w-md rounded-[2rem] overflow-hidden shadow-2xl shadow-slate-200/60 bg-white border border-slate-100">
                <img
                  src="img/donation.png"
                  alt="Mesin EcoCash Mode Donasi"
                  className="w-full h-auto object-cover"
                  onError={(e) => {
                    e.target.style.display = "none";
                    e.target.parentElement.innerHTML = `<div class="w-full h-[400px] flex items-center justify-center bg-slate-100 text-slate-400 font-body text-sm text-center p-6 border-2 border-dashed border-slate-200 rounded-[2rem]">Siapkan gambar donasi-hero.jpg<br/>di folder public/img</div>`;
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
            Cara Kerja Donasi
          </h2>
          <p className="text-slate-500 text-lg">
            Transparan, cepat, dan berdampak langsung.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-4">
          {/* Step 1 */}
          <div className="relative bg-white rounded-3xl p-8 border border-slate-100 shadow-sm text-center">
            <div className="absolute -top-4 -left-2 md:-left-4 w-8 h-8 rounded-full bg-eco-cyan text-white flex items-center justify-center font-bold font-heading shadow-md shadow-eco-cyan/30">
              1
            </div>
            <div className="w-16 h-16 mx-auto bg-sky-50 text-eco-cyan rounded-full flex items-center justify-center mb-6">
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm14 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z"
                />
              </svg>
            </div>
            <h3 className="font-bold text-slate-900 font-heading text-lg mb-2">
              Setor Sampah
            </h3>
            <p className="text-slate-500 font-body text-sm leading-relaxed">
              Scan QR dan masukkan botol ke mesin RVM terdekat.
            </p>
          </div>

          {/* Step 2 */}
          <div className="relative bg-white rounded-3xl p-8 border border-slate-100 shadow-sm text-center">
            <div className="absolute -top-4 -left-2 md:-left-4 w-8 h-8 rounded-full bg-eco-cyan text-white flex items-center justify-center font-bold font-heading shadow-md shadow-eco-cyan/30">
              2
            </div>
            <div className="w-16 h-16 mx-auto bg-sky-50 text-eco-cyan rounded-full flex items-center justify-center mb-6">
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                />
              </svg>
            </div>
            <h3 className="font-bold text-slate-900 font-heading text-lg mb-2">
              Pilih Program Amal
            </h3>
            <p className="text-slate-500 font-body text-sm leading-relaxed">
              Pilih kategori bantuan sosial di aplikasi atau langsung di layar
              mesin.
            </p>
          </div>

          {/* Step 3 */}
          <div className="relative bg-white rounded-3xl p-8 border border-slate-100 shadow-sm text-center">
            <div className="absolute -top-4 -left-2 md:-left-4 w-8 h-8 rounded-full bg-eco-cyan text-white flex items-center justify-center font-bold font-heading shadow-md shadow-eco-cyan/30">
              3
            </div>
            <div className="w-16 h-16 mx-auto bg-sky-50 text-eco-cyan rounded-full flex items-center justify-center mb-6">
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"
                />
              </svg>
            </div>
            <h3 className="font-bold text-slate-900 font-heading text-lg mb-2">
              Penyaluran Otomatis
            </h3>
            <p className="text-slate-500 font-body text-sm leading-relaxed">
              Dana dikirimkan secara real-time ke mitra yayasan terpercaya.
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
                Mitra Yayasan Amal
              </h2>
              <p className="text-slate-500">
                Dukung program yang paling relevan dengan Anda.
              </p>
            </div>
            <a
              href="#"
              className="text-eco-cyan font-bold font-heading text-sm hover:underline flex items-center gap-1"
            >
              Lihat Semua{" "}
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </a>
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
                  <svg
                    className="w-3.5 h-3.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 14l9-5-9-5-9 5 9 5z M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                    />
                  </svg>
                  Pendidikan Anak
                </span>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center shrink-0">
                    <svg
                      className="w-5 h-5 text-slate-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                      />
                    </svg>
                  </div>
                  <h3 className="font-bold text-slate-900 font-heading leading-tight">
                    Yayasan Generasi Cerdas
                  </h3>
                </div>
                <p className="text-sm text-slate-500 font-body mb-6 flex-1 line-clamp-3">
                  Memberikan akses pendidikan dan fasilitas belajar digital
                  untuk anak-anak prasejahtera di daerah tertinggal.
                </p>
                <div className="mb-6">
                  <div className="flex justify-between text-[11px] font-bold font-heading mb-2 uppercase tracking-wider">
                    <span className="text-slate-400">Terkumpul</span>
                    <span className="text-slate-900">Rp 45.000.000</span>
                  </div>
                  <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                    <div className="h-full bg-eco-cyan w-[65%] rounded-full"></div>
                  </div>
                </div>
                <button className="w-full py-3.5 rounded-xl border-2 border-slate-100 text-slate-600 font-bold font-heading text-sm hover:border-eco-cyan hover:text-eco-cyan transition-colors">
                  Donasi Sekarang
                </button>
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
                  <svg
                    className="w-3.5 h-3.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3.375 15h17.25M5.625 15v1.5a2.25 2.25 0 002.25 2.25h8.25a2.25 2.25 0 002.25-2.25V15M12 18.75v-9m0 0l-3 3m3-3l3 3"
                    />
                  </svg>
                  Penghijauan Hutan
                </span>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center shrink-0">
                    <svg
                      className="w-5 h-5 text-slate-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
                      />
                    </svg>
                  </div>
                  <h3 className="font-bold text-slate-900 font-heading leading-tight">
                    Aksi Bumi Hijau
                  </h3>
                </div>
                <p className="text-sm text-slate-500 font-body mb-6 flex-1 line-clamp-3">
                  Program reboisasi lahan kritis dan perlindungan ekosistem
                  hutan lindung di berbagai wilayah Indonesia.
                </p>
                <div className="mb-6">
                  <div className="flex justify-between text-[11px] font-bold font-heading mb-2 uppercase tracking-wider">
                    <span className="text-slate-400">Terkumpul</span>
                    <span className="text-slate-900">Rp 120.500.000</span>
                  </div>
                  <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                    <div className="h-full bg-emerald-500 w-[85%] rounded-full"></div>
                  </div>
                </div>
                <button className="w-full py-3.5 rounded-xl border-2 border-slate-100 text-slate-600 font-bold font-heading text-sm hover:border-emerald-500 hover:text-emerald-600 transition-colors">
                  Donasi Sekarang
                </button>
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
                  <svg
                    className="w-3.5 h-3.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                    />
                  </svg>
                  Panti Asuhan
                </span>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center shrink-0">
                    <svg
                      className="w-5 h-5 text-slate-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M12 4.5v15m7.5-7.5h-15"
                      />
                    </svg>
                  </div>
                  <h3 className="font-bold text-slate-900 font-heading leading-tight">
                    Rumah Kasih Bangsa
                  </h3>
                </div>
                <p className="text-sm text-slate-500 font-body mb-6 flex-1 line-clamp-3">
                  Dukungan operasional harian, gizi, dan kesehatan untuk
                  anak-anak yatim piatu di berbagai panti asuhan.
                </p>
                <div className="mb-6">
                  <div className="flex justify-between text-[11px] font-bold font-heading mb-2 uppercase tracking-wider">
                    <span className="text-slate-400">Terkumpul</span>
                    <span className="text-slate-900">Rp 18.200.000</span>
                  </div>
                  <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                    <div className="h-full bg-amber-500 w-[30%] rounded-full"></div>
                  </div>
                </div>
                <button className="w-full py-3.5 rounded-xl border-2 border-slate-100 text-slate-600 font-bold font-heading text-sm hover:border-amber-500 hover:text-amber-600 transition-colors">
                  Donasi Sekarang
                </button>
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
                Daftarkan Organisasi Anda
              </h2>
              <p className="text-slate-500 text-sm md:text-base">
                Jadilah mitra penyalur dana EcoCash dan bantu lebih banyak orang
                bersama kami.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-slate-700 font-heading mb-2">
                    Nama Yayasan/Organisasi{" "}
                    <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="namaYayasan"
                    value={formData.namaYayasan}
                    onChange={handleInputChange}
                    placeholder="Masukkan nama resmi"
                    className="w-full bg-white border border-slate-200 py-3.5 px-4 rounded-xl focus:outline-none focus:border-eco-cyan focus:ring-2 focus:ring-eco-cyan/20 transition-all text-sm"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 font-heading mb-2">
                    Nomor Izin Hukum/Legal{" "}
                    <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="legalitas"
                    value={formData.legalitas}
                    onChange={handleInputChange}
                    placeholder="SK Kemenkumham / NIB"
                    className="w-full bg-white border border-slate-200 py-3.5 px-4 rounded-xl focus:outline-none focus:border-eco-cyan focus:ring-2 focus:ring-eco-cyan/20 transition-all text-sm"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 font-heading mb-2">
                  Fokus Kegiatan <span className="text-rose-500">*</span>
                </label>
                <div className="relative">
                  <select
                    name="fokusKegiatan"
                    value={formData.fokusKegiatan}
                    onChange={handleInputChange}
                    className="w-full bg-white border border-slate-200 py-3.5 px-4 rounded-xl focus:outline-none focus:border-eco-cyan focus:ring-2 focus:ring-eco-cyan/20 transition-all text-sm appearance-none"
                    required
                  >
                    <option value="" disabled>
                      Pilih kategori fokus utama
                    </option>
                    <option value="Pendidikan">Pendidikan & Beasiswa</option>
                    <option value="Lingkungan">Lingkungan & Konservasi</option>
                    <option value="Kemanusiaan">
                      Kemanusiaan & Bencana Alam
                    </option>
                    <option value="Panti Asuhan">Panti Asuhan & Sosial</option>
                    <option value="Kesehatan">Kesehatan & Medis</option>
                  </select>
                  <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-slate-400">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-slate-700 font-heading mb-2">
                    Kota Domisili <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="kota"
                    value={formData.kota}
                    onChange={handleInputChange}
                    placeholder="Kota operasional utama"
                    className="w-full bg-white border border-slate-200 py-3.5 px-4 rounded-xl focus:outline-none focus:border-eco-cyan focus:ring-2 focus:ring-eco-cyan/20 transition-all text-sm"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 font-heading mb-2">
                    WhatsApp PIC (Aktif){" "}
                    <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="tel"
                    name="whatsapp"
                    value={formData.whatsapp}
                    onChange={handleInputChange}
                    placeholder="+62 8xx xxxx xxxx"
                    className="w-full bg-white border border-slate-200 py-3.5 px-4 rounded-xl focus:outline-none focus:border-eco-cyan focus:ring-2 focus:ring-eco-cyan/20 transition-all text-sm"
                    required
                  />
                </div>
              </div>

              <div className="pt-6">
                <button
                  type="submit"
                  className="w-full bg-eco-cyan hover:bg-[#1eb5b1] text-white py-4 rounded-xl font-heading font-bold text-sm transition-all shadow-lg shadow-eco-cyan/20 flex items-center justify-center gap-2"
                >
                  Kirim Pengajuan Kemitraan
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
                </button>
                <p className="text-center text-xs text-slate-400 mt-4 font-body">
                  Tim kami akan meninjau pengajuan Anda dalam 2-3 hari kerja.
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
