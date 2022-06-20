import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

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
            "https://brownlynx2.sakura.ne.jp/phpApi-for-react-demo/insert.php";
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
      <form>
        <SLabel>
          post name
          <br />
          <SInput
            value={artName}
            onChange={(event) => onChangeArtName(event)}
          />
        </SLabel>
        <SLabel>
          initial HTML
          <br />
          <STextarea
            value={iniHtml}
            onChange={(event) => onChangeIniHtml(event)}
          />
        </SLabel>
        <SLabel>
          initial Javascript
          <br />
          <STextarea value={iniJs} onChange={(event) => onChangeIniJs(event)} />
        </SLabel>
        <SLabel>
          initial Css
          <br />
          <STextarea
            value={iniCss}
            onChange={(event) => onChangeIniCss(event)}
          />
        </SLabel>
        <SLabel>
          Tags
          <br />
          <SInput value={tags} onChange={(event) => onChangeTags(event)} />
        </SLabel>
        <SLabel>
          Uses
          <br />
          <SInput value={uses} onChange={(event) => onChangeUses(event)} />
        </SLabel>
        <SLabel>
          Note(detail)
          <br />
          <STextarea value={note} onChange={(event) => onChangeNote(event)} />
        </SLabel>
      </form>
      <button onClick={onClickSubmit}>Submit</button>
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
  margin: 12px;
`;

const SInput = styled.input`
  width: 480px;
  padding: 4px;
`;

const STextarea = styled.textarea`
  width: 480px;
  height: 160px;
  padding: 4px;
`;

const SFormArea = styled.div`
  width: 800px;
  margin: 0 auto;
`;

const SSpan = styled.span`
  color: red;
  &:hover {
    cursor: pointer;
  }
`;
