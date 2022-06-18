import React, { useState } from "react";

export const ArtPostForm = () => {
  const [artName, setArtName] = useState("");
  const [iniHtml, setIniHtml] = useState("");
  const [iniJs, setIniJs] = useState("");
  const [iniCss, setIniCss] = useState("");
  const [tags, setTags] = useState("");
  const [uses, setUses] = useState("");
  const [note, setNote] = useState("");

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
  const postForm = (
    <form>
      <label>
        post name
        <input value={artName} onChange={(event) => onChangeArtName(event)} />
      </label>
      <label>
        initial HTML
        <textarea
          value={iniHtml}
          onChange={(event) => onChangeIniHtml(event)}
        />
      </label>
      <label>
        initial Javascript
        <textarea value={iniJs} onChange={(event) => onChangeIniJs(event)} />
      </label>
      <label>
        initial Css
        <textarea value={iniCss} onChange={(event) => onChangeIniCss(event)} />
      </label>
      <label>
        Tags
        <input value={tags} onChange={(event) => onChangeTags(event)} />
      </label>
      <label>
        Uses
        <input value={uses} onChange={(event) => onChangeUses(event)} />
      </label>
      <label>
        Note(detail)
        <textarea value={note} onChange={(event) => onChangeNote(event)} />
      </label>
      <input type="submit" value="submit" />
    </form>
  );
  return <>{postForm}</>;
};
