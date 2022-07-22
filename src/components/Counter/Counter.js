import React from "react";
import "./Counter.css";
import { BiMessageDetail } from "react-icons/bi";
import { IoIosPeople } from "react-icons/io";
import { AiOutlineTrophy, AiOutlineUser } from "react-icons/ai";
import CountUp from "react-countup";

const Counter = () => {
  return (
    <>
      <div className="row counterDiv">
        <div className="col ">
          <div className="counterCol">
            <i className="counterIcon">
              {" "}
              <BiMessageDetail />{" "}
            </i>
            <h1 className="counter">
              <CountUp end={10} />+
            </h1>
            <p className="counterText">Platforms Created</p>
          </div>
        </div>
        <div className="col">
          <div className="counterCol">
            <i className="counterIcon">
              {" "}
              <IoIosPeople />
            </i>
            <h1 className="counter">
              <CountUp end={1559} />+
            </h1>
            <p className="counterText">Total Video edit</p>
          </div>
        </div>
        <div className="col">
          <div className="counterCol">
            <i className="counterIcon">
              {" "}
              <AiOutlineUser />{" "}
            </i>
            <h1 className="counter">
              <CountUp end={10} />+
            </h1>
            <p className="counterText">Positive Review</p>
          </div>
        </div>
        <div className="col">
          <div className="counterCo">
            <i className="counterIcon">
              {" "}
              <AiOutlineTrophy />{" "}
            </i>
            <h1 className="counter">
              <CountUp end={300} />D
            </h1>
            <p className="counterText">Order recieved</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Counter;
