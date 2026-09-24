import React from "react";

export default function CarbonDataPlatform() {
  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-10 py-16 lg:py-24 relative overflow-hidden">
      <div className="container gap-2">
        {/* Ambient Glow Background (Diubah ke posisi tengah atas) */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-emerald-500/10 rounded-full blur-[120px] -z-10 pointer-events-none"></div>

        {/* 1. Header Section (Rata Tengah untuk Variasi Layout) */}
        <div className="text-center max-w-3xl mx-auto space-y-6 mb-16 relative z-10">
          <div className="inline-flex items-center gap-2 bg-white border border-slate-100 shadow-sm text-slate-600 px-5 py-2.5 rounded-full font-heading text-sm font-semibold">
            <span className="text-emerald-500">✦</span> CO₂ Avoided Dashboard
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-[1.2] font-heading tracking-tight">
            Carbon & Sustainability <br />
            <span className="text-eco-cyan">Data Platform.</span>
          </h2>

          <p className="text-lg text-slate-600 leading-relaxed font-body">
            Pantau, ukur, dan laporkan dampak lingkungan dari operasional bisnis
            Anda secara real-time. Kelola wawasan ESG yang dapat ditindaklanjuti
            untuk mencapai target emisi nol bersih.
          </p>
        </div>

        {/* 2. Gambar Mockup Platform (Full Width / Hero Image) */}
        <div className="relative flex justify-center group mb-16">
          <div className="absolute inset-0 bg-gradient-to-t from-slate-50 to-transparent z-10 h-24 bottom-0 top-auto"></div>

          <img
            src={"/img/Carbon-DataPlatform.jpg"}
            alt="Carbon & Sustainability Data Platform"
            className="w-full max-w-4xl relative z-0 transition-transform duration-700 group-hover:-translate-y-2 drop-shadow-2xl"
            onError={(e) => {
              e.target.style.display = "none";
              e.target.parentElement.innerHTML = `
                <div class="w-full max-w-4xl aspect-[16/9] bg-white rounded-[2rem] border-4 border-dashed border-slate-200 flex flex-col items-center justify-center text-slate-400 shadow-xl p-10 text-center">
                  <p class="font-bold text-lg">Gambar data-platform.jpg belum terpasang</p>
                </div>
              `;
            }}
          />
        </div>

        {/* 3. Grid Fitur Keterangan (4 Kolom Card di Bawah Gambar) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-20">
          {/* Card 1 */}
          <div className="bg-white border border-slate-100 p-6 rounded-3xl shadow-sm hover:shadow-xl hover:border-eco-cyan/30 transition-all duration-300 group cursor-default">
            <div className="w-12 h-12 bg-slate-50 text-emerald-600 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
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
                  d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                />
              </svg>
            </div>
            <h4 className="text-base font-bold text-slate-900 mb-2 capitalize">
              Waste Diverted from Landfill
            </h4>
            <p className="text-sm font-medium text-slate-500 leading-relaxed mb-4">
              Lacak total tonase limbah yang berhasil diselamatkan dari Tempat
              Pembuangan Akhir.
            </p>
            <div className="text-xs font-black text-emerald-500 bg-emerald-50 px-3 py-1 rounded-full w-fit">
              Hingga 245,670 kg
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white border border-slate-100 p-6 rounded-3xl shadow-sm hover:shadow-xl hover:border-eco-cyan/30 transition-all duration-300 group cursor-default">
            <div className="w-12 h-12 bg-slate-50 text-eco-cyan rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
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
                  d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                />
              </svg>
            </div>
            <h4 className="text-base font-bold text-slate-900 mb-2 capitalize">
              Recycling Rate
            </h4>
            <p className="text-sm font-medium text-slate-500 leading-relaxed mb-4">
              Analisis persentase dan komposisi material organik, logam, kaca,
              hingga plastik.
            </p>
            <div className="text-xs font-black text-eco-cyan bg-eco-cyan/10 px-3 py-1 rounded-full w-fit">
              78% Pencapaian
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white border border-slate-100 p-6 rounded-3xl shadow-sm hover:shadow-xl hover:border-eco-cyan/30 transition-all duration-300 group cursor-default">
            <div className="w-12 h-12 bg-slate-50 text-teal-600 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
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
                  d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                />
              </svg>
            </div>
            <h4 className="text-base font-bold text-slate-900 mb-2 capitalize">
              Carbon Reduction
            </h4>
            <p className="text-sm font-medium text-slate-500 leading-relaxed mb-4">
              Kalkulasi otomatis penurunan emisi karbon yang dihasilkan dari
              rantai pasok Anda.
            </p>
            <div className="text-xs font-black text-teal-600 bg-teal-50 px-3 py-1 rounded-full w-fit">
              31.5% Direduksi
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-white border border-slate-100 p-6 rounded-3xl shadow-sm hover:shadow-xl hover:border-eco-cyan/30 transition-all duration-300 group cursor-default">
            <div className="w-12 h-12 bg-slate-50 text-blue-600 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
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
                  d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h4 className="text-base font-bold text-slate-900 mb-2 capitalize">
              Sustainability Performance
            </h4>
            <p className="text-sm font-medium text-slate-500 leading-relaxed mb-4">
              Evaluasi keseluruhan indeks ESG dan metrik keberlanjutan dalam
              satu pandangan.
            </p>
            <div className="text-xs font-black text-blue-600 bg-blue-50 px-3 py-1 rounded-full w-fit">
              Indeks: 89/100
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
