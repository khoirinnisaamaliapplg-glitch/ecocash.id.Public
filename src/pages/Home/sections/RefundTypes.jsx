import React from "react";

export default function RefundTypes() {
  const refundOptions = [
    {
      icon: "💳",
      title: "Dompet Digital",
      desc: "Transfer eco-refund secara instan ke e-wallet pilihanmu (Dana, OVO, GoPay, LinkAja) atau simpan sebagai saldo aplikasi.",
      accent: "teal",
    },
    {
      icon: "🏪",
      title: "Kredit Toko",
      desc: "Dapatkan voucher fisik dari mesin atau depo untuk belanja di ritel lokal atau ditukar tunai. Tanpa perlu daftar akun.",
      accent: "orange",
    },
    {
      icon: "🏦",
      title: "Tunai & Transfer",
      desc: "Cairkan uang tunai lewat petugas depo, atau pilih transfer bank (EFT) dengan memasukkan kartu ATM ke terminal.",
      accent: "teal",
    },
    {
      icon: "👥",
      title: "Donasi Komunitas",
      desc: "Salurkan saldo EcoCash untuk mendukung sekolah, klub olahraga, dan lembaga sosial terdekat dengan metode donasi yang mudah.",
      accent: "orange",
    },
  ];

  return (
    <section
      id="refund-types"
      className="max-w-7xl mx-auto px-6 lg:px-10 py-24"
    >
      <div className="mb-12 max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 font-heading">
          Jenis Pengembalian EcoCash
        </h2>
        <p className="text-lg text-slate-600 font-body">
          Setiap botol atau kaleng yang kamu kembalikan bernilai eco-refund.{" "}
          <span className="text-sky-accent font-bold">
            Yuk, pilih metode pencairan EcoCash sesukamu!
          </span>
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {refundOptions.map((item, idx) => {
          const isOrange = item.accent === "orange";
          return (
            <div
              key={idx}
              className={`bg-white rounded-3xl p-6 border border-slate-100 shadow-sm transition-all duration-300 group relative overflow-hidden ${
                isOrange
                  ? "hover:shadow-xl hover:shadow-orange-500/10 hover:border-orange-500/40"
                  : "hover:shadow-xl hover:shadow-teal-500/10 hover:border-teal-500/40"
              }`}
            >
              <div
                className={`absolute top-0 right-0 w-24 h-24 rounded-bl-full -z-10 transition-colors ${
                  isOrange
                    ? "bg-orange-500/5 group-hover:bg-orange-500/10"
                    : "bg-teal-500/5 group-hover:bg-teal-500/10"
                }`}
              ></div>

              <div
                className={`w-14 h-14 rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-all duration-300 ${
                  isOrange
                    ? "bg-orange-500/10 group-hover:-rotate-6"
                    : "bg-teal-500/10 group-hover:rotate-6"
                }`}
              >
                {item.icon}
              </div>

              <h3 className="text-xl font-bold font-heading text-slate-900 mb-3">
                {item.title}
              </h3>
              <p className="text-slate-600 leading-relaxed font-body text-sm">
                {item.desc}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
