import React from "react";
import styled from "styled-components";
import logoImg from "./logoPicOnly.png";

export const Logo = () => {
  return <Scontainer><img src={logoImg} width="32px"/><SSTitle>Code Calligraphy</SSTitle></Scontainer>;
};

const Scontainer = styled.div`
  text-align: center;
  width: 300px;
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SSTitle = styled.div`
margin-left: 8px;
`;
