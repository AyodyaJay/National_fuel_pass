import React, { useState } from "react";
import { ChevronLeft } from "lucide-react";

export default function SignUp({ onBack, onComplete }) {
  const [form, setForm] = useState({ name: "", phone: "", email: "", password: "" });
  const update = (key, value) => setForm({ ...form, [key]: value });

  return (
    <div className="w-full h-full min-h-[670px] flex flex-col bg-gradient-to-b from-[#fbf4f2] via-[#f7e0e0] to-[#de4f5b]">
      <div className="px-5 pt-6 flex items-center gap-3">
        <button onClick={onBack} className="text-[#69141e] hover:opacity-80 transition">
          <ChevronLeft />
        </button>
        <h1 className="text-lg font-black text-[#641b24]">Sign Up</h1>
      </div>
      <div className="px-7 pt-8 space-y-3">
        <p className="text-xs text-neutral-500 mb-4">Create your National Fuel Pass account.</p>
        {[
          ["name", "Full Name", "text"],
          ["phone", "Phone Number", "tel"],
          ["email", "Email", "email"],
          ["password", "Password", "password"]
        ].map(([key, placeholder, type]) => (
          <input
            key={key}
            type={type}
            placeholder={placeholder}
            value={form[key]}
            onChange={e => update(key, e.target.value)}
            className="w-full rounded-xl border border-neutral-300 bg-white px-4 py-3 text-sm text-black placeholder-gray-400 outline-none focus:ring-2 focus:ring-[#69141e] transition"
            style={{ color: "#000000" }}
          />
        ))}
        <button 
          onClick={onComplete} 
          className="w-full mt-3 rounded-xl bg-[#69141e] text-white py-3 font-bold text-sm active:scale-95 transition"
        >
          Create Account
        </button>
      </div>
    </div>
  );
}
