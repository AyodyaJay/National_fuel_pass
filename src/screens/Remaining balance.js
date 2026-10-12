import React from "react";
import { ArrowLeft, Menu, Fuel, Calendar, RefreshCw, CheckCircle2 } from "lucide-react";

export default function RemainingBalance({ openDrawer, navigate }) {
  // Balance Data Config
  const totalQuota = 20; // Total Litres
  const usedLitres = 5;
  const remainingLitres = 15;
  const remainingPercentage = Math.round((remainingLitres / totalQuota) * 100);
  const usedPercentage = 100 - remainingPercentage;

  // SVG Progress Donut Calculations
  const radius = 60;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (remainingPercentage / 100) * circumference;

  return (
    <div className="relative w-full h-full bg-gradient-to-b from-[#fff5f5] to-[#fecdd3] overflow-hidden flex flex-col justify-between">
      {/* Fully Working Navigation Header */}
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
          Remaining Balance
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

      {/* Main Container */}
      <div className="px-5 flex-1 flex flex-col justify-center items-center gap-4 py-2">
        {/* Main Card */}
        <div className="w-full bg-white rounded-3xl p-6 shadow-xl border border-rose-100 flex flex-col items-center">
          {/* Active Month */}
          <div className="flex items-center gap-1.5 text-xs font-bold text-rose-900 bg-rose-50 px-3 py-1 rounded-full border border-rose-200 mb-4">
            <Calendar className="w-3.5 h-3.5 text-rose-600" />
            <span>September 2026 Quota</span>
          </div>

          {/* Dynamic SVG Circular Chart */}
          <div className="relative w-44 h-44 flex items-center justify-center my-2">
            <svg className="w-full h-full transform -rotate-90" viewBox="0 0 140 140">
              {/* Background Circle */}
              <circle
                cx="70"
                cy="70"
                r={radius}
                className="text-rose-100"
                strokeWidth="12"
                stroke="currentColor"
                fill="transparent"
              />
              {/* Progress Circle */}
              <circle
                cx="70"
                cy="70"
                r={radius}
                className="text-[#590e23] transition-all duration-1000 ease-out"
                strokeWidth="12"
                strokeDasharray={circumference}
                strokeDashoffset={strokeDashoffset}
                strokeLinecap="round"
                stroke="currentColor"
                fill="transparent"
              />
            </svg>

            {/* Inner Content inside Ring */}
            <div className="absolute flex flex-col items-center justify-center text-center">
              <Fuel className="w-6 h-6 text-rose-700 mb-1" />
              <span className="text-3xl font-extrabold text-[#4a1525] leading-none">
                {remainingPercentage}%
              </span>
              <span className="text-[11px] font-semibold text-gray-500 mt-1 uppercase tracking-wider">
                Fuel Remaining
              </span>
            </div>
          </div>

          {/* Used Badge */}
          <div className="bg-rose-100/70 text-rose-900 text-xs font-bold px-4 py-1.5 rounded-full mt-2 border border-rose-200">
            {usedPercentage}% Fuel Used
          </div>

          {/* Divider */}
          <div className="w-full h-[1px] bg-gray-100 my-5"></div>

          {/* Detailed Stats */}
          <div className="w-full grid grid-cols-2 gap-4 text-center">
            {/* Used Section */}
            <div className="bg-rose-50/50 p-3 rounded-2xl border border-rose-100">
              <span className="text-xs font-semibold text-gray-500 block mb-0.5">
                Used
              </span>
              <span className="text-lg font-black text-rose-700">
                {usedLitres} Litres
              </span>
            </div>

            {/* Remaining Section */}
            <div className="bg-emerald-50/50 p-3 rounded-2xl border border-emerald-100">
              <span className="text-xs font-semibold text-gray-500 block mb-0.5">
                Remaining
              </span>
              <span className="text-lg font-black text-emerald-800">
                {remainingLitres} Litres
              </span>
            </div>
          </div>
        </div>

        {/* Status Info Box */}
        <div className="w-full bg-white/80 backdrop-blur rounded-2xl p-3.5 shadow-sm border border-rose-100 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-emerald-600" />
            <span className="text-xs font-medium text-gray-700">Status: Active Quota</span>
          </div>
          <div className="flex items-center gap-1 text-[11px] font-semibold text-rose-800">
            <RefreshCw className="w-3.5 h-3.5 text-rose-600" /> Next Reset: Sun
          </div>
        </div>
      </div>

      {/* Bottom Action Button */}
      <div className="p-4">
        
      </div>
    </div>
  );
}