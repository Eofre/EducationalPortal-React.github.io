import React from "react";
import { useNavigate } from "react-router-dom";

function ArticleCard({ article }) {
  const router = useNavigate();
  return (
    <div
      className="article-card"
      onClick={() => router(`/article${article.id}`, { state: article })}
    >
      <img className="article-card-img" src={article.img} alt="" />
      <h3 className="article-card-title">{article.title}</h3>
    </div>
  );
}

export default ArticleCard;
