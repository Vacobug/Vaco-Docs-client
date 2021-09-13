import React, { MouseEvent } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 15px;
  margin-left: 10px;
  height: 25px;
  width: 25px;
  cursor: pointer;
`;

const LineDiv = styled.div`
  border: 2px solid black;
`;

function HamburgerButton() {
  const handleClick = (event: MouseEvent<HTMLDivElement>): void => {
  };

  return (
    <Container onClick={handleClick}>
      <LineDiv />
      <LineDiv />
      <LineDiv />
    </Container>
  );
}

export default HamburgerButton;