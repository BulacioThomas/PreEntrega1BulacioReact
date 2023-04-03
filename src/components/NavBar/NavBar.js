import React from "react";
import "./NavBar.css";
import Shop from "../CartWidget/Shop";

import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="Navigation">
      <ul className="List-ul">
        <Link className="Link" to="/">
          <h1>Musimundo</h1>
        </Link>

        <Link className="Link" to="/">
          Home
        </Link>
        <Link className="Link" to="/about">
          About
        </Link>
        <Link className="Link" to="/contact">
          Contact
        </Link>
        <Link>
          <Shop />
        </Link>
      </ul>
    </nav>
  );
};

export default NavBar;
