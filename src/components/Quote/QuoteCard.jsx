import React from "react";
import "./QuoteCard.css";

const QuoteCard = ({ image, quote, character, isActive }) => {
  return (
    <div className={`q-card ${isActive ? "card-active" : "card-inactive"}`}>
      <img src={image} alt="" />
      <span>&#8220;</span>
      <span>{quote}</span>
      <hr />
      <span>{character}</span>
    </div>
  );
};

export default QuoteCard;
