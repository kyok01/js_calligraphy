import React, { useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { userState } from "../../store/userState";
import { SearchArea } from "../organisms/searchArea";
import profImg from "../atoms/profImg.jpeg";

export const UserMypage = () => {
  const { lid } = useParams();
  const navigate = useNavigate();
  const userInfo = useRecoilValue(userState);
  useEffect(() => {
    // !userInfo.isLogin && userInfo.lid === lid && navigate("/login");
    if (!userInfo.isLogin && userInfo.lid !== lid) {
      navigate("/login");
    }
  }, [userInfo]);

  //   const onClickFunc = () => {

  //   }
  return (
    <SContainer>
      <SProfCard>
        <img src={profImg} width="60px" />
        <div>
          <SH1>My Page</SH1>
          <SP1>Welcome!! {userInfo.lid}</SP1>
        </div>
      </SProfCard>

      {/* <Link to={`/arts/1`}>art 1</Link><br/>
    <Link to={`/arts/2`}>art 2</Link><br/>
    <Link to={`/arts/3`}>art 3</Link> */}
      <SSAcontainer>
        <SearchArea />
      </SSAcontainer>
      <SIFYAcontainer>
        <SH2>Inspiration From Your Arts</SH2>
        <SUl>
          <li> <Link to="/arts/3">Array ForEach</Link></li>
        </SUl>
       
      </SIFYAcontainer>
    </SContainer>
  );
};

const SContainer = styled.div`
  margin: 0 auto;
`;

const SH1 = styled.h1`
  /* width: 48%; */
  margin: 0 8px;

`;

const SP1 = styled.p`
  /* width: 48%; */
  margin: 8px;
  /* color: #e9e9e9; */
`;

const SSAcontainer = styled.div`
  width: 60%;
  margin: 0 auto;
`;

const SProfCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #E9E9E9;
  border-radius: 16px;
  width: 32%;
  margin: 12px auto;
`;

const SH2 = styled.h2`
color: #5DA797;
margin-bottom: 0px;
`;

const SIFYAcontainer = styled.div`
  width: 60%;
  margin: 0px auto;
  margin-top: 24px;
`;

const SUl = styled.ul`
margin-top: 8px;
`;