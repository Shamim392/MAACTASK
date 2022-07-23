import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="container-fluid">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div>
          <a className=" logo" href="#">
            FeildX
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            {/* <span className="navbar-toggler-icon"></span> */}
          </button>
        </div>

        <div
          className="collapse navbar-collapse buttonDiv"
          id="navbarSupportedContent"
        >
          <button type="button" className="btn1">
            Login
          </button>
          <button type="button" className=" btn2">
            Registration
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Header;
