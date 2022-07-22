import React from "react";
import logo from "../../assects/image/maac.png";
import "./Footer.css";
import { AiFillTwitterCircle, AiOutlineInstagram } from "react-icons/ai";
import { MdFacebook } from "react-icons/md";
const Footer = () => {
  return (
    <div className="footer-cont">
      <container>
        <img src={logo} alt="" />
        <p className="text">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem <br />
          accusantium doloremque laudantium, totam rem aperiam eaque.
        </p>
        <div className="icon">
          <AiFillTwitterCircle className="icons" />
          <AiOutlineInstagram className="icons" />
          <MdFacebook className="icons" />
        </div>

        <div className="copywrite">
          <span>
            © All rights reserve by <span className="color"> MAAC</span>{" "}
          </span>
        </div>
      </container>
    </div>
  );
};

export default Footer;
