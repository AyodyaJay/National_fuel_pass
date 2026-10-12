import React, { useState, useRef } from "react";
import { ChevronLeft, Edit3, Camera } from "lucide-react";

export default function Profile({ navigate }) {
  const [editing, setEditing] = useState(false);
  const [profileImage, setProfileImage] = useState(
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=260&h=260&q=80"
  );
  const [data, setData] = useState({
    firstName: "Rehani",
    lastName: "Perera",
    phone: "0775147239",
    email: "rehani456@gmail.com"
  });

  // Hidden File Input Ref
  const fileInputRef = useRef(null);

  const update = (key, value) => setData({ ...data, [key]: value });

  // Handle Image Upload
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfileImage(imageUrl);
    }
  };

  const triggerFileInput = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <div className="w-full h-full flex flex-col bg-gradient-to-b from-[#e53e4c] via-[#d66f7a] to-[#f4d8dd] text-white">
      {/* Header */}
      <div className="flex items-center justify-between px-5 pt-5">
        <button onClick={() => navigate("home")} className="hover:opacity-80 transition">
          <ChevronLeft />
        </button>
        <span className="text-xs font-bold uppercase tracking-wider">User Profile</span>
        <button onClick={() => setEditing(!editing)} className="text-xs underline hover:opacity-80">
          {editing ? "Cancel" : "Edit"}
        </button>
      </div>

      {/* Hidden File Input for Image Selection */}
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleImageUpload}
        accept="image/*"
        className="hidden"
      />

      {/* Profile Picture Section */}
      <div className="flex justify-center pt-5">
        <div 
          onClick={triggerFileInput}
          className="relative p-1 rounded-full bg-cyan-400 shadow-lg cursor-pointer group"
          title="Click to change profile picture"
        >
          <img
            src={profileImage}
            alt="User Profile"
            className="w-24 h-24 rounded-full object-cover border-[3px] border-white group-hover:opacity-90 transition"
          />
          <div className="absolute bottom-0 right-1 w-7 h-7 rounded-full bg-neutral-900/90 border-2 border-white flex items-center justify-center shadow-md">
            <Camera className="w-3.5 h-3.5 text-white" />
          </div>
        </div>
      </div>

      {/* Profile Details */}
      <div className="px-8 flex-1 flex flex-col justify-center gap-4">
        {[
          ["firstName", "First Name"],
          ["lastName", "Last Name"],
          ["phone", "Phone Number"],
          ["email", "Email"]
        ].map(([key, label]) => (
          <div key={key}>
            <span className="text-[11px] text-white/70 block">{label}</span>
            {editing ? (
              <input
                value={data[key]}
                onChange={e => update(key, e.target.value)}
                className="w-full bg-white/20 rounded px-2 py-1.5 text-sm font-bold text-white outline-none border border-white/40 focus:bg-white/30 transition"
              />
            ) : (
              <span className="text-sm font-bold">{data[key]}</span>
            )}
          </div>
        ))}
        <div>
          <span className="text-[11px] text-white/70 block">Password</span>
          <span className="text-sm font-bold tracking-widest">••••••••••••</span>
        </div>
      </div>

      {/* Bottom Button */}
      <div className="px-8 pb-8 flex justify-center">
        <button
          onClick={() => setEditing(!editing)}
          className="px-7 py-2.5 rounded-xl bg-white text-[#69141e] font-black text-xs shadow-lg active:scale-95 transition"
        >
          {editing ? "Save Changes" : "Edit Profile"}
        </button>
      </div>
    </div>
  );
}