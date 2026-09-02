import React, { useState, useEffect } from "react";

export default function RetailMallSolution() {
  const [formData, setFormData] = useState({
    properti: "",
    kategori: "",
    traffic: "",
    kota: "",
    whatsapp: "",
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      "Pengajuan titik RVM Anda berhasil dikirim! Tim Spesialis Retail kami akan segera menghubungi Anda.",
    );
  };

  return (
    <main className="w-full min-h-screen bg-white font-body text-slate-700">
      {/* 1. HERO SECTION (BACKGROUND GAMBAR PENUH DENGAN OVERLAY GRADASI) */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden border-b border-slate-100 flex items-center min-h-[500px] lg:min-h-[600px]">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('img/hero-mall-retail.jpg')" }}
        ></div>

        {/* Gradasi Overlay: Solid putih di kiri memudar jadi transparan di kanan (untuk desktop), agak solid di mobile agar teks terbaca */}
        <div className="absolute inset-0 bg-white/90 md:bg-gradient-to-r md:from-white md:via-white/90 md:to-transparent/20"></div>

        <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10 w-full">
          <div className="max-w-xl">
            <h1 className="text-4xl md:text-5xl lg:text-[46px] font-extrabold text-slate-900 font-heading leading-[1.25] mb-6">
              Tingkatkan Foot-Traffic & Loyalitas Pelanggan Lewat Solusi Daur
              Ulang Modern
            </h1>

            <p className="text-base sm:text-lg text-slate-600 font-body mb-10 leading-relaxed max-w-lg">
              Ubah botol plastik menjadi magnet pengunjung. Berikan reward
              instan berupa voucher belanja yang dapat digunakan langsung di
              tenant properti Anda.
            </p>

            <a
              href="#form-retail"
              className="inline-flex items-center justify-center bg-eco-cyan hover:bg-[#1eb5b1] text-white px-8 py-3.5 rounded-lg font-heading font-bold text-sm transition-all transform hover:-translate-y-0.5 shadow-lg shadow-eco-cyan/30"
            >
              Ajukan Titik RVM Retail
            </a>
          </div>
        </div>
      </section>

      {/* 2. SIKLUS REWARD TANPA PUTUS (GARIS DI TENGAH BOX) */}
      <section className="py-24 max-w-7xl mx-auto px-6 lg:px-10 bg-[#f4f7fa]">
        <div className="text-center mb-20">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 font-heading">
            Siklus Reward Tanpa Putus
          </h2>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Garis Putus-putus Penghubung (Dipindah ke TENGAH vertikal) */}
          <div className="hidden md:block absolute top-1/2 -translate-y-1/2 left-[10%] right-[10%] h-[2px] border-t-2 border-dashed border-eco-cyan/50 z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 relative z-10">
            {/* Kartu 1 */}
            <div className="bg-white px-6 pt-12 pb-8 rounded-2xl border border-slate-100 shadow-sm text-center relative hover:shadow-md transition-shadow">
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-eco-cyan text-white flex items-center justify-center font-bold font-heading text-lg shadow-md shadow-eco-cyan/30 ring-4 ring-[#f4f7fa]">
                1
              </div>
              <div className="text-[#0f766e] mb-4 flex justify-center">
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold font-heading text-slate-900 mb-2">
                Pengunjung Setor Botol
              </h3>
              <p className="text-slate-500 font-body text-[13px] leading-relaxed">
                Pengunjung memasukkan botol ke RVM di area strategis mall.
              </p>
            </div>

            {/* Kartu 2 */}
            <div className="bg-white px-6 pt-12 pb-8 rounded-2xl border border-slate-100 shadow-sm text-center relative hover:shadow-md transition-shadow mt-4 md:mt-0">
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-eco-cyan text-white flex items-center justify-center font-bold font-heading text-lg shadow-md shadow-eco-cyan/30 ring-4 ring-[#f4f7fa]">
                2
              </div>
              <div className="text-[#0f766e] mb-4 flex justify-center">
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 6h.008v.008H6V6z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold font-heading text-slate-900 mb-2">
                Terima Voucher Belanja
              </h3>
              <p className="text-slate-500 font-body text-[13px] leading-relaxed">
                Aplikasi memberikan poin/voucher instan di smartphone pengguna.
              </p>
            </div>

            {/* Kartu 3 */}
            <div className="bg-white px-6 pt-12 pb-8 rounded-2xl border border-slate-100 shadow-sm text-center relative hover:shadow-md transition-shadow mt-4 md:mt-0">
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-eco-cyan text-white flex items-center justify-center font-bold font-heading text-lg shadow-md shadow-eco-cyan/30 ring-4 ring-[#f4f7fa]">
                3
              </div>
              <div className="text-[#0f766e] mb-4 flex justify-center">
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H19.5m0 0h.36m-1.5 0v-4.5A.75.75 0 0017.64 16h-3.36a.75.75 0 00-.75.75v4.5m0 0H21m-9 0H3.36M15 9h3M3 9h18M3 9v-1.5a.75.75 0 01.75-.75h16.5a.75.75 0 01.75.75V9m-18 0l1.8 7.2A.75.75 0 005.54 17h12.92a.75.75 0 00.72-.57L21 9"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold font-heading text-slate-900 mb-2">
                Transaksi di Tenant Mall
              </h3>
              <p className="text-slate-500 font-body text-[13px] leading-relaxed">
                Voucher digunakan untuk berbelanja, meningkatkan omzet tenant.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FORMULIR KEMITRAAN RETAIL (KONSISTEN SPLIT LAYOUT SEPERTI HALAMAN LAINNYA) */}
      <section
        id="form-retail"
        className="py-24 bg-white px-6 scroll-mt-10 border-t border-slate-100"
      >
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row rounded-[2rem] overflow-hidden shadow-xl shadow-slate-200/50">
          <div className="w-full md:w-[40%] bg-[#064e3b] p-10 md:p-12 text-white flex flex-col">
            <div className="mb-10">
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-6 backdrop-blur-sm border border-white/10">
                <svg
                  className="w-8 h-8 text-eco-cyan"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H19.5m0 0h.36m-1.5 0v-4.5A.75.75 0 0017.64 16h-3.36a.75.75 0 00-.75.75v4.5m0 0H21m-9 0H3.36M15 9h3M3 9h18M3 9v-1.5a.75.75 0 01.75-.75h16.5a.75.75 0 01.75.75V9m-18 0l1.8 7.2A.75.75 0 005.54 17h12.92a.75.75 0 00.72-.57L21 9"
                  />
                </svg>
              </div>
              <h2 className="text-3xl font-extrabold font-heading mb-4">
                Jadilah Mitra Retail Kami
              </h2>
              <p className="text-emerald-100 font-body text-sm md:text-base leading-relaxed">
                Tim spesialis retail kami siap mendiskusikan penempatan RVM
                untuk meningkatkan foot-traffic dan loyalitas di properti
                komersial Anda.
              </p>
            </div>

            <div className="mt-auto space-y-4 pt-8 border-t border-white/10">
              <div className="flex items-center gap-3 text-emerald-100 text-sm font-body">
                <svg
                  className="w-5 h-5 shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                retail@ecocash.id
              </div>
              <div className="flex items-center gap-3 text-emerald-100 text-sm font-body">
                <svg
                  className="w-5 h-5 shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                Jakarta Selatan, Indonesia
              </div>
            </div>
          </div>

          <div className="w-full md:w-[60%] bg-white p-10 md:p-12 border border-slate-100 md:border-l-0 rounded-b-[2rem] md:rounded-bl-none md:rounded-r-[2rem]">
            <h3 className="text-2xl font-bold font-heading text-slate-900 mb-8">
              Lengkapi Data Properti
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-slate-700 font-heading mb-2">
                    Nama Properti *
                  </label>
                  <input
                    type="text"
                    name="properti"
                    value={formData.properti}
                    onChange={handleInputChange}
                    placeholder="Contoh: Grand City Mall"
                    className="w-full bg-slate-50 border border-slate-200 py-3.5 px-4 rounded-xl focus:outline-none focus:border-eco-cyan focus:ring-2 focus:ring-eco-cyan/20 transition-all text-sm font-body"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 font-heading mb-2">
                    Kategori Retail *
                  </label>
                  <div className="relative">
                    <select
                      name="kategori"
                      value={formData.kategori}
                      onChange={handleInputChange}
                      className="w-full bg-slate-50 border border-slate-200 py-3.5 px-4 rounded-xl focus:outline-none focus:border-eco-cyan focus:ring-2 focus:ring-eco-cyan/20 transition-all text-sm font-body appearance-none"
                      required
                    >
                      <option value="" disabled>
                        Pilih Kategori
                      </option>
                      <option value="Mall/Pusat Perbelanjaan">
                        Mall / Pusat Perbelanjaan
                      </option>
                      <option value="Supermarket/Hypermarket">
                        Supermarket / Hypermarket
                      </option>
                      <option value="Minimarket">
                        Minimarket / Convenience Store
                      </option>
                      <option value="Stasiun/Fasilitas Publik">
                        Stasiun / Fasilitas Publik
                      </option>
                      <option value="Lainnya">Lainnya</option>
                    </select>
                    <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-slate-400">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 font-heading mb-2">
                  Estimasi Foot-traffic Harian *
                </label>
                <input
                  type="text"
                  name="traffic"
                  value={formData.traffic}
                  onChange={handleInputChange}
                  placeholder="Contoh: 10.000 pengunjung/hari"
                  className="w-full bg-slate-50 border border-slate-200 py-3.5 px-4 rounded-xl focus:outline-none focus:border-eco-cyan focus:ring-2 focus:ring-eco-cyan/20 transition-all text-sm font-body"
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-slate-700 font-heading mb-2">
                    Kota *
                  </label>
                  <input
                    type="text"
                    name="kota"
                    value={formData.kota}
                    onChange={handleInputChange}
                    placeholder="Contoh: Jakarta Selatan"
                    className="w-full bg-slate-50 border border-slate-200 py-3.5 px-4 rounded-xl focus:outline-none focus:border-eco-cyan focus:ring-2 focus:ring-eco-cyan/20 transition-all text-sm font-body"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 font-heading mb-2">
                    Nomor WhatsApp PIC *
                  </label>
                  <input
                    type="tel"
                    name="whatsapp"
                    value={formData.whatsapp}
                    onChange={handleInputChange}
                    placeholder="Contoh: 081234567890"
                    className="w-full bg-slate-50 border border-slate-200 py-3.5 px-4 rounded-xl focus:outline-none focus:border-eco-cyan focus:ring-2 focus:ring-eco-cyan/20 transition-all text-sm font-body"
                    required
                  />
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full bg-eco-cyan hover:bg-[#1eb5b1] text-white py-4 rounded-xl font-heading font-bold text-sm transition-all shadow-lg shadow-eco-cyan/20 flex items-center justify-center gap-2"
                >
                  Kirim Pengajuan
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
