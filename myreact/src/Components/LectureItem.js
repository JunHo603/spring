// import React from "react";
// import styled from "styled-components";

// const LectureContainer = styled.div`
//   aspect-ratio: 1 / 0.7;
//   border-radius: 8px;
//   position: relative;
//   background-color: #000000;
//   overflow: hidden;
//   box-shadow: 0 0 20px #eee;
//   cursor: pointer;

//   &:hover img {
//     filter: grayscale(1) brightness(0.4);
//   }

//   &:hover::after {
//     opacity: 1;
//     inset: 20px;
//   }

//   &:hover .content {
//     opacity: 1;
//   }

//   &::after {
//     content: "";
//     position: absolute;
//     inset: 0;
//     border: 2px solid white;
//     border-radius: inherit;
//     opacity: 0;
//     transition: 0.4s ease-in-out;
//   }
// `;

// const LectureImg = styled.img`
//   width: 100%;
//   height: 100%;
//   overflow: hidden;

//   img {
//     width: 100%;
//     height: 100%;
//     object-fit: cover;
//     transition: 0.5s ease-in-out;
//   }
// `;

// const Content = styled.div`
//   position: absolute;
//   top: 50%;
//   left: 50%;
//   transform: translate(-50%, -50%);
//   text-align: center;
//   color: white;
//   opacity: 0;
//   transition: 0.5s ease-in-out;
//   width: 75%;
// `;

// function LectureItem({ data }) {
//   // 문자열을 7글자씩 자르고 줄바꿈 태그 삽입
//   const formattedLectureName = data.lectureName
//     .split("")
//     .reduce((acc, char, index) => {
//       return acc + char + ((index + 1) % 14 === 0 ? "<br/>" : "");
//     }, "");

//   return (
//     <LectureContainer
//       onClick={() =>
//         (window.location.href = `lectureDetail.html?lectureId=${data.lectureId}`)
//       }
//     >
//       <LectureImg src={data.imagePath} alt={data.lectureName} />
//       <Content className="content">
//         <h2
//           style={{ marginBottom: "20px" }}
//           dangerouslySetInnerHTML={{ __html: `"${formattedLectureName}"` }}
//         />
//         <p style={{ marginTop: "40px" }}>
//           카테고리 : {data.category.categoryName}
//         </p>
//       </Content>
//     </LectureContainer>
//   );
// }
// export default LectureItem;

import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const LectureContainer = styled.div`
  aspect-ratio: 1 / 0.7;
  border-radius: 8px;
  position: relative;
  background-color: #000000;
  overflow: hidden;
  box-shadow: 0 0 20px #eee;
  cursor: pointer;

  &:hover img {
    filter: grayscale(1) brightness(0.4);
  }

  &:hover::after {
    opacity: 1;
    inset: 20px;
  }

  &:hover .content {
    opacity: 1;
  }

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    border: 2px solid white;
    border-radius: inherit;
    opacity: 0;
    transition: 0.4s ease-in-out;
  }
`;

const LectureImg = styled.img`
  width: 100%;
  height: 100%;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: 0.5s ease-in-out;
  }
`;

const Content = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: white;
  opacity: 0;
  transition: 0.5s ease-in-out;
  width: 75%;
`;

function LectureItem({ data }) {
  const navigate = useNavigate();
  // 데이터가 유효한지 확인
  if (
    !data ||
    !data.lectureName ||
    !data.imagePath ||
    !data.category ||
    !data.category.categoryName
  ) {
    return <div>Loading...</div>; // 데이터가 없을 경우 로딩 상태를 표시
  }
  // 문자열을 7글자씩 자르고 줄바꿈 태그 삽입
  const formattedLectureName = data.lectureName
    .split("")
    .reduce((acc, char, index) => {
      return acc + char + ((index + 1) % 14 === 0 ? "<br/>" : "");
    }, "");

  const handleClick = () => {
    console.log("Navigating to:", `/lectureDetail?lectureId=${data.lectureId}`);
    navigate(`/lectureDetail?lectureId=${data.lectureId}`);
  };

  return (
    <LectureContainer onClick={handleClick}>
      <LectureImg src={data.imagePath} alt={data.lectureName} />
      <Content className="content">
        <h2
          style={{ marginBottom: "20px" }}
          dangerouslySetInnerHTML={{ __html: formattedLectureName }}
        />
        <p style={{ marginTop: "40px" }}>
          카테고리 : {data.category.categoryName}
        </p>
      </Content>
    </LectureContainer>
  );
}

export default LectureItem;
