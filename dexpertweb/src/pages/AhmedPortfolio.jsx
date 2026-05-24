// AhmedPortfolio.jsx

import React from "react";
import {
  Download,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  ArrowRight,
  Briefcase,
  GraduationCap,
  Code2,
  User,
  Building2,
} from "lucide-react";

// Images
import ahmedImg from "../assets/ahmed1.jpeg";
import blueWorldImg from "../assets/blue world.jpeg";
import capitalImg from "../assets/capital.jpeg";
import tajImg from "../assets/taj.jpeg";

// CV PDF
import cvFile from "../assets/Ahmad_Fida_Cv-E.f2.pdf";

const skills = [
  "Construction Planning",
  "Project Scheduling",
  "BOQ Preparation",
  "Quantity Surveying",
  "Site Supervision",
  "QA/QC",
  "HSE Safety Compliance",
  "Building Bye-laws",
  "AutoCAD",
  "Primavera P6",
  "MS Office",
  "Infrastructure Maintenance",
  "Technical Reporting",
];

const projects = [
  {
    title: "Blue World City",
    desc: "Worked on plot possession inspections, setback inspections and structure inspections while ensuring compliance with building by-laws.",
    tech: ["Building Control", "Inspection", "Site Management"],
    image: blueWorldImg,
  },
  {
    title: "Capital Smart City",
    desc: "Managed building handovers, infrastructure maintenance, subcontractor coordination and progress reporting for large-scale projects.",
    tech: ["QA/QC", "Infrastructure", "Site Engineering"],
    image: capitalImg,
  },
  {
    title: "Taj Residencia",
    desc: "Prepared BOQs, finalized contracts and supervised execution of Electrical Duct Line, Cat Café & Cafeteria Building.",
    tech: ["BOQ", "Execution", "Quantity Surveying"],
    image: tajImg,
  },
];

const experience = [
  {
    role: "Assistant Manager Building Control",
    company: "Blue Bricks (Blue World City), Rawalpindi",
    year: "Sep 2025 – Present",
    desc: "Conducting plot possession, setback inspections and structure inspections while ensuring compliance with construction standards and by-laws.",
  },
  {
    role: "Senior Engineer / Quantity Surveyor",
    company: "Sardar Group of Companies (Taj Residencia)",
    year: "Sep 2024 – Aug 2025",
    desc: "Prepared BOQs, finalized contract agreements and coordinated with design and planning teams for project execution.",
  },
  {
    role: "Senior Engineer / Site Engineer",
    company: "Habib Rafiq Pvt Ltd (Capital Smart City)",
    year: "Mar 2021 – Aug 2024",
    desc: "Oversaw building handovers, infrastructure maintenance, subcontractor coordination and site inspections.",
  },
  {
    role: "Site Engineer",
    company: "Friends Engineering (New Metro City)",
    year: "Jan 2020 – Feb 2021",
    desc: "Supervised sewer lines, landscaping works and managed manpower with monthly client billing.",
  },
];

const education = [
  {
    degree: "BSc Civil Engineering & Technology",
    institute: "UET Lahore",
    year: "2019",
  },
  {
    degree: "DAE Civil Engineering",
    institute: "PBTE Lahore",
    year: "2014",
  },
  {
    degree: "Matriculation (Computer Science)",
    institute: "BISE Gujranwala",
    year: "2009",
  },
];

const certifications = [
  "AutoCAD – Fauji Foundation Technical College, Jhelum",
  "MS Office – Govt. Post Graduate College, Sarai Alamgir",
  "Tile Fixing – NAVTTC Pakistan",
];

