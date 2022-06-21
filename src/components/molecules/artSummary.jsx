import React, { useEffect , useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { userState } from "../../store/userState";

export const ArtSummary = (props) => {
  const { artId, name, tags, uses } = props;
  const [tagsArr, setTagsArr] = useState([]);
  const [usesArr, setUsesArr] = useState([]);

const userInfo = useRecoilValue(userState);
const navigate = useNavigate();

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
      {userInfo.isLogin && <><Link to={`/user/${userInfo.lid}/${artId}`}>Make your own playground</Link><Link to={`/arts/${artId}`}>誰でも見れるページ</Link></>}
    </>
  );
};
