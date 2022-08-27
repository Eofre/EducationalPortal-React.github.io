import React from "react";
import "./style.css";
import logo from "./img/diploma.png";
import Navigation from "./Navigation";

function Header() {
  return (
    <header className="header">
      <div className="conteiner">
        <div className="header__inner">
          <div className="header__logo">
            <a href="/" className="header__logo-link">
              Educational PORTAL
            </a>
            <img src={logo} alt="" className="header__logo-img" />
          </div>
          {/* <Navigation /> */}
        </div>
      </div>
    </header>
  );
}

export default Header;
