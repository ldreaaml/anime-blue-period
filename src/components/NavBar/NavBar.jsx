import React from "react";
import "./NavBar.css";
import Logo from "../../img/logo.png";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

const NavBar = () => {
  return (
    <div className="navBar">
      <div className="n-wrapper">
        <div className="n-left">
          <img src={Logo} alt="" style={{ height: "9vh" }} />
        </div>
        <div className="n-right">
          <div className="n-list">
            <ul>
              <Link spy={true} to="Intro" smooth={true}>
                <li className="nav-link">HOME</li>
              </Link>
              <Link spy={true} to="About" smooth={true}>
                <li className="nav-link">ABOUT</li>
              </Link>
              <Link spy={true} to="Characters" smooth={true}>
                <li className="nav-link">CHARACTERS</li>
              </Link>
              <Link spy={true} to="Quotes" smooth={true}>
                <li className="nav-link">QUOTES</li>
              </Link>
              <motion.li className="nav-link" whileHover={{ scale: 1.1   }}>
                <a
                  href="https://www.netflix.com/nz/title/81318842"
                  target="_blank"
                  className="button"
                  rel="noreferrer"
                >
                  WATCH NOW
                </a>
              </motion.li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
