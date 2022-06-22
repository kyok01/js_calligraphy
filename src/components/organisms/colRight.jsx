import React from "react";
import styled from "styled-components";

export const ColRight = (props) => {
  const { source, width, height } = props;
  return (
    <SDivColRight>
      <iframe
        title="iframe"
        src={source}
        // height={height}
        width={width}
        height={height}
        id="ifrm"
      />
    </SDivColRight>
  );
};

const SDivColRight = styled.div`
  width: 40%;
  border: 1px black solid;
  margin: 12px;
`;
