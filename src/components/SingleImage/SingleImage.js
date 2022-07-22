import React from "react";
import img1 from "../../assects/image/tablet 1.png";
import img2 from "../../assects/image/Group 34024.png";
import "./SingleImage.css";

const SingleImage = () => {
  return (
    <div>
      <img src={img1} alt="" className="img1" />
      <img src={img2} alt="" className="img2" />
    </div>
  );
};

export default SingleImage;
