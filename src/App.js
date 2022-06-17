import React from "react";
// import ReactDOM from "react-dom";

import Editor from "@monaco-editor/react";

function App() {
  function handleEditorChange(value, event) {
    console.log("here is the current model value:", value);
  }

  return (
   <Editor
     height="90vh"
     defaultLanguage="javascript"
     defaultValue="// some comment"
     onChange={handleEditorChange}
   />
  );
}

// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);

export default App;