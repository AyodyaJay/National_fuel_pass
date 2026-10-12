import React, { useState } from "react";
import { Fuel, ArrowRight } from "lucide-react";

export default function Login({ onLogin, onSignup, onReset }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="w-full h-full min-h-[670px] flex flex-col justify-center px-7 bg-gradient-to-b from-[#fbf4f2] via-[#f7e0e0] to-[#de4f5b]">
      <div className="text-center">
        <div className="mx-auto w-16 h-16 rounded-2xl bg-[#69141e] text-white flex items-center justify-center shadow-lg">
          <Fuel className="w-8 h-8" />
        </div>
        <h1 className="mt-4 text-2xl font-black text-[#641b24]">Welcome Back</h1>
        <p className="text-xs text-neutral-500 mt-1">Sign in to your Fuel Pass account</p>
      </div>
      <div className="mt-8 space-y-3">
        {/* Email Input */}
        <input 
          className="w-full rounded-xl border border-neutral-200 bg-white px-4 py-3 text-sm text-neutral-800 placeholder-neutral-400 outline-none focus:ring-2 focus:ring-[#69141e]" 
          placeholder="Email" 
          value={email} 
          onChange={e => setEmail(e.target.value)} 
        />
        
        {/* Password Input (FIXED: text-neutral-800 added for visible black dots) */}
        <input 
          className="w-full rounded-xl border border-neutral-200 bg-white px-4 py-3 text-sm text-neutral-800 placeholder-neutral-400 outline-none focus:ring-2 focus:ring-[#69141e]" 
          placeholder="Password" 
          type="password" 
          value={password} 
          onChange={e => setPassword(e.target.value)} 
        />
        
        <button onClick={onLogin} className="w-full rounded-xl bg-[#69141e] text-white py-3 text-sm font-bold flex items-center justify-center gap-2 active:scale-95 transition">
          Login <ArrowRight className="w-4 h-4" />
        </button>
        <button onClick={onReset} className="w-full text-xs font-semibold text-[#69141e] hover:underline">Forgot password?</button>
        <button onClick={onSignup} className="w-full rounded-xl bg-white py-3 text-xs font-bold text-[#69141e] shadow active:scale-95 transition">
          Create new account
        </button>
      </div>
    </div>
  );
}