import React from "react";
import { Edit3 } from "lucide-react";

export default function UserAvatar({
  className = "w-9 h-9",
  onClick,
  showEditBadge = false
}) {
  return (
    <div
      onClick={onClick}
      className={`relative rounded-full overflow-hidden border-2 border-white shadow-sm shrink-0 cursor-pointer group ${className}`}
    >
      <img
        src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=260&h=260&q=80"
        alt="User Profile"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-blue-500/10 mix-blend-overlay" />
      {showEditBadge && (
        <div className="absolute bottom-1 right-1 bg-neutral-900/80 p-1 rounded-full text-white border border-white/60 shadow">
          <Edit3 className="w-3.5 h-3.5" />
        </div>
      )}
    </div>
  );
}
