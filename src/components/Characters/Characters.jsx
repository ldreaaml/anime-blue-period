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
    <div className="characters" id="Characters">
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
            description={
              "Second year high schooler. Fell in love with art after seeing Mori-senpai's painting. Yatora discovers his passion for painting and dedicates his remaining school years to it, aiming to pass the Tokyo University of the Arts(Geidai) entrance exam. "
            }
          />
          <CharacterCard
            image={Ryuji}
            firstName={"RYUJI"}
            lastName={"AYUKAWA"}
            color={"#F3BED7"}
            description={
              "Goes by 'Yuka'. Yatora's classmate and fellow art club member who invited him to the art club. Yuka specializes in japanese art. Yatora thinks that Yuka is weird at first, but the two begin to bond after Yatora joins the art club."
            }
          />
          <CharacterCard
            image={Yotosuke}
            firstName={"YOTOSUKE"}
            lastName={"TAKAHASHI"}
            color={"#B8DFBF"}
            description={
              "Goes to the same cram school as Yatora. Second year high schooler. Provokes Yatora with his genius art skills and antisocial personality. Takahashi and Yatora see each other as friendly rivals. "
            }
          />
          <CharacterCard
            image={Haruka}
            firstName={"HARUKA"}
            lastName={"HASHIDA"}
            color={"#DAB4F1"}
            description={
              "Yatora's classmate. Goes to same cram school as Yatora. Yatora learns a lot of things from him. especially how to observe things. Yatora and Haruka can be seen as close friends."
            }
          />
          <CharacterCard
            image={Maki}
            firstName={"MAKI"}
            lastName={"KUWANA"}
            color={"#E89093"}
            description={
              "Goes to same cram school as Yatora. Her parents are Geidai Alumni, and her older sister is a current student at Geidai as well as celebrity there. Maki deals with a lot of issues regarding her inferiority complex in comparison to her older sister."
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Characters;
