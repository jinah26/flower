import React from "react";
import styled from "styled-components";
export default function Slide({ img }) {
  return (
      <IMG src={img} />
  );
}
const IMG = styled.img`
  width: 800px;
  height: 300px;
`;