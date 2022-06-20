import React from "react";
import { PageRouter } from "./pageRouter/pageRouter";
import { RecoilRoot } from "recoil";

function App() {
  return (
    <>
      <RecoilRoot>
        <PageRouter />
      </RecoilRoot>
    </>
  );
}

// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);

export default App;
