import React, { useState, useEffect } from "react";

export default function PanduanMaterial() {
  const [searchQuery, setSearchQuery] = useState("");

  // Scroll ke atas saat halaman dimuat
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="w-full min-h-screen bg-[#fafafc] font-body text-slate-700">
      {/* 1. HEADER & SEARCH SECTION */}
      <section className="relative pt-32 pb-20 flex flex-col items-center justify-center text-center px-6 overflow-hidden z-10">
        {/* Efek Cahaya / Glow Cyan di Belakang Judul sesuai Desain */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-eco-cyan/20 blur-[100px] rounded-full -z-10 pointer-events-none"></div>

        <h1 className="text-3xl md:text-4xl lg:text-[40px] font-extrabold text-slate-900 font-heading mb-4 tracking-tight">
          Panduan Kelayakan Wadah Daur Ulang
        </h1>
        <p className="text-slate-600 font-body text-sm md:text-base max-w-2xl mx-auto mb-10 leading-relaxed">
          Pastikan botol dan kaleng Anda memenuhi kriteria agar dapat diproses
          oleh mesin RVM kami dan dikonversi menjadi saldo.
        </p>

        {/* Search Bar */}
        <div className="w-full max-w-2xl relative">
          <div className="absolute inset-y-0 left-5 flex items-center pointer-events-none">
            <svg
              className="w-5 h-5 text-slate-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
          <input
            type="text"
            placeholder="Cari jenis kemasan... (contoh: Botol Aqua, Kaleng Pocari)"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-white border border-slate-200 rounded-xl py-4 pl-14 pr-6 shadow-sm focus:outline-none focus:border-eco-cyan focus:ring-2 focus:ring-eco-cyan/20 font-body text-sm text-slate-700 transition-all"
          />
        </div>
      </section>

      {/* 2. KRITERIA DITERIMA & DITOLAK (2 KARTU) */}
      <section className="max-w-5xl mx-auto px-6 pb-12 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {/* KARTU KIRI: Wadah yang Diterima */}
          <div className="bg-[#f4fcf6] border border-slate-200 border-l-4 border-l-[#22c55e] rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-lg font-bold font-heading text-slate-900 flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-full bg-[#dcfce7] text-[#16a34a] flex items-center justify-center shrink-0">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              Wadah yang Diterima
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-slate-600 font-body text-sm">
                <svg
                  className="w-5 h-5 text-[#16a34a] shrink-0 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                Botol Plastik PET (Bening/Warna)
              </li>
              <li className="flex items-start gap-3 text-slate-600 font-body text-sm">
                <svg
                  className="w-5 h-5 text-[#16a34a] shrink-0 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                Botol Plastik HDPE (Susu/Sabun)
              </li>
              <li className="flex items-start gap-3 text-slate-600 font-body text-sm">
                <svg
                  className="w-5 h-5 text-[#16a34a] shrink-0 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                Kaleng Minuman Aluminium
              </li>
              <li className="flex items-start gap-3 text-slate-600 font-body text-sm">
                <svg
                  className="w-5 h-5 text-[#16a34a] shrink-0 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                Ukuran 150ml - 3L
              </li>
            </ul>
          </div>

          {/* KARTU KANAN: Wadah yang Ditolak */}
          <div className="bg-[#fff6f6] border border-slate-200 border-l-4 border-l-[#ef4444] rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-lg font-bold font-heading text-slate-900 flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-full bg-[#fee2e2] text-[#dc2626] flex items-center justify-center shrink-0">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </div>
              Wadah yang Ditolak
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-slate-600 font-body text-sm">
                <svg
                  className="w-5 h-5 text-[#dc2626] shrink-0 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
                Plastik Saset/Pouch
              </li>
              <li className="flex items-start gap-3 text-slate-600 font-body text-sm">
                <svg
                  className="w-5 h-5 text-[#dc2626] shrink-0 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
                Botol Kotor/Berminyak
              </li>
              <li className="flex items-start gap-3 text-slate-600 font-body text-sm">
                <svg
                  className="w-5 h-5 text-[#dc2626] shrink-0 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
                Galon &gt; 3L
              </li>
              <li className="flex items-start gap-3 text-slate-600 font-body text-sm">
                <svg
                  className="w-5 h-5 text-[#dc2626] shrink-0 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
                Botol Kaca Alkohol
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 3. ATURAN EMAS DAUR ULANG */}
      <section className="max-w-5xl mx-auto px-6 pb-20 relative z-20">
        <div className="bg-[#fef8ef] border border-slate-100 border-l-4 border-l-[#f59e0b] rounded-2xl p-8 md:p-10 shadow-sm">
          <h2 className="text-2xl font-extrabold font-heading text-slate-900 mb-8">
            3 Aturan Emas Daur Ulang
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
            {/* Aturan 1 */}
            <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row items-start gap-4">
              <div className="w-12 h-12 shrink-0 rounded-full bg-[#fde68a] text-[#d97706] flex items-center justify-center">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              </div>
              <div>
                <h4 className="font-bold text-slate-900 font-heading mb-1.5 text-base">
                  Kosongkan Cairan
                </h4>
                <p className="text-xs text-slate-600 font-body leading-relaxed">
                  Pastikan tidak ada sisa minuman.
                </p>
              </div>
            </div>

            {/* Aturan 2 */}
            <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row items-start gap-4">
              <div className="w-12 h-12 shrink-0 rounded-full bg-[#fde68a] text-[#d97706] flex items-center justify-center">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 4v16m8-8H4"
                  />
                </svg>
              </div>
              <div>
                <h4 className="font-bold text-slate-900 font-heading mb-1.5 text-base">
                  Jangan Lepas Label Barcode
                </h4>
                <p className="text-xs text-slate-600 font-body leading-relaxed">
                  Mesin perlu memindai kode untuk identifikasi.
                </p>
              </div>
            </div>

            {/* Aturan 3 */}
            <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row items-start gap-4">
              <div className="w-12 h-12 shrink-0 rounded-full bg-[#fde68a] text-[#d97706] flex items-center justify-center">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 12a8 8 0 018-8 8 8 0 018 8 8 8 0 01-8 8 8 8 0 01-8-8z"
                  />
                </svg>
              </div>
              <div>
                <h4 className="font-bold text-slate-900 font-heading mb-1.5 text-base">
                  Jangan Diremukkan
                </h4>
                <p className="text-xs text-slate-600 font-body leading-relaxed">
                  Masukkan dalam kondisi utuh agar sensor dapat mengenali
                  bentuk.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CALL TO ACTION SECTION */}
      <section className="text-center max-w-4xl mx-auto px-6 pb-32">
        <h2 className="text-2xl md:text-3xl font-extrabold font-heading text-slate-900 mb-4">
          Punya Wadah Siap Setor?
        </h2>
        <p className="text-slate-500 font-body mb-8 text-sm md:text-base">
          Temukan RVM terdekat dan mulai kumpulkan saldo EcoCash Anda hari ini.
        </p>

        {/* Tombol mengarah ke halaman Peta yang sudah kita buat sebelumnya */}
        <a
          href="/#location-map"
          className="inline-flex items-center justify-center gap-2 bg-eco-cyan hover:bg-[#1eb5b1] text-white px-8 py-3.5 rounded-full font-heading font-bold text-sm shadow-lg shadow-eco-cyan/30 transition-all transform hover:-translate-y-0.5"
        >
          <svg
            className="w-5 h-5"
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
          Lihat Lokasi RVM Terdekat
        </a>
      </section>
    </main>
  );
}
