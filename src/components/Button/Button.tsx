import React from "react";
import "./Button.scss";

interface ButtonProps {
  children?: React.ReactNode;
  rounded?: boolean;
  onClick?: (e: any) => void;
}

const Button = ({ children, rounded, onClick }: ButtonProps) => {
  return (
    <button onClick={onClick} className={`Button ${rounded ? "rounded" : ""}`}>
      {children}
    </button>
  );
};

export default Button;
