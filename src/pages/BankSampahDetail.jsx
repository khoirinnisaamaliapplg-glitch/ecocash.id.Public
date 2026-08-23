import React, { useEffect, useState } from "react";

export default function BankSampahDetail() {
  const [formData, setFormData] = useState({
    namaPengelola: "",
    namaBankSampah: "",
    noWhatsapp: "",
    alamatLengkap: "",
    estimasiKapasitas: "",
  });

  // Fungsi agar halaman otomatis di posisi atas saat baru dibuka
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
      "Terima kasih! Permintaan kemitraan Bank Sampah Anda telah kami terima. Tim kami akan segera menghubungi Anda.",
    );
  };

  return (
    <main className="w-full min-h-screen bg-white font-body text-slate-700">
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden bg-slate-50 border-b border-slate-100">
        <div className="absolute inset-0 z-0">
          <img
            src="img/bank-sampah-bg.jpg"
            alt="Fasilitas Mitra Bank Sampah"
            className="w-full h-full object-cover object-center"
            onError={(e) => {
              e.target.style.display = "none";
              e.target.parentElement.classList.add("bg-slate-200");
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 bg-slate-100 text-slate-600 px-4 py-2 rounded-full font-heading text-xs font-bold tracking-wider uppercase border border-slate-200 mb-6 shadow-sm">
              <svg
                className="w-4 h-4 text-eco-cyan"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              Mitra & Komunitas
            </span>

            <h1 className="text-4xl md:text-5xl lg:text-[54px] font-extrabold text-slate-900 font-heading leading-[1.2] mb-6">
              Digitalisasi & Skalakan <br className="hidden md:block" />
              Operasi Bank Sampah <br className="hidden md:block" />
              Bersama EcoCash
            </h1>

            <p className="text-base sm:text-lg text-slate-600 font-body mb-8 leading-relaxed max-w-xl">
              Bergabunglah dengan jaringan hub kami untuk mendapatkan akses ke
              teknologi pencatatan digital, dukungan fasilitas, dan pasar daur
              ulang berskala nasional.
            </p>

            {/* Tombol ini kini mengarah ke Form di bagian bawah halaman */}
            <a
              href="#form-kemitraan"
              className="inline-flex items-center gap-3 bg-eco-cyan hover:bg-[#1eb5b1] text-white px-8 py-4 rounded-xl font-heading font-bold text-[15px] transition-all transform hover:-translate-y-0.5 shadow-lg shadow-eco-cyan/30"
            >
              Bermitra Sebagai Hub
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* 2. VALUE PROPOSITION SECTION */}
      <section className="py-24 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 font-heading mb-4">
              Mengapa Menjadi Mitra Hub EcoCash?
            </h2>
            <p className="text-lg text-slate-600">
              Dukungan infrastruktur dan teknologi terpadu untuk memaksimalkan
              potensi pengumpulan bank sampah Anda.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-slate-50 p-10 rounded-3xl border border-slate-100 hover:border-eco-cyan/30 transition-colors group">
              <div className="w-16 h-16 bg-white text-eco-cyan rounded-2xl shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
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
                    d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold font-heading text-slate-900 mb-3">
                Sistem Digitalisasi Terpadu
              </h3>
              <p className="text-sm leading-relaxed">
                Tinggalkan pencatatan manual. Kelola inventaris dan transaksi
                nasabah secara otomatis dan real-time melalui dasbor aplikasi
                mitra.
              </p>
            </div>
            {/* Card 2 */}
            <div className="bg-slate-50 p-10 rounded-3xl border border-slate-100 hover:border-eco-cyan/30 transition-colors group">
              <div className="w-16 h-16 bg-white text-eco-cyan rounded-2xl shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
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
                    d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m8.25 3v6.75m0 0l-3-3m3 3l3-3M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold font-heading text-slate-900 mb-3">
                Dukungan Fasilitas Pintar
              </h3>
              <p className="text-sm leading-relaxed">
                Peluang mendapatkan dukungan pengadaan EcoCash Box atau
                timbangan terintegrasi IoT untuk meningkatkan volume
                pengumpulan.
              </p>
            </div>
            {/* Card 3 */}
            <div className="bg-slate-50 p-10 rounded-3xl border border-slate-100 hover:border-eco-cyan/30 transition-colors group">
              <div className="w-16 h-16 bg-white text-eco-cyan rounded-2xl shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
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
                    d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold font-heading text-slate-900 mb-3">
                Jalur Penjualan Terjamin
              </h3>
              <p className="text-sm leading-relaxed">
                Akses langsung ke jaringan Offtaker skala industri dengan
                jaminan serapan dan harga beli material yang transparan dan
                stabil.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. ALUR KEMITRAAN (SECTION BARU) */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold font-heading mb-4">
              Cara Mudah Bergabung
            </h2>
            <p className="text-slate-400">
              Hanya butuh 3 langkah untuk mendigitalisasi Bank Sampah Anda.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            {/* Garis Penghubung (Hanya tampil di Desktop) */}
            <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-0.5 bg-slate-700"></div>

            <div className="relative text-center z-10">
              <div className="w-24 h-24 mx-auto bg-slate-800 border-4 border-slate-900 rounded-full flex items-center justify-center text-eco-cyan text-2xl font-bold font-heading mb-6 shadow-xl">
                1
              </div>
              <h4 className="text-xl font-bold font-heading mb-2">
                Registrasi Form
              </h4>
              <p className="text-slate-400 text-sm">
                Isi formulir pendaftaran di bawah dengan data valid pengelola
                Bank Sampah.
              </p>
            </div>
            <div className="relative text-center z-10">
              <div className="w-24 h-24 mx-auto bg-slate-800 border-4 border-slate-900 rounded-full flex items-center justify-center text-eco-cyan text-2xl font-bold font-heading mb-6 shadow-xl">
                2
              </div>
              <h4 className="text-xl font-bold font-heading mb-2">
                Verifikasi & MoU
              </h4>
              <p className="text-slate-400 text-sm">
                Tim kami akan melakukan survei lokasi dan penandatanganan
                kesepakatan.
              </p>
            </div>
            <div className="relative text-center z-10">
              <div className="w-24 h-24 mx-auto bg-slate-800 border-4 border-slate-900 rounded-full flex items-center justify-center text-eco-cyan text-2xl font-bold font-heading mb-6 shadow-xl">
                3
              </div>
              <h4 className="text-xl font-bold font-heading mb-2">
                Mulai Beroperasi
              </h4>
              <p className="text-slate-400 text-sm">
                Akses dasbor digital Anda terbuka dan siap menerima setoran
                secara sistematis.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FORM KEMITRAAN (SECTION BARU SESUAI TARGET TOMBOL) */}
      <section id="form-kemitraan" className="py-24 bg-slate-50 scroll-mt-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-10">
          <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl shadow-slate-200/40 border border-slate-100">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-extrabold text-slate-900 font-heading mb-3">
                Mulai Kemitraan Hub
              </h2>
              <p className="text-slate-600">
                Lengkapi data berikut, dan tim operasional EcoCash akan segera
                menghubungi Anda.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-slate-700 font-heading mb-2">
                    Nama Pengelola / PIC
                  </label>
                  <input
                    type="text"
                    name="namaPengelola"
                    value={formData.namaPengelola}
                    onChange={handleInputChange}
                    placeholder="Masukkan nama lengkap"
                    className="w-full bg-slate-50 border border-slate-200 py-3 px-4 rounded-xl focus:outline-none focus:border-eco-primary focus:ring-2 focus:ring-eco-primary/20 transition-all text-sm"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 font-heading mb-2">
                    Nama Bank Sampah / Komunitas
                  </label>
                  <input
                    type="text"
                    name="namaBankSampah"
                    value={formData.namaBankSampah}
                    onChange={handleInputChange}
                    placeholder="Contoh: Bank Sampah Mekar Jaya"
                    className="w-full bg-slate-50 border border-slate-200 py-3 px-4 rounded-xl focus:outline-none focus:border-eco-primary focus:ring-2 focus:ring-eco-primary/20 transition-all text-sm"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-slate-700 font-heading mb-2">
                    Nomor WhatsApp Aktif
                  </label>
                  <input
                    type="tel"
                    name="noWhatsapp"
                    value={formData.noWhatsapp}
                    onChange={handleInputChange}
                    placeholder="Contoh: 08123456789"
                    className="w-full bg-slate-50 border border-slate-200 py-3 px-4 rounded-xl focus:outline-none focus:border-eco-primary focus:ring-2 focus:ring-eco-primary/20 transition-all text-sm"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 font-heading mb-2">
                    Estimasi Kapasitas / Bulan
                  </label>
                  <select
                    name="estimasiKapasitas"
                    value={formData.estimasiKapasitas}
                    onChange={handleInputChange}
                    className="w-full bg-slate-50 border border-slate-200 py-3 px-4 rounded-xl focus:outline-none focus:border-eco-primary focus:ring-2 focus:ring-eco-primary/20 transition-all text-sm"
                    required
                  >
                    <option value="">-- Pilih Estimasi --</option>
                    <option value="Kurang dari 100 Kg">
                      Kurang dari 100 Kg
                    </option>
                    <option value="100 Kg - 500 Kg">100 Kg - 500 Kg</option>
                    <option value="500 Kg - 1 Ton">500 Kg - 1 Ton</option>
                    <option value="Lebih dari 1 Ton">Lebih dari 1 Ton</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 font-heading mb-2">
                  Alamat Lengkap Lokasi
                </label>
                <textarea
                  name="alamatLengkap"
                  value={formData.alamatLengkap}
                  onChange={handleInputChange}
                  rows="3"
                  placeholder="Masukkan alamat lengkap beserta Kecamatan dan Kota..."
                  className="w-full bg-slate-50 border border-slate-200 py-3 px-4 rounded-xl focus:outline-none focus:border-eco-primary focus:ring-2 focus:ring-eco-primary/20 transition-all text-sm custom-scrollbar"
                  required
                ></textarea>
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full bg-eco-primary hover:opacity-90 text-white py-4 rounded-xl font-heading font-bold text-base transition-all shadow-lg shadow-eco-primary/20 flex items-center justify-center gap-2"
                >
                  Kirim Pengajuan Kemitraan
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.5"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
