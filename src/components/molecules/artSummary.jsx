import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { userState } from "../../store/userState";

export const ArtSummary = (props) => {
  const { artId, name, tags, uses } = props;
  const [tagsArr, setTagsArr] = useState([]);
  const [usesArr, setUsesArr] = useState([]);

  const userInfo = useRecoilValue(userState);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    tags && setTagsArr(tags.split(","));
    uses && setUsesArr(uses.split(","));
  }, [tags, uses]);
  return (
    <>
      {/* <p>art {artId} summary</p> */}
      <h1>{name}</h1>
      <SP>
        <span>tags:</span>
        {tagsArr.map((tag, index) => {
          return <span key={index}>{tag.trim()},,,</span>;
        })}
      </SP>
      <p>
        when you use:
        {usesArr.map((use, index) => {
          return <span key={index}>{use.trim()},,,</span>;
        })}
      </p>
      {!location.pathname.match('/user/') && (
        <>
          <Link to={`/user/${userInfo.lid}/${artId}`}>
            Make your own playground
          </Link>
        </>
      )}
    </>
  );
};

const SP = styled.p`
color: #E9E9E9;
`;