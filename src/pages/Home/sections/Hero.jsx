import React, { useState } from "react";

export default function Hero() {
  // State untuk mengontrol visibilitas chat window
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-sky-100/70 via-teal-50/50 to-white pt-16 lg:pt-24 pb-48 lg:pb-64">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src={"img/br.jpeg"}
          alt="Ilustrasi Lanskap EcoCash Bandung"
          className="w-full h-full object-cover object-bottom opacity-70"
          onError={(e) => {
            e.target.style.display = "none";
          }}
        />
      </div>

      {/* Konten Teks & Tombol CTA Utama (Desain Tidak Diubah Sama Sekali) */}
      <div className="max-w-7xl mx-auto px-6 pt-4 lg:px-10 relative z-20">
        <div className="max-w-3xl space-y-6 text-left">
          {/* Judul Utama */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-eco-primary to-eco-cyan tracking-tight font-heading leading-[1.15]">
            Ubah Sampah Jadi Uang
          </h1>

          {/* Deskripsi Singkat */}
          <p className="text-base sm:text-lg text-slate-700 font-body max-w-xl leading-relaxed">
            Platform pengelolaan sampah berbasis AI, IoT, dan ekonomi sirkular
            untuk menciptakan lingkungan yang lebih bersih dan bernilai ekonomi.
          </p>

          {/* Tombol Aksi (CTA) - Solid Style */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <a
              href="#location-map"
              className="bg-eco-cyan hover:bg-eco-cyan/70 text-white px-7 py-3.5 rounded-xl font-heading font-bold text-sm shadow-lg shadow-eco-cyan/25 transition-all transform hover:-translate-y-0.5 flex items-center justify-center"
            >
              Mulai Sekarang
            </a>

            {/* Tombol Pelajari Lebih Lanjut */}
            <a
              href="#smart-rvm"
              className="bg-white border border-slate-300 hover:border-2 hover:border-eco-secondary text-slate-700 hover:text-eco-cyan px-7 py-3.5 rounded-xl font-heading font-semibold text-sm shadow-sm transition-all flex items-center justify-center"
            >
              Pelajari lebih lanjut
            </a>
          </div>

          {/* Rating Bintang 5 & Logo Mitra / Trust Badges */}
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

      {/* Floating AI Assisten / Help Desk Widget (Diperbarui) */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
        {/* Chat Window (Tampil jika state isChatOpen === true) */}
        {isChatOpen && (
          <div className="mb-4 w-[320px] sm:w-[350px] bg-white rounded-2xl shadow-2xl border border-slate-100 flex flex-col overflow-hidden animate-fadeIn origin-bottom-right">
            {/* Header Chat */}
            <div className="bg-white border-b border-slate-100 p-4 flex items-center justify-between shadow-sm z-10">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-eco-cyan/10 rounded-full flex items-center justify-center text-eco-cyan">
                  {/* Ikon Bot Sederhana */}
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12c0 1.72.44 3.34 1.2 4.78L2 22l5.36-1.12C8.78 21.6 10.34 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm0 18c-1.46 0-2.86-.34-4.12-.96l-.3-.14-3.08.64.66-2.96-.16-.3C4.34 14.92 4 13.5 4 12c0-4.42 3.58-8 8-8s8 3.58 8 8-3.58 8-8 8z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-800 font-heading">
                    EcoCash Assistant
                  </h4>
                  <p className="text-[10px] text-emerald-500 font-medium">
                    Online
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsChatOpen(false)}
                className="text-slate-400 hover:text-slate-600 transition-colors p-1 cursor-pointer"
              >
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
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Body Chat (Area Pesan) */}
            <div className="p-4 h-72 bg-slate-50 overflow-y-auto flex flex-col gap-4 custom-scrollbar">
              {/* Pesan Sambutan dari Bot */}
              <div className="flex gap-2 max-w-[85%]">
                <div className="w-6 h-6 rounded-full bg-eco-cyan text-white flex shrink-0 items-center justify-center text-[10px] font-bold">
                  AI
                </div>
                <div className="bg-white border border-slate-200 text-slate-700 text-[13px] p-3 rounded-2xl rounded-tl-sm shadow-sm leading-relaxed">
                  Halo! Saya asisten virtual EcoCash. Ada yang bisa saya bantu
                  terkait penukaran sampah, kemitraan, atau solusi ESG hari ini?
                </div>
              </div>
            </div>

            {/* Input Area */}
            <div className="p-3 bg-white border-t border-slate-100">
              <div className="flex items-center gap-2 bg-slate-50 border border-slate-200 rounded-full px-4 py-2.5 focus-within:border-eco-cyan focus-within:ring-1 focus-within:ring-eco-cyan transition-all">
                <input
                  type="text"
                  placeholder="Ketik pesan Anda..."
                  className="w-full bg-transparent text-[13px] outline-none text-slate-700 placeholder-slate-400 font-body"
                />
                <button className="text-slate-400 hover:text-eco-cyan transition-colors shrink-0 cursor-pointer">
                  {/* Ikon Kirim */}
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
                      d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                    />
                  </svg>
                </button>
              </div>
              <div className="text-center mt-2">
                <span className="text-[10px] text-slate-400 font-body">
                  Powered by EcoCash AI
                </span>
              </div>
            </div>
          </div>
        )}

        {/* Tombol Floating Toggle (FAB) */}
        <button
          onClick={() => setIsChatOpen(!isChatOpen)}
          className={`w-14 h-14 rounded-full shadow-2xl flex items-center justify-center cursor-pointer transition-all transform hover:scale-105 ${
            isChatOpen
              ? "bg-eco-cyan text-white"
              : "bg-eco-cyan text-white hover:bg-eco-cyan/90"
          }`}
        >
          {isChatOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <img
              src={"img/cs.png"}
              alt="CS EcoCash"
              className="w-18 h-auto cursor-pointer"
              onError={(e) => {
                e.target.style.display = "none";
                e.target.parentElement.innerHTML =
                  '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"/></svg>';
              }}
            />
          )}
        </button>
      </div>
    </section>
  );
}
