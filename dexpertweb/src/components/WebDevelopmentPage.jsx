import React from "react";
import { motion } from "framer-motion";
import webDevBg from "../assets/banner-bg.png";
import { 
  FiGlobe, 
  FiLayers, 
  FiTrendingUp, 
  FiFileText, 
  FiBriefcase, 
  FiSliders,
  FiTerminal,
  FiExternalLink,
  FiGithub
} from "react-icons/fi";

const projects = [
  {
    id: "ambitious-traders",
    title: "Ambitious Traders",
    description: "Premium financial trading platform with real-time data tracking and interactive UI analytics.",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=1200&auto=format&fit=crop",
    tech: ["React", "Tailwind", "Charts", "FinTech"],
    live: "/demo/ambitious-traders",
    github: "#",
  },
  {
    id: "rainbow-lense",
    title: "Rainbow Lense",
    description: "Creative photography studio platform displaying advanced image portfolios and styling modules.",
    image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=1200&auto=format&fit=crop",
    tech: ["React", "Framer Motion", "UI/UX"],
    live: "/demo/rainbow-lense",
    github: "#",
  },
  {
    id: "civil-eng-pro",
    title: "Civil Eng Pro",
    description: "Industrial-grade portal built for structural project tracking, blueprints, and client conversions.",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1200&auto=format&fit=crop",
    tech: ["React", "Tailwind", "Responsive"],
    live: "/demo/civil-eng-pro",
    github: "#",
  },
  {
    id: "smart-pdf-tools",
    title: "Smart PDF Tools",
    description: "Web application featuring dynamic browser-side document optimization, compression, and handling.",
    image: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?q=80&w=1200&auto=format&fit=crop",
    tech: ["React", "WebAPI", "Tailwind"],
    live: "/demo/smart-pdf-tools",
    github: "#",
  },
  {
    id: "portfolio-websites",
    title: "Portfolio Websites",
    description: "High-end bespoke digital identities engineered with flawless animations for professionals.",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1200&auto=format&fit=crop",
    tech: ["React", "Framer Motion", "Creative"],
    live: "/demo/portfolio-websites",
    github: "#",
  },
  {
    id: "lms",
    title: "LMS (Learning Management System)",
    description: "Comprehensive modern academy ecosystem handling courses, interactive user dashboards, and metrics.",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=1200&auto=format&fit=crop",
    tech: ["React", "Node.js", "Database", "Tailwind"],
    live: "/demo/lms",
    github: "#",
  },
];

const services = [
  { 
    name: "Enterprise Architecture", 
    icon: FiTerminal, 
    desc: "Engineered scalable web systems tailored to maximize performance and conversion rates." 
  },
  { 
    name: "E-Commerce Ecosystems", 
    icon: FiLayers, 
    desc: "Seamless virtual storefronts boasting rich checkout structures and refined asset flows." 
  },
  { 
    name: "Bespoke Digital Portfolios", 
    icon: FiBriefcase, 
    desc: "Polished personal web profiles that frame your corporate value with luxury aesthetics." 
  },
  { 
    name: "High-Converting Landers", 
    icon: FiGlobe, 
    desc: "Laser-focused layouts architected to capture data and dramatically elevate conversion metrics." 
  },
  { 
    name: "System Refinement & Scale", 
    icon: FiSliders, 
    desc: "Replacing dated legacy scripts with clean modern React structures ready for fast deployments." 
  },
  { 
    name: "Conversion Optimization", 
    icon: FiTrendingUp, 
    desc: "Strategic audits to dramatically decrease load times and improve user-retention rates." 
  },
];

const whyChooseMe = [
  { title: "Responsive Design", icon: FiGlobe },
  { title: "Fast Performance", icon: FiTrendingUp },
  { title: "Modern UI/UX", icon: FiLayers },
  { title: "Clean Code", icon: FiTerminal },
];

