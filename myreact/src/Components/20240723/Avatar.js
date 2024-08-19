import styled from "styled-components";

const Container = styled.div`
  box-sizing: border-box;
  width: 300px;
  background-color: ${(props) => props.bgcolor};
  box-shadow: 1px 2px 5px gray;
  padding: 10px;
  margin-bottom: 0 auto;
`;
const Bold = styled.p`
  font-weight: 700;
  font-size: 2rem;
  color: dodgerblue;
`;

export function Avatar({ person, bgcolor }) {
  return (
    <>
      <Container bgcolor={bgcolor}>
        <div>
          <Bold>{person.name}</Bold>
          <p>{person.job}</p>
          <p>{person.country}</p>
          <hr />
        </div>
      </Container>
    </>
  );
}