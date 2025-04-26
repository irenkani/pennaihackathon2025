import React, { useState } from "react";
import ChatWindow from "./components/ChatWindow";
import InputBox from "./components/InputBox";
import { Message } from "./types/messages";

const BACKEND_API_URL = "https://your-backend-url.com/chat";

function App() {
  const [messages, setMessages] = useState<Message[]>([
    { sender: "ai", text: "👋 Hi there! I'm your study buddy. What would you like to learn today?" }
  ]);

  const handleSend = async (userInput: string) => {
    const newMessages = [...messages, { sender: "user", text: userInput }];
    setMessages(newMessages);

    try {
      const response = await fetch(BACKEND_API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userInput })
      });
      const data = await response.json();
      setMessages(prev => [...prev, { sender: "ai", text: data.reply }]);
    } catch (error) {
      console.error(error);
      setMessages(prev => [...prev, { sender: "ai", text: "Oops! Something went wrong 😢" }]);
    }
  };

  return (
    <div className="relative min-h-screen w-screen overflow-hidden flex flex-col">
      {/* Moving gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400 animate-background-wave opacity-70 z-0"></div>

      {/* Content above background */}
      <div className="relative z-10 flex flex-col flex-1">
        <header className="text-center text-4xl font-extrabold text-white py-6 drop-shadow-lg animate-bounce">
          🎉 K-12 AI Study Buddy 🎉
        </header>

        <main className="flex flex-1 flex-col justify-center items-center px-6">
          <div className="w-full max-w-4xl bg-white bg-opacity-80 rounded-3xl shadow-2xl p-6 flex flex-col flex-1 overflow-hidden">
            <ChatWindow messages={messages} />
          </div>
        </main>

        <footer className="px-6 pb-6">
          <InputBox onSend={handleSend} />
        </footer>
      </div>
    </div>
  );
}

export default App;
