import React from 'react';

const SummaryBox = ({ summary }) => {
  return (
    <div className="mt-6 p-4 bg-white rounded shadow">
      <h2 className="text-xl font-semibold mb-2">Summary:</h2>
      <p>{summary}</p>
    </div>
  );
};

export default SummaryBox;
