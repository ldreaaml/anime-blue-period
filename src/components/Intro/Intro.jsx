import React from "react";
import "./Intro.css";
import Banner from "../../img/TempBanner.png";
import MC from "../../img/Banner_Yatora.jfif";
import Logo from "../../img/logo.png";

const Intro = () => {
  return (
    <div className="intro" id="Intro">
      <div className="banner">
        <div className="yatora">
          <img src={MC} className="mc" alt="" />
          <div className="i-title">
            <span className="title">BLUE</span>
            <span className="title">PERIOD</span>
            <img src={Logo} className="i-logo" alt="" />
          </div>

          <div className="i-author">
            <span>written by</span>
            <span>TSUBASA YAMAGUCHI</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
