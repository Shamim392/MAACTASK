import React from "react";
import "./Home.css";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Features from "../Features/Features";
import SingleImage from "../SingleImage/SingleImage";
import About from "../About/About";
import Counter from "../Counter/Counter";
import Faq from "../Faq/Faq";
import aven from "../../assects/image/Aven.png";
import amara from "../../assects/image/Amara.png";
import circle from "../../assects/image/Circle.png";
import kyan from "../../assects/image/Kyan.png";
import treva from "../../assects/image/Treva.png";

const Home = () => {
  return (
    <>
      <Header />
      <div className="content">
        <h1>
          Analytics that transform your <br /> product inside-out
        </h1>
        <button type="button" className="button">
          Request for Demo
        </button>
        <button type="button" className="button1">
          Download
        </button>
      </div>
      <SingleImage />
      <Features />
      <About />
      <Counter />
      <Faq />
      <div className="">
        <h1 className="teams">5,000+ high-impact teams rely on Fieldx</h1>
        <div className="row teamsLogo">
          <div className="col ">
            <div className="realColumn">
              <img src={aven} alt="" />
            </div>
          </div>
          <div className="col">
            <div className="realColumn">
              {" "}
              <img src={amara} alt="" />
            </div>
          </div>
          <div className="col">
            <div className="realColumn">
              {" "}
              <img src={circle} alt="" />
            </div>
          </div>
          <div className="col">
            {" "}
            <img src={kyan} alt="" />
          </div>
          <div className="col">
            <div className="realColumn">
              {" "}
              <img src={treva} alt="" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
