import React, { useState } from "react";
import "./style.css";
import rightArrow from "./img/right-arrow.svg";
import title1 from "./img/titlee1.png";
import title2 from "./img/title2.png";

import TestCard from "../components/TestCard";

import article1 from "./img/article1.jpg";
import article2 from "./img/article2.jpg";
import article3 from "./img/article3.jpg";
import ArticleCard from "../components/ArticleCard";

function Home({ tests, articles }) {
  return (
    <section className="home">
      <div className="conteiner">
        <div className="home__inner">
          <div className="home__test">
            <div className="home__title">
              <h2 className="home__title-text">Актуальные тесты</h2>
              <img src={title1} alt="" className="home__title-img" />
            </div>
            <div className="home__tests">
              {tests.map((item, index) =>
                index < 3 ? <TestCard key={item.id} test={item} /> : false
              )}
            </div>
          </div>
          <div className="home__article">
            <div className="home__title">
              <h2 className="home__title-text">Актуальные статьи</h2>
              <img src={title2} alt="" className="home__title-img" />
            </div>
            <div className="home__articles">
              {articles.map((article) => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
