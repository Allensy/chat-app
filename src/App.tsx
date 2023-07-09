import React from "react";
import "./App.scss";
import Input from "./components/Input/input";
import Chat from "./components/Chat/chat";
import { Answer, Message, Sender } from "./types/Message.interface";
import { AI_STATE } from "./types/Message.interface";
import { getQuestionsAndAnswers } from "./services/ai-service";

function App() {
  const [messages, setMessages] = React.useState<(Message | Answer)[]>([]);

  const inputHandler = (value: string) => {
    console.log(value);
    messages.push({ sender: Sender.USER, message: value });
    setMessages([...messages]);
    runQuery(value);
  };

  const startLoader = (): void => {
    const loader: Answer = { sender: Sender.AI, answer: AI_STATE.WAITING };
    messages.push(loader);
    setMessages([...messages]);
    // return index;
  };

  const runQuery = async (query: string) => {
    startLoader();
    getQuestionsAndAnswers(query).then(
      (response: Answer[]) => {
        messages.pop();
        setMessages([...messages, ...response]);
      },
      (err) => {
        console.error(err);
        messages.pop();
        const error: Answer = {
          sender: Sender.AI,
          error: true,
          answer: "Oops! Sowwyyyyy!",
        };
        messages.push(error);
        setMessages([...messages]);
      }
    );
  };
  console.log(messages);
  return (
    <div className="App">
      <div className="chat-section">
        <Chat messages={messages}></Chat>
      </div>
      <div className="input-section">
        <Input onEnter={inputHandler}></Input>
      </div>
    </div>
  );
}

export default App;
