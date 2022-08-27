import { useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import "./style.css";
import TestResult from "./TestResult";

function TestGame() {
  // const params = useParams();
  // const testId = params.id;
  let location = useLocation();
  let test = location.state;
  let likes = test.likes;
  let testId = test.id;
  const [step, setStep] = useState(0);
  const [progress, setProgress] = useState(1);

  const [currectAnswers, setCurrectAnswers] = useState(0);
  const question = test.questions[step];
  function chooseAnAnswer(index) {
    if (question.currectAnswer == index) {
      setStep(step + 1);
      setProgress(progress + 1);
      console.log("верно");
      setCurrectAnswers(currectAnswers + 1);
    } else {
      setStep(step + 1);
      setProgress(progress + 1);
      console.log("не верно");
    }
  }
  const numberQuestions = test.questions.length;
  const router = useNavigate();

  return (
    <section className="test-game">
      <div className="container">
        {step != test.questions.length ? (
          <div className="test-game__inner">
            <div className="test-game__progress">
              <div
                className="test-game__progress-bar"
                style={{
                  width: `${(progress / test.questions.length) * 100}%`,
                }}
              ></div>
            </div>
            <h3 className="test-game__question">{question.question}</h3>
            <ul className="test-game__answer-list">
              {question.answers.map((item, index) => (
                <li
                  key={item}
                  onClick={() => chooseAnAnswer(index)}
                  className="test-game__answer-item"
                >
                  {item}
                </li>
              ))}
            </ul>
            <p className="test-game__progress-question">{`${
              step + 1
            }/${numberQuestions}`}</p>
          </div>
        ) : (
          router(`/test/game/result${testId}`, {
            state: {
              currectAnswers,
              numberQuestions,
              test,
            },
          })
        )}
      </div>
    </section>
  );
}

export default TestGame;
