import { Routes, Route, Link, NavLink } from "react-router-dom";
import { Cols } from "../components/templates/cols";
import { About } from "../components/pages/about";
import { Art } from "../components/pages/art";
import { Arts } from "../components/pages/arts";
import { NoMatch } from "../components/pages/noMatch";
import { Post } from "../components/pages/post";
import { Login } from "../components/pages/login";
import { User } from "../components/pages/user";
import { UserMypage } from "../components/pages/userMypage";
import { UserMyArt } from "../components/pages/userMyArt";
import { HeaderOnly } from "../components/templates/headerOnly";
import { Home } from "../components/pages/home";

export const PageRouter = () => {
    return (<>
    {/* <ul>
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
            to="/login"
            className={({ isActive }) =>
              isActive ? "menu__active" : undefined
            }
          >
            Login
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
      </ul> */}
    <Routes basename="/subfolder">
        <Route path="/" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/post" element={<HeaderOnly><Post /></HeaderOnly>} />
        <Route path="/arts" element={<Arts />} >
          <Route path=":artId" element={<HeaderOnly><Art /></HeaderOnly>} />
        </Route>
        <Route path="/user" element={<HeaderOnly><User /></HeaderOnly>} >
          <Route path=":lid" element={<UserMypage />} />
          <Route path=":lid/:artId" element={<UserMyArt />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </>
        
    );
}