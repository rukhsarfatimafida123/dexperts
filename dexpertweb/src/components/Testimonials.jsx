import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";

import ambitious from "../assets/Ab Logo.png";
import purity from "../assets/PBR-logo.jpg";
import security from "../assets/customer-img.png";
import muzna from "../assets/mr-logo.jpg";

const testimonials = [
  {
    id: 1,
    name: "Greater Security Services",
    image: security,
    text: "Greater Security Services is delighted with the digital accounting services provided by Dexperts. The team's professionalism and attention to detail have significantly improved our financial processes.",
    role: "CEO",
    rating: 5
  },
  {
    id: 2,
    name: "Muzna Razaq Ltd",
    image: muzna,
    text: "We at Muzna Razaq Ltd are extremely satisfied with the digital bookkeeping services provided by Dexperts. Their expertise has streamlined our operations and saved us valuable time.",
    role: "Managing Director",
    rating: 5
  },
  {
    id: 3,
    name: "Ambitious Trader",
    image: ambitious,
    text: "Ambitious Trader is thrilled with the web development and branding services provided by Dexperts. Our online presence has transformed, and we've seen remarkable growth since the redesign.",
    role: "Founder",
    rating: 5
  },
  {
    id: 4,
    name: "Purity By Rose",
    image: purity,
    text: "Purity By Rose is incredibly pleased with the graphic design and consultancy services provided by Dexperts. Their creative vision perfectly captured our brand essence.",
    role: "Creative Director",
    rating: 5
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
    <section className="w-full bg-gradient-to-br from-indigo-50 via-white to-indigo-100 py-24 relative overflow-hidden">
      {/* Animated Background Elements - Indigo Shades */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-r from-indigo-300 to-indigo-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-r from-indigo-400 to-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl bg-gradient-to-r from-indigo-200 to-indigo-300 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mt-2 mb-4">
            What Our{" "}
            <span className="bg-gradient-to-r from-indigo-900 to-indigo-800 bg-clip-text text-transparent">
              Clients Say
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-indigo-800 mx-auto rounded-full"></div>
        </div>

        {/* Main Testimonial Section */}
        <div className="relative">
          {/* Navigation Buttons - Improved */}
          <button
            onClick={prevSlide}
            className="absolute left-0 lg:-left-6 top-1/2 -translate-y-1/2 bg-white hover:bg-gradient-to-r hover:from-indigo-600 hover:to-indigo-800 text-gray-800 hover:text-white p-3 rounded-full shadow-xl z-20 transition-all duration-300 border border-gray-200 hover:border-transparent"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 lg:-right-6 top-1/2 -translate-y-1/2 bg-white hover:bg-gradient-to-r hover:from-indigo-600 hover:to-indigo-800 text-gray-800 hover:text-white p-3 rounded-full shadow-xl z-20 transition-all duration-300 border border-gray-200 hover:border-transparent"
            aria-label="Next testimonial"
          >
            <ChevronRight size={24} />
          </button>

          {/* Testimonial Card - Redesigned */}
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden relative transform transition-all duration-500 hover:shadow-3xl">
            {/* Gradient Border Effect - Indigo */}
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-indigo-600 to-indigo-700 opacity-0 hover:opacity-100 transition-opacity duration-500 rounded-3xl" style={{ padding: '2px', margin: '-2px' }}>
              <div className="bg-white rounded-3xl h-full w-full"></div>
            </div>
            
            {/* Decorative Quote Icon */}
            <div className="absolute top-8 right-8 text-8xl font-serif text-indigo-200 opacity-30">
              <Quote size={80} strokeWidth={1} />
            </div>

            {/* Content */}
            <div className="p-8 md:p-12 relative z-10">
              <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
                {/* Left side - Client Info */}
                <div className="flex flex-col items-center text-center lg:w-1/3">
                  {/* Image Container with Animation */}
                  <div className="relative group">
                    {/* Animated Ring - Indigo */}
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-indigo-600 to-indigo-700 rounded-full animate-spin-slow opacity-75" style={{ padding: '3px' }}>
                      <div className="absolute inset-0 bg-white rounded-full"></div>
                    </div>
                    <div className="relative w-32 h-32 lg:w-40 lg:h-40 rounded-full overflow-hidden border-4 border-white shadow-xl transition-transform duration-300 group-hover:scale-105">
                      <img
                        src={testimonials[current].image}
                        alt={testimonials[current].name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  
                  <h3 className="text-xl lg:text-2xl font-bold text-indigo-900 mt-6 mb-1">
                    {testimonials[current].name}
                  </h3>
                  <p className="text-indigo-600 font-medium text-sm">
                    {testimonials[current].role}
                  </p>
                  
                  {/* Star Rating with Animation */}
                  <div className="flex gap-1 mt-3">
                    {[...Array(testimonials[current].rating)].map((_, i) => (
                      <Star 
                        key={i} 
                        size={18} 
                        className="fill-amber-400 text-amber-400 animate-bounce-in" 
                        style={{ animationDelay: `${i * 0.1}s` }}
                      />
                    ))}
                  </div>
                </div>

                {/* Right side - Testimonial Text */}
                <div className="lg:w-2/3">
                  <div className="relative">
                    {/* Opening Quote */}
                    <Quote size={32} className="text-indigo-400 mb-4 opacity-50" />
                    <p className="text-gray-700 text-lg lg:text-xl leading-relaxed">
                      "{testimonials[current].text}"
                    </p>
                    
                    {/* Client Signature */}
                    <div className="mt-8 pt-6 border-t border-gray-100">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-gradient-to-r from-indigo-600 to-indigo-800 rounded-full flex items-center justify-center">
                          <span className="text-white font-bold text-lg">
                            {testimonials[current].name.charAt(0)}
                          </span>
                        </div>
                        <div>
                          <p className="text-gray-900 font-semibold">
                            {testimonials[current].name}
                          </p>
                          <p className="text-gray-500 text-sm">
                            Satisfied Client
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Enhanced Pagination Dots - Indigo */}
            <div className="flex justify-center gap-3 pb-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`transition-all duration-300 rounded-full ${
                    index === current 
                      ? "w-10 h-2.5 bg-gradient-to-r from-indigo-600 to-indigo-800" 
                      : "w-2.5 h-2.5 bg-gray-300 hover:bg-indigo-400"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-20 text-center">
          <p className="text-indigo-400 text-sm mb-6">Trusted by 500+ businesses worldwide</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60">
            {testimonials.map((client) => (
              <div key={client.id} className="flex items-center gap-2 group cursor-pointer">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-indigo-100 to-indigo-200 group-hover:from-indigo-200 group-hover:to-indigo-300 transition-all duration-300 flex items-center justify-center">
                  <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center text-xs font-bold text-indigo-600">
                    {client.name.charAt(0)}
                  </div>
                </div>
                <span className="text-indigo-300 text-sm group-hover:text-indigo-500 transition-colors">
                  {client.name.split(' ')[0]}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Add custom CSS for animations */}
      <style jsx>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        
        @keyframes bounce-in {
          0% {
            opacity: 0;
            transform: scale(0);
          }
          50% {
            opacity: 1;
            transform: scale(1.2);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        .animate-spin-slow {
          animation: spin-slow 3s linear infinite;
        }
        
        .animate-bounce-in {
          animation: bounce-in 0.5s ease-out forwards;
        }
      `}</style>
    </section>
  );
}