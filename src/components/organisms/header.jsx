import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Logo } from "../atoms/logo";
import profImg from "../atoms/profImg.jpeg";
import { SecondaryButton } from "../atoms/secondaryButton";
import leaderImg from "../atoms/3pointLeader.png";
import humbergerImg from "../atoms/hamburgerMenu.png";
import { useRecoilState } from "recoil";
import { userState } from "../../store/userState";

export const Header = () => {
  const [userInfo, setUserInfo] = useRecoilState(userState);
  const [isPopup, setIsPopup] = useState(false); // Popup is not deployed
  const navigate = useNavigate();

  const onClickLogout = () => {
    setUserInfo({ isLogin: false, lid: "", id: "" })
  }

  const onClickProfImg = () => navigate(`/user/${userInfo.lid}`);

  const onClickLeader = () => setIsPopup(!isPopup);
  return (
    <SHeader>
      <SUName>
        <SImg src={humbergerImg} style={{width: "20px"}} alt="humbergerMenu"/>
        <span style={{margin: "8px"}}>{userInfo.lid ? userInfo.lid : "Guest"}</span>
        </SUName>
      <Logo />
      <SUl>
        <SLi>
          <SImg src={profImg} onClick={() => {userInfo.isLogin && navigate(`/user/${userInfo.lid}`)}}/>
        </SLi>
        <SLi>
          <SecondaryButton onClick={()=>{navigate("/post")}}>Create New Art</SecondaryButton>
        </SLi>
        <SLi>
          <SecondaryButton onClick={onClickLogout}>Logout</SecondaryButton>
        </SLi>
        <SLi>
          <SImg src={leaderImg} />
        </SLi>
      </SUl>
    </SHeader>
  );
};

const SHeader = styled.header`
  background-color: #5da797;
  color: #fff;
  text-align: center;
  padding: 0px 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const SUl = styled.ul`
  list-style: none;
  display: inline-block;
  display: flex;
  align-items: center;
  margin: 8px 0px;
  width: 400px;
`;

const SLi = styled.li`
  display: inline-block;
  margin: 0px 8px;
`;

const SImg = styled.img`
width: 32px;
&:hover {
  cursor: pointer;
    opacity: 0.8;
}
`;

const SUName = styled.div`
width: 400px;
text-align: left;
display: flex;
align-items: center;
`;