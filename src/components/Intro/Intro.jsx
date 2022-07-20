import React from "react";
import "./Intro.css";
import Banner from "../../img/TempBanner.png";

const Intro = () => {
  return (
    <div className="intro">
      <div className="banner">
        <img src={Banner} alt="" />
      </div>
    </div>
  );
};

export default Intro;
