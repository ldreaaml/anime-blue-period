import React from "react";
import "./Footer.css";
import { IconContext } from "react-icons";
import { FaGithub, FaFigma, FaHeart } from "react-icons/fa";
import { AiOutlineHome } from "react-icons/ai";
import { incrementLikes, incrementViews } from "../../firebase";
import { useState, useEffect } from "react";
import { getDatabase, ref, onValue } from "firebase/database";

const Footer = () => {
  const [likeCount, setLikeCount] = useState(0);
  const [viewCount, setViewCount] = useState(0);
  const [likeStatus, setLikeStatus] = useState(false);

  const getStatistic = () => {
    const db = getDatabase();
    const LikesCountRef = ref(db, "blue-period/page_likes");
    onValue(LikesCountRef, (snapshot) => {
      setLikeCount(snapshot.val());
    });
    const ViewsCountRef = ref(db, "blue-period/page_views");
    onValue(ViewsCountRef, (snapshot) => {
      setViewCount(snapshot.val());
    });
  };

  useEffect(() => {
    incrementViews(); //increase view on load
    getStatistic();
  }, []);

  const clickLike = () => {
    incrementLikes();
    setLikeStatus(!likeStatus);
  };

  return (
    <div className="footer">
      <div className="footer-content">
        <div className="page-stats">
          {likeStatus ? (
            <span> Thank you!</span>
          ) : (
            <span>
              Like this page? Leave a <FaHeart /> !
            </span>
          )}
          <div className="like-button" onClick={clickLike}>
            <IconContext.Provider value={{ className: "f-icon" }}>
              <FaHeart
                className={`heart-icon ${likeStatus ? "liked" : "unlike"}`}
              />
            </IconContext.Provider>
          </div>
          <span>
            This page now has total of {viewCount} Views and {likeCount} Likes
          </span>
        </div>
        <div className="last-line">
          <span>Credits</span>
          <span className="f-icons-wrapper">
            <IconContext.Provider value={{ className: "f-icon" }}>
              <AiOutlineHome />
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
          </span>
          <span>Design + Code by Dream</span>
        </div>
      </div>
      <div className="f-background"></div>
    </div>
  );
};

export default Footer;
