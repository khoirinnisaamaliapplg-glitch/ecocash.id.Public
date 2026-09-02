import React from "react";

export default function Ecosystem() {
  return (
    <section id="ecosystem" className="max-w-7xl mx-auto px-6 lg:px-10 py-24">
      {/* Banner Ekosistem */}
      <div className="text-center mb-20">
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 font-heading mb-10">
          Terhubung dalam{" "}
          <span className="text-eco-cyan">Ekosistem EcoCash</span>
        </h2>
        <div className="flex justify-center items-center relative group">
          <div className="absolute inset-0 bg-eco-cyan/5 blur-3xl rounded-full -z-10"></div>
          <img
            src={"img/banner.png"}
            alt="Ekosistem EcoCash"
            className="w-full max-w-5xl rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 object-contain transition-transform duration-700 hover:scale-[1.02]"
          />
        </div>
      </div>
    </section>
  );
}
