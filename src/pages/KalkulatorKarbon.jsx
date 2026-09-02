import React, { useState, useEffect } from "react";

export default function KalkulatorKarbon() {
  // 1. State untuk menyimpan jumlah inputan user
  const [pet, setPet] = useState(0);
  const [can, setCan] = useState(0);
  const [glass, setGlass] = useState(0);

  // Scroll ke atas saat halaman dimuat
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // 2. Logika Perhitungan (Estimasi berbasis sains daur ulang)
  // Berat: PET (~20g), Kaleng (~15g), Kaca (~200g)
  const weight = pet * 0.02 + can * 0.015 + glass * 0.2;

  // Reduksi CO2e (kg): PET (~0.03), Kaleng (~0.15), Kaca (~0.05)
  const co2 = pet * 0.03 + can * 0.15 + glass * 0.05;

  // Energi Dihemat (kWh): PET (~0.1), Kaleng (~0.2), Kaca (~0.05)
  const energy = pet * 0.1 + can * 0.2 + glass * 0.05;

  // Ekuivalensi Visual (Contoh: 1 kWh = ~10 jam lampu led, 10kg CO2 = ~1 bibit pohon)
  const lightHours = Math.floor(energy * 10);
  // Agar lebih memotivasi, kita set 1 pohon per 5 kg CO2
  const trees = Math.floor(co2 / 5);

  return (
    <main className="w-full min-h-screen bg-white font-body text-slate-700">
      {/* HEADER & BACKGROUND SECTION */}
      <section className="relative pt-32 pb-48 lg:pt-40 lg:pb-56 overflow-hidden">
        {/* Background Layer (Warna pastel / ombak sesuai desain) */}
        <div className="absolute inset-0 z-0">
          <img
            src="img/hero-karbon.jpg"
            alt="Background Pattern"
            className="w-full h-full object-cover object-top opacity-50"
            onError={(e) => {
              e.target.style.display = "none";
              e.target.parentElement.classList.add(
                "bg-gradient-to-b",
                "from-sky-50",
                "via-teal-50/30",
                "to-white",
              );
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
          <div className="max-w-2xl mb-8">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 font-heading leading-tight mb-4">
              Hitung Seberapa Besar <br />
              <span className="text-eco-primary">Kontribusimu</span> untuk Bumi
            </h1>
            <p className="text-base text-slate-500 leading-relaxed max-w-xl">
              Ketahui dampak nyata dari setiap langkah kecilmu. Kalkulator kami
              menggunakan faktor penghindaran karbon berbasis sains untuk
              mengukur emisi yang berhasil kamu cegah melalui daur ulang.
            </p>
          </div>
        </div>
      </section>

      {/* KALKULATOR CARD SECTION (Overlapping Header) */}
      <section className="relative z-20 max-w-5xl mx-auto px-6 -mt-32 lg:-mt-40 pb-24">
        <div className="bg-white rounded-[2rem] p-6 lg:p-10 shadow-[0_10px_40px_rgb(0,0,0,0.08)] border border-slate-100 flex flex-col gap-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Kiri: Area Slider Input */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <h3 className="text-xl font-bold text-slate-900 font-heading mb-8">
                Estimasi Daur Ulang Bulanan
              </h3>

              <div className="space-y-8">
                {/* Slider Botol Plastik PET */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="flex items-center gap-2 text-sm font-bold text-slate-600 font-heading">
                      <svg
                        className="w-4 h-4 text-eco-cyan"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                        />
                      </svg>
                      Botol Plastik PET (pcs)
                    </label>
                    <span className="text-xl font-bold text-eco-cyan font-heading">
                      {pet}
                    </span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="200"
                    value={pet}
                    onChange={(e) => setPet(Number(e.target.value))}
                    className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-eco-cyan outline-none"
                  />
                </div>

                {/* Slider Kaleng Aluminium */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="flex items-center gap-2 text-sm font-bold text-slate-600 font-heading">
                      <svg
                        className="w-4 h-4 text-eco-cyan"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4"
                        />
                      </svg>
                      Kaleng Aluminium (pcs)
                    </label>
                    <span className="text-xl font-bold text-eco-cyan font-heading">
                      {can}
                    </span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="200"
                    value={can}
                    onChange={(e) => setCan(Number(e.target.value))}
                    className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-eco-cyan outline-none"
                  />
                </div>

                {/* Slider Botol Kaca */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="flex items-center gap-2 text-sm font-bold text-slate-600 font-heading">
                      <svg
                        className="w-4 h-4 text-eco-cyan"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                        />
                      </svg>
                      Botol Kaca (pcs)
                    </label>
                    <span className="text-xl font-bold text-eco-cyan font-heading">
                      {glass}
                    </span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="200"
                    value={glass}
                    onChange={(e) => setGlass(Number(e.target.value))}
                    className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-eco-cyan outline-none"
                  />
                </div>
              </div>
            </div>

            {/* Kanan: Area Hasil / Output */}
            <div className="lg:col-span-5 bg-[#f8fbff] rounded-2xl p-6 lg:p-8 border border-slate-100 flex flex-col justify-center text-center">
              <p className="text-[10px] md:text-xs font-bold text-slate-400 uppercase tracking-widest font-heading mb-4">
                Total Dampak Positif Anda
              </p>

              <div className="mb-6">
                <p className="text-sm text-slate-500 font-body mb-1">
                  Reduksi Emisi CO2e
                </p>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-5xl md:text-6xl font-extrabold text-eco-cyan font-heading transition-all duration-300">
                    {co2.toFixed(1)}
                  </span>
                  <span className="text-xl font-bold text-eco-cyan font-heading">
                    kg
                  </span>
                </div>
              </div>

              <div className="w-full h-px bg-slate-200 mb-6"></div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-xs text-slate-500 font-body mb-1">
                    Energi Dihemat
                  </p>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-2xl font-extrabold text-slate-800 font-heading transition-all duration-300">
                      {energy.toFixed(1)}
                    </span>
                    <span className="text-xs font-bold text-slate-800 font-heading">
                      kWh
                    </span>
                  </div>
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-body mb-1">
                    Berat Dialihkan
                  </p>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-2xl font-extrabold text-slate-800 font-heading transition-all duration-300">
                      {weight.toFixed(1)}
                    </span>
                    <span className="text-xs font-bold text-slate-800 font-heading">
                      kg
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Banner: Kalimat Ekuivalensi */}
          <div className="w-full bg-eco-cyan/10 rounded-xl p-4 md:p-5 flex items-start md:items-center gap-4 border border-eco-cyan/20">
            <div className="w-10 h-10 rounded-full bg-eco-cyan text-white flex items-center justify-center shrink-0">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
            </div>
            <p className="text-sm font-body text-slate-700 leading-relaxed">
              Dampak ini setara dengan menghemat daya listrik selama{" "}
              <strong className="text-eco-cyan">{lightHours} jam</strong> dan
              menanam{" "}
              <strong className="text-eco-cyan">{trees} bibit pohon</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* SHARE SECTION */}
      <section className="pb-24 pt-10 border-t border-slate-100 bg-white text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-2xl font-extrabold text-slate-900 font-heading mb-3">
            Bagikan Dampak Positifmu!
          </h2>
          <p className="text-slate-500 font-body mb-8 text-sm md:text-base">
            Ajak teman dan keluarga untuk ikut berkontribusi menyelamatkan
            lingkungan bersama EcoCash.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            {/* WA Button */}
            <button className="flex items-center gap-2 px-6 py-2.5 rounded-full border border-slate-200 hover:bg-green-50 transition-colors cursor-pointer">
              <svg
                className="w-5 h-5 text-[#25D366]"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              <span className="text-sm font-bold text-slate-600 font-heading">
                WhatsApp
              </span>
            </button>

            {/* LinkedIn Button */}
            <button className="flex items-center gap-2 px-6 py-2.5 rounded-full border border-slate-200 hover:bg-blue-50 transition-colors cursor-pointer">
              <svg
                className="w-5 h-5 text-[#0A66C2]"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              <span className="text-sm font-bold text-slate-600 font-heading">
                LinkedIn
              </span>
            </button>

            {/* Instagram Button */}
            <button className="flex items-center gap-2 px-6 py-2.5 rounded-full border border-slate-200 hover:bg-pink-50 transition-colors cursor-pointer">
              <svg
                className="w-5 h-5 text-[#E1306C]"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
              <span className="text-sm font-bold text-slate-600 font-heading">
                Instagram
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* CALL TO ACTION APP DOWNLOAD SECTION */}
      <section className="pb-24 px-6 max-w-6xl mx-auto">
        {/* Menggunakan bg-[#064e3b] (Emerald 900) agar sesuai dengan warna hijau tua pada desain CTA */}
        <div className="bg-[#064e3b] rounded-[2rem] p-10 md:p-14 lg:p-16 flex flex-col items-start relative overflow-hidden">
          {/* Ornamen Latar (Simulasi elips samar) */}
          <div className="absolute right-10 top-1/2 -translate-y-1/2 w-48 h-16 bg-white/5 rounded-[100%] rotate-12 blur-sm"></div>

          <div className="relative z-10 max-w-xl">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white font-heading mb-4 leading-tight">
              Mulai Perjalanan Hijaumu Sekarang
            </h2>
            <p className="text-emerald-100 font-body mb-10 leading-relaxed text-sm md:text-base">
              Unduh aplikasi EcoCash, temukan RVM terdekat, dan ubah sampahmu
              menjadi saldo digital hari ini.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              {/* Play Store Button */}
              <a
                href="#"
                className="bg-white text-[#064e3b] px-6 py-3 rounded-lg font-heading font-bold text-sm flex items-center gap-2 hover:bg-slate-50 transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M3.609 1.814L13.792 12 3.61 22.186c-.165-.138-.282-.32-.34-.523a1.94 1.94 0 01-.061-.486V2.823c0-.17.021-.336.06-.487.058-.202.176-.384.34-.522zm1.221.782l8.847 8.846 3.731-2.155-11.75-6.793a1.948 1.948 0 00-.828-.1 1.948 1.948 0 00.103.202zm12.578 6.692l2.368 1.368a1.95 1.95 0 01.953 1.344c.036.216.036.438 0 .654a1.954 1.954 0 01-.953 1.344l-2.368 1.367-4.103-4.104 4.103-4.104zM4.83 21.404c.264.123.542.2.828.102L17.408 14.71l-8.847-8.846-3.73 2.155v13.385c0 .245.034.485.103.714z" />
                </svg>
                Play Store
              </a>

              {/* App Store Button */}
              <a
                href="#"
                className="bg-transparent border border-emerald-400/50 text-white px-6 py-3 rounded-lg font-heading font-bold text-sm flex items-center gap-2 hover:bg-emerald-800/30 transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.04 2.26-.79 3.59-.76 1.45.06 2.51.65 3.19 1.63-2.73 1.6-2.22 5.09.43 6.13-.67 1.81-1.74 3.5-3.29 5.17zm-4.71-13.62c-.11-2.2 1.72-4.08 3.82-4.22.25 2.37-2.05 4.31-3.82 4.22z" />
                </svg>
                App Store
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
