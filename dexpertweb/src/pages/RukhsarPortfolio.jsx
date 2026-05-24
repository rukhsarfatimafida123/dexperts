import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  ArrowRight,
  Download,
  Briefcase,
  GraduationCap,
  Code2,
  User,
} from "lucide-react";

// Optional image (replace if you have)
import rukhsarImg from "../assets/rukh.webp";
import cvFile from "../assets/RUKHSAR FATIMA CV.pdf";

// Optional CV file (add your own if available)
// import cvFile from "../assets/Rukhsar_CV.pdf";

const skills = [
  "HTML5",
  "CSS3",
  "JavaScript (ES6+)",
  "React.js",
  "Tailwind CSS",
  "PHP",
  "Python",
  "SQL",
  "Graphic Designing",
  "Video Editing",
  "Content Writing",
  "Data Entry",
];

const experience = [
  {
    role: "Freelance Full Stack Web Developer",
    company: "Self Employed",
    year: "2022 – Present",
    desc: "Working on web development, graphic design and video editing projects.",
  },
  {
    role: "Montessori Teacher & Coordinator",
    company: "Aspire Grammar School",
    year: "Oct 2022 – July 2024",
    desc: "Managed educational activities, lesson planning and classroom coordination. Awarded Best Teacher 2024.",
  },
  {
    role: "Online Quran Teacher",
    company: "Dawat-e-Islami & Home-Based",
    year: "2020 – Present",
    desc: "Teaching Quran with proper recitation and pronunciation techniques.",
  },
  {
    role: "Educational Books Designer",
    company: "Aspire Grammar School",
    year: "July 2024",
    desc: "Designed 3 educational books for Playgroup, Nursery and Kindergarten (Computer concepts).",
  },
];

const education = [
  {
    degree: "Masters in Computer Science (MCS)",
    institute: "Virtual University of Pakistan",
    year: "2020 – 2022",
  },
];

const certifications = [
  "Web Development Course – Hyperlink Computer Training Institute (Feb 2025)",
  "Best Teacher Award – Aspire Grammar School (2024)",
];

export default function RukhsarPortfolio() {
  return (
    <div className="bg-[#050816] text-white overflow-hidden relative">

      {/* Background blur */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-pink-500/20 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-500/20 blur-[120px] rounded-full"></div>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-14 items-center">

          {/* LEFT */}
          <div>
            <p className="text-pink-400 tracking-[4px] uppercase mb-6 text-sm mt-12">
              Welcome To My Portfolio
            </p>

            <h1 className="text-5xl md:text-7xl font-black pb-2">
              Rukhsar Fatima
              <span className="block bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent">
                Junior Web Developer
              </span>
            </h1>

            <p className="text-gray-400 text-lg mt-8 leading-relaxed max-w-2xl">
              Enthusiastic and hardworking Junior Web Developer with expertise in
              React.js, JavaScript, Tailwind CSS and modern web technologies.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 mt-10">

              <a
                href="#projects"
                className="px-7 py-4 rounded-2xl bg-gradient-to-r from-pink-500 to-purple-600 hover:scale-105 duration-300 font-semibold flex items-center gap-2"
              >
                View Projects <ArrowRight size={18} />
              </a>

              {<a
                href={cvFile}
                download="Rukhsar_Fatima_CV.pdf"
                className="px-7 py-4 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 duration-300 font-semibold flex items-center gap-2"
              >
                Download CV <Download size={18} />
              </a> }

            </div>

            {/* Contact */}
            <div className="flex flex-wrap gap-4 mt-10 text-gray-400 text-sm">
              <span>📞 +92 311 4085045</span>
              <span>✉️ Rukhfatima19@gmail.com</span>
              <span>📍 Jhelum, Pakistan</span>
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex justify-center">
            <div className="relative w-[320px] h-[320px] md:w-[420px] md:h-[420px]">

              <div className="absolute inset-0 rounded-[40px] bg-gradient-to-br from-pink-500 to-purple-600 rotate-6 blur-xl opacity-40"></div>

              <div className="relative h-full w-full rounded-[40px] border border-white/10 bg-white/5 overflow-hidden">
                <img
                  src={rukhsarImg}
                  alt="Rukhsar"
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
              <User className="text-pink-400" />
              <h2 className="text-4xl font-bold">About Me</h2>
            </div>

            <p className="text-gray-400 text-lg leading-relaxed">
              I am a passionate Junior Web Developer skilled in React, JavaScript,
              Tailwind CSS and PHP. I love creating clean, modern and responsive websites.
            </p>

            <div className="grid sm:grid-cols-2 gap-5 mt-10">

              <div className="p-5 rounded-3xl bg-white/5 border border-white/10">
                <Mail className="text-pink-400 mb-2" />
                <p className="text-gray-400 text-sm">Email</p>
                <p className="text-white text-sm">Rukhfatima19@gmail.com</p>
              </div>

              <div className="p-5 rounded-3xl bg-white/5 border border-white/10">
                <Phone className="text-pink-400 mb-2" />
                <p className="text-gray-400 text-sm">Phone</p>
                <p className="text-white text-sm">+92 311 4085045</p>
              </div>

              <div className="p-5 rounded-3xl bg-white/5 border border-white/10">
                <MapPin className="text-pink-400 mb-2" />
                <p className="text-gray-400 text-sm">Location</p>
                <p className="text-white text-sm">Jhelum, Pakistan</p>
              </div>

              <div className="p-5 rounded-3xl bg-white/5 border border-white/10">
                <Github className="text-pink-400 mb-2" />
                <p className="text-gray-400 text-sm">GitHub</p>
                <p className="text-white text-sm">rukhsarfatimafida123</p>
              </div>

            </div>
          </div>

          {/* SKILLS */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Code2 className="text-pink-400" />
              <h2 className="text-4xl font-bold">Skills</h2>
            </div>

            <div className="flex flex-wrap gap-4">
              {skills.map((skill, i) => (
                <span
                  key={i}
                  className="px-5 py-3 rounded-2xl bg-white/5 border border-white/10 text-gray-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="py-24 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">

          <div className="flex items-center gap-3 mb-10">
            <Briefcase className="text-pink-400" />
            <h2 className="text-4xl font-bold">Experience</h2>
          </div>

          <div className="space-y-6">
            {experience.map((item, i) => (
              <div key={i} className="p-7 rounded-3xl bg-white/5 border border-white/10">
                <div className="flex justify-between flex-wrap">
                  <h3 className="text-2xl font-semibold">{item.role}</h3>
                  <span className="text-pink-400">{item.year}</span>
                </div>
                <p className="text-gray-300 mt-2">{item.company}</p>
                <p className="text-gray-400 mt-3">{item.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* EDUCATION */}
      <section className="py-24 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">

          <div className="flex items-center gap-3 mb-10">
            <GraduationCap className="text-pink-400" />
            <h2 className="text-4xl font-bold">Education</h2>
          </div>

          <div className="space-y-6">
            {education.map((item, i) => (
              <div key={i} className="p-7 rounded-3xl bg-white/5 border border-white/10">
                <h3 className="text-2xl font-semibold">{item.degree}</h3>
                <p className="text-gray-400">{item.institute}</p>
                <span className="text-pink-400">{item.year}</span>
              </div>
            ))}
          </div>

          {/* Certifications */}
          <div className="mt-10 p-7 rounded-3xl bg-white/5 border border-white/10">
            <h3 className="text-2xl font-bold mb-5">Certifications</h3>
            {certifications.map((c, i) => (
              <p key={i} className="text-gray-400 border-b border-white/10 py-2">
                {c}
              </p>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}