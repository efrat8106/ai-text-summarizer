import React from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="w-64 bg-gray-100 h-screen p-5 border-l border-gray-200 hidden md:block">
      <h2 className="text-xl font-bold mb-8 text-blue-900">תפריט</h2>
      <nav className="flex flex-col gap-4">
        <Link to="/" className="text-gray-700 hover:text-blue-600 font-medium transition">🏠 ראשי (סיכום)</Link>
        <Link to="/settings" className="text-gray-700 hover:text-blue-600 font-medium transition">⚙️ הגדרות</Link>
      </nav>
    </div>
  );
}

export default Sidebar;