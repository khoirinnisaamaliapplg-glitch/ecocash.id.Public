// import React, { useState } from "react";

// export default function EcoCashLanding() {
//   const [openSidebar, setOpenSidebar] = useState(false);
//   const [openFaq, setOpenFaq] = useState(null);

//   const toggleFaq = (index) => {
//     setOpenFaq(openFaq === index ? null : index);
//   };

//   return (
//     <div className="bg-white font-sans text-gray-900">
//       {/* Navbar */}
//       <nav className="bg-white shadow-sm w-full sticky top-0 z-50">
//         <div className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-10 py-4">
//           <div className="flex items-center">
//             <img src="/img/logo.png" alt="Logo" className="h-10 w-auto" />
//           </div>

//           <div className="hidden md:flex items-center space-x-8">
//             {["Cara Kerja", "Solusi", "Edukasi", "Partner"].map(
//               (item, index) => (
//                 <a
//                   key={index}
//                   href="#"
//                   className="text-gray-600 hover:text-teal-600 font-medium transition duration-200"
//                 >
//                   {item}
//                 </a>
//               ),
//             )}
//           </div>

//           <div className="hidden md:flex items-center space-x-6">
//             <button className="text-gray-600 hover:text-teal-600 font-medium flex items-center">
//               🌐 ID{" "}
//               <svg
//                 className="w-4 h-4 ml-1"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//               >
//                 <path d="M19 9l-7 7-7-7" />
//               </svg>
//             </button>
//             <a
//               href="https://wa.me/6281214161614"
//               className="bg-teal-500 hover:bg-teal-600 text-white px-5 py-2.5 rounded-full flex items-center shadow-lg shadow-teal-500/30 transition-all font-semibold"
//             >
//               WhatsApp kami
//             </a>
//           </div>

//           <button
//             className="md:hidden p-2 text-gray-700"
//             onClick={() => setOpenSidebar(true)}
//           >
//             <svg
//               className="w-7 h-7"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M4 6h16M4 12h16M4 18h16"
//               />
//             </svg>
//           </button>
//         </div>

//         {/* Sidebar Mobile */}
//         {openSidebar && (
//           <div className="fixed inset-0 z-50">
//             <div
//               className="absolute inset-0 bg-gray-900/40 backdrop-blur-sm"
//               onClick={() => setOpenSidebar(false)}
//             ></div>
//             <div className="absolute right-0 top-0 h-full w-4/5 max-w-sm bg-white shadow-2xl p-6 flex flex-col">
//               <div className="flex items-center justify-between mb-8">
//                 <span className="font-bold text-lg">Menu</span>
//                 <button
//                   onClick={() => setOpenSidebar(false)}
//                   className="p-2 rounded-full hover:bg-gray-100"
//                 >
//                   <svg
//                     className="w-6 h-6"
//                     fill="none"
//                     stroke="currentColor"
//                     viewBox="0 0 24 24"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth="2"
//                       d="M6 18L18 6M6 6l12 12"
//                     />
//                   </svg>
//                 </button>
//               </div>

//               <div className="flex flex-col space-y-4">
//                 {["Cara Kerja", "Solusi", "Edukasi", "Partner"].map(
//                   (item, index) => (
//                     <a
//                       key={index}
//                       href="#"
//                       className="text-lg text-gray-700 hover:text-teal-600 font-medium py-2 border-b border-gray-50"
//                     >
//                       {item}
//                     </a>
//                   ),
//                 )}
//               </div>

//               <div className="mt-auto pt-6 border-t">
//                 <a
//                   href="https://wa.me/6281214161614"
//                   className="w-full bg-teal-500 text-white py-3 rounded-xl flex items-center justify-center font-semibold hover:bg-teal-600 transition"
//                 >
//                   Hubungi via WhatsApp
//                 </a>
//               </div>
//             </div>
//           </div>
//         )}
//       </nav>

