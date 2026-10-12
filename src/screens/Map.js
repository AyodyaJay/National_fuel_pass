import React, { useState, useEffect } from "react";
import { MapPin, Search, Navigation, Menu, ArrowLeft } from "lucide-react";

// Mock Database of Fuel Stations across Sri Lanka with Exact Coordinates
const STATIONS_DATABASE = [
  { id: 1, name: "Eheliyagoda Fuel Station", area: "Eheliyagoda", time: "5 min", distance: "1.2 km", coords: { lat: 6.85, lng: 80.26 } },
  { id: 2, name: "Avissawella Petroleum Mart", area: "Avissawella", time: "8 min", distance: "3.5 km", coords: { lat: 6.95, lng: 80.21 } },
  { id: 3, name: "Kirindiwela Service Station", area: "Kirindiwela", time: "12 min", distance: "6.0 km", coords: { lat: 7.04, lng: 80.08 } },
  { id: 4, name: "Ratnapura City Fuel Center", area: "Ratnapura", time: "15 min", distance: "8.4 km", coords: { lat: 6.68, lng: 80.40 } },
  { id: 5, name: "Colombo Central Station", area: "Colombo", time: "4 min", distance: "0.9 km", coords: { lat: 6.92, lng: 79.86 } },
  { id: 6, name: "Kandy Town Filling Station", area: "Kandy", time: "6 min", distance: "1.5 km", coords: { lat: 7.29, lng: 80.63 } }
];

// Distance calculation helper (Haversine formula approximation)
function calculateDistance(lat1, lon1, lat2, lon2) {
  const R = 6371; // Earth's radius in km
  const dLat = (lat2 - lat1) * (Math.PI / 180);
  const dLon = (lon2 - lon1) * (Math.PI / 180);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * (Math.PI / 180)) * Math.cos(lat2 * (Math.PI / 180)) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

