import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { SecondaryTextBox } from "../atoms/secondaryTextBox";

export const ArtRow = (props) => {
  const { name, tags, uses, onClick } = props;
  const [tagsArr, setTagsArr] = useState([]);
  const [usesArr, setUsesArr] = useState([]);

  useEffect(() => {
    tags && setTagsArr(tags.split(","));
    uses && setUsesArr(uses.split(","));
  }, [tags, uses]);

  return (
    <STr onClick={onClick}>
      <td>{name}</td>
      <STdRuledLine>
        {tagsArr.map((tag, index) => {
          return <SecondaryTextBox key={index}>{tag.trim()}</SecondaryTextBox>;
        })}
      </STdRuledLine>
      <td>
        {usesArr.map((use, index) => {
          return <SecondaryTextBox key={index}>{use.trim()}</SecondaryTextBox>;
        })}
      </td>
    </STr>
  );
};

const STdRuledLine = styled.td`
  border: 1px solid #e9e9e9;
`;

const STr = styled.tr`
  border-bottom: 1px solid #e9e9e9;
  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;