//       {/* Hero Section */}
//       <section
//         className="relative w-full py-16 md:py-24 bg-cover bg-center overflow-hidden"
//         style={{
//           backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.7) 60%, transparent 100%), url('/img/br.jpeg')`,
//         }}
//       >
//         <div className="max-w-7xl mx-auto px-6 md:px-10">
//           <div className="flex flex-col md:flex-row items-center">
//             <div className="w-full md:w-1/2 space-y-6 text-center md:text-left z-10">
//               <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
//                 Ubah Sampah <br />
//                 Jadi Uang
//               </h1>
//               <p className="text-base md:text-lg text-gray-700 leading-relaxed">
//                 Platform pengelolaan sampah berbasis AIoT dan ekonomi sirkular
//                 untuk menciptakan lingkungan yang lebih bersih dan bernilai
//                 ekonomi.
//               </p>

//               <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start pt-2">
//                 <button className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-3 rounded-lg font-semibold transition w-full sm:w-auto shadow-lg shadow-teal-500/20">
//                   Mulai Sekarang
//                 </button>
//                 <button className="border border-teal-500 text-teal-500 hover:bg-teal-50 px-8 py-3 rounded-lg font-semibold transition w-full sm:w-auto">
//                   Pelajari lebih lanjut
//                 </button>
//               </div>

//               <div className="pt-6 flex flex-col items-center md:items-start space-y-3">
//                 <div className="text-yellow-400 text-2xl md:text-3xl tracking-widest">
//                   ★★★★★
//                 </div>
//                 <div>
//                   <img
//                     src="/img/logo.png"
//                     alt="Logo Partner"
//                     className="h-8 md:h-10 opacity-70 object-contain"
//                   />
//                 </div>
//               </div>
//             </div>
//             <div className="hidden md:block md:w-1/2"></div>
//           </div>

//           <div className="fixed bottom-6 right-6 z-50">
//             <a
//               href="https://wa.me/6281214161614"
//               className="block hover:scale-110 transition duration-300 shadow-2xl rounded-full"
//             >
//               <img
//                 src="/img/WhatsApp.png"
//                 alt="WhatsApp"
//                 className="w-14 h-14 md:w-16 md:h-16"
//               />
//             </a>
//           </div>
//         </div>
//       </section>

//       {/* Solusi Terbaik */}
//       <section className="max-w-7xl mx-auto px-6 md:px-10 py-8 border-b border-gray-100">
//         <div className="flex flex-col md:flex-row items-center justify-between gap-4">
//           <div className="text-gray-700 font-semibold text-center md:text-left">
//             Solusi terbaik untuk Indonesia
//           </div>
//           <a
//             href="#"
//             className="text-teal-500 font-bold flex items-center hover:text-teal-700 transition"
//           >
//             Customer story
//             <svg
//               className="w-5 h-5 ml-2"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M17 8l4 4m0 0l-4 4m4-4H3"
//               />
//             </svg>
//           </a>
//         </div>
//       </section>

//       {/* Kelola Sampah Lebih Mudah */}
//       <section className="max-w-7xl mx-auto px-6 md:px-10 py-20">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
//           <div className="space-y-6">
//             <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
//               Kelola Sampah Lebih Mudah <br /> dengan EcoCash
//             </h2>
//             <p className="text-base md:text-lg text-gray-600 leading-relaxed">
//               Aplikasi EcoCash membantu pengguna mengelola sampah secara lebih
//               praktis, modern, dan terintegrasi langsung dari smartphone. Mulai
//               dari verifikasi penjemputan, hingga pengumpulan reward digital,
//               semuanya dapat dilakukan dalam satu aplikasi.
//             </p>
//             <p className="text-base md:text-lg text-gray-600 leading-relaxed">
//               Dengan teknologi AI dan IoT, EcoCash memberikan pengalaman
//               pengelolaan sampah yang lebih cepat, transparan, dan efisien untuk
//               mendukung gaya hidup berkelanjutan serta ekonomi sirkular di
//               Indonesia.
//             </p>
//             <div className="pt-4">
//               <p className="text-teal-600 font-semibold mb-3">
//                 Dapatkan sekarang di
//               </p>
//               <div className="flex space-x-4">
//                 <a href="#">
//                   <img
//                     src="/img/apk.png"
//                     className="h-12 object-contain"
//                     alt="Google Play"
//                   />
//                 </a>
//               </div>
//             </div>
//           </div>
//           <div className="relative flex justify-center lg:justify-end">
//             <img
//               src="/img/cth.png"
//               alt="EcoCash App Mockup"
//               className="w-full max-w-xl object-contain drop-shadow-xl"
//             />
//           </div>
//         </div>
//       </section>

