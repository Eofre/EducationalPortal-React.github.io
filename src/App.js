import { useState } from "react";
import "./App.css";
import Header from "./components/header/Header";
import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import TestHome from "./components/TestHome";

function App() {
  const [step, setStep] = useState(0);
  const [questions, setQuestions] = useState([
    {
      question: "Как меня завут?",
      answers: ["Егор", "Анастасия", "Армен"],
      currectAnswer: 0,
    },
    {
      question: "Сколько мне лет?",
      answers: ["12", "19", "20"],
      currectAnswer: 1,
    },
  ]);
  const question = questions[step];
  const [currectAnswers, setCurrectAnswers] = useState(0);
  function chooseAnAnswer(index) {
    if (question.currectAnswer == index) {
      setStep(step + 1);
      console.log("верно");
      setCurrectAnswers(currectAnswers + 1);
    } else {
      setStep(step + 1);
      console.log("не верно");
    }
  }
  return (
    <HashRouter>
      <Header />
      <AppRouter />
    </HashRouter>
  );
}

export default App;
