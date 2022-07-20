import React from "react";
import "./NavBar.css";
import Logo from "../../img/logo.png";
const NavBar = () => {
  return (
    <div className="navBar">
      <div className="n-wrapper">
        <div className="n-left">
          <img src={Logo} alt="" style={{ height: "4rem" }} />
        </div>
        <div className="n-right">
          <div className="n-list">
            <ul>
              <li>HOME</li>
              <li>ABOUT</li>
              <li>CHARACTERS</li>
              <li>QUOTES</li>
              <li>
                <a href="" className="button">
                  WATCH NOW
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
