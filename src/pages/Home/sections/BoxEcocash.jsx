import React from "react";

export default function BoxEcocash() {
  return (
    <section id="revolution" className="max-w-7xl mx-auto px-6 lg:px-10 py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Bagian Kiri: Gambar Mockup Box */}
        <div className="w-full relative group order-2 lg:order-1">
          <div className="absolute inset-0 bg-sky-500/10 rounded-[2.5rem] transform -rotate-3 transition-transform duration-500 group-hover:rotate-0 -z-10"></div>
          <img
            src={"img/box.png"}
            alt="EcoCash Drop Box"
            className="w-full h-auto rounded-[2.5rem] shadow-xl shadow-slate-200/50 object-cover relative z-10 transition-transform duration-700 hover:scale-[1.02]"
            onError={(e) => {
              e.target.style.display = "none";
            }}
          />
        </div>

        {/* Bagian Kanan: Teks & Fitur */}
        <div className="space-y-6 order-1 lg:order-2">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-sky-50 text-sky-700 px-5 py-2.5 rounded-full font-heading text-sm font-semibold border border-sky-100">
            <span className="text-[#0ea5e9] text-lg">📦</span> EcoCash Drop Box
          </div>

          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight font-heading">
            Solusi Praktis di <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#064e3b] to-[#0ea5e9]">
              Ruang Publik
            </span>
          </h2>

          <p className="text-lg text-slate-600 leading-relaxed font-body text-pretty">
            <strong>EcoCash Box</strong> hadir sebagai solusi inovatif yang
            menggabungkan manajemen keuangan digital dengan sistem pengelolaan
            sampah yang efisien. Melalui aplikasi, Anda dapat mengelola
            transaksi dan reward langsung dari smartphone secara praktis dan
            modern.
          </p>
          <p className="text-lg text-slate-600 leading-relaxed font-body text-pretty">
            Dengan dukungan teknologi AIoT, <strong>EcoCash Box</strong>{" "}
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
