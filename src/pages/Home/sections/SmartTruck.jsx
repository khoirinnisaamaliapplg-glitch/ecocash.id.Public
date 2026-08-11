import React from "react";

export default function SmartTruck() {
  return (
    <section
      id="smart-truck"
      className="bg-slate-50 border-y border-slate-100 py-24"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Bagian Kiri: Teks */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 bg-orange-50 text-orange-700 px-5 py-2.5 rounded-full font-heading text-sm font-semibold border border-orange-100">
              <span className="text-[#f97316] text-lg">🚚</span> Layanan Bisnis
              & B2B
            </div>

            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight font-heading">
              Armada Smart Truck <br />
              <span className="text-eco-dark">EcoCash</span>
            </h2>

            <h4 className="text-xl font-bold text-slate-900">
              Apa itu Smart Truck EcoCash?
            </h4>

            <p className="text-lg text-slate-600 leading-relaxed font-body text-pretty">
              <strong>Smart Truck EcoCash</strong> adalah armada pengangkut
              sampah pintar yang dilengkapi dengan teknologi AIoT untuk
              mengoptimalkan rute dan efisiensi pengumpulan sampah secara
              real-time.
            </p>

            <p className="text-lg text-slate-600 leading-relaxed font-body text-pretty">
              Truk ini berfungsi sebagai titik penjemputan bergerak yang
              terintegrasi dengan sistem Manajemen Keuangan Digital kami. Setiap
              sampah yang dikumpulkan akan diverifikasi secara otomatis, dan{" "}
              <em>reward digital</em> akan langsung dikreditkan ke akun
              pengguna, memastikan proses daur ulang yang transparan dan
              efisien.
            </p>
          </div>

          {/* Bagian Kanan: Gambar Armada Truck */}
          <div className="w-full relative group">
            <div className="absolute inset-0 bg-[#064e3b]/10 rounded-[2.5rem] transform rotate-3 transition-transform duration-500 group-hover:rotate-0 -z-10"></div>
            <img
              src={"img/truk.png"}
              alt="EcoCash Smart Truck Fleet"
              className="w-full h-auto rounded-[2.5rem] shadow-xl shadow-slate-200/50 object-cover relative z-10 transition-transform duration-700 hover:scale-[1.02]"
              onError={(e) => {
                e.target.style.display = "none";
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
