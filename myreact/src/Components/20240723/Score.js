import styled from "styled-components";

const Container = styled.div`
  box-sizing: border-box;
  width: 300px;
  background-color: #fff;
  box-shadow: 1px 2px 5px gray;
  padding: 10px;
  margin-bottom: 0 auto;
`;

const p = styled.p`
  text-align: center;
`;

export function Score({ firstName, score }) {
  return (
    <>
      <Container>
        <h3>{firstName}</h3>
        <p>Math : {score.math}</p>
        <p>English : {score.english}</p>
        <p>History : {score.history}</p>
      </Container>
    </>
  );
}
