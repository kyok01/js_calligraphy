import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { userState } from "../../store/userState";

export const About = () => {
  const navigate = useNavigate();
  const userInfo = useRecoilValue(userState);
  useEffect(() => {
    !userInfo.isLogin && navigate("/login");
  }, [userInfo]);
  return (
    <>
      <p>Welcome! {userInfo.id}, {userInfo.lid}</p>
      <h2>About</h2>
    </>
  );
};
