import React, { memo, useEffect, useState } from "react";
import Editor from "@monaco-editor/react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { PrimaryTextBox } from "../atoms/primaryTextBox";
// import { useRecoilValue } from "recoil";
// import { userState } from "../../store/userState";
import { PrimaryButton } from "../atoms/primaryButton";
import { SecondaryButton } from "../atoms/secondaryButton";

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
      <PrimaryTextBox>HTML</PrimaryTextBox>
      <SEditorContainer>
        <Editor
          height="16vh"
          defaultLanguage="html"
          value={iniHtml}
          onChange={handleEditorChangeH}
        />
      </SEditorContainer>
      <PrimaryTextBox>Javascript</PrimaryTextBox>
      <SEditorContainer>
        <Editor
          height="16vh"
          defaultLanguage="javascript"
          value={iniJs}
          onChange={handleEditorChangeJ}
        />
      </SEditorContainer>
      <PrimaryTextBox>CSS</PrimaryTextBox>
      <SEditorContainer>
        <Editor
          height="16vh"
          defaultLanguage="css"
          value={iniCss}
          onChange={handleEditorChangeC}
        />
      </SEditorContainer>

      {location.pathname.match("/user/") && (
        <SButtonContainer>
          <PrimaryButton onClick={onClickPost}>Update</PrimaryButton>
          {/* <button onClick={onClickUpdateDB}>updateDB</button> */}
          <SecondaryButton onClick={onClickReflect}>Reflect</SecondaryButton>
        </SButtonContainer>
      )}
    </SDivColLeft>
  );
});

const SDivColLeft = styled.div`
  width: 40%;
  /* border: 1px black solid; */
  margin: 12px;
`;

const SEditorContainer = styled.div`
  border: 1px #454545 solid;
`;

const SButtonContainer = styled.div`
display: flex;
height: 50px;
justify-content: center;
align-items: center;
`;