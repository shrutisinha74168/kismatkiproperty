import React from "react";

const FaqAndBlog = () => {
  return (
    <section className="py-5 bg-light">
      <div className="container">

        {/* FAQs Section */}
        <div className="mb-5">
          <h2 className="fw-bold text-center mb-4">Frequently Asked Questions</h2>
          <div className="accordion" id="faqAccordion">

            <div className="accordion-item">
              <h2 className="accordion-header" id="faq1">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1">
                  Is listing my property free?
                </button>
              </h2>
              <div id="collapse1" className="accordion-collapse collapse show" data-bs-parent="#faqAccordion">
                <div className="accordion-body">
                  Yes, listing is completely free on Kismat Ki Property.
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header" id="faq2">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse2">
                  How can I post my property?
                </button>
              </h2>
              <div id="collapse2" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                <div className="accordion-body">
                  Just fill the form in the "Sell Property" section and submit.
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header" id="faq3">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse3">
                  Do I need to pay any brokerage?
                </button>
              </h2>
              <div id="collapse3" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                <div className="accordion-body">
                  No, we do not charge any brokerage or agent fee.
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header" id="faq4">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse4">
                  How can I rent/sell my property faster?
                </button>
              </h2>
              <div id="collapse4" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                <div className="accordion-body">
                  Upload clear images, give detailed description, and set the right price to get faster responses.
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Blog Video Section */}
        <div className="mb-5">
          <h2 className="fw-bold text-center mb-4">Watch Our Vlog</h2>
          <div className="row justify-content-center">
            <div className="col-md-8">
              <div className="ratio ratio-16x9 rounded shadow-sm overflow-hidden">
                <video src="/assets/blogVideo.mp4" autoPlay muted loop playsInline className="w-100 h-100" />
              </div>
            </div>
          </div>
        </div>

        {/* Blog Preview Section */}
        <div>
          <h2 className="fw-bold text-center mb-4">Latest from Our Blog</h2>
          <div className="row">
            <div className="col-md-4 mb-4">
              <div className="card h-100 shadow-sm">
                <video src="/assets/blogVideo.mp4" className="card-img-top" alt="Blog 1" />
                <div className="card-body">
                  <h5 className="card-title">Tips to Sell Your Property Faster</h5>
                  <p className="card-text text-muted small">Get expert advice to make your listing stand out.</p>
                  <a href="/blog/sell-fast" className="btn btn-outline-primary btn-sm">Read More</a>
                </div>
              </div>
            </div>

            <div className="col-md-4 mb-4">
              <div className="card h-100 shadow-sm">
                <video src="/assets/Delhivideo.mp4" className="card-img-top" alt="Blog 2" />
                <div className="card-body">
                  <h5 className="card-title">Best Investment Cities in 2025</h5>
                  <p className="card-text text-muted small">Know where to invest this year for maximum ROI.</p>
                  <a href="/blog/best-cities" className="btn btn-outline-primary btn-sm">Read More</a>
                </div>
              </div>
            </div>

            <div className="col-md-4 mb-4">
              <div className="card h-100 shadow-sm">
                <video src="/assets/DLFvideo.mp4" className="card-img-top" alt="Blog 3" />
                <div className="card-body">
                  <h5 className="card-title">Rental vs. Buying: What’s Better?</h5>
                  <p className="card-text text-muted small">Understand the pros and cons of both options.</p>
                  <a href="/blog/rent-vs-buy" className="btn btn-outline-primary btn-sm">Read More</a>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default FaqAndBlog;
