import React from "react";
import { motion } from "framer-motion";
import webDevBg from "../assets/banner-bg.png";

const projects = [
  {
    title: "Wedding Dress Store",
    description:
      "Modern e-commerce website with elegant UI and responsive shopping experience.",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1200&auto=format&fit=crop",
    tech: ["React", "Tailwind", "Responsive"],
    live: "#",
    github: "https://github.com/rukhsarfatimafida123/wed-dress-store",
  },
  {
    title: "Portfolio Website",
    description:
      "Creative portfolio website with smooth animations and modern UI design.",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop",
    tech: ["React", "UI/UX", "Animations"],
    live: "#",
    github: "#",
  },
  {
    title: "Business Landing Page",
    description:
      "Professional landing page built for branding and client conversions.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
    tech: ["HTML", "CSS", "JavaScript"],
    live: "#",
    github: "#",
  },
  {
    title: "Task Manager App",
    description:
      "Responsive task manager application with modern dashboard interface.",
    image:
      "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=1200&auto=format&fit=crop",
    tech: ["React", "Local Storage", "Tailwind"],
    live: "#",
    github: "#",
  },
];

const services = [
  "Responsive Websites",
  "E-Commerce Stores",
  "Portfolio Websites",
  "Landing Pages",
  "Modern UI/UX",
  "Website Redesign",
];

const WebDevelopmentPage = () => {
  return (
    <div className="w-full text-white">

      {/* HERO SECTION */}
      <section
        className="relative w-full h-[70vh] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${webDevBg})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Content */}
        <div className="relative z-10 text-center px-6">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-6xl font-bold"
          >
            Web Development
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="mt-6 text-lg md:text-xl max-w-3xl mx-auto text-gray-200"
          >
            Modern, responsive and professional websites designed
            to help businesses grow online.
          </motion.p>

          <motion.a
            href="#projects"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="inline-block mt-10 px-8 py-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-indigo-500 font-semibold hover:scale-105 transition-all duration-300 glow"
          >
            View Projects
          </motion.a>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="py-24 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6">
              My
              <span className="text-cyan-400"> Services</span>
            </h2>

            <p className="text-gray-400 max-w-2xl mx-auto">
              Professional web development services with clean UI,
              responsive design and modern user experience.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                className="glass rounded-3xl p-8 group"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-cyan-500 to-indigo-500 flex items-center justify-center text-3xl mb-6 group-hover:rotate-6 transition-transform">
                  💻
                </div>

                <h3 className="text-2xl font-semibold mb-4">
                  {service}
                </h3>

                <p className="text-gray-400 leading-relaxed">
                  High-quality modern websites optimized for all devices.
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section
        id="projects"
        className="py-24 px-6 md:px-12 lg:px-20"
      >
        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6">
              Featured
              <span className="text-cyan-400"> Projects</span>
            </h2>

            <p className="text-gray-400 max-w-2xl mx-auto">
              Some modern websites and applications I have designed and developed.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10">

            {projects.map((project, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                className="glass rounded-3xl overflow-hidden group"
              >

                {/* Image */}
                <div className="overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>

                {/* Content */}
                <div className="p-8">

                  {/* Tech */}
                  <div className="flex flex-wrap gap-3 mb-5">
                    {project.tech.map((item, i) => (
                      <span
                        key={i}
                        className="px-4 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/20 text-cyan-300 text-sm"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-3xl font-bold mb-4 group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-gray-400 leading-relaxed mb-8">
                    {project.description}
                  </p>

                  {/* Buttons */}
                  <div className="flex gap-4">

                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-500 hover:scale-105 transition-all duration-300 font-semibold"
                    >
                      Live Demo
                    </a>

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 rounded-xl border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white transition-all duration-300 font-semibold"
                    >
                      GitHub
                    </a>

                  </div>
                </div>

              </motion.div>
            ))}

          </div>
        </div>
      </section>

      {/* WHY CHOOSE ME */}
      <section className="py-24 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">

          <div className="glass rounded-[40px] p-10 md:p-16">

            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold mb-6">
                Why Choose
                <span className="text-cyan-400"> Me</span>
              </h2>

              <p className="text-gray-400 max-w-2xl mx-auto">
                Websites designed with modern aesthetics,
                performance and user experience in mind.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

              {[
                "Responsive Design",
                "Fast Performance",
                "Modern UI/UX",
                "Clean Code",
              ].map((item, index) => (
                <div
                  key={index}
                  className="text-center"
                >
                  <div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-r from-cyan-500 to-indigo-500 flex items-center justify-center text-3xl mb-6">
                    ✨
                  </div>

                  <h3 className="text-xl font-semibold mb-3">
                    {item}
                  </h3>

                  <p className="text-gray-400">
                    Professional web solutions optimized for all devices.
                  </p>
                </div>
              ))}

            </div>

          </div>

        </div>
      </section>

      {/* CTA SECTION */}
      <section className="pb-24 px-6 md:px-12 lg:px-20">
        <div className="max-w-5xl mx-auto">

          <div className="glass rounded-[40px] px-8 py-20 text-center">

            <h2 className="text-5xl font-bold mb-8">
              Let’s Build Something Amazing
            </h2>

            <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-10">
              Looking for a modern and responsive website for your
              business or personal brand? Let’s work together.
            </p>

            <a
              href="/contact"
              className="inline-block px-10 py-5 rounded-2xl bg-gradient-to-r from-cyan-500 to-indigo-500 font-semibold hover:scale-105 transition-all duration-300 glow"
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