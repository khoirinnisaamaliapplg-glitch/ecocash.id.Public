import React, { useEffect, useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { getLocalizedNewsList } from "../constants/dummyData";
import BotAssistant from "../components/bot/BotAssistant";

// Helper Parser URL Gambar Cloudinary
const resolveImageUrl = (item) => {
  if (!item) return "/img/hero-news.jpg";
  const rawUrl =
    item.imageUrl ||
    item.secure_url ||
    item.image ||
    item.img ||
    item.url;

  if (typeof rawUrl === "string" && rawUrl.trim() !== "") {
    if (rawUrl.startsWith("http://") || rawUrl.startsWith("https://") || rawUrl.startsWith("/")) {
      return rawUrl;
    }
    return `https://res.cloudinary.com/demo/image/upload/${rawUrl}`;
  }

  return "/img/hero-news.jpg";
};

export default function AllNewsPage() {
  const { t, i18n } = useTranslation();
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  const currentLang = (i18n.resolvedLanguage || i18n.language || "id")
    .split("-")[0]
    .toLowerCase();

  // Inisialisasi awal langsung dengan data dummy multibahasa
  const initialData = useMemo(() => getLocalizedNewsList(currentLang), [currentLang]);

  const [articles, setArticles] = useState(() => initialData.slice(0, itemsPerPage));
  const [latestNews, setLatestNews] = useState(() => initialData.slice(0, 3));
  const [totalPages, setTotalPages] = useState(() => Math.ceil(initialData.length / itemsPerPage) || 1);
  const [loading, setLoading] = useState(false);
  const [botFlowData, setBotFlowData] = useState(null);

  const apiUrl =
    import.meta.env.VITE_API_URL_LOCAL ||
    import.meta.env.VITE_API_BASE_URL ||
    import.meta.env.VITE_API_URL ||
    "https://api.ecocash.id/api/v1";

  // 1. Fetch Bot Assistant Flow Tree
  useEffect(() => {
    window.scrollTo(0, 0);

    const fetchBotTree = async () => {
      try {
        const response = await fetch(`${apiUrl}/bot/tree?lang=${currentLang}`);
        if (!response.ok) throw new Error("Gagal mengambil data bot");
        const result = await response.json();
        if (result.success && result.data) {
          setBotFlowData(result.data);
        }
      } catch (err) {
        console.error("Kesalahan API Bot:", err.message);
      }
    };

    fetchBotTree();
  }, [apiUrl, currentLang]);

  // 2. Fetch Artikel dari Backend dengan Dukungan Multibahasa & Search
  useEffect(() => {
    let isMounted = true;

    const applyDummyFallback = () => {
      const currentNewsData = getLocalizedNewsList(currentLang);
      const searchLower = searchQuery.toLowerCase();
      const filtered = currentNewsData.filter(
        (news) =>
          news.title.toLowerCase().includes(searchLower) ||
          news.desc.toLowerCase().includes(searchLower) ||
          (news.category && news.category.toLowerCase().includes(searchLower))
      );

      const calculatedTotalPages = Math.ceil(filtered.length / itemsPerPage) || 1;
      const indexOfLast = currentPage * itemsPerPage;
      const indexOfFirst = indexOfLast - itemsPerPage;

      setArticles(filtered.slice(indexOfFirst, indexOfLast));
      setTotalPages(calculatedTotalPages);
      setLatestNews(currentNewsData.slice(0, 3));
    };

    const fetchAllNews = async () => {
      setLoading(true);
      try {
        const queryParams = new URLSearchParams({
          lang: currentLang,
          page: currentPage.toString(),
          limit: itemsPerPage.toString(),
          contentType: "NEWS",
        });

        if (searchQuery.trim() !== "") {
          queryParams.append("search", searchQuery.trim());
        }

        const response = await fetch(`${apiUrl}/news?${queryParams.toString()}`);
        if (!response.ok) throw new Error(`HTTP Error: ${response.status}`);

        const result = await response.json();

        if (isMounted) {
          const rawItems = Array.isArray(result.data)
            ? result.data
            : result.data?.items || [];
          const meta = result.data?.meta || {};

          if (rawItems.length > 0) {
            const formatted = rawItems.map((item) => ({
              id: item.id,
              slug: item.slug,
              title: item.title,
              desc: item.excerpt || item.content?.substring(0, 140) + "...",
              img: resolveImageUrl(item),
              category: item.category || t("allNews.badgeLatest", "Berita"),
              date: item.createdAt
                ? new Date(item.createdAt).toLocaleDateString(
                    currentLang === "en" ? "en-US" : currentLang === "zh" ? "zh-CN" : "id-ID",
                    { year: "numeric", month: "short", day: "numeric" }
                  )
                : "",
            }));

            setArticles(formatted);
            setTotalPages(meta.totalPages || Math.ceil(formatted.length / itemsPerPage) || 1);
            if (currentPage === 1) {
              setLatestNews(formatted.slice(0, 3));
            }
          } else if (searchQuery.trim() === "") {
            applyDummyFallback();
          } else {
            setArticles([]);
            setTotalPages(1);
          }
        }
      } catch (err) {
        console.warn("[AllNewsPage] Backend offline/gagal, beralih ke data fallback lokal:", err.message);
        if (isMounted) {
          applyDummyFallback();
        }
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    fetchAllNews();

    return () => {
      isMounted = false;
    };
  }, [apiUrl, currentLang, currentPage, searchQuery, t]);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const prevPage = () => setCurrentPage((prev) => Math.max(prev - 1, 1));
  const nextPage = () => setCurrentPage((prev) => Math.min(prev + 1, totalPages));

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
            {t("allNews.badge", "Pusat Informasi")}
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold font-heading mb-4">
            {t("allNews.heroTitle", "Berita & Artikel")}
          </h1>
          <p className="text-slate-300 text-lg max-w-xl">
            {t(
              "allNews.heroDesc",
              "Ikuti perkembangan terbaru seputar inovasi pengelolaan sampah, inisiatif keberlanjutan, dan pencapaian ekosistem EcoCash."
            )}
          </p>
        </div>
      </section>

      {/* 2. MAIN CONTENT & SIDEBAR */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          {/* LEFT COLUMN: BLOG GRID */}
          <div className="lg:col-span-2">
            {loading && articles.length === 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="bg-white rounded-[2rem] border border-slate-100 p-6 animate-pulse h-96 flex flex-col justify-between"
                  >
                    <div className="h-44 bg-slate-200 rounded-2xl mb-4"></div>
                    <div className="h-4 bg-slate-200 rounded w-1/3 mb-2"></div>
                    <div className="h-6 bg-slate-200 rounded w-4/5 mb-3"></div>
                    <div className="h-4 bg-slate-200 rounded w-full mb-1"></div>
                    <div className="h-4 bg-slate-200 rounded w-2/3"></div>
                  </div>
                ))}
              </div>
            ) : articles.length === 0 ? (
              <div className="bg-white rounded-2xl border border-slate-100 p-10 text-center">
                <svg
                  className="w-16 h-16 mx-auto text-slate-300 mb-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
                <h3 className="text-xl font-bold font-heading text-slate-800 mb-2">
                  {t("allNews.notFoundTitle", "Berita Tidak Ditemukan")}
                </h3>
                <p className="text-slate-500 font-body">
                  {t(
                    "allNews.notFoundDesc",
                    "Coba gunakan kata kunci pencarian yang berbeda."
                  )}
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {articles.map((news) => (
                  <Link
                    to={`/news/${news.slug || news.id}`}
                    key={news.id || news.slug}
                    className="bg-white rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col h-full overflow-hidden"
                  >
                    {/* Thumbnail & Badge */}
                    <div className="relative h-56 overflow-hidden bg-slate-100">
                      <img
                        src={resolveImageUrl(news)}
                        alt={news.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = "/img/hero-news.jpg";
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
                          {t("allNews.readMore", "Baca Selengkapnya")}
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}

            {/* Pagination Controls */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center gap-2 mt-12">
                <button
                  onClick={prevPage}
                  disabled={currentPage === 1}
                  className={`w-10 h-10 rounded-full border flex items-center justify-center transition-colors ${
                    currentPage === 1
                      ? "border-slate-200 text-slate-300 bg-slate-50 cursor-not-allowed"
                      : "border-slate-200 text-slate-500 hover:bg-eco-cyan hover:text-white hover:border-eco-cyan"
                  }`}
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                  </svg>
                </button>

                {[...Array(totalPages)].map((_, index) => (
                  <button
                    key={index}
                    onClick={() => paginate(index + 1)}
                    className={`w-10 h-10 rounded-full border flex items-center justify-center transition-colors font-semibold text-sm ${
                      currentPage === index + 1
                        ? "bg-eco-cyan text-white border-eco-cyan shadow-md"
                        : "border-slate-200 text-slate-500 hover:bg-eco-cyan hover:text-white hover:border-eco-cyan"
                    }`}
                  >
                    {index + 1}
                  </button>
                ))}

                <button
                  onClick={nextPage}
                  disabled={currentPage === totalPages}
                  className={`w-10 h-10 rounded-full border flex items-center justify-center transition-colors ${
                    currentPage === totalPages
                      ? "border-slate-200 text-slate-300 bg-slate-50 cursor-not-allowed"
                      : "border-slate-200 text-slate-500 hover:bg-eco-cyan hover:text-white hover:border-eco-cyan"
                  }`}
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            )}
          </div>

          {/* RIGHT COLUMN: SIDEBAR */}
          <aside className="lg:col-span-1 space-y-10">
            {/* Widget 1: Search */}
            <div className="bg-white p-2 rounded-2xl border border-slate-200 shadow-sm flex items-center focus-within:border-eco-cyan focus-within:ring-1 focus-within:ring-eco-cyan transition-all">
              <input
                type="text"
                placeholder={t("allNews.searchPlaceholder", "Cari berita...")}
                value={searchQuery}
                onChange={handleSearchChange}
                className="w-full bg-transparent px-4 py-2 text-sm outline-none text-slate-700 font-body placeholder-slate-400"
              />
              <button className="w-10 h-10 shrink-0 bg-eco-cyan text-white rounded-xl flex items-center justify-center hover:bg-[#1eb5b1] transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>

            {/* Widget 2: Newsletter */}
            <div className="bg-[#06b6d4] p-8 rounded-[2rem] text-white shadow-xl shadow-eco-cyan/20">
              <h3 className="text-xl font-bold font-heading mb-3">Newsletter</h3>
              <p className="text-cyan-50 text-sm mb-6 leading-relaxed">
                {t(
                  "allNews.newsletterDesc",
                  "Daftarkan email Anda untuk mendapatkan informasi pembaruan, berita, dan insight gratis dari EcoCash."
                )}
              </p>
              <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="text"
                  placeholder={t("allNews.fullNamePlaceholder", "Nama Lengkap")}
                  className="w-full bg-white/10 border border-white/20 text-white placeholder-cyan-100 px-4 py-3 rounded-xl text-sm outline-none focus:bg-white/20 transition-colors"
                />
                <input
                  type="email"
                  placeholder={t("allNews.emailPlaceholder", "Alamat Email")}
                  className="w-full bg-white border border-white/20 text-slate-800 placeholder-slate-400 px-4 py-3 rounded-xl text-sm outline-none"
                />
                <button className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold font-heading text-sm py-3.5 rounded-xl transition-colors mt-2">
                  {t("allNews.subscribeBtn", "Berlangganan")}
                </button>
              </form>
            </div>

            {/* Widget 3: Latest Post */}
            <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm">
              <h3 className="text-lg font-bold font-heading text-slate-900 mb-6 pb-4 border-b border-slate-100">
                {t("allNews.latestPosts", "Postingan Terbaru")}
              </h3>
              <div className="space-y-5">
                {latestNews.map((item) => (
                  <Link
                    to={`/news/${item.slug || item.id}`}
                    key={item.id || item.slug}
                    className="flex gap-4 items-center group cursor-pointer"
                  >
                    <img
                      src={resolveImageUrl(item)}
                      alt={item.title}
                      className="w-20 h-20 rounded-xl object-cover bg-slate-100 shrink-0"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "/img/hero-news.jpg";
                      }}
                    />
                    <div>
                      <h4 className="text-sm font-bold font-heading text-slate-800 leading-tight mb-1 group-hover:text-eco-cyan transition-colors line-clamp-2">
                        {item.title}
                      </h4>
                      <p className="text-[11px] text-slate-400 font-medium">
                        {item.date}
                      </p>
                    </div>
                  </Link>
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
                  {t("allNews.bannerTitle", "Bergabung dengan Komunitas Hijau Kami!")}
                </h3>
                <p className="text-slate-200 text-xs mb-6">
                  {t("allNews.bannerDesc", "Mulai daur ulang dan dapatkan reward hari ini.")}
                </p>
                <button className="bg-white text-eco-cyan px-6 py-2.5 rounded-full text-sm font-bold font-heading shadow-lg hover:scale-105 transition-transform">
                  {t("allNews.bannerBtn", "Download App")}
                </button>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* Bot Assistant */}
      <BotAssistant botFlowData={botFlowData} />
    </main>
  );
}