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

export const PageRouter = () => {
    return (<>
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
        <Route path="/post" element={<Post />} />
        <Route path="/arts" element={<Arts />} >
          <Route path=":artId" element={<Art />} />
        </Route>
        <Route path="/user" element={<User />} >
          <Route path=":lid" element={<UserMypage />} />
          <Route path=":lid/:artId" element={<UserMyArt />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </>
        
    );
}