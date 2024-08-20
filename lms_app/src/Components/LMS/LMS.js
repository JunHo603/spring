import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Home } from "./Home/Home";
import { Cart } from "./Cart/Cart";
import { Course } from "./Course/Course";
import { Community } from "./Community/Community";

// import { Login } from "./Login/Login";
import { LoginMain } from "./Login/LoginMain";

import { Error } from "./Error";
import { Lecture } from "./Lecture/Lecture";
import { LectureList } from "./Lecture/LectureList";
import { Search } from "./Search/Search";
import styled from "styled-components";
import { LMSWrapper } from "./LMSWrapper";

import { AdminSidebar } from "./Admin/AdminSidebar";
import { MyPageSidebar } from "./MyPage/MyPageSidebar";

import { LectureDetail } from "./Lecture/LectureDetail";

const Container = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
`;
const Section = styled.div`
  width: 100%;
`;
const Menu = styled.div`
  width: 100%;
`;
const ContentBox = styled.div`
  width: 80%;
  margin-left: 10%;
  margin-top: 30px;
`;

export function LMS() {
  return (
    <>
      <BrowserRouter>
        <Container>
          <Section>
            <Menu>
              <Navbar />
            </Menu>
            <ContentBox>
              {/* <Route path="/lecture" element={<LectureList />}> // mypage.com/movie => mypage.com/movie/12345 => 자식을 랜더링 해주는 코드 추가 필요 */}
              {/* 유동적, id 는 변수 <Route paht=":id" element={<Lecture />} /> */}
              {/* 고정적 <Route paht="detail" element={<Lecture />} /> */}
              <Routes>
                {/* <Route path="/" element={<Home />} /> */}
                <Route path="/" element={<Navigate replace to="/home" />} />
                <Route path="/home" element={<Home />} />
                <Route path="/lecture" element={<LMSWrapper />}>
                  <Route index element={<LectureList />} />
                  {/* // pathvariable */}
                  <Route path=":id" element={<Lecture />} />
                </Route>
                <Route
                  path="/lectures/:lectureId"
                  element={<LectureDetail />}
                />
                {/* <Route path="/search" element={<Search />} /> */}
                <Route path="/cart" element={<Cart />} />
                <Route path="/mypage/*" element={<MyPageSidebar />} />

                <Route path="/community" element={<Community />} />

                {/* <Route path="/login" element={<Login />} /> */}
                <Route path="/login" element={<LoginMain />} />

                <Route path="/admin/*" element={<AdminSidebar />} />
                {/* <Route path="/course/:userId/:lectureId" element={<Course />} /> */}
                <Route path="/course/:userId/:lectureId" element={<Course />} />
                <Route path="*" element={<Error />} />
              </Routes>
            </ContentBox>
          </Section>
        </Container>
      </BrowserRouter>
    </>
  );
}
