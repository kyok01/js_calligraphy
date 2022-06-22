import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { userState } from "../../store/userState";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { SecondaryButton } from "../atoms/secondaryButton";
import keyImg from "../atoms/key.png";

export const LoginForm = () => {
  const [userInfo, setUserInfo] = useRecoilState(userState);
  // const [id, setId] = useState(0);
  const [lid, setLid] = useState("");
  const [lpw, setLpw] = useState("");
  const [msg, setMsg] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    userInfo.isLogin && navigate(`/user/${userInfo.lid}`);
  }, [userInfo.isLogin]);

  const onClickPost = () => {
    if (!lid || !lpw) {
      setMsg("Wrong id or password");
      return null;
    }
    const postData = new FormData(); // フォーム方式で送る場合
    postData.set("lid", lid);
    postData.set("lpw", lpw);

    const data = {
      method: "POST",
      body: postData,
    };

    // post先のphpファイルを開発環境か本番環境かによって切り替える
    let phpFile =
      "http://localhost/Github-Repo-PHP/phpApi_js_calligraphy/login_act.php";
    if (window.location.origin === "https://brownlynx2.sakura.ne.jp") {
      phpFile =
        "https://brownlynx2.sakura.ne.jp/phpApi_jsCal_test/login_act.php";
    }

    fetch(phpFile, data)
      .then((res) => res.text())
      .then(
        (data) =>
          Number(data) && setUserInfo({ isLogin: true, lid: lid, id: data })
      )
      .catch((error) => {
        console.log(error);
      })
      .then(setLid(""), setLpw(""))
      .then(setMsg("Wrong id or password"));
  };

  const onChangeLid = (event) => {
    setLid(event.target.value);
  };
  const onChangeLpw = (event) => {
    setLpw(event.target.value);
  };

  return (
    <SContainer>
      <SIContainer>
        <img src={keyImg} alt="" width="56px" />
      </SIContainer>
      <form>
        <SLabel>
          <SInput
            type="text"
            onChange={onChangeLid}
            value={lid}
            placeholder="YOUR ID"
          />
        </SLabel>
        <br />
        <SLabel>
          <SInput
            type="password"
            onChange={onChangeLpw}
            value={lpw}
            placeholder="PASSWORD"
          />
        </SLabel>
      </form>
      <SBContainer>
        <SecondaryButton onClick={onClickPost}>Login</SecondaryButton>
      </SBContainer>
      {/* <button onClick={onClickPost}>Login</button> */}
      <p>{msg}</p>
    </SContainer>
  );
};

const SInput = styled.input`
  border: none;
  border-bottom: 1px solid #e9e9e9;
  width: 160px;
  margin-top: 12px;
  font-size: 1.6rem;
  outline: none;
  ::placeholder {
    color: #e9e9e9;
  }
`;

const SLabel = styled.label`
  height: 100px;
`;

const SBContainer = styled.div`
  margin-top: 16px;
`;

const SContainer = styled.div`
margin-top: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SIContainer = styled.div`
  margin: 8px;
  margin-bottom: 28px;
`;
