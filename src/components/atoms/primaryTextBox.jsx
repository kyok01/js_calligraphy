import React from 'react'
import styled from 'styled-components';
import { BaseTextBox } from './baseTextBox';

export const PrimaryTextBox = (props) => {
    const { children } = props;
  return (
    <STB>{ children }</STB>
  )
}

const STB = styled(BaseTextBox)`
  background-color: #5DA797;
  margin-top: 8px;
`;
