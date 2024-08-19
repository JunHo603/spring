import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import LectureList from "./LectureList";
import Category from "./Category";

const Container = styled.div`
  width: 80%;
  margin: 0 auto;
  padding: 30px;
  display: grid;
  grid-template-columns: 30% 70%;
`;
const SideBar = styled.div`
  width: 100%;
  padding: 25px;
`;

const Content = styled.div`
  width: 100%;
`;

export function Contents() {
  const [lectures, setLectures] = useState([]);
  const [category, setCategory] = useState("전체");

  useEffect(() => {
    axios
      .get(`http://localhost:8080/lecture/category/${category}`)
      .then((response) => {
        setLectures(response.data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, [category]);
  return (
    <>
      <Container>
        <SideBar>
          <Category setCategory={setCategory} />
        </SideBar>
        <Content>
          <LectureList lectures={lectures} />
        </Content>
      </Container>
    </>
  );
}
