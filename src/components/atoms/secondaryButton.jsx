import React from 'react'
import styled from 'styled-components';
import { BaseButton } from './baseButton';

export const SecondaryButton = (props) => {
    const { children, onClick } = props;
  return (
    <SButton onClick={onClick}>{ children }</SButton>
  )
}

const SButton = styled(BaseButton)`
  background-color: #454545;
`;
