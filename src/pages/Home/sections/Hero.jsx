import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import BotAssistant from "../../../components/bot/BotAssistant";

export default function Hero() {
  const { t } = useTranslation();
  const [botFlowData, setBotFlowData] = useState(null);

  useEffect(() => {
    const fetchBotTree = async () => {
      try {
        const apiUrl =
          import.meta.env.VITE_API_URL_LOCAL ||
          import.meta.env.VITE_API_BASE_URL ||
          import.meta.env.VITE_API_URL ||
          "https://api.ecocash.id/api/v1";
        const response = await fetch(`${apiUrl}/bot/tree`);

        if (!response.ok) throw new Error("Gagal mengambil data");

        const result = await response.json();

        if (result.success && result.data) {
          setBotFlowData(result.data);
        }
      } catch (err) {
        console.error("Kesalahan API Bot:", err);
      }
    };

    fetchBotTree();
  }, []);

  return (
    <section className="relative w-full overflow-hidden bg-white min-h-[85vh] lg:min-h-[90vh] flex items-center pt-24 pb-12 lg:pt-0 lg:pb-0">
      {/* Background Ilustrasi: Di-scale & Digeser ke Bawah untuk Memotong Margin Putih Bawaan Gambar */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none overflow-hidden">
        <img
          src={"img/br2.jpeg"}
          alt="Ilustrasi Lanskap EcoCash Bandung"
          className="w-full h-[125%] lg:h-[132%] -bottom-[10%] lg:-bottom-[12%] absolute left-0 object-cover object-bottom opacity-100 lg:opacity-95"
          onError={(e) => {
            if (!e.target.dataset.tried) {
              e.target.dataset.tried = "true";
              e.target.src = "img/br2.jpeg";
            } else {
              e.target.style.display = "none";
            }
          }}
        />

        {/* Gradient Overlay untuk Menjaga Keterbacaan Teks */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/30 to-transparent lg:hidden"></div>
        <div className="hidden lg:block absolute inset-0 bg-gradient-to-r from-white/95 via-white/50 to-transparent"></div>
      </div>

      {/* Konten Teks, CTA, Rating & Logo (Terkunci Rapi di Sisi Kiri) */}
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-10 relative z-20">
        <div className="max-w-xl space-y-4 sm:space-y-5 text-left mr-auto">
          {/* Judul Utama */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-eco-primary to-eco-cyan tracking-tight font-heading leading-[1.15]">
            {t("hero.title", "Ubah Sampah Jadi Uang")}
          </h1>

          {/* Deskripsi Singkat */}
          <p className="text-base sm:text-lg text-slate-700 font-body leading-relaxed max-w-lg">
            {t(
              "hero.description",
              "Platform pengelolaan sampah berbasis AI, IoT, dan ekonomi sirkular untuk menciptakan lingkungan yang lebih bersih dan bernilai ekonomi."
            )}
          </p>

          {/* Tombol CTA */}
          <div className="flex flex-wrap items-center justify-start gap-4 pt-2">
            <a
              href="#location-map"
              className="bg-eco-cyan hover:bg-eco-cyan/70 text-white px-7 py-3.5 rounded-xl font-heading font-bold text-sm shadow-lg shadow-eco-cyan/25 transition-all transform hover:-translate-y-0.5 flex items-center justify-center"
            >
              {t("hero.startNow", "Mulai Sekarang")}
            </a>

            <a
              href="#smart-rvm"
              className="bg-white/80 backdrop-blur-sm border border-slate-300 hover:border-2 hover:border-eco-secondary text-slate-700 hover:text-eco-cyan px-7 py-3.5 rounded-xl font-heading font-semibold text-sm shadow-sm transition-all flex items-center justify-center lg:bg-transparent"
            >
              {t("hero.learnMore", "Pelajari lebih lanjut")}
            </a>
          </div>

          {/* Rating Bintang & Logo Mitra (Pas Bersandar di Atas Bukit Hijau) */}
          <div className="pt-3 sm:pt-4 space-y-2 flex flex-col items-start">
            <div className="flex items-center justify-start gap-1 text-amber-400 text-base">
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span>★</span>
            </div>

            <div className="flex items-center justify-start pt-1 opacity-90">
              <img
                src={"img/logo-ecocash-2.png"}
                alt="Logo Mitra"
                className="h-7 sm:h-8 object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      <BotAssistant botFlowData={botFlowData} />
    </section>
  );
}