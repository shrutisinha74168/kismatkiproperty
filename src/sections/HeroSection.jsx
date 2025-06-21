import React from "react";

function HeroSection() {
  return (
    <section className="hero-container position-relative">
      {/* Background Video */}
      <video
        className="hero-bg-video"
        src="/assets/bannervideo.mp4"
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Overlay Content */}
      <div className="hero-content position-absolute top-50 start-50 translate-middle text-center text-white">
        <h1>
          Property Toh Kismat Se Milti Hai <span className="text-warning">Search Kare</span>
        </h1>
        <a href="/properties" className="btn btn-light btn-lg mt-3">
          Explore Properties
        </a>
      </div>
    </section>
  );
}

export default HeroSection;
