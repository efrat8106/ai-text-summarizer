import React from "react";

function Card({ item }) {
  return (
    <div className="border rounded-lg p-4 shadow hover:shadow-lg transition">
      <h3 className="text-lg font-bold">{item.title}</h3>

      <p className="text-sm text-gray-600">
        Status: {item.status}
      </p>

      <p className="text-sm text-gray-500">
        Created: {item.createdAt}
      </p>
    </div>
  );
}

export default Card;
