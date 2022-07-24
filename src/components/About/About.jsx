import React from "react";
import "./About.css";
import Blue from "../../img/blue.jpg";
const About = () => {
  return (
    <div className="about" id="About">
      <div className="a-wrapper">
        <div className="a-left">
          <span>
            About <span>Blue</span> Period
          </span>
          <span>
            Blue Period (Japanese: ブルーピリオド, Hepburn: Burū Piriodo) is a
            Japanese manga series written and illustrated by Tsubasa Yamaguchi.
            The series has been serialized in Kodansha's seinen manga magazine
            Monthly Afternoon since June 2017 and has been collected in twelve
            tankōbon volumes as of May 2022. The series is licensed in English
            by Kodansha USA. An anime television series adaptation by Seven Arcs
            aired from October to December 2021.
            <br />
            <br />
            Blue Period (Japanese: ブルーピリオド, Hepburn: Burū Piriodo) is a
            Japanese manga series written and illustrated by Tsubasa Yamaguchi.
            The series has been serialized in Kodansha's seinen manga magazine
            Monthly Afternoon since June 2017 and has been collected in twelve
            tankōbon volumes as of May 2022. The series is licensed in English
            by Kodansha USA. An anime television series adaptation by Seven Arcs
            aired from October to December 2021.
          </span>
          {/* <span>Test</span> */}
        </div>
        <div className="a-right">
          <div className="image">
            <img src={Blue} alt="" />
          </div>
          <div className="square1"></div>
          <div className="square2"></div>
        </div>
      </div>
    </div>
  );
};

export default About;
