import React from "react";
import "./App.scss";
import Input from "./components/Input/input";
import Chat from "./components/Chat/chat";
import { Message, Sender } from "./types/Message.interface";
import { delay } from "./utils/utils";
import { AI_STATE } from "./types/Message.interface";

function App() {
  const [messages, setMessages] = React.useState<Message[]>([]);

  const inputHandler = (value: string) => {
    console.log(value);
    messages.push({ sender: Sender.USER, message: value });
    setMessages([...messages]);
    runQuery(value);
  };

  const startLoader = (): number => {
    const loader = { sender: Sender.AI, message: AI_STATE.WAITING };
    const index = messages.push(loader);
    setMessages([...messages]);
    return index;
  };

  const runQuery = async (query: string) => {
    await delay(500);
    const indexToUpdate = startLoader();

    await delay(2000);

    // messages.pop();
    // setMessages([...messages]);
    await delay(10);
    messages[indexToUpdate - 1].message = "Hello";
    setMessages([...messages]);
  };

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
