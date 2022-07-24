import React from "react";
import "./Footer.css";
import { IconContext } from "react-icons";
import { FaGithub, FaFigma } from "react-icons/fa";
import { GrHomeRounded } from "react-icons/gr";
import { AiOutlineHome } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="footer">
      <div className="last-line">
        <span>Credits</span>
        <div className="f-icons">
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
        </div>
        <span>Design + Code by Dream</span>
      </div>
      <div className="f-background"></div>
    </div>
  );
};

export default Footer;
