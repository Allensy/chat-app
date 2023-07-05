import React from "react";
import "./input.scss";

const ENTER_KEY = "Enter";

interface InputProps {
  onChange?: (e: any) => void;
  onEnter: (e: any) => void;
  value?: string;
}

function Input({ onChange, onEnter, value = "" }: InputProps) {
  const [inputValue, setInputValue] = React.useState<string>(value);

  const inputHandler = (e: any) => {
    setInputValue(e.target.value);
    onChange && onChange(inputValue);
  };
  const handleKeyDown = (e: { key: string }) => {
    if (e.key === ENTER_KEY) {
      onEnter(inputValue);
      setInputValue("");
    }
  };

  return (
    <input
      value={inputValue}
      className="Input"
      onKeyDown={handleKeyDown}
      onChange={inputHandler}
    ></input>
  );
}

export default Input;
