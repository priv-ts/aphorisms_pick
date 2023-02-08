import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Post() {
  // パスパラメータをuseParamsで受け取る
  // useParamsの返り値を分割代入によってpostIdの値のみ受け取る
  const { postId } = useParams();
  // 初期値は空文字を指定する
  const [post, setPost] = useState("");

  useEffect(() => {
    const fetchPost = async () => {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${postId}`
      );
      const data = await res.json(); // json()もPromiseを返す
      setPost(data); // 受け取ったデータを持ってstateを更新する
    };
    fetchPost();
  }, [postId]);

  return (
    <>
      <h2>Single Post</h2>
      <div>
        <p>ID:{post.id}</p>
        <p>タイトル:{post.title}</p>
        <p>内容:{post.body}</p>
      </div>
    </>
  );
}

export default Post;
