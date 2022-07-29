import React
 from "react";
import "./Intro.css";
import MC from "../../img/Banner_Yatora.jfif";
import Logo from "../../img/logo.png";

import { motion } from "framer-motion";

const Intro = () => {
  return (
    <div className="intro" id="Intro">
      <div className="banner">
        <img src={MC} className="banner-image" alt="" />
        <motion.div className="i-title">
          <motion.span
            initial={{ x: "100vw" }}
            animate={{ x: 0 }}
            transition={{ duration: 1.5 }}
          >
            BLUE
          </motion.span>
          <motion.span
            initial={{ x: "100vw" }}
            animate={{ x: 0 }}
            transition={{ duration: 1.5, delay: 0.3 }}
          >
            PERIOD
          </motion.span>
        </motion.div>
        <motion.img
          src={Logo}
          className="i-logo"
          alt=""
          initial={{ x: "100vw" }}
          animate={{ x: 0 }}
          transition={{ duration: 1.5, delay: 0.6 }}
        />

        <div className="i-author">
          <motion.span
            initial={{ y: "100vw" }}
            animate={{ y: 0 }}
            transition={{ duration: 1.5, delay: 1 }}
          >
            written by
          </motion.span>
          <motion.span
            initial={{ y: "100vw" }}
            animate={{ y: 0 }}
            transition={{ duration: 1.5, delay: 1.3 }}
          >
            TSUBASA YAMAGUCHI
          </motion.span>
        </div>
      </div>
      <div className="blue-line"></div>
    </div>
  );
};

export default Intro;
