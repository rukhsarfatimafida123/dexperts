import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

import ambitious from "../assets/Ab Logo.png";
import purity from "../assets/PBR-logo.jpg";
import security from "../assets/customer-img.png";
import muzna from "../assets/mr-logo.jpg";

const testimonials = [
  {
    name: "Greater Security Services",
    image: security,
    text: "Greater Security Services is delighted with the digital accounting services provided by Dexperts. The team's professionalism and attention to detail have significantly improved our financial processes.",
  },
  {
    name: "Muzna Razaq Ltd",
    image: muzna,
    text: "We at Muzna Razaq Ltd are extremely satisfied with the digital bookkeeping services provided by Dexperts. Their expertise has streamlined our operations and saved us valuable time.",
  },
  {
    name: "Ambitious Trader",
    image: ambitious,
    text: "Ambitious Trader is thrilled with the web development and branding services provided by Dexperts. Our online presence has transformed, and we've seen remarkable growth since the redesign.",
  },
  {
    name: "Purity By Rose",
    image: purity,
    text: "Purity By Rose is incredibly pleased with the graphic design and consultancy services provided by Dexperts. Their creative vision perfectly captured our brand essence.",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full bg-gradient-to-br from-gray-50 to-gray-100 py-24 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Header with decorative line */}
        <div className="text-center mb-16">
          <span className="text-indigo-600 font-semibold text-sm tracking-wider uppercase">
            Testimonials
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-4">
            Our Client <span className="text-indigo-600">Feedback</span>
          </h2>
          <div className="w-24 h-1 bg-indigo-600 mx-auto rounded-full"></div>
        </div>

        {/* Main Testimonial Card */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 md:-left-4 top-1/2 -translate-y-1/2 bg-white hover:bg-indigo-700 text-gray-800 hover:text-white p-3 rounded-full shadow-xl z-20 transition-all duration-300 border border-gray-200"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 md:-right-4 top-1/2 -translate-y-1/2 bg-white hover:bg-indigo-700 text-gray-800 hover:text-white p-3 rounded-full shadow-xl z-20 transition-all duration-300 border border-gray-200"
          >
            <ChevronRight size={24} />
          </button>

          {/* Testimonial Card */}
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 max-w-4xl mx-auto relative">
            {/* Decorative quote mark */}
            <div className="absolute top-8 right-8 text-8xl font-serif text-orange-600 opacity-20">
              "
            </div>

            {/* Content */}
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 relative z-10">
              {/* Left side - Image and Info */}
              <div className="flex flex-col items-center text-center md:w-1/3">
                <div className="relative mb-4">
                  {/* Circular gradient background */}
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full blur-md opacity-75"></div>
                  <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-white shadow-xl">
                    <img
                      src={testimonials[current].image}
                      alt={testimonials[current].name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mt-4">
                  {testimonials[current].name}
                </h3>
                <p className="text-indigo-600 font-medium">Satisfied Client</p>
                
                {/* Star Rating */}
                <div className="flex gap-1 mt-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={20} className="fill-orange-500 text-orange-500" />
                  ))}
                </div>
              </div>

              {/* Right side - Testimonial Text */}
              <div className="md:w-2/3 text-left">
                <p className="text-gray-700 text-lg md:text-xl leading-relaxed italic">
                  "{testimonials[current].text}"
                </p>
                
                {/* Client designation */}
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <p className="text-gray-600 font-medium">
                    — {testimonials[current].name}
                  </p>
                </div>
              </div>
            </div>

            {/* Pagination Dots */}
            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === current 
                      ? "w-8 bg-indigo-700" 
                      : "w-2 bg-gray-300 hover:bg-indigo-400"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Company Logos Strip */}
        <div className="mt-16 flex justify-center items-center gap-8 md:gap-16 opacity-60">
          <div className="h-8 w-24 bg-gray-300 rounded"></div>
          <div className="h-8 w-24 bg-gray-300 rounded"></div>
          <div className="h-8 w-24 bg-gray-300 rounded"></div>
          <div className="h-8 w-24 bg-gray-300 rounded"></div>
        </div>
      </div>
    </section>
  );
}