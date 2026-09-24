import React from "react";
import { Link } from "react-router-dom";

export default function Partner() {
  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-10 py-16 lg:py-24 relative overflow-hidden">
      <div className="container gap-2">
        <div className="row">
          {/* Ambient Glow Background (Konsisten dengan AppPreview) */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-emerald-500/5 rounded-full blur-[100px] -z-10 pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Teks & Penjelasan (Kolom Kiri) */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-white border border-slate-100 shadow-sm text-slate-600 px-5 py-2.5 rounded-full font-heading text-sm font-semibold">
                <span className="text-emerald-500">✦</span> Peluang Penghasilan
                Baru
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-[1.2] font-heading">
                EcoCash Partner App. <br />
                <span className="text-eco-cyan">Berdayakan Langkah Anda.</span>
              </h2>

              <p className="text-lg text-slate-600 leading-relaxed font-body">
                Aplikasi khusus yang dirancang untuk mitra pengepul independen
                dan armada logistik. Ambil pesanan penjemputan sampah terpilah
                di sekitar Anda, pantau rute tempuh, dan cairkan pendapatan
                secara instan.
              </p>

              {/* Daftar Fitur Partner */}
              <div className="space-y-6 pt-2">
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 shrink-0 bg-white rounded-2xl flex items-center justify-center text-eco-cyan shadow-sm border border-slate-100">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2.5"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2.5"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 mb-1">
                      Sistem Penjemputan Pintar
                    </h4>
                    <p className="text-base text-slate-600 leading-relaxed font-body">
                      Terima pesanan penjemputan dari rumah warga atau mesin RVM
                      terdekat lengkap dengan detail jenis material dan estimasi
                      bayaran.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 shrink-0 bg-white rounded-2xl flex items-center justify-center text-emerald-500 shadow-sm border border-slate-100">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2.5"
                        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 mb-1">
                      Transparansi Penghasilan
                    </h4>
                    <p className="text-base text-slate-600 leading-relaxed font-body">
                      Pantau total pendapatan harian, kelola penarikan dana
                      langsung ke rekening bank, dan cek total tonase yang Anda
                      selamatkan.
                    </p>
                  </div>
                </div>
              </div>

              {/* Tombol CTA */}
              <div className="pt-6 flex flex-wrap items-center gap-4">
                <button className="px-8 py-3.5 rounded-full bg-slate-900 text-white font-bold text-sm flex items-center justify-center gap-3 shadow-lg hover:bg-eco-cyan hover:-translate-y-1 transition-all cursor-pointer">
                  Daftar Sebagai Mitra
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="3"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </button>
                <Link
                  to="/partner-scheme"
                  className="px-8 py-3.5 rounded-full bg-white border border-slate-200 text-slate-700 font-bold text-sm hover:border-eco-cyan hover:text-eco-cyan transition-colors cursor-pointer"
                >
                  Pelajari Skema
                </Link>
              </div>
            </div>

            {/* Mockup Gambar Aplikasi (Kolom Kanan) */}
            <div className="relative flex justify-center lg:justify-end group mt-10 lg:mt-0">
              {/* Latar Belakang Dekoratif Konsisten dengan AppPreview */}
              <div className="absolute inset-0 bg-gradient-to-tr from-eco-cyan/20 to-emerald-500/10 rounded-3xl transform rotate-3 blur-xl -z-10 transition-transform duration-500 group-hover:rotate-6"></div>

              <img
                src={"/img/partner-new.jpeg"}
                alt="EcoCash Partner App Mockup"
                className="w-full max-w-xl relative z-10 transition-transform duration-700 hover:-translate-y-3 drop-shadow-2xl rounded-[2.5rem]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
