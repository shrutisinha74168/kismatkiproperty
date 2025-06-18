import React from "react";
import PropertyCard from "./PropertyCard";

const FeaturedProperties =()=>{
  const properties = [
    {
      image: "/assets/mumbai.webp",
      title: "2 BHK Luxury Apartment",
      location: "Mumbai, Maharashtra",
      price: 75,
    },
    {
      image: "/assets/banglore.webp",
      title: "Modern Villa",
      location: "Bangalore, Karnataka",
      price: 120,
    },
    {
      image: "/assets/delhi.webp",
      title: "Commercial Office Space",
      location: "Delhi NCR",
      price: 95,
    },
    {
      image: "/assets/kolkata.jpg",
      title: "Affordable 1 BHK Flat",
      location: "Kolkata, West Bengal",
      price: 35,
    },
    {
      image: "/assets/gurugoan.jpg",
      title: "Luxury Penthouse",
      location: "Gurugram, Hariyana",
      price: 140,
    },
    {
      image: "/assets/Noida1.webp",
      title: "3 BHK Family Home",
      location: "Noida, UP",
      price: 85,
    },
    {
      image: "/assets/gurugoan.jpg",
      title: "DLF Gurugoan",
      location: "Gurugram, Hariyana",
      price: 140,
    },
    {
      image: "/assets/Motinagar.jpg",
      title: "DLF Moti nagar",
      location: "Moti Nagar, New Delhi",
      price: 85,
    },

     {
      image: "/assets/vasant vihar.jpg",
      title: "villa in vasantvihar",
      location: "Vasant vihar, New Delhi",
      price: 85,
    },
  ];

  return (
    <div className="container my-5">
      <h5 className="text-center fw-semibold mb-4" style={{ color: '#4da6ff' }}>
  Featured Properties
</h5>

      <p className="text-center fw-bold fs-1">Recommended For You</p>
      <div className="row">
        {properties.map((property, index) => (
          <PropertyCard
            key={index}
            image={property.image}
            title={property.title}
            location={property.location}
            price={property.price}
          />
        ))}
      </div>

      {/* View All Button */}
      <div className="text-center mt-4">
        <a href="/properties" className="btn btn-outline-primary px-4 py-2">
          View All Properties <i className="bi bi-arrow-right ms-2"> </i>
        </a>
      </div>
    </div>
  );
};

export default FeaturedProperties;

