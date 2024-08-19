import axios from "axios";
import { useState } from "react";
import styled from "styled-components";

const Input = styled.input`
  width: 700px;
`;

const Button = styled.button`
  background-color: dodgerblue;
  border: none;
  color: #fff;
  padding: 5px 15px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 1.1rem;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 4px;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: blue;
  }
  &:active {
    background-color: darkblue;
  }
`;

const Response = styled.pre``;

export function NinjasAPI() {
  const API_KEY_NINJA = "UlUB3SK2z+3+y8qyr4sbNA==Ygmd5sBjOktL4LA7";
  const [api, setApi] = useState("");
  const [data, setData] = useState("");

  async function sendApi() {
    try {
      const response = await axios.get(api, {
        headers: {
          "X-Api-Key": API_KEY_NINJA,
        },
      });
      console.log(response.data);
      setData(JSON.stringify(response.data, null, "\t"));
    } catch (error) {
      console.log("Error", error);
    }
  }
  return (
    <>
      <Input
        placeholder="API를 입력해주세요"
        onChange={(e) => setApi(e.target.value)}
        value={api}
      ></Input>
      <Button onClick={sendApi}>Send API</Button>
      <Response>{data}</Response>
    </>
  );
}
