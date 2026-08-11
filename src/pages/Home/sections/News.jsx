import React from "react";

// Import aset gambar berita (pastikan file gambar tersedia di folder assets/img/)
// import berita1 from "img/berita-1.png";
// import berita2 from "img/berita-2.png";
// import berita3 from "img/berita-3.png";
// import berita4 from "img/berita-4.png";
// import berita5 from "img/berita-5.png";
// import berita6 from "img/berita-6.png";

export default function News() {
  const newsList = [
    {
      img: "img/berita-1.png",
      title: "Sampah Plastik Jadi Rupiah",
      desc: "Ecocash.id resmi meluncurkan aplikasi inovatif yang memungkinkan masyarakat menukarkan sampah plastik langsung...",
    },
    {
      img: "img/berita-2.png",
      title: "Aplikasi Ecocash.id Resmi Rilis",
      desc: "Ecocash.id resmi meluncurkan aplikasi seluler pertamanya di Indonesia untuk mempermudah masyarakat...",
    },
    {
      img: "img/berita-3.png",
      title: "Ecocash.id Gandeng Bank Sampah",
      desc: "Ecocash.id mengumumkan kolaborasi strategis dengan jaringan bank sampah lokal guna memperluas jangkauan...",
    },
    {
      img: "img/berita-4.png",
      title: "Perluas Jangkauan di Pulau Jawa",
      desc: "Ecocash.id kini hadir di lebih dari 100 titik di Pulau Jawa, memperluas akses masyarakat untuk menukarkan sampah...",
    },
    {
      img: "img/berita-5.png",
      title: "Ecocash Hadir di Kota Bandung",
      desc: "Ecocash.id kini hadir di Kota Bandung, memberikan kemudahan bagi masyarakat untuk menukarkan sampah...",
    },
    {
      img: "img/berita-6.png",
      title: "Ecocash Hadir di Kota Surabaya",
      desc: "Ecocash.id kini hadir di Kota Surabaya, memberikan kemudahan bagi masyarakat untuk menukarkan sampah...",
    },
  ];

  return (
    <section id="news" className="max-w-7xl mx-auto px-6 lg:px-10 py-24">
      {/* Header Judul Section */}
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
        <div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 font-heading">
            Berita{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-eco-dark to-sky-accent">
              EcoCash.id
            </span>
          </h2>
          <p className="text-slate-600 font-body mt-2">
            Ikuti terus pembaruan ekosistem dan aktivitas daur ulang kami.
          </p>
        </div>

        {/* Tombol Tampilkan Lebih Banyak (Desktop) */}
        <a
          href="#all-news"
          className="hidden md:flex text-eco-dark font-heading font-bold items-center hover:text-sky-accent transition-colors group"
        >
          Lihat Semua Berita
          <svg
            className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </a>
      </div>

      {/* Grid Berita */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {newsList.map((berita, idx) => (
          <a
            key={idx}
            href="#news-detail"
            className="group bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-teal-500/10 transition-all duration-300 overflow-hidden flex flex-col h-full cursor-pointer"
          >
            <div className="w-full h-48 overflow-hidden relative">
              <div className="absolute inset-0 bg-eco-dark/0 group-hover:bg-eco-dark/20 transition-colors duration-300 z-10"></div>
              <img
                src={berita.img}
                alt={berita.title}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
            </div>
            <div className="p-6 flex flex-col flex-grow">
              {/* Badge Tanggal/Kategori */}
              <span className="text-xs font-bold text-sky-accent font-body mb-2 uppercase tracking-wider">
                Terbaru
              </span>
              <h3 className="text-lg font-bold mb-3 text-slate-900 font-heading group-hover:text-eco-dark transition-colors line-clamp-2">
                {berita.title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed font-body line-clamp-3">
                {berita.desc}
              </p>
            </div>
          </a>
        ))}
      </div>

      {/* Tombol Tampilkan Lebih Banyak (Mobile) */}
      <div className="mt-10 text-center md:hidden">
        <a
          href="#all-news"
          className="inline-flex items-center justify-center bg-slate-50 text-eco-dark font-heading font-bold px-6 py-3 rounded-full border border-slate-200 hover:bg-slate-100 transition-colors w-full"
        >
          Lihat Semua Berita
        </a>
      </div>
    </section>
  );
}
