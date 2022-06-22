import React from "react";
import styled from "styled-components";
import { ArtPostForm } from "../organisms/artPostForm";
// import '.../style.css';

export const Post = () => {
  return (
    <>
      <SP>Please post your art!!</SP>
      <ArtPostForm />
    </>
  );
};

const SP = styled.p`
  color: #5da797;
  text-align: center;
  font-size: 1.6rem;
`;
