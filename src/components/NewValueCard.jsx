import React from "react";

function NewValueCard({ card }) {
  return (
    <div className="new-value-card">
      <img src={card.img} alt="" className="new-value-card__img" />
      <div className="new-value-card__body">
        <h3 className="new-value-card__title">{card.title}</h3>
      </div>
    </div>
  );
}

export default NewValueCard;
