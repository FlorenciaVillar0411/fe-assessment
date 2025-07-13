import React from "react";

export const Sidebar: React.FC = () => (
  <aside className="w-72 h-screen bg-white shadow-md p-3">
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
        <li className="text-gray-600 flex items-center">
          <span className="material-icons mr-2 text-xs">storage</span> Data Name
        </li>
        <li className="text-gray-600 flex items-center">
          <span className="material-icons mr-2 text-xs">bar_chart</span> Monitoring
        </li>
        <li className="text-gray-600 flex items-center">
          <span className="material-icons mr-2 text-xs">settings</span> Settings
        </li>
      </ul>
    </nav>
  </aside>
);