import React from "react";

const Faq = () => {
  return (
    <section className="faqs-section py-5">
      <div className="container ">
        <h2 className="text-center mt-5 mb-4 fw-bold mb-4">Frequently Asked Questions</h2>

        <div className="accordion" id="faqAccordion">
          <div className="faq-item">
            <div className="accordion-item">
              <h4 className="faq-question">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#faq1"
                  aria-expanded="true"
                  aria-controls="faq1"
                >
                  What is Smart VMS?
                </button>
              </h4>
              <div id="faq1" className="accordion-collapse collapse show">
                <div className="accordion-body">
                  A system to manage visitor check-ins, parking, and analytics.
                </div>
              </div>
            </div>
          </div>

          <div className="faq-item">
            <div className="accordion-item">
              <h4 className="faq-question">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#faq2"
                  aria-expanded="false"
                  aria-controls="faq2"
                >
                  How does QR Check-In work?
                </button>
              </h4>
              <div id="faq2" className="accordion-collapse collapse">
                <div className="accordion-body">
                  Visitors receive a QR code after approval, which is scanned at
                  reception for seamless entry.
                </div>
              </div>
            </div>
          </div>

          <div className="faq-item">
            <div className="accordion-item">
              <h4 className="faq-question">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#faq3"
                  aria-expanded="false"
                  aria-controls="faq3"
                >
                  Is the system scalable?
                </button>
              </h4>
              <div id="faq3" className="accordion-collapse collapse">
                <div className="accordion-body">
                  Yes, it supports single and multi-office deployments with
                  unified reporting.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
