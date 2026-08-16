import React, { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { newsList } from "../constants/dummyData";

export default function NewsDetail() {
  const { id } = useParams(); // Mengambil ID dari URL
  const navigate = useNavigate();

  // Mencari data berita berdasarkan ID
  //const newsItem = newsList.find((item) => item.id === id);
  const newsItem = newsList.find((item) => item.id === parseInt(id)); // Pastikan id dibandingkan sebagai angka
  console.log("NEWS: ", newsItem); // Debugging: Periksa data berita yang ditemukan

  // Auto scroll ke atas setiap kali halaman dibuka
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  // Jika berita tidak ditemukan
  if (!newsItem) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50">
        <h1 className="text-3xl font-bold text-slate-800 font-heading mb-4">
          Berita Tidak Ditemukan
        </h1>
        <Link
          to="/"
          className="text-eco-primary hover:text-eco-accent underline font-body"
        >
          Kembali ke Beranda
        </Link>
      </div>
    );
  }

  return (
    <main className="w-full min-h-screen bg-slate-50 pt-28 pb-24">
      <article className="max-w-4xl mx-auto px-6 lg:px-8">
        {/* Tombol Kembali & Breadcrumb */}
        <div className="mb-8 flex items-center gap-2 text-sm font-body text-slate-500">
          <button
            onClick={() => navigate(-1)}
            className="hover:text-eco-primary flex items-center gap-1 transition-colors"
          >
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
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Kembali
          </button>
          <span>/</span>
          <Link to="/" className="hover:text-eco-primary transition-colors">
            Beranda
          </Link>
          <span>/</span>
          <span className="text-slate-700 font-medium truncate">
            Detail Berita
          </span>
        </div>

        {/* Header Artikel */}
        <header className="mb-10">
          <span className="inline-block bg-eco-cyan/10 text-eco-primary px-4 py-1.5 rounded-full text-xs font-bold font-heading uppercase tracking-wider mb-4 border border-eco-cyan/20">
            {newsItem.category}
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 font-heading leading-tight mb-6">
            {newsItem.title}
          </h1>

          <div className="flex items-center gap-4 text-sm font-body text-slate-500 border-b border-slate-200 pb-6">
            <div className="flex items-center gap-1.5">
              <span className="text-eco-accent">📅</span> {newsItem.date}
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-eco-accent">✍️</span> {newsItem.author}
            </div>
          </div>
        </header>

        {/* Gambar Utama (Hero Image) */}
        <div className="w-full h-[300px] md:h-[450px] rounded-3xl overflow-hidden mb-10 shadow-lg shadow-slate-200/50">
          <img
            src={newsItem.img}
            alt={newsItem.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Konten Artikel */}
        <div className="prose prose-lg max-w-none font-body text-slate-700 leading-relaxed space-y-6">
          {/* Memisahkan paragraf dari data string dengan baris baru */}
          {newsItem.content
            .split("\n")
            .map(
              (paragraph, index) =>
                paragraph.trim() && <p key={index}>{paragraph}</p>,
            )}
        </div>

        {/* Call to Action (Share / Ajak Bergabung) */}
        <div className="mt-16 pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="font-heading font-bold text-slate-800">
            Bagikan artikel ini:
          </p>
          <div className="flex gap-4">
            <button className="bg-slate-100 hover:bg-eco-primary hover:text-white text-slate-600 px-5 py-2.5 rounded-xl text-sm font-bold transition-all shadow-sm">
              Instagram
            </button>
            <button className="bg-slate-100 hover:bg-eco-primary hover:text-white text-slate-600 px-5 py-2.5 rounded-xl text-sm font-bold transition-all shadow-sm">
              Facebook
            </button>
            <button className="bg-slate-100 hover:bg-eco-primary hover:text-white text-slate-600 px-5 py-2.5 rounded-xl text-sm font-bold transition-all shadow-sm">
              Twitter / X
            </button>
            <button className="bg-slate-100 hover:bg-eco-accent hover:text-white text-slate-600 px-5 py-2.5 rounded-xl text-sm font-bold transition-all shadow-sm flex items-center gap-2">
              Salin Tautan
            </button>
          </div>
        </div>
      </article>
    </main>
  );
}
