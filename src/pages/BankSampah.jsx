import React, { useEffect, useState } from "react";

export default function BankSampah() {
  const [formData, setFormData] = useState({
    namaFasilitas: "",
    tipeFasilitas: "Bank Sampah Induk",
    lokasiOperasional: "",
    whatsappPic: "",
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
      "Permintaan kemitraan Anda telah kami terima. Tim B2B kami akan segera menghubungi Anda.",
    );
  };

  return (
    <main className="w-full min-h-screen bg-white font-body text-slate-700">
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            {/* Hero Teks */}
            <div className="max-w-xl relative z-10">
              <h1 className="text-4xl md:text-5xl lg:text-[46px] font-extrabold text-slate-900 font-heading leading-[1.25] mb-6">
                Transformasi Bank Sampah & TPS3R Menjadi{" "}
                <span className="text-eco-cyan">
                  Digital Drop-Off Hub Modern
                </span>
              </h1>

              <p className="text-base sm:text-lg text-slate-500 font-body mb-10 leading-relaxed max-w-lg">
                Digitalisasi operasional fasilitas pengelolaan sampah Anda.
                Tingkatkan efisiensi penimbangan, amankan pasokan material
                bersih, dan pantau keuangan secara real-time dengan ekosistem
                IoT EcoCash.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="#form-transformasi"
                  className="inline-flex items-center justify-center bg-eco-cyan hover:bg-[#1eb5b1] text-white px-8 py-3.5 rounded-full font-heading font-bold text-sm transition-all shadow-lg shadow-eco-cyan/30"
                >
                  Daftarkan Bank Sampah
                </a>
                <a
                  href="#fitur-utama"
                  className="inline-flex items-center justify-center bg-transparent border-2 border-slate-200 text-slate-700 hover:border-eco-cyan hover:text-eco-cyan px-8 py-3.5 rounded-full font-heading font-bold text-sm transition-colors"
                >
                  Pelajari Lebih Lanjut
                </a>
              </div>
            </div>

            {/* Hero Gambar */}
            <div className="relative w-full flex justify-center lg:justify-end">
              <div className="absolute top-1/2 right-10 -translate-y-1/2 w-72 h-72 bg-eco-cyan/10 blur-[80px] rounded-full -z-10"></div>
              <div className="relative w-full max-w-lg rounded-3xl overflow-hidden shadow-2xl shadow-slate-200/50">
                <img
                  src="img/hero-bs.jpg"
                  alt="Dashboard Hub Digital"
                  className="w-full h-auto object-cover"
                  onError={(e) => {
                    e.target.style.display = "none";
                    e.target.parentElement.innerHTML = `<div class="w-full h-[400px] flex items-center justify-center bg-slate-50 text-slate-400 font-body text-sm text-center p-6 border-2 border-dashed border-slate-200 rounded-3xl">Siapkan gambar mockup tablet<br/>di folder public/img</div>`;
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. FITUR UTAMA HUB DIGITAL */}
      <section id="fitur-utama" className="py-24 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-slate-900 font-heading mb-4">
              Fitur Utama Hub Digital
            </h2>
            <p className="text-slate-500 font-body text-lg max-w-2xl mx-auto">
              Tingkatkan kapasitas dan transparansi operasional dengan teknologi
              terintegrasi.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white p-8 md:p-10 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-sky-50 text-eco-cyan rounded-xl flex items-center justify-center mb-6">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M6 3h12l-4 8 4 8H6l4-8-4-8z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M9 12h6"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold font-heading text-slate-900 mb-3">
                Smart Digital Scale Integration
              </h3>
              <p className="text-slate-500 font-body text-[13px] leading-relaxed">
                Otomatisasi pencatatan timbangan melalui integrasi IoT. Data
                langsung masuk ke sistem tanpa input manual, mencegah human
                error dan kecurangan.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-8 md:p-10 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-sky-50 text-eco-cyan rounded-xl flex items-center justify-center mb-6">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold font-heading text-slate-900 mb-3">
                Guaranteed Clean Material Supply
              </h3>
              <p className="text-slate-500 font-body text-[13px] leading-relaxed">
                Akses prioritas ke pasokan material daur ulang yang bersih dan
                terpilah dari jaringan Reverse Vending Machine (RVM) EcoCash.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-8 md:p-10 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-sky-50 text-eco-cyan rounded-xl flex items-center justify-center mb-6">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M21 12a2.25 2.25 0 00-2.25-2.25H15a3 3 0 11-6 0H4.5A2.25 2.25 0 002.25 12v6.75A2.25 2.25 0 004.5 21h15a2.25 2.25 0 002.25-2.25V12zm-9-2.25h.008v.008H12V9.75z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M2.25 9.75v-.375c0-.621.504-1.125 1.125-1.125h15.75c.621 0 1.125.504 1.125 1.125v.375"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold font-heading text-slate-900 mb-3">
                Cloud Inventory & Cashbook
              </h3>
              <p className="text-slate-500 font-body text-[13px] leading-relaxed">
                Buku kas digital dan manajemen inventaris berbasis cloud. Pantau
                stok material dan arus kas secara real-time dari perangkat mana
                saja.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. ALUR SERAH TERIMA DIGITAL */}
      <section className="py-24 bg-white border-y border-slate-100">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <div className="text-center md:text-left mb-16 max-w-2xl">
            <h2 className="text-3xl font-extrabold text-slate-900 font-heading mb-4">
              Alur Serah Terima Digital
            </h2>
            <p className="text-slate-500 font-body text-lg">
              Proses operasional yang mulus dan transparan dari kolektor ke
              fasilitas Anda.
            </p>
          </div>

          <div className="relative">
            {/* Dashed Line Desktop */}
            <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-[2px] border-t-2 border-dashed border-slate-200 z-0"></div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
              {/* Step 1 */}
              <div className="bg-white flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-[#0f766e] text-white flex items-center justify-center font-bold font-heading mb-6 ring-8 ring-white">
                  1
                </div>
                <div className="text-[#0f766e] mb-5">
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
                    />
                  </svg>
                </div>
                <h4 className="text-lg font-bold font-heading text-slate-900 mb-2">
                  Kedatangan Kolektor
                </h4>
                <p className="text-slate-500 font-body text-[13px] px-4">
                  RVM Collector tiba membawa material terpilah.
                </p>
              </div>

              {/* Step 2 */}
              <div className="bg-white flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-eco-cyan text-white flex items-center justify-center font-bold font-heading mb-6 ring-8 ring-white">
                  2
                </div>
                <div className="text-eco-cyan mb-5">
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M3.75 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 013.75 9.375v-4.5zM3.75 14.625c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 01-1.125-1.125v-4.5zM13.5 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0113.5 9.375v-4.5z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M16.5 16.5h.008v.008h-.008v-.008zM13.5 16.5h.008v.008h-.008v-.008zM19.5 16.5h.008v.008h-.008v-.008zM13.5 13.5h.008v.008h-.008v-.008zM19.5 13.5h.008v.008h-.008v-.008zM16.5 19.5h.008v.008h-.008v-.008z"
                    />
                  </svg>
                </div>
                <h4 className="text-lg font-bold font-heading text-slate-900 mb-2">
                  Scan QR Handover
                </h4>
                <p className="text-slate-500 font-body text-[13px] px-4">
                  Verifikasi serah terima instan melalui scan kode QR di
                  aplikasi operasional.
                </p>
              </div>

              {/* Step 3 */}
              <div className="bg-white flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-[#16a34a] text-white flex items-center justify-center font-bold font-heading mb-6 ring-8 ring-white">
                  3
                </div>
                <div className="text-[#16a34a] mb-5">
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
                    />
                  </svg>
                </div>
                <h4 className="text-lg font-bold font-heading text-slate-900 mb-2">
                  Pembaruan Saldo Otomatis
                </h4>
                <p className="text-slate-500 font-body text-[13px] px-4">
                  Inventaris tercatat dan saldo kredit hub terupdate secara
                  otomatis dalam sistem.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FORMULIR TRANSFORMASI (CENTERED) */}
      <section
        id="form-transformasi"
        className="py-24 bg-[#eaf1fb] scroll-mt-10"
      >
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-white p-10 md:p-14 rounded-3xl shadow-lg border border-slate-100">
            <div className="mb-10">
              <h2 className="text-2xl md:text-3xl font-extrabold font-heading text-slate-900 mb-3">
                Mulai Transformasi Digital
              </h2>
              <p className="text-slate-500 font-body text-sm md:text-base">
                Isi formulir di bawah ini untuk berdiskusi dengan tim
                partnership B2B kami.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Row 1 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[11px] font-bold text-slate-700 font-heading mb-2 uppercase tracking-wide">
                    Nama Fasilitas / Perusahaan
                  </label>
                  <input
                    type="text"
                    name="namaFasilitas"
                    value={formData.namaFasilitas}
                    onChange={handleInputChange}
                    placeholder="Masukkan nama..."
                    className="w-full bg-slate-50 border border-slate-200 py-3.5 px-4 rounded-xl focus:outline-none focus:border-eco-cyan focus:ring-2 focus:ring-eco-cyan/20 transition-all text-sm font-body"
                    required
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-slate-700 font-heading mb-2 uppercase tracking-wide">
                    Tipe Fasilitas
                  </label>
                  <div className="relative">
                    <select
                      name="tipeFasilitas"
                      value={formData.tipeFasilitas}
                      onChange={handleInputChange}
                      className="w-full bg-slate-50 border border-slate-200 py-3.5 px-4 rounded-xl focus:outline-none focus:border-eco-cyan focus:ring-2 focus:ring-eco-cyan/20 transition-all text-sm font-body appearance-none"
                      required
                    >
                      <option value="Bank Sampah Induk">
                        Bank Sampah Induk
                      </option>
                      <option value="Bank Sampah Unit">Bank Sampah Unit</option>
                      <option value="TPS3R">TPS3R</option>
                      <option value="Pengepul">Pengepul</option>
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

              {/* Row 2 */}
              <div>
                <label className="block text-[11px] font-bold text-slate-700 font-heading mb-2 uppercase tracking-wide">
                  Lokasi Operasional
                </label>
                <input
                  type="text"
                  name="lokasiOperasional"
                  value={formData.lokasiOperasional}
                  onChange={handleInputChange}
                  placeholder="Kota atau Alamat lengkap..."
                  className="w-full bg-slate-50 border border-slate-200 py-3.5 px-4 rounded-xl focus:outline-none focus:border-eco-cyan focus:ring-2 focus:ring-eco-cyan/20 transition-all text-sm font-body"
                  required
                />
              </div>

              {/* Row 3 */}
              <div>
                <label className="block text-[11px] font-bold text-slate-700 font-heading mb-2 uppercase tracking-wide">
                  Nomor WhatsApp PIC
                </label>
                <input
                  type="tel"
                  name="whatsappPic"
                  value={formData.whatsappPic}
                  onChange={handleInputChange}
                  placeholder="+62
                  812-1416-1614"
                  className="w-full bg-slate-50 border border-slate-200 py-3.5 px-4 rounded-xl focus:outline-none focus:border-eco-cyan focus:ring-2 focus:ring-eco-cyan/20 transition-all text-sm font-body"
                  required
                />
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full bg-eco-cyan hover:bg-[#1eb5b1] text-white py-4 rounded-xl font-heading font-bold text-sm transition-all shadow-lg shadow-eco-cyan/20"
                >
                  Kirim Permintaan Mitra
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
