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
            <div className="inline-flex items-center gap-2 bg-eco-accent/10 text-eco-accent px-5 py-2.5 rounded-full font-heading text-sm font-semibold border border-eco-accent/20">
              <span className="text-eco-accent text-lg">🚚</span> Layanan Bisnis
              & B2B
            </div>

            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight font-heading">
              Armada Smart Vehicle <br />
              <span className="text-eco-primary">EcoCash</span>
            </h2>

            <h4 className="text-xl font-bold text-slate-900">
              Smart Circular Logistics System
            </h4>

            <p className="text-lg text-slate-600 leading-relaxed font-body text-pretty">
              <strong>Armada Smart Vehicle EcoCash</strong> merupakan sistem
              kendaraan pintar yang mendukung proses pengangkutan material daur
              ulang dari jaringan EcoCash Partnership menuju fasilitas
              pengolahan atau mitra daur ulang. Armada ini dirancang untuk
              meningkatkan efisiensi reverse logistics dalam ekosistem ekonomi
              sirkular.
            </p>

            <p className="text-lg text-slate-600 leading-relaxed font-body text-pretty">
              Fitur Utama: Smart Scheduling Sistem penjadwalan pengangkutan
              berdasarkan permintaan, lokasi, dan kapasitas material. Route
              Optimization Optimasi rute pengambilan material untuk mengurangi
              waktu perjalanan dan konsumsi energi.
            </p>
          </div>

          {/* Bagian Kanan: Gambar Armada Truck */}
          <div className="w-full relative group">
            <div className="absolute inset-0 bg-[#064e3b]/10 rounded-[2.5rem] transform rotate-3 transition-transform duration-500 group-hover:rotate-0 -z-10"></div>
            <img
              src={"img/smart-truck-new.jpeg"}
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
