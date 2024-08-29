import React from "react";

const Button = ({ text, className, onClick, disabled = false }) => {
  return (
    <>
      <button onClick={onClick} className={`py-3 outline-none px-5 rounded-lg duration-700 ${className}`} disabled={disabled}>
        {text}
      </button>
    </>
  );
};

export default Button;