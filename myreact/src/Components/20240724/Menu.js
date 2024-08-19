import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

const Ul = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;

const Li = styled.li`
  width: 100%;
  padding-left: 20px;
  list-style: none;
  font-weight: 700;
`;

const Link = styled.a`
  display: block;
  text-decoration: none;
  color: rgba(0, 0, 0, 0.7);
  padding: 10px 5px;
  font-size: 1.5rem;
  &:hover {
    background-color: dodgerblue;
    color: #fff;
  } // &는 this와 같은 개념
`;

export function Menu() {
  return (
    <>
      <Container>
        <Ul>
          <Li>
            <Link href="#">Home</Link>
          </Li>
          <Li>
            <Link href="#">Content</Link>
          </Li>
          <Li>
            <Link href="#">About Us</Link>
          </Li>
          <Li>
            <Link href="#">Contact</Link>
          </Li>
          <Li>
            <Link href="#">Social</Link>
          </Li>
        </Ul>
      </Container>
    </>
  );
}
