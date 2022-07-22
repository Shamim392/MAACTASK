import React from "react";
import classes from "./Features.module.css";
import { IoCubeOutline } from "react-icons/io5";
const Features = () => {
  return (
    <div className={classes.container}>
      <p className={classes.text}>Products Features</p>
      <h1 className={classes.heading}>Make more out of your data</h1>
      <div className={classes.row}>
        <div className={classes.column1}>
          <div className="classes.main">
            <div className={classes.iconDiv}>
              <IoCubeOutline className={classes.feIcon} />
            </div>

            <div>
              <h4 className={classes.iconText}>Real-time analytics</h4>
              <h5 className={classes.iconTexts}>
                See product usage, sign-ins, feature <br /> metrics change as
                users work on your.
              </h5>
            </div>
            {/* <div>
              <h4 className={classes.iconText}>Real-time analytics</h4>
              <h5 className={classes.iconTexts}>
                See product usage, sign-ins, feature <br /> metrics change as
                users work on your.
              </h5>
            </div> */}
          </div>
        </div>
        <div className={classes.column2}>
          <h5>hgello</h5>
        </div>
        <div className={classes.column3}>
          <h3>hgello</h3>
        </div>
      </div>
    </div>
  );
};

export default Features;
