import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useRecoilState } from "recoil";
import { userState } from "../../store/userState";
import { ArtDetail } from "../molecules/artDetail";
import { ArtSummary } from "../molecules/artSummary";
import { Cols } from "../templates/cols";
import styled from "styled-components";
// import { ColsMyPage } from '../templates/colsMyPage';

export const UserMyArt = () => {
  const { artId } = useParams();
  const [iniVals, setIniVals] = useState([]);
  const [userInfo, setUserInfo] = useRecoilState(userState);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // check login status and login id
    if (
      !userInfo.isLogin &&
      location.pathname === `/user/${userInfo.lid}/${artId}`
    ) {
      navigate("/login");
    }
  }, [userInfo]);

  const postIniVal = () => {
    console.log("postinival");
    const postData = new FormData(); // フォーム方式で送る場合
    postData.set("art_id", artId); // set()で格納する
    postData.set("lid", userInfo.lid); // set()で格納する

    const data = {
      method: "POST",
      body: postData,
    };

    // post先のphpファイルを開発環境か本番環境かによって切り替える
    let phpFile =
      "http://localhost/Github-Repo-PHP/phpApi_js_calligraphy/myPage_iniValRes.php";
    if (window.location.origin === "https://brownlynx2.sakura.ne.jp") {
      phpFile =
        "https://brownlynx2.sakura.ne.jp/phpApi_jsCal_test/myPage_iniValRes.php";
    }

    fetch(phpFile, data)
      .then((res) => res.json())
      .then((json) => json ? setIniVals(json) : postInsertMyArt()) // if there is no data in mypage_art table, postInsertMyArt functions
      .catch((error) => {
        console.log(error);
      });
  };

  const postInsertMyArt = () => {
    console.log("postInsertMyArt");
    const postData = new FormData(); // フォーム方式で送る場合
    postData.set("id", artId); // set()で格納する
    postData.set("lid", userInfo.lid); // set()で格納する

    const data = {
      method: "POST",
      body: postData,
    };

    // post先のphpファイルを開発環境か本番環境かによって切り替える
    let phpFile =
      "http://localhost/Github-Repo-PHP/phpApi_js_calligraphy/insertMyArt.php";
    if (window.location.origin === "https://brownlynx2.sakura.ne.jp") {
      phpFile =
        "https://brownlynx2.sakura.ne.jp/phpApi_jsCal_test/insertMyArt.php";
    }

    fetch(phpFile, data)
      .then((res) => res.json()) //errorの中身を確認するにはres.text();
      .then((hash) => hash && setIniVals(hash))
      // .then(console.log)
      // .then((hash) => hash && afterInsertFunc(hash))
      .catch((error) => {
        console.log(error);
      });
  }

  const afterInsertFunc = (hash) => {
    setIniVals(hash);
    updateServerFiles(hash);
  }

    // update files in server into new code
    const updateServerFiles = (hash) => {
      const postData = new FormData(); // フォーム方式で送る場合
      postData.set("artId", artId); // set()で格納する
      postData.set("html", hash['ini_html']); // set()で格納する
      postData.set("js", hash['ini_js']); // set()で格納する
      postData.set("css", hash['ini_css']); // set()で格納する
      postData.set("lid", userInfo.lid); // set()で格納する
  
      const data = {
        method: "POST",
        body: postData,
      };
  
      // post先のphpファイルを開発環境か本番環境かによって切り替える
      let phpFile =
        "http://localhost/Github-Repo-PHP/phpApi_js_calligraphy/myPage_fileWrite.php";
      if (window.location.origin === "https://brownlynx2.sakura.ne.jp") {
        phpFile =
          "https://brownlynx2.sakura.ne.jp/myPage_iniValRes/myPage_fileWrite.php";
      }
  
      fetch(phpFile, data)
        .then((res) => res.json())
        .then(console.log)
        .catch((error) => {
          console.log(error);
        });
    }

  useEffect(() => {
    postIniVal();
  }, []);
  // useEffect(() => {
  //   console.log('userMyArt useEffect2');
  // }, [iniVals]);
  console.log(iniVals);
  return (
    <>
      <ArtSummary
        artId={artId}
        name={iniVals["name"]}
        tags={iniVals["tags"]}
        uses={iniVals["uses"]}
      />
      {/* <p>
        {iniVals["ini_html"]}
        <br></br>
        {iniVals["ini_js"]}
        <br></br>
        {iniVals["ini_css"]}
      </p> */}
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