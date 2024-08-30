import { useEffect, useState } from "react";
import styled from "styled-components";
import { getAllLecture } from "../../../Api/LectureApi/LectureApi";

const TitleText = styled.p`
  font-size: 35px;
  font-weight: 800;
  color: #fff;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  padding: 100px 0 50px 0;
  border-bottom: 1px solid #1a1b24;
`;

const ImageContainer = styled.div`
  position: relative;
  width: 270px;
  height: 270px;
  transform-style: preserve-3d;
  transform: perspective(1000px) rotateY(${(props) => props.rotation}deg);
  transition: transform 0.7s;
`;

const Span = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  transform: rotateY(calc(var(--i) * 45deg)) translateZ(400px);
`;

const Img = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
`;

const BtnContainer = styled.div``;

const Btn = styled.button`
  margin: 0px 150px;
  background-color: #ffffff;
  color: #0f1015;
  border: 1px solid #cccccc;
  border-radius: 4px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: #f0f0f0;
    color: #0f1015;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);
  }
`;

export function IndexLecture() {
  const [x, setX] = useState(0);
  const [timer, setTimer] = useState(null);
  const [images, setImages] = useState([]);

  useEffect(() => {
    axios();
  }, []);

  async function axios() {
    const lectureData = await getAllLecture();
    setImages(lectureData.slice(0, 8));
  }

  const updateGallery = (newX) => {
    setX(newX);
    if (timer) clearTimeout(timer);
    const newTimer = setTimeout(() => {
      setX((prevX) => prevX - 45);
    }, 6000);
    setTimer(newTimer);
  };

  useEffect(() => {
    updateGallery(x);
    // Clean up timer on component unmount
    return () => clearTimeout(timer);
  }, [x]);

  return (
    <>
      <TitleText>강의</TitleText>
      <TitleContainer>
        <ImageContainer rotation={x}>
          {images.map((lecture, i) => (
            <Span key={i} style={{ "--i": i + 1 }}>
              <Img src={lecture.imagePath} alt={`Image ${i + 1}`} />
            </Span>
          ))}
        </ImageContainer>
        <BtnContainer>
          <Btn onClick={() => updateGallery(x + 45)}>Prev</Btn>
          <Btn onClick={() => updateGallery(x - 45)}>Next</Btn>
        </BtnContainer>
      </TitleContainer>
    </>
  );
}
