import { Link } from "react-router-dom";
import React from "react";

function Header() {
  return (
    <nav className="orange darken-4">
      <div className="nav-wrapper">
        <Link to="/" className="brand-logo">
          FOOD
        </Link>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contacts</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
export default Header;
