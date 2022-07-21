import React from "react";
import "./Card.css";
const Card = ({ image, firstName, lastName, color }) => {
  return (
    <div className="card">
      <div className="c-background" style={{ background: `${color}` }}></div>
      <img src={image} alt="" />
      <div className="c-name">
        <span>{firstName}</span>
        <br></br>
        <span>{lastName}</span>
      </div>
    </div>
  );
};

export default Card;
