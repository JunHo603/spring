import styled, { createGlobalStyle } from "styled-components";
import { Index } from "./Components/Index";
import PageScroll from "./Components/Test";
import { LectureDetail } from "./Components/LectureDetail";

const GlobalStyle = createGlobalStyle`
@font-face {
    font-family: 'Ownglyph_meetme-Rg';
    src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_2402_1@1.0/Ownglyph_meetme-Rg.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
}
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Ownglyph_meetme-Rg;
  }
`;

const Body = styled.div`
  background: linear-gradient(45deg, #333333, #1c1c1c, #555555);
  color: #ffffff;
`;

function App() {
  return (
    <>
      <GlobalStyle />

      <Body>
        <Index></Index>
        {/* <LectureDetail></LectureDetail> */}
      </Body>
      {/* <PageScroll></PageScroll> */}
    </>
  );
}

export default App;
