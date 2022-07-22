import React from "react";
import classes from "./About.module.css";
import one from "../../assects/image/Pre order vs delivery 1.png";
import two from "../../assects/image/Top Selling Routes 1.png";
import three from "../../assects/image/Group 34025.png";
import manIcon from "../../assects/image/Ellipse 1.png";

const About = () => {
  return (
    <div className={classes.aboutMain}>
      <div className={classes.aboutIamge}>
        <img src={one} alt="" className={classes.orderImg} />
        <img src={two} alt="" className={classes.sellingImg} />
        <img src={three} alt="" className={classes.control} />
      </div>
      <div>
        <div className={classes.aboutContent}>
          <p className={classes.about}>About</p>
          <h1 className={classes.heading}>
            A dedicated solution for <br /> startups and enterprises
          </h1>
          <p className={classes.abouts}>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo.
          </p>
        </div>
        <div className="">
          <img className={classes.icon} src={manIcon} alt="" />
          <p className={classes.quate}>
            "Fieldx is for teams that care about <br /> their product growth."
          </p>
          <strong className={classes.ceoText}>CEO, FieldX</strong>
        </div>
      </div>
    </div>
  );
};

export default About;
