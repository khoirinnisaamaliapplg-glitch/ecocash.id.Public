import React, { useState } from "react";

export default function CustomRequestForm() {
  const [formData, setFormData] = useState({
    instansi: "",
    warnaUtama: "#0ea5e9",
    temaIlustrasi: "Edukasi & Anak Sekolah",
    detailIlustrasi: "",
    logoFile: null,
    namaKontak: "",
    nomorWa: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logika pengiriman data ke WhatsApp atau API Backend nantinya
    alert(
      "Request kustomisasi berhasil dikirim! Tim kami akan segera menghubungi Anda.",
    );
  };

  return (
    <section
      id="request-alat"
      className="max-w-7xl mx-auto px-6 lg:px-10 py-24"
    >
      <div className="mb-12 text-center max-w-3xl mx-auto">
        <span className="inline-flex items-center gap-2 bg-orange-50 text-orange-700 px-4 py-2 rounded-full font-heading text-sm font-semibold border border-orange-100 mb-4">
          <span className="text-[#f97316] text-lg">🎨</span> Request Custom RVM
        </span>
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 font-heading mb-4">
          Rancang Mesin Sesuai{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#064e3b] to-[#0ea5e9]">
            Karakteristik Anda
          </span>
        </h2>
        <p className="text-lg text-slate-600 font-body">
          Sesuaikan warna, pasang logo instansi, dan pilih tema ilustrasi mesin
          EcoCash agar selaras dengan lingkungan, budaya, atau identitas visual
          instansi Anda.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Kolom Kiri: Form Request (8 Kolom) */}
        <div className="lg:col-span-7 bg-white p-8 md:p-10 rounded-3xl shadow-xl shadow-slate-200/40 border border-slate-100">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Bagian 1: Data Instansi & Warna */}
            <div>
              <h3 className="text-xl font-bold font-heading text-slate-900 mb-4 border-b border-slate-100 pb-2">
                1. Identitas & Warna Dasar
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-slate-700 font-heading mb-2">
                    Kategori Instansi
                  </label>
                  <select
                    name="instansi"
                    onChange={handleInputChange}
                    className="w-full bg-slate-50 border border-slate-200 text-slate-700 py-3 px-4 rounded-xl focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 transition-all font-body text-sm"
                    required
                  >
                    <option value="">-- Pilih Instansi --</option>
                    <option value="Sekolah / Universitas">
                      Sekolah / Universitas
                    </option>
                    <option value="Pemerintah Daerah / Desa">
                      Pemerintah Daerah / Desa
                    </option>
                    <option value="Perusahaan Swasta (CSR)">
                      Perusahaan Swasta (CSR)
                    </option>
                    <option value="Komunitas / Fasilitas Umum">
                      Komunitas / Fasilitas Umum
                    </option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 font-heading mb-2">
                    Warna Utama Mesin
                  </label>
                  <div className="flex items-center gap-4">
                    <input
                      type="color"
                      name="warnaUtama"
                      value={formData.warnaUtama}
                      onChange={handleInputChange}
                      className="h-12 w-16 p-1 bg-slate-50 border border-slate-200 rounded-xl cursor-pointer"
                    />
                    <span className="text-sm font-body text-slate-500 bg-slate-100 px-3 py-1.5 rounded-lg border border-slate-200">
                      HEX: {formData.warnaUtama.toUpperCase()}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bagian 2: Tema Ilustrasi (Mural) */}
            <div>
              <h3 className="text-xl font-bold font-heading text-slate-900 mb-4 border-b border-slate-100 pb-2">
                2. Desain Ilustrasi (Side Panel)
              </h3>

              <div className="mb-4">
                <label className="block text-sm font-bold text-slate-700 font-heading mb-2">
                  Pilih Tema Besar
                </label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {[
                    "Edukasi & Anak Sekolah",
                    "Budaya & Landmark Lokal",
                    "Go Green & Alam",
                    "Bebas / Custom",
                  ].map((tema) => (
                    <label
                      key={tema}
                      className={`cursor-pointer border rounded-xl p-3 text-center transition-all ${formData.temaIlustrasi === tema ? "border-teal-500 bg-teal-50/50 shadow-sm text-teal-700 font-bold" : "border-slate-200 text-slate-600 hover:bg-slate-50"}`}
                    >
                      <input
                        type="radio"
                        name="temaIlustrasi"
                        value={tema}
                        checked={formData.temaIlustrasi === tema}
                        onChange={handleInputChange}
                        className="hidden"
                      />
                      <span className="text-xs font-heading">{tema}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 font-heading mb-2">
                  Jelaskan Detail Ilustrasi yang Diinginkan
                </label>
                <textarea
                  name="detailIlustrasi"
                  onChange={handleInputChange}
                  rows="3"
                  placeholder="Contoh: Kami dari Pemkot Bandung. Kami ingin ilustrasi warga sedang membuang sampah dengan latar belakang Gedung Sate dan Jembatan Pasupati..."
                  className="w-full bg-slate-50 border border-slate-200 text-slate-700 py-3 px-4 rounded-xl focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 transition-all font-body text-sm custom-scrollbar"
                ></textarea>
              </div>
            </div>

            {/* Bagian 3: Unggah Logo */}
            <div>
              <h3 className="text-xl font-bold font-heading text-slate-900 mb-4 border-b border-slate-100 pb-2">
                3. Logo Instansi (Opsional)
              </h3>
              <div className="border-2 border-dashed border-slate-300 rounded-2xl p-6 flex flex-col items-center justify-center bg-slate-50 hover:bg-slate-100 transition-colors cursor-pointer relative">
                <input
                  type="file"
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  accept="image/png, image/svg+xml"
                />
                <svg
                  className="w-8 h-8 text-slate-400 mb-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                  />
                </svg>
                <p className="text-sm font-bold font-heading text-slate-700">
                  Klik atau Drag file logo di sini
                </p>
                <p className="text-xs text-slate-500 font-body mt-1">
                  Format wajib PNG (Transparan) atau SVG. Maks 5MB.
                </p>
              </div>
            </div>

            {/* Bagian 4: Kontak Info & Submit */}
            <div className="bg-sky-50/50 p-6 rounded-2xl border border-sky-100">
              <h3 className="text-lg font-bold font-heading text-slate-900 mb-4">
                4. Informasi Kontak Pemesan
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <input
                  type="text"
                  name="namaKontak"
                  onChange={handleInputChange}
                  placeholder="Nama Lengkap / PIC"
                  className="w-full bg-white border border-slate-200 text-slate-700 py-3 px-4 rounded-xl font-body text-sm outline-none focus:border-[#0ea5e9]"
                  required
                />
                <input
                  type="tel"
                  name="nomorWa"
                  onChange={handleInputChange}
                  placeholder="Nomor WhatsApp (Cth: 0812...)"
                  className="w-full bg-white border border-slate-200 text-slate-700 py-3 px-4 rounded-xl font-body text-sm outline-none focus:border-[#0ea5e9]"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#064e3b] hover:bg-[#043428] text-white py-4 rounded-xl font-heading font-bold text-base transition-all transform hover:-translate-y-0.5 shadow-lg shadow-emerald-900/20 flex items-center justify-center gap-2"
              >
                <span>Kirim Permintaan Custom Desain</span>
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

        {/* Kolom Kanan: Panduan Visual (5 Kolom) */}
        <div className="lg:col-span-5 relative lg:sticky lg:top-28">
          <div className="bg-slate-900 rounded-3xl p-6 shadow-2xl border border-slate-800 overflow-hidden relative">
            {/* Dekorasi Glow */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#0ea5e9]/20 blur-3xl rounded-full -z-0"></div>

            <h3 className="text-white font-heading font-bold text-xl mb-4 relative z-10 flex items-center gap-2">
              Panduan Area Kustomisasi
            </h3>

            <div className="relative z-10 rounded-2xl overflow-hidden border border-slate-700 mb-5 group">
              <img
                src={"img/rvm.png"}
                alt="Referensi Mesin RVM"
                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
              />

              {/* Pointer Tooltips Melayang (Simulasi Area) */}
              <div className="absolute top-8 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-sm text-slate-900 text-[10px] font-bold px-2 py-1 rounded-md shadow-lg border border-slate-200 flex items-center gap-1 animate-bounce">
                <span className="w-2 h-2 rounded-full bg-[#f97316]"></span> Top
                Banner
              </div>
              <div className="absolute bottom-12 right-8 bg-white/90 backdrop-blur-sm text-slate-900 text-[10px] font-bold px-2 py-1 rounded-md shadow-lg border border-slate-200 flex items-center gap-1 animate-pulse">
                <span className="w-2 h-2 rounded-full bg-[#0ea5e9]"></span> Side
                Panel (Ilustrasi)
              </div>
            </div>

            <ul className="space-y-3 relative z-10 text-sm font-body text-slate-300">
              <li className="flex items-start gap-3">
                <span className="text-[#0ea5e9] mt-0.5">■</span>
                <p>
                  <strong className="text-white">
                    Top Banner & Layar Depan:
                  </strong>{" "}
                  Area ideal untuk menempatkan Logo Instansi dan Slogan
                  (Tagline) kampanye Anda.
                </p>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#0ea5e9] mt-0.5">■</span>
                <p>
                  <strong className="text-white">
                    Side Panel Kanan & Kiri:
                  </strong>{" "}
                  Area kanvas luas untuk mural/ilustrasi tematik (misal: gambar
                  landmark kota atau anak sekolah).
                </p>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-eco-accent mt-0.5">★</span>
                <p>
                  <strong className="text-white">Warna Rangka:</strong> Warna
                  dasar besi kontainer dapat disesuaikan dengan warna identitas
                  "brand" Anda.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
