import styled from "styled-components";

// const Ul = styled.ul`
//   text-decoration: none;
// `;

const Li = styled.li`
  color: lightcoral;
  list-style: none;
`;

export function List({ products, user }) {
  // Javascript 코딩 영역

  const Container = styled.div`
    width: 100vw;
    margin: 0 auto;
    text-align: center;
  `;
  const Title = styled.h1`
    font-size: 2rem;
  `;
  const Photo = styled.img`
    border-radius: 50%;
    &:hover {
      background-color: lightgray;
      transform: scale(1.05);
      transition: all 0.3s ease;
    }
  `;

  return (
    <>
      <h1>List Component</h1>
      <p>리액트 연습 코드</p>
      <ul>
        {/* <li>Banana</li>
        <li>Apple</li>
        <li>Grape</li> */}
        {products.map((p) => (
          <Li>{p.title}</Li>
        ))}
      </ul>
      <Container>
        <Title>{user.name}</Title>
        <Photo src={user.imageUrl}></Photo>
      </Container>
    </>
  );
}
