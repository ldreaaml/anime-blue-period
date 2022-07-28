import React from "react";
import "./Quote.css";
import QuoteCarousel from "./Carousel";
import { motion } from "framer-motion";
const Quote = () => {
  return (
    <div className="quote" id="Quotes">
      <div className="title">
        <motion.span
          initial={{ y: 0 }}
          animate={{ y: [-15, -30, -15] }}
          exit={{ y: 0 }}
          transition={{ repeat: Infinity, duration: 2, repeatDelay: 3 }}
        >
          &#8220;
        </motion.span>
        <span>Favourite Quotes</span>
        <motion.span
          animate={{ y: [-10, -20, -10] }}
          exit={{ y: 0 }}
          transition={{
            delay: 0.5,
            repeat: Infinity,
            duration: 2,
            repeatDelay: 3,
          }}
        >
          &#8221;
        </motion.span>
      </div>
      <div className="q-wrapper">
        <div className="quote-cards">
          <QuoteCarousel />
        </div>
        <motion.div
          className="q-square1"
          initial={{ x: "10rem", y: "10rem" }}
          whileInView={{ x: 0, y: 0 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true }}
        />
        <motion.div
          className="q-square2"
          initial={{ x: "-10rem", y: "-10rem" }}
          whileInView={{ x: 0, y: 0 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true }}
        />
        <motion.div
          className="circle1"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true }}
        />
        <motion.div
          className="circle2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true }}
        />
      </div>
    </div>
  );
};

export default Quote;
