import React from "react";
import styled from "styled-components";

export const ArtCard = (props) => {
  const { name, tags, uses } = props;
  return (
    <SContainer>
      <SSpan>name:{name}</SSpan>
      <SSpan>tags:{tags}</SSpan>
      <SSpan>uses:{uses}</SSpan>
      {/* {tags.map((tag) => {
        return <span>{tag},</span>;
      })}
      {uses.map((use) => {
        return <span>{use},</span>;
      })} */}
    </SContainer>
  );
};

const SContainer = styled.div`
  outline: 1px solid black;
  width: 800px;
  height: 60px;
  text-align: center;
  border-radius: 9999px;
  line-height: 60px;
  background-color: red;
`;

const SSpan = styled.span`
margin-left:8px;

`;
