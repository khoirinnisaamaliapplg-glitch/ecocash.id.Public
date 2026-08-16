import berita1 from "../../public/img/berita-1.png";
import berita2 from "../../public/img/berita-2.png";
import berita3 from "../../public/img/berita-3.png";
import berita4 from "../../public/img/berita-4.png";
import berita5 from "../../public/img/berita-5.png";
import berita6 from "../../public/img/berita-6.png";

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
      { label: "Request Custom RVM", url: "/request-rvm" },
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

// Data Berita
export const newsList = [
  {
    id: 1,
    img: berita1,
    category: "Inovasi",
    title: "Sampah Plastik Jadi Rupiah",
    desc: "Ecocash.id resmi meluncurkan aplikasi inovatif yang memungkinkan masyarakat menukarkan sampah plastik langsung...",
    content: `Ecocash.id resmi meluncurkan aplikasi inovatif yang memungkinkan masyarakat menukarkan sampah plastik langsung menjadi rupiah digital. Dengan teknologi AI canggih, pengguna dapat memindai sampah mereka melalui aplikasi, dan sistem akan secara otomatis menghitung nilai eco-refund yang dapat dicairkan ke e-wallet pilihan mereka.
    Aplikasi ini bertujuan untuk mendorong kesadaran lingkungan dan memberikan insentif ekonomi bagi masyarakat untuk berpartisipasi dalam program daur ulang. Dengan fitur pelacakan real-time, pengguna dapat melihat riwayat transaksi mereka, serta mendapatkan tips dan panduan tentang pengelolaan sampah yang lebih baik.`,
  },
  {
    id: 2,
    img: berita2,
    category: "Peluncuran",
    title: "Aplikasi Ecocash.id Resmi Rilis",
    desc: "Ecocash.id resmi meluncurkan aplikasi seluler pertamanya di Indonesia untuk mempermudah masyarakat...",
    content: `Ecocash.id resmi meluncurkan aplikasi seluler pertamanya di Indonesia untuk mempermudah masyarakat dalam menukarkan sampah menjadi nilai ekonomi. Aplikasi ini dilengkapi dengan fitur pemindaian barcode pada kemasan, yang memungkinkan pengguna untuk mengetahui nilai eco-refund dari sampah yang mereka miliki.
    Selain itu, aplikasi ini juga menyediakan peta lokasi Smart RVM dan Drop Box terdekat, sehingga pengguna dapat dengan mudah menemukan tempat untuk menukarkan sampah mereka. Dengan antarmuka yang user-friendly, Ecocash.id berharap dapat meningkatkan partisipasi masyarakat dalam program daur ulang dan mendukung ekonomi sirkular di Indonesia.`,
  },
  {
    id: 3,
    img: berita3,
    category: "Kolaborasi",
    title: "Ecocash.id Gandeng Bank Sampah",
    desc: "Ecocash.id mengumumkan kolaborasi strategis dengan jaringan bank sampah lokal guna memperluas jangkauan...",
    content: `Ecocash.id mengumumkan kolaborasi strategis dengan jaringan bank sampah lokal guna memperluas jangkauan program daur ulang di berbagai kota di Indonesia. Melalui kemitraan ini, masyarakat dapat menukarkan sampah mereka di bank sampah terdekat dan mendapatkan eco-refund yang dapat dicairkan melalui aplikasi Ecocash.id.
    Kolaborasi ini bertujuan untuk memberdayakan komunitas lokal dan meningkatkan kesadaran akan pentingnya pengelolaan sampah yang berkelanjutan. Dengan dukungan teknologi dari Ecocash.id, bank sampah dapat mengoptimalkan proses pengumpulan dan pemrosesan sampah, sehingga memberikan manfaat ekonomi bagi masyarakat sekaligus menjaga lingkungan.`,
  },
  {
    id: 4,
    img: berita4,
    category: "Ekspansi",
    title: "Perluas Jangkauan di Pulau Jawa",
    desc: "Ecocash.id kini hadir di lebih dari 100 titik di Pulau Jawa, memperluas akses masyarakat untuk menukarkan sampah...",
    content: `Ecocash.id kini hadir di lebih dari 100 titik di Pulau Jawa, memperluas akses masyarakat untuk menukarkan sampah menjadi eco-refund digital. Dengan penambahan lokasi Smart RVM dan Drop Box, masyarakat di berbagai kota kini dapat dengan mudah berpartisipasi dalam program daur ulang.
    Perluasan ini merupakan bagian dari komitmen Ecocash.id untuk mendukung ekonomi sirkular dan mengurangi dampak lingkungan dari sampah plastik. Masyarakat dapat menggunakan aplikasi Ecocash.id untuk menemukan lokasi terdekat, memeriksa jenis sampah yang diterima, dan menukarkan sampah mereka dengan cepat dan efisien.`,
  },
  {
    id: 5,
    img: berita5,
    category: "Peluncuran",
    title: "Ecocash Hadir di Kota Bandung",
    desc: "Ecocash.id kini hadir di Kota Bandung, memberikan kemudahan bagi masyarakat untuk menukarkan sampah...",
    content: `Ecocash.id kini hadir di Kota Bandung, memberikan kemudahan bagi masyarakat untuk menukarkan sampah menjadi eco-refund digital. Dengan peluncuran ini, warga Bandung dapat mengakses berbagai lokasi Smart RVM dan Drop Box yang tersebar di seluruh kota.
    Aplikasi Ecocash.id memungkinkan pengguna untuk memindai sampah mereka, mengetahui nilai eco-refund, dan mencairkannya ke e-wallet pilihan mereka. Inisiatif ini bertujuan untuk meningkatkan kesadaran lingkungan dan mendorong partisipasi aktif masyarakat dalam program daur ulang, sambil memberikan manfaat ekonomi bagi mereka yang berkontribusi pada pengelolaan sampah yang berkelanjutan.`,
  },
  {
    id: 6,
    img: berita6,
    category: "Peluncuran",
    title: "Ecocash Hadir di Kota Surabaya",
    desc: "Ecocash.id kini hadir di Kota Surabaya, memberikan kemudahan bagi masyarakat untuk menukarkan sampah...",
    content: `Ecocash.id kini hadir di Kota Surabaya, memberikan kemudahan bagi masyarakat untuk menukarkan sampah menjadi eco-refund digital. Dengan peluncuran ini, warga Surabaya dapat mengakses berbagai lokasi Smart RVM dan Drop Box yang tersebar di seluruh kota.
    Aplikasi Ecocash.id memungkinkan pengguna untuk memindai sampah mereka, mengetahui nilai eco-refund, dan mencairkannya ke e-wallet pilihan mereka. Inisiatif ini bertujuan untuk meningkatkan kesadaran lingkungan dan mendorong partisipasi aktif masyarakat dalam program daur ulang, sambil memberikan manfaat ekonomi bagi mereka yang berkontribusi pada pengelolaan sampah yang berkelanjutan.`,
  },
];
