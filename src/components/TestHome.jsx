import React, { useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import test1 from "../pages/img/test1.jpg";

function TestHome(props) {
  const router = useNavigate();
  // const params = useParams();
  // const testId = params.id;
  const location = useLocation();

  const test = location.state;

  console.log(test);

  return (
    <section className="test-home">
      <div className="conteiner">
        <div className="test-home__inner">
          <img src={test.img} className="test-home__img"></img>
          <h2 className="test-home__title">{test.title}</h2>
          <p className="test-home__description">{test.description}</p>
          <p className="test-home__numbers-questions-text">
            Количество вопросов: {test.questions.length}
          </p>
          {/* <p className="test-home__numbers-questions">2</p> */}
          <button
            onClick={() => router(`/test/game${test.id}`, { state: test })}
            className="test-home__btn"
          >
            Начать
          </button>
        </div>
      </div>
    </section>
  );
}

export default TestHome;
