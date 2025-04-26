import React, { useState } from "react";

interface InputBoxProps {
  onSend: (input: string) => void;
}

const InputBox: React.FC<InputBoxProps> = ({ onSend }) => {
  const [input, setInput] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!input.trim()) return;
    onSend(input);
    setInput("");
  };

  const handleUploadClick = () => {
    alert("Upload file button clicked! (dummy for now)");
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-2 bg-white rounded-full p-4 shadow-xl">
      <button
        type="button"
        onClick={handleUploadClick}
        className="bg-purple-400 hover:bg-purple-500 text-white font-bold py-2 px-4 rounded-full transition-all"
      >
        📄 Upload
      </button>

      <input
        className="flex-1 p-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
        type="text"
        placeholder="Ask me anything! ✏️"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        type="submit"
        className="bg-blue-400 hover:bg-blue-500 text-white font-bold py-2 px-6 rounded-full transition-all"
      >
        Send
      </button>
    </form>
  );
};

export default InputBox;
