import React from "react";
import { useState } from "react";
import { getLikesNumber, incrementLikes } from "../../firebase";
import { FaHeart } from "react-icons/fa";
import { IconContext } from "react-icons";

const LikeButton = () => {
  return (
    <div className="like-button" onClick={incrementLikes}>
      <IconContext.Provider value={{ className: "f-icon" }}>
        <FaHeart />
      </IconContext.Provider>
    </div>
  );
};

export default LikeButton;
