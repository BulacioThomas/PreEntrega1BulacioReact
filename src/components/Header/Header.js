import React from "react";
import "./Header.css";
import logo from "./logo.webp";

const Header = ({ title, subtitle }) => {
  return (
    <div className="Header">
      <img src={logo} alt="logo" />
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
    </div>
  );
};

export default Header;
