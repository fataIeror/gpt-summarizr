import React from 'react';

const SummarizeButton = ({ handleSummarize, loading, isDisabled }) => {
  return (
    <button
      className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      onClick={handleSummarize}
      disabled={loading || isDisabled}
    >
      {loading ? "Summarizing..." : "Generate Summary"}
    </button>
  );
};

export default SummarizeButton;
