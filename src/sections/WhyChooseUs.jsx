import React from "react";

const WhyChooseUs = () => {
  return (
    <section className="py-5 bg-light">
      <div className="container text-center">
        <h2 className="fw-bold mb-4">
          Why Choose <span className="text-primary">Kismat Ki Property?</span>
        </h2>
        <p className="text-muted mb-5">
          Here's why thousands trust us for their real estate needs.
        </p>

        <div className="row">
          <div className="col-md-6 col-lg-3 mb-4">
            <div className="bg-white p-4 shadow rounded h-100">
              <i className="fas fa-check-circle text-success fs-2 mb-3"></i>
              <h5 className="fw-bold">Verified Listings</h5>
              <p className="text-muted small">
                "Every property is 100% verified for your safety."
              </p>
            </div>
          </div>

          <div className="col-md-6 col-lg-3 mb-4">
            <div className="bg-white p-4 shadow rounded h-100">
              <i className="fas fa-users text-primary fs-2 mb-3"></i>
              <h5 className="fw-bold">10 Lakh+ Users</h5>
              <p className="text-muted small">
               Thousands of users browse properties on our platform.
              </p>
            </div>
          </div>

          <div className="col-md-6 col-lg-3 mb-4">
            <div className="bg-white p-4 shadow rounded h-100">
              <i className="fas fa-bolt text-warning fs-2 mb-3"></i>
              <h5 className="fw-bold">Fast Deals</h5>
              <p className="text-muted small">
                We quickly connect buyers and sellers.
              </p>
            </div>
          </div>

          <div className="col-md-6 col-lg-3 mb-4">
            <div className="bg-white p-4 shadow rounded h-100">
              <i className="fas fa-shield-alt text-danger fs-2 mb-3"></i>
              <h5 className="fw-bold">Zero Brokerage</h5>
              <p className="text-muted small">
                No agent fee. Direct property deals.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
