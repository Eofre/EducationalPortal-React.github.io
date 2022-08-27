import React from "react";
import { useLocation } from "react-router-dom";

function Article() {
  const location = useLocation();
  const article = location.state;
  return (
    <section className="article">
      <div className="conteiner">
        <div className="article__inner">
          <h2 className="article__title">{article.title}</h2>
          <img src={article.img} alt="" className="article__img" />
          <div className="article__text">
            {article.paragraphs.map((item) => (
              <div key={item.text} className="article__paragraphs">
                <h3 className="article__paragraphs-title">{item.title}</h3>
                <p className="article__paragraphs-text">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Article;
