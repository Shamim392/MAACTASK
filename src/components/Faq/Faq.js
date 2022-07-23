import React from "react";
import "./Faq.css";
import faq from "../../assects/image/ajscb 1.png";
const Faq = () => {
  return (
    <div className="faqMain">
      <div className="faqDiv">
        <p className="Faqtext">Common Question</p>
        <h1 className="faq">Frequently asked questions</h1>
        <div className="container">
          <div className="row">
            <div className="col">
              <div
                className="accordion accordion-flush mt-5 "
                id="accordionFlushExample"
              >
                <div className="accordion-item acccordionDiv ">
                  <h2
                    className="accordion-header acccordionheading "
                    id="flush-headingOne"
                  >
                    <button
                      className="  accordion-button collapsed "
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseOne"
                      aria-expanded="false"
                      aria-controls="flush-collapseOne"
                    >
                      What kind of data can I see in FieldX?
                    </button>
                  </h2>
                  <div
                    id="flush-collapseOne"
                    className="accordion-collapse collapse"
                    aria-labelledby="flush-headingOne"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div className="accordion-body accordionText">
                      Quis nostrud exercitation ullamco laboris nisi ut aliquip
                      ex ea commodo consequat. Duis aute irure dolor in
                      voluptate.
                    </div>
                  </div>
                </div>
                <div className="accordion-item acccordionDiv">
                  <h2
                    className="accordion-header acccordionheading"
                    id="flush-headingTwo"
                  >
                    <button
                      className="accordion-button collapsed "
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseTwo"
                      aria-expanded="false"
                      aria-controls="flush-collapseTwo"
                    >
                      Does Bizzy read my customers' data?{" "}
                    </button>
                  </h2>
                  <div
                    id="flush-collapseTwo"
                    className="accordion-collapse collapse "
                    aria-labelledby="flush-headingTwo"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div className="accordion-body accordionText">
                      Quis nostrud exercitation ullamco laboris nisi ut aliquip
                      ex ea commodo consequat. Duis aute irure dolor in
                      voluptate.
                    </div>
                  </div>
                </div>
                <div className="accordion-item acccordionDiv">
                  <h2
                    className="accordion-header acccordionheading"
                    id="flush-headingThree"
                  >
                    <button
                      className="accordion-button collapsed "
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseThree"
                      aria-expanded="false"
                      aria-controls="flush-collapseThree"
                    >
                      What's your refund and cancellation policy?{" "}
                    </button>
                  </h2>
                  <div
                    id="flush-collapseThree"
                    className="accordion-collapse collapse"
                    aria-labelledby="flush-headingThree"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div className="accordion-body accordionText">
                      Quis nostrud exercitation ullamco laboris nisi ut aliquip
                      ex ea commodo consequat. Duis aute irure dolor in
                      voluptate.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div
                className="accordion accordion-flush mt-5 "
                id="accordionFlushExample"
              >
                <div className="accordion-item acccordionDiv ">
                  <h2
                    className="accordion-header acccordionheading"
                    id="flush-headingOne"
                  >
                    <button
                      className="  accordion-button collapsed "
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseOne"
                      aria-expanded="false"
                      aria-controls="flush-collapseOne"
                    >
                      How do you take payments?{" "}
                    </button>
                  </h2>
                  <div
                    id="flush-collapseOne"
                    className="accordion-collapse collapse"
                    aria-labelledby="flush-headingOne"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div className="accordion-body accordionText">
                      Quis nostrud exercitation ullamco laboris nisi ut aliquip
                      ex ea commodo consequat. Duis aute irure dolor in
                      voluptate.
                    </div>
                  </div>
                </div>
                <div className="accordion-item acccordionDiv">
                  <h2
                    className="accordion-header acccordionheading"
                    id="flush-headingTwo"
                  >
                    <button
                      className="accordion-button collapsed "
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseTwo"
                      aria-expanded="false"
                      aria-controls="flush-collapseTwo"
                    >
                      Can I also track website analytics on fieldX?{" "}
                    </button>
                  </h2>
                  <div
                    id="flush-collapseTwo"
                    className="accordion-collapse collapse "
                    aria-labelledby="flush-headingTwo"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div className="accordion-body accordionText">
                      Quis nostrud exercitation ullamco laboris nisi ut aliquip
                      ex ea commodo consequat. Duis aute irure dolor in
                      voluptate.
                    </div>
                  </div>
                </div>
                <div className="accordion-item acccordionDiv">
                  <h2
                    className="accordion-header acccordionheading"
                    id="flush-headingThree"
                  >
                    <button
                      className="accordion-button collapsed "
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseThree"
                      aria-expanded="false"
                      aria-controls="flush-collapseThree"
                    >
                      What makes Bizzy different from other analytics tools?{" "}
                    </button>
                  </h2>
                  <div
                    id="flush-collapseThree"
                    className="accordion-collapse collapse"
                    aria-labelledby="flush-headingThree"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div className="accordion-body accordionText">
                      Quis nostrud exercitation ullamco laboris nisi ut aliquip
                      ex ea commodo consequat. Duis aute irure dolor in
                      voluptate.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img className="faqimg" src={faq} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Faq;
