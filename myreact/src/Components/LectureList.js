import React from "react";
import styled from "styled-components";
import LectureItem from "./LectureItem";

const LectureListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
`;

function LectureList({ lectures }) {
  return (
    <LectureListContainer>
      {lectures.map((lecture) => (
        <LectureItem key={lecture.lectureId} data={lecture} />
      ))}
    </LectureListContainer>
  );
}

export default LectureList;
