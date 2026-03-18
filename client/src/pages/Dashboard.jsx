import React, { useState, useMemo } from "react";
import data from "../data/mockData.json";
import Card from "../components/Card";
import SummarizerForm from "../components/SummarizerForm";

function Dashboard() {
  const [search, setSearch] = useState("");

  const filteredData = useMemo(() => {
    return data.filter((item) =>
      item.title.toLowerCase().includes(search.toLowerCase()) ||
      item.summary.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* אזור יצירת סיכום חדש */}
      <SummarizerForm />

      <hr className="my-10 border-gray-200" />

      {/* אזור היסטוריית סיכומים */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">היסטוריית סיכומים</h2>
        <input
          type="text"
          placeholder="חפש בסיכומים..."
          className="border p-2 rounded-lg w-64 shadow-sm focus:ring-2 focus:ring-blue-400 outline-none"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {filteredData.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredData.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500 mt-10">לא נמצאו סיכומים התואמים לחיפוש שלך.</p>
      )}
    </div>
  );
}

export default Dashboard;
