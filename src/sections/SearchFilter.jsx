import React from "react";

function SearchFilter (){
  return (
    <section className="py-5 bg-light">
      <div className="container">
        <div className="card shadow p-4">
          <h4 className="mb-4 text-center fw-bold fs-3">
            Find Your Perfect Property
          </h4>
          <form className="row gy-3 gx-4 justify-content-center">
            {/* Location */}
            <div className="col-lg-4 col-md-6">
              <label htmlFor="location" className="form-label">
                Location
              </label>
              <select className="form-select" id="location">
                <option value="">Select City</option>
                <option value="delhi">Delhi</option>
                <option value="mumbai">Mumbai</option>
                <option value="bangalore">Bangalore</option>
                <option value="kolkata">Kolkata</option>
              </select>
            </div>

            {/* Property Type */}
            <div className="col-lg-4 col-md-6">
              <label htmlFor="propertyType" className="form-label">
                Property Type
              </label>
              <select className="form-select" id="propertyType">
                <option value="">Select Type</option>
                <option value="flat">Flat</option>
                <option value="house">House</option>
                <option value="plot">Plot</option>
                <option value="commercial">Commercial</option>
              </select>
            </div>

            {/* Price Range */}
            <div className="col-lg-4 col-md-6">
              <label htmlFor="priceRange" className="form-label">
                Price Range
              </label>
              <select className="form-select" id="priceRange">
                <option value="">Select Range</option>
                <option value="0-20">₹0 - ₹20 Lakhs</option>
                <option value="20-50">₹20 - ₹50 Lakhs</option>
                <option value="50-100">₹50 Lakhs - ₹1 Crore</option>
                <option value="100+">₹1 Crore+</option>
              </select>
            </div>

            {/* Search Button */}
            <div className="col-12 text-center pt-3">
              <button type="submit" className="btn btn-primary px-5 py-2 fs-5">
                Search
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SearchFilter;