export default function AhmedPortfolio() {
  return (
    <div className="bg-[#050816] text-white overflow-hidden relative">
      {/* Background Blur */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-indigo-500/20 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-500/20 blur-[120px] rounded-full"></div>

      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-14 items-center">
          
          {/* LEFT */}
          <div>
            <p className="text-indigo-400 tracking-[4px] uppercase mb-6 text-sm mt-12">
              Welcome To My Portfolio
            </p>

            <h1 className="text-5xl md:text-7xl font-black pb-2">
              Ahmad Fida
              <span className="block bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent leading-normal">
                Civil Engineer
              </span>
            </h1>

            <p className="text-gray-400 text-lg mt-8 leading-relaxed max-w-2xl">
              Result-oriented Civil Engineer with 8 years of diversified
              experience in building construction execution, building control,
              QA/QC and infrastructure development.
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
                href={cvFile}
                download="Ahmad_Fida_CV.pdf"
                className="px-7 py-4 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 duration-300 font-semibold flex items-center gap-2"
              >
                Download CV
                <Download size={18} />
              </a>

            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-5 mt-10">

              <a
                href="https://www.linkedin.com/in/ahmad-fida-927ba0260?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-indigo-500 duration-300"
              >
                <Linkedin size={20} />
              </a>

              <a
                href="mailto:786ahmadfida@gmail.com"
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
                  src={ahmedImg}
                  alt="Ahmad Fida"
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
              Experienced Civil Engineer specializing in construction execution,
              building control, quantity surveying and infrastructure
              development. Passionate about delivering high-quality projects
              with strong technical expertise and leadership.
            </p>

            <div className="grid sm:grid-cols-2 gap-5 mt-10">

              <div className="p-5 rounded-3xl bg-white/5 border border-white/10">
                <div className="flex items-center gap-3 mb-3">
                  <Mail className="text-indigo-400" size={20} />
                  <span className="font-medium">Email</span>
                </div>

                <a
                  href="mailto:786ahmadfida@gmail.com"
                  className="text-gray-400 text-sm hover:text-indigo-400 duration-300"
                >
                  786ahmadfida@gmail.com
                </a>
              </div>

              <div className="p-5 rounded-3xl bg-white/5 border border-white/10">
                <div className="flex items-center gap-3 mb-3">
                  <Phone className="text-indigo-400" size={20} />
                  <span className="font-medium">Phone</span>
                </div>

                <p className="text-gray-400 text-sm">
                  +92 312 5529671
                </p>
              </div>

              <div className="p-5 rounded-3xl bg-white/5 border border-white/10">
                <div className="flex items-center gap-3 mb-3">
                  <MapPin className="text-indigo-400" size={20} />
                  <span className="font-medium">Location</span>
                </div>

                <p className="text-gray-400 text-sm">
                  Rawalpindi, Pakistan
                </p>
              </div>

              <div className="p-5 rounded-3xl bg-white/5 border border-white/10">
                <div className="flex items-center gap-3 mb-3">
                  <Building2 className="text-indigo-400" size={20} />
                  <span className="font-medium">Experience</span>
                </div>

                <p className="text-gray-400 text-sm">
                  8 Years Professional Experience
                </p>
              </div>

            </div>
          </div>

          {/* SKILLS */}
          <div>

            <div className="flex items-center gap-3 mb-6">
              <Code2 className="text-indigo-400" />
              <h2 className="text-4xl font-bold">Core Skills</h2>
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
            Major Projects
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

                  <div className="flex flex-wrap gap-3">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-2 rounded-xl bg-indigo-500/10 text-indigo-300 text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

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

          {/* EDUCATION */}
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

            {/* Certifications */}
            <div className="mt-10 p-7 rounded-3xl bg-white/5 border border-white/10">

              <h3 className="text-2xl font-bold mb-5">
                Certifications
              </h3>

              <div className="space-y-4">

                {certifications.map((cert, index) => (
                  <div
                    key={index}
                    className="text-gray-400 border-b border-white/10 pb-3"
                  >
                    {cert}
                  </div>
                ))}

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="py-24 px-6 md:px-12 lg:px-20">

        <div className="max-w-5xl mx-auto text-center rounded-[40px] border border-white/10 bg-white/5 backdrop-blur-xl p-10 md:p-16">

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let’s Build Something Great
          </h2>

          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Available for civil engineering, construction supervision,
            infrastructure and building control projects.
          </p>

          <div className="flex flex-wrap justify-center gap-5 mt-10">

            <a
              href="https://wa.me/923125529671"
              target="_blank"
              rel="noreferrer"
              className="px-7 py-4 rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-600 hover:scale-105 duration-300 font-semibold"
            >
              Contact Me
            </a>

            <a
              href={cvFile}
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