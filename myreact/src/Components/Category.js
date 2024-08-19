import React from "react";
import styled from "styled-components";

const CategoryContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  /* display: flex;
  justify-content: center;
  align-items: center; */
`;

const CategoryItem = styled.div`
  height: 40px;
  flex: 1 1 auto;
  margin: 0 25px 20px 25px;
  text-align: center;
  text-transform: uppercase;
  transition: 0.5s;
  background-size: 200% auto;
  color: white;
  box-shadow: 0 0 20px #eee;
  border-radius: 10px;
  font-size: 20px;
  cursor: pointer;
  padding-top: 10px;

  &:hover {
    background-position: right center;
    background-image: linear-gradient(
      to right,
      #f6d365 0%,
      #fda085 51%,
      #f6d365 100%
    );
  }
`;

const CategoryText = styled.p`
  margin: 0;
`;

function Category({ setCategory }) {
  const categories = ["전체", "추천", "무료", "유료", "신규"];

  return (
    <CategoryContainer>
      {categories.map((cat) => (
        <CategoryItem key={cat} onClick={() => setCategory(cat)}>
          <CategoryText>{cat}</CategoryText>
        </CategoryItem>
      ))}
    </CategoryContainer>
  );
}

export default Category;
