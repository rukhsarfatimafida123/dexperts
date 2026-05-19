import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronRight, Globe, Clock, CheckCircle, Shield, Briefcase, GraduationCap, Heart, Plane, Building, MapPin } from "lucide-react";

import heroImg from "../assets/hero2.jpg";

/* FLAGS */
import ukFlag from "../assets/uk-flag.png";
import usaFlag from "../assets/usa-flag.png";
import canadaFlag from "../assets/canada-flag.png";
import ausFlag from "../assets/australia-flag.png";
import euFlag from "../assets/european-flag.png";

/* CARD IMAGES */
import ukImg from "../assets/studyuk.png";
import usaImg from "../assets/studyuk.png";
import canadaImg from "../assets/canadastudy.png";
import ausImg from "../assets/austrailiastudy.png";
import euImg from "../assets/eurostudy.png";

import ContactSection from "../components/Contact";

/* ================= PROFESSIONAL CARD COMPONENT ================= */
const VisaCard = ({ title, desc, image, link }) => {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);

  // Get icon based on title
  const getIcon = () => {
    if (title.toLowerCase().includes("student")) return <GraduationCap size={20} />;
    if (title.toLowerCase().includes("work") || title.toLowerCase().includes("skilled")) return <Briefcase size={20} />;
    if (title.toLowerCase().includes("marriage") || title.toLowerCase().includes("partner")) return <Heart size={20} />;
    if (title.toLowerCase().includes("tour") || title.toLowerCase().includes("visitor")) return <Plane size={20} />;
    if (title.toLowerCase().includes("resident") || title.toLowerCase().includes("pr") || title.toLowerCase().includes("citizenship")) return <Shield size={20} />;
    if (title.toLowerCase().includes("sponsorship")) return <Building size={20} />;
    return <Globe size={20} />;
  };

  // Get gradient based on title
  const getGradient = () => {
    if (title.toLowerCase().includes("student")) return "from-blue-500 to-cyan-500";
    if (title.toLowerCase().includes("work") || title.toLowerCase().includes("skilled")) return "from-emerald-500 to-teal-500";
    if (title.toLowerCase().includes("marriage") || title.toLowerCase().includes("partner")) return "from-rose-500 to-pink-500";
    if (title.toLowerCase().includes("tour") || title.toLowerCase().includes("visitor")) return "from-amber-500 to-orange-500";
    if (title.toLowerCase().includes("resident") || title.toLowerCase().includes("pr") || title.toLowerCase().includes("citizenship")) return "from-purple-500 to-indigo-500";
    if (title.toLowerCase().includes("sponsorship")) return "from-indigo-500 to-blue-500";
    return "from-indigo-500 to-purple-500";
  };

  return (
    <motion.div
      className="group relative h-full"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Card with light blue background */}
      <div className="relative bg-blue-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 h-full flex flex-col hover:-translate-y-2">
        
        {/* Gradient top border */}
        <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${getGradient()} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>

        {/* Image Section - Removed hover overlay */}
        <div className="relative h-40 overflow-hidden">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          
          {/* Icon Badge */}
          <div className={`absolute bottom-3 right-3 w-10 h-10 rounded-full bg-gradient-to-r ${getGradient()} flex items-center justify-center text-white shadow-lg transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500`}>
            {getIcon()}
          </div>
        </div>

        {/* Content Section */}
        <div className="p-5 flex-1 flex flex-col">
          {/* Title with icon */}
          <div className="flex items-start gap-2 mb-3">
            <div className={`w-8 h-8 rounded-lg bg-gradient-to-r ${getGradient()} flex items-center justify-center text-white flex-shrink-0 mt-0.5`}>
              {getIcon()}
            </div>
            <h3 className="text-lg font-bold text-gray-800 leading-tight flex-1">
              {title}
            </h3>
          </div>

          {/* Description - No extra background now */}
          <p className="text-gray-700 text-sm leading-relaxed mb-4 line-clamp-4">
            {desc}
          </p>

          {/* Key Features Pills */}
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="text-xs px-2 py-1 bg-white/70 text-gray-600 rounded-full flex items-center gap-1">
              <Clock size={12} />
              Fast Processing
            </span>
            <span className="text-xs px-2 py-1 bg-white/70 text-gray-600 rounded-full flex items-center gap-1">
              <CheckCircle size={12} />
              98% Success
            </span>
          </div>

          {/* Button */}
          <button
            onClick={() => navigate(link)}
            className="mt-auto relative px-5 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-indigo-700 text-white text-sm font-medium overflow-hidden group/btn transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/25"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              Learn More
              <ChevronRight size={16} className="transition-transform duration-300 group-hover/btn:translate-x-1" />
            </span>
            <span className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-600 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></span>
          </button>
        </div>

        {/* Decorative corner */}
        <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className={`absolute top-0 right-0 w-8 h-8 bg-gradient-to-br ${getGradient()} transform rotate-45 translate-x-4 -translate-y-4`}></div>
        </div>
      </div>
    </motion.div>
  );
};

