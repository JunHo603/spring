import { Link } from "react-router-dom";
import React from "react";
import styled from "styled-components";
import { HeaderItem } from "./HeaderItem";

const Nav = styled.nav`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-bottom: 0.5px solid white;
`;

const Logo = styled.div`
  img {
    width: 100%;
    color: white;
  }
`;

const MenuBar = styled.div`
  padding: 28px 17px;

  /* a {
    text-decoration: none;
    color: white;
    font-size: 30px;
    font-weight: 700;
    padding: 28px 17px;
  }

  span {
    color: white;
  }

  a:hover {
    color: #1ed760;
  } */
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
  font-size: 30px;
  font-weight: 700;
  padding: 28px 17px;
  color: white;
  &:hover {
    color: #1ed760;
  }
`;

export function Header() {
  return (
    <Nav>
      <Logo>
        <img src="logo.png" alt="logo" />
      </Logo>
      <MenuBar>
        <StyledLink to="/index">
          <HeaderItem name="상세보기"></HeaderItem>
        </StyledLink>
        <StyledLink to="/login">
          <HeaderItem name="장바구니"></HeaderItem>
        </StyledLink>
        <StyledLink to="/lectureDetail">
          <HeaderItem name="마이페이지"></HeaderItem>
        </StyledLink>
        <StyledLink to="/">
          <HeaderItem name="커뮤니티"></HeaderItem>
        </StyledLink>
        {/* <a href="">상세보기</a>
        <a href="">장바구니</a>
        <a href="">마이페이지</a>
        <a href="">커뮤니티</a> */}
        <span>|</span>
        <StyledLink to="/">
          <HeaderItem name="회원가입"></HeaderItem>
        </StyledLink>
        <StyledLink to="/">
          <HeaderItem name="로그인"></HeaderItem>
        </StyledLink>
        {/* <a href="">회원가입</a>
        <a href="">로그인</a> */}
      </MenuBar>
    </Nav>
  );
}
