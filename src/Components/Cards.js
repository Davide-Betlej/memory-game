import React, { useState } from "react";

const Cards = (props) => {
  const { countries, validate } = props;
  return (
    <div className="gameContainer">
      {countries.slice(0, 12).map((card) => {
        return (
          <div
            id={card.name}
            key={card.name}
            className="country-flag-container"
            onClick={validate}
          >
            <img src={card.image} alt={card.name} id={card.name} />
            <h2 id={card.name}>{card.name}</h2>
          </div>
        );
      })}
    </div>
  );
};
export default Cards;
