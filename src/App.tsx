import React, { useEffect } from "react";
import "./App.scss";
import Input from "./components/Input/input";
import Chat from "./components/Chat/chat";
import { Answer, Message, Sender, UserData } from "./types/Message.interface";
import { AI_STATE } from "./types/Message.interface";
import {
  getQuestionsAndAnswers,
  initializeUser,
  getUserData,
  resetUserData,
} from "./services/ai-service";
import Dialog from "./components/Dialog/Dialog";
import Button from "./components/Button/Button";

function App() {
  const [showModal, setShowModal] = React.useState<boolean>(false);

  useEffect(() => {
    if (!getUserData()) setShowModal(true);
  }, []);

  const [messages, setMessages] = React.useState<(Message | Answer)[]>([]);

  useEffect(() => {
    if (!getUserData()) setShowModal(true);
  }, [messages]);

  const inputHandler = (value: string) => {
    messages.push({ sender: Sender.USER, message: value });
    setMessages([...messages]);
    runQuery(value);
  };

  const startLoader = (): void => {
    const loader: Answer = { sender: Sender.AI, response: AI_STATE.WAITING };
    messages.push(loader);
    setMessages([...messages]);
  };

  const runQuery = async (query: string) => {
    startLoader();
    getQuestionsAndAnswers(query).then(
      (response: Answer) => {
        messages.pop();
        setMessages([...messages, response]);
      },
      (err) => {
        console.error(err);
        messages.pop();
        const error: Answer = {
          sender: Sender.AI,
          error: true,
          response:
            "A temporal requests limit, please try again in a few seconds",
        };
        messages.push(error);
        setMessages([...messages]);
      }
    );
  };

  const setUserData = (data: UserData) => {
    setShowModal(false);
    initializeUser(data);
  };

  const newChat = () => {
    resetUserData();
    setMessages([]);
  };
  return (
    <div className="App">
      <div className="new_button">
        <Button onClick={newChat} rounded>
          +
        </Button>
      </div>
      {showModal && <Dialog onSave={setUserData} />}
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
