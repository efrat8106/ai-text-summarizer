import React from "react";

function Card({ item }) {
  return (
    <div className="bg-gray-800 text-white border border-gray-700 rounded-xl p-5 shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
      <div className="flex justify-between items-start mb-3">
        <h3 className="text-lg font-bold text-blue-400">{item.title}</h3>
        <span className={`text-xs px-2 py-1 rounded ${item.status === 'completed' ? 'bg-green-900 text-green-300' : 'bg-yellow-900 text-yellow-300'}`}>
          {item.status}
        </span>
      </div>
      
      <p className="text-sm text-gray-300 mb-4 line-clamp-3">
        {item.summary}
      </p>

      <div className="text-xs text-gray-500 border-t border-gray-700 pt-3">
        נוצר בתאריך: {item.createdAt}
      </div>
    </div>
  );
}

export default Card;
