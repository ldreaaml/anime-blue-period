import React from "react";
import "./About.css";
import Blue from "../../img/blue.jpg";
import { motion, AnimatePresence } from "framer-motion";

const About = () => {
  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };
  return (
    <div className="about" id="About">
      <div className="a-wrapper">
        <motion.div className="a-left">
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
        </motion.div>
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
