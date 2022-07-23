import React from "react";
import Yatora from "../../img/Yatora.webp";
import Haruka from "../../img/Haruka.webp";
import Maki from "../../img/Maki.webp";
import Ryuji from "../../img/Ryuji.webp";
import Yotosuke from "../../img/Yotosuke.webp";
import CharacterCard from "./CharacterCard";
import "./Characters.css";

const Characters = () => {
  return (
    <div className="characters">
      <div className="c-wrapper">
        <div className="c-title">
          <span>CHARACTER</span>
          <span> INTRODUCTIONS</span>
        </div>
        <div className="card-container">
          <CharacterCard
            image={Yatora}
            firstName={"YATORA"}
            lastName={"YAGUCHI"}
            color={"#81d2e3"}
          />
          <CharacterCard
            image={Ryuji}
            firstName={"RYUJI"}
            lastName={"AYUKAWA"}
            color={"#F3BED7"}
          />
          <CharacterCard
            image={Yotosuke}
            firstName={"YOTOSUKE"}
            lastName={"TAKAHASHI"}
            color={"#B8DFBF"}
          />
          <CharacterCard
            image={Haruka}
            firstName={"HARUKA"}
            lastName={"HASHIDA"}
            color={"#DAB4F1"}
          />
          <CharacterCard
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
