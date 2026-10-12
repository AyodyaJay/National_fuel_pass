import React from "react";
import { Calendar, QrCode, MapPin, Bell } from "lucide-react";
import ScreenHeader from "../components/ScreenHeader";

export default function Home({ navigate, openDrawer }) {
  const items = [
    ["calendar", Calendar, "Calander"],
    ["qr", QrCode, "QR"],
    ["map", MapPin, "Map"],
    ["notifications", Bell, "Notifications"]
  ];

  return (
    <div className="w-full h-full flex flex-col justify-between relative bg-gradient-to-b from-[#fbf4f2] via-[#f7e2e2] to-[#de4f5b] text-neutral-800">
      <ScreenHeader title="Home" onMenuClick={openDrawer} onAvatarClick={() => navigate("profile")} />
      <div className="flex-1 flex flex-col justify-center items-center px-6 py-4">
        <div className="grid grid-cols-2 gap-x-8 gap-y-6 max-w-[250px] w-full mb-6">
          {items.map(([id, Icon, label]) => (
            <div key={id} className="flex flex-col items-center">
              <button onClick={() => navigate(id)} className="w-20 h-20 rounded-full bg-white shadow-md border border-neutral-100 flex items-center justify-center p-2 hover:scale-105 active:scale-95 transition">
                <div className={`w-full h-full rounded-full border border-neutral-200 flex items-center justify-center ${id === "map" ? "bg-[#5bbca9]" : ""}`}>
                  <Icon className={`w-8 h-8 ${id === "notifications" ? "text-[#f5a623] fill-[#f5a623]" : "text-[#741c26]"}`} />
                </div>
                {id === "notifications" && <span className="absolute mt-[-55px] ml-[40px] w-4 h-4 rounded-full bg-rose-600 text-white text-[9px] flex items-center justify-center">1</span>}
              </button>
              <span className="mt-2 text-xs font-bold text-[#681822]">{label}</span>
            </div>
          ))}
        </div>

        <button onClick={() => navigate("balance")} className="w-20 h-20 rounded-full bg-white shadow-md border border-neutral-100 flex items-center justify-center hover:scale-105 active:scale-95 transition">
          <div className="w-full h-full rounded-full border-4 border-[#6e1622] flex items-center justify-center">
            <span className="text-xs font-black text-[#6e1622]">75%</span>
          </div>
        </button>
        <span className="mt-2 text-xs font-bold text-[#681822]">Balance</span>
      </div>
      <div className="h-4" />
    </div>
  );
}