//       {/* Smart RVM */}
//       <section className="max-w-7xl mx-auto px-6 md:px-10 py-20">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
//           <div className="w-full">
//             <img
//               src="/img/rvm.png"
//               alt="Smart Reverse Vending Machine"
//               className="w-full h-auto rounded-3xl shadow-lg object-cover"
//             />
//           </div>
//           <div className="space-y-6">
//             <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
//               Smart Reverse Vending Machine
//             </h2>
//             <h3 className="text-xl md:text-2xl font-semibold text-gray-800">
//               Apa itu Smart Reverse Vending Machine?
//             </h3>
//             <p className="text-base md:text-lg text-gray-600 leading-relaxed">
//               Smart Reverse Vending Machine (RVM) adalah mesin pintar yang
//               memungkinkan pengguna menukarkan sampah botol atau kemasan daur
//               ulang menjadi reward digital secara otomatis.
//             </p>
//             <p className="text-base md:text-lg text-gray-600 leading-relaxed">
//               Pengguna hanya perlu memasukkan sampah yang sesuai, kemudian
//               sistem AI EcoCash akan melakukan verifikasi jenis material sebelum
//               reward diberikan ke akun pengguna.
//             </p>
//           </div>
//         </div>

//         <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
//           {[
//             { img: "/img/jabar.jpeg", title: "Smart Container Jawa Barat" },
//             { img: "/img/aceh.jpeg", title: "Smart Container Aceh" },
//             { img: "/img/surabaya.jpeg", title: "Smart Container Surabaya" },
//             { img: "/img/medan.jpeg", title: "Smart Container Medan" },
//           ].map((item, index) => (
//             <div key={index} className="flex flex-col gap-2 group">
//               <div className="overflow-hidden rounded-2xl shadow-md">
//                 <img
//                   src={item.img}
//                   alt={item.title}
//                   className="w-full h-40 object-cover group-hover:scale-105 transition duration-300"
//                 />
//               </div>
//               <p className="text-sm font-medium text-gray-700 text-center">
//                 {item.title}
//               </p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* EcoCash Box */}
//       <section className="max-w-7xl mx-auto px-6 md:px-10 py-20">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
//           <div className="space-y-6">
//             <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
//               Revolusi Pengelolaan Sampah <br /> dengan EcoCash Box
//             </h2>
//             <p className="text-base md:text-lg text-gray-600 leading-relaxed">
//               EcoCash Box hadir sebagai solusi inovatif yang menggabungkan
//               manajemen keuangan digital dengan sistem pengelolaan sampah yang
//               efisien. Melalui aplikasi, Anda dapat mengelola transaksi dan
//               reward langsung dari smartphone secara praktis dan modern.
//             </p>
//             <p className="text-base md:text-lg text-gray-600 leading-relaxed">
//               Dengan dukungan teknologi AIoT, EcoCash Box memberikan pengalaman
//               pengelolaan yang lebih cepat, transparan, dan akurat. Kami
//               berkomitmen mendukung gaya hidup berkelanjutan serta memperkuat
//               ekonomi sirkular di Indonesia melalui integrasi teknologi pintar.
//             </p>
//           </div>
//           <div className="relative flex justify-center lg:justify-end">
//             <img
//               src="/img/box.png"
//               alt="EcoCash Box"
//               className="w-full max-w-xl object-contain drop-shadow-xl"
//             />
//           </div>
//         </div>
//       </section>

