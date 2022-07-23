import React from "react";
import "./Quote.css";
import Pic from "../../img/blue.jpg";

const Quote = () => {
  return (
    <div className="quote">
      <div className="title">
        <span>&#8220;</span>
        <span>Favourite Quotes</span>
        <span>&#8221;</span>
      </div>
      <div className="q-wrapper">
        <div className="quote-cards">
          <div className="q-card card-active">
            <img src={Pic} alt="" />
            <span>&#8220;</span>
            <span>
              'Do what you enjoy as a hobby.' I think that's too much of an
              adult perspective.
            </span>
            <hr size="2" width="80%" color="white" />
            <span>Masako Saeki</span>
          </div>
        </div>

        <div className="q-square1" />
        <div className="q-square2" />
      </div>
    </div>
  );
};

export default Quote;
