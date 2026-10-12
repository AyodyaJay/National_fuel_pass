import React, { useEffect } from "react";

export default function Splash({ onFinish }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      if (onFinish) onFinish();
    }, 3000); // Transitions to Login after 3 seconds

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div 
      onClick={onFinish} 
      className="w-full h-full min-h-[670px] flex flex-col items-center justify-center bg-rose-950 text-white cursor-pointer"
    >
      <h1 className="text-3xl font-bold mb-2">National Fuel Pass</h1>
      <p className="text-sm opacity-80">Loading app...</p>
    </div>
  );
}
