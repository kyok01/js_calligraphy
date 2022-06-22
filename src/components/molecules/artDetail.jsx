import React from "react";
import styled from "styled-components";

export const ArtDetail = (props)=>{
    const {note} = props;
    return <SContainer><SH2>Note</SH2><p>{note}</p></SContainer>
}

const SContainer = styled.div`
margin: 12px auto;
width: 48%;
background-color: #E9E9E9;
padding: 8px;
min-height: 160px;
border-radius: 32px;
`;

const SH2 = styled.h2`
margin-top: 4px;
margin-bottom: 4px;
`;