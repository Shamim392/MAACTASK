import React from "react";
import classes from "./Features.module.css";
import { IoCubeOutline } from "react-icons/io5";
import circle from "../../assects/image/Ellipse 40.png";
import phone from "../../assects/image/Central phone 2.png";

const Features = () => {
  return (
    <div className={classes.container}>
      <p className={classes.text}>Products Features</p>
      <h1 className={classes.heading}>Make more out of your data</h1>
      <div className={classes.row}>
        <div className={classes.column1}>
          <div className={classes.main}>
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
          </div>
          <div className={classes.main}>
            <div className={classes.iconDiv}>
              <IoCubeOutline className={classes.feIcon} />
            </div>
            <div>
              <h4 className={classes.iconText}>Intuitive dashboard</h4>
              <h5 className={classes.iconTexts}>
                See product usage, sign-ins, feature <br /> metrics change as
                users work on your.
              </h5>
            </div>
          </div>
          <div className={classes.main}>
            <div className={classes.iconDiv}>
              <IoCubeOutline className={classes.feIcon} />
            </div>
            <div>
              <h4 className={classes.iconText}>Smart suggestions</h4>
              <h5 className={classes.iconTexts}>
                See product usage, sign-ins, feature <br /> metrics change as
                users work on your.
              </h5>
            </div>
          </div>
        </div>
        <div className={classes.column2}>
          <div>
            <img className={classes.circle} src={circle} alt="" />
            <img className={classes.phoneImg} src={phone} alt="" />
          </div>
        </div>
        <div className={classes.column3}>
          <div className={classes.main3}>
            <div className={classes.iconDiv3}>
              <IoCubeOutline className={classes.feIcon} />
            </div>
            <div>
              <h4 className={classes.iconText3}>Multiple views</h4>
              <h5 className={classes.iconTexts3}>
                See product usage, sign-ins, feature <br /> metrics change as
                users work on your.
              </h5>
            </div>
          </div>
          <div className={classes.main3}>
            <div className={classes.iconDiv3}>
              <IoCubeOutline className={classes.feIcon} />
            </div>
            <div>
              <h4 className={classes.iconText3}>AI-led diagnoses</h4>
              <h5 className={classes.iconTexts3}>
                See product usage, sign-ins, feature <br /> metrics change as
                users work on your.
              </h5>
            </div>
          </div>
          <div className={classes.main3}>
            <div className={classes.iconDiv3}>
              <IoCubeOutline className={classes.feIcon} />
            </div>
            <div>
              <h4 className={classes.iconText3}>Responsive</h4>
              <h5 className={classes.iconTexts3}>
                See product usage, sign-ins, feature <br /> metrics change as
                users work on your.
              </h5>
            </div>
          </div>{" "}
        </div>
      </div>
    </div>
  );
};

export default Features;
