import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import "./QuoteCard.css";

const QuoteCard = ({ image, quote, character, isActive }) => {
  const [isHover, setHover] = useState(false);

  const props = useSpring({
    transform: isHover ? "scale(1.03)" : "scale(1)",
    boxShadow: isHover
      ? "0 20px 25px rgb(0 0 0 / 25%)"
      : "0 2px 10px rgb(0 0 0 / 8%)",
  });
  return (
    <animated.div
      className={`q-card ${isActive ? "card-active" : "card-inactive"}`}
      style={props}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className="card-image">
        <img src={image} alt="" />
      </div>
      <span>&#8220;</span>
      <span>{quote}</span>
      <hr />
      <span>{character}</span>
    </animated.div>
  );
};

export default QuoteCard;
