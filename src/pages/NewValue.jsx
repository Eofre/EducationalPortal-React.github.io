import React, { useState } from "react";
import NewValueCard from "../components/NewValueCard";
import test from "./img/test.png";
import article from "./img/article.png";
import title from "./img/new-value.png";

function NewValue() {
  const [cards, setCards] = useState([
    {
      id: 0,
      title: "Тест",
      img: test,
    },
    {
      id: 1,
      title: "Статья",
      img: article,
    },
  ]);
  return (
    <section className="new-value">
      <div className="conteiner">
        <div className="new-value__inner">
          <div className="new-value__title">
            <h2 className="new-value__title-text">Что создадим?</h2>
            <img className="new-value__title-img" src={title} alt="" />
          </div>
          {cards.map((card) => (
            <NewValueCard card={card} key={card.id} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default NewValue;
