import React from "react";
import { Routes, Route, Link, NavLink } from "react-router-dom";
import { Cols } from "./components/cols";
import { About } from "./routes/about";
import { Art } from "./routes/art";
import { Arts } from "./routes/arts";
import { NoMatch } from "./routes/noMatch";


function App() {
  return (
    <>
      <ul>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "menu__active" : undefined
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "menu__active" : undefined
            }
          >
            About
          </NavLink>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<Cols />} />
        <Route path="/about" element={<About />} />
        <Route path="/arts" element={<Arts />} >
          <Route path=":artId" element={<Art />} />
        </Route>
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </>
  );
}

// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);

export default App;
