import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import heroImage from "../assets/hero1.png";

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

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slidesData.length);
  const prevSlide = () =>
    setCurrent((prev) => (prev === 0 ? slidesData.length - 1 : prev - 1));

  return (
    <section
      className="relative w-full h-screen overflow-hidden pt-20"
      style={{ backgroundImage: `url(${heroImage})`, backgroundSize: "cover", backgroundPosition: "center" }}
    >
      {/* Dark Overlay for readability */}
      <div className="absolute inset-0 bg-black/25 md:bg-black/30"></div>

      {/* Slides */}
      {slidesData.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 flex items-center justify-center px-4 transition-all duration-1000 ease-in-out ${
            index === current ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
          }`}
        >
          <div className="text-center text-white max-w-4xl">
            {/* Title */}
            <h1
              className={`font-extrabold leading-tight transition-all duration-1000 text-3xl sm:text-4xl md:text-5xl lg:text-6xl ${
                index === current ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-6"
              }`}
            >
              {slide.title}
            </h1>

            {/* Subtitle */}
            <p
              className={`mt-4 sm:mt-6 text-sm sm:text-base md:text-lg lg:text-xl transition-all duration-1000 delay-200 ${
                index === current ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              {slide.subtitle}
            </p>

            {/* Buttons */}
            <div
              className={`mt-6 sm:mt-8 flex flex-col sm:flex-row justify-center gap-4 transition-all duration-1000 delay-300 ${
                index === current ? "opacity-100 scale-100" : "opacity-0 scale-90"
              }`}
            >
              <button
                onClick={() => navigate("/contact")}
                className="px-6 sm:px-8 py-2 sm:py-3 rounded-full bg-indigo-700 hover:bg-indigo-800 shadow-lg hover:shadow-indigo-700/40 transition duration-300"
              >
                Contact Us
              </button>
              <button
                onClick={() => navigate("/about")}
                className="px-6 sm:px-8 py-2 sm:py-3 rounded-full border border-white/60 bg-white/10 hover:bg-white/20 transition duration-300"
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
        className="absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-md hover:bg-white/40 text-white p-3 sm:p-4 rounded-full transition"
      >
        &#10094;
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-md hover:bg-white/40 text-white p-3 sm:p-4 rounded-full transition"
      >
        &#10095;
      </button>
    </section>
  );
};

export default Hero;