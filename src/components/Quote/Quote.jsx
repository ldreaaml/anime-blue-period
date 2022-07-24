import React from "react";
import "./Quote.css";
import QuoteCarousel from "./Carousel";
const Quote = () => {
  return (
    <div className="quote" id="Quotes">
      <div className="title">
        <span>&#8220;</span>
        <span>Favourite Quotes</span>
        <span>&#8221;</span>
      </div>
      <div className="q-wrapper">
        <div className="quote-cards">
          <QuoteCarousel />
        </div>
        <div className="q-square1" />
        <div className="q-square2" />
        <div className="circle1"></div>
        <div className="circle2"></div>
      </div>
    </div>
  );
};

export default Quote;
