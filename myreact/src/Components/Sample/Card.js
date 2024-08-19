import React from "react";
import styled from "styled-components";

const Container = styled.div`
  margin: 0 auto;
`;

const CardContainer = styled.div`
  width: 600px;
  aspect-ratio: 1 / 0.7;
  border-radius: 8px;
  position: relative;
  background-color: #000000;
  overflow: hidden;
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

const ImageBox = styled.div`
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
`;

export const Card = () => {
  return (
    <Container>
      <CardContainer>
        <ImageBox>
          <img src="./001.jpg" alt="Ford Mustang 1969" />
        </ImageBox>
        <Content className="content">
          <h2>Ford Mustang 1969 njnwaubasbdh</h2>
          <p>Description .....</p>
        </Content>
      </CardContainer>
    </Container>
  );
};
