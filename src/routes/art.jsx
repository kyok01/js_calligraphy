import React, { useEffect }from "react";
import { useState } from "react";
import { useParams } from 'react-router-dom';
import { Cols } from "../components/cols";


export const Art = () => {
    const {artId} = useParams();
    const [iniVals, setIniVals] = useState([]);
    const postIniVal = () =>{
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
            "https://brownlynx2.sakura.ne.jp/phpApi-for-react-demo/delete.php";
        }
    
        fetch(phpFile, data)
          .then((res) => res.json())
          .then((data) => setIniVals(data[0]))
          .catch((error) => {
            console.log(error);
          });       
    }
    useEffect(() => {
        postIniVal();
    }, []);
    return (
      <>
      <h3>art {artId}</h3>
      {/* <p>{iniVals["ini_html"]}<br></br>
      {iniVals["ini_js"]}
      {iniVals["ini_css"]}
      {iniVals["note"]}</p> */}
      <Cols 
      iniHtml = {iniVals["ini_html"]}
      iniJs = {iniVals["ini_js"]}
      iniCss = {iniVals["ini_css"]}
      note = {iniVals["note"]}
      />
      </>
    );
    
}