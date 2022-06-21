import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import { useRecoilState } from 'recoil';
import { userState } from "../../store/userState";
import { ArtDetail } from "../molecules/artDetail";
import { ArtSummary } from "../molecules/artSummary";
import { Cols } from "../templates/cols";
// import { ColsMyPage } from '../templates/colsMyPage';

export const UserMyArt = () => {
  const { artId } = useParams();
  const [iniVals, setIniVals] = useState([]);
  // const [userInfo, setUserInfo] = useRecoilState(userState);

  const postIniVal = () => {
    console.log("postinival");
    const postData = new FormData(); // フォーム方式で送る場合
    postData.set("id", artId); // set()で格納する
    // postData.set("lid", userInfo.lid); // set()で格納する

    const data = {
      method: "POST",
      body: postData,
    };

    // post先のphpファイルを開発環境か本番環境かによって切り替える
    let phpFile =
      "http://localhost/Github-Repo-PHP/phpApi_js_calligraphy/iniValRes.php";
    if (window.location.origin === "https://brownlynx2.sakura.ne.jp") {
      phpFile =
        "https://brownlynx2.sakura.ne.jp/phpApi-for-react-demo/delete.php";
    }

    fetch(phpFile, data)
      .then((res) => res.json())
      .then((json) => setIniVals(json[0]),console.log('setInival'))
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    postIniVal();
  }, []);
  useEffect(() => {
    // postIniVal();
    console.log('userMyArt useEffect2');
  }, [iniVals]);

  console.log("aaa");
  console.log(iniVals);
  return (
    <>
      <h3>art {artId}</h3>
      <ArtSummary
        artId={artId}
        name={iniVals["name"]}
        tags={iniVals["tags"]}
        uses={iniVals["uses"]}
      />
      <p>
        {iniVals["ini_html"]}
        <br></br>
        {iniVals["ini_js"]}
        <br></br>
        {iniVals["ini_css"]}
      </p>
      <Cols
        artId={artId}
        iniHtml={iniVals["ini_html"]}
        iniJs={iniVals["ini_js"]}
        iniCss={iniVals["ini_css"]}
      />
      <ArtDetail note={iniVals["note"]} />
    </>
  );
};
