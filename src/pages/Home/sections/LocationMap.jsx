import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, useMap } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { LOCATION_DATA } from "../../../constants/dummyData";

// Custom Icon Leaflet berbasis Tailwind SVG
const customMarkerIcon = new L.divIcon({
  html: `<div class="w-10 h-10 bg-eco-primary rounded-full border-4 border-white shadow-lg flex items-center justify-center text-white transition-transform hover:scale-110">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
        </div>`,
  className: "bg-transparent",
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

// Komponen Pembantu untuk menggerakkan peta
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

  // Fungsi Penerjemah Data Backend ke UI untuk floating card
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
      {/* Header Section */}
      <div className="mb-6">
        <h2 className="text-3xl font-extrabold text-slate-900 font-heading">
          Lokasi RVM EcoCash
        </h2>
      </div>

      {/* Main Container: Split Screen Layout */}
      <div className="flex flex-col lg:flex-row w-full h-[750px] rounded-2xl border border-slate-200 overflow-hidden shadow-sm bg-white">
        {/* SIDEBAR KIRI: Pencarian & Daftar Lokasi */}
        <div className="w-full lg:w-[400px] flex flex-col bg-white z-10 border-r border-slate-200 h-[400px] lg:h-full shrink-0">
          {/* Kotak Pencarian */}
          <div className="p-6 border-b border-slate-100 shrink-0">
            <div className="flex items-center justify-between bg-white border border-slate-200 rounded-lg px-4 py-3 focus-within:border-eco-cyan focus-within:ring-1 focus-within:ring-eco-cyan transition-all">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Cari Lokasi..."
                className="w-full bg-transparent outline-none font-body text-sm text-slate-700 placeholder-slate-400"
              />
              <svg
                className="w-5 h-5 text-slate-400 shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>

          {/* Daftar Lokasi */}
          <div className="flex-1 overflow-y-auto custom-scrollbar p-6 space-y-8">
            {filteredLocations.map((loc) => {
              const isOpen = loc.isActive;
              return (
                <div
                  key={loc.id}
                  onClick={() => handleSelectLocation(loc)}
                  className="p-4 rounded-xl cursor-pointer group shadow-xs hover:inset-ring-2 hover:inset-ring-eco-cyan "
                >
                  {/* Status Label (Open/Closed) */}
                  <div
                    className={`flex items-center gap-1.5 text-xs font-bold mb-1.5 ${isOpen ? "text-green-600" : "text-red-500"}`}
                  >
                    {isOpen ? "Open now" : "Closed"}
                    <span
                      className={`w-2 h-2 rounded-full ${isOpen ? "bg-green-500/30 ring-2 ring-green-500" : "bg-red-500/30 ring-2 ring-red-500"}`}
                    ></span>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="font-bold text-slate-800 text-[15px] leading-tight mb-1 group-hover:text-eco-primary transition-colors">
                    {loc.name}
                  </h3>
                  <p className="text-xs text-slate-500 mb-3">
                    Reverse vending machine
                  </p>

                  {/* Detail Info: Address & Time */}
                  <div className="space-y-2 text-xs text-slate-600">
                    <div className="flex items-start gap-2">
                      <svg
                        className="w-4 h-4 shrink-0 text-slate-400 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      <span className="line-clamp-2">{loc.address}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <svg
                        className="w-4 h-4 shrink-0 text-slate-400 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      {/* Penyesuaian waktu operasional mengikuti visual desain */}
                      <span>
                        {isOpen
                          ? "Buka pukul 07.00-20.00"
                          : "Buka besok pukul 07.00-20.00"}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}

            {filteredLocations.length === 0 && (
              <div className="text-center text-slate-400 text-sm mt-10">
                Lokasi tidak ditemukan.
              </div>
            )}
          </div>
        </div>

        {/* MAP KANAN */}
        <div className="flex-1 relative z-0 h-full bg-slate-100">
          {/* Floating Detail Card (Dipertahankan sesuai fungsi aslinya) */}
          {selectedLoc && (
            <div className="absolute top-6 left-6 z-[1000] w-[90%] max-w-sm bg-white rounded-2xl shadow-2xl border border-slate-100 flex flex-col max-h-[90%] overflow-hidden animate-fadeIn">
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
                        Update:{" "}
                        {new Date(
                          selectedLoc.updatedAt || Date.now(),
                        ).toLocaleDateString("id-ID")}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-100 mt-6">
                  <h4 className="text-lg font-bold font-heading text-slate-900 mb-3 mt-4">
                    Informasi Tambahan
                  </h4>
                  <p className="text-sm text-slate-600 font-body leading-relaxed bg-slate-50 p-4 rounded-xl border border-slate-100">
                    {selectedLoc.description || "Tidak ada deskripsi spesifik."}
                  </p>
                </div>
              </div>

              <div className="p-4 bg-white border-t border-slate-100">
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

          {/* Leaflet Map */}
          <MapContainer
            center={defaultCenter}
            zoom={13}
            scrollWheelZoom={false}
            className="w-full h-full z-0"
          >
            <TileLayer
              attribution='&copy; <Link href="https://www.openstreetmap.org/copyright">OpenStreetMap</Link>'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <MapController selectedLoc={selectedLoc} />
            <MarkerClusterGroup chunkedLoading maxClusterRadius={50}>
              {LOCATION_DATA.map((loc) => (
                <Marker
                  key={loc.id}
                  position={[loc.latitude, loc.longitude]}
                  icon={customMarkerIcon}
                  eventHandlers={{ click: () => handleSelectLocation(loc) }}
                />
              ))}
            </MarkerClusterGroup>
          </MapContainer>
        </div>
      </div>
    </section>
  );
}
