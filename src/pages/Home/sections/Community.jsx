import React from "react";
// import "img/anak.png" from "../../../assets/img/anak.png";
// import "img/wa.png" from "../../../assets/img/wa.png";

export default function Community() {
  return (
    <section id="community" className="max-w-7xl mx-auto px-6 lg:px-10 py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 bg-teal-500/10 text-eco-dark px-5 py-2.5 rounded-full font-heading text-sm font-semibold">
            <span>🌱</span> Gerakan Sosial & Edukasi
          </div>

          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight font-heading">
            Komunitas & <br /> Aksi Peduli Lingkungan
          </h2>

          <p className="text-lg text-slate-600 leading-relaxed font-body">
            Bersama <strong className="text-eco-dark">EcoCash.id</strong>,
            setiap botol yang didaur ulang menjadi langkah nyata untuk mendukung
            komunitas dan menciptakan lingkungan yang lebih bersih. Program ini
            membantu organisasi mendapatkan manfaat dari aktivitas daur ulang.
          </p>

          <p className="text-lg text-slate-600 leading-relaxed font-body">
            Ingin komunitas atau organisasi Anda ikut berkontribusi sekaligus
            mendapatkan manfaat ekonomi dari program daur ulang?
          </p>

          <p className="text-lg font-semibold text-slate-800 font-heading pb-2">
            Hubungi kami dan mulai gerakan peduli lingkungan dari sekarang.
          </p>

          <a
            href="https://wa.me/6281214161614"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center bg-eco-dark hover:bg-eco-light text-white px-9 py-4 rounded-full font-heading font-bold transition-all shadow-led-glow hover:-translate-y-1"
          >
            <img src={"img/WhatsApp.png"} className="w-8 h-8 mr-3 " alt="WA" />
            Mari Berkolaborasi
          </a>
        </div>

        <div className="w-full relative group">
          <div className="absolute -inset-4 bg-orange-500/10 rounded-[2.5rem] transform rotate-3 -z-10 group-hover:rotate-1 transition-transform duration-500"></div>
          <img
            src={"img/anak.png"}
            alt="Komunitas Peduli Lingkungan"
            className="w-full h-auto rounded-3xl shadow-lg relative z-10"
          />
        </div>
      </div>
    </section>
  );
}
