import React from "react";
import "./Footer.css";
import { IconContext } from "react-icons";
import { FaGithub, FaFigma } from "react-icons/fa";
import { AiOutlineHome } from "react-icons/ai";
import { getLikesNumber, incrementLikes } from "../../firebase";
import { useState } from "react";
import { initializeApp, ServerValue } from "firebase/app";
import {
  getDatabase,
  ref,
  child,
  onValue,
  push,
  set,
  update,
  increment,
} from "firebase/database";
import { useEffect } from "react";

const Footer = () => {
  const [likesCount, setLikeCounts] = useState(0);
  const getLikesCount = () => {
    console.log("get");
    const db = getDatabase();
    const LikesCountRef = ref(db, "blue-period/page_likes");
    onValue(LikesCountRef, (snapshot) => {
      setLikeCounts(snapshot.val());
    });
    console.log(likesCount);
  };

  useEffect(() => {
    getLikesCount();
  }, []);

  const update = () => {
    incrementLikes();
  };
  return (
    <div className="footer">
      <div className="page-stats">
        <span>This page now has total of {likesCount} Likes!</span>
      </div>
      <div className="last-line">
        <span>Credits</span>
        <div className="f-icons">
          <IconContext.Provider value={{ className: "f-icon" }}>
            <AiOutlineHome onClick={getLikesCount} />
            <AiOutlineHome onClick={update} />
            <a
              href="https://github.com/ldreaaml/anime-blue-period"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.figma.com/file/1E0JrQiUihnAWFp1ZUPWPH/Blue-Period?node-id=0%3A1"
              target="_blank"
              rel="noreferrer"
            >
              <FaFigma />
            </a>
          </IconContext.Provider>
        </div>
        <span>Design + Code by Dream</span>
      </div>
      <div className="f-background"></div>
    </div>
  );
};

export default Footer;
