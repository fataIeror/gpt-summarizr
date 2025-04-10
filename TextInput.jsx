import React from 'react';

const TextInput = ({ text, setText }) => {
  return (
    <textarea
      className="w-full h-40 p-3 border rounded"
      placeholder="Paste your article or long text here..."
      value={text}
      onChange={(e) => setText(e.target.value)}
    />
  );
};

export default TextInput;
