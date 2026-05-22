// AhmedPortfolio.jsx

import React from "react";
import {
  Download,
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  ExternalLink,
  ArrowRight,
  Briefcase,
  GraduationCap,
  Code2,
  User,
} from "lucide-react";

const skills = [
  "React JS",
  "Vite",
  "Tailwind CSS",
  "JavaScript",
  "HTML5",
  "CSS3",
  "Node JS",
  "Express JS",
  "MongoDB",
  "Firebase",
  "Git",
  "GitHub",
  "Responsive Design",
];

const projects = [
  {
    title: "Visa Consultancy Website",
    desc: "Modern responsive visa consultancy platform with smooth UI, detailed visa pages and premium user experience.",
    tech: ["React", "Tailwind", "Vite"],
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Organic Cosmetics Brand",
    desc: "Elegant branding and ecommerce experience for organic beauty and hair care products.",
    tech: ["React", "Tailwind", "UI/UX"],
    image:
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Business Landing Page",
    desc: "Professional landing page focused on conversions, responsiveness and clean animations.",
    tech: ["React", "Framer Motion", "Tailwind"],
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop",
  },
];

const experience = [
  {
    role: "Frontend Developer",
    company: "Freelance",
    year: "2024 - Present",
    desc: "Building responsive and modern websites using React, Vite and Tailwind CSS.",
  },
  {
    role: "UI Designer",
    company: "Remote Projects",
    year: "2023 - 2024",
    desc: "Designed clean and professional user interfaces focused on user experience.",
  },
];

const education = [
  {
    degree: "BS / Graduation",
    institute: "Your University Name",
    year: "2020 - 2024",
  },
];

