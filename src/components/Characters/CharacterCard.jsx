import React, { useState } from "react";
import "./CharacterCard.css";
import { motion } from "framer-motion";

const CharacterCard = ({ image, firstName, lastName, color, description }) => {
  const showDescription = () => {
    // console.log("test");
  };

  const [isHovered, setHovered] = useState(false);

  return (
    <div
      className="card"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
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

      <motion.div
        className="floating-card"
        initial={false}
        animate={{
          left: isHovered ? "80%" : 0,
          visibility: isHovered ? "visible" : "hidden",
        }}
        transition={{ duration: 0.5 }}
      >
        <div className="f-name" style={{ color: color }}>
          <span>{firstName}</span>
          <span>{lastName}</span>
        </div>
        <div className="description">
          <span>{description}</span>
        </div>
      </motion.div>
    </div>
  );
};

export default CharacterCard;
