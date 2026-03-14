import React, { useState, useMemo } from "react";
import data from "../data/mockData.json";
import Card from "../components/Card";

function Dashboard() {
  const [search, setSearch] = useState("");

  const filteredData = useMemo(() => {
    return data.filter((item) =>
      item.title.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  return (
    <div className="p-4">

      <input
        type="text"
        placeholder="Search..."
        className="border p-2 mb-4 w-full"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="grid grid-cols-3 gap-4">
        {filteredData.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </div>

    </div>
  );
}

export default Dashboard;
