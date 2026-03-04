import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

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

/* ================= CARD COMPONENT ================= */
const VisaCard = ({ title, desc, image, link }) => {
  const navigate = useNavigate();
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -20;
    setTilt({ x, y });
  };

  const handleMouseLeave = () => setTilt({ x: 0, y: 0 });

  return (
    <motion.div
      className="group relative rounded-2xl overflow-hidden p-[1px] bg-gradient-to-br from-indigo-800 via-indigo-900 to-indigo-950 h-full"
      style={{ perspective: 1000 }}
    >
      {/* Glow */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-700 blur-xl"></div>

      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: `rotateY(${tilt.x}deg) rotateX(${tilt.y}deg)`,
        }}
        className="relative bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl p-4 flex flex-col justify-between h-full cursor-pointer"
      >
        <img
          src={image}
          alt={title}
          className="w-full h-32 object-cover rounded-xl mb-3"
        />
        
        {/* Content with fixed height to maintain consistency */}
        <div className="flex flex-col flex-1">
          <h3 className="text-lg font-semibold mb-1 text-white tracking-wide min-h-[48px]">
            {title}
          </h3>
          
          {/* Description with fixed height and scroll if needed */}
          <div className="flex-1 mb-3">
            <p className="text-xs text-indigo-200 leading-relaxed line-clamp-3">
              {desc}
            </p>
          </div>

          <button
            onClick={() => navigate(link)}
            className="mt-auto relative px-4 py-1.5 rounded-full bg-indigo-600 hover:bg-indigo-500 transition-all duration-300 text-white text-sm font-medium overflow-hidden w-full"
          >
            <span className="relative z-10">Read More</span>
            <span className="absolute inset-0 bg-gradient-to-r from-purple-500 to-indigo-600 opacity-0 group-hover:opacity-100 transition"></span>
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};

/* ================= SECTION COMPONENT ================= */
const Section = ({ id, title, cards }) => {
  return (
    <section id={id} className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-indigo-900 mb-12">
          {title}
        </h2>

        {/* Cards centered in a grid */}
        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl">
            {cards.map((card, idx) => (
              <div key={idx} className="w-[300px] h-[400px]">
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
              <div className="relative w-24 h-24 rounded-full overflow-hidden shadow-xl  group-hover:scale-110 transition duration-500">
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