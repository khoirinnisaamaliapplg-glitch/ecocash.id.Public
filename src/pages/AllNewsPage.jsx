import React, { useEffect, useState } from "react";
import { newsList } from "../constants/dummyData";
import { Link } from "react-router-dom";

export default function AllNewsPage() {
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="w-full min-h-screen bg-[#fafafc] font-body text-slate-700 pb-20">
      {/* 1. HERO / HEADER SECTION */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-24 bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-40">
          <img
            src="img/hero-news.jpg"
            alt="News Background"
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.style.display = "none";
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10 text-white">
          <div className="text-eco-cyan font-bold tracking-widest text-sm uppercase mb-3 font-heading">
            Pusat Informasi
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold font-heading mb-4">
            Berita & Artikel
          </h1>
          <p className="text-slate-300 text-lg max-w-xl">
            Ikuti perkembangan terbaru seputar inovasi pengelolaan sampah,
            inisiatif keberlanjutan, dan pencapaian ekosistem EcoCash.
          </p>
        </div>
      </section>

      {/* 2. MAIN CONTENT & SIDEBAR */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          {/* LEFT COLUMN: BLOG GRID (2/3 Width) */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {newsList.map((news) => (
                <Link
                  key={news.id}
                  to={`/news/${news.id}`}
                  className="bg-white rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 group flex flex-col h-full overflow-hidden"
                >
                  {/* Thumbnail & Badge */}
                  <div className="relative h-56 overflow-hidden bg-slate-100">
                    <img
                      src={news.img}
                      alt={news.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      onError={(e) => {
                        e.target.style.display = "none";
                        e.target.parentElement.innerHTML = `<div class="w-full h-full flex items-center justify-center text-slate-400 text-sm">Gambar Artikel</div>`;
                      }}
                    />
                    <div className="absolute top-4 right-4 bg-eco-cyan text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full shadow-md">
                      {news.category}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 md:p-8 flex flex-col flex-1">
                    <h3 className="text-xl font-bold font-heading text-slate-900 mb-3 group-hover:text-eco-cyan transition-colors leading-snug">
                      {news.title}
                    </h3>
                    <p className="text-sm text-slate-500 line-clamp-3 mb-6 flex-1 leading-relaxed">
                      {news.desc}
                    </p>

                    {/* Meta & Footer Card */}
                    <div className="flex items-center justify-between text-xs font-medium text-slate-400 pt-5 border-t border-slate-100">
                      <div className="flex items-center gap-2">
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
                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                          />
                        </svg>
                        {news.date}
                      </div>
                      <span className="text-eco-cyan font-bold group-hover:underline cursor-pointer">
                        Baca Selengkapnya
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Pagination Dummy */}
            <div className="flex justify-center items-center gap-2 mt-12">
              <button className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-500 hover:bg-eco-cyan hover:text-white hover:border-eco-cyan transition-colors">
                1
              </button>
              <button className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-500 hover:bg-eco-cyan hover:text-white hover:border-eco-cyan transition-colors bg-eco-cyan text-white">
                2
              </button>
              <button className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-500 hover:bg-eco-cyan hover:text-white hover:border-eco-cyan transition-colors">
                3
              </button>
              <span className="text-slate-400 px-2">...</span>
              <button className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-500 hover:bg-eco-cyan hover:text-white hover:border-eco-cyan transition-colors">
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
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* RIGHT COLUMN: SIDEBAR (1/3 Width) */}
          <aside className="lg:col-span-1 space-y-10">
            {/* Widget 1: Search */}
            <div className="bg-white p-2 rounded-2xl border border-slate-200 shadow-sm flex items-center focus-within:border-eco-cyan focus-within:ring-1 focus-within:ring-eco-cyan transition-all">
              <input
                type="text"
                placeholder="Cari berita..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-transparent px-4 py-2 text-sm outline-none text-slate-700 font-body placeholder-slate-400"
              />
              <button className="w-10 h-10 shrink-0 bg-eco-cyan text-white rounded-xl flex items-center justify-center hover:bg-[#1eb5b1] transition-colors">
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
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </div>

            {/* Widget 2: Newsletter */}
            <div className="bg-[#06b6d4] p-8 rounded-[2rem] text-white shadow-xl shadow-eco-cyan/20">
              <h3 className="text-xl font-bold font-heading mb-3">
                Newsletter
              </h3>
              <p className="text-cyan-50 text-sm mb-6 leading-relaxed">
                Daftarkan email Anda untuk mendapatkan informasi pembaruan,
                berita, dan insight gratis dari EcoCash.
              </p>
              <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="text"
                  placeholder="Nama Lengkap"
                  className="w-full bg-white/10 border border-white/20 text-white placeholder-cyan-100 px-4 py-3 rounded-xl text-sm outline-none focus:bg-white/20 transition-colors"
                />
                <input
                  type="email"
                  placeholder="Alamat Email"
                  className="w-full bg-white border border-white/20 text-slate-800 placeholder-slate-400 px-4 py-3 rounded-xl text-sm outline-none"
                />
                <button className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold font-heading text-sm py-3.5 rounded-xl transition-colors mt-2">
                  Berlangganan
                </button>
              </form>
            </div>

            {/* Widget 3: Latest Post */}
            <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm">
              <h3 className="text-lg font-bold font-heading text-slate-900 mb-6 pb-4 border-b border-slate-100">
                Postingan Terbaru
              </h3>
              <div className="space-y-5">
                {newsList.slice(0, 3).map((news) => (
                  <div
                    key={news.id}
                    className="flex gap-4 items-center group cursor-pointer"
                  >
                    <img
                      src={news.img}
                      alt={news.title}
                      className="w-20 h-20 rounded-xl object-cover bg-slate-100 shrink-0"
                      onError={(e) => {
                        e.target.style.display = "none";
                      }}
                    />
                    <div>
                      <h4 className="text-sm font-bold font-heading text-slate-800 leading-tight mb-1 group-hover:text-eco-cyan transition-colors line-clamp-2">
                        {news.title}
                      </h4>
                      <p className="text-[11px] text-slate-400 font-medium">
                        {news.date}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Widget 4: Banner CTA */}
            <div className="relative rounded-[2rem] overflow-hidden group">
              <div className="absolute inset-0 bg-slate-900/60 z-10 group-hover:bg-slate-900/50 transition-colors"></div>
              <img
                src="img/banner-promo.jpg"
                alt="Promo EcoCash"
                className="w-full h-64 object-cover"
                onError={(e) => {
                  e.target.style.display = "none";
                  e.target.parentElement.classList.add("bg-slate-800");
                }}
              />
              <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center p-6">
                <h3 className="text-white font-bold font-heading text-xl mb-2 leading-tight">
                  Bergabung dengan Komunitas Hijau Kami!
                </h3>
                <p className="text-slate-200 text-xs mb-6">
                  Mulai daur ulang dan dapatkan reward hari ini.
                </p>
                <button className="bg-white text-eco-cyan px-6 py-2.5 rounded-full text-sm font-bold font-heading shadow-lg hover:scale-105 transition-transform">
                  Download App
                </button>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
