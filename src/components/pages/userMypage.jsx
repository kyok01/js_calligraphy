import React, { useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { userState } from '../../store/userState';
import { SearchArea } from '../organisms/searchArea';
import profImg from "../atoms/profImg.jpeg"

export const UserMypage = () => {
    const { lid } = useParams();
    const navigate = useNavigate();
    const userInfo = useRecoilValue(userState);
    useEffect(() => {
        // !userInfo.isLogin && userInfo.lid === lid && navigate("/login");
        if(!userInfo.isLogin && userInfo.lid !== lid){
            navigate("/login")
        }
      }, [userInfo]);

    //   const onClickFunc = () => {
        
    //   }
  return (
    <SContainer>
    <SH1>My Page</SH1>
    <SP1>Welcome! {userInfo.lid}</SP1>
    <img src={profImg} width="52px"/>
    {/* <Link to={`/arts/1`}>art 1</Link><br/>
    <Link to={`/arts/2`}>art 2</Link><br/>
    <Link to={`/arts/3`}>art 3</Link> */}
    <SSAcontainer><SearchArea /></SSAcontainer>

    </SContainer>
  );
}

const SContainer = styled.div`
margin: 0 auto;

`;

const SH1 = styled.h1`
width: 48%;
margin: 0 auto;
`;

const SP1 = styled.p`
width: 48%;
margin: 8px auto;
color: #E9E9E9;
`;

const SSAcontainer = styled.div`
width: 60%;
margin: 0 auto;
`;