import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { userState } from "../../store/userState";
import { PrimaryButton } from "../atoms/primaryButton";
import { SecondaryTextBox } from "../atoms/secondaryTextBox";

export const ArtSummary = (props) => {
  const { artId, name, tags, uses } = props;
  const [tagsArr, setTagsArr] = useState([]);
  const [usesArr, setUsesArr] = useState([]);

  const userInfo = useRecoilValue(userState);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    tags && setTagsArr(tags.split(","));
    uses && setUsesArr(uses.split(","));
  }, [tags, uses]);
  return (
    <SContainer>
      {/* <p>art {artId} summary</p> */}
      <SH1>{name}</SH1>
      <SDl>
      <SDt>tags:</SDt>
      <SDd>{tagsArr.map((tag, index) => {
          return <SecondaryTextBox key={index}>{tag.trim()}</SecondaryTextBox>;
        })}</SDd><br />
              <SDt>When you use:</SDt>
      <SDd>{usesArr.map((use, index) => {
          return <SecondaryTextBox key={index}>{use.trim()}</SecondaryTextBox>;
        })}</SDd>
      </SDl>
      {!location.pathname.match('/user/') && (
        <SPBContainer>
          {/* <Link to={`/user/${userInfo.lid}/${artId}`}>
            Make your own playground
          </Link> */}
          <PrimaryButton onClick={()=> navigate(`/user/${userInfo.lid}/${artId}`)}>Make your own playground</PrimaryButton>
        </SPBContainer>
      )}
    </SContainer>
  );
};

const SContainer = styled.div`
margin: 12px auto;
width: 48%;
background-color: #E9E9E9;
padding: 8px;
border-radius: 32px;
`;

const SH1 = styled.h1`
margin-top: 4px;
margin-bottom: 4px;
`;

const SDl = styled.dl`
margin: 0px;
`;

const SDt = styled.dt`
display: inline-block;
width: 16%;
`;

const SDd = styled.dt`
display: inline-block;
`;

const SPBContainer = styled.div`
margin-top: 12px;
margin-bottom: 4px;
display: flex;
align-items: center;
justify-content: center;
`;