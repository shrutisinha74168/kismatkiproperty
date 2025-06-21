import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const testimonials = [
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
  {
    name: "Priya Sharma",
    location: "Tenant, Mumbai",
    feedback:
      "Smooth experience from start to finish. Found the perfect home in just 3 days!",
  },
];

function Testimonials() {
  const [index, setIndex] = useState(0);

  const next = () => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[index];

  return (
    <section className="py-5 bg-light">
      <div className="container text-center">
        <h5 className="text-primary text-uppercase mb-2">Testimonial</h5>
        <h2 className="fw-bold mb-4">
          This is what other Owners & Dealers have to say…
        </h2>

        <div className="p-4 bg-white shadow-sm rounded d-inline-block text-start" style={{ maxWidth: "600px" }}>
          <h5 className="fw-bold">{current.name}</h5>
          <p className="text-muted mb-2">{current.location}</p>
          <p style={{ fontSize: "15px" }}>{current.feedback}</p>
        </div>

        <div className="d-flex justify-content-center gap-3 mt-4">
          <button onClick={prev} className="btn btn-outline-primary rounded-circle">
            <FaArrowLeft />
          </button>
          <button onClick={next} className="btn btn-outline-primary rounded-circle">
            <FaArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
