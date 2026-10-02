export const STATIC_BOT_TREE = {
  id: {
    initial: {
      message: "Halo! Saya asisten virtual EcoCash. Silakan pilih topik yang ingin Anda ketahui atau diskusikan:",
      options: [
        { label: "Gabung Mitra Armada/Bank Sampah", next: "menu_partner_registration" },
        { label: "Panduan Penukaran Botol & Poin", next: "menu_consumer_faq" },
        { label: "Kendala Mesin / Bantuan Langsung", next: "menu_support" },
        { label: "Kemitraan & Pasang RVM", next: "menu_partnership" },
      ],
    },
    menu_partner_registration: {
      message: "Kami membuka kolaborasi operasional untuk pengangkutan sampah terpilah dan pengolahan daur ulang:",
      options: [
        { label: "Daftar Mitra Penjemput (Armada)", action: "LINK", url: "/daftar-kemitraan" },
        { label: "Daftar Unit Bank Sampah", action: "LINK", url: "/bank-sampah" },
        { label: "Kembali ke Menu Awal", next: "initial" },
      ],
    },
    menu_consumer_faq: {
      message: "Informasi seputar operasional mesin dan penukaran sampah botol plastik:",
      options: [
        { label: "Jenis botol apa yang diterima?", next: "faq_bottles" },
        { label: "Bagaimana cara konversi poin?", next: "faq_points" },
        { label: "Di mana letak mesin Smart RVM?", next: "faq_location" },
        { label: "Kembali ke Menu Awal", next: "initial" },
      ],
    },
    faq_bottles: {
      message: "Mesin Smart RVM hanya menerima botol plastik jenis PET transparan. Pastikan botol kosong tanpa sisa air, tutup dan label sudah dilepas sebelum dimasukkan ke mesin.",
      options: [
        { label: "Tanya hal lain tentang poin", next: "faq_points" },
        { label: "Kembali ke Menu Awal", next: "initial" },
      ],
    },
    faq_points: {
      message: "Setiap botol yang tervalidasi akan langsung menghasilkan EcoPoints di aplikasi mobile EcoCash Anda. Poin dapat ditukar menjadi saldo e-wallet atau didonasikan.",
      options: [
        { label: "Kembali ke Menu Awal", next: "initial" },
      ],
    },
    faq_location: {
      message: "Titik lokasi Smart RVM aktif beserta status kapasitas penampungan mesin dapat Anda pantau langsung di aplikasi EcoCash pada menu 'Drop Point'.",
      options: [
        { label: "Kembali ke Menu Awal", next: "initial" },
      ],
    },
    menu_support: {
      message: "Mengalami kendala saat memasukkan botol, poin tidak bertambah, atau membutuhkan bantuan mendesak? Tim operasional kami siap membantu via WhatsApp.",
      options: [
        { label: "Chat CS via WhatsApp", action: "WHATSAPP", url: "https://wa.me/6281214161614" },
        { label: "Kembali ke Menu Awal", next: "initial" },
      ],
    },
    menu_partnership: {
      message: "EcoCash melayani penempatan Smart RVM dan program daur ulang untuk berbagai institusi. Silakan pilih sektor Anda:",
      options: [
        { label: "Perusahaan / CSR & ESG", action: "LINK", url: "/solusi-perusahaan" },
        { label: "Kampus & Sekolah", action: "LINK", url: "/solusi-kampus" },
        { label: "Retail, Mall & Komersial", action: "LINK", url: "/solusi-retail" },
        { label: "Pemerintah / Dinas Lingkungan", action: "LINK", url: "/solusi-pemerintah" },
        { label: "Kembali ke Menu Awal", next: "initial" },
      ],
    },
  },

  en: {
    initial: {
      message: "Hello! I am EcoCash virtual assistant. Please choose a topic you would like to explore or discuss:",
      options: [
        { label: "Join Fleet / Waste Bank Partner", next: "menu_partner_registration" },
        { label: "Bottle Redemption & Points Guide", next: "menu_consumer_faq" },
        { label: "Machine Issues / Live Support", next: "menu_support" },
        { label: "Partnership & Deploy RVM", next: "menu_partnership" },
      ],
    },
    menu_partner_registration: {
      message: "We welcome operational collaborations for sorted waste collection and recycling processing:",
      options: [
        { label: "Register as Fleet Collector Partner", action: "LINK", url: "/daftar-kemitraan" },
        { label: "Register Waste Bank Facility", action: "LINK", url: "/bank-sampah" },
        { label: "Back to Main Menu", next: "initial" },
      ],
    },
    menu_consumer_faq: {
      message: "Information regarding machine operations and plastic bottle deposits:",
      options: [
        { label: "What bottle types are accepted?", next: "faq_bottles" },
        { label: "How does points conversion work?", next: "faq_points" },
        { label: "Where are Smart RVM machines located?", next: "faq_location" },
        { label: "Back to Main Menu", next: "initial" },
      ],
    },
    faq_bottles: {
      message: "Smart RVM only accepts clear PET plastic bottles. Ensure bottles are empty with no liquid residue, and caps/labels removed before insertion.",
      options: [
        { label: "Ask more about points", next: "faq_points" },
        { label: "Back to Main Menu", next: "initial" },
      ],
    },
    faq_points: {
      message: "Every validated bottle instantly generates EcoPoints in your EcoCash mobile app. Points can be exchanged for e-wallet balances or donated.",
      options: [
        { label: "Back to Main Menu", next: "initial" },
      ],
    },
    faq_location: {
      message: "Active Smart RVM locations and capacity statuses can be monitored directly in the EcoCash app under the 'Drop Point' menu.",
      options: [
        { label: "Back to Main Menu", next: "initial" },
      ],
    },
    menu_support: {
      message: "Encountering machine errors, uncredited points, or need urgent support? Our operations team is ready on WhatsApp.",
      options: [
        { label: "Chat with CS via WhatsApp", action: "WHATSAPP", url: "https://wa.me/6281214161614" },
        { label: "Back to Main Menu", next: "initial" },
      ],
    },
    menu_partnership: {
      message: "EcoCash provides Smart RVM deployments for various sectors. Please select your sector to apply:",
      options: [
        { label: "Corporate / CSR & ESG", action: "LINK", url: "/solusi-perusahaan" },
        { label: "Campus & Schools", action: "LINK", url: "/solusi-kampus" },
        { label: "Retail, Malls & Commercial", action: "LINK", url: "/solusi-retail" },
        { label: "Government / Environmental Agency", action: "LINK", url: "/solusi-pemerintah" },
        { label: "Back to Main Menu", next: "initial" },
      ],
    },
  },

  zh: {
    initial: {
      message: "您好！我是 EcoCash 虚拟智能助手。请选择您想了解或探讨的业务主题：",
      options: [
        { label: "加入车队/分类回收网点", next: "menu_partner_registration" },
        { label: "空瓶投放与积分兑换指南", next: "menu_consumer_faq" },
        { label: "设备故障 / 人工客服支持", next: "menu_support" },
        { label: "商务合作与点位入驻", next: "menu_partnership" },
      ],
    },
    menu_partner_registration: {
      message: "我们开放分类废品巡检清运与深度回收加工的业务合作：",
      options: [
        { label: "注册成为巡检车队伙伴", action: "LINK", url: "/daftar-kemitraan" },
        { label: "加盟分类回收网点 Hub", action: "LINK", url: "/bank-sampah" },
        { label: "返回主菜单", next: "initial" },
      ],
    },
    menu_consumer_faq: {
      message: "关于智能回收机操作流程与塑料空瓶投放的常见疑问：",
      options: [
        { label: "支持回收哪些类型的瓶子？", next: "faq_bottles" },
        { label: "积分如何兑现与转换？", next: "faq_points" },
        { label: "智能回收机网点分布在哪里？", next: "faq_location" },
        { label: "返回主菜单", next: "initial" },
      ],
    },
    faq_bottles: {
      message: "智能回收机仅支持透明 PET 塑料瓶。投放前请确保倒空液体残留，并取下瓶盖与外层标签塑料膜。",
      options: [
        { label: "了解更多关于积分的事项", next: "faq_points" },
        { label: "返回主菜单", next: "initial" },
      ],
    },
    faq_points: {
      message: "每只核验合格的空瓶都会即时在 EcoCash 移动端生成低碳积分。积分可兑换电子钱包余额或参与慈善捐款。",
      options: [
        { label: "返回主菜单", next: "initial" },
      ],
    },
    faq_location: {
      message: "您可以在 EcoCash 手机应用的“投放网点（Drop Point）”功能中，实时查询智能回收机网点与容量状态。",
      options: [
        { label: "返回主菜单", next: "initial" },
      ],
    },
    menu_support: {
      message: "在投瓶过程中遇到卡机、积分未到账或需要紧急协助？我们的运营团队随时在 WhatsApp 为您服务。",
      options: [
        { label: "通过 WhatsApp 联络客服", action: "WHATSAPP", url: "https://wa.me/6281214161614" },
        { label: "返回主菜单", next: "initial" },
      ],
    },
    menu_partnership: {
      message: "EcoCash 为各类机构提供智能回收机进驻及循环配套方案。请选择您所在的行业板块：",
      options: [
        { label: "企业客户 / CSR 与 ESG", action: "LINK", url: "/solusi-perusahaan" },
        { label: "高校院校与中小学校", action: "LINK", url: "/solusi-kampus" },
        { label: "商场购物中心与商业零售", action: "LINK", url: "/solusi-retail" },
        { label: "政府机关与市政环保部门", action: "LINK", url: "/solusi-pemerintah" },
        { label: "返回主菜单", next: "initial" },
      ],
    },
  },
};