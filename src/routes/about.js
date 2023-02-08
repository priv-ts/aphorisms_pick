import React from "react";
import { useNavigate } from "react-router-dom";

function About() {
  // コンポーネント内でナビゲーションを追加することができる
  const navigate = useNavigate();

  return (
    <>
      <h2>About</h2>
      <button onClick={() => navigate("/contact")}>contact</button>
    </>
  );
}

export default About;
