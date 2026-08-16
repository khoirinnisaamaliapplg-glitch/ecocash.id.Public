import React from "react";
// import rvmImg from "img/rvm.png";
// import jabarImg from "img/jabar.jpeg";
// import acehImg from "img/aceh.jpeg";
// import surabayaImg from "img/surabaya.jpeg";
// import medanImg from "img/medan.jpeg";

export default function SmartRvm() {
  const lokasiList = [
    { img: "img/jabar.jpeg", name: "Jawa Barat" },
    { img: "img/aceh.jpeg", name: "Aceh" },
    { img: "img/surabaya.jpeg", name: "Surabaya" },
    { img: "img/medan.jpeg", name: "Medan" },
  ];

  return (
    <section
      id="smart-rvm"
      className="bg-slate-50 border-y border-slate-100 py-20"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* RVM Penjelasan Utama */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Gambar RVM */}
          <div className="w-full relative group">
            <div className="absolute inset-0 bg-eco-accent/10 rounded-[2.5rem] transform -rotate-2 transition-transform duration-300 group-hover:rotate-0"></div>
            <img
              src={"img/rvm.png"}
              alt="Smart Reverse Vending Machine"
              className="w-full h-auto rounded-[2.5rem] shadow-xl shadow-slate-200/50 object-cover relative z-10"
            />
          </div>

          {/* Teks */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight font-heading">
              Smart{" "}
              <span className="text-eco-primary">Reverse Vending Machine</span>
            </h2>
            <h3 className="text-xl font-semibold text-slate-800 font-heading">
              Apa itu Smart RVM?
            </h3>
            <p className="text-lg text-slate-600 leading-relaxed font-body">
              Smart Reverse Vending Machine (RVM) adalah mesin pintar yang
              memungkinkan pengguna menukarkan sampah botol atau kemasan daur
              ulang menjadi reward digital secara otomatis.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed font-body">
              Pengguna hanya perlu memasukkan sampah yang sesuai, kemudian{" "}
              <strong className="text-slate-800 font-semibold">
                sistem AI EcoCash
              </strong>{" "}
              akan melakukan verifikasi jenis material sebelum reward diberikan
              ke akun pengguna.
            </p>
          </div>
        </div>

        {/* Grid 4 Smart Containers */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {lokasiList.map((lokasi, idx) => (
            <div
              key={idx}
              className="group cursor-pointer flex flex-col gap-3 bg-white p-4 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl hover:shadow-teal-500/15 hover:-translate-y-1.5 transition-all duration-300"
            >
              <div className="overflow-hidden rounded-2xl relative">
                <div className="absolute inset-0 bg-eco-primary/0 group-hover:bg-eco-primary/10 transition-colors duration-300 z-10"></div>
                <img
                  src={lokasi.img}
                  alt={`Smart Container ${lokasi.name}`}
                  className="w-full h-40 object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <p className="text-sm font-heading font-semibold text-slate-700 text-center group-hover:text-eco-primary transition-colors">
                Smart Container {lokasi.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
