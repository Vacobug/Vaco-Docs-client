import React, { MouseEvent } from "react";

interface ButtonProps {
  buttonTitle: string;
  handleClick: (event: MouseEvent<HTMLButtonElement>) => void;
}

function Button({ buttonTitle, handleClick }: ButtonProps) {
  return (
    <button onClick={handleClick}>
      {buttonTitle}
    </button>
  );
}

export default Button;
