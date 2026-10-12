import React, { useState } from "react";
import { ArrowLeft, Menu, Calendar as CalendarIcon, Fuel, AlertCircle } from "lucide-react";

// Fuel Quota & Quota Quota History Data
const FUEL_HISTORY = {
  5: { status: "Quota Reset", detail: "Weekly Quota Restored: 20 Litres" },
  9: { status: "Dispensed", detail: "10 Litres Dispensed at Avissawella Shed" },
  12: { status: "Quota Reset", detail: "Weekly Quota Restored: 20 Litres" },
  14: { status: "Dispensed", detail: "8 Litres Dispensed at Eheliyagoda Shed" },
  19: { status: "Quota Reset", detail: "Weekly Quota Restored: 20 Litres" }
};

export default function Calander({ openDrawer, navigate }) {
  const [selectedDate, setSelectedDate] = useState(9);

  // Generates 30 days grid for September
  const daysInMonth = Array.from({ length: 30 }, (_, i) => i + 1);

  return (
    <div className="relative w-full h-full bg-gradient-to-b from-[#fff5f5] to-[#fecdd3] overflow-hidden flex flex-col justify-between">
      {/* Header */}
      <div className="w-full flex items-center justify-between px-4 py-3 z-20">
        <div className="flex items-center gap-2">
          <button
            onClick={() => navigate("home")}
            className="p-1.5 rounded-full hover:bg-black/5 active:bg-black/10 transition-colors"
            title="Go Back"
          >
            <ArrowLeft className="w-6 h-6 text-[#4a1525]" />
          </button>
          <button
            onClick={openDrawer}
            className="p-1.5 rounded-full hover:bg-black/5 active:bg-black/10 transition-colors"
            title="Open Menu"
          >
            <Menu className="w-6 h-6 text-[#4a1525]" />
          </button>
        </div>

        <h1 className="text-lg font-bold text-[#4a1525] text-center">
          Fuel Calendar
        </h1>

        <button
          onClick={() => navigate("profile")}
          className="w-9 h-9 rounded-full overflow-hidden border-2 border-white shadow-sm hover:opacity-90 active:scale-95 transition-all"
        >
          <img
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </button>
      </div>

      {/* Main Content */}
      <div className="px-5 flex-1 flex flex-col justify-start pt-2 gap-4">
        {/* Active Month Title */}
        <div className="flex items-center justify-between bg-white/80 backdrop-blur px-4 py-2.5 rounded-2xl shadow-sm border border-rose-100">
          <div className="flex items-center gap-2">
            <CalendarIcon className="w-5 h-5 text-rose-600" />
            <span className="font-bold text-rose-950 text-sm">September 2026</span>
          </div>
          <span className="text-xs bg-rose-100 text-rose-700 px-2.5 py-1 rounded-full font-medium">
            Active Quota Month
          </span>
        </div>

        {/* Interactive Calendar Card */}
        <div className="bg-white rounded-3xl p-4 shadow-xl border border-rose-100">
          {/* Days of Week Header */}
          <div className="grid grid-cols-7 text-center font-semibold text-xs text-rose-400 mb-2">
            <span>Su</span>
            <span>Mo</span>
            <span>Tu</span>
            <span>We</span>
            <span>Th</span>
            <span>Fr</span>
            <span>Sa</span>
          </div>

          {/* Days Grid */}
          <div className="grid grid-cols-7 gap-1 text-center">
            {/* Empty slots for starting day alignment */}
            <div className="h-9"></div>
            <div className="h-9"></div>

            {daysInMonth.map((day) => {
              const hasActivity = FUEL_HISTORY[day];
              const isSelected = selectedDate === day;

              let bgClass = "bg-transparent text-gray-700 hover:bg-rose-50";
              
              if (isSelected) {
                bgClass = "bg-rose-900 text-white font-bold ring-2 ring-rose-400 shadow-md";
              } else if (hasActivity?.status === "Dispensed") {
                bgClass = "bg-rose-100 text-rose-800 font-semibold border border-rose-300";
              } else if (hasActivity?.status === "Quota Reset") {
                bgClass = "bg-emerald-100 text-emerald-800 font-semibold border border-emerald-300";
              }

              return (
                <button
                  key={day}
                  onClick={() => setSelectedDate(day)}
                  className={`h-9 w-9 mx-auto rounded-full flex items-center justify-center text-xs transition-all relative ${bgClass}`}
                >
                  {day}
                  {hasActivity && !isSelected && (
                    <span
                      className={`absolute bottom-1 w-1 h-1 rounded-full ${
                        hasActivity.status === "Quota Reset" ? "bg-emerald-500" : "bg-rose-600"
                      }`}
                    ></span>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Dynamic Selected Date Activity Details */}
        <div className="bg-white/90 backdrop-blur rounded-2xl p-4 shadow-md border border-rose-100">
          <div className="text-xs font-semibold text-rose-400 uppercase tracking-wider mb-1">
            Activity Details for September {selectedDate}
          </div>

          {FUEL_HISTORY[selectedDate] ? (
            <div className="flex items-start gap-3 mt-2">
              <div
                className={`p-2 rounded-xl ${
                  FUEL_HISTORY[selectedDate].status === "Quota Reset"
                    ? "bg-emerald-100 text-emerald-700"
                    : "bg-rose-100 text-rose-700"
                }`}
              >
                <Fuel className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-sm text-gray-900">
                  {FUEL_HISTORY[selectedDate].status}
                </h4>
                <p className="text-xs text-gray-600 mt-0.5">
                  {FUEL_HISTORY[selectedDate].detail}
                </p>
              </div>
            </div>
          ) : (
            <div className="flex items-center gap-2 text-gray-400 text-xs py-2">
              <AlertCircle className="w-4 h-4" />
              <span>No fuel transactions recorded for this day.</span>
            </div>
          )}
        </div>
      </div>

      {/* Bottom Action Button */}
      <div className="p-4">
        
      </div>
    </div>
  );
}
