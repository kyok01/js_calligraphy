import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { userState } from "../../store/userState";
import { useNavigate } from "react-router-dom";

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
    <div>
      <form>
        <label>
          id
          <input type="text" onChange={onChangeLid} value={lid} />
        </label>
        <br />
        <label>
          password
          <input type="text" onChange={onChangeLpw} value={lpw} />
        </label>
      </form>
      <button onClick={onClickPost}>Login</button>
      <p>{msg}</p>
    </div>
  );
};
