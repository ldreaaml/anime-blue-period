import React from "react";
import "./About.css";
import Blue from "../../img/blue.jpg";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="about" id="About">
      <div className="a-wrapper">
        <motion.div
          className="a-left"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <span>
            About <span>Blue</span> Period
          </span>
          <span>
            Second-year high school student Yatora Yaguchi is a delinquent with
            excellent grades, but is unmotivated to find his true calling in
            life. Yatora spends his days working hard to maintain his academic
            standing while hanging out with his equally unambitious friends.
            However, beneath his carefree demeanor, Yatora does not enjoy either
            activity and wishes he could find something more fulfilling.
            <br />
            <br />
            While mulling over his predicament, Yatora finds himself staring at
            a vibrant landscape of Shibuya. Unable to express how he feels about
            the unusually breathtaking sight, he picks up a paintbrush, hoping
            his thoughts will be conveyed on canvas. After receiving praise for
            his work, the joy he feels sends him on a journey to enter the
            extremely competitive Tokyo University of the Arts—a school that
            only accepts one in every two hundred applicants.
            <br />
            <br />
            Facing talented peers, a lack of understanding of the fine arts, and
            struggles to obtain his parents’ approval, Yatora is confronted by
            much adversity. In the hopes of securing one of the five prestigious
            spots in his program of choice, Yatora must show that his
            inexperience does not define him.
          </span>
        </motion.div>
        <div className="a-right">
          <div className="image">
            <img src={Blue} alt="" />
          </div>
          <motion.div
            className="square1"
            initial={{ x: "-10rem", y: "10rem" }}
            whileInView={{ x: 0, y: 0 }}
            transition={{ duration: 1.5 }}
          ></motion.div>
          <motion.div
            className="square2"
            initial={{ x: "10rem", y: "-10rem" }}
            whileInView={{ x: 0, y: 0 }}
            transition={{ duration: 1.5 }}
          ></motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
