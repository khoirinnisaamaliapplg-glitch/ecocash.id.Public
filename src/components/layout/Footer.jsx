import React from "react";
// import logoEcocash2 from "img/logo-ecocash-2.png";
// import igIcon from "img/Instagram.png";
// import ytIcon from "img/YouTube.png";
// import ttIcon from "img/TikTok.png";
// import apkImg from "img/apk.png";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-16 border-t-[6px] border-eco-dark relative overflow-hidden">
      {/* Dekorasi aksen di sudut */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-eco-dark/10 blur-[80px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Logo & About */}
          <div className="space-y-6">
            <img
              src={"img/logo-ecocash-2.png"}
              alt="EcoCash by Ideas Edvolution"
              className="h-12 bg-white/10 p-1.5 rounded-2xl backdrop-blur-sm"
            />
            <p className="text-slate-400 text-sm leading-relaxed font-body pr-4">
              EcoCash: Solusi Modern untuk Pengelolaan Sampah yang Transparan,
              Berkelanjutan, dan Bernilai Ekonomi.
            </p>
            <div className="flex space-x-4 space-y-1 flex-wrap items-center">
              {/* LinkedIn */}
              <a
                href="#linkedin"
                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-eco-dark hover:text-white transition-colors duration-300"
              >
                <img
                  src={"img/link.png"}
                  alt="LinkedIn"
                  className="w-5 h-5 opacity-70 hover:opacity-100"
                />
              </a>
              {/* Instagram */}
              <a
                href="#instagram"
                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-eco-dark hover:text-white transition-colors duration-300"
              >
                <img
                  src={"img/Instagram.png"}
                  alt="IG"
                  className="w-5 h-5 opacity-70 hover:opacity-100"
                />
              </a>
              {/* Twitter */}
              <a
                href="#twitter"
                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-eco-dark hover:text-white transition-colors duration-300"
              >
                <img
                  src={"img/Twitter.png"}
                  alt="Twitter"
                  className="w-5 h-5 opacity-70 hover:opacity-100"
                />
              </a>
              {/* Facebook */}
              <a
                href="#facebook"
                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-eco-dark hover:text-white transition-colors duration-300"
              >
                <img
                  src={"img/Facebook.png"}
                  alt="Facebook"
                  className="w-5 h-5 opacity-70 hover:opacity-100"
                />
              </a>
              {/* TikTok */}
              <a
                href="#tiktok"
                className="w-10 h-10 rounded-full mt-0.5 bg-slate-800 flex items-center justify-center hover:bg-eco-dark hover:text-white transition-colors duration-300"
              >
                <img
                  src={"img/TikTok.png"}
                  alt="TT"
                  className="w-5 h-5 opacity-70 hover:opacity-100"
                />
              </a>
              {/* YouTube */}
              <a
                href="#youtube"
                className="w-10 h-10 rounded-full mt-0.5 bg-slate-800 flex items-center justify-center hover:bg-eco-dark hover:text-white transition-colors duration-300"
              >
                <img
                  src={"img/YouTube.png"}
                  alt="YT"
                  className="w-5 h-5 opacity-70 hover:opacity-100"
                />
              </a>
            </div>
          </div>

          {/* Navigasi Layanan */}
          <div>
            <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-sm font-heading">
              Layanan
            </h4>
            <ul className="space-y-4 text-sm font-body">
              <li>
                <a
                  href="#app"
                  className="hover:text-sky-accent transition-colors flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-accent"></span>{" "}
                  Aplikasi Mobile
                </a>
              </li>
              <li>
                <a
                  href="#smart-rvm"
                  className="hover:text-sky-accent transition-colors flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-accent"></span>{" "}
                  Smart RVM
                </a>
              </li>
              <li>
                <a
                  href="#location-map"
                  className="hover:text-sky-accent transition-colors flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-accent"></span>{" "}
                  Lokasi Drop Point
                </a>
              </li>
              <li>
                <a
                  href="#ecosystem"
                  className="hover:text-sky-accent transition-colors flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-accent"></span>{" "}
                  EcoCash Bisnis
                </a>
              </li>
            </ul>
          </div>

          {/* Perusahaan */}
          <div>
            <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-sm font-heading">
              Perusahaan
            </h4>
            <ul className="space-y-4 text-sm font-body">
              <li>
                <a
                  href="#about"
                  className="hover:text-sky-accent transition-colors"
                >
                  Tentang Kami
                </a>
              </li>
              <li>
                <a
                  href="#news"
                  className="hover:text-sky-accent transition-colors"
                >
                  Edukasi & Berita
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-sky-accent transition-colors"
                >
                  Hubungi Kami
                </a>
              </li>
              <li>
                <a
                  href="#career"
                  className="hover:text-sky-accent transition-colors"
                >
                  Karir
                </a>
              </li>
            </ul>
          </div>

          {/* Kontak & Download */}
          <div className="space-y-8">
            <div>
              <h4 className="font-bold text-white mb-4 uppercase tracking-wider text-sm font-heading">
                Hubungi Kami
              </h4>
              <ul className="space-y-2 text-sm font-body text-slate-400">
                <li>
                  <strong className="text-slate-300">WA:</strong> +62
                  812-1416-1614
                </li>
                <li>
                  <strong className="text-slate-300">Email:</strong>{" "}
                  info@edvolution-technology.com
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4 uppercase tracking-wider text-sm font-heading">
                Unduh Aplikasi
              </h4>
              <a
                href="#download"
                className="inline-block hover:opacity-80 transition-opacity"
              >
                <img
                  src={"img/apk.png"}
                  className="h-10"
                  alt="Get it on Google Play"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Rekening & Copyright */}
        <div className="pt-8 border-t border-slate-800 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 font-body text-sm text-slate-500">
          <div className="bg-slate-800/50 p-5 rounded-3xl border border-slate-700/50">
            <p className="font-semibold text-slate-300 font-heading mb-1">
              PT Ideas Edvolution Technology
            </p>
            <p>
              Bandung, Bumi Panyawangan, Jl. Garcinia Indah III No. 13,
              <br />
              Kec. Cileunyi, Jawa Barat 40393
            </p>
            <div className="mt-2 text-sky-accent font-mono text-xs">
              <span className="text-slate-400 font-sans">BSI:</span> 7234567890
              (A.N. PT Ideas Edvolution Technology)
            </div>
          </div>

          <div className="text-left lg:text-right">
            <p>© 2026 PT Ideas Edvolution Technology.</p>
            <p>Hak Cipta Dilindungi Undang-Undang.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
