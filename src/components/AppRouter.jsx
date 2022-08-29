import React, { useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { useSpring, animated, useTransition } from "react-spring";
import About from "../pages/About";
import Home from "../pages/Home";
import NewValue from "../pages/NewValue";
import Tests from "../pages/Tests";
import Article from "./Article";
import TestGame from "./TestGame";
import TestHome from "./TestHome";
import TestResult from "./TestResult";
import test1 from "../pages/img/test3.jpg";
import test2 from "../pages/img/test2.jpg";
import test3 from "../pages/img/test1.jpg";

function AppRouter() {
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
    {
      id: 1,
      title: "Тест на знания произведений Пушкина А.С.",
      description:
        "Тест покажет, насколько хорошо вы знаете произведения Пушкина А.С.",
      img: test2,
      likes: 10,
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
    {
      id: 2,
      title: "Тест на логику для детей",
      description: "Тест покажет уровень логического развития вашего ребёнка",
      img: test3,
      likes: 64,
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
    {
      id: 3,
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
  const [selectedSort, setSelectedSort] = useState("");
  const sortTests = (sort) => {
    setSelectedSort(sort);
    console.log(sort);
    setTests([...tests].sort((a, b) => a[sort].localeCompare(b[sort])));
  };

  return (
    <Routes>
      <Route exact path="/" element={<Home tests={tests} />} />
      <Route exact path="/test/home:id" element={<TestHome />} />
      <Route exact path="/test/game:id" element={<TestGame />} />
      <Route exact path="/test/game/result:id" element={<TestResult />} />
      <Route exact path="/article:id" element={<Article />} />
      <Route exact path="/newvalue" element={<NewValue />} />
      <Route
        exact
        path="/tests"
        element={
          <Tests
            tests={tests}
            sortTests={sortTests}
            selectedSort={selectedSort}
          />
        }
      />
      <Route exact path="/about" element={<About />} />
    </Routes>
  );

  // <animated.div style={props}>
  //   <Routes>
  // <Route exact path="/" element={<Home />} />
  // <Route exact path="/test/home:id" element={<TestHome />} />
  // <Route exact path="/test/game:id" element={<TestGame />} />
  // <Route exact path="/test/game/result:id" element={<TestResult />} />
  //   </Routes>
  // </animated.div>

  // <Routes>
  //   <Route exact path="/" element={<Home />} />
  //   <Route exact path="/test/home:id" element={<TestHome />} />
  //   <Route exact path="/test/game:id" element={<TestGame />} />
  //   <Route exact path="/test/game/result:id" element={<TestResult />} />
  // </Routes>
}

export default AppRouter;
