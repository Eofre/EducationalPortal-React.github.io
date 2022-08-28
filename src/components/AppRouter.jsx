import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { useSpring, animated, useTransition } from "react-spring";
import Home from "../pages/Home";
import NewValue from "../pages/NewValue";
import Article from "./Article";
import TestGame from "./TestGame";
import TestHome from "./TestHome";
import TestResult from "./TestResult";

function AppRouter() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/test/home:id" element={<TestHome />} />
      <Route exact path="/test/game:id" element={<TestGame />} />
      <Route exact path="/test/game/result:id" element={<TestResult />} />
      <Route exact path="/article:id" element={<Article />} />
      <Route exact path="/newvalue" element={<NewValue />} />
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
