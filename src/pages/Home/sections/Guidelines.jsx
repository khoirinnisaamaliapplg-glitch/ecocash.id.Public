import React from "react";
// import panduanImg from "img/panduan.png";

export default function Guidelines() {
  return (
    <section
      id="guidelines"
      className="bg-slate-50 border-y border-slate-100 py-24"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Teks Panduan */}
          <div className="space-y-8 flex flex-col justify-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 font-heading leading-tight">
                Panduan Kelayakan Barang <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-eco-primary to-eco-cyan">
                  Daur Ulang EcoCash
                </span>
              </h2>
              <p className="text-slate-600 text-lg font-body">
                Biar proses pemindaian AI lancar dan poinmu berhasil masuk,{" "}
                <span className="text-eco-secondary font-bold">
                  yuk perhatikan kategori berikut:
                </span>
              </p>
            </div>

            {/* Grid List Bisa/Tidak Bisa */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {/* Kartu BISA */}
              <div className="bg-white p-6 rounded-3xl border border-emerald-100 shadow-sm shadow-emerald-500/5 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1.5 bg-emerald-500"></div>
                <div className="flex items-center mb-4 gap-3">
                  <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 font-bold">
                    ✓
                  </div>
                  <h3 className="font-bold text-lg font-heading text-slate-900">
                    BISA Diterima
                  </h3>
                </div>
                <ul className="space-y-3 font-body text-slate-600 text-sm">
                  <li className="flex items-start gap-2">
                    <span>•</span> Botol Plastik PET (150ml - 3L)
                  </li>
                  <li className="flex items-start gap-2">
                    <span>•</span> Kaleng minuman/makanan
                  </li>
                  <li className="flex items-start gap-2">
                    <span>•</span> Karton Minuman (UHT)
                  </li>
                  <li className="flex items-start gap-2">
                    <span>•</span> Botol Kaca (sirup/kecap)
                  </li>
                </ul>
              </div>

              {/* Kartu TIDAK BISA */}
              <div className="bg-white p-6 rounded-3xl border border-rose-100 shadow-sm shadow-rose-500/5 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1.5 bg-rose-500"></div>
                <div className="flex items-center mb-4 gap-3">
                  <div className="w-8 h-8 rounded-full bg-rose-100 flex items-center justify-center text-rose-600 font-bold">
                    ✕
                  </div>
                  <h3 className="font-bold text-lg font-heading text-slate-900">
                    TIDAK Diterima
                  </h3>
                </div>
                <ul className="space-y-3 font-body text-slate-600 text-sm">
                  <li className="flex items-start gap-2">
                    <span>•</span> Botol kaca minuman keras
                  </li>
                  <li className="flex items-start gap-2">
                    <span>•</span> Jeriken plastik &gt; 3L
                  </li>
                  <li className="flex items-start gap-2">
                    <span>•</span> Plastik mika/kresek/saset
                  </li>
                  <li className="flex items-start gap-2">
                    <span>•</span> Wadah kotor/berminyak
                  </li>
                </ul>
              </div>
            </div>

            {/* Alert Penting */}
            <div className="bg-orange-50 border-l-4 border-eco-accent p-5 rounded-r-3xl flex items-start gap-4 shadow-sm">
              <span className="text-2xl mt-0.5">⚠️</span>
              <p className="font-body text-orange-950 text-sm leading-relaxed">
                <strong className="font-heading text-base">Perhatian:</strong>{" "}
                Jangan diremukkan dan jangan lepas label/tutupnya! Sistem AI
                kami perlu membaca <em>barcode</em> utuh untuk memverifikasi
                pencairan saldo.
              </p>
            </div>
          </div>

          {/* Gambar / Ilustrasi */}
          <div className="w-full relative group">
            <div className="absolute inset-0 bg-gradient-to-tr from-teal-500/20 to-orange-500/20 rounded-[2.5rem] transform rotate-3 transition-transform duration-500 group-hover:-rotate-2 -z-10 blur-xl"></div>
            <img
              src={"img/panduan.png"}
              alt="Panduan Barang Daur Ulang"
              className="w-full h-auto object-cover relative z-10 transition-transform duration-500 group-hover:scale-105 rounded-[2.5rem]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
