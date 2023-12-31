import React, { useEffect, useRef } from "react";
import "./chat.scss";
import MessageItem from "../Message/message";
import { Answer, Message } from "../../types/Message.interface";

interface ChatProps {
  messages?: (Message | Answer)[];
}

function Chat({ messages = [] }: ChatProps) {
  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    if (
      messagesEndRef.current !== null &&
      messagesEndRef.current.scrollIntoView
    ) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  return (
    <div className="Chat">
      {messages.map((message, index) => (
        <MessageItem key={index} message={message}></MessageItem>
      ))}
      <div ref={messagesEndRef}></div>
    </div>
  );
}

export default Chat;
