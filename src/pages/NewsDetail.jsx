import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { newsList } from "../constants/dummyData";
import BotAssistant from "../components/bot/BotAssistant";

export default function NewsDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

  const [newsItem, setNewsItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [botFlowData, setBotFlowData] = useState(null);

  const currentLang = (i18n.resolvedLanguage || i18n.language || "id")
    .split("-")[0]
    .toLowerCase();

  const apiUrl =
    import.meta.env.VITE_API_BASE_URL ||
    import.meta.env.VITE_API_URL ||
    "http://localhost:3000/api/v1";

  // Auto scroll ke atas setiap kali parameter id atau bahasa berubah
  useEffect(() => {
    window.scrollTo(0, 0);

    // 1. Fetch data Bot Flow
    const fetchBotTree = async () => {
      try {
        const response = await fetch(`${apiUrl}/bot/tree`);
        if (!response.ok) throw new Error("Gagal mengambil data bot");
        const result = await response.json();
        if (result.success && result.data) {
          setBotFlowData(result.data);
        }
      } catch (err) {
        console.error("Kesalahan API Bot:", err.message);
      }
    };

    // 2. Fetch Detail Artikel dari Backend (Mendukung ID Numerik maupun Slug)
    const fetchNewsDetail = async () => {
      setLoading(true);
      try {
        const response = await fetch(`${apiUrl}/news/${id}?lang=${currentLang}`);

        if (response.ok) {
          const result = await response.json();
          if (result.success && result.data) {
            const data = result.data;
            setNewsItem({
              id: data.id,
              slug: data.slug,
              title: data.title,
              category: data.category || "Berita",
              author: data.author?.name || data.author || "EcoCash Editorial Team",
              date: data.createdAt
                ? new Date(data.createdAt).toLocaleDateString(
                    currentLang === "en" ? "en-US" : currentLang === "zh" ? "zh-CN" : "id-ID",
                    { year: "numeric", month: "long", day: "numeric" }
                  )
                : "",
              img: data.imageUrl || "/img/hero-news.jpg",
              content: data.content || data.excerpt || "",
            });
            return;
          }
        }
        throw new Error("Artikel tidak ditemukan di backend API");
      } catch (err) {
        console.warn("[NewsDetail] Menggunakan fallback data lokal:", err.message);
        // Fallback ke dummyData jika backend gagal atau offline
        const parsedId = parseInt(id, 10);
        const fallback = newsList.find(
          (item) => item.id === parsedId || item.slug === id
        );
        setNewsItem(fallback || null);
      } finally {
        setLoading(false);
      }
    };

    fetchBotTree();
    fetchNewsDetail();
  }, [id, currentLang, apiUrl]);

  // Tampilan Skeleton saat data sedang dimuat
  if (loading) {
    return (
      <main className="w-full min-h-screen bg-slate-50 pt-28 pb-24">
        <article className="max-w-4xl mx-auto px-6 lg:px-8 animate-pulse">
          <div className="h-6 bg-slate-200 rounded w-1/4 mb-6"></div>
          <div className="h-10 bg-slate-200 rounded w-3/4 mb-4"></div>
          <div className="h-4 bg-slate-200 rounded w-1/2 mb-8"></div>
          <div className="w-full h-80 bg-slate-200 rounded-3xl mb-8"></div>
          <div className="space-y-4">
            <div className="h-4 bg-slate-200 rounded w-full"></div>
            <div className="h-4 bg-slate-200 rounded w-5/6"></div>
            <div className="h-4 bg-slate-200 rounded w-4/6"></div>
          </div>
        </article>
      </main>
    );
  }

  // Tampilan jika berita tidak ditemukan baik di API maupun dummy data
  if (!newsItem) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 px-6">
        <h1 className="text-3xl font-bold text-slate-800 font-heading mb-4 text-center">
          {t("newsDetail.notFound", "Berita Tidak Ditemukan")}
        </h1>
        <p className="text-slate-500 font-body mb-6 text-center max-w-md">
          {t("newsDetail.notFoundDesc", "Artikel yang Anda cari mungkin telah dihapus atau tautan tidak valid.")}
        </p>
        <Link
          to="/all-news"
          className="inline-flex items-center gap-2 bg-eco-cyan text-white px-6 py-3 rounded-full font-bold font-heading hover:bg-[#1eb5b1] transition-colors shadow-md"
        >
          {t("newsDetail.backToAll", "Kembali ke Semua Berita")}
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
            className="hover:text-eco-primary flex items-center gap-1 transition-colors cursor-pointer"
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
            {t("common.back", "Kembali")}
          </button>
          <span>/</span>
          <Link to="/" className="hover:text-eco-primary transition-colors">
            {t("common.home", "Beranda")}
          </Link>
          <span>/</span>
          <span className="text-slate-700 font-medium truncate">
            {newsItem.title}
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

          <div className="flex flex-col items-start gap-1 text-sm font-body text-slate-500 border-b border-slate-200 pb-6">
            <div className="flex items-center gap-1.5">
              <span className="text-eco-accent font-semibold">{t("newsDetail.dateLabel", "Tanggal")}:</span> {newsItem.date}
            </div>

            <div className="flex items-center gap-1.5">
              <span className="text-eco-accent font-semibold">{t("newsDetail.authorLabel", "Penulis")}:</span> {newsItem.author}
            </div>
          </div>
        </header>

        {/* Gambar Utama (Hero Image) */}
        <div className="w-full h-[300px] md:h-[450px] rounded-3xl overflow-hidden mb-10 shadow-lg shadow-slate-200/50 bg-slate-100">
          <img
            src={newsItem.img}
            alt={newsItem.title}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.src = "/img/hero-news.jpg";
            }}
          />
        </div>

        {/* Konten Artikel */}
        <div className="prose prose-lg max-w-none font-body text-slate-700 leading-relaxed space-y-6">
          {newsItem.content
            .split("\n")
            .map(
              (paragraph, index) =>
                paragraph.trim() && <p key={index}>{paragraph}</p>,
            )}
        </div>

        {/* Call to Action (Share) */}
        <div className="mt-16 pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="font-heading font-bold text-slate-800">
            {t("newsDetail.sharePrompt", "Bagikan artikel ini:")}
          </p>
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(window.location.href)}`, "_blank")}
              className="bg-slate-100 hover:bg-eco-primary hover:text-white text-slate-600 px-5 py-2.5 rounded-xl text-sm font-bold transition-all shadow-sm cursor-pointer"
            >
              WhatsApp
            </button>
            <button
              onClick={() => window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}`, "_blank")}
              className="bg-slate-100 hover:bg-eco-primary hover:text-white text-slate-600 px-5 py-2.5 rounded-xl text-sm font-bold transition-all shadow-sm cursor-pointer"
            >
              Twitter / X
            </button>
            <button
              onClick={() => {
                navigator.clipboard.writeText(window.location.href);
                alert(t("newsDetail.linkCopied", "Tautan artikel berhasil disalin!"));
              }}
              className="bg-slate-100 hover:bg-eco-accent hover:text-white text-slate-600 px-5 py-2.5 rounded-xl text-sm font-bold transition-all shadow-sm flex items-center gap-2 cursor-pointer"
            >
              {t("newsDetail.copyLink", "Salin Tautan")}
            </button>
          </div>
        </div>
      </article>

      {/* Bot Assistant */}
      <BotAssistant botFlowData={botFlowData} />
    </main>
  );
}