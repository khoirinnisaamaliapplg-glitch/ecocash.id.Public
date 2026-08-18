import React from "react";
// Pastikan file gambar ilustrasi latar belakang hero Anda tersedia di folder assets/img/ dengan nama yang sesuai
// import heroBg from '../../../assets/img/hero-bg.png';
// import waIcon from '../../../assets/img/wa.png';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-sky-100/70 via-teal-50/50 to-white pt-16 lg:pt-24 pb-48 lg:pb-64">
      {/* Konten Teks & Tombol CTA Utama (Clean & Solid, tanpa glassmorphism) */}
      <div className="max-w-7xl mx-auto px-6 pt-4 lg:px-10 relative z-20">
        <div className="max-w-3xl space-y-6  text-left">
          {/* Judul Utama */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-eco-primary to-eco-cyan tracking-tight font-heading leading-[1.15]">
            Ubah Sampah Jadi Uang
          </h1>

          {/* Deskripsi Singkat */}
          <p className="text-base sm:text-lg text-slate-500 font-body max-w-xl leading-relaxed">
            Platform pengelolaan sampah berbasis AI, IoT, dan ekonomi sirkular
            untuk menciptakan lingkungan yang lebih bersih dan bernilai ekonomi.
          </p>

          {/* Tombol Aksi (CTA) - Solid Style */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <a
              href="#location-map"
              className="bg-eco-cyan hover:bg-eco-secondary text-white px-7 py-3.5 rounded-xl font-heading font-bold text-sm shadow-lg shadow-eco-cyan/25 transition-all transform hover:-translate-y-0.5 flex items-center justify-center"
            >
              Mulai Sekarang
            </a>

            {/* Tombol Pelajari Lebih Lanjut (Solid White tanpa blur/glassmorphism) */}
            <a
              href="#smart-rvm"
              className="bg-white border border-slate-300 hover:border-2 hover:border-eco-secondary text-slate-700 hover:text-eco-cyan px-7 py-3.5 rounded-xl font-heading font-semibold text-sm shadow-sm transition-all flex items-center justify-center"
            >
              Pelajari lebih lanjut
            </a>
          </div>

          {/* Rating Bintang 5 & Logo Mitra / Trust Badges */}
          <div className="pt-6 space-y-3">
            {/* Bintang 5 */}
            <div className="flex items-center gap-1 text-amber-400 text-lg">
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span>★</span>
            </div>

            {/* Logo Mitra */}
            <div className="flex flex-wrap items-center gap-6 pt-2 opacity-90">
              {/* Logo 1 */}
              <img src={"img/logo.png"} className="h-8" />
            </div>
          </div>
        </div>
      </div>

      {/* Ilustrasi Background Utama (Gedung Sate, Jembatan Pasupati, Masjid Al-Jabbar) 
          dengan efek fade/blur estetik di bagian sisi kiri dan kanan */}
      <div className="absolute bottom-0 left-0 right-0 z-10 pointer-events-none overflow-hidden">
        <div className="max-w-[1440px] mx-auto relative">
          <div className="relative w-full [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
            <img
              src={"img/br.jpeg"}
              alt="Ilustrasi Lanskap EcoCash Bandung (Gedung Sate, Pasupati, Al-Jabbar)"
              className="w-full h-auto object-cover object-bottom opacity-95 transition-transform duration-700"
              onError={(e) => {
                e.target.style.display = "none";
              }}
            />
          </div>
        </div>
      </div>

      {/* Floating WhatsApp Widget */}
      <div className="fixed bottom-6 right-6 z-50">
        <a
          href="https://wa.me/6281214161614"
          target="_blank"
          rel="noreferrer"
          className="w-14 h-14 bg-eco-primary hover:bg-eco-secondary text-white rounded-full shadow-2xl flex items-center justify-center transition-all transform hover:scale-110"
        >
          <img src={"img/WhatsApp.png"} alt="WhatsApp" className="w-8 h-8 " />
        </a>
      </div>
    </section>
  );
}