//       {/* Smart Truck EcoCash */}
//       <section className="max-w-7xl mx-auto px-6 md:px-10 py-20">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//           <div className="w-full">
//             <img
//               src="/img/truk.png"
//               alt="Smart Waste Collection Truck"
//               className="w-full h-auto rounded-3xl shadow-lg object-cover"
//             />
//           </div>
//           <div className="space-y-6">
//             <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
//               Armada Smart Truck EcoCash
//             </h2>
//             <h3 className="text-xl md:text-2xl font-semibold text-gray-800">
//               Apa itu Smart Truck EcoCash?
//             </h3>
//             <p className="text-base md:text-lg text-gray-600 leading-relaxed">
//               Smart Truck EcoCash adalah armada pengangkut sampah pintar yang
//               dilengkapi dengan teknologi AIoT untuk mengoptimalkan rute dan
//               efisiensi pengumpulan sampah secara real-time.
//             </p>
//             <p className="text-base md:text-lg text-gray-600 leading-relaxed">
//               Truk ini berfungsi sebagai titik penjemputan bergerak yang
//               terintegrasi dengan sistem Manajemen Keuangan Digital kami. Setiap
//               sampah yang dikumpulkan akan diverifikasi secara otomatis, dan
//               reward digital akan langsung dikreditkan ke akun pengguna.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Lokasi RVM EcoCash */}
//       <section className="max-w-7xl mx-auto px-6 md:px-10 py-16">
//         <h2 className="text-3xl font-bold text-gray-800 mb-8">
//           Lokasi RVM EcoCash
//         </h2>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           <div className="md:col-span-1 bg-white border border-gray-200 rounded-2xl p-6 shadow-sm h-[500px] overflow-y-auto">
//             <div className="relative mb-6">
//               <input
//                 type="text"
//                 placeholder="Cari Lokasi..."
//                 className="w-full pl-4 pr-10 py-2 border rounded-lg focus:ring-2 focus:ring-teal-500 outline-none text-sm"
//               />
//               <span className="absolute right-3 top-2.5 text-gray-400">🔍</span>
//             </div>
//             <div className="space-y-6">
//               {[
//                 {
//                   name: "Jl. Asia Afrika No. 12, Bandung",
//                   status: "Closed",
//                   color: "text-red-500",
//                 },
//                 {
//                   name: "Jl. Braga No. 45, Bandung",
//                   status: "Open now",
//                   color: "text-green-500",
//                 },
//                 {
//                   name: "Jl. Dago No. 88, Bandung",
//                   status: "Closed",
//                   color: "text-red-500",
//                 },
//                 {
//                   name: "Jl. Setiabudi No. 101, Bandung",
//                   status: "Open now",
//                   color: "text-green-500",
//                 },
//               ].map((lokasi, index) => (
//                 <div key={index}>
//                   <p
//                     className={`font-bold ${lokasi.color} flex items-center text-sm`}
//                   >
//                     <span className="w-2 h-2 rounded-full bg-current mr-2"></span>{" "}
//                     {lokasi.status}
//                   </p>
//                   <p className="font-semibold text-gray-800 mt-1">
//                     {lokasi.name}
//                   </p>
//                   <p className="text-sm text-gray-500">
//                     Reverse vending machine
//                   </p>
//                   <p className="text-sm text-gray-600 mt-1">
//                     🕒 Buka pukul 07.00–20.00
//                   </p>
//                   {index < 3 && <hr className="my-4 border-gray-100" />}
//                 </div>
//               ))}
//             </div>
//           </div>
//           <div className="md:col-span-2">
//             <img
//               src="/img/maps.png"
//               alt="Peta Lokasi RVM"
//               className="w-full h-[500px] object-cover rounded-2xl shadow-md"
//             />
//           </div>
//         </div>
//       </section>

//       {/* Ekosistem EcoCash */}
//       <section className="max-w-7xl mx-auto px-6 md:px-10 py-20 bg-gray-50 my-10 rounded-3xl">
//         <div className="text-center mb-12">
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
//             Ekosistem EcoCash
//           </h2>
//         </div>
//         <div className="flex justify-center items-center">
//           <img
//             src="/img/banner.png"
//             alt="Ekosistem EcoCash"
//             className="w-full max-w-6xl rounded-2xl shadow-xl border border-gray-100 object-contain transition-transform duration-500 hover:scale-[1.01]"
//           />
//         </div>
//       </section>

