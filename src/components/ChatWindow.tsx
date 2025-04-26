import React from "react";
import MessageBubble from "./MessageBubble";
import { Message } from "../types/messages";

interface ChatWindowProps {
  messages: Message[];
}

const ChatWindow: React.FC<ChatWindowProps> = ({ messages }) => {
  return (
    <div className="flex-1 overflow-y-auto p-4">
      {messages.map((msg, index) => (
        <MessageBubble
          key={index} 
          sender={msg.sender}
          text={msg.text}
        />
      ))}
    </div>
  );
};

export default ChatWindow;