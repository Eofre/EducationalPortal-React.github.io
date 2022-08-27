import React, { useState } from "react";
import "./style.css";
import rightArrow from "./img/right-arrow.svg";

import TestCard from "../components/TestCard";
import test1 from "./img/test1.jpg";
import test2 from "./img/test2.jpg";

function Home() {
  const [tests, setTests] = useState([
    {
      id: 0,
      title: "Тест по морфологии (имя существительное)",
      description: "Тематический тест по морфологии (имя существительное)",
      img: test1,
      likes: 79,
      questions: [
        {
          question: " Морфология - раздел науки о языке, изучающий ...",
          answers: [
            "звуки речи",
            "части слова",
            "части речи",
            "словосочетания и предложения",
          ],
          currectAnswer: 2,
        },
        {
          question: "Что обозначают междометия?",
          answers: [
            "признаки действия",
            "признаки",
            "чувства и побуждения к действию, не называя их",
            "действия",
          ],
          currectAnswer: 2,
        },
        {
          question: "Укажите предложения, где есть междометие.",
          answers: [
            "Давай! Забивай",
            "«Кря-кря», — послышалось издалека.",
            "Рябчик засвистел: «Тиу, тиу, ти-уу-ти»",
            "Ура! Я поступил!",
          ],
          currectAnswer: 3,
        },
        {
          question: "Имя существительное обозначает ...",
          answers: [
            "действие",
            "предмет",
            "признак предмета",
            "действие предмета",
          ],
          currectAnswer: 1,
        },
      ],
    },
    {
      id: 1,
      title: "Тест по морфологии (имя существительное)",
      description: "Тематический тест по морфологии (имя существительное)",
      img: test1,
      likes: 57,
      questions: [
        {
          question: " Морфология - раздел науки о языке, изучающий ...",
          answers: [
            "звуки речи",
            "части слова",
            "части речи",
            "словосочетания и предложения",
          ],
          currectAnswer: 2,
        },
        {
          question: "Что обозначают междометия?",
          answers: [
            "признаки действия",
            "признаки",
            "чувства и побуждения к действию, не называя их",
            "действия",
          ],
          currectAnswer: 2,
        },
        {
          question: "Укажите предложения, где есть междометие.",
          answers: [
            "Давай! Забивай",
            "«Кря-кря», — послышалось издалека.",
            "Рябчик засвистел: «Тиу, тиу, ти-уу-ти»",
            "Ура! Я поступил!",
          ],
          currectAnswer: 3,
        },
        {
          question: "Имя существительное обозначает ...",
          answers: [
            "действие",
            "предмет",
            "признак предмета",
            "действие предмета",
          ],
          currectAnswer: 1,
        },
      ],
    },
  ]);

  return (
    <section className="home">
      <div className="conteiner">
        <div className="home__inner">
          <div className="home__test">
            <div className="home__title">
              <h2 className="home__title-text">
                ТОП 5 ТЕСТОВ (по количеству лайков)
              </h2>
              <img src={rightArrow} alt="" className="home__title-img" />
            </div>
            <div className="home__tests">
              {tests.map((item) => (
                <TestCard key={item.id} test={item} />
              ))}
            </div>
          </div>
          <div className="home__article">
            <div className="home__title">
              <h2 className="home__title-text">Актуальные статьи</h2>
              <img src={rightArrow} alt="" className="home__title-img" />
            </div>
            <div className="home__articles"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
