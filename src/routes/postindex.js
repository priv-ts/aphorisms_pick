import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function PostIndex() {
  // 初期値は空配列
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await res.json();
      setPosts(data);
    };
    fetchPosts();
  }, []);

  return (
    /* ネストされた子コンポーネントを描画する */
    <ul>
      {posts.map((post) => (
        <li key={post.id}>
          {/* ネストされたコンポーネント内では親コンポーネントからの相対パスで指定できる */}
          <Link to={`${post.id}`}>
            {post.id}:{post.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default PostIndex;
