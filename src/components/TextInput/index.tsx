import React, { ChangeEvent } from "react";

interface TextInputProps {
  placeholder: string;
  text: string;
  handleTextChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

function TextInput({ placeholder, text, handleTextChange }: TextInputProps) {
  return (
    <input
      type="text"
      value={text}
      placeholder={placeholder}
      onChange={handleTextChange}
    />
  );
}

export default TextInput;
