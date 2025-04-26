import React, { useState } from "react";
import ChatWindow from "./components/ChatWindow";
import InputBox from "./components/InputBox";
import { Message } from "./types/messages"; // corrected filename from 'messages' to 'message'

const BACKEND_API_URL = "https://colab-chatbot-server-1234.a.run.app/chat";

function App() {
  const [messages, setMessages] = useState<Message[]>([
    { sender: "ai", text: "Hi! I'm your study buddy! 📚 What do you need help with?" }
  ]);

  const handleSend = async (userInput: string) => {
    const newMessages = [...messages, { sender: "user", text: userInput }];
    setMessages(newMessages);

    try {
      const response = await fetch(BACKEND_API_URL, {   // ✅ now using the constant correctly
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userInput })
      });
      const data = await response.json();
      setMessages(prev => [...prev, { sender: "ai", text: data.reply }]);
    } catch (error) {
      console.error(error);
      setMessages(prev => [...prev, { sender: "ai", text: "Oops! Something went wrong 😕" }]);
    }
  };

  return (
    <div className="flex flex-col h-screen bg-blue-100">
      <ChatWindow messages={messages} />
      <InputBox onSend={handleSend} />
    </div>
  );
}

export default App;
