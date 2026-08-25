import React, { useState, useEffect } from "react";
import { ARTICLES } from "../constants/dummyData";
import { CATEGORIES } from "../constants/dummyData";

export default function EcoCashAkademi() {
  const [activeCategory, setActiveCategory] = useState("Semua");
  const [email, setEmail] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubscribe = (e) => {
    e.preventDefault();
    alert(
      `Terima kasih! Email ${email} berhasil didaftarkan untuk newsletter.`,
    );
    setEmail("");
  };

  // Logika Filter Artikel
  const filteredArticles =
    activeCategory === "Semua"
      ? ARTICLES
      : ARTICLES.filter((article) => article.category === activeCategory);

  return (
    <main className="w-full min-h-screen bg-slate-50/30 font-body text-slate-700 pb-24">
      {/* 1. HEADER & HERO ARTICLE */}
      <section className="pt-28 pb-12 max-w-7xl mx-auto px-6 lg:px-10">
        {/* Page Title */}
        <div className="max-w-3xl mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 font-heading leading-tight mb-4 tracking-tight">
            EcoCash Academy: Wawasan & Aksi Menuju Masa Depan Sirkular
          </h1>
          <p className="text-base md:text-lg text-slate-500 leading-relaxed">
            Jelajahi panduan praktis, inovasi teknologi, dan cerita inspiratif
            seputar pengelolaan limbah yang cerdas dan menguntungkan.
          </p>
        </div>

        {/* Featured Article Card */}
        <div className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden flex flex-col lg:flex-row group cursor-pointer hover:shadow-lg transition-all duration-300">
          <div className="w-full lg:w-1/2 h-64 lg:h-[400px] bg-slate-200 overflow-hidden relative">
            <img
              src="img/akademi-hero.jpg"
              alt="IoT Daur Ulang"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              onError={(e) => {
                e.target.style.display = "none";
                e.target.parentElement.innerHTML = `<div class="w-full h-full flex items-center justify-center bg-slate-100 text-slate-400 font-body text-sm">Siapkan gambar akademi-hero.jpg</div>`;
              }}
            />
          </div>
          <div className="w-full lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
            <span className="inline-block bg-eco-cyan/10 text-eco-cyan px-3 py-1 rounded-full text-[11px] font-bold font-heading uppercase tracking-wider mb-4 w-fit">
              Inovasi Sirkular
            </span>
            <h2 className="text-2xl lg:text-4xl font-extrabold text-slate-900 font-heading leading-[1.25] mb-4 group-hover:text-eco-primary transition-colors">
              Bagaimana IoT Mengubah Lanskap Daur Ulang di Indonesia
            </h2>
            <p className="text-slate-500 font-body mb-8 leading-relaxed line-clamp-3">
              Internet of Things (IoT) bukan lagi sekadar konsep masa depan.
              Dalam konteks ekonomi sirkular, sensor pintar pada Reverse Vending
              Machine (RVM) kini memungkinkan pelacakan real-time...
            </p>
            <div className="flex items-center gap-3 mt-auto">
              <div className="w-10 h-10 rounded-full bg-slate-200 overflow-hidden">
                <img
                  src="img/author.jpg"
                  alt="Author"
                  className="w-full h-full object-cover"
                  onError={(e) => (e.target.style.display = "none")}
                />
              </div>
              <div>
                <p className="text-sm font-bold text-slate-900 font-heading">
                  Budi Santoso
                </p>
                <p className="text-xs text-slate-400">
                  24 Mei 2024 • 8 min read
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CATEGORY FILTER & ARTICLE GRID */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 pb-16">
        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center gap-3 mb-10">
          {CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2.5 rounded-full text-sm font-heading font-bold transition-all cursor-pointer ${
                activeCategory === category
                  ? "bg-[#064e3b] text-white shadow-md" // Dark green sesuai desain
                  : "bg-white text-slate-500 border border-slate-200 hover:border-eco-primary hover:text-eco-primary"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Grid Artikel */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.length > 0 ? (
            filteredArticles.map((article) => (
              <div
                key={article.id}
                className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden flex flex-col group cursor-pointer hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-full h-52 bg-slate-200 overflow-hidden">
                  <img
                    src={article.img}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      e.target.style.display = "none";
                    }}
                  />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <span className="text-[10px] font-bold text-eco-cyan font-heading uppercase tracking-wider mb-2">
                    {article.category}
                  </span>
                  <h3 className="text-lg font-bold text-slate-900 font-heading leading-snug mb-4 group-hover:text-eco-primary transition-colors line-clamp-2">
                    {article.title}
                  </h3>
                  <div className="mt-auto flex items-center gap-1.5 text-xs text-slate-400 font-medium font-body">
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
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    {article.time}
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-12 text-slate-500 font-body">
              Belum ada artikel untuk kategori ini.
            </div>
          )}
        </div>
      </section>

      {/* 3. NEWSLETTER SUBSCRIPTION */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="bg-[#f0f6ff] rounded-[2rem] p-8 md:p-12 lg:p-16 flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="w-full md:w-1/2">
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 font-heading mb-4">
              Dapatkan Tips Zero-Waste Mingguan
            </h2>
            <p className="text-sm md:text-base text-slate-500 leading-relaxed font-body">
              Bergabunglah dengan ribuan pembaca lainnya untuk mendapatkan
              wawasan eksklusif tentang ekonomi sirkular langsung di kotak masuk
              Anda.
            </p>
          </div>
          <div className="w-full md:w-1/2 flex justify-end">
            <form
              onSubmit={handleSubscribe}
              className="w-full max-w-md flex items-center bg-white p-1.5 rounded-full shadow-sm border border-slate-200 focus-within:ring-2 focus-within:ring-eco-cyan/20 focus-within:border-eco-cyan transition-all"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Masukkan email Anda"
                className="flex-1 bg-transparent border-none outline-none px-5 py-3 text-sm font-body text-slate-700 placeholder-slate-400"
                required
              />
              <button
                type="submit"
                className="bg-eco-cyan hover:bg-[#1eb5b1] text-white px-6 py-3 rounded-full font-heading font-bold text-sm transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
