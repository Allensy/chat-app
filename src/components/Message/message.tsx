import React, { useEffect, useState } from "react";
import { AI_STATE, Sender } from "../../types/Message.interface";
import "./message.scss";
import FeedbackControl from "../FeedbackControl/feedbackControl";
import ThreeDotsLoader from "../Loader/three-dots";

interface MessageItemProps {
  sender: Sender;
  message: string;
}

function MessageItem({ sender, message }: MessageItemProps) {
  const [animationFrame, setAnimationFrame] = useState<string>("");
//   const messageRef = React.useRef<string>(message);
  useEffect(() => {
    setTimeout(() => {
      setAnimationFrame("animate");
    });
  }, []);
//   useEffect(() => {
//     if (messageRef.current !== message) {
//       messageRef.current = message;
//       setAnimationFrame("");
//       setTimeout(() => {
//         setAnimationFrame("animate");
//       }, 200);
//     }
//   }, [message]);
  return (
    <div className={`MessageRow ${sender === Sender.AI ? "bot" : "user"}`}>
      <div className={`animation-frame ${animationFrame}`}>
        <div
          className={"message-item " + (sender === Sender.AI ? "bot" : "user")}
        >
          {sender === Sender.AI && message === AI_STATE.WAITING  ? (
            <ThreeDotsLoader />
          ) : (
            <div className="message">
              <div className="sender">{sender}</div>
              {message}
            </div>
          )}
        </div>
        <div className="feedback-wrapper">
          {sender === Sender.AI && message !== AI_STATE.WAITING && (
            <FeedbackControl />
          )}
        </div>
      </div>
    </div>
  );
}

export default MessageItem;
