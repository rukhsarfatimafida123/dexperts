import React from "react";
import webDevBg from "../assets/banner-bg.png"; // Make sure this image exists in assets

const WebDevelopmentPage = () => {
  return (
    <div className="w-full">

      {/* Hero Section */}
      <section
        className="relative w-full h-[60vh] md:h-[70vh] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${webDevBg})` }}
      >
        <div className="absolute inset-0 bg-indigo-100/10"></div> {/* overlay */}
        <div className="relative z-10 text-center text-white px-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            Web Development
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto text-gray-200">
            Coming Soon……
          </p>
          <div className="w-60 h-1 bg-red-600 mx-auto mt-6 rounded-full"></div>
        </div>
      </section>

      {/* Optional Placeholder Content */}
      <div className="py-20 bg-indigo-50">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 text-center">
          <p className="text-gray-700 text-lg md:text-xl">
            Stay tuned! We are working on creating amazing web development services for you.
          </p>
        </div>
      </div>

    </div>
  );
};

export default WebDevelopmentPage;