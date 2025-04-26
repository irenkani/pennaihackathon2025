import React from "react";

export interface MessageBubbleProps {
  sender: "user" | "ai";
  text: string;
}

const MessageBubble: React.FC<MessageBubbleProps> = ({ sender, text }) => {
  const isUser = sender === "user";

  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} animate-fade-in`}>
      <div className={`max-w-[75%] px-5 py-3 rounded-3xl shadow-lg 
        ${isUser ? 'bg-gradient-to-r from-green-400 to-green-600 text-white' 
                 : 'bg-gradient-to-r from-pink-300 to-purple-400 text-white'}
        transition-transform transform hover:scale-105`}>
        {text}
      </div>
    </div>
  );
};

export default MessageBubble;
