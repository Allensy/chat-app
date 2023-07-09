import React from "react";
import "./UserMessage.scss";

interface UserMessageProps {
  sender: string;
  message: string;
}

const UserMessage = ({ sender, message }: UserMessageProps) => {
  return (
    <div className="message-user">
      <div className="sender">{sender}</div>
      {message}
    </div>
  );
};

export default UserMessage;
