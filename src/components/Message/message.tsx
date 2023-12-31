import { useEffect, useState } from "react";
import {
  AI_STATE,
  Answer,
  Message,
  Sender,
} from "../../types/Message.interface";
import FeedbackControl from "../FeedbackControl/feedbackControl";
import AIMessage from "./AIMessage";
import UserMessage from "./UserMessage";
import "./message.scss";

type MessageOrAnswer = Message | Answer;

interface MessageItemProps {
  message: MessageOrAnswer;
}

function MessageItem({ message }: MessageItemProps) {
  const [animationFrame, setAnimationFrame] = useState<string>("");
  useEffect(() => {
    setTimeout(() => {
      setAnimationFrame("animate");
    });
  }, []);

  const isSenderAI = message.sender === Sender.AI || !message.sender;
  const isAMessage = "message" in message;
  const isAnAnswer = "response" in message;

  return (
    <div className={`MessageRow ${isSenderAI ? "bot" : "user"}`}>
      <div className={`animation-frame ${animationFrame}`}>
        {isSenderAI && isAnAnswer ? (
          <AIMessage
            response={message.response}
            isError={message.error}
          ></AIMessage>
        ) : isAMessage ? (
          <UserMessage message={message.message} sender={message.sender} />
        ) : null}
        <div className="feedback-wrapper">
          {isAnAnswer &&
            !message.error &&
            message.response !== AI_STATE.WAITING && (
              <FeedbackControl response={message} />
            )}
        </div>
      </div>
    </div>
  );
}

export default MessageItem;
