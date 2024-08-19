import styled from "styled-components";

const w = 300;
const h = 200;

const Box = styled.div`
  width: ${w}px;
  height: ${h}px;
  background-color: dodgerblue;
  margin: auto;
`;

export function Test1() {
  return (
    <>
      <Box>Test1</Box>
    </>
  );
}
