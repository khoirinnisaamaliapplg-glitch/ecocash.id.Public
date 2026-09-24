import React from "react";
import { Link } from "react-router-dom";

export default function Marketplace() {
  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-10 py-16 lg:py-24 relative overflow-hidden">
      <div className="container gap-2">
        <div className="row">
          {/* Ambient Glow Background (Konsisten dengan gaya desain, menggunakan warna biru/cyan) */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-blue-500/5 rounded-full blur-[100px] -z-10 pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Mockup Gambar Aplikasi (Kolom Kiri pada Desktop, Bawah pada Mobile) */}
            <div className="relative flex justify-center lg:justify-start group order-2 lg:order-1 mt-10 lg:mt-0">
              {/* Latar Belakang Dekoratif Konsisten */}
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-eco-cyan/20 rounded-3xl transform -rotate-3 blur-xl -z-10 transition-transform duration-500 group-hover:-rotate-6"></div>

              <img
                src={"/img/Main-EcoMarket (3).png"}
                alt="Eco Market B2B & B2C Mockup"
                className="w-full max-w-xl relative z-10 transition-transform duration-700 hover:-translate-y-3 drop-shadow-2xl rounded-[2rem] border border-slate-100"
              />
            </div>

            {/* Teks & Penjelasan (Kolom Kanan pada Desktop, Atas pada Mobile) */}
            <div className="space-y-6 order-1 lg:order-2 lg:pl-8">
              <div className="inline-flex items-center gap-2 bg-white border border-slate-100 shadow-sm text-slate-600 px-5 py-2.5 rounded-full font-heading text-sm font-semibold">
                <span className="text-blue-500">✦</span> B2B & B2C ESG
                Marketplace
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-[1.2] font-heading">
                Sirkulasi Ekonomi <br />
                <span className="text-eco-cyan">Masa Depan.</span>
              </h2>

              <p className="text-lg text-slate-600 leading-relaxed font-body">
                Platform pengadaan material daur ulang terverifikasi untuk
                industri dan akselerasi pemasaran produk inovasi UMKM ramah
                lingkungan berbasis ESG.
              </p>

              {/* Data Statistik (Diambil langsung dari visual hero section marketplace) */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6 pt-4 pb-2">
                <div className="border-l-2 border-eco-cyan pl-4">
                  <p className="text-2xl font-black text-slate-900">1,400+</p>
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mt-1">
                    Ton Limbah Terolah
                  </p>
                </div>
                <div className="border-l-2 border-blue-500 pl-4">
                  <p className="text-2xl font-black text-slate-900">450+</p>
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mt-1">
                    Mitra Industri
                  </p>
                </div>
                <div className="border-l-2 border-emerald-500 pl-4 col-span-2 md:col-span-1">
                  <p className="text-2xl font-black text-slate-900">100%</p>
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mt-1">
                    ESG Terverifikasi
                  </p>
                </div>
              </div>

              {/* Tombol CTA */}
              <div className="pt-6 flex flex-wrap items-center gap-4">
                <button className="px-8 py-3.5 rounded-full bg-slate-900 text-white font-bold text-sm flex items-center justify-center gap-3 shadow-lg hover:bg-eco-cyan hover:-translate-y-1 transition-all cursor-pointer">
                  Mulai Eksplorasi
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
                  to="/seller/register"
                  className="px-8 py-3.5 rounded-full bg-white border border-slate-200 text-slate-700 font-bold text-sm hover:border-eco-cyan hover:text-eco-cyan transition-colors cursor-pointer"
                >
                  Jual Limbah Industri
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
