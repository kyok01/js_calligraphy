import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
// import { ArtCard } from "../molecules/artCard";
import { SearchInput } from "../molecules/searchInput";
import styled from "styled-components";
import { ArtRow } from "../molecules/artRow";
// import { useRecoilState } from "recoil";
// import { userState } from "../../store/userState";

export const SearchArea = (props) => {
  const [val, setVal] = useState("");
  const [myArts, setMyArts] = useState([]);
  // const [userInfo, setUserInfo] = useRecoilState(userState);
  const { lid } = useParams();
  const navigate = useNavigate();

// const afterPostSelectAll = (arr) => {
//   setMyArts(arr);
//   // setUserInfo({postNum: arr.length})
// }

  const postSelectAll = () => {
    const postData = new FormData(); // フォーム方式で送る場合
    postData.set("lid", lid);
    const data = {
      method: "POST",
      body: postData,
    };

    // post先のphpファイルを開発環境か本番環境かによって切り替える
    let phpFile =
      "http://localhost/Github-Repo-PHP/phpApi_js_calligraphy/selectAllMyArt.php";
    if (window.location.origin === "https://brownlynx2.sakura.ne.jp") {
      phpFile =
        "https://brownlynx2.sakura.ne.jp/phpApi_jsCal_test/selectAllMyArt.php";
    }

    fetch(phpFile, data)
      .then((res) => res.json())
      .then((arr) => setMyArts(arr))
      .catch((error) => {
        console.log(error);
      });
  };

  const postSelectSpecific = () => {
    const postData = new FormData(); // フォーム方式で送る場合
    postData.set("lid", lid);
    postData.set("keyword", val);
    const data = {
      method: "POST",
      body: postData,
    };

    // post先のphpファイルを開発環境か本番環境かによって切り替える
    let phpFile =
      "http://localhost/Github-Repo-PHP/phpApi_js_calligraphy/selectSpecificMyArt.php";
    if (window.location.origin === "https://brownlynx2.sakura.ne.jp") {
      phpFile =
        "https://brownlynx2.sakura.ne.jp/phpApi_jsCal_test/selectSpecificMyArt.php";
    }

    fetch(phpFile, data)
      .then((res) => res.json()) //res.json()
      .then((arr) => setMyArts(arr)) //      .then(console.log)
      .catch((error) => {
        console.log(error);
      });
  };

  // useEffect(()=>{
  //   myArts && setUserInfo({postNum: myArts.length})
  // },[myArts])


  const onClickNavMyArt = (art_id) => {
    navigate(`/user/${lid}/${art_id}`);
  }

  useEffect(() => {
    postSelectAll();
  }, []);

  useEffect(() => {
    postSelectSpecific();
    console.log("useeffectVal");
  }, [val]);

  console.log(myArts);
  const onChangeInput = (event) => {
    setVal(event.target.value);
  };
  return (
    <div>
<STitle>
<SH2>Your Arts List</SH2>
      <SearchInput onChange={onChangeInput} value={val} />
</STitle>
      
      <STable>
        <thead><STr>
          <th>Art Name</th>
          <SThRuledLine>Tags</SThRuledLine>
          <th>Uses</th>
          </STr></thead>
        <tbody>
      {myArts.map((myArt, index) => {
        console.log("aaa");
        return (
          // <SArtCard
          //   name={myArt["name"]}
          //   tags={myArt["tags"]}
          //   uses={myArt["uses"]}
          //   key={index}
          // />
          <ArtRow
          name={myArt["name"]}
          tags={myArt["tags"]}
          uses={myArt["uses"]}
          key={index}
          onClick={()=>onClickNavMyArt(myArt["art_id"])}
        />
        );
      })}
      </tbody>
      </STable>
    </div>
  );
};

const STable = styled.table`
border-bottom: 1px solid #E9E9E9;
border-collapse: collapse;
`;


const SThRuledLine = styled.th`
  border-left: 1px solid #e9e9e9;
  border-right: 1px solid #e9e9e9;
`;

const STr = styled.tr`
  border-bottom: 1px solid #e9e9e9;
`;
// const SArtCard = styled(ArtCard)`margin: 8px auto;background-color: red;color: red;`;

const SH2 = styled.h2`
color: #5DA797;
`;

const STitle = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
`;