import React from "react";
import Hero from "./sections/Hero";
import AppPreview from "./sections/AppPreview";
import Partner from "./sections/Partner";
import SmartRvm from "./sections/SmartRvm";
import BoxEcocash from "./sections/BoxEcocash";
import CarbonDataPlatform from "./sections/CarbonDataPlatform";
import Marketplace from "./sections/Marketplace";
import SmartTruck from "./sections/SmartTruck";
import LocationMap from "./sections/LocationMap";
import RefundTypes from "./sections/RefundTypes";
import Ecosystem from "./sections/Ecosystem";
import Community from "./sections/Community";
import Guidelines from "./sections/Guidelines";
import News from "./sections/News";
import Faq from "./sections/Faq";

export default function Home() {
  return (
    <main className="w-full overflow-hidden bg-white">
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. App Preview Section */}
      <AppPreview />

      {/* 4. Partner App Section */}
      <Partner />

      {/* 5. Smart RVM & Smart Containers Grid */}
      <SmartRvm />

      {/* 6. Box Eco Cash */}
      <BoxEcocash />

      {/* 7. Carbon Data Platform */}
      <CarbonDataPlatform />

      {/* 8. Marketplace */}
      <Marketplace />

      {/* 9. Smart Truck */}
      <SmartTruck />

      {/* 10. Interactive Location Map */}
      <LocationMap />

      {/* 11. Refund Types (Jenis Pengembalian) */}
      <RefundTypes />

      {/* 12. Ecosystem Banner & Overview */}
      <Ecosystem />

      {/* 13. Community & Social Movement */}
      <Community />

      {/* 14. Guidelines (Panduan Kelayakan Barang Daur Ulang) */}
      <Guidelines />

      {/* 15. News Section (Berita EcoCash.id) */}
      <News />

      {/* 16. FAQ (Frequently Asked Questions - Accordion) */}
      <Faq />
    </main>
  );
}
