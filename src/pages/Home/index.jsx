import React from "react";
import Hero from "./sections/Hero";
import AppPreview from "./sections/AppPreview";
import SmartRvm from "./sections/SmartRvm";
import BoxEcocash from "./sections/BoxEcocash";
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

      {/* 3. Smart RVM & Smart Containers Grid */}
      <SmartRvm />

      {/* 4. Box Eco Cash */}
      <BoxEcocash />

      {/* 5. Smart Truck */}
      <SmartTruck />

      {/* 6. Interactive Location Map */}
      <LocationMap />

      {/* 7. Refund Types (Jenis Pengembalian) */}
      <RefundTypes />

      {/* 8. Ecosystem Banner & Overview */}
      <Ecosystem />

      {/* 9. Community & Social Movement */}
      <Community />

      {/* 10. Guidelines (Panduan Kelayakan Barang Daur Ulang) */}
      <Guidelines />

      {/* 11. News Section (Berita EcoCash.id) */}
      <News />

      {/* 12. FAQ (Frequently Asked Questions - Accordion) */}
      <Faq />
    </main>
  );
}
