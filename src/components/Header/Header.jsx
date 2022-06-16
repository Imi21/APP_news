import React from "react";
import "./Header.scss";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="header">
   
      <span>MATIAS NEWS</span>
      <div>
        <span>
        <Link to="/">Home</Link>
        </span>
        <br />
        <span>
          <Link to="/form">Form</Link>
        </span>
        <br />
        <span>
          <Link to="/list">List</Link>
        </span>
      </div>
    </nav>
  );
};

export default Header;