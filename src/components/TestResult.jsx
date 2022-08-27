import React from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import img from "./img/result.png";
import like from "./img/like.svg";

function TestResult() {
  const params = useParams();
  const testId = params.id;
  const router = useNavigate();
  const location = useLocation();
  console.log(location);
  const currectAnswers = location.state.currectAnswers;
  const numberQuestions = location.state.numberQuestions;
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
      ? `3 (удовлетворитель)`
      : `2 (неудовлетворитель)`;
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
            onClick={() => router(-3)}
            className="test-result__btn test-result__btn-exit"
          >
            Выход
          </button>
          {/* <div className="test-result__like">
            <img
              onClick={() => console.log(putLikes())}
              src={like}
              alt=""
              className="test-result__like-img"
            />
            <p className="test-result__like-value">{likes}</p>
          </div> */}
        </div>
      </div>
    </section>
  );
}

export default TestResult;
