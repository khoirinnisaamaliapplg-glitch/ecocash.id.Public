import React from "react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-sky-100/70 via-teal-50/50 to-white pt-16 lg:pt-24 pb-48 lg:pb-64">
      {/* Ilustrasi Background Utama (REVISI FINAL FULL CONTAINER) 
          - absolute inset-0: Membuat pembungkus memenuhi 100% width & height dari section
          - w-full h-full: Memaksa gambar memenuhi pembungkusnya
          - object-cover: Mencegah gambar menjadi gepeng (menjaga rasio)
          - object-bottom: Memastikan bagian bawah gambar (gedung/tanah) selalu terlihat dan menempel di bawah
      */}
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

      {/* Floating WhatsApp Widget */}
      <div className="fixed bottom-6 right-6 z-50">
        <a
          href="https://wa.me/6281214161614"
          target="_blank"
          rel="noreferrer"
          className=" bg-eco-cyan hover:bg-eco-cyan/80 text-white rounded-full shadow-2xl flex items-center justify-center transition-all transform hover:scale-110"
        >
          <img src={"img/cs.png"} alt="WhatsApp" className="w-18 h-auto " />
        </a>
      </div>
    </section>
  );
}
