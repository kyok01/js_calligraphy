import React, { useEffect , useState } from "react";

export const ArtSummary = (props) => {
  const { artId, name, tags, uses } = props;
  const [tagsArr, setTagsArr] = useState([]);
  const [usesArr, setUsesArr] = useState([]);
  useEffect(() => {
    tags && setTagsArr(tags.split(","));
    uses && setUsesArr(uses.split(','));
  }, [tags, uses]);
  return (
    <>
      <p>art {artId} summary</p>
      <p>name:{name}</p>
      <p>
        tags:
        {tagsArr.map((tag, index) => {
          return <span key={index}>{tag.trim()},,,</span>;
        })}
      </p>
      <p>when you use:
      {usesArr.map((use, index) => {
          return <span key={index}>{use.trim()},,,</span>;
        })}
      </p>
    </>
  );
};
