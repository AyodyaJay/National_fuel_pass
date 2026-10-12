import React, { useState } from "react";
import Splash from "./screens/Splash";
import Login from "./screens/Login";
import SignUp from "./screens/Sign Up";
import ResetPassword from "./screens/Reset Password";
import Home from "./screens/Home";
import Calander from "./screens/Calander";
import Map from "./screens/Map";
import RemainingBalance from "./screens/Remaining balance";
import QR from "./screens/QR";
import Notification from "./screens/Notification";
import NavigationBar from "./screens/Navigation bar";
import Profile from "./screens/Profile";
import DeviceFrame from "./components/DeviceFrame";

export default function Main() {
  const [screen, setScreen] = useState("splash");
  const [drawerOpen, setDrawerOpen] = useState(false);

  const navigate = (target) => {
    setDrawerOpen(false);
    setScreen(target);
  };

  const appScreens = ["home", "calendar", "map", "balance", "qr", "notifications", "profile"];

  const renderScreen = () => {
    const common = {
      navigate,
      openDrawer: () => setDrawerOpen(true)
    };

    switch (screen) {
      case "splash": return <Splash onFinish={() => setScreen("login")} />;
      case "login": return <Login onLogin={() => setScreen("home")} onSignup={() => setScreen("signup")} onReset={() => setScreen("reset")} />;
      case "signup": return <SignUp onBack={() => setScreen("login")} onComplete={() => setScreen("home")} />;
      case "reset": return <ResetPassword onBack={() => setScreen("login")} />;
      case "home": return <Home {...common} />;
      case "calendar": return <Calander {...common} />;
      case "map": return <Map {...common} />;
      case "balance": return <RemainingBalance {...common} />;
      case "qr": return <QR {...common} />;
      case "notifications": return <Notification {...common} />;
      case "profile": return <Profile navigate={navigate} />;
      default: return <Home {...common} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#170e10] text-rose-50 flex flex-col items-center p-4 sm:p-6">
      <main className="flex-1 flex items-center justify-center">
        <DeviceFrame>
          {renderScreen()}
          {drawerOpen && appScreens.includes(screen) && (
            <NavigationBar navigate={navigate} close={() => setDrawerOpen(false)} />
          )}
        </DeviceFrame>
      </main>

      <footer className="py-3 text-[11px] text-rose-300/50 text-center">
        National Fuel Pass • Modular React Prototype
      </footer>
    </div>
  );
}