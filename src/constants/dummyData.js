// Data Menu Navigasi Utama & Submenu
export const NAV_ITEMS = [
  {
    name: "Cara Kerja",
    key: "howItWorks",
    submenu: [
      {
        key: "forUsers",
        label: "Untuk Pengguna",
        text: "Mulai daur ulang dan kumpulkan poin",
        url: "/for-users",
      },
      {
        key: "locationManagement",
        label: "Pengelolaan Lokasi",
        text: "Manajemen titik RVM dan Area",
        url: "/location-management",
      },
      {
        key: "fieldPartners",
        label: "Mitra Lapangan",
        text: "Proses penjemputan dan distribusi",
        url: "/field-partners",
      },
      {
        key: "technology",
        label: "Teknologi RVM & AI",
        text: "Cara kerja sensor dan sistem cerdas",
        url: "/technology",
      },
    ],
  },
  {
    name: "Solusi",
    key: "solutions",
    submenu: [
      {
        key: "cooperatives",
        label: "Koperasi & ESG",
        text: "Solusi keberlanjutan untuk perusahaan",
        url: "/solusi-perusahaan",
      },
      {
        key: "schools",
        label: "Sekolah & Kampus",
        text: "Edukasi daur ulang di lingkungan pendidikan",
        url: "/solusi-kampus",
      },
      {
        key: "retail",
        label: "Ritel & Mall",
        text: "Integrasi RVM di pusat perbelanjaan",
        url: "/solusi-retail",
      },
      {
        key: "government",
        label: "Pemerintahan",
        text: "Pengelolaan sampah di lingkungan daerah",
        url: "/solusi-pemerintah",
      },
    ],
  },
  {
    name: "Edukasi",
    key: "education",
    submenu: [
      {
        key: "materialGuides",
        label: "Panduan Material",
        text: "Jenis sampah yang bisa didaur ulang",
        url: "/material-guides",
      },
      {
        key: "academy",
        label: "EcoCash Akademi",
        text: "Pelatihan dan sertifikasi daur ulang",
        url: "/academy",
      },
      {
        key: "carbon",
        label: "Kalkulator Karbon",
        text: "Hitung jejak karbon",
        url: "/carbon-calculator",
      },
      {
        key: "donation",
        label: "Program Donasi",
        text: "Salurkan poin untuk kegiatan alam",
        url: "/donation-programs",
      },
    ],
  },
  {
    name: "Partner",
    key: "partner",
    submenu: [
      {
        key: "pickupPartner",
        label: "Mitra Penjemput",
        text: "Gabung sebagai mitra penjemput",
        url: "/mitra-penjemput",
      },
      {
        key: "recycler",
        label: "Industri Recycler",
        text: "Mitra pengelolaan hasil daur ulang",
        url: "/industries",
      },
      {
        key: "wasteBank",
        label: "Bank Sampah",
        text: "Jaringan pengelolaan sampah lokal",
        url: "/bank-sampah",
      },
      {
        key: "partnership",
        label: "Daftar Kemitraan",
        text: "Informasi pendaftaran partner baru",
        url: "/daftar-kemitraan",
      },
    ],
  },
  {
    name: "Marketplace",
    key: "marketplace",
    url: "https://marketplace.ecocash.id",
  },
];

