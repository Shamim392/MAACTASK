import React from "react";
import "./Home.css";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Features from "../Features/Features";

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
      <Features />
      <Footer />
    </>
  );
};

export default Home;
