import React, { useState } from "react";
import boodImg from "../img/BLOOD1.webp";
import bloodimgnew from "../img/BOOLD2.webp";
const Home = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const slides = [
    {
      src: boodImg, // Replace with your image URL
      label: "Collect Blood",
      description: "Donate blood today and save lives  your single act.",
    },
    {
      src: bloodimgnew, // Replace with your image URL
      label: "Collect Blood",
      description: "Donate blood today and save lives  your single act.",
    },
    {
      src: boodImg, // Replace with your image URL
      label: "Collect Blood",
      description: "Donate blood today and save lives  your single act.",
    },
  ];

  const handlePrev = () => {
    setActiveIndex(
      (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
    );
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  // Inline styles
  const carouselStyle = {
    // height: "650px",
    overflow: "hidden",
  };

  const carouselItemStyle = {
    height: "100%",
    objectFit: "cover",
  };

  const carouselCaptionStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    padding: "20px",
    borderRadius: "10px",
    textAlign: "center",
    color: "white",
  };

  const appointmentButtonStyle = {
    marginTop: "20px",
    padding: "10px 20px",
    backgroundColor: "#21D192",
    border: "none",
    borderRadius: "5px",
    color: "white",
    cursor: "pointer",
  };

  return (
    <div
      id="carouselExampleCaptions"
      className="carousel slide"
      style={carouselStyle}
    >
      <div className="carousel-indicators">
        {slides.map((slide, index) => (
          <button
            key={index}
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to={index}
            className={index === activeIndex ? "active" : ""}
            aria-current={index === activeIndex ? "true" : "false"}
            aria-label={`Slide ${index + 1}`}
            onClick={() => setActiveIndex(index)}
          ></button>
        ))}
      </div>
      <div className="carousel-inner">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`carousel-item ${index === activeIndex ? "active" : ""}`}
          >
            <img
              src={slide.src}
              className="d-block w-100"
              alt={slide.label}
              style={carouselItemStyle}
            />
            <div
              className="carousel-caption d-md-block"
              style={carouselCaptionStyle}
            >
              <h1 style={{ color: "white" }}>{slide.description}</h1>
              {/* <button style={appointmentButtonStyle}>Appointment</button> */}
            </div>
          </div>
        ))}
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
        onClick={handlePrev}
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
        onClick={handleNext}
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Home;
