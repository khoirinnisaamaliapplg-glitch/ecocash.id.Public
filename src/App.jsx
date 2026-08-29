import React from "react";
//import EcoCashLanding from "./Beranda/welcome";
import Navbar from "./components/layout/Navbar";
import Home from "./pages/Home";
import RequestRvm from "./pages/RequestRvm";
import NewsDetail from "./pages/NewsDetail";
import Footer from "./components/layout/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import IndustriesDetail from "./pages/IndustriesDetail";
import BankSampahDetail from "./pages/BankSampahDetail";
import MitraPenjemput from "./pages/MitraPenjemput";
import ProgramDonasi from "./pages/ProgramDonasi";
import EcoCashAkademi from "./pages/EcoCashAcademy";
import KalkulatorKarbon from "./pages/KalkulatorKarbon";
import PanduanMaterial from "./pages/PanduanMaterial";
import GovernmentSolution from "./pages/GovernmentSolution";
import UniversitySchoolSolution from "./pages/UniversitySchoolSolution";
import RetailMallSolution from "./pages/RetailMallSolution";
import CorporationSolution from "./pages/CorporationSolution";
import CaraKerjaPengguna from "./pages/CaraKerjaPengguna";
import CaraKerjaTeknologiRVM from "./pages/CaraKerjaTeknologiRVM";
import CaraKerjaKelolaLokasi from "./pages/CaraKerjaKelolaLokasi";
import CaraKerjaMitraLapangan from "./pages/CaraKerjaMitraLapangan";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col font-body selection:bg-teal-500 selection:text-white">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            {/* Home Page */}
            <Route path="/" element={<Home />} />

            {/* News Detail Page */}
            <Route path="/news/:id" element={<NewsDetail />} />

            {/* Solusi Menu List */}
            {/* Request RVM Page */}
            <Route path="/request-rvm" element={<RequestRvm />} />

            {/* Partner Pages List */}
            {/* Industries Detail Page */}
            <Route path="/industries" element={<IndustriesDetail />} />
            {/* Bank Sampah Detail Page */}
            <Route path="/bank-sampah" element={<BankSampahDetail />} />
            {/* Collector Detail Page */}
            <Route path="/mitra-penjemput" element={<MitraPenjemput />} />

            {/* Akademi Menu List */}
            {/* Program Donasi Page */}
            <Route path="/donation-programs" element={<ProgramDonasi />} />
            {/* EcoCash Akademi Page */}
            <Route path="/academy" element={<EcoCashAkademi />} />
            {/* Kalkulator Karbon Page */}
            <Route path="/carbon-calculator" element={<KalkulatorKarbon />} />
            {/* Panduan Material Page */}
            <Route path="/material-guides" element={<PanduanMaterial />} />

            {/* Solution menu list */}
            {/* Government Solution Page */}
            <Route path="/government" element={<GovernmentSolution />} />
            {/* University/School Solution Page */}
            <Route
              path="/schools-universities"
              element={<UniversitySchoolSolution />}
            />
            {/* Retail/Mall Solution Page */}
            <Route path="/retail-malls" element={<RetailMallSolution />} />
            {/* Corporation Solution Page */}
            <Route path="/cooperatives-esg" element={<CorporationSolution />} />

            {/* Cara Kerja menu list */}
            {/* Untuk Pengguna */}
            <Route path="/for-users" element={<CaraKerjaPengguna />} />
            <Route path="/technology" element={<CaraKerjaTeknologiRVM />} />
            <Route
              path="/location-management"
              element={<CaraKerjaKelolaLokasi />}
            />
            <Route
              path="/field-partners"
              element={<CaraKerjaMitraLapangan />}
            />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}
