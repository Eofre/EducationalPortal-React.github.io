import React, { useState } from "react";
import "./style.css";
import like from "./img/like.svg";
import { useNavigate } from "react-router-dom";

function TestCard({ test }) {
  const router = useNavigate();
  let id = test.id;
  let title = test.title;
  let description = test.description;
  let img = test.img;
  let likes = test.likes;
  return (
    <div
      onClick={() => router(`/test/home${id}`, { state: test })}
      className="test"
    >
      <img src={img} alt="" className="test__img" />
      <div className="test__body">
        <h3 className="test__title">{title}</h3>
        <p className="test__description">{description}</p>
      </div>

      <div className="test__reactions">
        <img src={like} alt="" className="test__reactions-like" />
        {likes}
      </div>
    </div>
  );
}

export default TestCard;
