import React from "react";
//import EcoCashLanding from "./Beranda/welcome";
import Navbar from "./components/layout/Navbar";
import Home from "./pages/Home";
import RequestRvm from "./pages/RequestRvm";
import NewsDetail from "./pages/NewsDetail";
import Footer from "./components/layout/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col font-body selection:bg-teal-500 selection:text-white">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            {/* Home Page */}
            <Route path="/" element={<Home />} />

            {/* Request RVM Page */}
            <Route path="/request-rvm" element={<RequestRvm />} />

            {/* News Detail Page */}
            <Route path="/news/:id" element={<NewsDetail />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}
