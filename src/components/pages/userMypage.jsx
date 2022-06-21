import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useRecoilValue } from 'recoil';
import { userState } from '../../store/userState';

export const UserMypage = () => {
    const navigate = useNavigate();
    const userInfo = useRecoilValue(userState);
    useEffect(() => {
        !userInfo.isLogin && navigate("/login");
      }, [userInfo]);
  return (
    <div>userMypage</div>
  )
}
