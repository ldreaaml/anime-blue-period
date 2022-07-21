import React from "react";
import "./Characters.css";
import "../Card/Card.css";
import Yatora from "../../img/Yatora.webp";
import Haruka from "../../img/Haruka.webp";
import Maki from "../../img/Maki.webp";
import Ryuji from "../../img/Ryuji.webp";
import Yotosuke from "../../img/Yotosuke.webp";
import Card from "../Card/Card";
const Characters = () => {
  return (
    <div className="characters">
      <div className="c-wrapper">
        <div className="c-title">
          <span>CHARACTER</span>
          <span> INTRODUCTIONS</span>
        </div>
        <div className="card-container">
          <Card
            image={Yatora}
            firstName={"YATORA"}
            lastName={"YAGUCHI"}
            color={"#81d2e3"}
          />
          <Card
            image={Ryuji}
            firstName={"RYUJI"}
            lastName={"AYUKAWA"}
            color={"#F3BED7"}
          />
          <Card
            image={Yotosuke}
            firstName={"YOTOSUKE"}
            lastName={"TAKAHASHI"}
            color={"#B8DFBF"}
          />
          <Card
            image={Haruka}
            firstName={"HARUKA"}
            lastName={"HASHIDA"}
            color={"#DAB4F1"}
          />
          <Card
            image={Maki}
            firstName={"MAKI"}
            lastName={"KUWANA"}
            color={"#E89093"}
          />
        </div>
      </div>
    </div>
  );
};

export default Characters;
