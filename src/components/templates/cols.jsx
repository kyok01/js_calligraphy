import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { ColLeft } from "../organisms/colLeft";
import { ColRight } from "../organisms/colRight";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { userState } from "../../store/userState";

export const Cols = (props) => {
  const { artId, iniHtml, iniJs, iniCss } = props;
  const [html, setHtml] = useState("");
  const [js, setJs] = useState("");
  const [css, setCss] = useState("");
  const location = useLocation();
  const userInfo = useRecoilValue(userState);
  useEffect(() => {
    console.log("cols useEffect");
    setHtml(iniHtml);
    setJs(iniJs);
    setCss(iniCss);
  }, [iniHtml, iniJs, iniCss]);
  let iframeSource;
  if (location.pathname.match("/user/")) {
    iframeSource = `http://localhost/Github-Repo-PHP/phpApi_js_calligraphy/user/${userInfo.lid}/folder${artId}/sample.html`;
    if (window.location.origin === "https://brownlynx2.sakura.ne.jp") {
      iframeSource = `https://brownlynx2.sakura.ne.jp/phpApi_jsCal_test/user/${userInfo.lid}/folder${artId}/sample.html`;
    }
  } else {
    iframeSource = `http://localhost/Github-Repo-PHP/phpApi_js_calligraphy/data/folder${artId}/sample.html`;
    if (window.location.origin === "https://brownlynx2.sakura.ne.jp") {
      iframeSource = `https://brownlynx2.sakura.ne.jp/phpApi_jsCal_test/data/folder${artId}/sample.html`;
    }
  }
  const [source, setSource] = useState(
    location.pathname.match("/user/") ? "" : iframeSource
  );
  const width = "100%";
  const height = "100%";

  function handleEditorChangeH(value, event) {
    console.log("here is the current model value:", value);
    setHtml(value);
  }
  function handleEditorChangeJ(value, event) {
    console.log("here is the current model value:", value);
    setJs(value);
  }
  function handleEditorChangeC(value, event) {
    console.log("here is the current model value:", value);
    setCss(value);
  }
  const onClickPost = () => {
    updateServerFiles();
    updateDB();
  };

  // update files in server into new code
  const updateServerFiles = () => {
    const postData = new FormData(); // フォーム方式で送る場合
    postData.set("artId", artId); // set()で格納する
    postData.set("html", html); // set()で格納する
    postData.set("js", js); // set()で格納する
    postData.set("css", css); // set()で格納する
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
        "https://brownlynx2.sakura.ne.jp/phpApi_jsCal_test/myPage_fileWrite.php";
    }

    fetch(phpFile, data)
      .then((res) => res.text())
      .then(console.log)
      .then(setSource(""))
      .catch((error) => {
        console.log(error);
      });
  };

  const updateDB = () => {
    console.log("updateDB");
    const postData = new FormData(); // フォーム方式で送る場合
    postData.set("artId", artId); // set()で格納する
    postData.set("html", html); // set()で格納する
    postData.set("js", js); // set()で格納する
    postData.set("css", css); // set()で格納する
    postData.set("lid", userInfo.lid); // set()で格納する

    const data = {
      method: "POST",
      body: postData,
    };

    // post先のphpファイルを開発環境か本番環境かによって切り替える
    let phpFile =
      "http://localhost/Github-Repo-PHP/phpApi_js_calligraphy/myPage_updateMyDB.php";
    if (window.location.origin === "https://brownlynx2.sakura.ne.jp") {
      phpFile =
        "https://brownlynx2.sakura.ne.jp/phpApi_jsCal_test/myPage_updateMyDB.php";
    }

    fetch(phpFile, data)
      .then((res) => res.text())
      .then(console.log)
      .catch((error) => {
        console.log(error);
      });
  };

  const onClickReflect = () => {
    setSource(iframeSource);
  };

  console.log(iniHtml);

  return (
    <>
      <SDivCols>
        <ColLeft
          iniHtml={iniHtml}
          handleEditorChangeH={handleEditorChangeH}
          iniJs={iniJs}
          handleEditorChangeJ={handleEditorChangeJ}
          iniCss={iniCss}
          handleEditorChangeC={handleEditorChangeC}
          onClickPost={onClickPost}
          onClickUpdateDB={updateDB}
          onClickReflect={onClickReflect}
        />
        <ColRight source={source} width={width} height={height} />
      </SDivCols>
    </>
  );
};

const SDivCols = styled.div`
  display: flex;
  justify-content: center;
`;
