import React from "react";
import styled from "styled-components";
import { Input } from "../atoms/input";

export const SearchInput = (props) => {
  const { value, onChange } = props;
  return (
    <div>
      <SContainer>
        <Input placeholder="input query" onChange={onChange} value={value}/>
        <SButtonWrapper>Serch</SButtonWrapper>
      </SContainer>
    </div>
  );
};

const SContainer = styled.div`
  display: flex;
  align-items: center;
`;

const SButtonWrapper = styled.div`
  padding-left: 8px;
`;
