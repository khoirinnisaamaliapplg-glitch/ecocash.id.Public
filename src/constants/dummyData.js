// Data Menu Navigasi Utama & Submenu
export const NAV_ITEMS = [
  {
    name: "Cara Kerja",
    submenu: [
      {
        label: "Untuk Pengguna",
        text: "Mulai daur ulang dan kumpulkan poin",
        url: "/for-users",
      },
      {
        label: "Pengelolaan Lokasi",
        text: "Manajemen titik RVM dan Area",
        url: "/location-management",
      },
      {
        label: "Mitra Lapangan",
        text: "Proses penjemputan dan distribusi",
        url: "/field-partners",
      },
      {
        label: "Teknologi RVM & AI",
        text: "Cara kerja sensor dan sistem cerdas",
        url: "/technology",
      },
    ],
  },
  {
    name: "Solusi",
    submenu: [
      {
        label: "Koperasi & ESG",
        text: "Solusi keberlanjutan untuk perusahaan",
        url: "/cooperatives-esg",
      },
      {
        label: "Sekolah & Kampus",
        text: "Edukasi daur ulang di lingkungan pendidikan",
        url: "/schools-universities",
      },
      {
        label: "Ritel & Mall",
        text: "Integrasi RVM di pusat perbelanjaan",
        url: "/retail-malls",
      },
      {
        label: "Pemerintahan",
        text: "Pengelolaan sampah di lingkungan daerah",
        url: "/government",
      },
    ],
  },
  {
    name: "Edukasi",
    submenu: [
      {
        label: "Panduan Material",
        text: "Jenis sampah yang bisa didaur ulang",
        url: "/material-guides",
      },
      {
        label: "EcoCash Akademi",
        text: "Pelatihan dan sertifikasi daur ulang",
        url: "/academy",
      },
      {
        label: "Kalkulator Karbon",
        text: "Hitung jejak karbon",
        url: "/carbon-calculator",
      },
      {
        label: "Program Donasi",
        text: "Salurkan poin untuk kegiatan alam",
        url: "/donation-programs",
      },
    ],
  },
  {
    name: "Partner",
    submenu: [
      {
        label: "Mitra Penjemput",
        text: "Gabung sebagai mitra penjemput",
        url: "/mitra-penjemput",
      },
      {
        label: "Industri Recycler",
        text: "Mitra pengelolaan hasil daur ulang",
        url: "/industries",
      },
      {
        label: "Bank Sampah",
        text: "Jaringan pengelolaan sampah lokal",
        url: "/bank-sampah",
      },
      {
        label: "Daftar Kemitraan",
        text: "Informasi pendaftaran partner baru",
        url: "/partnership",
      },
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

// Data Mock Lokasi RVM & EcoCash Box
export const LOCATION_DATA = [
  {
    id: 1,
    machineCode: "MCH-001",
    name: "Machine Bandung 1",
    machineType: "CONTAINER",
    status: "OPERATING",
    fillLevel: "EMPTY",
    currentWeight: 0,
    maxWeight: 50,
    fillPercentage: 0,
    district: "Cipaganti",
    subdistrict: "Coblong",
    address:
      "Jl. Cihampelas No.160, Cipaganti, Kecamatan Coblong, Kota Bandung, Jawa Barat 40131",
    placeName: "Cihampelas Walk",
    latitude: -6.8949156,
    longitude: 107.604329,
    locationType: "MALL",
    accessType: "PUBLIC",
    description: "Tukarkan voucher di supermarket Cihampelas Walk.",
    isActive: true,
  },
  {
    id: 2,
    machineCode: "MCH-002",
    name: "Machine Alun-Alun",
    machineType: "STANDALONE",
    status: "OPERATING",
    fillLevel: "HALF_FULL",
    currentWeight: 25,
    maxWeight: 50,
    fillPercentage: 50,
    district: "Balonggede",
    subdistrict: "Regol",
    address: "Jl. Dalem Kaum, Balonggede, Regol, Kota Bandung",
    placeName: "Alun-Alun Bandung",
    latitude: -6.9213,
    longitude: 107.6071,
    locationType: "PUBLIC_SQUARE",
    accessType: "PUBLIC",
    description: "Berada di dekat gerbang masuk utama timur.",
    isActive: true,
  },
  {
    id: 3,
    machineCode: "MCH-003",
    name: "Machine Braga",
    machineType: "CONTAINER",
    status: "MAINTENANCE",
    fillLevel: "FULL",
    currentWeight: 50,
    maxWeight: 50,
    fillPercentage: 100,
    district: "Braga",
    subdistrict: "Sumur Bandung",
    address: "Jl. Braga No. 99-101, Sumur Bandung, Kota Bandung",
    placeName: "Braga CityWalk",
    latitude: -6.9175,
    longitude: 107.609,
    locationType: "MALL",
    accessType: "PUBLIC",
    description: "Mesin sedang dalam perawatan rutin.",
    isActive: false,
  },
];

// Data Berita
export const newsList = [
  {
    id: 1,
    author: "Tim EcoCash.id",
    date: "2024-06-15",
    img: "/img/berita-1.png",
    category: "Inovasi",
    title: "Sampah Plastik Jadi Rupiah",
    desc: "Ecocash.id resmi meluncurkan aplikasi inovatif yang memungkinkan masyarakat menukarkan sampah plastik langsung...",
    content: `Ecocash.id resmi meluncurkan aplikasi inovatif yang memungkinkan masyarakat menukarkan sampah plastik langsung menjadi rupiah digital. Dengan teknologi AI canggih, pengguna dapat memindai sampah mereka melalui aplikasi, dan sistem akan secara otomatis menghitung nilai eco-refund yang dapat dicairkan ke e-wallet pilihan mereka.
    Aplikasi ini bertujuan untuk mendorong kesadaran lingkungan dan memberikan insentif ekonomi bagi masyarakat untuk berpartisipasi dalam program daur ulang. Dengan fitur pelacakan real-time, pengguna dapat melihat riwayat transaksi mereka, serta mendapatkan tips dan panduan tentang pengelolaan sampah yang lebih baik.`,
  },
  {
    id: 2,
    author: "Tim EcoCash.id",
    date: "2024-06-20",
    img: "/img/berita-2.png",
    category: "Peluncuran",
    title: "Aplikasi Ecocash.id Resmi Rilis",
    desc: "Ecocash.id resmi meluncurkan aplikasi seluler pertamanya di Indonesia untuk mempermudah masyarakat...",
    content: `Ecocash.id resmi meluncurkan aplikasi seluler pertamanya di Indonesia untuk mempermudah masyarakat dalam menukarkan sampah menjadi nilai ekonomi. Aplikasi ini dilengkapi dengan fitur pemindaian barcode pada kemasan, yang memungkinkan pengguna untuk mengetahui nilai eco-refund dari sampah yang mereka miliki.
    Selain itu, aplikasi ini juga menyediakan peta lokasi Smart RVM dan Drop Box terdekat, sehingga pengguna dapat dengan mudah menemukan tempat untuk menukarkan sampah mereka. Dengan antarmuka yang user-friendly, Ecocash.id berharap dapat meningkatkan partisipasi masyarakat dalam program daur ulang dan mendukung ekonomi sirkular di Indonesia.`,
  },
  {
    id: 3,
    author: "Tim EcoCash.id",
    date: "2024-06-25",
    img: "/img/berita-3.png",
    category: "Kolaborasi",
    title: "Ecocash.id Gandeng Bank Sampah",
    desc: "Ecocash.id mengumumkan kolaborasi strategis dengan jaringan bank sampah lokal guna memperluas jangkauan...",
    content: `Ecocash.id mengumumkan kolaborasi strategis dengan jaringan bank sampah lokal guna memperluas jangkauan program daur ulang di berbagai kota di Indonesia. Melalui kemitraan ini, masyarakat dapat menukarkan sampah mereka di bank sampah terdekat dan mendapatkan eco-refund yang dapat dicairkan melalui aplikasi Ecocash.id.
    Kolaborasi ini bertujuan untuk memberdayakan komunitas lokal dan meningkatkan kesadaran akan pentingnya pengelolaan sampah yang berkelanjutan. Dengan dukungan teknologi dari Ecocash.id, bank sampah dapat mengoptimalkan proses pengumpulan dan pemrosesan sampah, sehingga memberikan manfaat ekonomi bagi masyarakat sekaligus menjaga lingkungan.`,
  },
  {
    id: 4,
    author: "Tim EcoCash.id",
    date: "2024-07-01",
    img: "/img/berita-4.png",
    category: "Ekspansi",
    title: "Perluas Jangkauan di Pulau Jawa",
    desc: "Ecocash.id kini hadir di lebih dari 100 titik di Pulau Jawa, memperluas akses masyarakat untuk menukarkan sampah...",
    content: `Ecocash.id kini hadir di lebih dari 100 titik di Pulau Jawa, memperluas akses masyarakat untuk menukarkan sampah menjadi eco-refund digital. Dengan penambahan lokasi Smart RVM dan Drop Box, masyarakat di berbagai kota kini dapat dengan mudah berpartisipasi dalam program daur ulang.
    Perluasan ini merupakan bagian dari komitmen Ecocash.id untuk mendukung ekonomi sirkular dan mengurangi dampak lingkungan dari sampah plastik. Masyarakat dapat menggunakan aplikasi Ecocash.id untuk menemukan lokasi terdekat, memeriksa jenis sampah yang diterima, dan menukarkan sampah mereka dengan cepat dan efisien.`,
  },
  {
    id: 5,
    author: "Tim EcoCash.id",
    date: "2024-07-10",
    img: "/img/berita-5.png",
    category: "Peluncuran",
    title: "Ecocash Hadir di Kota Bandung",
    desc: "Ecocash.id kini hadir di Kota Bandung, memberikan kemudahan bagi masyarakat untuk menukarkan sampah...",
    content: `Ecocash.id kini hadir di Kota Bandung, memberikan kemudahan bagi masyarakat untuk menukarkan sampah menjadi eco-refund digital. Dengan peluncuran ini, warga Bandung dapat mengakses berbagai lokasi Smart RVM dan Drop Box yang tersebar di seluruh kota.
    Aplikasi Ecocash.id memungkinkan pengguna untuk memindai sampah mereka, mengetahui nilai eco-refund, dan mencairkannya ke e-wallet pilihan mereka. Inisiatif ini bertujuan untuk meningkatkan kesadaran lingkungan dan mendorong partisipasi aktif masyarakat dalam program daur ulang, sambil memberikan manfaat ekonomi bagi mereka yang berkontribusi pada pengelolaan sampah yang berkelanjutan.`,
  },
  {
    id: 6,
    author: "Tim EcoCash.id",
    date: "2024-07-15",
    img: "/img/berita-6.png",
    category: "Peluncuran",
    title: "Ecocash Hadir di Kota Surabaya",
    desc: "Ecocash.id kini hadir di Kota Surabaya, memberikan kemudahan bagi masyarakat untuk menukarkan sampah...",
    content: `Ecocash.id kini hadir di Kota Surabaya, memberikan kemudahan bagi masyarakat untuk menukarkan sampah menjadi eco-refund digital. Dengan peluncuran ini, warga Surabaya dapat mengakses berbagai lokasi Smart RVM dan Drop Box yang tersebar di seluruh kota.
    Aplikasi Ecocash.id memungkinkan pengguna untuk memindai sampah mereka, mengetahui nilai eco-refund, dan mencairkannya ke e-wallet pilihan mereka. Inisiatif ini bertujuan untuk meningkatkan kesadaran lingkungan dan mendorong partisipasi aktif masyarakat dalam program daur ulang, sambil memberikan manfaat ekonomi bagi mereka yang berkontribusi pada pengelolaan sampah yang berkelanjutan.`,
  },
];

// EcoCash Academy Pages - Data Dummy Artikel
export const ARTICLES = [
  {
    id: 1,
    title: "Panduan Lengkap Memilah Plastik Tipe 1-7 di Rumah Tangga",
    category: "Edukasi Pemilahan",
    time: "5 min read",
    img: "/img/akademi-1.jpg",
  },
  {
    id: 2,
    title: "Memahami Cara Kerja Sensor Optik pada RVM EcoCash",
    category: "Teknologi AI & IoT",
    time: "7 min read",
    img: "/img/akademi-2.jpg",
  },
  {
    id: 3,
    title: "Bagaimana Bank Sampah Mekar Jaya Meningkatkan Efisiensi 300%",
    category: "Cerita Mitra",
    time: "6 min read",
    img: "/img/akademi-3.jpg",
  },
  {
    id: 4,
    title: "Nilai Ekonomis di Balik Tutup Botol HDPE: Jangan Dibuang...",
    category: "Edukasi Pemilahan",
    time: "4 min read",
    img: "/img/akademi-4.jpg",
  },
  {
    id: 5,
    title: "Menghitung Jejak Karbon Pribadi dengan Fitur Terbaru Aplikasi Kami",
    category: "Inovasi Sirkular",
    time: "5 min read",
    img: "/img/akademi-5.jpg",
  },
  {
    id: 6,
    title: "Dari Pengumpul ke Pemasok Industri: Perjalanan Pak Anton",
    category: "Cerita Mitra",
    time: "8 min read",
    img: "/img/akademi-6.jpg",
  },
];

// Kategori Artikel untuk Filter di Halaman EcoCash Academy
export const CATEGORIES = [
  "Semua",
  "Edukasi Pemilahan",
  "Teknologi AI & IoT",
  "Cerita Mitra",
];

// Data Dummy untuk simulasi chart
export const dummyChartData = [
  { month: "Apr", value: 30, label: "300 kg" },
  { month: "Mei", value: 45, label: "450 kg" },
  { month: "Jun", value: 35, label: "350 kg" },
  { month: "Jul", value: 60, label: "600 kg" },
  { month: "Ags", value: 80, label: "800 kg" },
  { month: "Sep", value: 95, label: "950 kg" },
];
