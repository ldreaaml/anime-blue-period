import React from "react";
import Pic from "../../img/blue.jpg";
import QuoteCard from "./QuoteCard.jsx";
import "./Quote.css";
import bgcircle from "../../img/Background_circle.jsx";

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
          <QuoteCard
            image={Pic}
            quote={
              "Do what you enjoy as a hobby.' I think that's too much of an adult perspective."
            }
            character={"Masako Saeki"}
            isActive={true}
          />
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
