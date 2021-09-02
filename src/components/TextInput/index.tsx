import React, { ChangeEvent } from "react";
import styled from "styled-components";

const StyledTextInput = styled.input`
  width: 30%;
  padding: 1.5em;
  background-color: #F0F3F4;
  border-radius: 7px;
  border: none;
`;

export interface TextInputProps {
  placeholder: string;
  text: string;
  handleTextChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export function TextInput({ placeholder, text, handleTextChange }: TextInputProps) {
  return (
    <StyledTextInput
      type="text"
      value={text}
      placeholder={placeholder}
      onChange={handleTextChange}
    />
  );
}
