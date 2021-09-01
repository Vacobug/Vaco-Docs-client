import React, { ReactNode } from "react";
import styled from "styled-components";

import { TextInputProps, TextInput } from "../";

const StyledTextInputWithIcon = styled.article`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

interface TextInputWithIconProps extends TextInputProps {
  children: ReactNode;
}

function TextInputWithIcon({ placeholder, text, handleTextChange, children }: TextInputWithIconProps) {
  return (
    <StyledTextInputWithIcon>
      {children}
      <TextInput
        text={text}
        placeholder={placeholder}
        handleTextChange={handleTextChange}
      />
    </StyledTextInputWithIcon>
  );
}

export default TextInputWithIcon;
