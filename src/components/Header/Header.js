import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <nav className="navbar cont">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" href="/">
              FieldX
            </a>
          </div>

          <div className="nav navbar-nav navbar-right buttons">
            <button type="button" class="btn1">
              Login
            </button>
            <button type="button" class=" btn2">
              Registration
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
