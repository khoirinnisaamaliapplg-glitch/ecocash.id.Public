import React from "react";

export default function AppPreview() {
  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-10 py-16 lg:py-24 relative overflow-hidden">
      <div className="container gap-2">
        <span className="text-eco-cyan font-bold text-sm flex items-center gap-2 justify-self-end cursor-pointer hover:text-eco-cyan/70 transition-colors">
          <p className="text-eco-cyan font-bold text-sm">Custumer story</p>
          <i className="fa-solid fa-arrow-right-long"></i>
        </span>
        <div className="row">
          {/* Ambient Glow Background */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-teal-500/5 rounded-full blur-[100px] -z-10 pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Teks & Penjelasan */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-white border border-slate-100 shadow-sm text-slate-600 px-5 py-2.5 rounded-full font-heading text-sm font-semibold">
                <span className="text-eco-accent">✦</span> Solusi Cerdas untuk
                Indonesia
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-[1.2] font-heading">
                Kelola Sampah Lebih Mudah <br /> dengan EcoCash App
              </h2>

              <p className="text-lg text-slate-600 leading-relaxed font-body">
                Aplikasi EcoCash membantu pengguna mengelola sampah secara lebih
                praktis, modern, dan terintegrasi langsung dari smartphone.
                Mulai dari verifikasi penjemputan, hingga pengumpulan reward
                digital.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed font-body">
                Dengan teknologi AI dan IoT , EcoCash memberikan pengalaman
                pengelolaan sampah yang lebih cepat, transparan, dan efisien
                untuk mendukung ekonomi sirkular di Indonesia.
              </p>

              <div className="pt-6">
                <p className="text-eco-primary font-heading font-semibold mb-3">
                  Dapatkan sekarang di
                </p>
                <div className="flex space-x-4">
                  <a
                    href="#download"
                    className="transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:shadow-teal-500/20 rounded-2xl inline-block"
                  >
                    <img
                      src={"img/apk.png"}
                      className="h-12"
                      alt="Google Play"
                    />
                  </a>
                </div>
              </div>
            </div>

            {/* Mockup Gambar Aplikasi */}
            <div className="relative flex justify-center lg:justify-end group">
              <div className="absolute inset-0 bg-gradient-to-tr from-teal-500/20 to-orange-500/10 rounded-3xl transform rotate-3 blur-xl -z-10 transition-transform duration-500 group-hover:rotate-6"></div>

              <img
                src={"img/cth.png"}
                alt="EcoCash App Mockup"
                className="w-full max-w-xl relative z-10 transition-transform duration-700 hover:-translate-y-3"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
