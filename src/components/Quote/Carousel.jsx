import React from "react";
import { v4 as uuidv4 } from "uuid";
import { config } from "react-spring";
import Haruka from "../../img/haruka_manga.webp";
import Mori from "../../img/mori_manga.webp";
import Ooba from "../../img/ooba_manga.webp";
import Ryuji from "../../img/ryuji_manga.webp";
import Yatora from "../../img/yatora_manga.webp";
import Masako from "../../img/masako_manga.webp";
import Maki from "../../img/maki_manga.jpg";
import QuoteCard from "./QuoteCard.jsx";
import Carousel from "react-spring-3d-carousel";
import { useState } from "react";

const QuoteCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    {
      key: uuidv4(),
      content: (
        <QuoteCard
          image={Yatora}
          quote={
            "I can't tell you to not worry about what other thinks, but the truth is you should be free to do as you like. Because when it comes down to it, your life is your own."
          }
          character={"Yatora Yaguchi"}
          isActive={currentIndex === 0}
        />
      ),
    },
    {
      key: uuidv4(),
      content: (
        <QuoteCard
          image={Masako}
          quote={
            "Do what you enjoy as a hobby.' I think that's too much of an adult perspective."
          }
          character={"Masako Saeki"}
          isActive={currentIndex === 1}
        />
      ),
    },
    {
      key: uuidv4(),
      content: (
        <QuoteCard
          image={Ooba}
          quote={
            "What you consider normal often turns out to be what makes you, you."
          }
          character={"Ooba Mayu"}
          isActive={currentIndex === 2}
        />
      ),
    },

    {
      key: uuidv4(),
      content: (
        <QuoteCard
          image={Mori}
          quote={
            "If you call being able to work hard 'talent', then it feels like you're getting told that you haven't done anything."
          }
          character={"Maru Mori"}
          isActive={currentIndex === 3}
        />
      ),
    },
    {
      key: uuidv4(),
      content: (
        <QuoteCard
          image={Yatora}
          quote={
            "I'm not special. I'll never become a genius. I can only get better through practice. I guess... I'll just have to work until you can't tell the difference between me and a genius."
          }
          character={"Yatora Yaguchi"}
          isActive={currentIndex === 4}
        />
      ),
    },
    {
      key: uuidv4(),
      content: (
        <QuoteCard
          image={Masako}
          quote={
            "when hard workers get to do the thing they love, they're unstoppable."
          }
          character={"Masako Saeki"}
          isActive={currentIndex === 5}
        />
      ),
    },
    {
      key: uuidv4(),
      content: (
        <QuoteCard
          image={Ryuji}
          quote={
            "If I have to be whatever society’s definition of “acceptable” is… I would rather die."
          }
          character={"Ryuji Ayukawa"}
          isActive={currentIndex === 6}
        />
      ),
    },
    {
      key: uuidv4(),
      content: (
        <QuoteCard
          image={Ooba}
          quote={
            "Your goal shouldn't be to create a work that gets first place, it should be to create your very own “masterpiece”."
          }
          character={"Ooba Mayu"}
          isActive={currentIndex === 7}
        />
      ),
    },

    {
      key: uuidv4(),
      content: (
        <QuoteCard
          image={Yatora}
          quote={"Maybe I’m not talented, but I’m risking everything for now."}
          character={"Yatora Yaguchi"}
          isActive={currentIndex === 8}
        />
      ),
    },

    {
      key: uuidv4(),
      content: (
        <QuoteCard
          image={Masako}
          quote={
            "Try putting aside the thought of 'failure'. If you can do that... All the things you have learned since then, along with this piece will become your strength."
          }
          character={"Masako Saeki"}
          isActive={currentIndex === 9}
        />
      ),
    },
    {
      key: uuidv4(),
      content: (
        <QuoteCard
          image={Maki}
          quote={
            "It shattered my delusion that hard work and perseverance will always be rewarded."
          }
          character={"Maki Kuwana"}
          isActive={currentIndex === 10}
        />
      ),
    },

    {
      key: uuidv4(),
      content: (
        <QuoteCard
          image={Ooba}
          quote={"A work of art is finished the moment you give up on it."}
          character={"Ooba Mayu"}
          isActive={currentIndex === 11}
        />
      ),
    },
    {
      key: uuidv4(),
      content: (
        <QuoteCard
          image={Ryuji}
          quote={"If you feel frustrated, it means you can still grow."}
          character={"Ryuji Ayukawa"}
          isActive={currentIndex === 12}
        />
      ),
    },
    {
      key: uuidv4(),
      content: (
        <QuoteCard
          image={Yatora}
          quote={
            "Just because I'm doing what I love, doesn't mean It's always going to be fun."
          }
          character={"Yatora Yaguchi"}
          isActive={currentIndex === 13}
        />
      ),
    },

    {
      key: uuidv4(),
      content: (
        <QuoteCard
          image={Masako}
          quote={"There's no such a thing as failrue in art."}
          character={"Masako Saeki"}
          isActive={currentIndex === 14}
        />
      ),
    },
    {
      key: uuidv4(),
      content: (
        <QuoteCard
          image={Haruka}
          quote={
            "It’s natural to have likes and dislikes… Expensive dishes doesn’t always taste the better."
          }
          character={"Haruka Hashida"}
          isActive={currentIndex === 15}
        />
      ),
    },
    {
      key: uuidv4(),
      content: (
        <QuoteCard
          image={Ooba}
          quote={
            "The only way to expand your world is to come in contact with things you aren’t familiar with. Also sometimes the best way to identify your strengths is to have others find them for you."
          }
          character={"Ooba Mayu"}
          isActive={currentIndex === 16}
        />
      ),
    },
  ].map((slide, index) => {
    return {
      ...slide,
      onClick: () => {
        setCurrentIndex(index);
        setGoToSlide(index);
      },
    };
  });

  const [offsetRadius] = useState(2);
  const [showArrows] = useState(false);
  const [goToSlide, setGoToSlide] = useState(null);

  return (
    <div style={{ width: "35rem" }}>
      <Carousel
        slides={slides}
        goToSlide={goToSlide}
        offsetRadius={offsetRadius}
        showNavigation={showArrows}
        animationConfig={config.gentle}
      />
    </div>
  );
};

export default QuoteCarousel;
