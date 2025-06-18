import React, { useState } from "react";

function PostPropertyPage() {
  const [formData, setFormData] = useState({
    title: "",
    type: "Flat",
    location: "",
    price: "",
    area: "",
    description: "",
    images: [],
    video: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "images") {
      setFormData({ ...formData, images: [...files] });
    } else if (name === "video") {
      setFormData({ ...formData, video: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    alert("Property submitted successfully!");
    // Backend integration goes here
  };

  return (
    <section className="py-5" style={{ backgroundColor: "#f8f9fa" }}>
      <div className="container">
        <h2 className="text-center mb-4 fw-bold">Post Your Property</h2>
        <div className="row justify-content-center">
          <div className="col-md-8">
            <form onSubmit={handleSubmit} className="p-4 bg-white shadow rounded">
              <div className="mb-3">
                <label className="form-label">Property Title</label>
                <input
                  type="text"
                  className="form-control"
                  name="title"
                  required
                  placeholder="2 BHK Flat in Noida"
                  onChange={handleChange}
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Property Type</label>
                <select
                  className="form-select"
                  name="type"
                  value={formData.type}
                  onChange={handleChange}
                >
                  <option value="Flat">Flat</option>
                  <option value="Plot">Plot</option>
                  <option value="Villa">Villa</option>
                  <option value="Commercial">Commercial</option>
                </select>
              </div>

              <div className="mb-3">
                <label className="form-label">Location</label>
                <input
                  type="text"
                  className="form-control"
                  name="location"
                  required
                  placeholder="Sector 56, Gurgaon"
                  onChange={handleChange}
                />
              </div>

              <div className="row">
                <div className="col-md-6 mb-3">
                  <label className="form-label">Price (₹)</label>
                  <input
                    type="number"
                    className="form-control"
                    name="price"
                    required
                    onChange={handleChange}
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label">Area (sq ft)</label>
                  <input
                    type="number"
                    className="form-control"
                    name="area"
                    required
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="mb-3">
                <label className="form-label">Description</label>
                <textarea
                  className="form-control"
                  rows="4"
                  name="description"
                  onChange={handleChange}
                ></textarea>
              </div>

              <div className="mb-3">
                <label className="form-label">Upload Images</label>
                <input
                  type="file"
                  className="form-control"
                  name="images"
                  accept="image/*"
                  multiple
                  onChange={handleChange}
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Upload Video (optional)</label>
                <input
                  type="file"
                  className="form-control"
                  name="video"
                  accept="video/*"
                  onChange={handleChange}
                />
              </div>

              <button type="submit" className="btn btn-primary w-100">
                Submit Property
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PostPropertyPage;
