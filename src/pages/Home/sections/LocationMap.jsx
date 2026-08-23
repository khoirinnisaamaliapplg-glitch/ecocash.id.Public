import React, { useState, useRef } from "react";
import { MapContainer, TileLayer, Marker, useMap } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";
import L from "leaflet";
// PENTING: Leaflet membutuhkan file CSS bawaannya agar peta tidak berantakan
import "leaflet/dist/leaflet.css";
import { LOCATION_DATA } from "../../../constants/dummyData";

// Custom Icon Leaflet berbasis Tailwind SVG agar terhindar dari broken image Vite
const customMarkerIcon = new L.divIcon({
  html: `<div class="w-10 h-10 bg-eco-primary rounded-full border-4 border-white shadow-lg flex items-center justify-center text-white transition-transform hover:scale-110">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
        </div>`,
  className: "bg-transparent",
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

// Komponen Pembantu untuk menggerakkan peta saat pencarian diklik
function MapController({ selectedLoc }) {
  const map = useMap();
  React.useEffect(() => {
    if (selectedLoc) {
      map.flyTo([selectedLoc.latitude, selectedLoc.longitude], 17, {
        animate: true,
      });
    }
  }, [selectedLoc, map]);
  return null;
}

export default function LocationMap() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLoc, setSelectedLoc] = useState(null);

  // Pusat Peta Awal (Kota Bandung)
  const defaultCenter = [-6.9175, 107.609];

  const filteredLocations = LOCATION_DATA.filter(
    (loc) =>
      loc.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      loc.address.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  const handleSelectLocation = (loc) => {
    setSelectedLoc(loc);
  };

  // Fungsi Penerjemah Data Backend ke UI
  const getAvailabilityUI = (fillLevel) => {
    if (fillLevel === "EMPTY" || fillLevel === "LOW") {
      return {
        status: "Good Service",
        color: "text-emerald-600",
        bars: ["bg-emerald-500", "bg-slate-200", "bg-slate-200"],
      };
    } else if (fillLevel === "HALF_FULL") {
      return {
        status: "Almost Full",
        color: "text-eco-accent",
        bars: ["bg-eco-accent", "bg-eco-accent", "bg-slate-200"],
      };
    } else {
      return {
        status: "Full / Closed",
        color: "text-rose-600",
        bars: ["bg-rose-500", "bg-rose-500", "bg-rose-500"],
      };
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

      <div className="relative w-full h-[750px] rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-200 overflow-hidden bg-slate-100 z-0">
        {/* Floating Search Bar */}
        <div className="absolute top-6 left-6 z-[1000] w-[90%] max-w-md">
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
              placeholder="Cari jalan, kecamatan, atau nama lokasi..."
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

        {/* Floating Detail Card */}
        {selectedLoc && (
          <div className="absolute top-24 left-6 z-[1000] w-[90%] max-w-sm bg-white rounded-2xl shadow-2xl border border-slate-100 flex flex-col h-[550px] overflow-hidden animate-fadeIn">
            <div className="p-6 overflow-y-auto custom-scrollbar flex-1 pb-4">
              <div className="flex justify-between items-start mb-4">
                <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-xs font-heading font-bold">
                  {selectedLoc.machineType === "CONTAINER"
                    ? "Machine Box"
                    : "Machine Standalone"}
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

              <h3 className="text-2xl font-bold font-heading text-slate-900 mb-2 leading-tight">
                {selectedLoc.name}
              </h3>
              <p className="text-sm font-body text-slate-600 mb-6">
                {selectedLoc.address}
              </p>

              {/* Status Diterjemahkan dari Backend */}
              <div className="mb-6">
                <h4 className="text-lg font-bold font-heading text-slate-900 mb-4">
                  Availability
                </h4>
                <div className="mb-4">
                  <div className="flex items-center gap-2 mb-2 text-sm font-body">
                    <span className="text-slate-700 font-medium">
                      Kapasitas Mesin ({selectedLoc.fillPercentage}%)
                    </span>
                    <span className="text-slate-300">•</span>
                    <span
                      className={`font-semibold ${getAvailabilityUI(selectedLoc.fillLevel).color}`}
                    >
                      {getAvailabilityUI(selectedLoc.fillLevel).status}
                    </span>
                  </div>
                  <div className="flex gap-2 w-full h-2">
                    {getAvailabilityUI(selectedLoc.fillLevel).bars.map(
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

              <div className="mb-6 pt-6 border-t border-slate-100">
                <h4 className="text-lg font-bold font-heading text-slate-900 mb-3">
                  System Status
                </h4>
                <div className="flex items-center justify-between text-sm font-body">
                  <div className="flex items-center gap-2">
                    <span
                      className={`font-bold ${selectedLoc.isActive ? "text-emerald-600" : "text-rose-600"}`}
                    >
                      {selectedLoc.status}
                    </span>
                    <span className="text-slate-300">•</span>
                    <span className="text-slate-600">
                      Terakhir update:{" "}
                      {new Date(
                        selectedLoc.updatedAt || Date.now(),
                      ).toLocaleDateString("id-ID")}
                    </span>
                  </div>
                </div>
              </div>

              <div className="mb-6 pt-6 border-t border-slate-100">
                <h4 className="text-lg font-bold font-heading text-slate-900 mb-4">
                  Features
                </h4>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-eco-primary/10 text-eco-primary px-3 py-1.5 rounded-full text-xs font-semibold font-body border border-eco-primary/20">
                    Self Service
                  </span>
                  <span className="bg-eco-primary/10 text-eco-primary px-3 py-1.5 rounded-full text-xs font-semibold font-body border border-eco-primary/20">
                    Akses {selectedLoc.accessType}
                  </span>
                </div>
              </div>

              <div className="pt-2">
                <h4 className="text-lg font-bold font-heading text-slate-900 mb-3">
                  Informasi Tambahan
                </h4>
                <p className="text-sm text-slate-600 font-body leading-relaxed bg-slate-50 p-4 rounded-xl border border-slate-100">
                  {selectedLoc.description ||
                    "Tidak ada deskripsi spesifik untuk mesin ini."}
                </p>
              </div>
            </div>

            <div className="p-4 bg-white border-t border-slate-100 shadow-[0_-10px_15px_-3px_rgba(0,0,0,0.05)]">
              {/* Tombol akan membuka Google Maps Web/App dengan koordinat tersebut */}
              <a
                href={`https://www.google.com/maps/dir/?api=1&destination=${selectedLoc.latitude},${selectedLoc.longitude}`}
                target="_blank"
                rel="noreferrer"
                className="w-full bg-[#3b82f6] hover:bg-blue-600 text-white py-3.5 rounded-xl font-heading font-bold text-sm flex items-center justify-center transition-colors"
              >
                Get Directions
              </a>
            </div>
          </div>
        )}

        {/* Peta Leaflet (OpenStreetMap) */}
        <MapContainer
          center={defaultCenter}
          zoom={13}
          scrollWheelZoom={false}
          className="w-full h-full"
        >
          {/* Layer Peta Gratis dari OpenStreetMap */}
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          <MapController selectedLoc={selectedLoc} />

          {/* Plugin Cluster untuk mengelompokkan Marker */}
          <MarkerClusterGroup chunkedLoading maxClusterRadius={50}>
            {LOCATION_DATA.map((loc) => (
              <Marker
                key={loc.id}
                position={[loc.latitude, loc.longitude]}
                icon={customMarkerIcon}
                eventHandlers={{
                  click: () => handleSelectLocation(loc),
                }}
              />
            ))}
          </MarkerClusterGroup>
        </MapContainer>
      </div>
    </section>
  );
}
