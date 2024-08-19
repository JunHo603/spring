import React, { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    overflow: hidden;
  }
`;

const Wrap = styled.div`
  position: relative;
  top: 0;
  width: 100%;
  height: 100%;
  transition: 0.5s;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${({ bgColor }) => bgColor};
`;

const colors = ["#9e97cb", "#dbd8eb", "#348edd", "#d4daea"];

export function OnePageScroll() {
  const [page, setPage] = useState(0);
  const lastPage = colors.length - 1;

  const handleWheel = (e) => {
    e.preventDefault();
    if (e.deltaY > 0) {
      setPage((prevPage) => (prevPage < lastPage ? prevPage + 1 : lastPage));
    } else if (e.deltaY < 0) {
      setPage((prevPage) => (prevPage > 0 ? prevPage - 1 : 0));
    }
  };

  return (
    <>
      <GlobalStyle />
      <Wrap style={{ top: `${page * -100}vh` }} onWheel={handleWheel}>
        {colors.map((color, index) => (
          <Container key={index} bgColor={color}>
            <section></section>
          </Container>
        ))}
      </Wrap>
    </>
  );
}

export default OnePageScroll;
