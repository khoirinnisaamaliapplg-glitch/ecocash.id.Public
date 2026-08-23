import React, { useState, useEffect } from "react";

export default function MitraCollectorDetail() {
  // State untuk Kalkulator Interaktif
  const [jemputPerHari, setJemputPerHari] = useState(5);
  const [kgPerSesi, setKgPerSesi] = useState(10);

  // Asumsi harga rata-rata sampah campuran adalah Rp 2.000 / kg
  // Rumus: (Jemput per hari * Kg per sesi) * 30 Hari * Harga
  const potensiPenghasilan = jemputPerHari * kgPerSesi * 30 * 2000;

  // State untuk Form Pendaftaran
  const [formData, setFormData] = useState({
    nama: "",
    noWhatsapp: "",
    jenisKendaraan: "",
    domisili: "",
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
      "Pendaftaran Mitra Collector berhasil dikirim! Tim kami akan segera menghubungi Anda.",
    );
  };

  return (
    <main className="w-full min-h-screen bg-white font-body text-slate-700">
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            {/* Bagian Kiri: Teks & CTA */}
            <div className="max-w-xl">
              <h1 className="text-4xl md:text-5xl lg:text-[42px] font-extrabold text-slate-900 font-heading leading-tight mb-6">
                Kerja Fleksibel, <br />
                Penghasilan Pasti <br />
                Bersama EcoCash Partner
              </h1>
              <p className="text-base sm:text-lg text-slate-600 font-body mb-8 leading-relaxed">
                Bergabunglah dengan jaringan kolektor sampah digital pertama di
                Indonesia. Dapatkan akses ke ribuan titik penjemputan dan kelola
                penghasilan Anda secara transparan.
              </p>
              <a
                href="#form-daftar-collector"
                className="inline-flex items-center justify-center bg-eco-cyan hover:bg-[#1eb5b1] text-white px-8 py-4 rounded-xl font-heading font-bold text-sm transition-all transform hover:-translate-y-0.5 shadow-lg shadow-eco-cyan/30"
              >
                Daftar Sebagai Collector
              </a>
            </div>

            {/* Bagian Kanan: Mockup Aplikasi */}
            <div className="relative w-full flex justify-center lg:justify-end">
              <img
                src="img/app-mockup.png" // Pastikan ada gambar mockup aplikasi di folder public/img
                alt="EcoCash Partner App"
                className="w-full max-w-md h-auto rounded-3xl shadow-2xl object-cover"
                onError={(e) => {
                  e.target.style.display = "none";
                  e.target.parentElement.innerHTML = `<div class="w-full max-w-md h-80 bg-slate-200 rounded-3xl flex items-center justify-center text-slate-400 font-heading">Mockup Aplikasi</div>`;
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. FITUR KEUNGGULAN (3 KARTU) */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {/* Card 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-slate-100 flex flex-col hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-eco-cyan/10 text-eco-cyan rounded-full flex items-center justify-center mb-6">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold font-heading text-slate-900 mb-3">
                Order Jemput Otomatis
              </h3>
              <p className="text-slate-500 font-body text-sm leading-relaxed">
                Dapatkan notifikasi penjemputan terdekat secara real-time
                langsung ke smartphone Anda.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-slate-100 flex flex-col hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-eco-cyan/10 text-eco-cyan rounded-full flex items-center justify-center mb-6">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold font-heading text-slate-900 mb-3">
                Timbangan Digital Akurat
              </h3>
              <p className="text-slate-500 font-body text-sm leading-relaxed">
                Transparansi penuh dengan integrasi timbangan IoT untuk
                pencatatan berat yang akurat.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-slate-100 flex flex-col hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-eco-cyan/10 text-eco-cyan rounded-full flex items-center justify-center mb-6">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold font-heading text-slate-900 mb-3">
                Komisi Langsung Cair
              </h3>
              <p className="text-slate-500 font-body text-sm leading-relaxed">
                Tarik penghasilan Anda kapan saja melalui berbagai pilihan
                dompet digital dan bank.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. KALKULATOR ESTIMASI PENGHASILAN (INTERAKTIF) */}
      <section className="py-20 bg-slate-50 relative z-10">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-white rounded-3xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)] p-8 md:p-12 border border-slate-100">
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 font-heading text-center mb-10">
              Estimasi Penghasilan Bulanan
            </h2>

            <div className="space-y-8 mb-10">
              {/* Slider 1: Jumlah Penjemputan */}
              <div>
                <div className="flex justify-between items-center mb-3 text-sm font-bold font-heading text-slate-700">
                  <span>Jumlah Penjemputan per Hari</span>
                  <span className="text-eco-primary text-base">
                    {jemputPerHari}
                  </span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="20"
                  value={jemputPerHari}
                  onChange={(e) => setJemputPerHari(e.target.value)}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-eco-primary"
                />
              </div>

              {/* Slider 2: Rata-rata Kg per Sesi */}
              <div>
                <div className="flex justify-between items-center mb-3 text-sm font-bold font-heading text-slate-700">
                  <span>Rata-rata kg per Sesi</span>
                  <span className="text-eco-primary text-base">
                    {kgPerSesi} kg
                  </span>
                </div>
                <input
                  type="range"
                  min="5"
                  max="50"
                  step="5"
                  value={kgPerSesi}
                  onChange={(e) => setKgPerSesi(e.target.value)}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-eco-primary"
                />
              </div>
            </div>

            {/* Kotak Hasil Estimasi */}
            <div className="bg-[#f8fafc] rounded-2xl p-8 text-center border border-slate-100">
              <p className="text-xs font-bold tracking-widest text-slate-500 uppercase mb-3">
                Potensi Penghasilan
              </p>
              <h3 className="text-4xl md:text-5xl font-extrabold text-eco-cyan font-heading mb-3">
                {new Intl.NumberFormat("id-ID", {
                  style: "currency",
                  currency: "IDR",
                  maximumFractionDigits: 0,
                }).format(potensiPenghasilan)}
              </h3>
              <p className="text-[11px] text-slate-400 font-body">
                *Estimasi berdasarkan harga rata-rata campuran
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. PERSYARATAN BERGABUNG */}
      <section className="py-24 bg-white relative z-0">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-[#e2e8f0]/60 rounded-[2.5rem] p-10 md:p-16 text-center">
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 font-heading mb-16">
              Persyaratan Bergabung
            </h2>

            <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-4 relative">
              {/* Garis Penghubung (Hanya Desktop) */}
              <div className="hidden md:block absolute top-10 left-[20%] right-[20%] h-0.5 bg-slate-300 z-0"></div>

              {/* Syarat 1 */}
              <div className="relative z-10 w-full md:w-1/3 flex flex-col items-center">
                <div className="w-20 h-20 bg-white border border-eco-cyan/20 rounded-full flex items-center justify-center text-eco-cyan mb-4 shadow-sm">
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
                      d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z"
                    />
                  </svg>
                </div>
                <h4 className="font-bold font-heading text-slate-800">
                  KTP Asli
                </h4>
              </div>

              {/* Syarat 2 */}
              <div className="relative z-10 w-full md:w-1/3 flex flex-col items-center">
                <div className="w-20 h-20 bg-white border border-eco-cyan/20 rounded-full flex items-center justify-center text-eco-cyan mb-4 shadow-sm">
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
                <h4 className="font-bold font-heading text-slate-800">
                  Smartphone
                  <br />
                  Android/iOS
                </h4>
              </div>

              {/* Syarat 3 */}
              <div className="relative z-10 w-full md:w-1/3 flex flex-col items-center">
                <div className="w-20 h-20 bg-white border border-eco-cyan/20 rounded-full flex items-center justify-center text-eco-cyan mb-4 shadow-sm">
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
                <h4 className="font-bold font-heading text-slate-800">
                  Kendaraan Operasional
                  <br />
                  <span className="text-sm font-body font-normal text-slate-600">
                    (Motor/Mobil)
                  </span>
                </h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FORM PENDAFTARAN COLLECTOR (Target dari CTA Hero Section) */}
      <section
        id="form-daftar-collector"
        className="py-24 bg-slate-50 scroll-mt-20"
      >
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl shadow-slate-200/40 border border-slate-100">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-extrabold text-slate-900 font-heading mb-3">
                Mulai Perjalanan Anda
              </h2>
              <p className="text-slate-600">
                Isi data diri Anda di bawah ini dan jadilah bagian dari revolusi
                pengelolaan sampah.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-slate-700 font-heading mb-2">
                  Nama Lengkap (Sesuai KTP)
                </label>
                <input
                  type="text"
                  name="nama"
                  value={formData.nama}
                  onChange={handleInputChange}
                  placeholder="Masukkan nama lengkap"
                  className="w-full bg-slate-50 border border-slate-200 py-3 px-4 rounded-xl focus:outline-none focus:border-eco-primary focus:ring-2 focus:ring-eco-primary/20 transition-all text-sm"
                  required
                />
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
                    Jenis Kendaraan Operasional
                  </label>
                  <select
                    name="jenisKendaraan"
                    value={formData.jenisKendaraan}
                    onChange={handleInputChange}
                    className="w-full bg-slate-50 border border-slate-200 py-3 px-4 rounded-xl focus:outline-none focus:border-eco-primary focus:ring-2 focus:ring-eco-primary/20 transition-all text-sm"
                    required
                  >
                    <option value="">-- Pilih Kendaraan --</option>
                    <option value="Motor Pribadi">Motor Pribadi</option>
                    <option value="Motor Roda Tiga (Tossa/Viar)">
                      Motor Roda Tiga (Tossa/Viar)
                    </option>
                    <option value="Mobil Pick Up">Mobil Pick Up</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 font-heading mb-2">
                  Kota / Kabupaten Domisili
                </label>
                <input
                  type="text"
                  name="domisili"
                  value={formData.domisili}
                  onChange={handleInputChange}
                  placeholder="Contoh: Kota Bandung"
                  className="w-full bg-slate-50 border border-slate-200 py-3 px-4 rounded-xl focus:outline-none focus:border-eco-primary focus:ring-2 focus:ring-eco-primary/20 transition-all text-sm"
                  required
                />
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full bg-eco-cyan hover:bg-[#1eb5b1] text-white py-4 rounded-xl font-heading font-bold text-base transition-all shadow-lg shadow-eco-cyan/30 flex items-center justify-center gap-2"
                >
                  Kirim Pendaftaran
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
