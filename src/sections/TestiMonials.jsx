import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const TestiMonials = [
  {
    name: "Ranganath RK",
    location: "Owner, Bangalore",
    feedback:
      "The team was constantly looking for the exact match of tenants and coordinating with both parties to get the deal fixed. I would recommend 99acres within my network & rate 5/5 for the services provided.",
  },
  {
    name: "Mr. Danasekar",
    location: "Property Agent, Chennai",
    feedback:
      "Our experience has been very fruitful. We got a lot of enquiries and good conversions. Very happy as it helped us reach a diversified audience.",
  },
];

function Testimonials () {
  return (
    <section className="py-5 bg-light">
      <div className="container">
        <h5 className="text-primary text-uppercase mb-2">Testimonial</h5>
        <h2 className="fw-bold mb-4">
          This is what other Owners & Dealers have to say…
        </h2>

        <div className="row">
          {TestiMonials.map((item, index) => (
            <div className="col-md-6 mb-4" key={index}>
              <div className="p-4 bg-white shadow-sm rounded">
                <h5 className="fw-bold">{item.name}</h5>
                <p className="text-muted mb-2">{item.location}</p>
                <p style={{ fontSize: "15px" }}>{item.feedback}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="d-flex justify-content-between mt-3 px-2">
          <button className="btn btn-outline-primary rounded-circle">
            <FaArrowLeft />
          </button>
          <button className="btn btn-outline-primary rounded-circle">
            <FaArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
}

// ✅ yeh line correct export hai
export default Testimonials;
