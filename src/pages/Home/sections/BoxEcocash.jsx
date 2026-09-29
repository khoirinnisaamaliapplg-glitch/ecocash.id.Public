import React from "react";

export default function BoxEcocash() {
  return (
    <section id="revolution" className="max-w-7xl mx-auto px-6 lg:px-10 py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        {/* Bagian Kiri: Gambar Mockup Box (Estetik Komposisi Tumpuk) */}
        <div className="w-full relative group order-2 lg:order-1 pt-4 pb-12 pr-8 lg:pr-12">
          {/* Latar Belakang Dekoratif */}
          <div className="absolute inset-0 bg-sky-500/10 rounded-[3rem] transform -rotate-3 transition-transform duration-500 group-hover:rotate-0 -z-10"></div>

          {/* Gambar 1 (Belakang/Utama) */}
          <div className="w-4/5 relative z-10 rounded-[2.5rem] overflow-hidden shadow-xl shadow-slate-200/50 transition-transform duration-700 group-hover:-translate-y-2">
            <img
              src={"img/box.png"}
              alt="EcoCash Drop Box Utama"
              className="w-full h-auto object-cover"
              onError={(e) => {
                e.target.style.display = "none";
              }}
            />
            {/* Overlay gradient tipis agar lebih menyatu */}
            <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/10 to-transparent pointer-events-none"></div>
          </div>

          {/* Gambar 2 (Depan/Overlapping) */}
          <div className="w-3/5 absolute bottom-0 right-0 z-20 rounded-[2rem] overflow-hidden shadow-2xl shadow-slate-900/10 border-[6px] md:border-8 border-white transition-transform duration-700 group-hover:translate-y-2 group-hover:-translate-x-2">
            <img
              src={"img/box-ecocash.png"}
              alt="EcoCash Drop Box Varian"
              className="w-full h-auto object-cover bg-white"
              onError={(e) => {
                e.target.style.display = "none";
              }}
            />
          </div>
        </div>

        {/* Bagian Kanan: Teks & Fitur */}
        <div className="space-y-6 order-1 lg:order-2">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-sky-50 text-eco-cyan px-5 py-2.5 rounded-full font-heading text-sm font-semibold border border-eco-cyan/20">
            <span className="text-eco-cyan/80 text-lg">📦</span> EcoCash Drop
            Box
          </div>

          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight font-heading">
            Solusi Praktis di Ruang Publik
          </h2>

          <p className="text-lg text-slate-600 leading-relaxed font-body text-pretty">
            <strong>EcoCash Box</strong> hadir sebagai solusi inovatif yang
            menggabungkan manajemen keuangan digital dengan sistem pengelolaan
            sampah yang efisien. Melalui aplikasi, Anda dapat mengelola
            transaksi dan reward langsung dari smartphone secara praktis dan
            modern.
          </p>
          <p className="text-lg text-slate-600 leading-relaxed font-body text-pretty">
            Dengan dukungan teknologi AI IoT, <strong>EcoCash Box</strong>{" "}
            memberikan pengalaman pengelolaan yang lebih cepat, transparan, dan
            akurat. Kami berkomitmen mendukung gaya hidup berkelanjutan serta
            memperkuat ekonomi sirkular di Indonesia melalui integrasi teknologi
            pintar.
          </p>
        </div>
      </div>
    </section>
  );
}
