import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <nav className="navigation">
      <ul className="navigation__list">
        <li className="navigation__item">
          <Link to="/newtest" className="navigation__link">
            Создать тест
          </Link>
          <Link to="/" className="navigation__link">
            О нас
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
