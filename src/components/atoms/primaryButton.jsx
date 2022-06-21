import React from 'react'
import styled from 'styled-components';
import { BaseButton } from './baseButton';

export const PrimaryButton = (props) => {
    const { children } = props;
  return (
    <SButton>{ children }</SButton>
  )
}

const SButton = styled(BaseButton)`
  background-color: #40514e;
`;
