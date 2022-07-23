import React from "react";
import "./CharacterCard.css";
const CharacterCard = ({ image, firstName, lastName, color }) => {
  return (
    <div className="card">
      <div className="c-background" style={{ background: `${color}` }}>
        <div className="c-image">
          <img src={image} alt="" />
        </div>
      </div>
      <div className="c-name">
        <span>{firstName}</span>
        <br></br>
        <span>{lastName}</span>
      </div>
    </div>
  );
};

export default CharacterCard;
