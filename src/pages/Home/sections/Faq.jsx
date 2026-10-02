import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { FAQ_DATA } from "../../../constants/dummyData";

export default function Faq() {
  const { t, i18n } = useTranslation();
  const [faqs, setFaqs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeFaq, setActiveFaq] = useState(1);

  // Deteksi bahasa aktif ('id', 'en', atau 'zh')
  const currentLang = (i18n.resolvedLanguage || i18n.language || "id")
    .split("-")[0]
    .toLowerCase();

  const toggleFaq = (id) => {
    setActiveFaq(activeFaq === id ? null : id);
  };

  useEffect(() => {
    let isMounted = true;

    const fetchFaqs = async () => {
      setLoading(true);
      try {
        const apiUrl =
          import.meta.env.VITE_API_BASE_URL ||
          import.meta.env.VITE_API_URL ||
          "http://localhost:3000/api/v1";

        // Query FAQ publik dengan parameter ?lang=
        let response = await fetch(`${apiUrl}/faqs?lang=${currentLang}`);
        if (response.status === 404) {
          response = await fetch(`${apiUrl}/faq?lang=${currentLang}`);
        }

        if (!response.ok) {
          throw new Error(`HTTP Error: ${response.status}`);
        }

        const result = await response.json();

        if (isMounted) {
          // Normalisasi respons backend (array langsung atau bersarang di items/data)
          const rawItems = Array.isArray(result.data)
            ? result.data
            : Array.isArray(result.data?.items)
            ? result.data.items
            : Array.isArray(result.data?.data)
            ? result.data.data
            : [];

          if (rawItems.length > 0) {
            const formatted = rawItems.map((item) => ({
              id: item.id,
              q: item.question || item.q,
              a: item.answer || item.a,
              category: item.category || "Umum",
            }));
            setFaqs(formatted);
            // Buka FAQ pertama sebagai default jika ada data
            setActiveFaq(formatted[0].id);
          } else {
            setFaqs(FAQ_DATA);
            setActiveFaq(1);
          }
        }
      } catch (err) {
        console.warn(
          "[Faq] Gagal menghubungi backend API, beralih ke data fallback lokal:",
          err.message
        );
        if (isMounted) {
          setFaqs(FAQ_DATA);
          setActiveFaq(1);
        }
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    fetchFaqs();

    return () => {
      isMounted = false;
    };
  }, [currentLang]);

  return (
    <section id="faq" className="max-w-7xl mx-auto px-6 lg:px-10 py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* Bagian Teks Kiri (Sticky) */}
        <div className="space-y-6 lg:sticky lg:top-28">
          <span className="inline-block px-5 py-2 bg-eco-cyan/10 text-eco-primary text-sm font-bold rounded-full tracking-wide">
            {t("faq.badge", "Frequently Asked Questions")}
          </span>

          <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight font-heading">
            {t("faq.title", "Apa itu EcoCash.id?")}
          </h2>

          <p className="text-lg text-slate-600 leading-relaxed font-body">
            {t(
              "faq.desc1",
              "EcoCash membantu masyarakat, sekolah, industri, dan pemerintah mengelola sampah secara modern, transparan, dan berkelanjutan."
            )}
          </p>

          <p className="text-lg text-slate-600 leading-relaxed font-body">
            {t(
              "faq.desc2",
              "Dengan sistem digital terintegrasi, EcoCash mengubah sampah menjadi sumber daya yang memiliki nilai ekonomi sekaligus mendukung lingkungan yang lebih baik."
            )}
          </p>
        </div>

        {/* Bagian Accordion Kanan */}
        <div className="space-y-4">
          {loading ? (
            // Skeleton Loader saat data sedang dimuat
            [1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="bg-white rounded-3xl p-6 border border-slate-200 animate-pulse"
              >
                <div className="h-6 bg-slate-200 rounded w-3/4 mb-3"></div>
                <div className="h-4 bg-slate-100 rounded w-full"></div>
              </div>
            ))
          ) : (
            faqs.map((faq) => {
              const isOpen = activeFaq === faq.id;
              return (
                <div
                  key={faq.id}
                  onClick={() => toggleFaq(faq.id)}
                  className={`bg-white rounded-3xl p-6 transition-all duration-300 cursor-pointer group ${
                    isOpen
                      ? "border-2 border-eco-cyan/30 shadow-xl shadow-eco-cyan/5"
                      : "border border-slate-200 hover:border-eco-cyan/50 hover:shadow-lg hover:shadow-eco-cyan/10"
                  }`}
                >
                  <div className="flex justify-between items-center">
                    <h4
                      className={`font-bold text-lg font-heading transition-colors ${
                        isOpen
                          ? "text-eco-cyan"
                          : "text-slate-700 group-hover:text-eco-cyan"
                      }`}
                    >
                      {faq.q}
                    </h4>

                    <div
                      className={`flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full transition-all duration-300 ${
                        isOpen
                          ? "bg-eco-accent/10 text-eco-accent rotate-180"
                          : "bg-slate-50 text-slate-400 group-hover:bg-eco-cyan/10 group-hover:text-eco-primary"
                      }`}
                    >
                      {isOpen ? (
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2.5"
                            d="M20 12H4"
                          />
                        </svg>
                      ) : (
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2.5"
                            d="M12 4v16m8-8H4"
                          />
                        </svg>
                      )}
                    </div>
                  </div>

                  {isOpen && (
                    <div className="mt-4 text-slate-600 leading-relaxed pr-8 font-body animate-fadeIn">
                      <p>{faq.a}</p>
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>
      </div>
    </section>
  );
}