const WebDevelopmentPage = () => {
  return (
    <div className="w-full bg-white">

      {/* HERO SECTION */}
      <section
        className="relative w-full h-[70vh] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${webDevBg})` }}
      >
        <div className="absolute inset-0 bg-neutral-950/40"></div>

        <div className="relative z-10 text-center px-6">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-6xl font-bold text-white tracking-tight"
          >
            Web Development
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="mt-6 text-lg md:text-xl max-w-3xl mx-auto text-gray-200 font-light"
          >
            Modern, responsive and professional websites designed
            to help businesses grow online.
          </motion.p>

          <motion.a
            href="#projects"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="inline-block mt-10 px-8 py-4 rounded-2xl bg-gradient-to-r from-red-600 to-indigo-950 text-white font-semibold hover:scale-105 transition-all duration-300 shadow-lg shadow-red-600/20"
          >
            View Projects
          </motion.a>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="py-24 px-6 md:px-12 lg:px-20 bg-slate-50">
        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              <span className="text-indigo-950">Professional</span>
              <span className="text-red-600"> Capabilities</span>
            </h2>

            <p className="text-gray-600 max-w-2xl mx-auto text-lg font-light">
              High-tier web architecture crafted around pixel-perfect layouts, immaculate system scaling, and premium aesthetic values.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <motion.div
                  key={index}
                  whileHover={{ y: -8 }}
                  className="bg-indigo-950 rounded-2xl p-8 group border border-indigo-900/30 shadow-xl flex flex-col justify-between"
                >
                  <div>
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-red-600 to-rose-600 flex items-center justify-center mb-8 shadow-md shadow-red-600/10">
                      <IconComponent className="text-white text-xl" />
                    </div>

                    <h3 className="text-2xl font-bold mb-4 text-white tracking-tight">
                      {service.name}
                    </h3>

                    <p className="text-gray-400 leading-relaxed text-sm font-light">
                      {service.desc}
                    </p>
                  </div>
                  <div className="mt-6 w-full h-[1px] bg-indigo-900/50 group-hover:bg-red-500/30 transition-colors"></div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section
        id="projects"
        className="py-24 px-6 md:px-12 lg:px-20 bg-white"
      >
        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              <span className="text-indigo-950">Featured</span>
              <span className="text-red-600"> Projects</span>
            </h2>

            <p className="text-gray-600 max-w-2xl mx-auto text-lg font-light">
              A curated selection of modern production engines and applications I have designed and deployed.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                className="bg-indigo-950 rounded-3xl overflow-hidden group border border-indigo-900/50 shadow-xl"
              >
                {/* Image */}
                <div className="overflow-hidden relative h-72">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-indigo-950/10 group-hover:bg-transparent transition-colors duration-500"></div>
                </div>

                {/* Content */}
                <div className="p-8">

                  {/* Tech Badges */}
                  <div className="flex flex-wrap gap-3 mb-5">
                    {project.tech.map((item, i) => (
                      <span
                        key={i}
                        className="px-4 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-medium tracking-wide uppercase"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-3xl font-bold mb-4 text-white group-hover:text-red-500 transition-colors tracking-tight">
                    {project.title}
                  </h3>

                  <p className="text-gray-400 leading-relaxed mb-8 font-light text-sm">
                    {project.description}
                  </p>

                  {/* Buttons */}
                  <div className="flex gap-4">
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 rounded-xl bg-gradient-to-r from-red-600 to-rose-600 text-white hover:scale-105 transition-all duration-300 font-semibold shadow-lg shadow-red-600/20 flex items-center gap-2 text-sm"
                    >
                      <FiExternalLink /> View Project
                    </a>

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 rounded-xl border border-red-500/40 text-red-400 hover:bg-red-500 hover:text-white transition-all duration-300 font-semibold flex items-center gap-2 text-sm"
                    >
                      <FiGithub /> GitHub
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE ME */}
      <section className="py-24 px-6 md:px-12 lg:px-20 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="bg-indigo-950 rounded-[40px] p-10 md:p-16 border border-indigo-900/50 shadow-2xl">

            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
                <span className="text-white">Why Choose</span>
                <span className="text-red-500"> Me</span>
              </h2>

              <p className="text-gray-400 max-w-2xl mx-auto font-light">
                Websites designed with modern aesthetics, performance and user experience in mind.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {whyChooseMe.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-r from-red-600 to-rose-500 flex items-center justify-center mb-6 shadow-lg shadow-red-600/10">
                      <IconComponent className="text-white text-3xl" />
                    </div>

                    <h3 className="text-xl font-semibold mb-3 text-white tracking-tight">
                      {item.title}
                    </h3>

                    <p className="text-gray-400 font-light text-sm">
                      Professional web solutions optimized for all devices.
                    </p>
                  </div>
                );
              })}
            </div>

          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="pb-24 px-6 md:px-12 lg:px-20 bg-slate-50">
        <div className="max-w-5xl mx-auto">
          <div className="bg-indigo-950 rounded-[40px] px-8 py-20 text-center border border-indigo-900/50 shadow-2xl">

            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white tracking-tight">
              Let's Build Something Amazing
            </h2>

            <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-10 font-light">
              Looking for a modern and responsive website for your business or personal brand? Let's work together.
            </p>

            <a
              href="/contact"
              className="inline-block px-10 py-5 rounded-2xl bg-gradient-to-r from-red-600 to-rose-600 text-white font-semibold hover:scale-105 transition-all duration-300 shadow-xl shadow-red-600/30"
            >
              Start Your Project
            </a>

          </div>
        </div>
      </section>

    </div>
  );
};

export default WebDevelopmentPage;