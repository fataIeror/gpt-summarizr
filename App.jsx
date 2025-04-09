import React, { useState } from "react";
import axios from "axios";

const App = () => {
  const [text, setText] = useState("");
  const [summary, setSummary] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSummarize = async () => {
    try {
      setLoading(true);
      const response = await axios.post("http://localhost:5000/api/summarize", { text });
      setSummary(response.data.summary);
    } catch (error) {
      console.error(error);
      alert("Error summarizing text");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen p-6 bg-gray-100 font-sans">
      <h1 className="text-3xl font-bold mb-4">GPT Summarizr</h1>
      <textarea
        className="w-full h-40 p-3 border rounded"
        placeholder="Paste your article or long text here..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      ></textarea>
      <button
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        onClick={handleSummarize}
        disabled={loading || !text.trim()}
      >
        {loading ? "Summarizing..." : "Generate Summary"}
      </button>
      {summary && (
        <div className="mt-6 p-4 bg-white rounded shadow">
          <h2 className="text-xl font-semibold mb-2">Summary:</h2>
          <p>{summary}</p>
        </div>
      )}
    </div>
  );
};

export default App;
