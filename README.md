# National Fuel Pass – Modular React Version
National fuel pass UI/UX and frontend
This project reorganizes the supplied National Fuel Pass prototype into separate files.

## Requested files

- `src/Main.js`
- `src/screens/Splash.js`
- `src/screens/Sign Up.js`
- `src/screens/Login.js`
- `src/screens/Reset Password.js`
- `src/screens/Home.js`
- `src/screens/Calander.js`
- `src/screens/Map.js`
- `src/screens/Remaining balance.js`
- `src/screens/QR.js`
- `src/screens/Notification.js`
- `src/screens/Navigation bar.js`
- `src/screens/Profile.js`

## Navigation

Splash
→ Login
→ Home

From Login:
- Sign Up → Home
- Reset Password → Login

From Home:
- Calendar
- Map
- QR
- Notification
- Remaining Balance
- Profile

From every main app screen:
- Hamburger icon → Navigation Bar
- Avatar → Profile
- Back → Home

## Run

```bash
npm install
npm run dev
```

Open the local Vite URL shown in the terminal.

## Note

The original uploaded source contains a combined React/TSX implementation with the main application screens and navigation state. This version separates those screens into maintainable files and adds the requested authentication flow. The authentication is UI-only; connect it to your backend/API when implementing real login, signup, and password reset.

