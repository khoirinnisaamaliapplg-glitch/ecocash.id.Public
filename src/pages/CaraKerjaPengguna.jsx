import React, { useEffect } from "react";

export default function CaraKerjaPengguna() {
  // Scroll otomatis ke atas saat halaman dimuat
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="w-full min-h-screen bg-[#fafafc] font-body text-slate-700 pb-20">
      {/* 1. SECTION: HERO & 4 LANGKAH MUDAH */}
      <section className="pt-32 lg:pt-40 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl lg:text-[42px] font-extrabold text-slate-900 font-heading leading-tight mb-6">
            Setor Botol, Kumpulkan Saldo <br className="hidden md:block" />
            dalam 4 Langkah Mudah
          </h1>
          <p className="text-slate-500 font-body text-base md:text-lg max-w-2xl mx-auto mb-8">
            Ikuti panduan praktis untuk mulai berkontribusi pada lingkungan
            sambil mendapatkan reward digital.
          </p>

          {/* Badge Poin */}
          <div className="inline-flex items-center gap-2 bg-[#e0f8f7] text-eco-cyan px-5 py-2 rounded-full font-bold text-sm shadow-sm border border-eco-cyan/20">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.5 2.5c-4.5 0-8.5 2.5-10.5 6.5-1.5 3-2 6.5-1.5 9.5l-3.5 3.5 1.5 1.5 3.5-3.5c3 .5 6.5 0 9.5-1.5 4-2 6.5-6 6.5-10.5v-5.5h-5.5zm-2.5 9.5c-1.5 1.5-3.5 2.5-6 2.5-.5-2.5.5-4.5 2-6 1.5-1.5 3.5-2.5 6-2.5.5 2.5-.5 4.5-2 6z" />
            </svg>
            1 Botol = 10 Poin
          </div>
        </div>

        {/* Grid 4 Langkah */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Langkah 1 */}
          <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-full bg-[#e0f8f7] text-eco-cyan flex items-center justify-center font-bold font-heading mb-6">
              1
            </div>
            <div className="text-eco-cyan mb-4">
              {/* Ikon HP */}
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
                />
              </svg>
            </div>
            <h3 className="text-lg font-bold font-heading text-slate-900 mb-2">
              Unduh & Daftar
            </h3>
            <p className="text-slate-500 font-body text-sm leading-relaxed">
              Download aplikasi EcoCash di Play Store atau App Store dan buat
              akun Anda.
            </p>
          </div>

          {/* Langkah 2 */}
          <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-full bg-[#e0f8f7] text-eco-cyan flex items-center justify-center font-bold font-heading mb-6">
              2
            </div>
            <div className="text-eco-cyan mb-4">
              {/* Ikon Peta Lipat */}
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-bold font-heading text-slate-900 mb-2">
              Cari RVM Terdekat
            </h3>
            <p className="text-slate-500 font-body text-sm leading-relaxed">
              Gunakan fitur peta di aplikasi untuk menemukan lokasi mesin RVM
              EcoCash di sekitar Anda.
            </p>
          </div>

          {/* Langkah 3 */}
          <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-full bg-[#e0f8f7] text-eco-cyan flex items-center justify-center font-bold font-heading mb-6">
              3
            </div>
            <div className="text-eco-cyan mb-4">
              {/* Ikon QR Code */}
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M3.75 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 013.75 9.375v-4.5zM3.75 14.625c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 01-1.125-1.125v-4.5zM13.5 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0113.5 9.375v-4.5z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M16.5 16.5h.008v.008h-.008v-.008zM13.5 16.5h.008v.008h-.008v-.008zM19.5 16.5h.008v.008h-.008v-.008zM13.5 13.5h.008v.008h-.008v-.008zM19.5 13.5h.008v.008h-.008v-.008zM16.5 19.5h.008v.008h-.008v-.008z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-bold font-heading text-slate-900 mb-2">
              Scan & Setor
            </h3>
            <p className="text-slate-500 font-body text-sm leading-relaxed">
              Scan QR code di layar mesin RVM, masukkan botol satu per satu, dan
              biarkan AI memvalidasi.
            </p>
          </div>

          {/* Langkah 4 */}
          <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-full bg-[#e0f8f7] text-eco-cyan flex items-center justify-center font-bold font-heading mb-6">
              4
            </div>
            <div className="text-eco-cyan mb-4">
              {/* Ikon Dompet */}
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M21 12a2.25 2.25 0 00-2.25-2.25H15a3 3 0 11-6 0H4.5A2.25 2.25 0 002.25 12v6.75A2.25 2.25 0 004.5 21h15a2.25 2.25 0 002.25-2.25V12zm-9-2.25h.008v.008H12V9.75z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M2.25 9.75v-.375c0-.621.504-1.125 1.125-1.125h15.75c.621 0 1.125.504 1.125 1.125v.375"
                />
              </svg>
            </div>
            <h3 className="text-lg font-bold font-heading text-slate-900 mb-2">
              Terima Saldo
            </h3>
            <p className="text-slate-500 font-body text-sm leading-relaxed">
              Reward akan langsung masuk ke saldo digital Anda setelah sesi
              setor selesai.
            </p>
          </div>
        </div>
      </section>

      {/* 2. SECTION: PANDUAN MATERIAL */}
      <section className="py-24 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-extrabold text-center text-slate-900 font-heading mb-12">
          Panduan Material
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card Wadah Diterima */}
          <div className="bg-white p-8 md:p-10 rounded-2xl border border-slate-100 shadow-sm border-l-4 border-l-[#16a34a]">
            <div className="flex items-center gap-3 mb-8">
              <svg
                className="w-7 h-7 text-[#16a34a]"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                  clipRule="evenodd"
                />
              </svg>
              <h3 className="text-xl font-bold font-heading text-slate-900">
                Wadah Diterima
              </h3>
            </div>

            <ul className="space-y-5">
              <li className="flex items-center gap-4">
                <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center text-[#16a34a] shrink-0">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M7.5 4.5V3h9v1.5L18 8v11.25c0 .828-.672 1.5-1.5 1.5h-9A1.5 1.5 0 016 19.25V8l1.5-3.5zM10.5 3v1.5m3-1.5v1.5"
                    />
                  </svg>
                </div>
                <span className="text-slate-600 font-body text-sm">
                  Botol Plastik PET (Bening/Warna)
                </span>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center text-[#16a34a] shrink-0">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M6 7.5v9A2.25 2.25 0 008.25 18.75h7.5A2.25 2.25 0 0018 16.5v-9M6 7.5a2.25 2.25 0 012.25-2.25h7.5A2.25 2.25 0 0118 7.5m-12 0C6 8.743 8.686 9.75 12 9.75s6-1.007 6-2.25"
                    />
                  </svg>
                </div>
                <span className="text-slate-600 font-body text-sm">
                  Kaleng Aluminium
                </span>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center text-[#16a34a] shrink-0">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
                    />
                  </svg>
                </div>
                <span className="text-slate-600 font-body text-sm">
                  Karton Minuman
                </span>
              </li>
            </ul>
          </div>

          {/* Card Wadah Ditolak */}
          <div className="bg-white p-8 md:p-10 rounded-2xl border border-slate-100 shadow-sm border-l-4 border-l-[#dc2626]">
            <div className="flex items-center gap-3 mb-8">
              <svg
                className="w-7 h-7 text-[#dc2626]"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z"
                  clipRule="evenodd"
                />
              </svg>
              <h3 className="text-xl font-bold font-heading text-slate-900">
                Wadah Ditolak
              </h3>
            </div>

            <ul className="space-y-5">
              <li className="flex items-center gap-4">
                <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center text-[#dc2626] shrink-0">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5"
                    />
                  </svg>
                </div>
                <span className="text-slate-600 font-body text-sm">
                  Botol Kaca
                </span>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center text-[#dc2626] shrink-0">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                    />
                  </svg>
                </div>
                <span className="text-slate-600 font-body text-sm">
                  Plastik Kotor/Berminyak
                </span>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center text-[#dc2626] shrink-0">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m3.75 9v6m3-3H9m1.5-12H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                    />
                  </svg>
                </div>
                <span className="text-slate-600 font-body text-sm">Saset</span>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center text-[#dc2626] shrink-0">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z"
                    />
                  </svg>
                </div>
                <span className="text-slate-600 font-body text-sm">
                  Gelas Sekali Pakai
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 3. SECTION: CALL TO ACTION (CTA) */}
      <section className="px-6 max-w-5xl mx-auto mb-10">
        <div className="bg-[#eaf1fb] p-12 md:p-16 rounded-[2rem] text-center shadow-sm">
          <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 font-heading mb-4">
            Mulai Daur Ulang Sekarang
          </h2>
          <p className="text-slate-500 font-body text-sm md:text-base max-w-lg mx-auto mb-8 leading-relaxed">
            Unduh aplikasi EcoCash untuk mulai mencari RVM terdekat dan
            kumpulkan poin pertamamu hari ini.
          </p>

          <button className="inline-flex items-center justify-center gap-2 bg-eco-cyan hover:bg-[#1eb5b1] text-white px-8 py-3.5 rounded-lg font-heading font-bold text-sm transition-all transform hover:-translate-y-0.5 shadow-lg shadow-eco-cyan/30">
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
                d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
              />
            </svg>
            Lihat Peta RVM
          </button>
        </div>
      </section>
    </main>
  );
}