export default function AhmedPortfolio() {
  return (
    <div className="bg-[#050816] text-white overflow-hidden">
      {/* Background Blur */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-indigo-500/20 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-500/20 blur-[120px] rounded-full"></div>

      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-14 items-center">
          {/* LEFT */}
          <div>
            <p className="text-indigo-400 tracking-[4px] uppercase mb-4 text-sm">
              Welcome To My Portfolio
            </p>

            <h1 className="text-5xl md:text-7xl font-black leading-tight">
              Ahmed
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500">
                Frontend Developer
              </span>
            </h1>

            <p className="text-gray-400 text-lg mt-8 leading-relaxed max-w-2xl">
              Passionate frontend developer focused on creating modern,
              responsive and high-performance websites with clean UI and smooth
              user experiences.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 mt-10">
              <a
                href="#projects"
                className="px-7 py-4 rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-600 hover:scale-105 duration-300 font-semibold flex items-center gap-2"
              >
                View Projects
                <ArrowRight size={18} />
              </a>

              <a
                href="https://sg.docworkspace.com/d/sbRaroRwxFstdZhd_ivstufwt2fg5ej4t67"
                target="_blank"
                rel="noreferrer"
                className="px-7 py-4 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 duration-300 font-semibold flex items-center gap-2"
              >
                Download CV
                <Download size={18} />
              </a>
            </div>

            {/* Social */}
            <div className="flex items-center gap-5 mt-10">
              <a
                href="/"
                className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-indigo-500 duration-300"
              >
                <Github size={20} />
              </a>

              <a
                href="/"
                className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-indigo-500 duration-300"
              >
                <Linkedin size={20} />
              </a>

              <a
                href="mailto:ahmed@example.com"
                className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-indigo-500 duration-300"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* RIGHT */}
          <div className="relative flex justify-center">
            <div className="relative w-[320px] h-[320px] md:w-[420px] md:h-[420px]">
              <div className="absolute inset-0 rounded-[40px] bg-gradient-to-br from-indigo-500 to-purple-600 rotate-6 blur-xl opacity-40"></div>

              <div className="relative h-full w-full rounded-[40px] border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1200&auto=format&fit=crop"
                  alt="Ahmed"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-24 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <User className="text-indigo-400" />
              <h2 className="text-4xl font-bold">About Me</h2>
            </div>

            <p className="text-gray-400 leading-relaxed text-lg">
              I specialize in creating premium frontend experiences using modern
              web technologies. My focus is on clean code, responsive layouts,
              smooth animations and building websites that feel modern across
              all devices.
            </p>

            <div className="grid sm:grid-cols-2 gap-5 mt-10">
              <div className="p-5 rounded-3xl bg-white/5 border border-white/10">
                <div className="flex items-center gap-3 mb-3">
                  <Mail className="text-indigo-400" size={20} />
                  <span className="font-medium">Email</span>
                </div>

                <p className="text-gray-400 text-sm">
                  ahmed@example.com
                </p>
              </div>

              <div className="p-5 rounded-3xl bg-white/5 border border-white/10">
                <div className="flex items-center gap-3 mb-3">
                  <Phone className="text-indigo-400" size={20} />
                  <span className="font-medium">Phone</span>
                </div>

                <p className="text-gray-400 text-sm">
                  +92 300 0000000
                </p>
              </div>

              <div className="p-5 rounded-3xl bg-white/5 border border-white/10">
                <div className="flex items-center gap-3 mb-3">
                  <MapPin className="text-indigo-400" size={20} />
                  <span className="font-medium">Location</span>
                </div>

                <p className="text-gray-400 text-sm">
                  Pakistan
                </p>
              </div>

              <div className="p-5 rounded-3xl bg-white/5 border border-white/10">
                <div className="flex items-center gap-3 mb-3">
                  <ExternalLink className="text-indigo-400" size={20} />
                  <span className="font-medium">Experience</span>
                </div>

                <p className="text-gray-400 text-sm">
                  Frontend & UI Development
                </p>
              </div>
            </div>
          </div>

          {/* SKILLS */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Code2 className="text-indigo-400" />
              <h2 className="text-4xl font-bold">Skills</h2>
            </div>

            <div className="flex flex-wrap gap-4">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="px-5 py-3 rounded-2xl bg-white/5 border border-white/10 hover:border-indigo-500 duration-300 text-gray-300"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section
        id="projects"
        className="py-24 px-6 md:px-12 lg:px-20"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
            Featured Projects
          </h2>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group rounded-[32px] overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl hover:-translate-y-2 duration-500"
              >
                <div className="overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-64 w-full object-cover group-hover:scale-110 duration-700"
                  />
                </div>

                <div className="p-7">
                  <h3 className="text-2xl font-bold mb-4">
                    {project.title}
                  </h3>

                  <p className="text-gray-400 leading-relaxed mb-6">
                    {project.desc}
                  </p>

                  <div className="flex flex-wrap gap-3 mb-6">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-2 rounded-xl bg-indigo-500/10 text-indigo-300 text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <button className="flex items-center gap-2 text-indigo-400 hover:text-white duration-300">
                    View Project
                    <ArrowRight size={18} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="py-24 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14">
          {/* Experience */}
          <div>
            <div className="flex items-center gap-3 mb-10">
              <Briefcase className="text-indigo-400" />
              <h2 className="text-4xl font-bold">Experience</h2>
            </div>

            <div className="space-y-6">
              {experience.map((item, index) => (
                <div
                  key={index}
                  className="p-7 rounded-3xl bg-white/5 border border-white/10"
                >
                  <div className="flex justify-between flex-wrap gap-3 mb-3">
                    <h3 className="text-2xl font-semibold">
                      {item.role}
                    </h3>

                    <span className="text-indigo-400">
                      {item.year}
                    </span>
                  </div>

                  <p className="text-lg text-gray-300 mb-3">
                    {item.company}
                  </p>

                  <p className="text-gray-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <div className="flex items-center gap-3 mb-10">
              <GraduationCap className="text-indigo-400" />
              <h2 className="text-4xl font-bold">Education</h2>
            </div>

            <div className="space-y-6">
              {education.map((item, index) => (
                <div
                  key={index}
                  className="p-7 rounded-3xl bg-white/5 border border-white/10"
                >
                  <div className="flex justify-between flex-wrap gap-3 mb-3">
                    <h3 className="text-2xl font-semibold">
                      {item.degree}
                    </h3>

                    <span className="text-indigo-400">
                      {item.year}
                    </span>
                  </div>

                  <p className="text-gray-400">
                    {item.institute}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="py-24 px-6 md:px-12 lg:px-20">
        <div className="max-w-5xl mx-auto text-center rounded-[40px] border border-white/10 bg-white/5 backdrop-blur-xl p-10 md:p-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let’s Work Together
          </h2>

          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Available for freelance projects and modern web development work.
            Let’s create something amazing together.
          </p>

          <div className="flex flex-wrap justify-center gap-5 mt-10">
            <a
              href="mailto:ahmed@example.com"
              className="px-7 py-4 rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-600 hover:scale-105 duration-300 font-semibold"
            >
              Contact Me
            </a>

            <a
              href="https://sg.docworkspace.com/d/sbRaroRwxFstdZhd_ivstufwt2fg5ej4t67"
              target="_blank"
              rel="noreferrer"
              className="px-7 py-4 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 duration-300 font-semibold"
            >
              View CV
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}