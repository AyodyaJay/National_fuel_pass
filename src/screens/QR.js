import React from "react";
import { ArrowLeft, Menu, Download, QrCode as QrIcon, CheckCircle2 } from "lucide-react";

export default function QrCodeScreen({ openDrawer, navigate }) {
  const vehicleNo = "BBL-3544";
  const passCode = "5TMG02N21B6F";

  const handleDownload = () => {
    alert("QR Code downloaded to your device successfully!");
  };

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
          QR Code
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
        {/* Main QR Card */}
        <div className="w-full bg-white rounded-3xl p-6 shadow-xl border border-rose-100 flex flex-col items-center">
          {/* Highlighted Vehicle Number */}
          <div className="text-[#4a1525] font-black text-xl tracking-wider mb-4 px-4 py-1.5 bg-rose-50 rounded-xl border border-rose-200">
            {vehicleNo}
          </div>

          {/* QR Code Graphic Box */}
          <div className="bg-white p-4 rounded-2xl border-2 border-rose-100 shadow-inner flex flex-col items-center justify-center">
            <svg
              className="w-48 h-48 text-[#4a1525]"
              viewBox="0 0 100 100"
              fill="currentColor"
            >
              {/* Outer Position Detection Patterns */}
              <path d="M5,5 h30 v30 h-30 z M10,10 v20 h20 v-20 z M15,15 h10 v10 h-10 z" />
              <path d="M65,5 h30 v30 h-30 z M70,10 v20 h20 v-20 z M75,15 h10 v10 h-10 z" />
              <path d="M5,65 h30 v30 h-30 z M10,70 v20 h20 v-20 z M15,75 h10 v10 h-10 z" />

              {/* Data Modules */}
              <rect x="40" y="10" width="8" height="8" rx="2" />
              <rect x="52" y="10" width="8" height="8" rx="2" />
              <rect x="40" y="22" width="20" height="8" rx="2" />
              <rect x="10" y="40" width="8" height="20" rx="2" />
              <rect x="22" y="48" width="16" height="8" rx="2" />
              <rect x="45" y="42" width="12" height="12" rx="2" />
              <rect x="65" y="40" width="25" height="8" rx="2" />
              <rect x="65" y="52" width="8" height="16" rx="2" />
              <rect x="78" y="52" width="12" height="8" rx="2" />
              <rect x="40" y="65" width="8" height="25" rx="2" />
              <rect x="52" y="75" width="16" height="8" rx="2" />
              <rect x="72" y="72" width="18" height="18" rx="3" />
            </svg>
          </div>

          {/* Highlighted Passcode */}
          <div className="mt-4 text-center">
            <span className="text-xs font-semibold text-gray-500 block mb-0.5">
              Passcode
            </span>
            <span className="text-sm font-extrabold text-[#4a1525] tracking-widest bg-gray-50 px-3 py-1 rounded-md border border-gray-200 inline-block">
              {passCode}
            </span>
          </div>
        </div>

        {/* Status Verification Badge */}
        <div className="w-full bg-white/80 backdrop-blur rounded-2xl p-3 shadow-sm border border-rose-100 flex items-center justify-center gap-2 text-xs font-semibold text-emerald-800">
          <CheckCircle2 className="w-4 h-4 text-emerald-600" />
          <span>Verified National Fuel Pass QR</span>
        </div>
      </div>

      {/* Action Buttons Area */}
      <div className="p-4 flex flex-col gap-2.5">
        <button
          onClick={handleDownload}
          className="w-full py-3 bg-rose-900 text-white font-bold rounded-full shadow-lg flex items-center justify-center gap-2 active:scale-95 transition-all hover:bg-rose-950"
        >
          <Download className="w-4 h-4" /> Download QR
        </button>
        
      </div>
    </div>
  );
}