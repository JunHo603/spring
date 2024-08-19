import { useState } from "react";
import { Unity, useUnityContext } from "react-unity-webgl";
import styled from "styled-components";

const Container = styled.div`
  width: 1344px;
  height: 756px;
  margin: auto;
  border: 1px solid gray;
`;

export function TopDownAction() {
  return (
    <>
      <Container>
        <Unity
          unityProvider={unityProvider}
          style={{ width: "100%", height: "100%" }}
        />
      </Container>
    </>
  );
}