/* ================= SECTION COMPONENT ================= */
const Section = ({ id, title, cards }) => {
  return (
    <section id={id} className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-3">
            {title}
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full"></div>
        </motion.div>

        {/* Cards centered in a grid */}
        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl">
            {cards.map((card, idx) => (
              <div key={idx} className="w-[340px]">
                <VisaCard {...card} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

/* ================= MAIN PAGE ================= */
const VisaPage = () => {
  const sections = [
    {
      id: "uk",
      title: "UK Visa",
      cards: [
        {
          title: "Short Term Study Visa",
          desc: "A short-term study visa allows you to enroll in courses in the UK lasting from 6 to 11 months. It's ideal for students taking short academic programs or intensive English language courses. Experience the UK's rich educational heritage in a short timeframe.",
          image: ukImg,
          link: "/visa-details/uk-short-term-study",
        },
        {
          title: "UK Visa Sponsorship",
          desc: "Obtain a UK Visa Sponsorship Licence. This licence allows you to sponsor foreign workers, enabling them to apply for a Skilled Worker Visa and contribute their expertise to your business.",
          image: ukImg,
          link: "/visa-details/uk-sponsorship",
        },
        {
          title: "Student Visa",
          desc: "This visa is designed for international students aiming to pursue higher education in the UK for courses longer than 6 months. It encompasses a wide range of academic programs at universities, colleges, and other educational institutions.",
          image: ukImg,
          link: "/visa-details/uk-student",
        },
        {
          title: "Skilled Worker Visa",
          desc: "This visa is for individuals with a job offer in the UK in a qualifying skilled occupation. It enables you to live and work in the UK, contributing your skills to the British economy.",
          image: ukImg,
          link: "/visa-details/uk-skilled",
        },
        {
          title: "Marriage/Partner Visa",
          desc: "For those planning to join their partner or spouse in the UK, this visa facilitates long-term residence based on your relationship status. It's a pathway to settling down with your loved one in the UK.",
          image: ukImg,
          link: "/visa-details/uk-marriage",
        },
        {
          title: "Tourism/Visitor Visa",
          desc: "Visit the UK for leisure, tourism, or family visits with a visitor visa. It generally allows stays of up to 6 months, providing ample time to explore the UK's iconic landmarks and cultural heritage.",
          image: ukImg,
          link: "/visa-details/uk-visitor",
        },
      ],
    },
    {
      id: "canada",
      title: "Canada Visa",
      cards: [
        {
          title: "Student Visa",
          desc: "This visa is for international students aiming to study in Canada. It covers a range of educational institutions, from schools to universities, offering world-class education in a multicultural environment.",
          image: canadaImg,
          link: "/visa-details/canada-student",
        },
        {
          title: "Worker Visa",
          desc: "This visa is for individuals with a job offer in Canada in a qualifying skilled occupation. It enables you to live and work in Canada, contributing your skills to the Canadian economy.",
          image: canadaImg,
          link: "/visa-details/canada-work",
        },
        {
          title: "Permanent Residency",
          desc: "Through Express Entry and the Provincial Nominee Program (PNP), you can live and work in Canada, contributing your skills to the Canadian economy and becoming a permanent resident.",
          image: canadaImg,
          link: "/visa-details/canada-pr",
        },
        {
          title: "Visitor Visa",
          desc: "Visit Canada for leisure, tourism, or family visits with a visitor visa. It generally allows stays of up to 6 months, providing ample time to explore Canada's iconic landmarks and cultural heritage.",
          image: canadaImg,
          link: "/visa-details/canada-visitor",
        },
      ],
    },
    {
      id: "australia",
      title: "Australia Visa",
      cards: [
        {
          title: "Student Visa",
          desc: "This visa is for international students who wish to pursue their studies in Australia. It covers primary, secondary, and higher education, allowing you to experience Australia's high-quality education system.",
          image: ausImg,
          link: "/visa-details/aus-student",
        },
        {
          title: "Permanent Residency",
          desc: "Gain permanent residency in Australia, allowing you to live, work, and study indefinitely. Multiple pathways are available, including skilled migration and family sponsorship.",
          image: ausImg,
          link: "/visa-details/aus-pr",
        },
        {
          title: "Visitor Visa",
          desc: "Travel to Australia for leisure, tourism, or family visits with a visitor visa. This visa typically allows for short-term stays, giving you the chance to explore Australia's natural beauty and vibrant cities.",
          image: ausImg,
          link: "/visa-details/aus-visitor",
        },
      ],
    },
    {
      id: "usa",
      title: "USA Visa",
      cards: [
        {
          title: "Visitor Visa",
          desc: "Visit the United States for tourism, family visits, or short business trips with a visitor visa. Typically allows for stays up to 6 months, giving you ample time to experience America's diverse attractions.",
          image: usaImg,
          link: "/visa-details/usa-visitor",
        },
        {
          title: "Student Visa",
          desc: "Pursue your education in the USA with a student visa. This visa covers a range of educational levels and institutions, from language schools to universities, offering an immersive academic experience.",
          image: usaImg,
          link: "/visa-details/usa-student",
        },
        {
          title: "Citizenship",
          desc: "Gain permanent residency in USA, allowing you to live, work, and study indefinitely. Multiple pathways are available, including skilled migration and family sponsorship.",
          image: usaImg,
          link: "/visa-details/usa-citizenship",
        },
      ],
    },
    {
      id: "europe",
      title: "European Visa",
      cards: [
        {
          title: "Schengen Visitor Visa",
          desc: "Visit Europe for tourism, family visits, or short business trips with a visitor visa. Typically allows for stays up to 6 months, giving you ample time to experience Europe's diverse attractions.",
          image: euImg,
          link: "/visa-details/eu-visitor",
        },
        {
          title: "Student Visa",
          desc: "This visa is for international students who wish to pursue their studies in Europe. It covers primary, secondary, and higher education, allowing you to experience Europe's high-quality education system.",
          image: euImg,
          link: "/visa-details/eu-student",
        },
      ],
    },
  ];

  return (
    <div className="w-full">
      {/* HERO */}
      <section className="relative w-full h-[70vh] md:h-screen">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImg})` }}
        ></div>
        <div className="absolute inset-0 bg-indigo-800/40"></div>
        <div className="relative z-10 flex flex-col items-center justify-center text-center text-white h-full px-4">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4">
            Visa & Immigration Services
          </h1>
          <p className="max-w-2xl text-sm md:text-lg text-gray-200">
            Professional visa assistance for UK, USA, Canada, Europe and Australia.
          </p>
        </div>
      </section>

      {/* FLAGS */}
      <section className="bg-gray-100 py-14">
        <div className="flex flex-wrap justify-center items-center gap-8">
          {[
            { name: "UK", id: "uk", flag: ukFlag },
            { name: "USA", id: "usa", flag: usaFlag },
            { name: "Canada", id: "canada", flag: canadaFlag },
            { name: "Europe", id: "europe", flag: euFlag },
            { name: "Australia", id: "australia", flag: ausFlag },
          ].map((country) => (
            <a
              key={country.id}
              href={`#${country.id}`}
              className="flex flex-col items-center group"
            >
              <div className="relative w-24 h-24 rounded-full overflow-hidden shadow-xl group-hover:scale-110 transition duration-500">
                <img
                  src={country.flag}
                  alt={country.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-indigo-900/40 opacity-0 group-hover:opacity-100 transition"></div>
              </div>
              <p className="mt-3 font-semibold text-gray-800 group-hover:text-indigo-800 transition">
                {country.name}
              </p>
            </a>
          ))}
        </div>
      </section>

      {/* SECTIONS */}
      {sections.map((section) => (
        <Section key={section.id} {...section} />
      ))}

      <ContactSection />
    </div>
  );
};

export default VisaPage;