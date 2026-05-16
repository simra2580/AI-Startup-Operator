import { useState } from "react";

export default function Settings() {
  const [darkMode, setDarkMode] = useState(true);
  const [notifications, setNotifications] = useState(true);

  return (
    <div className="min-h-screen p-8 text-white">
      <h1 className="text-4xl font-bold mb-8">Settings</h1>

      <div className="glass-card p-8 max-w-2xl">
        <div className="flex justify-between items-center mb-6">
          <span className="text-xl">Dark Mode</span>

          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`px-5 py-2 rounded-xl ${
              darkMode
                ? "bg-green-500"
                : "bg-red-500"
            }`}
          >
            {darkMode ? "ON" : "OFF"}
          </button>
        </div>

        <div className="flex justify-between items-center mb-6">
          <span className="text-xl">
            Notifications
          </span>

          <button
            onClick={() =>
              setNotifications(!notifications)
            }
            className={`px-5 py-2 rounded-xl ${
              notifications
                ? "bg-green-500"
                : "bg-red-500"
            }`}
          >
            {notifications ? "ON" : "OFF"}
          </button>
        </div>

        <button className="btn-primary mt-6">
          Save Settings
        </button>
      </div>
    </div>
  );
}