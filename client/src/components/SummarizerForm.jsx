import React, { useState } from "react";

function SummarizerForm() {
  const [text, setText] = useState("");

  const handleSummarize = () => {
    alert("הטקסט נשלח לסיכום (בשלבים הבאים נחבר את זה ל-AI באמת!)");
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 mb-8">
      <h2 className="text-xl font-bold mb-4 text-gray-800">סיכום טקסט חדש</h2>
      <textarea
        className="w-full h-40 p-4 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none resize-none transition"
        placeholder="הדבק כאן את החומר העיוני שברצונך לסכם..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        onClick={handleSummarize}
        className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg transition duration-200"
      >
        סכם עכשיו ✨
      </button>
    </div>
  );
}

export default SummarizerForm;
