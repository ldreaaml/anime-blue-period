import React from "react";
import "./Footer.css";
import { IconContext } from "react-icons";
import { FaGithub, FaFigma, FaHeart } from "react-icons/fa";
import { AiOutlineHome } from "react-icons/ai";
import { incrementLikes, incrementViews } from "../../firebase";
import { useState, useEffect } from "react";
import { getDatabase, ref, onValue } from "firebase/database";
import { motion } from "framer-motion";
import { useSpring, animated, config, set, to } from "react-spring";

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

  const { likesNumber } = useSpring({
    // reset: true,
    from: { likesNumber: 0 },
    likesNumber: likeCount,
    delay: 100,
    config: config.molasses,
  });

  const { viewsNumber } = useSpring({
    from: { viewsNumber: 0 },
    viewsNumber: viewCount,
    delay: 100,
    config: config.molasses,
  });

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

          <motion.div
            className="like-button"
            onClick={clickLike}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <IconContext.Provider value={{ className: "f-icon" }}>
              <FaHeart
                className={`heart-icon ${likeStatus ? "liked" : "unlike"}`}
              />
            </IconContext.Provider>
          </motion.div>
          <span>
            This page now has total of{" "}
            <animated.span style={{ fontSize: "1.6rem" }}>
              {viewsNumber.to((n) => n.toFixed(0))}
            </animated.span>{" "}
            Views and{" "}
            <animated.span style={{ fontSize: "1.6rem" }}>
              {likesNumber.to((n) => n.toFixed(0))}
            </animated.span>{" "}
            Likes
          </span>
        </div>
        <div className="final-line">
          <span>Credits</span>
          <span className="f-icons-wrapper">
            <IconContext.Provider value={{ className: "f-icon" }}>
              <motion.a whileHover={{ scale: 1.2 }}>
                <AiOutlineHome />
              </motion.a>
              <motion.a
                href="https://github.com/ldreaaml/anime-blue-period"
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.2 }}
              >
                <FaGithub />
              </motion.a>
              <motion.a
                href="https://www.figma.com/file/1E0JrQiUihnAWFp1ZUPWPH/Blue-Period?node-id=0%3A1"
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.2 }}
              >
                <FaFigma />
              </motion.a>
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
