import React, { useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useRecoilValue } from 'recoil';
import { userState } from '../../store/userState';

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
    <>
    <div>userMypage</div>
    <p>Welcome! {userInfo.lid}</p>
    <Link to="/user/test1/1">art 1</Link>
    </>
  );
}
