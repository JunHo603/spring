import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { NavItem } from "./NavItem";
import styled from "styled-components";
import { getCurrentUser } from "../../Api/UserApi/UserApi";
// import { useAuth } from "./AuthContext";

const Container = styled.nav`
  box-sizing: border-box;
  width: 100%;
  padding: 32px 32px 32px 240px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 997;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  color: #fff;
`;

const StyledLink = styled(Link)`
  height: 44px;
  padding: 0 6px;
  font-size: 14px;
  line-height: 44px;
  border-radius: 8px;
  background-color: transparent;
  transition: all 0.1s;
  color: #9da2b9;
  position: relative;
`;

export function Navbar() {
  const [current, setCurrent] = useState(false);
  const [role, setRole] = useState(false);

  // 로그인 상태 & ROUE_ADMIN 확인
  useEffect(() => {
    currentChk();
  }, []);

  async function currentChk() {
    try {
      const loginCurrent = await getCurrentUser();
      if (loginCurrent.userId) {
        setCurrent(!!loginCurrent);
      }
      if (loginCurrent.authority[0].authority === "ROLE_ADMIN") {
        setRole(true);
      }
    } catch (error) {
      console.log(error);
      setCurrent(false);
    }
  }

  return (
    <>
      <Container>
        <Header>
          {current ? (
            <StyledLink to="/mypage/user">
              <NavItem icon="ti ti-user" />
            </StyledLink>
          ) : null}
          <StyledLink to="/cart">
            <NavItem icon="ti ti-shopping-cart" />
          </StyledLink>
          <StyledLink to="/community/notices">
            <NavItem icon="ti ti-friends" />
          </StyledLink>
          {current ? (
            <StyledLink to="/login">
              <NavItem icon="ti ti-logout" name="로그아웃" />
            </StyledLink>
          ) : (
            <StyledLink to="/login">
              <NavItem icon="ti ti-login" name="로그인" />
            </StyledLink>
          )}
          {role ? (
            <StyledLink to="/admin/user">
              <NavItem icon="ti ti-settings" name="관리자" />
            </StyledLink>
          ) : null}
        </Header>

        {/* <StyledLink to="/home">
          <NavItem icon="ti ti-home" name="홈" />
        </StyledLink>
        <StyledLink to="/lecture">
          <NavItem icon="ti ti-device-tv" name="강의" />
        </StyledLink> */}
      </Container>
    </>
  );
}
