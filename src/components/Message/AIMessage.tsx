import React from "react";
import "./AIMessage.scss";
import { AI_STATE, Sender } from "../../types/Message.interface";
import ThreeDotsLoader from "../Loader/three-dots";

interface AIMessageProps {
  answer: string;
  isError?: boolean;
}

const AIMessage = ({ answer, isError }: AIMessageProps) => {
  return (
    <div className={`message-ai ${isError ? "error" : ""}`}>
      {answer === AI_STATE.WAITING ? (
        <ThreeDotsLoader />
      ) : (
        <div className="message">
          <div className="sender">{Sender.AI}</div>
          {answer}
        </div>
      )}
    </div>
  );
};

export default AIMessage;
