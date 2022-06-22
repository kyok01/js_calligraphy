import React from 'react'
import styled from 'styled-components';
import { BaseTextBox } from './baseTextBox';

export const SecondaryTextBox = (props) => {
    const { children } = props;
  return (
    <STB>{ children }</STB>
  )
}

const STB = styled(BaseTextBox)`
  background-color: #454545;
`;
