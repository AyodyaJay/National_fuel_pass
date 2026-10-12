import React from "react";
import { Bell, Settings, AlertCircle, HelpCircle, LogOut, X, ChevronLeft } from "lucide-react";
import UserAvatar from "../components/UserAvatar";

export default function NavigationBar({ navigate, close }) {
  return (
    <div className="absolute inset-0 z-50 flex">
      <div className="w-4/5 h-full bg-gradient-to-b from-[#e53e4c] via-[#df7580] to-[#f5dadf] text-white shadow-2xl relative">
        <button onClick={close} className="absolute top-4 right-4 p-1.5 bg-black/30 rounded-full"><X className="w-4 h-4" /></button>
        <div className="pt-10 flex flex-col items-center">
          <div className="p-1 rounded-full bg-cyan-400 shadow-md">
            <UserAvatar className="w-20 h-20 border-[3px] border-white" onClick={() => navigate("profile")} />
          </div>
          <button onClick={() => navigate("profile")} className="mt-3 text-sm font-bold">View Profile</button>
        </div>
        <div className="flex flex-col gap-6 px-9 mt-16">
          <button onClick={() => navigate("notifications")} className="flex items-center gap-4"><Bell className="w-5 h-5" /><span>Notifications</span></button>
          <button onClick={() => alert("App settings & preferences")} className="flex items-center gap-4"><Settings className="w-5 h-5" /><span>Settings</span></button>
          <button onClick={() => alert("Ceylon Petroleum Corporation v2.4")} className="flex items-center gap-4"><AlertCircle className="w-5 h-5" /><span>About Us</span></button>
          <button onClick={() => alert("24/7 National Fuel Hotline: 1919")} className="flex items-center gap-4"><HelpCircle className="w-5 h-5" /><span>Help</span></button>
        </div>
        <div className="absolute bottom-0 w-full bg-[#69141e] py-5 flex justify-center">
          <button onClick={() => navigate("login")} className="px-8 py-2 rounded-xl bg-white text-[#69141e] text-xs font-black flex items-center gap-2"><LogOut className="w-4 h-4" /> Log Out</button>
        </div>
      </div>
      <div onClick={close} className="w-1/5 h-full bg-black/40" />
    </div>
  );
}
