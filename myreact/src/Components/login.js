import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f0f0f0;
`;

const Box = styled.div`
  background-color: white;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  width: 300px;
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 20px;
  font-family: "Poppins", sans-serif;
`;

const InputBox = styled.div`
  position: relative;
  margin-bottom: 20px;

  input {
    width: 100%;
    padding: 10px;
    border: none;
    border-bottom: 2px solid #ccc;
    outline: none;
    font-size: 16px;
    font-family: "Poppins", sans-serif;

    &:focus {
      border-bottom-color: #007bff;
    }
  }

  label {
    position: absolute;
    top: 0;
    left: 0;
    padding: 10px 0;
    font-size: 14px;
    color: #aaa;
    font-family: "Poppins", sans-serif;
  }
`;

const ButtonBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Button = styled.div`
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  text-align: center;
  font-family: "Poppins", sans-serif;

  &:hover {
    background-color: #0056b3;
  }
`;

const HiddenBox = styled.div`
  display: ${(props) => (props.hidden ? "none" : "block")};
`;

export function Login() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isSignupVisible, setIsSignupVisible] = useState(false);
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [signupUserId, setSignupUserId] = useState("");
  const [signupPassword, setSignupPassword] = useState("");
  const [signupUserName, setSignupUserName] = useState("");
  const [signupEmail, setSignupEmail] = useState("");
  const navigate = useNavigate();

  const urlLogin = "http://localhost:8080/user/login";
  const urlLogout = "http://localhost:8080/user/logout";
  const urlSignup = "http://localhost:8080/user/signup";

  useEffect(() => {
    // 세션 확인
    sessionCurrent();
  }, []);

  const handleLogin = async () => {
    const data = { userId, password };

    try {
      const response = await axios.post(urlLogin, data, {
        withCredentials: true,
      });
      console.log("로그인 데이터: ", response.data);
      setIsLoggedIn(true); // 로그인 성공 시 상태 업데이트
      navigate("/index");
    } catch (error) {
      console.error("로그인 에러 발생: ", error);
      alert("탈퇴 회원이거나, 잘못된 로그인 정보입니다.");
    }
  };

  const handleSignup = async () => {
    const data = {
      userId: signupUserId,
      password: signupPassword,
      userName: signupUserName,
      userEmail: signupEmail,
    };

    if (signupUserId && signupPassword && signupUserName && signupEmail) {
      try {
        const response = await axios.post(urlSignup, data, {
          withCredentials: true,
        });
        console.log("회원가입 데이터: ", response.data);
        if (response.status === 201) {
          alert("회원가입이 완료되었습니다.");
          resetLoginFields();
          setIsSignupVisible(false);
        }
      } catch (error) {
        console.error("회원가입 에러 발생: ", error);
      }
    } else {
      alert("가입정보를 모두 입력하여 주세요!!!");
    }
  };

  const handleLogout = async () => {
    try {
      const response = await axios.post(
        urlLogout,
        {},
        { withCredentials: true }
      );
      console.log("로그아웃 데이터: ", response);
      if (response.status === 200) {
        setIsLoggedIn(false);
        window.location.href = "main.html";
      }
    } catch (error) {
      console.error("로그아웃 에러 발생: ", error);
    }
  };

  const sessionCurrent = async () => {
    try {
      const response = await axios.get("http://localhost:8080/user/current", {
        withCredentials: true,
      });
      console.log("세션 데이터: ", response);
      if (response.status === 200) {
        setIsLoggedIn(true);
      }
    } catch (error) {
      console.error("세션 확인 에러 발생: ", error);
    }
  };

  const resetLoginFields = () => {
    setUserId("");
    setPassword("");
  };

  const resetSignupFields = () => {
    setSignupUserId("");
    setSignupPassword("");
    setSignupUserName("");
    setSignupEmail("");
  };

  return (
    <Container>
      {!isLoggedIn ? (
        <>
          {!isSignupVisible ? (
            <Box>
              <Title>로그인</Title>
              <InputBox>
                <input
                  id="userID"
                  type="text"
                  //   placeholder="아이디"
                  value={userId}
                  onChange={(e) => setUserId(e.target.value)}
                />
                <label htmlFor="userID">아이디</label>
              </InputBox>
              <InputBox>
                <input
                  id="password"
                  type="password"
                  //   placeholder="비밀번호"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <label htmlFor="password">비밀번호</label>
              </InputBox>
              <ButtonBox>
                <Button onClick={handleLogin}>로그인</Button>
                <Button onClick={() => setIsSignupVisible(true)}>
                  회원가입
                </Button>
              </ButtonBox>
            </Box>
          ) : (
            <Box>
              <Title>회원가입</Title>
              <InputBox>
                <label htmlFor="signupUserID">User ID</label>
                <input
                  type="text"
                  id="signupUserID"
                  value={signupUserId}
                  onChange={(e) => setSignupUserId(e.target.value)}
                />
              </InputBox>
              <InputBox>
                <label htmlFor="signupPassword">Password</label>
                <input
                  type="password"
                  id="signupPassword"
                  value={signupPassword}
                  onChange={(e) => setSignupPassword(e.target.value)}
                />
              </InputBox>
              <InputBox>
                <label htmlFor="signupUserName">User Name</label>
                <input
                  type="text"
                  id="signupUserName"
                  value={signupUserName}
                  onChange={(e) => setSignupUserName(e.target.value)}
                />
              </InputBox>
              <InputBox>
                <label htmlFor="signupEmail">Email</label>
                <input
                  type="email"
                  id="signupEmail"
                  value={signupEmail}
                  onChange={(e) => setSignupEmail(e.target.value)}
                />
              </InputBox>
              <ButtonBox>
                <Button onClick={handleSignup}>회원등록</Button>
                <Button
                  onClick={() => {
                    setIsSignupVisible(false);
                    resetSignupFields();
                  }}
                >
                  닫기
                </Button>
              </ButtonBox>
            </Box>
          )}
        </>
      ) : (
        <HiddenBox>
          <p>로그아웃 하시겠습니까?</p>
          <ButtonBox>
            <Button onClick={handleLogout}>확인</Button>
            <Button onClick={() => (window.location.href = "main.html")}>
              취소
            </Button>
          </ButtonBox>
        </HiddenBox>
      )}
    </Container>
  );
}

export default Login;
