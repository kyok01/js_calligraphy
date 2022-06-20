import React from "react";
import Editor from "@monaco-editor/react";
import styled from "styled-components";

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
    <SDivColLeft>
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
    </SDivColLeft>
  );
};

const SDivColLeft = styled.div`
  width: 40%;
  border: 1px black solid;
  margin: 12px;
`;
