import React from "react";
import "./style.css";
// import logo from "./img/diploma.png";
import logo from "./img/book.png";
import Navigation from "./Navigation";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <div className="conteiner">
        <div className="header__inner">
          <div className="header__logo">
            <Link to="/" className="header__logo-link">
              Educational PORTAL
            </Link>
            <img src={logo} alt="" className="header__logo-img" />
          </div>
          <Navigation />
        </div>
      </div>
    </header>
  );
}

export default Header;