// Data FAQ Interaktif
export const FAQ_DATA_I18N = {
  id: [
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
  ],
  en: [
    {
      id: 1,
      q: "How do I earn rewards on EcoCash?",
      a: "Users earn rewards after sorting recyclables, depositing them into RVM units/Drop Boxes, and passing AI verification. Rewards are credited directly to your digital balance.",
    },
    {
      id: 2,
      q: "Are all types of plastic waste accepted?",
      a: "Currently, we focus on PET plastic bottles, aluminum cans, and UHT beverage cartons. Ensure barcodes are intact and containers are not crushed so our optical sensors can verify them.",
    },
    {
      id: 3,
      q: "How does the commercial waste pickup process work?",
      a: "For corporate and enterprise partners, we offer Smart Truck logistics. Schedule pickups via the mobile app, and our fleet will collect on-site. Balances are credited upon digital scale verification.",
    },
    {
      id: 4,
      q: "Where can I cash out my EcoCash balance?",
      a: "EcoCash rewards are highly flexible! You can transfer directly to e-wallets (GoPay, OVO, DANA), bank accounts, redeem shopping vouchers, or donate to verified charity foundations.",
    },
  ],
  zh: [
    {
      id: 1,
      q: "如何在 EcoCash 获取回收奖励？",
      a: "用户将废弃物分类投放至智能回收机 (RVM) 或投放箱，经 AI 系统质检后即可自动获得奖励，资金秒级汇入您的数字账户。",
    },
    {
      id: 2,
      q: "是否接收所有类型的塑料废品？",
      a: "目前主要支持 PET 塑料瓶、食品铝制易拉罐及无菌利乐包装盒。请保持瓶身未被压扁且外包装条码清晰完好，以供传感器准确识别。",
    },
    {
      id: 3,
      q: "面向企业的上门回收流程是怎样的？",
      a: "针对企业与园区伙伴，我们提供智能运力清运服务。通过手机应用预约排程，专业车队上门清运并在完成数字地磅核验后即刻结算账款。",
    },
    {
      id: 4,
      q: "EcoCash 余额支持哪些提现或消费渠道？",
      a: "绿色返利极其灵活！支持一键转账至主流电子钱包（GoPay、OVO、DANA）、银行账户，兑换商超消费抵用券，或直接捐赠给认证的公益组织。",
    },
  ],
};

export const getLocalizedFaqData = (lang = "id") =>
  FAQ_DATA_I18N[lang] || FAQ_DATA_I18N.id;
export const FAQ_DATA = FAQ_DATA_I18N.id;

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
export const NEWS_LIST_I18N = {
  id: [
    {
      id: 1,
      author: "Tim EcoCash.id",
      date: "15 Jun 2026",
      img: "/img/berita-1.png",
      category: "Inovasi",
      title: "Sampah Plastik Jadi Rupiah",
      desc: "Ecocash.id meluncurkan aplikasi yang memungkinkan masyarakat menukarkan sampah plastik menjadi rupiah digital...",
    },
    {
      id: 2,
      author: "Tim EcoCash.id",
      date: "20 Jun 2026",
      img: "/img/berita-2.png",
      category: "Peluncuran",
      title: "Aplikasi Ecocash.id Resmi Rilis",
      desc: "Ecocash.id meluncurkan aplikasi seluler untuk mempermudah masyarakat dalam menukarkan sampah bernilai ekonomi...",
    },
    {
      id: 3,
      author: "Tim EcoCash.id",
      date: "25 Jun 2026",
      img: "/img/berita-3.png",
      category: "Kolaborasi",
      title: "Ecocash.id Gandeng Bank Sampah",
      desc: "Ecocash.id mengumumkan kolaborasi strategis dengan jaringan bank sampah lokal guna memperluas jangkauan program daur ulang...",
    },
  ],
  en: [
    {
      id: 1,
      author: "EcoCash Team",
      date: "Jun 15, 2026",
      img: "/img/berita-1.png",
      category: "Innovation",
      title: "Turning Plastic Waste into Digital Currency",
      desc: "EcoCash.id officially launches its smart platform allowing citizens to convert recyclable plastics into digital balance...",
    },
    {
      id: 2,
      author: "EcoCash Team",
      date: "Jun 20, 2026",
      img: "/img/berita-2.png",
      category: "Release",
      title: "EcoCash.id Mobile App Officially Released",
      desc: "EcoCash launches its mobile client, bringing streamlined waste deposits and digital wallet rewards to smart cities...",
    },
    {
      id: 3,
      author: "EcoCash Team",
      date: "Jun 25, 2026",
      img: "/img/berita-3.png",
      category: "Collaboration",
      title: "EcoCash.id Joins Hands with Local Waste Banks",
      desc: "EcoCash announces a strategic framework with community recycling hubs to scale transparent circular logistics...",
    },
  ],
  zh: [
    {
      id: 1,
      author: "EcoCash 团队",
      date: "2026年6月15日",
      img: "/img/berita-1.png",
      category: "创新成果",
      title: "将塑料废弃物转化为数字绿色资产",
      desc: "EcoCash.id 正式上线智慧回收平台，赋能公众将日常可回收包装直接转化为数字现金返利...",
    },
    {
      id: 2,
      author: "EcoCash 团队",
      date: "2026年6月20日",
      img: "/img/berita-2.png",
      category: "官方发布",
      title: "EcoCash.id 移动端应用正式在各大商城上线",
      desc: "EcoCash 推出全新移动端应用，将智能投瓶、实时称重与钱包提现融为一体，助力智慧都市建设...",
    },
    {
      id: 3,
      author: "EcoCash 团队",
      date: "2026年6月25日",
      img: "/img/berita-3.png",
      category: "战略协同",
      title: "EcoCash.id 携手社区环保银行展开深度合作",
      desc: "EcoCash 宣布与基层环保回收网络建立紧密协同，依托物联网技术升级传统逆向物流体系...",
    },
  ],
};

