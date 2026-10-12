import React from "react";
import { Menu as MenuIcon } from "lucide-react";
import UserAvatar from "./UserAvatar";

export default function ScreenHeader({ title, onMenuClick, onAvatarClick }) {
  return (
    <div className="w-full flex items-center justify-between px-6 pt-5 pb-2 relative z-20">
      <button
        onClick={onMenuClick}
        className="p-1 -ml-1 text-[#661b24] hover:opacity-75 transition-opacity active:scale-95"
        aria-label="Open menu"
      >
        <MenuIcon className="w-6 h-6 stroke-[2.2]" />
      </button>
      <h1 className="text-base sm:text-lg font-bold text-[#641b24] tracking-tight">
        {title}
      </h1>
      <UserAvatar
        className="w-8 h-8 sm:w-9 sm:h-9"
        onClick={onAvatarClick}
      />
    </div>
  );
}
