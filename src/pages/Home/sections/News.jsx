import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { getLocalizedNewsList } from "../../../constants/dummyData";

// Helper Parser URL Gambar Cloudinary & Eksternal
const resolveImageUrl = (item) => {
  if (!item) return "/img/hero-news.jpg";
  const rawUrl =
    item.imageUrl ||
    item.secure_url ||
    item.image ||
    item.img ||
    item.url;

  if (typeof rawUrl === "string" && rawUrl.trim() !== "") {
    // Menangani URL penuh Cloudinary (https://res.cloudinary.com/...) atau URL HTTP lainnya
    if (rawUrl.startsWith("http://") || rawUrl.startsWith("https://") || rawUrl.startsWith("/")) {
      return rawUrl;
    }
    // Jika backend hanya mengirim public_id Cloudinary
    return `https://res.cloudinary.com/demo/image/upload/${rawUrl}`;
  }

  return "/img/hero-news.jpg";
};

export default function News() {
  const { t, i18n } = useTranslation();

  // Deteksi bahasa aktif ('id', 'en', atau 'zh')
  const currentLang = (i18n.resolvedLanguage || i18n.language || "id")
    .split("-")[0]
    .toLowerCase();

  // Inisialisasi awal langsung dengan data dummy multibahasa
  const [articles, setArticles] = useState(() => getLocalizedNewsList(currentLang));
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let isMounted = true;

    const fetchArticles = async () => {
      setLoading(true);
      try {
        const apiUrl =
          import.meta.env.VITE_API_URL_LOCAL ||
          import.meta.env.VITE_API_BASE_URL ||
          import.meta.env.VITE_API_URL ||
          "https://api.ecocash.id/api/v1";

        const response = await fetch(
          `${apiUrl}/news?lang=${currentLang}&contentType=NEWS&limit=6`
        );

        if (!response.ok) {
          throw new Error(`HTTP Error: ${response.status}`);
        }

        const result = await response.json();

        if (isMounted) {
          const rawItems = Array.isArray(result.data)
            ? result.data
            : result.data?.items || [];

          if (rawItems.length > 0) {
            const normalized = rawItems.map((item) => ({
              id: item.id,
              slug: item.slug,
              title: item.title,
              desc: item.excerpt || item.content?.substring(0, 130) + "...",
              img: resolveImageUrl(item),
              category: item.category || t("news.badgeLatest", "Terbaru"),
              date: item.createdAt
                ? new Date(item.createdAt).toLocaleDateString(
                    currentLang === "en" ? "en-US" : currentLang === "zh" ? "zh-CN" : "id-ID",
                    { year: "numeric", month: "short", day: "numeric" }
                  )
                : "",
            }));
            setArticles(normalized);
          } else {
            // Fallback jika API database kosong
            setArticles(getLocalizedNewsList(currentLang));
          }
        }
      } catch (err) {
        console.warn(
          "[News] Gagal menghubungi backend API, beralih ke data fallback lokal:",
          err.message
        );
        if (isMounted) {
          // Fallback jika server down
          setArticles(getLocalizedNewsList(currentLang));
        }
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    fetchArticles();

    return () => {
      isMounted = false;
    };
  }, [currentLang, t]);

  return (
    <section id="news" className="max-w-7xl mx-auto px-6 lg:px-10 py-24">
      {/* Header Judul Section */}
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
        <div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 font-heading">
            {t("news.title", "Berita EcoCash.id")}
          </h2>
          <p className="text-slate-600 font-body mt-2">
            {t(
              "news.subtitle",
              "Ikuti terus pembaruan ekosistem dan aktivitas daur ulang kami."
            )}
          </p>
        </div>

        {/* Tombol Tampilkan Lebih Banyak (Desktop) */}
        <Link
          to="/all-news"
          className="hidden md:flex text-eco-cyan font-heading font-bold items-center hover:text-eco-cyan transition-colors group"
        >
          {t("news.viewAll", "Lihat Semua Berita")}
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
        </Link>
      </div>

      {/* Grid Berita */}
      {loading && articles.length === 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((skeleton) => (
            <div
              key={skeleton}
              className="bg-white rounded-3xl border border-slate-100 p-4 animate-pulse h-96 flex flex-col justify-between"
            >
              <div className="w-full h-48 bg-slate-200 rounded-2xl mb-4"></div>
              <div className="h-4 bg-slate-200 rounded w-1/3 mb-2"></div>
              <div className="h-6 bg-slate-200 rounded w-3/4 mb-2"></div>
              <div className="h-4 bg-slate-200 rounded w-full mb-1"></div>
              <div className="h-4 bg-slate-200 rounded w-2/3"></div>
            </div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((berita) => {
            const articleLink = `/news/${berita.slug || berita.id}`;
            const displayImage = resolveImageUrl(berita);
            const displayTitle = berita.title;
            const displayDesc = berita.excerpt || berita.desc;
            const displayCategory =
              berita.category || t("news.badgeLatest", "Terbaru");

            return (
              <Link
                key={berita.id || berita.slug}
                to={articleLink}
                className="group bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-teal-500/10 transition-all duration-300 overflow-hidden flex flex-col h-full cursor-pointer"
              >
                <div className="w-full h-48 overflow-hidden relative bg-slate-100">
                  <div className="absolute inset-0 bg-eco-primary/0 group-hover:bg-eco-primary/20 transition-colors duration-300 z-10"></div>
                  <img
                    src={displayImage}
                    alt={displayTitle}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    onError={(e) => {
                      // Fallback otomatis jika link gambar Cloudinary rusak/kedaluwarsa
                      e.target.onerror = null;
                      e.target.src = "/img/hero-news.jpg";
                    }}
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  {/* Badge Kategori */}
                  <span className="text-xs font-bold text-eco-cyan font-body mb-2 uppercase tracking-wider">
                    {displayCategory}
                  </span>
                  <h3 className="text-lg font-bold mb-3 text-slate-900 font-heading group-hover:text-eco-primary transition-colors line-clamp-2">
                    {displayTitle}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed font-body line-clamp-3">
                    {displayDesc}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      )}

      {/* Tombol Tampilkan Lebih Banyak (Mobile) */}
      <div className="mt-10 text-center md:hidden">
        <Link
          to="/all-news"
          className="inline-flex items-center justify-center bg-slate-50 text-eco-primary font-heading font-bold px-6 py-3 rounded-full border border-slate-200 hover:bg-slate-100 transition-colors w-full"
        >
          {t("news.viewAll", "Lihat Semua Berita")}
        </Link>
      </div>
    </section>
  );
}