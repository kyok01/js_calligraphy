import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Input } from "../atoms/input";
import { PrimaryButton } from "../atoms/primaryButton";
// import Editor from "@monaco-editor/react";

export const ArtPostForm = () => {
  const [artName, setArtName] = useState("");
  const [iniHtml, setIniHtml] = useState("");
  const [iniJs, setIniJs] = useState("");
  const [iniCss, setIniCss] = useState("");
  const [tags, setTags] = useState("");
  const [uses, setUses] = useState("");
  const [note, setNote] = useState("");
  const [artId, setArtId] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (artId) {
      const postFileWritePhp = () => {
        const postData = new FormData(); // フォーム方式で送る場合
        postData.set("artId", artId);
        postData.set("html", iniHtml);
        postData.set("js", iniJs);
        postData.set("css", iniCss);

        const data = {
          method: "POST",
          body: postData,
        };

        // post先のphpファイルを開発環境か本番環境かによって切り替える
        let phpFile =
          "http://localhost/Github-Repo-PHP/phpApi_js_calligraphy/fileWrite.php";
        if (window.location.origin === "https://brownlynx2.sakura.ne.jp") {
          phpFile =
            "https://brownlynx2.sakura.ne.jp/phpApi_jsCal_test/fileWrite.php";
        }

        fetch(phpFile, data)
          .then((res) => res.text())
          .then(console.log)
          .catch((error) => {
            console.log(error);
          });
      };
      postFileWritePhp();
      resetState();
    }
  }, [artId]);

  const onChangeArtName = (event) => {
    setArtName(event.target.value);
  };
  const onChangeIniHtml = (event) => {
    setIniHtml(event.target.value);
  };
  const onChangeIniJs = (event) => {
    setIniJs(event.target.value);
  };
  const onChangeIniCss = (event) => {
    setIniCss(event.target.value);
  };
  const onChangeTags = (event) => {
    setTags(event.target.value);
  };
  const onChangeUses = (event) => {
    setUses(event.target.value);
  };
  const onChangeNote = (event) => {
    setNote(event.target.value);
  };

  const postInsertArtPhp = () => {
    const postData = new FormData(); // フォーム方式で送る場合
    postData.set("artName", artName);
    postData.set("iniHtml", iniHtml);
    postData.set("iniJs", iniJs);
    postData.set("iniCss", iniCss);
    postData.set("tags", tags);
    postData.set("uses", uses);
    postData.set("note", note);

    const data = {
      method: "POST",
      body: postData,
    };

    // post先のphpファイルを開発環境か本番環境かによって切り替える
    let phpFile =
      "http://localhost/Github-Repo-PHP/phpApi_js_calligraphy/insertArt.php";
    if (window.location.origin === "https://brownlynx2.sakura.ne.jp") {
      phpFile =
        "https://brownlynx2.sakura.ne.jp/phpApi-for-react-demo/insert.php";
    }

    fetch(phpFile, data)
      .then((res) => res.text())
      .then((id) => setArtId(id))
      .catch((error) => {
        console.log(error);
      });
  };

  const resetState = () => {
    setArtName("");
    setIniHtml("");
    setIniJs("");
    setIniCss("");
    setTags("");
    setUses("");
    setNote("");
  };

  const onClickSubmit = () => {
    postInsertArtPhp();
  };

  const postForm = (
    <SFormArea>
      <SForm>
        <div>
          <SLabel>
            <Input
              value={artName}
              onChange={(event) => onChangeArtName(event)}
              placeholder="Art Name"
            />
          </SLabel>
          <SLabel>
            <Input
              value={tags}
              onChange={(event) => onChangeTags(event)}
              placeholder="Tags"
            />
          </SLabel>
          <SLabel>
            <Input
              value={uses}
              onChange={(event) => onChangeUses(event)}
              placeholder="Uses"
            />
          </SLabel>
          <SLabel>
            {/* Note(detail) */}
            {/* <br /> */}
            <SNTextarea
              value={note}
              onChange={(event) => onChangeNote(event)}
              placeholder="Note"
            />
          </SLabel>
        </div>
        <div>
          <SLabel>
            {/* initial HTML
          <br /> */}
            <STextarea
              value={iniHtml}
              onChange={(event) => onChangeIniHtml(event)}
              placeholder="Initial HTML"
            />
          </SLabel>
          <SLabel>
            {/* initial Javascript
          <br /> */}
            <STextarea
              value={iniJs}
              onChange={(event) => onChangeIniJs(event)}
              placeholder="Initial Javascript"
            />
          </SLabel>
          <SLabel>
            {/* initial Css
          <br /> */}
            <STextarea
              value={iniCss}
              onChange={(event) => onChangeIniCss(event)}
              placeholder="Initial CSS"
            />
          </SLabel>
        </div>
      </SForm>
      <SBContainer>
        <PrimaryButton onClick={onClickSubmit}>Submit</PrimaryButton>
      </SBContainer>
      {/* <button onClick={onClickSubmit}>Submit</button> */}
    </SFormArea>
  );
  return (
    <>
      {postForm}
      {artId && (
        <p>
          Please visit{" "}
          <SSpan onClick={() => navigate(`/arts/${artId}`)}>
            the page you have posted
          </SSpan>
        </p>
      )}
    </>
  );
};

const SLabel = styled.label`
  display: block;
  margin: 16px;
`;

const SInput = styled.input`
  width: 480px;
  padding: 4px;
`;

const STextarea = styled.textarea`
  width: 400px;
  height: 148px;
  padding: 16px;
  font-size: 1rem;
  border-radius: 16px;
  border: solid #ddd 1px;
  resize: none;
  ::placeholder {
    font-size: 1rem;
  }
`;

const SNTextarea = styled.textarea`
  width: 400px;
  height: 400px;
  padding: 16px;
  font-size: 1rem;
  border-radius: 16px;
  border: solid #ddd 1px;
  resize: none;
  ::placeholder {
    font-size: 1rem;
  }
`;

const SFormArea = styled.div`
  width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SSpan = styled.span`
  color: red;
  &:hover {
    cursor: pointer;
  }
`;

const SForm = styled.div`
  display: flex;
`;

const SBContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
