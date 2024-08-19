import { useState } from "react";
import styled from "styled-components";
import { Home } from "./Home";
import { About } from "./About";
import { Contact } from "./Contact";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

const Container = styled.div``;
const Menu = styled.div`
  display: flex;
`;
const Body = styled.div``;

export function ReactRouter() {
  return (
    <>
      <BrowserRouter>
        <Container>
          <Menu>
            {/* a태그는 화면 reloading을 강제로 하기 때문에 리액트 구조에 맞지않음
            <a href="/home">HOME</a>
            <a href="/about">ABOUT</a>
            <a href="/contact">CONTACT</a> */}

            <Link to="/">HOME</Link>
            <Link to="/about">ABOUT</Link>
            <Link to="/contact">CONTACT</Link>
          </Menu>
          <Body>
            <Routes>
              <Route path="/" element={<Home />}></Route>;
              <Route path="/home" element={<Home />}></Route>;
              <Route path="/about" element={<About />}></Route>;
              <Route path="/contact" element={<Contact />}></Route>;
            </Routes>
          </Body>
        </Container>
      </BrowserRouter>
    </>
  );
}
