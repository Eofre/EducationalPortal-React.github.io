import React from "react";
import like from "./img/like.svg";
import { useNavigate } from "react-router-dom";

function ArticleCard({ article }) {
  const router = useNavigate();
  return (
    <div
      className="article-card"
      onClick={() => router(`/article${article.id}`, { state: article })}
    >
      <img className="article-card__img" src={article.img} alt="" />
      <div className="article-card__body">
        <h3 className="article-card__title">{article.title}</h3>
        <p className="article-card__description">{article.description}</p>
      </div>
      <div className="article-card__reactions">
        <img src={like} alt="" className="test__reactions-like" />
        {article.likes}
      </div>
    </div>
  );
}

export default ArticleCard;
