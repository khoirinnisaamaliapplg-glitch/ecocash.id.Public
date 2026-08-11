// Data Menu Navigasi Utama & Submenu
export const NAV_ITEMS = [
  {
    name: "Cara Kerja",
    submenu: [
      { label: "Panduan Daur Ulang", url: "#guidelines" },
      { label: "Jenis Sampah Diterima", url: "#refund-types" },
      { label: "Tanya Jawab (FAQ)", url: "#faq" },
    ],
  },
  {
    name: "Solusi",
    submenu: [
      { label: "Smart RVM", url: "#smart-rvm" },
      { label: "EcoCash Box", url: "#revolution" },
      { label: "Smart Truck", url: "#smart-truck" },
      { label: "Layanan Bisnis", url: "#ecosystem" },
    ],
  },
  {
    name: "Edukasi",
    submenu: [
      { label: "Artikel Lingkungan", url: "#news" },
      { label: "Berita Terbaru", url: "#news" },
      { label: "Video Panduan", url: "#news" },
    ],
  },
  {
    name: "Partner",
    submenu: [
      { label: "Lokasi Drop Point", url: "#location-map" },
      { label: "Mitra Korporat", url: "#ecosystem" },
      { label: "Gabung Menjadi Mitra", url: "#community" },
    ],
  },
];

// Data FAQ Interaktif
export const FAQ_DATA = [
  {
    id: 1,
    q: "Bagaimana cara mendapatkan reward di EcoCash?",
    a: "Pengguna akan mendapatkan reward setelah sampah berhasil dipilah, dimasukkan ke mesin RVM/Drop Box, dan diverifikasi oleh sistem AI kami. Reward akan otomatis masuk ke akun Anda dalam bentuk saldo digital yang bisa dicairkan.",
  },
  {
    id: 2,
    q: "Apakah semua jenis sampah plastik diterima?",
    a: "Saat ini, kami berfokus pada botol plastik PET (seperti botol air mineral), kaleng aluminium, dan karton minuman UHT. Pastikan barcode pada kemasan masih utuh dan tidak diremukkan agar dapat dibaca oleh sensor pintar kami.",
  },
  {
    id: 3,
    q: "Bagaimana proses penjemputan sampah untuk bisnis?",
    a: "Untuk mitra bisnis dan korporat, kami menyediakan layanan Smart Truck. Anda dapat menjadwalkan penjemputan melalui aplikasi, dan armada kami akan datang ke lokasi Anda. Saldo akan dikreditkan setelah penimbangan digital selesai di tempat.",
  },
  {
    id: 4,
    q: "Ke mana saja saya bisa mencairkan Saldo EcoCash?",
    a: "Saldo EcoCash (Eco-Refund) sangat fleksibel! Anda dapat mentransfernya langsung ke E-Wallet (GoPay, OVO, DANA), rekening bank, mengubahnya menjadi voucher belanja minimarket, atau bahkan mendonasikannya ke lembaga sosial terdaftar.",
  },
];

// Data Lokasi RVM
export const LOCATION_DATA = [
  {
    id: 1,
    name: "Smart RVM Asia Afrika",
    address: "Jl. Asia Afrika No. 12, Bandung",
    status: "Tutup",
    statusColor: "text-rose-500 bg-rose-50",
    dotColor: "bg-rose-500",
    top: "45%",
    left: "35%",
    hours: "07.00 – 20.00 WIB",
  },
  {
    id: 2,
    name: "Smart RVM Braga",
    address: "Jl. Braga No. 45, Bandung",
    status: "Buka Sekarang",
    statusColor: "text-emerald-800 bg-emerald-100",
    dotColor: "bg-emerald-500",
    top: "55%",
    left: "50%",
    hours: "24 Jam",
  },
  {
    id: 3,
    name: "Smart RVM Dago",
    address: "Jl. Dago No. 88, Bandung",
    status: "Tutup",
    statusColor: "text-rose-500 bg-rose-50",
    dotColor: "bg-rose-500",
    top: "30%",
    left: "60%",
    hours: "08.00 – 17.00 WIB",
  },
  {
    id: 4,
    name: "Smart RVM Setiabudi",
    address: "Jl. Setiabudi No. 101, Bandung",
    status: "Buka Sekarang",
    statusColor: "text-emerald-800 bg-emerald-100",
    dotColor: "bg-emerald-500",
    top: "20%",
    left: "45%",
    hours: "06.00 – 22.00 WIB",
  },
];
