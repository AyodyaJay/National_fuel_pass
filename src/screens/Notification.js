import React, { useState } from "react";
import { ArrowLeft, Menu, Bell, CheckCheck, Trash2, Fuel, AlertCircle, RefreshCw } from "lucide-react";

const INITIAL_NOTIFICATIONS = [
  {
    id: 1,
    title: "Weekly Quota Restored",
    description: "Weekly fuel quota refreshed (+20L). Valid until next Sunday.",
    time: "2 hours ago",
    type: "quota",
    unread: true
  },
  {
    id: 2,
    title: "Fuel Transaction Success",
    description: "Fuel pumped at Ceypetco Avissawella (10L). Remaining quota: 10L.",
    time: "Yesterday, 4:30 PM",
    type: "pump",
    unread: true
  },
  {
    id: 3,
    title: "Price Revision Alert",
    description: "Price revision updated for Petrol 92 Octane. New rate active from midnight.",
    time: "3 days ago",
    type: "alert",
    unread: false
  }
];

export default function Notification({ openDrawer, navigate }) {
  const [notifications, setNotifications] = useState(INITIAL_NOTIFICATIONS);

  const markAllAsRead = () => {
    setNotifications((prev) => prev.map((n) => ({ ...n, unread: false })));
  };

  const clearAll = () => {
    setNotifications([]);
  };

  const getIcon = (type) => {
    switch (type) {
      case "quota":
        return <RefreshCw className="w-5 h-5 text-emerald-600" />;
      case "pump":
        return <Fuel className="w-5 h-5 text-rose-600" />;
      default:
        return <AlertCircle className="w-5 h-5 text-amber-600" />;
    }
  };

  return (
    <div className="relative w-full h-full bg-gradient-to-b from-[#fff5f5] to-[#fecdd3] overflow-hidden flex flex-col justify-between">
      {/* Fully Working Header */}
      <div className="w-full flex items-center justify-between px-4 py-3 z-20">
        <div className="flex items-center gap-2">
          <button
            onClick={() => navigate("home")}
            className="p-1.5 rounded-full hover:bg-black/5 active:bg-black/10 transition-colors"
            title="Go Back"
          >
            <ArrowLeft className="w-6 h-6 text-[#4a1525]" />
          </button>
          <button
            onClick={openDrawer}
            className="p-1.5 rounded-full hover:bg-black/5 active:bg-black/10 transition-colors"
            title="Open Menu"
          >
            <Menu className="w-6 h-6 text-[#4a1525]" />
          </button>
        </div>

        <h1 className="text-lg font-bold text-[#4a1525] text-center">
          Notifications
        </h1>

        <button
          onClick={() => navigate("profile")}
          className="w-9 h-9 rounded-full overflow-hidden border-2 border-white shadow-sm hover:opacity-90 active:scale-95 transition-all"
        >
          <img
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </button>
      </div>

      {/* Main Content Area */}
      <div className="px-5 flex-1 flex flex-col overflow-y-auto pt-2 gap-3">
        {/* Quick Actions Bar */}
        {notifications.length > 0 && (
          <div className="flex items-center justify-between px-1">
            <button
              onClick={markAllAsRead}
              className="text-xs font-semibold text-rose-900 hover:underline flex items-center gap-1"
            >
              <CheckCheck className="w-3.5 h-3.5" /> Mark all read
            </button>
            <button
              onClick={clearAll}
              className="text-xs font-semibold text-rose-700 hover:underline flex items-center gap-1"
            >
              <Trash2 className="w-3.5 h-3.5" /> Clear all
            </button>
          </div>
        )}

        {/* Notifications List */}
        {notifications.length > 0 ? (
          notifications.map((item) => (
            <div
              key={item.id}
              className={`p-4 rounded-2xl bg-white shadow-md border transition-all flex items-start gap-3 relative ${
                item.unread ? "border-rose-300 bg-rose-50/30" : "border-rose-100"
              }`}
            >
              {/* Icon Container */}
              <div className="p-2.5 rounded-full bg-rose-50 border border-rose-100 flex-shrink-0">
                {getIcon(item.type)}
              </div>

              {/* Notification Details */}
              <div className="flex-1 pr-2">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="font-bold text-sm text-gray-900 leading-tight">
                    {item.title}
                  </h3>
                  {item.unread && (
                    <span className="w-2 h-2 rounded-full bg-rose-600"></span>
                  )}
                </div>
                <p className="text-xs text-gray-600 leading-relaxed">
                  {item.description}
                </p>
                <span className="text-[10px] text-gray-400 font-medium block mt-2">
                  {item.time}
                </span>
              </div>
            </div>
          ))
        ) : (
          <div className="flex-1 flex flex-col items-center justify-center text-center p-6 text-gray-400">
            <Bell className="w-12 h-12 text-rose-200 mb-2" />
            <p className="text-sm font-semibold text-rose-900">No Notifications</p>
            <p className="text-xs text-gray-500 mt-1">You are all caught up!</p>
          </div>
        )}
      </div>

      {/* Bottom Action Button */}
      <div className="p-4">
        
      </div>
    </div>
  );
}