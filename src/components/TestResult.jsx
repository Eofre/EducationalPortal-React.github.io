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
  const testId = test.id;
  const questions = test.questions;
  let keyId = 0;

  console.log(questions);
  let likes = location.state.likes;
  console.log(likes);
  function putLikes() {
    return likes++;
  }
  const scores = (currectAnswers / numberQuestions) * 100;
  let mark =
    scores >= 90
      ? `5 (отлично)`
      : scores >= 75
      ? `4 (хорошо)`
      : scores >= 60
      ? `3 (удовлетворительно)`
      : `2 (неудовлетворительно)`;
  return (
    <section className="test-result">
      <div className="container">
        <div className="test-result__inner">
          <h2 className="test-result__title">Поздравляю! Вы прошли тест!</h2>
          <img className="test-result__img" src={img} alt="" />
          <p className="test-result__currect-answer">
            У вас {currectAnswers} правильных ответа из {numberQuestions}
          </p>
          <p className="test-result__scores">Ваши баллы: {scores}</p>
          <p className="test-result__mark">Ваша оценка: {mark}</p>
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
            {questions.map((item) => (
              <div className="test-result__answer" key={item.question}>
                <h3 className="test-result__answer-question">
                  {item.question}
                </h3>
                {item.answers.map((answer, index) =>
                  index === item.currectAnswer ? (
                    <p
                      className="test-result__answer-value"
                      style={{
                        outline: "#d503ff 3px solid",
                        outlineOffset: "-3px",
                        boxShadow: "0px 0px 8px #d503ff",
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