//       {/* Komunitas & Aksi Peduli Lingkungan */}
//       <section className="max-w-7xl mx-auto px-6 md:px-10 py-20">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//           <div className="space-y-6">
//             <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
//               Komunitas & <br /> Aksi Peduli Lingkungan
//             </h2>
//             <p className="text-base md:text-lg text-gray-600 leading-relaxed">
//               Bersama EcoCash.id, setiap botol yang didaur ulang menjadi langkah
//               nyata untuk mendukung komunitas dan menciptakan lingkungan yang
//               lebih bersih. Program ini membantu komunitas, sekolah, dan
//               organisasi mendapatkan manfaat dari aktivitas daur ulang
//               sehari-hari.
//             </p>
//             <p className="text-base md:text-lg text-gray-600 leading-relaxed">
//               Tidak hanya membantu mengurangi sampah plastik, EcoCash.id juga
//               membuka peluang kolaborasi dan memberikan dampak positif bagi
//               lingkungan sekitar. Ingin komunitas atau organisasi Anda ikut
//               berkontribusi sekaligus mendapatkan manfaat dari program daur
//               ulang bersama EcoCash.id?
//             </p>
//             <p className="text-base md:text-lg font-medium text-gray-800">
//               Hubungi kami dan mulai gerakan peduli lingkungan dari sekarang.
//             </p>
//             <a
//               href="https://wa.me/6281214161614"
//               className="inline-flex items-center bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded-lg font-semibold transition shadow-md"
//             >
//               <img
//                 src="/img/WhatsApp.png"
//                 className="w-5 h-5 mr-2 object-contain"
//                 alt="WA"
//               />
//               WhatsApp kami
//             </a>
//           </div>
//           <div className="w-full">
//             <img
//               src="/img/anak.png"
//               alt="Komunitas Peduli Lingkungan"
//               className="w-full h-auto rounded-3xl shadow-lg object-cover"
//             />
//           </div>
//         </div>
//       </section>

//       {/* Jenis & Harga Atribut EcoCash */}
//       <section className="max-w-7xl mx-auto px-6 md:px-10 py-20 bg-gray-50 rounded-3xl my-10">
//         <div className="mb-12">
//           <h2 className="text-3xl font-bold text-gray-900 mb-2">
//             Jenis & Harga Atribut EcoCash
//           </h2>
//           <p className="text-gray-600">
//             Panduan jenis sampah plastik dan botol yang dapat didaur ulang
//             melalui sistem EcoCash.id
//           </p>
//         </div>
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
//           <div className="space-y-6">
//             <div className="flex items-start space-x-4">
//               <span className="text-green-500 text-2xl font-bold">✔</span>
//               <div>
//                 <h4 className="font-bold text-gray-900 text-lg">
//                   Botol Plastik PET (Mineral Water Bottles)
//                 </h4>
//                 <p className="text-gray-600 text-sm mt-1">
//                   Botol minuman bening atau berwarna dari bahan PET. Pastikan
//                   botol bersih, tanpa tutup, dan label masih menempel atau
//                   dilepas sesuai jenisnya.
//                 </p>
//                 <ul className="text-sm text-gray-500 mt-2 space-y-1 list-disc list-inside">
//                   <li>Harga rata-rata: Rp 2.500 - Rp 4.000 / kg</li>
//                   <li>Bonus reward poin instan di aplikasi</li>
//                 </ul>
//               </div>
//             </div>
//             <div className="flex items-start space-x-4">
//               <span className="text-green-500 text-2xl font-bold">✔</span>
//               <div>
//                 <h4 className="font-bold text-gray-900 text-lg">
//                   Kemasan Botol Kaca (Glass Bottles)
//                 </h4>
//                 <p className="text-gray-600 text-sm mt-1">
//                   Pecahan botol atau botol utuh dari kaca minuman komersial.
//                   Kondisi tidak retak parah dan bersih dari kotoran sisa
//                   minuman.
//                 </p>
//                 <ul className="text-sm text-gray-500 mt-2 space-y-1 list-disc list-inside">
//                   <li>Harga penukaran satuan atau per kg</li>
//                   <li>Validasi otomatis melalui RVM Machine</li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//           <div>
//             <img
//               src="/img/banner.png"
//               alt="Atribut Daur Ulang"
//               className="w-full h-auto object-contain rounded-xl"
//             />
//           </div>
//         </div>
//       </section>

