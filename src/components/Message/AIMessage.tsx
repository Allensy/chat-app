import React from "react";
import "./AIMessage.scss";
import { AI_STATE, Sender } from "../../types/Message.interface";
import ThreeDotsLoader from "../Loader/three-dots";

interface AIMessageProps {
  response: string;
  isError?: boolean;
}

const AIMessage = ({ response, isError }: AIMessageProps) => {
  return (
    <div className={`message-ai ${isError ? "error" : ""}`}>
      {response === AI_STATE.WAITING ? (
        <ThreeDotsLoader />
      ) : (
        <div className="message">
          <div className="sender">{Sender.AI}</div>
          {response}
        </div>
      )}
    </div>
  );
};

export default AIMessage;
