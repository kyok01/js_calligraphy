import React from "react";
// import ReactDOM from "react-dom";
import { useState } from "react";

import Editor from "@monaco-editor/react";

function App() {
  let iniHtml = '<!DOCTYPE html>\n<html lang="ja">\n';
  iniHtml +=
    '<head><meta charset="UTF-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Document</title></head>\n';
  iniHtml += "<body>\n<h1>react</h1>\n<h2>now</h2>\n<p></p>\n</body>\n</html>";
  const iniJs = 'document.querySelector("h2").innerHTML="change";';
  const iniCss = 'h1 {color:red}'
  const [html, setHtml] = useState(iniHtml);
  const [js, setJs] = useState(iniJs);
  const [css, setCss] = useState(iniCss);
  const [source, setSource] = useState(
    "http://localhost/Github-Repo-PHP/phpApi_js_calligraphy/data/test.html"
  );
  const width = '100%';
  const height = 500;

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
    // const elem=document.getElementById('elem');
    // console.log(elem.contentWindow.document.querySelector('h1'));
    // console.log(elem.contentWindow.document.querySelector('html'));
    // elem.contentWindow.document.querySelector('html').innerHTML = msg;
    // console.log(msg);
    // elem.innerHTML = msg;
    const postData = new FormData(); // フォーム方式で送る場合
    postData.set("html", html); // set()で格納する
    postData.set("js", js); // set()で格納する
    postData.set("css", css); // set()で格納する

    const data = {
      method: "POST",
      body: postData,
    };

    // post先のphpファイルを開発環境か本番環境かによって切り替える
    let phpFile =
      "http://localhost/Github-Repo-PHP/phpApi_js_calligraphy/fileWrite.php";
    if (window.location.origin === "https://brownlynx2.sakura.ne.jp") {
      phpFile =
        "https://brownlynx2.sakura.ne.jp/phpApi-for-react-demo/delete.php";
    }

    fetch(phpFile, data)
      .then((res) => res.text())
      .then(console.log)
      .then(setSource(""))
      .catch((error) => {
        console.log(error);
      });

    // setSource('');
    // setSource('http://localhost/Github-Repo-PHP/phpApi_js_calligraphy/data/test.html');
  };

  const onClickReflect = () => {
    setSource(
      "http://localhost/Github-Repo-PHP/phpApi_js_calligraphy/data/test.html"
    );
    // if (js.indexOf('father') !== -1) {
    //   js.replace('document', 'document.getElementById("elem").elem.contentWindow.document')
    // }

    // console.log(
    //   js.replace('document', 'document.getElementById("elem").elem.contentWindow.document')
    // );

    // const elem=document.getElementById('elem').elem.contentWindow.document;
    // elem.querySelector('h1').innerHTML = 'change';
  };

  return (
    <div id="cols">
      <div id="col__left">
        <Editor
          height="30vh"
          defaultLanguage="html"
          defaultValue={iniHtml}
          onChange={handleEditorChangeH}
        />
        <Editor
          height="30vh"
          defaultLanguage="javascript"
          defaultValue={iniJs}
          onChange={handleEditorChangeJ}
        />
        <Editor
          height="30vh"
          defaultLanguage="css"
          defaultValue={iniCss}
          onChange={handleEditorChangeC}
        />
        <button onClick={onClickPost}>send</button>
        <button onClick={onClickReflect}>change</button>
      </div>
      <div id="col__right">
        <iframe
          title="iframe"
          src={source}
          // height={height}
          width={width}
          height={height}
          id="elem"
        />
      </div>
    </div>
  );
}

// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);

export default App;
