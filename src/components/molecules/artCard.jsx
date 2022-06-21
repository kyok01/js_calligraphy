import React from "react";
import styled from "styled-components";

export const ArtCard = (props) => {
  const { name, tags, uses } = props;
  return (
    <SContainer>
      <span>{name}</span>
      <span>{tags}</span>
      <span>{uses}</span>
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
`;
