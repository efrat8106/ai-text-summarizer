import React from "react";

function Header() {
  return (
    <header className="p-6 bg-gradient-to-r from-gray-900 to-blue-900 text-white shadow-lg flex justify-between items-center">
      <div className="flex items-center gap-2">
        <span className="text-2xl font-black tracking-tighter italic">AI</span>
        <h1 className="text-xl font-light">AI Smart Summarizer</h1>
      </div>
      <nav className="space-x-4 flex">
        <a href="#" className="hover:text-blue-400 transition ml-4">ראשי</a>
        <a href="#" className="hover:text-blue-400 transition">הגדרות</a>
      </nav>
    </header>
  );
}

export default Header;
