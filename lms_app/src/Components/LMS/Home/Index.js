import styled from "styled-components";
import { Navbar } from "../Navbar";
import { Sidebar } from "../Sidebar";
import { IndexCommunity } from "../Community/IndexComunity";
import { IndexLecture } from "../Lecture/IndexLecture";
import { Footer } from "../Footer";

const Container = styled.div`
  /* box-sizing: border-box;
  padding: 176px 32px 0 240px;
  transition: all 0.3s; */
  box-sizing: border-box;
  padding: 176px 32px 0 240px;
  transition: all 0.3s;
  min-height: 100vh;
  /* margin-bottom: 100px;  */
`;

export function Index() {
  return (
    <>
      <Navbar />
      <Sidebar />
      <Container>
        <IndexLecture />
        <IndexCommunity />
      </Container>
      <Footer />
    </>
  );
}
