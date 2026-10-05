import React, { useState, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { getLocalizedArticles } from "../constants/dummyData";
import BotAssistant from "../components/bot/BotAssistant";

// Gambar fallback aman yang sudah terbukti ada di repositori
const SAFE_FALLBACK_IMG = "/img/hero-news.jpg";

// Helper Parser URL Gambar Cover Cloudinary & Format Lainnya
const resolveImageUrl = (item) => {
  if (!item) return SAFE_FALLBACK_IMG;
  const rawUrl =
    item.imageUrl ||
    item.imageThumbnailUrl ||
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

  return SAFE_FALLBACK_IMG;
};

export default function EcoCashAkademi() {
  const { t, i18n } = useTranslation();
  const [activeCategory, setActiveCategory] = useState("ALL");
  const [email, setEmail] = useState("");
  const [isSubscribing, setIsSubscribing] = useState(false);
  const [subscribeStatus, setSubscribeStatus] = useState(null);
  const [subscribeMessage, setSubscribeMessage] = useState("");

  const currentLang = (i18n.resolvedLanguage || i18n.language || "id")
    .split("-")[0]
    .toLowerCase();

  // 1. Skema Aman (SWR): Inisialisasi awal langsung dengan dummy multi-bahasa
  const [articles, setArticles] = useState(() => getLocalizedArticles(currentLang));
  const [loading, setLoading] = useState(false);

  const apiUrl =
    import.meta.env.VITE_API_URL_LOCAL ||
    import.meta.env.VITE_API_BASE_URL ||
    import.meta.env.VITE_API_URL ||
    "https://api.ecocash.id/api/v1";

  // Reset kategori saat bahasa berubah
  useEffect(() => {
    setActiveCategory("ALL");
  }, [currentLang]);

  // Scroll ke paling atas saat halaman dimuat
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // 2. Fetch Artikel Edukasi / Akademi dari Backend (GET /news?contentType=ACADEMY)
  useEffect(() => {
    let isMounted = true;
    const abortController = new AbortController();

    const fetchAcademyArticles = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `${apiUrl}/news?lang=${currentLang}&contentType=ACADEMY&limit=12`,
          { signal: abortController.signal }
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
            const formatted = rawItems.map((item) => ({
              id: item.id,
              slug: item.slug,
              title: item.title,
              category: item.category || "Edukasi",
              time:
                item.readTime ||
                (currentLang === "zh" ? "5 分钟阅读" : "5 min read"),
              img: resolveImageUrl(item),
            }));
            setArticles(formatted);
          } else {
            setArticles(getLocalizedArticles(currentLang));
          }
        }
      } catch (err) {
        if (err.name !== "AbortError") {
          console.warn(
            "[EcoCashAkademi] Server API offline/kosong, menggunakan data fallback lokal:",
            err.message
          );
          if (isMounted) {
            setArticles(getLocalizedArticles(currentLang));
          }
        }
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    fetchAcademyArticles();

    return () => {
      isMounted = false;
      abortController.abort();
    };
  }, [apiUrl, currentLang]);

  // Daftar kategori dinamis
  const categoriesList = useMemo(() => {
    const cats = new Set();
    articles.forEach((item) => {
      if (item.category) cats.add(item.category);
    });
    return ["ALL", ...Array.from(cats)];
  }, [articles]);

  const filteredArticles = useMemo(() => {
    if (activeCategory === "ALL") return articles;
    return articles.filter((article) => article.category === activeCategory);
  }, [articles, activeCategory]);

  // 3. Pendaftaran Newsletter
  const handleSubscribe = async (e) => {
    e.preventDefault();
    setIsSubscribing(true);
    setSubscribeStatus(null);
    setSubscribeMessage("");

    try {
      const response = await fetch(`${apiUrl}/leads/newsletter`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept-Language": currentLang,
        },
        body: JSON.stringify({ email: email.trim() }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || `Gagal berlangganan (HTTP ${response.status})`);
      }

      setSubscribeStatus("success");
      setSubscribeMessage(
        t(
          "academy.newsletterSuccess",
          "Terima kasih! Email Anda berhasil didaftarkan untuk newsletter mingguan."
        )
      );
      setEmail("");
    } catch (err) {
      console.error("[Newsletter Error]:", err);
      setSubscribeStatus("error");
      setSubscribeMessage(
        err.message ||
          t("academy.newsletterError", "Format email tidak valid atau terjadi kendala server.")
      );
    } finally {
      setIsSubscribing(false);
    }
  };

  return (
    <main className="w-full min-h-screen bg-slate-50/30 font-body text-slate-700 pb-24">
      {/* 1. HEADER & HERO ARTICLE */}
      <section className="pt-28 pb-12 max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-3xl mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 font-heading leading-tight mb-4 tracking-tight">
            {t("academy.heroTitle", "EcoCash Academy: Wawasan & Aksi Menuju Masa Depan Sirkular")}
          </h1>
          <p className="text-base md:text-lg text-slate-500 leading-relaxed">
            {t(
              "academy.heroDesc",
              "Jelajahi panduan praktis, inovasi teknologi, dan cerita inspiratif seputar pengelolaan limbah yang cerdas dan menguntungkan."
            )}
          </p>
        </div>

        {/* Featured Article Card */}
        <div className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden flex flex-col lg:flex-row group cursor-pointer hover:shadow-lg transition-all duration-300">
          <div className="w-full lg:w-1/2 h-64 lg:h-[400px] bg-slate-200 overflow-hidden relative">
            <img
              src="img/hero-news.jpg"
              alt="IoT Daur Ulang"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "/img/hero-news.jpg";
              }}
            />
          </div>
          <div className="w-full lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
            <span className="inline-block bg-eco-cyan/10 text-eco-cyan px-3 py-1 rounded-full text-[11px] font-bold font-heading uppercase tracking-wider mb-4 w-fit">
              {t("academy.featuredTag", "Inovasi Sirkular")}
            </span>
            <h2 className="text-2xl lg:text-4xl font-extrabold text-slate-900 font-heading leading-[1.25] mb-4 group-hover:text-eco-primary transition-colors">
              {t(
                "academy.featuredTitle",
                "Bagaimana IoT Mengubah Lanskap Daur Ulang di Indonesia"
              )}
            </h2>
            <p className="text-slate-500 font-body mb-8 leading-relaxed line-clamp-3">
              {t(
                "academy.featuredDesc",
                "Internet of Things (IoT) bukan lagi sekadar konsep masa depan. Dalam konteks ekonomi sirkular, sensor pintar pada Reverse Vending Machine (RVM) kini memungkinkan pelacakan real-time..."
              )}
            </p>
            <div className="flex items-center gap-3 mt-auto">
              <div className="w-10 h-10 rounded-full bg-eco-cyan/10 flex items-center justify-center text-eco-primary font-bold text-xs">
                BS
              </div>
              <div>
                <p className="text-sm font-bold text-slate-900 font-heading">
                  Budi Santoso
                </p>
                <p className="text-xs text-slate-400">
                  {t("academy.featuredMeta", "24 Mei 2024 • 8 min read")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CATEGORY FILTER & ARTICLE GRID */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 pb-16">
        <div className="flex flex-wrap items-center gap-3 mb-10">
          {categoriesList.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2.5 rounded-full text-sm font-heading font-bold transition-all cursor-pointer ${
                activeCategory === category
                  ? "bg-[#064e3b] text-white shadow-md"
                  : "bg-white text-slate-500 border border-slate-200 hover:border-eco-primary hover:text-eco-primary"
              }`}
            >
              {category === "ALL" ? t("academy.catAll", "Semua") : category}
            </button>
          ))}
        </div>

        {loading && articles.length === 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((skeleton) => (
              <div
                key={skeleton}
                className="bg-white rounded-3xl border border-slate-100 p-4 animate-pulse h-80 flex flex-col justify-between"
              >
                <div className="w-full h-44 bg-slate-200 rounded-2xl mb-4"></div>
                <div className="h-4 bg-slate-200 rounded w-1/3 mb-2"></div>
                <div className="h-6 bg-slate-200 rounded w-3/4 mb-2"></div>
                <div className="h-4 bg-slate-200 rounded w-1/4"></div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.length > 0 ? (
              filteredArticles.map((article) => (
                <Link
                  to={`/news/${article.slug || article.id}`}
                  key={article.id || article.slug}
                  className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden flex flex-col group cursor-pointer hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="w-full h-52 bg-slate-100 overflow-hidden relative">
                    <img
                      src={article.img || resolveImageUrl(article)}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = SAFE_FALLBACK_IMG;
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
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {article.time}
                    </div>
                  </div>
                </Link>
              ))
            ) : (
              <div className="col-span-full text-center py-12 text-slate-500 font-body">
                {t("academy.noArticles", "Belum ada artikel untuk kategori ini.")}
              </div>
            )}
          </div>
        )}
      </section>

      {/* 3. NEWSLETTER SUBSCRIPTION */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="bg-[#f0f6ff] rounded-[2rem] p-8 md:p-12 lg:p-16 flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="w-full md:w-1/2">
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 font-heading mb-4">
              {t("academy.newsletterTitle", "Dapatkan Tips Zero-Waste Mingguan")}
            </h2>
            <p className="text-sm md:text-base text-slate-500 leading-relaxed font-body">
              {t(
                "academy.newsletterDesc",
                "Bergabunglah dengan ribuan pembaca lainnya untuk mendapatkan wawasan eksklusif tentang ekonomi sirkular langsung di kotak masuk Anda."
              )}
            </p>

            {subscribeStatus === "success" && (
              <p className="mt-3 text-xs font-bold text-emerald-700 bg-emerald-100/70 px-4 py-2 rounded-xl inline-block">
                ✓ {subscribeMessage}
              </p>
            )}
            {subscribeStatus === "error" && (
              <p className="mt-3 text-xs font-bold text-rose-700 bg-rose-100/70 px-4 py-2 rounded-xl inline-block">
                ✕ {subscribeMessage}
              </p>
            )}
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
                placeholder={t("academy.newsletterPlaceholder", "Masukkan email Anda")}
                className="flex-1 bg-transparent border-none outline-none px-5 py-3 text-sm font-body text-slate-700 placeholder-slate-400"
                required
                disabled={isSubscribing}
              />
              <button
                type="submit"
                disabled={isSubscribing}
                className="bg-eco-cyan hover:bg-[#1eb5b1] text-white px-6 py-3 rounded-full font-heading font-bold text-sm transition-colors disabled:opacity-50 cursor-pointer"
              >
                {isSubscribing
                  ? t("academy.newsletterSubmitting", "Mendaftarkan...")
                  : t("academy.newsletterBtn", "Subscribe")}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Bot Assistant (Mengelola State Sendiri Secara Mandiri) */}
      <BotAssistant />
    </main>
  );
}