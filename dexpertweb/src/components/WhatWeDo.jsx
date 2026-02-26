import { Link } from "react-router-dom";
import immigrationImg from "../assets/Visa.png";
import graphicImg from "../assets/Graphic.png";
import webImg from "../assets/webdevelopment.png";

const services = [
  {
    title: "Visa & Immigration",
    description:
      "Our Visa and Immigration Service provides expert guidance through the complex immigration process.",
    image: immigrationImg,
    link: "/visa",
  },
  {
    title: "Web Development",
    description:
      "We build responsive, modern, and user-friendly websites tailored to your business goals.",
    image: webImg,
    link: "/web-development",
  },
  {
    title: "Graphic Designing",
    description:
      "Creative and professional designs that capture your brand’s identity and communicate effectively.",
    image: graphicImg,
    link: "/graphic-design",
  },
];

const WhatWeDo = () => {
  return (
    <section className="w-full bg-gray-100 py-20">
      <div className="max-w-6xl mx-auto px-6">

        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-indigo-800">
            What We Do
          </h2>
          <div className="w-40 h-0.5 bg-red-600 mx-auto mt-2 rounded"></div>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative group rounded-3xl overflow-hidden shadow-lg cursor-pointer bg-white"
            >

              {/* Normal Card Content */}
              <div className="transition duration-700 ease-in-out group-hover:opacity-0">

                {/* Image */}
                <div className="h-[220px] overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Grey Bottom Area */}
                <div className="bg-gray-300 px-6 py-6">
                  <h3 className="text-[#0f172a] text-lg font-semibold">
                    {service.title}
                  </h3>
                </div>

              </div>

              {/* Hover Content (Replaces Card) */}
              <div className="absolute inset-0 bg-white p-6 flex flex-col justify-center opacity-0 group-hover:opacity-100 transition duration-700 ease-in-out">

                <h3 className="text-xl font-bold text-[#0f172a] mb-3">
                  {service.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed mb-5">
                  {service.description}
                </p>

                <Link
                  to={service.link}
                  className="bg-indigo-700 text-white px-5 py-2 rounded-md hover:bg-indigo-800 transition w-fit text-sm"
                >
                  Read More
                </Link>

              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;