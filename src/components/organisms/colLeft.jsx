import React from "react";
import Editor from "@monaco-editor/react";

export const ColLeft = (props) => {
  const {
    iniHtml,
    handleEditorChangeH,
    iniJs,
    handleEditorChangeJ,
    iniCss,
    handleEditorChangeC,
    onClickPost,
    onClickReflect,
  } = props;
  return (
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
      <button onClick={onClickReflect}>reflect</button>
    </div>
  );
};
