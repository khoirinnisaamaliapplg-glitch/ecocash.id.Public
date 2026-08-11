import React from "react";
//import EcoCashLanding from "./Beranda/welcome";
import Navbar from "./components/layout/Navbar";
import Home from "./pages/Home";
import Footer from "./components/layout/Footer";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col font-body selection:bg-teal-500 selection:text-white">
      <Navbar />
      <div className="flex-grow">
        <Home />
      </div>
      <Footer />
    </div>
  );
}
