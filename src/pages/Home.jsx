import React, { useState } from "react";
import "./style.css";
import rightArrow from "./img/right-arrow.svg";

import TestCard from "../components/TestCard";
import test1 from "./img/test3.jpg";
import test2 from "./img/test2.jpg";

function Home() {
  const [tests, setTests] = useState([
    {
      id: 0,
      title:
        "Сложный тест на знание русского языка, который по силам только тем, кто учился на одни пятерки",
      description:
        "Как давно вы окончили школу? Даже если это было давно, у вас есть все шансы ответить правильно хотя бы на 80% вопросов этого теста. При условии, что вы прилежно учились.",
      img: test1,
      likes: 79,
      questions: [
        {
          question:
            "Какое слово состоит из приставки, корня, суффикса и окончания?",
          answers: ["задумав", "перевал", "прибранный", "задумчив"],
          currectAnswer: 3,
        },
        {
          question: "В каком слове пишется буква О?",
          answers: ["волч_нок", "зач_тка", "упрощ_нный", "размеж_вка"],
          currectAnswer: 0,
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
          question: "У какого слова значение определено неверно?",
          answers: [
            "Ажиотаж - борьба интересов вокруг чего-либо",
            "Неологизм-недавно появившееся слово в словаре",
            "Фамильярный - неуместно развязный, слишком непринужденный",
            "Монолит- крупная цельная каменная глыба",
          ],
          currectAnswer: 0,
        },
        {
          question:
            "Все знают, что кровь красного цвета. Но иногда, иронизируя над кем-либо, говорят, что у него кровь именно такого цвета.",
          answers: ["Синяя", "Голубая", "Чёрная", "Розовая"],
          currectAnswer: 1,
        },
        {
          question:
            "Образуйте, пожалуйста, 1-е лицо единственного числа настоящего времени от глагола гудеть (он гудит, я...)",
          answers: ["Гужу", "Гудю", "Нельзя образовать", "Гужую"],
          currectAnswer: 0,
        },
        {
          question: "В какой стихотворной строке использован перифраз?",
          answers: [
            `"Янтарь в устах его дымился"`,
            `"В больших рукавицах, а сам ноготок"`,
            `"Унылая пора, очей очарованье"`,
            `"Отговорила роща золотая"`,
          ],
          currectAnswer: 2,
        },
        {
          question: "Что такое эвфемизм?",
          answers: [
            `Комплимент`,
            `Бранное выражение`,
            `Перенос названия предмета на основании его сходства с другим предметом`,
            `Смягченный способ замены синонимичного слова (выражения)`,
          ],
          currectAnswer: 3,
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
