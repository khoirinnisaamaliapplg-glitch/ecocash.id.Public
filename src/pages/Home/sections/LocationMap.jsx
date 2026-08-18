import React, { useState, useCallback } from "react";
import {
  GoogleMap,
  useJsApiLoader,
  Marker,
  MarkerClusterer,
} from "@react-google-maps/api";
import { LOCATION_DATA } from "../../../constants/dummyData";

const containerStyle = {
  width: "100%",
  height: "750px",
  borderRadius: "1.5rem",
};

// Titik tengah default (Kota Bandung - Area yang berdekatan)
const defaultCenter = {
  lat: -6.9195,
  lng: 107.6075,
};

export default function LocationMap() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLoc, setSelectedLoc] = useState(null);
  const [map, setMap] = useState(null);

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
  });

  const onLoad = useCallback(function callback(map) {
    setMap(map);
  }, []);

  const onUnmount = useCallback(function callback(map) {
    setMap(null);
  }, []);

  const filteredLocations = LOCATION_DATA.filter(
    (loc) =>
      loc.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      loc.address.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  const handleSelectLocation = (loc) => {
    setSelectedLoc(loc);
    if (map) {
      map.panTo({ lat: loc.lat, lng: loc.lng });
      map.setZoom(17); // Zoom in saat diklik
    }
  };

  return (
    <section
      id="location-map"
      className="max-w-7xl mx-auto px-6 lg:px-10 py-24"
    >
      <div className="mb-8">
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 font-heading">
          Lokasi RVM & Drop Point
        </h2>
        <p className="text-lg text-slate-600 font-body mt-2">
          Temukan mesin penukaran terdekat dan kumpulkan{" "}
          <span className="text-eco-primary font-bold">EcoReward</span> Anda.
        </p>
      </div>

      <div className="relative w-full h-[750px] rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-200 overflow-hidden bg-slate-100">
        {/* Floating Search Bar */}
        <div className="absolute top-6 left-6 z-10 w-[90%] max-w-md">
          <div className="relative flex items-center bg-white rounded-full shadow-lg border border-slate-100 overflow-hidden">
            <div className="pl-5 text-slate-400">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cari jalan, kota, atau nama lokasi..."
              className="w-full py-4 px-4 bg-transparent outline-none font-body text-sm text-slate-700 placeholder-slate-400"
            />
          </div>

          {searchQuery && filteredLocations.length > 0 && !selectedLoc && (
            <div className="mt-2 bg-white rounded-2xl shadow-xl border border-slate-100 p-2 max-h-64 overflow-y-auto custom-scrollbar">
              {filteredLocations.map((loc) => (
                <div
                  key={loc.id}
                  onClick={() => handleSelectLocation(loc)}
                  className="p-3 hover:bg-slate-50 rounded-xl cursor-pointer transition-colors"
                >
                  <p className="font-heading font-bold text-sm text-slate-800">
                    {loc.name}
                  </p>
                  <p className="font-body text-xs text-slate-500 truncate">
                    {loc.address}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Floating Detail Card (Sesuai Desain UI/UX Return and Earn) */}
        {selectedLoc && (
          <div className="absolute top-24 left-6 z-10 w-[90%] max-w-sm bg-white rounded-2xl shadow-2xl border border-slate-100 flex flex-col h-[550px] overflow-hidden animate-fadeIn">
            {/* Scrollable Content Area */}
            <div className="p-6 overflow-y-auto custom-scrollbar flex-1 pb-4">
              {/* Header Card */}
              <div className="flex justify-between items-start mb-4">
                <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-xs font-heading font-bold">
                  {selectedLoc.type}
                </span>
                <button
                  onClick={() => setSelectedLoc(null)}
                  className="text-slate-400 hover:text-slate-700 bg-slate-50 hover:bg-slate-200 p-1.5 rounded-full transition-colors"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              {/* Title & Address */}
              <h3 className="text-2xl font-bold font-heading text-slate-900 mb-2 leading-tight">
                {selectedLoc.name}
              </h3>
              <p className="text-sm font-body text-slate-600 mb-6">
                {selectedLoc.address}
              </p>

              {/* Availability Section */}
              <div className="mb-6">
                <h4 className="text-lg font-bold font-heading text-slate-900 mb-4">
                  Availability
                </h4>

                <div className="mb-4">
                  <div className="flex items-center gap-2 mb-2 text-sm font-body">
                    <span className="text-slate-700 font-medium">Glass</span>
                    <span className="text-slate-300">•</span>
                    <span
                      className={`font-semibold ${selectedLoc.availability.kaca.color}`}
                    >
                      {selectedLoc.availability.kaca.status}
                    </span>
                  </div>
                  <div className="flex gap-2 w-full h-2">
                    {selectedLoc.availability.kaca.bars.map((bg, idx) => (
                      <div
                        key={idx}
                        className={`w-1/3 rounded-full ${bg}`}
                      ></div>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-2 text-sm font-body">
                    <span className="text-slate-700 font-medium">
                      Plastic & Cans
                    </span>
                    <span className="text-slate-300">•</span>
                    <span
                      className={`font-semibold ${selectedLoc.availability.plastikKaleng.color}`}
                    >
                      {selectedLoc.availability.plastikKaleng.status}
                    </span>
                  </div>
                  <div className="flex gap-2 w-full h-2">
                    {selectedLoc.availability.plastikKaleng.bars.map(
                      (bg, idx) => (
                        <div
                          key={idx}
                          className={`w-1/3 rounded-full ${bg}`}
                        ></div>
                      ),
                    )}
                  </div>
                </div>
              </div>

              {/* Opening Hours */}
              <div className="mb-6 pt-6 border-t border-slate-100">
                <h4 className="text-lg font-bold font-heading text-slate-900 mb-3">
                  Opening Hours
                </h4>
                <div className="flex items-center justify-between text-sm font-body">
                  <div className="flex items-center gap-2">
                    <span
                      className={`font-bold ${selectedLoc.status === "Tutup" ? "text-rose-600" : "text-emerald-600"}`}
                    >
                      {selectedLoc.status}
                    </span>
                    <span className="text-slate-300">•</span>
                    <span className="text-slate-600">
                      {selectedLoc.openingHours}
                    </span>
                  </div>
                </div>
              </div>

              {/* Features Section (Pill Tags) */}
              <div className="mb-6 pt-6 border-t border-slate-100">
                <h4 className="text-lg font-bold font-heading text-slate-900 mb-4">
                  Features
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedLoc.features.map((feature, idx) => (
                    <span
                      key={idx}
                      className="bg-eco-primary/10 text-eco-primary px-3 py-1.5 rounded-full text-xs font-semibold font-body border border-eco-primary/20 flex items-center gap-1.5"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-eco-primary"></span>
                      {feature}
                    </span>
                  ))}
                </div>
              </div>

              {/* Redeem Info Section */}
              <div className="pt-2">
                <h4 className="text-lg font-bold font-heading text-slate-900 mb-3">
                  Redeem vouchers at
                </h4>
                <p className="text-sm text-slate-600 font-body leading-relaxed bg-slate-50 p-4 rounded-xl border border-slate-100">
                  {selectedLoc.redeemInfo}
                </p>
              </div>
            </div>

            {/* Sticky Action Button (Menempel di Bawah) */}
            <div className="p-4 bg-white border-t border-slate-100 shadow-[0_-10px_15px_-3px_rgba(0,0,0,0.05)]">
              <a
                href={selectedLoc.gmapsLink}
                target="_blank"
                rel="noreferrer"
                className="w-full bg-[#3b82f6] hover:bg-blue-600 text-white py-3.5 rounded-xl font-heading font-bold text-sm flex items-center justify-center transition-colors"
              >
                Get Directions
              </a>
            </div>
          </div>
        )}

        {/* Google Maps dengan Fitur Clusterer */}
        {isLoaded ? (
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={defaultCenter}
            zoom={14}
            onLoad={onLoad}
            onUnmount={onUnmount}
            options={{
              disableDefaultUI: true,
              zoomControl: true,
            }}
          >
            {/* Membungkus Marker dengan MarkerClusterer */}
            <MarkerClusterer>
              {(clusterer) => (
                <>
                  {LOCATION_DATA.map((loc) => (
                    <Marker
                      key={loc.id}
                      position={{ lat: loc.lat, lng: loc.lng }}
                      onClick={() => handleSelectLocation(loc)}
                      clusterer={clusterer}
                    />
                  ))}
                </>
              )}
            </MarkerClusterer>
          </GoogleMap>
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center bg-slate-100">
            <div className="w-10 h-10 border-4 border-eco-primary border-t-transparent rounded-full animate-spin mb-4"></div>
            <p className="text-slate-500 font-heading font-medium">
              Memuat Peta Interaktif...
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