//       {/* Berita tentang Ecocash.id */}
//       <section className="max-w-7xl mx-auto px-6 md:px-10 py-20">
//         <div className="text-center mb-16">
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
//             Berita tentang <span className="text-teal-500">Ecocash.id</span>
//           </h2>
//         </div>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {[
//             {
//               img: "/img/berita-1.png",
//               title: "Sampah Plastik Jadi Rupiah",
//               desc: "Ecocash.id resmi meluncurkan aplikasi inovatif yang memungkinkan masyarakat menukarkan sampah plastik langsung menjadi saldo digital...",
//             },
//             {
//               img: "/img/berita-2.png",
//               title: "Aplikasi Ecocash.id Resmi Rilis",
//               desc: "Ecocash.id resmi meluncurkan aplikasi seluler pertamanya di Indonesia untuk mempermudah masyarakat dalam mengelola sampah...",
//             },
//             {
//               img: "/img/berita-3.png",
//               title: "Ecocash.id Gandeng Bank Sampah",
//               desc: "Ecocash.id mengumumkan kolaborasi strategis dengan jaringan bank sampah lokal guna memperluas jangkauan layanan...",
//             },
//             {
//               img: "/img/berita-4.png",
//               title: "Ecocash.id Perluas Jangkauan di Pulau Jawa",
//               desc: "Ecocash.id kini hadir di lebih dari 100 titik di Pulau Jawa, memperluas akses masyarakat untuk menukarkan sampah menjadi saldo digital...",
//             },
//             {
//               img: "/img/berita-5.png",
//               title: "Ecocash.id Hadir di Kota Bandung",
//               desc: "Ecocash.id kini hadir di Kota Bandung, memberikan kemudahan bagi masyarakat untuk menukarkan sampah menjadi saldo digital...",
//             },
//             {
//               img: "/img/berita-6.png",
//               title: "Ecocash.id Hadir di Kota Surabaya",
//               desc: "Ecocash.id kini hadir di Kota Surabaya, memberikan kemudahan bagi masyarakat untuk menukarkan sampah menjadi saldo digital...",
//             },
//           ].map((news, index) => (
//             <div
//               key={index}
//               className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition duration-300 overflow-hidden flex flex-col"
//             >
//               <img
//                 src={news.img}
//                 alt={news.title}
//                 className="w-full h-48 object-cover"
//               />
//               <div className="p-6 flex flex-col flex-grow">
//                 <h3 className="text-lg font-bold mb-3 text-gray-900">
//                   {news.title}
//                 </h3>
//                 <p className="text-sm text-gray-600 leading-relaxed">
//                   {news.desc}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//         <div className="text-center mt-12">
//           <a
//             href="#"
//             className="text-teal-500 font-bold flex items-center justify-center hover:text-teal-700 transition"
//           >
//             Tampilkan lebih banyak{" "}
//             <svg
//               className="w-5 h-5 ml-2"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M17 8l4 4m0 0l-4 4m4-4H3"
//               />
//             </svg>
//           </a>
//         </div>
//       </section>

