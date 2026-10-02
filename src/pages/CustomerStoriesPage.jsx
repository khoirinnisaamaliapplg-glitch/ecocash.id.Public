import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { CUSTOMER_STORIES } from "../constants/dummyData";
import BotAssistant from "../components/bot/BotAssistant";

export default function CustomerStoriesPage() {
  const { t, i18n } = useTranslation();

  // 1. Inisialisasi LANGSUNG dengan data dummy agar tidak pernah blank sedetik pun
  const [stories, setStories] = useState(CUSTOMER_STORIES);
  const [botFlowData, setBotFlowData] = useState(null);

  const currentLang = (i18n.resolvedLanguage || i18n.language || "id")
    .split("-")[0]
    .toLowerCase();

  const apiUrl =
    import.meta.env.VITE_API_BASE_URL ||
    import.meta.env.VITE_API_URL ||
    "http://localhost:3000/api/v1";

  // 2. Fetch Bot Tree
  useEffect(() => {
    window.scrollTo(0, 0);

    const fetchBotTree = async () => {
      try {
        const apiUrl =
          import.meta.env.VITE_API_URL_LOCAL || "http://localhost:3000/api/v1";

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

    fetchBotTree();
  }, [apiUrl]);

  // 3. Stale-While-Revalidate: Background fetch tanpa mematikan UI yang ada
  useEffect(() => {
    let isMounted = true;

    const fetchTestimonials = async () => {
      try {
        const response = await fetch(
          `${apiUrl}/testimonials?lang=${currentLang}`
        );

        if (!response.ok) {
          throw new Error(`HTTP Error: ${response.status}`);
        }

        const result = await response.json();
        const rawList = Array.isArray(result.data)
          ? result.data
          : Array.isArray(result.data?.items)
          ? result.data.items
          : [];

        if (isMounted) {
          if (rawList.length > 0) {
            const formatted = rawList.map((item, index) => ({
              id: item.id || index + 1,
              name: item.author || item.name || "Mitra EcoCash",
              role: item.role || item.position || "Partner",
              text: item.content || item.text || item.message || "",
              image: item.avatarUrl || item.image || "img/author.jpg",
              rating:
                Number(item.rating) >= 1 && Number(item.rating) <= 5
                  ? Number(item.rating)
                  : 5,
            }));
            setStories(formatted);
          } else {
            // Tetap gunakan data dummy jika data di database kosong
            setStories(CUSTOMER_STORIES);
          }
        }
      } catch (err) {
        // Backend down / offline: Fallback halus ke dummy tanpa memicu reload
        console.warn(
          "[CustomerStories] Backend offline/404, mempertahankan data lokal:",
          err.message
        );
        if (isMounted) {
          setStories(CUSTOMER_STORIES);
        }
      }
    };

    fetchTestimonials();

    return () => {
      isMounted = false;
    };
  }, [currentLang, apiUrl]);

  return (
    <main className="w-full min-h-screen font-body text-slate-700">
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-24 bg-[#0f172a] overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-40">
          <img
            src="img/hero-customer-stories.jpg"
            alt="Customer Stories Background"
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.style.display = "none";
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0f172a] via-[#0f172a]/90 to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10 text-white">
          <div className="text-eco-cyan font-bold tracking-widest text-sm uppercase mb-3 font-heading">
            {t("customerStories.badge", "Kisah Sukses Pengguna")}
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold font-heading mb-4">
            {t("customerStories.heroTitle", "Customer Stories")}
          </h1>
          <p className="text-slate-300 text-lg max-w-xl leading-relaxed">
            {t(
              "customerStories.heroDesc",
              "Lihat bagaimana inovasi pengelolaan sampah dari EcoCash membawa dampak nyata dan menguntungkan bagi individu, komunitas, serta perusahaan mitra kami."
            )}
          </p>
        </div>
      </section>

      {/* 2. TESTIMONIAL GRID SECTION */}
      <section className="py-20 lg:py-28 bg-[#f4f7fb]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {stories.map((story) => {
              // Proteksi agar nilai array rating tidak menyebabkan RangeError
              const validRating = Math.min(
                Math.max(Number(story.rating) || 5, 1),
                5
              );

              return (
                <div
                  key={story.id}
                  className="bg-white rounded-3xl p-8 md:p-10 relative shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col"
                >
                  {/* Header Card: Avatar & Info */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 rounded-full bg-slate-200 shrink-0 overflow-hidden">
                      <img
                        src={story.image}
                        alt={story.name}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.style.display = "none";
                          e.target.parentElement.innerHTML = `<svg class="w-8 h-8 m-3 text-slate-400" fill="currentColor" viewBox="0 0 24 24"><path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" /></svg>`;
                        }}
                      />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 font-heading text-[17px] mb-0.5">
                        {story.name}
                      </h3>
                      <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                        {story.role}
                      </p>
                    </div>
                  </div>

                  {/* Body Card: Review Text */}
                  <p className="text-slate-600 text-[15px] font-body italic mb-8 leading-relaxed flex-1">
                    "{story.text}"
                  </p>

                  {/* Footer Card: Stars (Aman dari RangeError) */}
                  <div className="flex items-center gap-1 text-[#f59e0b]">
                    {Array.from({ length: validRating }).map((_, index) => (
                      <svg
                        key={index}
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>

                  {/* Ikon Quote */}
                  <div className="absolute -bottom-5 -right-5 w-16 h-16 bg-[#2563eb] rounded-full flex items-center justify-center text-white border-[8px] border-[#f4f7fb] group-hover:scale-110 transition-transform duration-300">
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Tombol Muat Lebih Banyak */}
          <div className="mt-20 text-center">
            <button className="bg-transparent border-2 border-slate-300 text-slate-600 hover:border-eco-cyan hover:text-eco-cyan font-bold font-heading px-8 py-3.5 rounded-full transition-colors text-sm cursor-pointer">
              {t("customerStories.loadMore", "Muat Lebih Banyak")}
            </button>
          </div>
        </div>
      </section>

      {/* Bot Assistant (Komponen dengan huruf kapital 'BotAssistant') */}
      <BotAssistant botFlowData={botFlowData} />
    </main>
  );
}