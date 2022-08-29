import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <nav className="navigation">
      <ul className="navigation__list">
        <li className="navigation__item">
          <Link to="/" className="navigation__link">
            Главная
          </Link>
          <Link to="/tests" className="navigation__link">
            Тесты
          </Link>
          <Link to="/newvalue" className="navigation__link">
            Создать
          </Link>
          <Link to="/about" className="navigation__link">
            О нас
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
