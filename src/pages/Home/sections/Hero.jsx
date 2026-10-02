import React, { useEffect, useState } from "react";
import BotAssistant from "../../../components/bot/BotAssistant";

export default function Hero() {
  const [botFlowData, setBotFlowData] = useState(null);

  useEffect(() => {
    const fetchBotTree = async () => {
      try {
        const apiUrl =
          import.meta.env.VITE_API_URL_LOCAL || "http://localhost:3000/api/v1";
        const response = await fetch(`${apiUrl}/bot/tree`);
        console.log("API Response:", response); // Debugging: Periksa respons API

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
    <section className="relative w-full overflow-hidden bg-white lg:bg-sky-50/20 pt-28 pb-[45vh] lg:pt-0 lg:pb-0 lg:min-h-[90vh] lg:flex lg:items-center">
      <div className="absolute bottom-0 left-0 w-full h-[45vh] lg:h-full lg:inset-0 z-0 pointer-events-none">
        <img
          src={"img/br.jpeg"}
          alt="Ilustrasi Lanskap EcoCash Bandung"
          className="w-full h-full object-cover object-bottom opacity-100 lg:opacity-95"
          onError={(e) => {
            e.target.style.display = "none";
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-transparent lg:hidden"></div>
        <div className="hidden lg:block absolute inset-0 bg-gradient-to-r from-white/90 via-white/40 to-transparent"></div>
      </div>

      {/* Konten Teks & Tombol CTA Utama (Desain Asli Dipertahankan Sepenuhnya) */}
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-10 relative z-20">
        <div className="max-w-2xl space-y-6 text-left">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-eco-primary to-eco-cyan tracking-tight font-heading leading-[1.15]">
            Ubah Sampah Jadi Uang
          </h1>

          <p className="text-base sm:text-lg text-slate-700 font-body max-w-xl leading-relaxed font-medium">
            Platform pengelolaan sampah berbasis AI, IoT, dan ekonomi sirkular
            untuk menciptakan lingkungan yang lebih bersih dan bernilai ekonomi.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-4">
            <a
              href="#location-map"
              className="bg-eco-cyan hover:bg-eco-cyan/70 text-white px-7 py-3.5 rounded-xl font-heading font-bold text-sm shadow-lg shadow-eco-cyan/25 transition-all transform hover:-translate-y-0.5 flex items-center justify-center"
            >
              Mulai Sekarang
            </a>

            <a
              href="#smart-rvm"
              className="bg-white border border-slate-300 hover:border-2 hover:border-eco-secondary text-slate-700 hover:text-eco-cyan px-7 py-3.5 rounded-xl font-heading font-semibold text-sm shadow-sm transition-all flex items-center justify-center bg-white/50 backdrop-blur-sm lg:bg-transparent"
            >
              Pelajari lebih lanjut
            </a>
          </div>

          <div className="pt-6 space-y-3">
            <div className="flex items-center gap-1 text-amber-400 text-lg">
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span>★</span>
            </div>

            <div className="flex flex-wrap items-center gap-6 pt-2 opacity-90">
              <img
                src={"img/logo-ecocash-2.png"}
                alt="Logo Mitra"
                className="h-8"
              />
            </div>
          </div>
        </div>
      </div>

      <BotAssistant botFlowData={botFlowData} />
    </section>
  );
}
