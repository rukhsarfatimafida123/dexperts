import { Link } from "react-router-dom";
import immigrationImg from "../assets/Visa.png";
import graphicImg from "../assets/Graphic.png";
import webImg from "../assets/webdevelopment.png";

const services = [
  {
    title: "Visa & Immigration",
    description:
      "Expert guidance through the complex immigration process. We help you navigate visa applications, documentation, and legal requirements with confidence.",
    image: immigrationImg,
    link: "/visa",
    tag: "Immigration Law",
  },
  {
    title: "Web Development",
    description:
      "Custom, responsive, and high-performance websites tailored to your business goals. We build digital experiences that convert visitors into customers.",
    image: webImg,
    link: "/web-development",
    tag: "Digital Solutions",
  },
  {
    title: "Graphic Designing",
    description:
      "Creative and professional designs that capture your brand's identity. From logos to marketing materials, we bring your vision to life.",
    image: graphicImg,
    link: "/graphic-design",
    tag: "Brand Identity",
  },
];

const WhatWeDo = () => {
  return (
    <section className="w-full bg-gradient-to-br from-gray-50 to-gray-100 py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-indigo-600 font-semibold text-sm uppercase tracking-wider">
            Our Services
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-red-500 mt-2 mb-4">
            What We Do
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-indigo-400 mx-auto rounded-full"></div>
          <p className="text-gray-600 max-w-2xl mx-auto mt-4 text-lg">
            Comprehensive solutions tailored to your business needs
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              
              {/* Image Container */}
              <div className="relative h-56 overflow-hidden bg-gray-200">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Gradient Overlay - Light at bottom for tag readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                
                {/* Tag Badge - Moved to BOTTOM of image */}
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="bg-indigo-600/90 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow-md inline-block">
                    {service.tag}
                  </span>
                </div>
              </div>

              {/* Content Area */}
              <div className="p-6 bg-indigo-50">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-gray-700 text-sm leading-relaxed mb-5 line-clamp-3">
                  {service.description}
                </p>

                {/* CTA Button */}
                <Link
                  to={service.link}
                  className="inline-flex items-center gap-2 text-indigo-600 font-semibold text-sm hover:text-indigo-800 transition-colors group/btn"
                >
                  Learn More
                  <svg 
                    className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>

              {/* Bottom Border Animation */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-600 to-indigo-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhatWeDo;