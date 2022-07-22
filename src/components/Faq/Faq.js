import React from "react";
import "./Faq.css";
import faq from "../../assects/image/ajscb 1.png";
const Faq = () => {
  return (
    <div className="faqMain">
      <div className="faqDiv">
        <p className="Faqtext">Common Question</p>
        <h1 className="faq">Frequently asked questions</h1>
        <img src={faq} alt="" />
      </div>
    </div>
  );
};

export default Faq;
