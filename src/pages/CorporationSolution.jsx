import React, { useState, useEffect } from "react";
import { dummyChartData } from "../constants/dummyData";

export default function CorporationSolution() {
  // State untuk form inkuiri Korporasi
  const [formData, setFormData] = useState({
    perusahaan: "",
    karyawan: "",
    kota: "",
    namaPic: "",
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
      "Permintaan Anda berhasil dikirim! Tim Ahli ESG kami akan segera menghubungi Anda.",
    );
  };

  return (
    <main className="w-full min-h-screen bg-white font-body text-slate-700">
      {/* 1. HERO SECTION (SESUAI DESAIN GAMBAR KORPORASI) */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-10 items-center">
            {/* Hero Teks */}
            <div className="max-w-xl relative z-10">
              <h1 className="text-4xl md:text-5xl lg:text-[46px] font-extrabold text-slate-900 font-heading leading-[1.25] mb-6 tracking-tight">
                Validasi Kepatuhan ESG & Target Nol Emisi Perusahaan Melalui{" "}
                <span className="text-[#1eb5b1]">Solusi Berbasis Data</span>
              </h1>

              <p className="text-base sm:text-lg text-slate-500 font-body mb-10 leading-relaxed max-w-lg">
                Solusi pengelolaan sampah berkelanjutan untuk perusahaan modern.
                Lacak kontribusi, dapatkan kredit karbon, dan wujudkan identitas
                ramah lingkungan dengan sistem Reverse Vending Machine yang
                terintegrasi penuh dengan pelaporan ESG Anda.
              </p>

              <a
                href="#form-korporasi"
                className="inline-flex items-center justify-center bg-[#1eb5b1] hover:bg-[#189693] text-white px-8 py-3.5 rounded-lg font-heading font-bold text-sm transition-all transform hover:-translate-y-0.5 shadow-lg shadow-[#1eb5b1]/30"
              >
                Konsultasi Penempatan RVM
              </a>
            </div>

            {/* Hero Gambar Kanan Diganti Menjadi UI Dashboard Analitik Interaktif */}
            <div className="relative w-full flex justify-center lg:justify-end">
              {/* Efek Glow di belakang dashboard */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-[#1eb5b1]/15 blur-[80px] rounded-full -z-10"></div>

              <div className="w-full max-w-[500px] bg-white rounded-2xl border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.08)] p-6 md:p-8 flex flex-col gap-6 relative overflow-hidden">
                {/* Header Dashboard */}
                <div className="flex justify-between items-center border-b border-slate-100 pb-4">
                  <div>
                    <h3 className="text-lg font-bold font-heading text-slate-800">
                      ESG Performance
                    </h3>
                    <p className="text-xs text-slate-500">
                      Live Analytics • Data tersinkronisasi
                    </p>
                  </div>
                  <div className="bg-[#e0f8f7] text-[#1eb5b1] px-3 py-1.5 rounded-full text-[11px] font-bold flex items-center gap-2 border border-[#1eb5b1]/20">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#1eb5b1] animate-pulse"></span>
                    Real-time
                  </div>
                </div>

                {/* Metrik Utama (KPI Cards) */}
                <div className="grid grid-cols-2 gap-4">
                  {/* KPI 1 */}
                  <div className="bg-slate-50 rounded-xl p-4 border border-slate-100 hover:border-[#1eb5b1]/30 transition-colors">
                    <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1">
                      CO₂ Direduksi
                    </p>
                    <div className="flex items-end gap-1 mb-2">
                      <h4 className="text-2xl font-bold font-heading text-slate-800 leading-none">
                        3,450
                      </h4>
                      <span className="text-sm font-semibold text-slate-500 mb-0.5">
                        kg
                      </span>
                    </div>
                    <p className="text-xs text-emerald-600 flex items-center gap-1 font-medium">
                      <svg
                        className="w-3 h-3"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="3"
                          d="M5 10l7-7m0 0l7 7m-7-7v18"
                        />
                      </svg>
                      12.5% bln ini
                    </p>
                  </div>

                  {/* KPI 2 */}
                  <div className="bg-slate-50 rounded-xl p-4 border border-slate-100 hover:border-[#1eb5b1]/30 transition-colors">
                    <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1">
                      Material Terkumpul
                    </p>
                    <div className="flex items-end gap-1 mb-2">
                      <h4 className="text-2xl font-bold font-heading text-slate-800 leading-none">
                        12.8
                      </h4>
                      <span className="text-sm font-semibold text-slate-500 mb-0.5">
                        Ton
                      </span>
                    </div>
                    <p className="text-xs text-emerald-600 flex items-center gap-1 font-medium">
                      <svg
                        className="w-3 h-3"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="3"
                          d="M5 10l7-7m0 0l7 7m-7-7v18"
                        />
                      </svg>
                      8.2% bln ini
                    </p>
                  </div>
                </div>

                {/* Bar Chart Sederhana (Tailwind) */}
                <div className="mt-2">
                  <div className="flex justify-between items-end mb-4">
                    <p className="text-sm font-bold text-slate-800">
                      Tren Penyerapan Karbon
                    </p>
                    <p className="text-xs text-slate-500">6 Bulan Terakhir</p>
                  </div>

                  {/* Grafik */}
                  <div className="flex items-end justify-between gap-2 h-32 w-full pt-4">
                    {dummyChartData.map((data, index) => (
                      <div
                        key={index}
                        className="w-1/6 flex flex-col justify-end items-center gap-2 group relative"
                      >
                        {/* Tooltip Hover */}
                        <div className="absolute -top-8 bg-slate-800 text-white text-[10px] py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-20">
                          {data.label}
                        </div>

                        {/* Bar */}
                        <div
                          className={`w-full rounded-t-md transition-all duration-500 ${index === dummyChartData.length - 1 ? "bg-[#1eb5b1]" : "bg-slate-200 group-hover:bg-[#1eb5b1]/50"}`}
                          style={{ height: `${data.value}%` }}
                        ></div>

                        {/* Label Bulan */}
                        <span
                          className={`text-[10px] ${index === dummyChartData.length - 1 ? "font-bold text-slate-800" : "font-medium text-slate-400"}`}
                        >
                          {data.month}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. NILAI STRATEGIS (3 KARTU PERSIS DESAIN UI) */}
      <section className="py-24 max-w-7xl mx-auto px-6 lg:px-10 bg-[#f4f7fa]">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 font-heading">
            Nilai Strategis untuk Perusahaan Anda
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Kartu 1: ESG Compliance */}
          <div className="bg-white p-8 md:p-10 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow group">
            <div className="w-12 h-12 bg-eco-cyan/10 text-eco-cyan rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
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
                  d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0118 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3l1.5 1.5 3-3.75"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold font-heading text-slate-900 mb-3">
              ESG Compliance
            </h3>
            <p className="text-slate-500 font-body text-sm leading-relaxed">
              Integrasi langsung ke dashboard pelaporan ESG Anda. Lacak data
              real-time untuk mendukung klaim pengurangan jejak karbon dan
              keselarasan dengan target sustainability global.
            </p>
          </div>

          {/* Kartu 2: Employee Engagement */}
          <div className="bg-white p-8 md:p-10 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow group">
            <div className="w-12 h-12 bg-eco-cyan/10 text-eco-cyan rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
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
                  d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold font-heading text-slate-900 mb-3">
              Employee Engagement
            </h3>
            <p className="text-slate-500 font-body text-sm leading-relaxed">
              Tingkatkan partisipasi karyawan melalui program reward internal.
              Ciptakan budaya peduli lingkungan yang kuat dan perkuat identitas
              sosial perusahaan (CSR) dari dalam.
            </p>
          </div>

          {/* Kartu 3: Custom Machine Branding */}
          <div className="bg-white p-8 md:p-10 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow group">
            <div className="w-12 h-12 bg-eco-cyan/10 text-eco-cyan rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
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
                  d="M4.098 19.902a3.75 3.75 0 005.304 0l6.401-6.402M6.75 21A3.75 3.75 0 013 17.25l7.22-7.22C10.984 9.51 11.458 9 12 9c.542 0 1.016.51 1.779 1.029l.711.48c.764.52 1.238 1.03 1.238 1.571 0 .542-.474 1.016-1.259 1.8l-7.72 7.72V21h4.5v-4.5H15m3-12l3 3m-3-3l-3 3m3-3v3m-3 3l3-3"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold font-heading text-slate-900 mb-3">
              Custom Machine Branding
            </h3>
            <p className="text-slate-500 font-body text-sm leading-relaxed">
              Personalisasi tampilan mesin RVM dengan logo, warna, dan pesan
              kampanye spesifik perusahaan Anda. Ubah titik daur ulang menjadi
              media branding yang positif.
            </p>
          </div>
        </div>
      </section>

      {/* 3. FORMULIR KORPORASI (KONSISTEN SPLIT LAYOUT SEPERTI HALAMAN LAINNYA) */}
      <section
        id="form-korporasi"
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
                    d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21"
                  />
                </svg>
              </div>
              <h2 className="text-3xl font-extrabold font-heading mb-4">
                Mulai Perjalanan Nol Emisi Anda
              </h2>
              <p className="text-emerald-100 font-body text-sm md:text-base leading-relaxed">
                Isi formulir di sebelah untuk mendiskusikan kebutuhan RVM
                korporasi Anda. Tim ahli kami siap membantu menyelaraskan
                program ini dengan target keberlanjutan perusahaan Anda.
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
                esg@ecocash.id
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

          {/* Form (Kanan - Putih) disesuaikan dengan isian gambar korporasi */}
          <div className="w-full md:w-[60%] bg-white p-10 md:p-12 border border-slate-100 md:border-l-0 rounded-b-[2rem] md:rounded-bl-none md:rounded-r-[2rem]">
            <h3 className="text-2xl font-bold font-heading text-slate-900 mb-8">
              Pengajuan Titik RVM
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Row 1: Nama Perusahaan & Jumlah Karyawan */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-slate-700 font-heading mb-2">
                    Nama Perusahaan
                  </label>
                  <input
                    type="text"
                    name="perusahaan"
                    value={formData.perusahaan}
                    onChange={handleInputChange}
                    placeholder="PT. Inovasi Hijau"
                    className="w-full bg-slate-50 border border-slate-200 py-3.5 px-4 rounded-xl focus:outline-none focus:border-[#1eb5b1] focus:ring-2 focus:ring-[#1eb5b1]/20 transition-all text-sm font-body"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 font-heading mb-2">
                    Jumlah Karyawan
                  </label>
                  <div className="relative">
                    <select
                      name="karyawan"
                      value={formData.karyawan}
                      onChange={handleInputChange}
                      className="w-full bg-slate-50 border border-slate-200 py-3.5 px-4 rounded-xl focus:outline-none focus:border-[#1eb5b1] focus:ring-2 focus:ring-[#1eb5b1]/20 transition-all text-sm font-body appearance-none"
                      required
                    >
                      <option value="" disabled>
                        Pilih skala perusahaan
                      </option>
                      <option value="1-50 Karyawan">1 - 50 Karyawan</option>
                      <option value="51-200 Karyawan">51 - 200 Karyawan</option>
                      <option value="201-500 Karyawan">
                        201 - 500 Karyawan
                      </option>
                      <option value="500+ Karyawan">500+ Karyawan</option>
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
              </div>

              {/* Row 2: Kota Domisili (Full Width sesuai desain gambar) */}
              <div>
                <label className="block text-xs font-bold text-slate-700 font-heading mb-2">
                  Kota Domisili Perusahaan
                </label>
                <input
                  type="text"
                  name="kota"
                  value={formData.kota}
                  onChange={handleInputChange}
                  placeholder="Contoh: Jakarta Selatan"
                  className="w-full bg-slate-50 border border-slate-200 py-3.5 px-4 rounded-xl focus:outline-none focus:border-[#1eb5b1] focus:ring-2 focus:ring-[#1eb5b1]/20 transition-all text-sm font-body"
                  required
                />
              </div>

              {/* Row 3: Nama Kontak PIC & No WA */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-slate-700 font-heading mb-2">
                    Nama Kontak PIC
                  </label>
                  <input
                    type="text"
                    name="namaPic"
                    value={formData.namaPic}
                    onChange={handleInputChange}
                    placeholder="Nama Lengkap"
                    className="w-full bg-slate-50 border border-slate-200 py-3.5 px-4 rounded-xl focus:outline-none focus:border-[#1eb5b1] focus:ring-2 focus:ring-[#1eb5b1]/20 transition-all text-sm font-body"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 font-heading mb-2">
                    Nomor WhatsApp PIC
                  </label>
                  <input
                    type="tel"
                    name="whatsapp"
                    value={formData.whatsapp}
                    onChange={handleInputChange}
                    placeholder="+62 812 3456 7890"
                    className="w-full bg-slate-50 border border-slate-200 py-3.5 px-4 rounded-xl focus:outline-none focus:border-[#1eb5b1] focus:ring-2 focus:ring-[#1eb5b1]/20 transition-all text-sm font-body"
                    required
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full bg-[#1eb5b1] hover:bg-[#189693] text-white py-4 rounded-xl font-heading font-bold text-sm transition-all shadow-lg shadow-[#1eb5b1]/20 flex items-center justify-center gap-2"
                >
                  Kirim Permintaan Konsultasi
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