export default function Map({ openDrawer, navigate }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentLocationName, setCurrentLocationName] = useState("Detecting GPS...");
  const [nearestStation, setNearestStation] = useState(STATIONS_DATABASE[0]);
  const [isLocating, setIsLocating] = useState(false);

  // 1. Fetch Live GPS & Find Nearest Fuel Station Automatically
  const handleGetLiveLocation = () => {
    setIsLocating(true);
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setIsLocating(false);
          const { latitude, longitude } = position.coords;

          let closest = STATIONS_DATABASE[0];
          let minDistance = Infinity;

          STATIONS_DATABASE.forEach((station) => {
            const dist = calculateDistance(latitude, longitude, station.coords.lat, station.coords.lng);
            if (dist < minDistance) {
              minDistance = dist;
              closest = station;
            }
          });

          setCurrentLocationName("My Live Location");
          setNearestStation({
            ...closest,
            distance: `${minDistance.toFixed(1)} km`,
            time: `${Math.max(2, Math.round(minDistance * 3))} min`
          });
        },
        () => {
          setIsLocating(false);
          setCurrentLocationName("Eheliyagoda");
        }
      );
    } else {
      setIsLocating(false);
      setCurrentLocationName("Eheliyagoda");
    }
  };

  useEffect(() => {
    handleGetLiveLocation();
  }, []);

  // 2. Manual Search Filter
  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    if (query.trim() !== "") {
      const match = STATIONS_DATABASE.find(
        (s) =>
          s.area.toLowerCase().includes(query.toLowerCase()) ||
          s.name.toLowerCase().includes(query.toLowerCase())
      );

      if (match) {
        setNearestStation(match);
        setCurrentLocationName(match.area);
      }
    }
  };

  return (
    <div className="relative w-full h-full bg-[#e8ece2] overflow-hidden flex flex-col justify-between">
      {/* Custom Fully Working Header */}
      <div className="w-full flex items-center justify-between px-4 py-3 bg-[#e8ece2] z-20">
        <div className="flex items-center gap-2">
          {/* Back Button */}
          <button
            onClick={() => navigate("home")}
            className="p-1.5 rounded-full hover:bg-black/5 active:bg-black/10 transition-colors"
            title="Go Back to Home"
          >
            <ArrowLeft className="w-6 h-6 text-[#4a1525]" />
          </button>
          
          {/* Menu Button */}
          <button
            onClick={openDrawer}
            className="p-1.5 rounded-full hover:bg-black/5 active:bg-black/10 transition-colors"
            title="Open Menu"
          >
            <Menu className="w-6 h-6 text-[#4a1525]" />
          </button>
        </div>

        {/* Header Title */}
        <h1 className="text-lg font-bold text-[#4a1525] text-center">
          Nearest fuel station
        </h1>

        {/* Profile Avatar Button */}
        <button
          onClick={() => navigate("profile")}
          className="w-9 h-9 rounded-full overflow-hidden border-2 border-white shadow-sm hover:opacity-90 active:scale-95 transition-all"
          title="Go to Profile"
        >
          <img
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </button>
      </div>

      {/* Search Input */}
      <div className="px-5 pt-1 z-10">
        <div className="flex items-center bg-white rounded-full px-4 py-2 shadow-md border border-gray-200">
          <MapPin className="w-5 h-5 text-rose-600 mr-2 flex-shrink-0" />
          <input
            type="text"
            placeholder="Search city (e.g., Colombo, Kandy)..."
            value={searchQuery}
            onChange={handleSearch}
            className="w-full bg-transparent text-gray-800 focus:outline-none text-sm"
          />
          <Search className="w-4 h-4 text-gray-400 ml-2" />
        </div>
      </div>

      {/* Map Interactive Area */}
      <div className="relative flex-1 my-2">
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 300 400" preserveAspectRatio="none">
          <path d="M 0,160 Q 150,210 300,240" fill="none" stroke="#b0d4e7" strokeWidth="16" />
          <path d="M 50,80 Q 180,200 180,320" fill="none" stroke="#fcd34d" strokeWidth="8" />
          <path d="M 100,80 L 120,185 L 200,205" fill="none" stroke="#ffffff" strokeWidth="6" />
        </svg>

        {/* Live GPS Pin */}
        <div className="absolute top-[48%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
          <div className="relative flex items-center justify-center">
            <span className="animate-ping absolute inline-flex h-10 w-10 rounded-full bg-blue-400 opacity-75"></span>
            <div className="w-6 h-6 rounded-full bg-blue-600 border-2 border-white shadow-lg flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-white"></div>
            </div>
          </div>
          <span className="text-[11px] font-bold mt-1 px-2 py-0.5 rounded bg-white/90 text-blue-900 shadow">
            {isLocating ? "Locating..." : currentLocationName}
          </span>
        </div>

        {/* Floating Re-center GPS Button */}
        <button
          onClick={handleGetLiveLocation}
          className="absolute bottom-4 right-4 bg-white p-3 rounded-full shadow-lg border border-gray-200 text-rose-600 hover:bg-rose-50 transition-colors z-10"
          title="Get My Live Location"
        >
          <Navigation className={`w-5 h-5 ${isLocating ? "animate-spin text-gray-400" : ""}`} />
        </button>
      </div>

      {/* Dynamic Nearest Station Display */}
      <div className="bg-rose-600 text-white rounded-t-3xl p-5 text-center shadow-lg z-10 transition-all">
        <div className="text-[11px] uppercase tracking-wider opacity-80 mb-1">Nearest Station Found</div>
        <h2 className="text-xl font-bold mb-1">{nearestStation.name}</h2>
        <div className="flex justify-center items-center gap-4 text-sm font-medium mt-2">
          <span className="bg-rose-700/60 px-3 py-1 rounded-full">⏱ {nearestStation.time}</span>
          <span className="bg-rose-700/60 px-3 py-1 rounded-full">📍 {nearestStation.distance}</span>
        </div>
      </div>
    </div>
  );
}