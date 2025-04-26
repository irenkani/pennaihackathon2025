import React, { useState } from "react";

interface InputBoxProps {
  onSend: (input: string) => void;
}

function InputBox({ onSend }: InputBoxProps) {
  const [input, setInput] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!input.trim()) return;
    onSend(input);
    setInput("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex p-4 bg-white">
      <input
        className="flex-1 p-2 rounded-l-2xl border border-gray-300"
        type="text"
        placeholder="Ask me anything!"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit" className="bg-blue-500 text-white px-4 rounded-r-2xl hover:bg-blue-600">
        Send
      </button>
    </form>
  );
}

export default InputBox;