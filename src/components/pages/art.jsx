import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { Cols } from "../templates/cols";
import { ArtSummary } from "../molecules/artSummary";
import { ArtDetail } from "../molecules/artDetail";
// import '../style.css';

export const Art = () => {
  const { artId } = useParams();
  const [iniVals, setIniVals] = useState([]);

  const postIniVal = () => {
    console.log("postinival");
    const postData = new FormData(); // フォーム方式で送る場合
    postData.set("id", artId); // set()で格納する

    const data = {
      method: "POST",
      body: postData,
    };

    // post先のphpファイルを開発環境か本番環境かによって切り替える
    let phpFile =
      "http://localhost/Github-Repo-PHP/phpApi_js_calligraphy/iniValRes.php";
    if (window.location.origin === "https://brownlynx2.sakura.ne.jp") {
      phpFile =
        "https://brownlynx2.sakura.ne.jp/phpApi_jsCal_test/iniValRes.php";
    }

    fetch(phpFile, data)
      .then((res) => res.json())
      .then((data) => setIniVals(data[0]),console.log('setInival'))
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    postIniVal();
  }, []);

  console.log('aaa');
  return (
    <>
      <h3>art {artId}</h3>
      <ArtSummary
        artId={artId}
        name={iniVals["name"]}
        tags={iniVals["tags"]}
        uses={iniVals["uses"]}
      />
      {/* <p>{iniVals["ini_html"]}<br></br>
      {iniVals["ini_js"]}
      {iniVals["ini_css"]}
      {iniVals["note"]}</p> */}
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
