import React from "react";

export default function DeviceFrame({ children }) {
  return (
    <div className="relative w-[320px] sm:w-[350px] h-[670px] rounded-[48px] shadow-2xl p-[7px] bg-gradient-to-b from-stone-800 via-neutral-900 to-stone-900 border-[3px] border-neutral-700/80 ring-1 ring-white/10 shrink-0">
      <div className="absolute top-3 left-1/2 -translate-x-1/2 w-20 h-4 bg-black rounded-full z-30" />
      <div className="w-full h-full overflow-hidden relative rounded-[40px]">
        {children}
      </div>
    </div>
  );
}
