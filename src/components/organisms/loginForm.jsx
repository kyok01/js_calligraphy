import React, { useState } from "react";

export const LoginForm = () => {
  const [lid, setLid] = useState("");
  const [lpw, setLpw] = useState("");
  const onClickPost = () => {
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
        "https://brownlynx2.sakura.ne.jp/phpApi-for-react-demo/insert.php";
    }

    fetch(phpFile, data)
      .then((res) => res.text())
      .then(console.log)
      .catch((error) => {
        console.log(error);
      });
  };

  const onChangeLid = (event) =>{
    setLid(event.target.value);
  }
  const onChangeLpw = (event) =>{
    setLpw(event.target.value);
  }

  return (
    <div>
      <form>
        <label>id
        <input type="text" onChange={onChangeLid} value={lid}/>
        </label><br />
        <label>password
        <input type="text" onChange={onChangeLpw} value={lpw}/>
        </label>
      </form>
      <button onClick={onClickPost}>Login</button>
    </div>
  );
};
