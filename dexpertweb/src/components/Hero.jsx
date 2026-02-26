import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import heroImage from "../assets/banner-bg.png";

const slidesData = [
  {
    title: "Your Digital Solutions",
    subtitle:
      "Comprehensive Digital Services for Visa & Immigration, Graphic Design, Web Design, and More.",
  },
  {
    title: "We Create Stunning Websites",
    subtitle: "Professional Web Design and Development for Your Business.",
  },
  {
    title: "Grow Your Business Online",
    subtitle: "Effective Digital Marketing Solutions for Maximum Reach.",
  },
];

const Hero = () => {
  const navigate = useNavigate();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slidesData.length);
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slidesData.length);
  };

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? slidesData.length - 1 : prev - 1
    );
  };

  return (
    <section
      className="relative w-full h-screen overflow-hidden bg-center bg-cover"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue/60 via-black/40 to-black/20"></div>

      {/* Slides */}
      {slidesData.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 flex items-center justify-center transition-all duration-1000 ease-in-out ${
            index === current
              ? "opacity-100 translate-x-0"
              : "opacity-0 translate-x-10"
          }`}
        >
          <div className="relative text-center text-white px-6 max-w-4xl">

            {/* Title Animation */}
            <h1
              className={`text-4xl md:text-6xl font-extrabold leading-tight transition-all duration-1000 ${
                index === current
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 -translate-y-6"
              }`}
            >
              {slide.title}
            </h1>

            <p
              className={`mt-6 text-lg md:text-xl text-gray-200 transition-all duration-1000 delay-200 ${
                index === current
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
            >
              {slide.subtitle}
            </p>

            <div
              className={`mt-8 flex justify-center gap-6 transition-all duration-1000 delay-300 ${
                index === current
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-90"
              }`}
            >
              <button
                onClick={() => navigate("/contact")}
                className="px-8 py-3 rounded-full bg-indigo-700 hover:bg-indigo-800 shadow-lg hover:shadow-indigo-700/40 transition duration-300"
              >
                Contact Us
              </button>

              <button
                onClick={() => navigate("/about")}
                className="px-8 py-3 rounded-full border border-white/60 backdrop-blur-md bg-white/10 hover:bg-white/20 transition duration-300"
              >
                About Us
              </button>
            </div>
          </div>
        </div>
      ))}

      {/* Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-md hover:bg-white/40 text-white p-4 rounded-full transition"
      >
        &#10094;
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-md hover:bg-white/40 text-white p-4 rounded-full transition"
      >
        &#10095;
      </button>
    </section>
  );
};

export default Hero;