export const getLocalizedNewsList = (lang = "id") =>
  NEWS_LIST_I18N[lang] || NEWS_LIST_I18N.id;
export const newsList = NEWS_LIST_I18N.id;

// ==========================================
// DATA ARTIKEL AKADEMI MULTI-BAHASA (FALLBACK AMAN)
// ==========================================
export const ARTICLES_I18N = {
  id: [
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
      title:
        "Menghitung Jejak Karbon Pribadi dengan Fitur Terbaru Aplikasi Kami",
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
  ],
  en: [
    {
      id: 1,
      title: "Complete Guide to Sorting Types 1-7 Plastics at Home",
      category: "Sorting Education",
      time: "5 min read",
      img: "/img/akademi-1.jpg",
    },
    {
      id: 2,
      title: "Understanding Optical Sensor Mechanisms on EcoCash RVMs",
      category: "AI & IoT Tech",
      time: "7 min read",
      img: "/img/akademi-2.jpg",
    },
    {
      id: 3,
      title: "How Mekar Jaya Waste Bank Boosted Sorting Efficiency by 300%",
      category: "Partner Stories",
      time: "6 min read",
      img: "/img/akademi-3.jpg",
    },
    {
      id: 4,
      title: "The Economic Value of HDPE Bottle Caps: Do Not Discard...",
      category: "Sorting Education",
      time: "4 min read",
      img: "/img/akademi-4.jpg",
    },
    {
      id: 5,
      title: "Calculating Personal Carbon Footprints with Our Latest Feature",
      category: "Circular Innovation",
      time: "5 min read",
      img: "/img/akademi-5.jpg",
    },
    {
      id: 6,
      title:
        "From Independent Collector to Industrial Supplier: Anton's Journey",
      category: "Partner Stories",
      time: "8 min read",
      img: "/img/akademi-6.jpg",
    },
  ],
  zh: [
    {
      id: 1,
      title: "家庭 1-7 类可回收塑料精细化分类操作全指南",
      category: "分类科普",
      time: "5 分钟阅读",
      img: "/img/akademi-1.jpg",
    },
    {
      id: 2,
      title: "深度解析 EcoCash 智能回收机内部高精光学传感器运作原理",
      category: "AI与物联网技术",
      time: "7 分钟阅读",
      img: "/img/akademi-2.jpg",
    },
    {
      id: 3,
      title: "美卡尔再生物料分拣中枢如何实现运营吞吐能效提升 300%",
      category: "伙伴故事",
      time: "6 分钟阅读",
      img: "/img/akademi-3.jpg",
    },
    {
      id: 4,
      title: "不容忽视的 HDPE 高密度聚乙烯瓶盖隐形工业再生价值",
      category: "分类科普",
      time: "4 分钟阅读",
      img: "/img/akademi-4.jpg",
    },
    {
      id: 5,
      title: "依托全新碳足迹核算模型，精准评估个人减排正向贡献",
      category: "循环科技创新",
      time: "5 分钟阅读",
      img: "/img/akademi-5.jpg",
    },
    {
      id: 6,
      title: "从一线流动巡检员蜕变为工业级供料商：安东的低碳创富历程",
      category: "伙伴故事",
      time: "8 分钟阅读",
      img: "/img/akademi-6.jpg",
    },
  ],
};

export const getLocalizedArticles = (lang = "id") =>
  ARTICLES_I18N[lang] || ARTICLES_I18N.id;
export const ARTICLES = ARTICLES_I18N.id; // Untuk backward compatibility

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

