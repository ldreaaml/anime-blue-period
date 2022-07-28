import React, { useEffect } from "react";
import "./Intro.css";
import Banner from "../../img/TempBanner.png";
import MC from "../../img/Banner_Yatora.jfif";
import Logo from "../../img/logo.png";

import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Intro = () => {
  const ctrls = useAnimation();

  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      ctrls.start("visible");
    }
    if (!inView) {
      ctrls.start("hidden");
    }
  }, [ctrls, inView]);

  const characterAnimation = {
    hidden: {
      opacity: 0,
      y: `0.25em`,
    },
    visible: {
      opacity: 1,
      y: `0em`,
      transition: {
        duration: 1,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    },
  };

  return (
    <div className="intro" id="Intro">
      <div className="banner">
        <div className="yatora">
          <img src={MC} className="mc" alt="" />
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
            <motion.img
              src={Logo}
              className="i-logo"
              alt=""
              initial={{ x: "100vw" }}
              animate={{ x: 0 }}
              transition={{ duration: 1.5, delay: 0.6 }}
            />
          </motion.div>
          {/* <div className="i-title">
            <span className="title">BLUE</span>
            <span className="title">PERIOD</span>
            <img src={Logo} className="i-logo" alt="" />
          </div> */}

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
      </div>
      <div className="blue-line"></div>
    </div>
  );
};

export default Intro;
