import React, { useState } from "react";
import { LOCATION_DATA } from "../../../constants/dummyData";
// import mapsImg from "img/maps.png";

export default function LocationMap() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedId, setSelectedId] = useState(null);
  const [zoomLevel, setZoomLevel] = useState(100);

  // Fungsi Zooming
  const zoomIn = () => setZoomLevel((prev) => Math.min(prev + 30, 250));
  const zoomOut = () => setZoomLevel((prev) => Math.max(prev - 30, 100));
  const resetZoom = () => setZoomLevel(100);

  // Filter lokasi berdasarkan pencarian
  const filteredLocations = LOCATION_DATA.filter(
    (loc) =>
      loc.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      loc.address.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <section
      id="location-map"
      className="max-w-7xl mx-auto px-6 lg:px-10 py-24 bg-white"
    >
      <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 font-heading">
            Lokasi RVM & Drop Point
          </h2>
          <p className="text-lg text-slate-600 font-body mt-3">
            Temukan lokasi mesin penukaran pintar terdekat dan mulai kumpulkan{" "}
            <span className="text-sky-accent font-bold">#EcoReward</span> Anda
            hari ini.
          </p>
        </div>
        {/* Indikator Status Cepat */}
        <div className="flex gap-4 items-center bg-slate-50 px-5 py-2.5 rounded-full border border-slate-100 text-sm font-heading font-medium">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>{" "}
            Aktif
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500"></span>{" "}
            Nonaktif
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Sidebar Lokasi List */}
        <div className="lg:col-span-1 bg-white border border-slate-100 rounded-3xl p-5 shadow-xl shadow-slate-200/40 h-[600px] flex flex-col relative z-20">
          {/* Search Bar Interaktif */}
          <div className="relative mb-5">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cari kota, jalan, atau nama RVM..."
              className="w-full pl-12 pr-10 py-3.5 bg-slate-50 border border-slate-200 rounded-full focus:ring-2 focus:ring-teal-500/50 focus:border-teal-500 focus:bg-white outline-none transition-all font-body text-sm text-slate-700 shadow-sm"
            />
            <svg
              className="absolute left-4 top-4 w-5 h-5 text-slate-400"
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
            {searchQuery.length > 0 && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-4 top-4 text-slate-400 hover:text-rose-500 transition-colors"
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
            )}
          </div>

          {/* List Lokasi (Scrollable) */}
          <div className="space-y-3 overflow-y-auto pr-2 custom-scrollbar flex-1">
            {filteredLocations.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full opacity-60">
                <span className="text-4xl mb-3">🔍</span>
                <p className="text-slate-500 font-heading font-medium text-center">
                  Ups! Lokasi tidak ditemukan.
                </p>
              </div>
            ) : (
              filteredLocations.map((loc) => (
                <div
                  key={loc.id}
                  onClick={() => setSelectedId(loc.id)}
                  className={`group p-4 rounded-2xl border transition-all duration-300 cursor-pointer relative overflow-hidden ${
                    selectedId === loc.id
                      ? "border-sky-accent bg-orange-50/50 shadow-md"
                      : "border-slate-100 hover:border-teal-500/30 hover:bg-slate-50"
                  }`}
                >
                  {selectedId === loc.id && (
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-sky-accent"></div>
                  )}

                  <div className="flex justify-between items-start mb-2">
                    <p
                      className={`font-bold font-heading text-[15px] transition-colors leading-tight pr-2 ${
                        selectedId === loc.id
                          ? "text-sky-accent"
                          : "text-slate-800 group-hover:text-eco-dark"
                      }`}
                    >
                      {loc.name}
                    </p>
                    <span
                      className={`px-2.5 py-1 rounded-md text-[10px] font-bold font-heading tracking-wide whitespace-nowrap ${loc.statusColor}`}
                    >
                      {loc.status}
                    </span>
                  </div>

                  <p className="text-xs text-slate-500 font-body mb-3 flex items-start gap-1.5">
                    <svg
                      className="w-3.5 h-3.5 mt-0.5 shrink-0 text-slate-400"
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
                    <span>{loc.address}</span>
                  </p>

                  <div className="flex items-center gap-4 border-t border-slate-100/80 pt-3">
                    <div className="flex items-center gap-1.5 bg-slate-100/80 px-2.5 py-1 rounded-lg">
                      <span className="text-xs">🤖</span>
                      <span className="text-[11px] font-semibold text-slate-600 font-heading">
                        Smart RVM
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5 bg-slate-100/80 px-2.5 py-1 rounded-lg">
                      <span className="text-xs">🕒</span>
                      <span className="text-[11px] font-semibold text-slate-600 font-heading">
                        {loc.hours}
                      </span>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Map Area Interaktif dengan Zoom & Pan */}
        <div className="lg:col-span-2 relative group rounded-3xl overflow-hidden shadow-xl shadow-slate-200/50 h-[600px] bg-slate-100 border border-slate-200">
          {/* Kontrol Zoom Mengambang */}
          <div className="absolute top-6 right-6 z-40 flex flex-col gap-2">
            <button
              onClick={zoomIn}
              className="w-10 h-10 bg-white/95 backdrop-blur-md rounded-xl shadow-lg flex items-center justify-center text-slate-600 hover:text-eco-dark hover:bg-teal-500/10 transition-all font-bold text-xl border border-slate-100"
            >
              +
            </button>
            <button
              onClick={zoomOut}
              className="w-10 h-10 bg-white/95 backdrop-blur-md rounded-xl shadow-lg flex items-center justify-center text-slate-600 hover:text-eco-dark hover:bg-teal-500/10 transition-all font-bold text-xl border border-slate-100"
            >
              −
            </button>
            {zoomLevel !== 100 && (
              <button
                onClick={resetZoom}
                className="w-10 h-10 mt-2 bg-slate-800 text-white rounded-xl shadow-lg flex items-center justify-center hover:bg-[#f97316] transition-all border border-slate-700"
                title="Reset Zoom"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
                  />
                </svg>
              </button>
            )}
          </div>

          <div className="w-full h-full overflow-auto custom-scrollbar relative">
            <div
              className="relative transition-all duration-300 origin-top-left flex items-center justify-center min-w-full min-h-full"
              style={{ width: `${zoomLevel}%`, height: `${zoomLevel}%` }}
            >
              <img
                src={"img/maps.png"}
                alt="Peta Lokasi RVM"
                className="absolute inset-0 w-full h-full object-cover"
              />

              {filteredLocations.map((loc) => (
                <div
                  key={"pin-" + loc.id}
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer z-20"
                  style={{ top: loc.top, left: loc.left }}
                  onClick={() => setSelectedId(loc.id)}
                >
                  {selectedId === loc.id && (
                    <div className="absolute bottom-[130%] left-1/2 -translate-x-1/2 mb-1 w-56 bg-white/95 backdrop-blur-xl p-3.5 rounded-2xl shadow-2xl border border-slate-100 pointer-events-none">
                      <p className="text-sm font-bold font-heading text-slate-900 leading-tight mb-1.5">
                        {loc.name}
                      </p>
                      <p className="text-[11px] font-body text-slate-500 leading-relaxed">
                        {loc.address}
                      </p>
                      <div className="absolute top-full left-1/2 -translate-x-1/2 border-[6px] border-transparent border-t-white/95"></div>
                    </div>
                  )}

                  <div
                    className={`relative flex items-center justify-center w-10 h-10 rounded-full shadow-lg transition-all duration-300 ${
                      selectedId === loc.id
                        ? "bg-emerald-500 scale-110 shadow-emerald-500/40"
                        : "bg-white border-2 border-eco-dark scale-100 hover:scale-110"
                    }`}
                  >
                    <span
                      className="text-lg"
                      style={{
                        display: selectedId === loc.id ? "none" : "block",
                      }}
                    >
                      📍
                    </span>
                    <span
                      className="text-white text-lg"
                      style={{
                        display: selectedId === loc.id ? "block" : "none",
                      }}
                    >
                      ⭐
                    </span>
                    {selectedId === loc.id && (
                      <span className="absolute inset-0 rounded-full border-[3px] border-emerald-500 animate-ping opacity-60"></span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-slate-900/80 backdrop-blur-md px-6 py-3 rounded-full border border-slate-700 shadow-xl flex items-center gap-3 z-30">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
            </span>
            <span className="font-heading font-medium text-sm text-white">
              <span className="font-bold">{filteredLocations.length}</span>{" "}
              Titik Ditemukan
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
