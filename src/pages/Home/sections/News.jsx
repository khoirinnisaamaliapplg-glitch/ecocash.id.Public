import React from "react";
import { Link } from "react-router-dom";
import { newsList } from "../../../constants/dummyData";

export default function News() {
  return (
    <section id="news" className="max-w-7xl mx-auto px-6 lg:px-10 py-24">
      {/* Header Judul Section */}
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
        <div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 font-heading">
            Berita EcoCash.id
          </h2>
          <p className="text-slate-600 font-body mt-2">
            Ikuti terus pembaruan ekosistem dan aktivitas daur ulang kami.
          </p>
        </div>

        {/* Tombol Tampilkan Lebih Banyak (Desktop) */}
        <a
          href="#all-news"
          className="hidden md:flex text-eco-cyan font-heading font-bold items-center hover:text-eco-cyan transition-colors group"
        >
          Lihat Semua Berita
          <svg
            className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </a>
      </div>

      {/* Grid Berita */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {newsList.map((berita) => (
          <Link
            key={berita.id}
            to={`/news/${berita.id}`}
            className="group bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-teal-500/10 transition-all duration-300 overflow-hidden flex flex-col h-full cursor-pointer"
          >
            <div className="w-full h-48 overflow-hidden relative">
              <div className="absolute inset-0 bg-eco-primary/0 group-hover:bg-eco-primary/20 transition-colors duration-300 z-10"></div>
              <img
                src={berita.img}
                alt={berita.title}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
            </div>
            <div className="p-6 flex flex-col flex-grow">
              {/* Badge Tanggal/Kategori */}
              <span className="text-xs font-bold text-eco-cyan font-body mb-2 uppercase tracking-wider">
                Terbaru
              </span>
              <h3 className="text-lg font-bold mb-3 text-slate-900 font-heading group-hover:text-eco-primary transition-colors line-clamp-2">
                {berita.title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed font-body line-clamp-3">
                {berita.desc}
              </p>
            </div>
          </Link>
        ))}
      </div>

      {/* Tombol Tampilkan Lebih Banyak (Mobile) */}
      <div className="mt-10 text-center md:hidden">
        <a
          href="#all-news"
          className="inline-flex items-center justify-center bg-slate-50 text-eco-primary font-heading font-bold px-6 py-3 rounded-full border border-slate-200 hover:bg-slate-100 transition-colors w-full"
        >
          Lihat Semua Berita
        </a>
      </div>
    </section>
  );
}
