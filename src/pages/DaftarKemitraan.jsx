import React, { useState, useEffect } from "react";

export default function DaftarKemitraan() {
  // State untuk form pendaftaran
  const [role, setRole] = useState("Collector");
  const [formData, setFormData] = useState({
    namaLengkap: "",
    nomorKtp: "",
    noWhatsapp: "",
    email: "",
    kota: "",
    kecamatan: "",
    jenisArmada: "Motor",
    persetujuan: false,
  });

  // Scroll otomatis ke atas saat halaman dimuat
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.persetujuan) {
      alert("Anda harus menyetujui syarat & ketentuan kemitraan.");
      return;
    }
    alert(
      `Pendaftaran sebagai ${role} berhasil dikirim! Tim kami akan memprosesnya dalam 1x24 jam.`,
    );
  };

  return (
    <main className="w-full min-h-screen bg-slate-50 font-body text-slate-700 relative overflow-hidden pb-24">
      {/* BACKGROUND DECORATION (Elegan & Modern) */}
      <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-[#e0f8f7]/60 to-slate-50 -z-10"></div>
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#06b6d4]/10 blur-[120px] rounded-full pointer-events-none -z-10"></div>

      <div className="max-w-4xl mx-auto px-6 pt-32 lg:pt-40">
        {/* HEADER SECTION */}
        <div className="text-center mb-10">
          <h2 className="text-sm font-bold text-[#06b6d4] tracking-widest uppercase mb-3">
            EcoCash.id
          </h2>
          <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 font-heading mb-4">
            Formulir Pendaftaran Kemitraan EcoCash
          </h1>
          <p className="text-slate-500 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            Bergabunglah dalam jaringan pengelolaan limbah cerdas kami dan
            jadikan lingkungan yang lebih bersih menjadi peluang bisnis yang
            menguntungkan.
          </p>
        </div>

        {/* ROLE SELECTOR (Segmented Control yang lebih modern dari kotak biasa) */}
        <div className="flex flex-col sm:flex-row bg-slate-200/60 p-1.5 rounded-2xl max-w-2xl mx-auto mb-10 shadow-inner">
          {["Collector", "Bank Sampah Hub", "Industri Recycler"].map((tab) => (
            <button
              key={tab}
              onClick={() => setRole(tab)}
              className={`flex-1 py-3 px-4 rounded-xl text-sm font-bold transition-all duration-300 ${
                role === tab
                  ? "bg-white text-[#06b6d4] shadow-md shadow-slate-200"
                  : "text-slate-500 hover:text-slate-700 hover:bg-slate-200/50"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* FORM CONTAINER (Glassmorphism & Soft Shadow) */}
        <div className="bg-white/90 backdrop-blur-xl p-8 md:p-12 rounded-[2.5rem] shadow-2xl shadow-slate-200/60 border border-white mb-12">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Row 1: Nama & NIK */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">
                  Nama Lengkap / PIC
                </label>
                <input
                  type="text"
                  name="namaLengkap"
                  value={formData.namaLengkap}
                  onChange={handleInputChange}
                  placeholder="Masukkan nama lengkap"
                  className="w-full bg-slate-50 border border-slate-200 py-3.5 px-4 rounded-xl focus:outline-none focus:border-[#06b6d4] focus:ring-2 focus:ring-[#06b6d4]/20 transition-all text-sm"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">
                  Nomor KTP/NIK
                </label>
                <input
                  type="text"
                  name="nomorKtp"
                  value={formData.nomorKtp}
                  onChange={handleInputChange}
                  placeholder="Masukkan nomor NIK"
                  className="w-full bg-slate-50 border border-slate-200 py-3.5 px-4 rounded-xl focus:outline-none focus:border-[#06b6d4] focus:ring-2 focus:ring-[#06b6d4]/20 transition-all text-sm"
                  required
                />
              </div>
            </div>

            {/* Row 2: WA & Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">
                  Nomor WhatsApp Aktif
                </label>
                <input
                  type="tel"
                  name="noWhatsapp"
                  value={formData.noWhatsapp}
                  onChange={handleInputChange}
                  placeholder="Contoh: 08123456789"
                  className="w-full bg-slate-50 border border-slate-200 py-3.5 px-4 rounded-xl focus:outline-none focus:border-[#06b6d4] focus:ring-2 focus:ring-[#06b6d4]/20 transition-all text-sm"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">
                  Alamat Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="nama@email.com"
                  className="w-full bg-slate-50 border border-slate-200 py-3.5 px-4 rounded-xl focus:outline-none focus:border-[#06b6d4] focus:ring-2 focus:ring-[#06b6d4]/20 transition-all text-sm"
                  required
                />
              </div>
            </div>

            {/* Row 3: Kota & Kecamatan */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">
                  Kota / Kabupaten Operasional
                </label>
                <div className="relative">
                  <select
                    name="kota"
                    value={formData.kota}
                    onChange={handleInputChange}
                    className="w-full bg-slate-50 border border-slate-200 py-3.5 px-4 rounded-xl focus:outline-none focus:border-[#06b6d4] focus:ring-2 focus:ring-[#06b6d4]/20 transition-all text-sm appearance-none"
                    required
                  >
                    <option value="" disabled>
                      Pilih Kota/Kabupaten
                    </option>
                    <option value="Jakarta Selatan">Jakarta Selatan</option>
                    <option value="Jakarta Pusat">Jakarta Pusat</option>
                    <option value="Bandung">Bandung</option>
                    <option value="Surabaya">Surabaya</option>
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
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">
                  Kecamatan
                </label>
                <input
                  type="text"
                  name="kecamatan"
                  value={formData.kecamatan}
                  onChange={handleInputChange}
                  placeholder="Masukkan nama kecamatan"
                  className="w-full bg-slate-50 border border-slate-200 py-3.5 px-4 rounded-xl focus:outline-none focus:border-[#06b6d4] focus:ring-2 focus:ring-[#06b6d4]/20 transition-all text-sm"
                  required
                />
              </div>
            </div>

            {/* Row 4: Jenis Armada */}
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">
                Jenis Armada
              </label>
              <div className="relative">
                <select
                  name="jenisArmada"
                  value={formData.jenisArmada}
                  onChange={handleInputChange}
                  className="w-full bg-slate-50 border border-slate-200 py-3.5 px-4 rounded-xl focus:outline-none focus:border-[#06b6d4] focus:ring-2 focus:ring-[#06b6d4]/20 transition-all text-sm appearance-none"
                  required
                >
                  <option value="Motor">Motor</option>
                  <option value="Motor Roda Tiga">Motor Roda Tiga</option>
                  <option value="Mobil Pick Up">Mobil Pick Up</option>
                  <option value="Truk Engkel">Truk Engkel</option>
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

            {/* Row 5: Checkbox Persetujuan */}
            <div className="pt-4 pb-2">
              <label className="flex items-start gap-3 cursor-pointer group">
                <div className="relative flex items-center justify-center mt-0.5">
                  <input
                    type="checkbox"
                    name="persetujuan"
                    checked={formData.persetujuan}
                    onChange={handleInputChange}
                    className="peer appearance-none w-5 h-5 border-2 border-slate-300 rounded-md checked:bg-[#06b6d4] checked:border-[#06b6d4] transition-colors cursor-pointer"
                  />
                  <svg
                    className="absolute w-3.5 h-3.5 text-white pointer-events-none opacity-0 peer-checked:opacity-100 transition-opacity"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="3"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <span className="text-sm text-slate-600 group-hover:text-slate-800 transition-colors">
                  Saya menyetujui syarat & ketentuan kemitraan EcoCash.
                </span>
              </label>
            </div>

            {/* Row 6: Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-eco-cyan to-[#1eb5b1] hover:from-[#0891b2] hover:to-[#0e7490] text-white py-4 rounded-xl font-heading font-bold text-sm transition-all transform hover:-translate-y-0.5 shadow-lg shadow-[#06b6d4]/30"
              >
                Kirim Pendaftaran Kemitraan
              </button>
            </div>
          </form>
        </div>

        {/* TRUST BADGES / FITUR BAWAH */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">
          <div className="flex items-center gap-3 text-slate-600 font-medium text-sm">
            <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-slate-800 border border-slate-100">
              {/* Ikon Jam/Proses Cepat */}
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            Proses Cepat 1x24 Jam
          </div>

          <div className="flex items-center gap-3 text-slate-600 font-medium text-sm">
            <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-slate-800 border border-slate-100">
              {/* Ikon Tanpa Biaya (Tag) */}
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            </div>
            Tanpa Biaya Pendaftaran
          </div>

          <div className="flex items-center gap-3 text-slate-600 font-medium text-sm">
            <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-slate-800 border border-slate-100">
              {/* Ikon Bimbingan Operasional (User Headset) */}
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M18.364 5.636a9 9 0 010 12.728m0 0l-2.829-2.829m2.829 2.829L21 21M15.536 8.464a5 5 0 010 7.072m0 0l-2.829-2.829m-4.243 2.829a4.978 4.978 0 01-1.414-2.83m-1.414 5.658a9 9 0 01-2.167-9.238m7.824 2.168a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </div>
            Bimbingan Operasional Penuh
          </div>
        </div>
      </div>
    </main>
  );
}
