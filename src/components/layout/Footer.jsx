import React from "react";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-slate-200 text-slate-300 py-16 shadow-sm relative overflow-hidden">
      {/* Dekorasi aksen di sudut */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-eco-secondary/10 blur-[80px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Logo & About */}
          <div className="space-y-6">
            <img
              src={"img/logo.png"}
              alt="EcoCash by Ideas Edvolution"
              className="h-12 bg-white/10 p-1.5 rounded-2xl backdrop-blur-sm"
            />
            <p className="text-slate-600 text-sm leading-relaxed font-body pr-4">
              {t(
                "footer.about",
                "EcoCash: Solusi Modern untuk Pengelolaan Sampah yang Transparan, Berkelanjutan, dan Bernilai Ekonomi.",
              )}
            </p>
          </div>

          {/* Navigasi Layanan */}
          <div>
            <h4 className="font-bold text-slate-900 mb-6 uppercase tracking-wider text-sm font-heading">
              {t("footer.servicesTitle", "Layanan")}
            </h4>
            <ul className="text-slate-600 space-y-4 text-sm font-body">
              <li>
                <a
                  href="#app"
                  className="hover:text-eco-cyan transition-colors flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-eco-cyan"></span>{" "}
                  {t("footer.services.mobileApp", "Aplikasi Mobile")}
                </a>
              </li>
              <li>
                <a
                  href="#smart-rvm"
                  className="hover:text-eco-cyan transition-colors flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-eco-cyan"></span>{" "}
                  {t("footer.services.smartRvm", "Smart RVM")}
                </a>
              </li>
              <li>
                <a
                  href="#location-map"
                  className="hover:text-eco-cyan transition-colors flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-eco-cyan"></span>{" "}
                  {t("footer.services.dropPoint", "Lokasi Drop Point")}
                </a>
              </li>
              <li>
                <a
                  href="#ecosystem"
                  className="hover:text-eco-cyan transition-colors flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-eco-cyan"></span>{" "}
                  {t("footer.services.business", "EcoCash Bisnis")}
                </a>
              </li>
            </ul>
          </div>

          {/* Perusahaan */}
          <div>
            <h4 className="font-bold text-slate-900 mb-6 uppercase tracking-wider text-sm font-heading">
              {t("footer.companyTitle", "Perusahaan")}
            </h4>
            <ul className="text-slate-600 space-y-4 text-sm font-body">
              <li>
                <a
                  href="#about"
                  className="hover:text-eco-cyan transition-colors"
                >
                  {t("footer.company.aboutUs", "Tentang Kami")}
                </a>
              </li>
              <li>
                <a
                  href="#news"
                  className="hover:text-eco-cyan transition-colors"
                >
                  {t("footer.company.news", "Edukasi & Berita")}
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-eco-cyan transition-colors"
                >
                  {t("footer.company.contact", "Hubungi Kami")}
                </a>
              </li>
              <li>
                <a
                  href="#career"
                  className="hover:text-eco-cyan transition-colors"
                >
                  {t("footer.company.career", "Karir")}
                </a>
              </li>
            </ul>
          </div>

          {/* Kontak & Informasi */}
          <div className="space-y-8">
            <div>
              <h4 className="font-bold text-slate-900 mb-4 uppercase tracking-wider text-sm font-heading">
                {t("footer.contactTitle", "Hubungi Kami")}
              </h4>
              <ul className="space-y-2 text-sm font-body text-slate-600">
                <li>
                  <strong className="text-slate-600">WA:</strong> +62
                  812-1416-1614
                </li>
                <li>
                  <strong className="text-slate-600">Email:</strong>{" "}
                  edvolution-tecnologi@gmail.com
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Sosial Media & Rekening */}
        <div className="pt-4 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 font-body text-sm text-slate-500">
          <div className="p-5">
            <h4 className="font-bold text-slate-900 mb-4 uppercase tracking-wider text-sm font-heading">
              {t("footer.socialTitle", "Sosial Media")}
            </h4>
            <div className="flex space-x-4 space-y-1 flex-wrap items-center mb-2">
              <a
                href="#instagram"
                className="w-10 h-10 rounded-full bg-slate-300 flex items-center justify-center hover:bg-eco-cyan hover:text-white transition-colors duration-300"
              >
                <img
                  src={"img/Instagram.png"}
                  alt="IG"
                  className="w-5 h-5 opacity-70 hover:opacity-100"
                />
              </a>
              <a
                href="#tiktok"
                className="w-10 h-10 rounded-full mt-0.5 bg-slate-300 flex items-center justify-center hover:bg-eco-cyan hover:text-white transition-colors duration-300"
              >
                <img
                  src={"img/TikTok.png"}
                  alt="TT"
                  className="w-5 h-5 opacity-70 hover:opacity-100"
                />
              </a>
              <a
                href="#youtube"
                className="w-10 h-10 rounded-full mt-0.5 bg-slate-300 flex items-center justify-center hover:bg-eco-cyan hover:text-white transition-colors duration-300"
              >
                <img
                  src={"img/YouTube.png"}
                  alt="YT"
                  className="w-5 h-5 opacity-70 hover:opacity-100"
                />
              </a>
            </div>
            <p className="font-semibold text-eco-cyan font-heading mb-1">
              PT Ideas Edvolution Technology
            </p>
            <p>
              Bandung, Bumi Panyawangan, Jl. Garcinia Indah III No. 13,
              <br />
              Kec. Cileunyi, Jawa Barat 40393
            </p>
            <div className="mt-2 text-eco-cyan font-mono text-xs">
              <span className="text-slate-400 font-sans">BSI:</span> 7234567890
              (A.N. PT Ideas Edvolution Technology)
            </div>
          </div>
          <div>
            <h4 className="font-bold text-slate-900 mb-4 uppercase tracking-wider text-sm font-heading">
              {t("footer.downloadTitle", "Unduh Aplikasi")}
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

        {/* Baris Hak Cipta */}
        <div className="text-slate-400 flex flex-col sm:flex-row justify-between items-center pt-4 mt-4 border-t border-slate-300 gap-2 text-xs lg:text-sm">
          <p>
            {t("footer.copyright", "© 2026 PT Ideas Edvolution Technology.")}
          </p>
          <p>
            {t(
              "footer.allRightsReserved",
              "Hak Cipta Dilindungi Undang-Undang.",
            )}
          </p>
        </div>
      </div>
    </footer>
  );
}
