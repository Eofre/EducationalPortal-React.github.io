import React, { useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import img from "./img/result.png";
import like from "./img/like.svg";

function TestResult() {
  const [activeAnswers, setActiveAnswers] = useState(false);
  const router = useNavigate();
  const location = useLocation();
  const test = location.state.test;
  const currectAnswers = location.state.currectAnswers;
  const numberQuestions = location.state.numberQuestions;
  const answersId = location.state.answersId;
  const testId = test.id;
  const questions = test.questions;
  let keyId = 0;

  console.log(questions);
  let likes = location.state.likes;
  console.log(likes);

  const scores = Math.floor((currectAnswers / numberQuestions) * 100);
  let mark =
    scores >= 90
      ? `5 (отлично)`
      : scores >= 75
      ? `4 (хорошо)`
      : scores >= 60
      ? `3 (удовлетворительно)`
      : `2 (неудовлетворительно)`;
  console.log(answersId);
  return (
    <section className="test-result">
      <div className="container">
        <div className="test-result__inner">
          <h2 className="test-result__title">Поздравляю! Вы прошли тест!</h2>
          <img className="test-result__img" src={img} alt="" />
          <p className="test-result__currect-answer">
            У вас {currectAnswers} правильных ответа из {numberQuestions}
          </p>
          <p className="test-result__scores">Ваши баллы: {scores} из 100</p>
          <p className="test-result__mark">Ваша оценка: {mark}</p>
          {/* <div className="test-result__reaction">
            <img
              onClick={() => putLikes(testId)}
              src={like}
              className="test-result__like"
            ></img>
            {test.likes}
          </div> */}
          <button onClick={() => router(-2)} className="test-result__btn">
            Начать заново
          </button>
          <button
            onClick={() => setActiveAnswers(!activeAnswers)}
            className="test-result__btn test-result__btn-show"
          >
            {activeAnswers ? "Скрыть ответы" : "Показать ответы"}
          </button>
          <button
            onClick={() => router(`/`)}
            className="test-result__btn test-result__btn-exit"
          >
            Выход
          </button>
        </div>
        {activeAnswers ? (
          <div className="test-result__answers">
            {questions.map((item, itemId) => (
              <div className="test-result__answer" key={item.question}>
                <h3 className="test-result__answer-question">
                  {item.question}
                </h3>
                {answersId[itemId] === item.currectAnswer ? (
                  <p
                    style={{
                      color: "#3cff00",
                      textShadow: "0px 0px 8px #3cff00",
                      padding: "15px 0px",
                    }}
                  >
                    Верно
                  </p>
                ) : (
                  <p
                    style={{
                      color: "#ff0f0f",
                      textShadow: "0px 0px 8px #ff0f0f",
                      padding: "15px 0px",
                    }}
                  >
                    Не верно
                  </p>
                )}
                {item.answers.map((answer, index) =>
                  index === item.currectAnswer ? (
                    <p
                      className="test-result__answer-value"
                      style={{
                        outline: "#2fff0f 3px solid",
                        outlineOffset: "-3px",
                        boxShadow: "0px 0px 8px #2fff0f",
                      }}
                      key={answer}
                    >
                      {answer}
                    </p>
                  ) : answersId[itemId] != item.currectAnswer &&
                    answersId[itemId] === index ? (
                    <p
                      className="test-result__answer-value"
                      style={{
                        outline: "#ff0f0f 3px solid",
                        outlineOffset: "-3px",
                        boxShadow: "0px 0px 8px #ff0f0f",
                      }}
                      key={answer}
                    >
                      {answer}
                    </p>
                  ) : (
                    <p className="test-result__answer-value" key={answer}>
                      {answer}
                    </p>
                  )
                )}
              </div>
            ))}
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </section>
  );
}

export default TestResult;