//       {/* FAQ Section */}
//       <section className="max-w-7xl mx-auto px-6 md:px-10 py-20 border-t border-gray-100">
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
//           <div className="lg:col-span-5 space-y-4">
//             <h2 className="text-3xl font-bold text-gray-900">
//               Apa Kata Pemirsa Kami?
//             </h2>
//             <h3 className="text-xl font-semibold text-teal-600">
//               FAQ EcoCash.id
//             </h3>
//             <p className="text-gray-600 leading-relaxed">
//               Temukan jawaban atas pertanyaan umum seputar cara kerja aplikasi,
//               sistem penukaran sampah, lokasi RVM, serta manfaat bergabung
//               bersama ekosistem EcoCash.
//             </p>
//           </div>
//           <div className="lg:col-span-7 space-y-4">
//             {[
//               {
//                 q: "Bagaimana cara menukarkan sampah menjadi saldo?",
//                 a: "Anda dapat mengumpulkan botol plastik atau kemasan daur ulang, lalu memasukkannya ke mesin RVM terdekat atau menggunakan fitur penjemputan armada Smart Truck di aplikasi EcoCash.",
//               },
//               {
//                 q: "Apakah aplikasi EcoCash gratis digunakan?",
//                 a: "Ya, aplikasi EcoCash dapat diunduh dan digunakan secara gratis melalui Google Play Store untuk membantu pengelolaan sampah Anda.",
//               },
//               {
//                 q: "Bagaimana cara bergabung sebagai partner?",
//                 a: "Anda bisa menghubungi tim kami melalui tombol WhatsApp yang tersedia di website untuk mendiskusikan peluang kolaborasi bank sampah atau titik RVM.",
//               },
//               {
//                 q: "Dimana saja lokasi mesin RVM saat ini?",
//                 a: "Saat ini mesin RVM EcoCash telah tersebar di berbagai titik strategis seperti Bandung, Surabaya, Medan, Aceh, dan kota-kota besar lainnya di Indonesia.",
//               },
//             ].map((faq, index) => (
//               <div
//                 key={index}
//                 className="border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm"
//               >
//                 <button
//                   onClick={() => toggleFaq(index)}
//                   className="w-full px-6 py-4 text-left font-semibold text-gray-900 flex justify-between items-center hover:bg-gray-50 transition"
//                 >
//                   <span>{faq.q}</span>
//                   <span className="text-teal-500 font-bold text-xl">
//                     {openFaq === index ? "−" : "+"}
//                   </span>
//                 </button>
//                 {openFaq === index && (
//                   <div className="px-6 pb-4 text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-3">
//                     {faq.a}
//                   </div>
//                 )}
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="bg-gray-50 border-t border-gray-200 py-16">
//         <div className="max-w-7xl mx-auto px-6 md:px-10">
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
//             <div className="space-y-4">
//               <img
//                 src="/img/logo.png"
//                 alt="Ideas Edvolution"
//                 className="h-12 object-contain"
//               />
//               <p className="text-gray-600 text-sm leading-relaxed">
//                 EcoCash: Solusi Modern untuk Pengelolaan Sampah yang Transparan
//                 dan Berkelanjutan!
//               </p>
//             </div>
//             <div>
//               <h4 className="font-bold text-gray-900 mb-6 uppercase tracking-wider text-sm">
//                 Layanan
//               </h4>
//               <ul className="space-y-3 text-gray-600 text-sm">
//                 <li>
//                   <a href="#" className="hover:text-teal-600">
//                     Aplikasi Mobile
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#" className="hover:text-teal-600">
//                     Smart RVM
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#" className="hover:text-teal-600">
//                     Lokasi Drop Point
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#" className="hover:text-teal-600">
//                     Ecocash Bisnis
//                   </a>
//                 </li>
//               </ul>
//             </div>
//             <div>
//               <h4 className="font-bold text-gray-900 mb-6 uppercase tracking-wider text-sm">
//                 Perusahaan
//               </h4>
//               <ul className="space-y-3 text-gray-600 text-sm">
//                 <li>
//                   <a href="#" className="hover:text-teal-600">
//                     Tentang Kami
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#" className="hover:text-teal-600">
//                     Edukasi & Berita
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#" className="hover:text-teal-600">
//                     Hubungi Kami
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#" className="hover:text-teal-600">
//                     Karir
//                   </a>
//                 </li>
//               </ul>
//             </div>
//             <div>
//               <h4 className="font-bold text-gray-900 mb-6 uppercase tracking-wider text-sm">
//                 Kontak
//               </h4>
//               <ul className="space-y-3 text-gray-600 text-sm">
//                 <li>WhatsApp: 081214161614</li>
//                 <li>Email : info@edvolution-technology.com</li>
//               </ul>
//             </div>
//           </div>
//           <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row items-center justify-between text-sm text-gray-500">
//             <p>© 2026 PT Ideas Edvolution Technology. All rights reserved.</p>
//             <div className="flex space-x-6 mt-4 md:mt-0">
//               <a href="#" className="hover:text-teal-600">
//                 Privacy Policy
//               </a>
//               <a href="#" className="hover:text-teal-600">
//                 Terms of Service
//               </a>
//             </div>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// }
