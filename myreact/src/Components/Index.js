import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import { Contents } from "./Contents";
import { Header } from "./Header";
import LectureItem from "./LectureItem";
import { LectureDetail } from "./LectureDetail";
import Login from "./login";

export function Index() {
  return (
    <>
      <BrowserRouter>
        <Header></Header>
        {/* <Contents></Contents> */}
        <Routes>
          <Route path="/index" element={<Contents />} />
          <Route path="/lectureDetail " element={<LectureDetail />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
