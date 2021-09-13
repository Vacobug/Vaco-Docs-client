import React, { useState, ChangeEvent } from "react";
import styled from "styled-components";
import { AiOutlineSearch } from "react-icons/ai";

import TextInputWithIcon from "../TextInput/TextInputWithIcon";
import HamburgerButton from "../HamburgerButton";

const StyledNavbar = styled.article`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 1em;
`;

function TopNavbar() {
  const [text, setText] = useState<string>("");

  const handleTextChange = (event: ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  return (
    <StyledNavbar>
      <HamburgerButton />

      <TextInputWithIcon
        text={text}
        placeholder="검색"
        handleTextChange={handleTextChange}
      >
        <AiOutlineSearch size={30} />
      </TextInputWithIcon>
    </StyledNavbar>
  );
}

export default TopNavbar;
