import React, { useState } from "react";
import { ChevronLeft, Mail } from "lucide-react";

export default function ResetPassword({ onBack }) {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  return (
    <div className="w-full h-full min-h-[670px] flex flex-col bg-gradient-to-b from-[#fbf4f2] via-[#f7e0e0] to-[#de4f5b]">
      <div className="px-5 pt-6 flex items-center gap-3">
        <button onClick={onBack} className="text-[#69141e]"><ChevronLeft /></button>
        <h1 className="text-lg font-black text-[#641b24]">Reset Password</h1>
      </div>
      <div className="px-7 pt-12">
        <div className="mx-auto w-16 h-16 rounded-full bg-white shadow flex items-center justify-center text-[#69141e]">
          <Mail />
        </div>
        <h2 className="text-xl font-black text-[#641b24] text-center mt-5">Forgot your password?</h2>
        <p className="text-xs text-neutral-500 text-center mt-2">Enter your email and we will send a reset instruction.</p>
        <input className="w-full mt-7 rounded-xl border border-neutral-200 bg-white px-4 py-3 text-sm outline-none" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
        <button onClick={() => setSent(true)} className="w-full mt-3 rounded-xl bg-[#69141e] text-white py-3 text-sm font-bold">Send Reset Link</button>
        {sent && <p className="mt-4 text-center text-xs font-semibold text-emerald-700">Reset link sent successfully.</p>}
      </div>
    </div>
  );
}
