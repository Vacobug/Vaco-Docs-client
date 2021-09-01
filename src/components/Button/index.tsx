import React, { MouseEvent } from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  width: 100px;
  height: 100px;
  background-color: white;
  border: 1px solid black;
  cursor: pointer;

  :hover {
    background-color: black;
    color: white;
    border: 1px solid white;
  }
`;

interface ButtonProps {
  buttonTitle: string;
  handleClick: (event: MouseEvent<HTMLButtonElement>) => void;
}

function Button({ buttonTitle, handleClick }: ButtonProps) {
  return (
    <StyledButton onClick={handleClick}>
      {buttonTitle}
    </StyledButton>
  );
}

export default Button;
