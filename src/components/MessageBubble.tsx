import React from "react";

export interface MessageBubbleProps {
  sender: "user" | "ai";
  text: string;
}

const MessageBubble: React.FC<MessageBubbleProps> = ({ sender, text }) => {
  const isUser = sender === "user";

  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"} mb-2`}>
      <div
        className={`max-w-xs px-4 py-2 rounded-2xl ${
          isUser ? "bg-green-400 text-white" : "bg-white text-black"
        } shadow`}
      >
        {text}
      </div>
    </div>
  );
};

export default MessageBubble;