import styled from "styled-components";
import { useEffect, useState } from "react";

const Container = styled.div`
  width: 500px;
  text-align: center;
  margin: 0 auto;
  h1 {
    font-size: 4rem;
  }
  button {
    width: 100px;
    font-size: 2rem;
    margin: 10px;
  }
`;

export function CounterState() {
  // let count = 0;
  const [count, setCount] = useState(0);

  function minus() {
    //useState = useState - 1;
    setCount(count - 1);
  }
  function plus() {
    // useState = useState + 1;
    setCount(count + 1);
  }

  useEffect(() => {
    console.log("useEffect", count);
  }, [count]); // 매개변수1은 콜백함수, 매개변수2는 상태 의존성배열
  // 여러개 사용해도 상관없음, 가독성때문에 항상 제일 아래

  useEffect(() => {
    // 빈 의존성배열의 의미는 컴포넌트가 처음 로드될때 딱 한번만 호출된다
    // 각종 이벤트 콜백함수를 등록하는데 사용됨
  }, []);
  return (
    <>
      <Container>
        <h1>{count}</h1>
        <button onClick={plus}>+</button>
        <button onClick={minus}>-</button>
      </Container>
    </>
  );
}
