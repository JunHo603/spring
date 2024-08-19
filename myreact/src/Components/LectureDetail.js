import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

// Styled Components
const Container = styled.div`
  /* Add your styles here */
`;

const Header = styled.div`
  /* Header styles */
`;

const Footer = styled.div`
  /* Footer styles */
`;

const MainTitle = styled.div`
  /* MainTitle styles */
`;

const ButtonBox = styled.div`
  /* ButtonBox styles */
`;

const StudyBtn = styled.button`
  /* StudyBtn styles */
`;

const CartBtn = styled.button`
  /* CartBtn styles */
`;

const ClassBtn = styled.button`
  /* ClassBtn styles */
`;

const DetailBtn = styled.button`
  /* DetailBtn styles */
`;

const LectureBody = styled.div`
  /* LectureBody styles */
`;

const ReviewBox = styled.div`
  /* ReviewBox styles */
`;

// Main Component
export function LectureDetail() {
  const [lectureData, setLectureData] = useState(null);
  const [contentData, setContentData] = useState([]);
  const [teacherData, setTeacherData] = useState(null);
  const [reviewData, setReviewData] = useState([]);
  const [studyData, setStudyData] = useState([]);
  const [sessionData, setSessionData] = useState(null);
  const [loading, setLoading] = useState(true);

  const lectureId = new URLSearchParams(window.location.search).get(
    "lectureId"
  );
  const urls = {
    lecture: `http://localhost:8080/lecture/${lectureId}`,
    content: `http://localhost:8080/learning/contents/${lectureId}`,
    teacher: `http://localhost:8080/teacher/${lectureId}`,
    review: `http://localhost:8080/learning/review/${lectureId}`,
    study: `http://localhost:8080/course/registration`,
    session: `http://localhost:8080/user/current`,
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [
          lectureRes,
          contentRes,
          teacherRes,
          reviewRes,
          studyRes,
          sessionRes,
        ] = await axios.all([
          axios.get(urls.lecture),
          axios.get(urls.content),
          axios.get(urls.teacher),
          axios.get(urls.review),
          axios.get(urls.study),
          axios.get(urls.session),
        ]);

        setLectureData(lectureRes.data);
        setContentData(contentRes.data);
        setTeacherData(teacherRes.data);
        setReviewData(reviewRes.data);
        setStudyData(studyRes.data);
        setSessionData(sessionRes.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        // alert("로그인해주세요.");
        // window.location.href = "http://localhost:8080/lms/main.html";
      }
    };

    fetchData();
  }, [urls]);

  useEffect(() => {
    if (sessionData) {
      const isLoggedIn = sessionData.status === 200;
      document.getElementById("login").classList.toggle("hidden", isLoggedIn);
      document.getElementById("logout").classList.toggle("hidden", !isLoggedIn);
    }
  }, [sessionData]);

  const handleCartClick = async () => {
    if (window.confirm("장바구니에 담으시겠습니까 ?")) {
      try {
        await axios.get("http://localhost:8080/user/current", {
          withCredentials: true,
        });
        let cartItems =
          JSON.parse(localStorage.getItem(sessionData.userId)) || [];
        cartItems.push(lectureData);
        localStorage.setItem(sessionData.userId, JSON.stringify(cartItems));
        alert("장바구니에 담았습니다.");
      } catch (error) {
        console.error("Error adding to cart:", error);
        alert("로그인해주세요.");
      }
    }
  };

  const handleClassClick = async () => {
    if (window.confirm("수강신청 하시겠습니까 ?")) {
      try {
        await axios.post(
          `http://localhost:8080/course/saveCourseRegistration`,
          {
            user: { userId: sessionData.userId },
            lecture: { lectureId },
          },
          { withCredentials: true }
        );
        alert("수강신청 되었습니다.");
        window.location.reload();
      } catch (error) {
        console.error("Error registering for course:", error);
        alert("로그인해주세요.");
      }
    }
  };

  const handleStudyClick = () => {
    window.location.href = `course.html?userId=${sessionData.userId}&lectureId=${lectureData.lectureId}`;
  };

  const showLectureDetails = (section) => {
    document
      .querySelectorAll(".lecture-body")
      .forEach((el) => el.classList.add("hidden"));
    document.querySelector(`.${section}`).classList.remove("hidden");
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Container>
      <Header>{/* Header Component */}</Header>
      <MainTitle>
        <h1>{lectureData.lectureName}</h1>
      </MainTitle>
      <ButtonBox>
        <CartBtn onClick={handleCartClick}>장바구니</CartBtn>
        <ClassBtn onClick={handleClassClick}>수강신청</ClassBtn>
        <StudyBtn onClick={handleStudyClick}>학습하기</StudyBtn>
      </ButtonBox>
      <DetailBtn onClick={() => showLectureDetails("body1")}>
        과정소개
      </DetailBtn>
      <DetailBtn onClick={() => showLectureDetails("body2")}>
        학습목차
      </DetailBtn>
      <DetailBtn onClick={() => showLectureDetails("body3")}>
        강사소개
      </DetailBtn>
      <DetailBtn onClick={() => showLectureDetails("body4")}>
        교재정보
      </DetailBtn>

      <LectureBody className="lecture-body body1">
        {/* Lecture Details */}
        <div>
          <h2>강의 개요</h2>
          <p>{lectureData.educationOverview}</p>
        </div>
        <div>
          <h2>강의 과정</h2>
          <pre>{lectureData.learningObjectives}</pre>
        </div>
        <div>
          <h2>학습 대상</h2>
          <pre>{lectureData.learningObject}</pre>
        </div>
      </LectureBody>
      <LectureBody className="lecture-body body2 hidden">
        {/* Learning Contents */}
        <table>
          <thead>
            <tr>
              <th>순번</th>
              <th>목차</th>
            </tr>
          </thead>
          <tbody>
            {contentData.map((item) => (
              <tr key={item.learningContentsSeq}>
                <td>{item.learningContentsSeq}</td>
                <td>{item.learningContents}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </LectureBody>
      <LectureBody className="lecture-body body3 hidden">
        {/* Teacher Details */}
        <pre>{teacherData.teacherResume}</pre>
      </LectureBody>
      <LectureBody className="lecture-body body4 hidden">
        {/* Textbook Information */}
        <p>{lectureData.textbookInformation}</p>
      </LectureBody>
      <ReviewBox>
        {/* Reviews */}
        {reviewData.length === 0 ? (
          <p>강의 후기가 없습니다.</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>순번</th>
                <th>제목</th>
                <th>등록일</th>
                <th>평점</th>
              </tr>
            </thead>
            <tbody>
              {reviewData.map((review, index) => (
                <React.Fragment key={index}>
                  <tr>
                    <td>{index + 1}</td>
                    <td>{review.learningReviewTitle}</td>
                    <td>{review.learningReviewDate}</td>
                    <td>{review.learningReviewScore}</td>
                  </tr>
                  <tr className="hidden">
                    <td colSpan="4">{review.learningReviewContent}</td>
                  </tr>
                </React.Fragment>
              ))}
            </tbody>
          </table>
        )}
      </ReviewBox>
      <Footer>{/* Footer Component */}</Footer>
    </Container>
  );
}
