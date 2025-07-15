import React from "react";
import { Link } from "react-router-dom";

  const navItems = [
    { icon: "storage", label: "Data Name", to: "/data" },
    { icon: "bar_chart", label: "Monitoring", to: "/monitoring" },
    { icon: "settings", label: "Settings", to: "/settings" },
  ];

export const Sidebar: React.FC = () => (
  <aside className="w-72 min-h-screen h-full bg-white shadow-md p-3">
    <section className="mb-3 flex items-center">
      <div className="w-9 h-9 bg-[#b5b4e2] rounded mr-2" />
      <p className="text-sm font-bold">AirOps</p>
    </section>
    <button
      type="button"
      className="w-full bg-white border border-gray-300 text-gray-700 py-1 px-4 rounded mb-3 hover:bg-gray-50"
      aria-label="Create new"
    >
      New +
    </button>
<nav aria-label="Sidebar navigation">
      <ul className="space-y-2 text-xs">
        {navItems.map(({ icon, label, to }) => (
          <li key={to}>
            <Link
              to={to}
              className={`flex items-center text-gray-600 hover:text-black transition-colors ${
                location.pathname === to ? 'font-bold text-black' : ''
              }`}
            >
              <span className="material-icons mr-2 text-xs">{icon}</span> {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  </aside>
);