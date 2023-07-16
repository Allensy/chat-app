import React from "react";
import "./input.scss";

const ENTER_KEY = "Enter";

interface InputProps {
  onChange?: (e: any) => void;
  onEnter?: (e: any) => void;
  value?: string;
  label?: string;
}

function Input({ onChange, onEnter, value = "", label }: InputProps) {
  const [inputValue, setInputValue] = React.useState<string>(value);

  const inputHandler = (e: any) => {
    setInputValue(e.target.value);
    onChange && onChange(e.target.value);
  };
  const handleKeyDown = (e: { key: string }) => {
    if (e.key === ENTER_KEY) {
      onEnter && onEnter(inputValue);
      setInputValue("");
    }
  };

  return (
    <div className="Input_wrapper">
      {label ? <label className="Input_label">{label}</label> : null}
      <input
        value={inputValue}
        className="Input"
        onKeyDown={handleKeyDown}
        onChange={inputHandler}
      ></input>
    </div>
  );
}

export default Input;