// Data Dummy Customer Stories (Konteks EcoCash)
export const CUSTOMER_STORIES = [
  {
    id: 1,
    name: "Simon Amour",
    role: "TECHNICAL DIRECTOR",
    image: "img/avatar-1.jpg",
    text: "Vestibulum morbi blandit cursus risus. Augue neque gravida in fermentum et sollicitudin ac orci phasellus. Massa massa ultricies.",
    rating: 5,
  },
  {
    id: 2,
    name: "Robbie Lee",
    role: "FOUNDER DIRECTOR",
    image: "img/avatar-2.jpg",
    text: "Vestibulum morbi blandit cursus risus. Augue neque gravida in fermentum et sollicitudin ac orci phasellus. Massa massa ultricies.",
    rating: 5,
  },
  {
    id: 3,
    name: "Emma Aria",
    role: "SENIOR TECHNICIAN",
    image: "img/avatar-3.jpg",
    text: "Vestibulum morbi blandit cursus risus. Augue neque gravida in fermentum et sollicitudin ac orci phasellus. Massa massa ultricies.",
    rating: 5,
  },
  {
    id: 4,
    name: "Lopes Mads",
    role: "GENETIC SPECIALIST",
    image: "img/avatar-4.jpg",
    text: "Vestibulum morbi blandit cursus risus. Augue neque gravida in fermentum et sollicitudin ac orci phasellus. Massa massa ultricies.",
    rating: 5,
  },
  {
    id: 5,
    name: "Stellar Jade",
    role: "SENIOR TECHNICIAN",
    image: "img/avatar-5.jpg",
    text: "Vestibulum morbi blandit cursus risus. Augue neque gravida in fermentum et sollicitudin ac orci phasellus. Massa massa ultricies.",
    rating: 5,
  },
  {
    id: 6,
    name: "Molly Rissa",
    role: "GENETIC SPECIALIST",
    image: "img/avatar-6.jpg",
    text: "Vestibulum morbi blandit cursus risus. Augue neque gravida in fermentum et sollicitudin ac orci phasellus. Massa massa ultricies.",
    rating: 5,
  },
];

// DATA DUMMY MATERIAL (Untuk Simulasi Search Engine)
export const MATERIAL_DATA = [
  {
    id: 1,
    name: "Botol Aqua / Le Minerale",
    category: "Botol Plastik PET (Bening)",
    status: "Diterima",
    icon: "check",
  },
  {
    id: 2,
    name: "Botol Sprite / Pocari",
    category: "Botol Plastik PET (Warna/Bening)",
    status: "Diterima",
    icon: "check",
  },
  {
    id: 3,
    name: "Kaleng Coca Cola / Bear Brand",
    category: "Kaleng Minuman Aluminium",
    status: "Diterima",
    icon: "check",
  },
  {
    id: 4,
    name: "Botol Shampo / Sabun Cair",
    category: "Botol Plastik HDPE",
    status: "Diterima",
    icon: "check",
  },
  {
    id: 5,
    name: "Kemasan Saset Kopi / Mie Instan",
    category: "Plastik Saset/Pouch",
    status: "Ditolak",
    icon: "cross",
    reason: "Mesin tidak dapat memproses plastik lembaran/fleksibel.",
  },
  {
    id: 6,
    name: "Botol Bekas Minyak Goreng",
    category: "Botol Kotor/Berminyak",
    status: "Ditolak",
    icon: "cross",
    reason: "Kontaminasi minyak merusak kualitas daur ulang.",
  },
  {
    id: 7,
    name: "Galon Air Minum (Aqua/Le Minerale)",
    category: "Galon > 3L",
    status: "Ditolak",
    icon: "cross",
    reason: "Ukuran melebihi kapasitas lubang masuk mesin (maksimal 3L).",
  },
  {
    id: 8,
    name: "Botol Kaca Sirup / Bir / Kecap",
    category: "Botol Kaca",
    status: "Ditolak",
    icon: "cross",
    reason: "RVM kami belum mendukung material kaca.",
  },
  {
    id: 9,
    name: "Kotak Susu Ultra / Teh Kotak",
    category: "Karton Minuman (Tetra Pak)",
    status: "Ditolak",
    icon: "cross",
    reason: "Material komposit berlapis belum dapat diproses RVM ini.",
  },
];
