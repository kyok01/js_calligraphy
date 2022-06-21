import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ArtCard } from "../molecules/artCard";
import { SearchInput } from "../molecules/searchInput";

export const SearchArea = (props) => {
  const [val, setVal] = useState("");
  const [myArts, setMyArts] = useState([]);
  const { lid } = useParams();
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
        "https://brownlynx2.sakura.ne.jp/phpApi-for-react-demo/insert.php";
    }

    fetch(phpFile, data)
      .then((res) => res.json())
      .then((arr) => setMyArts(arr))
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    postSelectAll();
  }, []);

  console.log(myArts);
  const onChangeInput = (event) => {
    setVal(event.target.value);
  };
  return (
    <div>
      <SearchInput onChange={onChangeInput} value={val} />
      {myArts.map((myArt, index) => {
        console.log("aaa");
        return (
          <ArtCard
            name={myArt["name"]}
            tags={myArt["tags"]}
            uses={myArt["uses"]}
            key={index}
          />
        );
      })}
    </div>
  );
};
