import React from "react";
import Hero from "./sections/Hero";
import AppPreview from "./sections/AppPreview";
import SmartRvm from "./sections/SmartRvm";
import LocationMap from "./sections/LocationMap";
import RefundTypes from "./sections/RefundTypes";
import Ecosystem from "./sections/Ecosystem";
import Guidelines from "./sections/Guidelines";
import Community from "./sections/Community";
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

      {/* 4. Interactive Location Map */}
      <LocationMap />

      {/* 5. Refund Types (Jenis Pengembalian) */}
      <RefundTypes />

      {/* 6. Ecosystem Banner & Overview */}
      <Ecosystem />

      {/* 7. Guidelines (Panduan Kelayakan Barang Daur Ulang) */}
      <Guidelines />

      {/* 8. Community & Social Movement */}
      <Community />

      {/* 9. News Section (Berita EcoCash.id) */}
      <News />

      {/* 10. FAQ (Frequently Asked Questions - Accordion) */}
      <Faq />
    </main>
  );
}
