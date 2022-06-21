import React, { memo, useEffect, useState } from "react";
import Editor from "@monaco-editor/react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
// import { useRecoilValue } from "recoil";
// import { userState } from "../../store/userState";

export const ColLeft = memo((props) => {
  // const userInfo = useRecoilValue(userState);
  const {
    iniHtml,
    handleEditorChangeH,
    iniJs,
    handleEditorChangeJ,
    iniCss,
    handleEditorChangeC,
    onClickPost,
    onClickUpdateDB,
    onClickReflect,
  } = props;
  const location = useLocation();

  return (
    <SDivColLeft>
      <Editor
        height="30vh"
        defaultLanguage="html"
        value={iniHtml}
        onChange={handleEditorChangeH}
      />
      <Editor
        height="30vh"
        defaultLanguage="javascript"
        value={iniJs}
        onChange={handleEditorChangeJ}
      />
      <Editor
        height="30vh"
        defaultLanguage="css"
        value={iniCss}
        onChange={handleEditorChangeC}
      />
      {location.pathname.match("/user/") && <><button onClick={onClickPost}>updateServerFile</button><button onClick={onClickUpdateDB}>updateDB</button>
      <button onClick={onClickReflect}>reflect</button></>}
    </SDivColLeft>
  );
});

const SDivColLeft = styled.div`
  width: 40%;
  border: 1px black solid;
  margin: 12px;
`;
