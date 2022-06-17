import React from "react";
// import ReactDOM from "react-dom";
import { useState } from "react";

import Editor from "@monaco-editor/react";

function App() {
  const [msg, setMsg] = useState('');
  const [js, setJs] = useState('');
  const source = './iframe.html';
  const width = 300;
  const height = 200;
  let html = '<!DOCTYPE html>\n<html lang="ja">\n';
  html += '<head><meta charset="UTF-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Document</title></head>';
  html += '<body><h1>react</h1><p></p></body></html>';


  
  function handleEditorChange1(value, event) {
    console.log("here is the current model value:", value);
    setMsg(value);
  }
  function handleEditorChange2(value, event) {
    console.log("here is the current model value:", value);
    setJs(value);
  }
  const onClickPost = () => {
    const elem=document.getElementById('elem');
    console.log(elem.contentWindow.document.querySelector('h1'));
    console.log(elem.contentWindow.document.querySelector('html'));
    elem.contentWindow.document.querySelector('html').innerHTML = msg;
    console.log(msg);
    // elem.innerHTML = msg;
    // const postData = new FormData(); // フォーム方式で送る場合
    // postData.set("msg", msg); // set()で格納する

    // const data = {
    //   method: "POST",
    //   body: postData,
    // };

    // // post先のphpファイルを開発環境か本番環境かによって切り替える
    // let phpFile =
    //   "http://localhost/Github-Repo-PHP/phpApi_js_calligraphy/sample.php";
    // if (window.location.origin === "https://brownlynx2.sakura.ne.jp") {
    //   phpFile =
    //     "https://brownlynx2.sakura.ne.jp/phpApi-for-react-demo/delete.php";
    // }

    // fetch(phpFile, data)
    //   .then((res) => res.text())
    //   .then(console.log)
    //   .catch((error) => {
    //     console.log(error);
    //   });
  }

  const onClickChange = () => {
    if (js.indexOf('father') !== -1) {
      js.replace('document', 'document.getElementById("elem").elem.contentWindow.document')
    } 

    console.log(
      js.replace('document', 'document.getElementById("elem").elem.contentWindow.document')
    );

    // const elem=document.getElementById('elem').elem.contentWindow.document;
    // elem.querySelector('h1').innerHTML = 'change';
  }

  return (
    <>
      <Editor
        height="30vh"
        defaultLanguage="html"
        defaultValue={html}
        onChange={handleEditorChange1}
      />
            <Editor
        height="30vh"
        defaultLanguage="javascript"
        defaultValue='document.querySelector("h1").innerHTML="change"'
        onChange={handleEditorChange2}
      />
      {/* <script>{msg}</script> */}
      <button onClick={onClickPost}>send</button>
      <button onClick={onClickChange}>change</button>
      <iframe src={source} height={height} width={width} id='elem'/>
      
    </>
  );
}

// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);

export default App;
