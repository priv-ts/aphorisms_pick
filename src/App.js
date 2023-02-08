import React from "react";
import {
  Routes,
  Route,
  Link,
  NavLink,
  useResolvedPath,
  useMatch,
} from "react-router-dom";
import "./App.css";
import Home from "./routes/home";
import About from "./routes/about";
import Contact from "./routes/contact";
import Posts from "./routes/posts";
import Post from "./routes/post";
import PostIndex from "./routes/postindex";
import NoMatch from "./routes/nomatch";

// childrenはHTMLコンテンツを受け取る引数、toはリンク先
function CustomLink({ children, to }) {
  // このあたりあんまり理解してない
  let resolved = useResolvedPath(to); // 飛び先（toの値）
  let match = useMatch({
    path: resolved.pathname,
    end: true,
  });
  return (
    <div>
      <Link style={{ color: match ? "aquamarine" : "" }} to={to}>
        {children}
      </Link>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <h1>Hello React Router v6</h1>
      <ul>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : undefined)}
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : undefined)}
            to="/posts"
          >
            Posts
          </NavLink>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <CustomLink to="/contact">Contact</CustomLink>
        </li>
      </ul>

      <Routes>
        {/* path="/"はindexに置き換えることができる */}
        <Route index element={<Home />} />
        {/* pathをPathと誤記してもエラーにはならない */}
        <Route path="/about" element={<About />} />
        {/* propsを受け渡す */}
        <Route path="/contact" element={<Contact message="Hello Contact" />} />
        <Route path="/posts" element={<Posts />}>
          <Route index element={<PostIndex />} />
          {/* ネストする場合は/をつけないようにする（/postsの相対パスを/抜きで指定する） */}
          {/* :postIdとすることでダイナミックルーティングとなる */}
          <Route path=":postId" element={<Post />} />
        </Route>
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </div>
  );
}

export default App;
