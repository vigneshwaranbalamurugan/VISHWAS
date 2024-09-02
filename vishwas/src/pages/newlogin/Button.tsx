import React from "react";

interface ButtonControlProps {
  text: string;
  className: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
}

const Button: React.FC<ButtonControlProps> = ({
  text,
  className,
  onClick,
  disabled = false,
  type = "button",
}) => {
  return (
    <>
      <button type={type} onClick={onClick} className={`py-3 outline-none px-5 rounded-lg duration-700 ${className}`} disabled={disabled} >
        {text}
      </button>
    </>
  );
};

export default Button;