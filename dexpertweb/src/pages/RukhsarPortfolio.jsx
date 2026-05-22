// RukhsarPortfolio.jsx
import React, { useState } from 'react';
import { 
  FaCode, FaLaptopCode, FaMobileAlt, FaPalette, 
  FaVideo, FaPenFancy, FaDatabase, FaPython, FaPhp,
  FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaGithub,
  FaReact, FaHtml5, FaCss3Alt, FaJs
} from 'react-icons/fa';
import { SiTailwindcss } from 'react-icons/si';

function RukhsarPortfolio() {
  const [activeTab, setActiveTab] = useState('about');

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Hero Section with Code Pattern Background */}
      <div className="relative bg-gradient-to-r from-indigo-900 to-purple-800 text-white overflow-hidden">
        {/* Code Pattern Texture */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ctext x='10' y='20' fill='white' font-size='12'%3E%3C/text%3E%3Ctext x='30' y='40' fill='white' font-size='10'%3E%3C/text%3E%3Ctext x='50' y='60' fill='white' font-size='14'%3E%3C/text%3E%3Ctext x='70' y='30' fill='white' font-size='11'%3E%3C/text%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '30px'
        }}></div>
        
        {/* Code Characters Decoration */}
        <div className="absolute inset-0 opacity-5 font-mono text-4xl overflow-hidden">
          <div className="absolute top-10 left-10">{'<html>'}</div>
          <div className="absolute top-32 right-20">{'<body>'}</div>
          <div className="absolute bottom-20 left-40">{'</div>'}</div>
          <div className="absolute bottom-10 right-10">{'<React />'}</div>
          <div className="absolute top-1/2 left-1/4">{'{{ }}'}</div>
          <div className="absolute top-2/3 right-1/3">{'() =>'}</div>
          <div className="absolute top-20 left-1/2">{'const'}</div>
          <div className="absolute bottom-32 left-20">{'<React />'}</div>
          <div className="absolute bottom-1/2 right-1/4">{'function()'}</div>
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="text-center">
            <div className="inline-block p-1 bg-white/20 rounded-full mb-4">
              <div className="w-28 h-28 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-5xl font-bold text-white">
                RF
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-3">Rukhsar Fatima</h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-4">&lt;Junior Web Developer /&gt;</p>
            <div className="flex flex-wrap justify-center gap-4 text-blue-100 text-sm md:text-base">
              <span className="flex items-center gap-2">📞 +92 311 4085045</span>
              <span className="flex items-center gap-2">✉️ Rukhfatima19@gmail.com</span>
              <span className="flex items-center gap-2">📍 Purani Jhelum, Pakistan</span>
            </div>
          </div>
        </div>
        
        {/* Wave SVG */}
        <div className="absolute bottom-0 w-full">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[50px]">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" fill="#111827" opacity="1"></path>
          </svg>
        </div>
      </div>

      {/* Navigation Tabs - Professional Icons */}
      <div className="bg-gray-800 sticky top-0 z-10 shadow-lg">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center space-x-2 md:space-x-6">
            {[
              { id: 'about', label: 'About', icon: <FaCode className="inline mr-1" size={14} /> },
              { id: 'skills', label: 'Skills', icon: <FaLaptopCode className="inline mr-1" size={14} /> },
              { id: 'experience', label: 'Experience', icon: <FaDatabase className="inline mr-1" size={14} /> },
              { id: 'projects', label: 'Projects', icon: <FaMobileAlt className="inline mr-1" size={14} /> },
              { id: 'contact', label: 'Contact', icon: <FaEnvelope className="inline mr-1" size={14} /> }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-3 md:py-4 px-3 md:px-6 font-medium transition-all duration-300 border-b-2 text-sm md:text-base ${
                  activeTab === tab.id
                    ? 'border-blue-500 text-blue-400'
                    : 'border-transparent text-gray-400 hover:text-gray-200'
                }`}
              >
                <span className="hidden md:inline">{tab.icon} {tab.label}</span>
                <span className="md:hidden">{tab.icon}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* About Tab - Updated with exact text from picture */}
        {activeTab === 'about' && (
          <div className="animate-fadeIn">
            <div className="bg-gray-800 rounded-2xl shadow-2xl overflow-hidden">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-4">
                <h2 className="text-2xl font-bold text-white">About Me</h2>
              </div>
              <div className="p-6 md:p-8">
                <p className="text-gray-300 text-lg leading-relaxed mb-4">
                  I am an enthusiastic and hardworking Junior Web Developer with a Master's degree in Computer Science from Virtual University of Pakistan.
                </p>
                <p className="text-gray-300 text-lg leading-relaxed mb-4">
                  I specialize in building responsive and modern websites using technologies like <span className="text-blue-400 font-semibold">HTML, CSS, PHP, JavaScript, React and Tailwind CSS</span>. I enjoy designing clean and user-friendly interfaces that improve user experience.
                </p>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Along with web development, I also have experience in <span className="text-blue-400 font-semibold">graphic designing, video editing, and content writing</span>. I am passionate about learning new technologies and working in collaborative environments where I can continue to grow as a developer.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Skills Tab - Professional Icons */}
        {activeTab === 'skills' && (
          <div className="animate-fadeIn">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Technical Skills */}
              <div className="bg-gray-800 rounded-2xl shadow-2xl overflow-hidden">
                <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-4">
                  <h2 className="text-2xl font-bold text-white">Technical Skills</h2>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-blue-400 mb-3 flex items-center gap-2"><FaReact /> Frontend Development</h3>
                  <div className="space-y-3 mb-6">
                    {[
                      { name: 'HTML5', icon: <FaHtml5 className="text-orange-500" />, percent: 90 },
                      { name: 'CSS3', icon: <FaCss3Alt className="text-blue-500" />, percent: 90 },
                      { name: 'JavaScript (ES6+)', icon: <FaJs className="text-yellow-500" />, percent: 85 },
                      { name: 'React.js', icon: <FaReact className="text-cyan-500" />, percent: 90 },
                      { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-teal-500" />, percent: 95 }
                    ].map(skill => (
                      <div key={skill.name}>
                        <div className="flex justify-between text-gray-300 text-sm mb-1">
                          <span className="flex items-center gap-2">{skill.icon} {skill.name}</span>
                          <span>{skill.percent}%</span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-2">
                          <div className="bg-blue-500 h-2 rounded-full" style={{ width: `${skill.percent}%` }}></div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <h3 className="text-lg font-semibold text-blue-400 mb-3 flex items-center gap-2"><FaDatabase /> Backend & Database</h3>
                  <div className="space-y-3">
                    {[
                      { name: 'PHP', icon: <FaPhp className="text-purple-500" />, percent: 75 },
                      { name: 'Python', icon: <FaPython className="text-green-500" />, percent: 75 },
                      { name: 'SQL', icon: <FaDatabase className="text-blue-400" />, percent: 75 }
                    ].map(skill => (
                      <div key={skill.name}>
                        <div className="flex justify-between text-gray-300 text-sm mb-1">
                          <span className="flex items-center gap-2">{skill.icon} {skill.name}</span>
                          <span>{skill.percent}%</span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-2">
                          <div className="bg-blue-500 h-2 rounded-full" style={{ width: `${skill.percent}%` }}></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Soft & Creative Skills */}
              <div className="space-y-6">
                <div className="bg-gray-800 rounded-2xl shadow-2xl overflow-hidden">
                  <div className="bg-gradient-to-r from-purple-600 to-purple-700 px-6 py-4">
                    <h2 className="text-2xl font-bold text-white">Soft Skills</h2>
                  </div>
                  <div className="p-6">
                    <div className="flex flex-wrap gap-3">
                      {['Communication', 'Teamwork', 'Problem Solving', 'Time Management', 'Creativity', 'Attention to Detail'].map(skill => (
                        <span key={skill} className="px-4 py-2 bg-gray-700 text-gray-200 rounded-lg text-sm font-medium">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="bg-gray-800 rounded-2xl shadow-2xl overflow-hidden">
                  <div className="bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-4">
                    <h2 className="text-2xl font-bold text-white">Creative Skills</h2>
                  </div>
                  <div className="p-6">
                    <div className="flex flex-wrap gap-3">
                      {[
                        { name: 'Graphic Designing', icon: <FaPalette /> },
                        { name: 'Video Editing', icon: <FaVideo /> },
                        { name: 'Content Writing', icon: <FaPenFancy /> },
                        { name: 'Data Entry', icon: <FaDatabase /> }
                      ].map(skill => (
                        <span key={skill.name} className="px-4 py-2 bg-gray-700 text-gray-200 rounded-lg text-sm font-medium flex items-center gap-2">
                          {skill.icon} {skill.name}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="bg-gray-800 rounded-2xl shadow-2xl overflow-hidden">
                  <div className="bg-gradient-to-r from-green-600 to-teal-600 px-6 py-4">
                    <h2 className="text-2xl font-bold text-white">Certifications</h2>
                  </div>
                  <div className="p-6 space-y-3">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">🏆</span>
                      <div>
                        <p className="font-semibold text-white">Web Development Course</p>
                        <p className="text-sm text-gray-400">Hyperlink Computer Training Institute (Feb 2025)</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">⭐</span>
                      <div>
                        <p className="font-semibold text-white">Best Teacher Award</p>
                        <p className="text-sm text-gray-400">Aspire Grammar School (2024)</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Experience Tab */}
        {activeTab === 'experience' && (
          <div className="animate-fadeIn">
            <div className="bg-gray-800 rounded-2xl shadow-2xl overflow-hidden">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-4">
                <h2 className="text-2xl font-bold text-white">Work Experience</h2>
              </div>
              <div className="p-6 space-y-6">
                <div className="border-l-4 border-blue-500 pl-4">
                  <div className="flex flex-wrap justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold text-white">Full Stack Web Developer (Freelance)</h3>
                    <span className="text-sm text-gray-400 bg-gray-700 px-3 py-1 rounded-full">2022 - Present</span>
                  </div>
                  <p className="text-gray-400">Working as a freelancer on various web development, graphic design & video editing projects</p>
                </div>

                <div className="border-l-4 border-purple-500 pl-4">
                  <div className="flex flex-wrap justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold text-white">Montessori Teacher & Coordinator</h3>
                    <span className="text-sm text-gray-400 bg-gray-700 px-3 py-1 rounded-full">Oct 2022 - July 2024</span>
                  </div>
                  <p className="text-purple-400 font-medium">Aspire Grammar School</p>
                  <ul className="list-disc list-inside text-gray-400 mt-2 space-y-1">
                    <li>Managed and coordinated educational activities for Montessori students</li>
                    <li>Developed lesson plans and facilitated engaging learning sessions</li>
                    <li>Recognized as "Best Teacher" (2024)</li>
                  </ul>
                </div>

                <div className="border-l-4 border-green-500 pl-4">
                  <div className="flex flex-wrap justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold text-white">Online Quran Teacher</h3>
                    <span className="text-sm text-gray-400 bg-gray-700 px-3 py-1 rounded-full">2020 - Present</span>
                  </div>
                  <p className="text-gray-400">Home-Based & Madrisa Tul Madina Online Dawat e Islami</p>
                  <p className="text-gray-400 mt-1">Teaching Quran with focus on proper recitation techniques and pronunciation</p>
                </div>

                <div className="border-l-4 border-yellow-500 pl-4">
                  <div className="flex flex-wrap justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold text-white">Educational Books Designer</h3>
                    <span className="text-sm text-gray-400 bg-gray-700 px-3 py-1 rounded-full">July 2024</span>
                  </div>
                  <p className="text-gray-400">Developed three educational books for Playgroup, Nursery, and Kindergarten focused on computing concepts at Aspire Grammar School</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-800 rounded-2xl shadow-2xl overflow-hidden mt-6">
              <div className="bg-gradient-to-r from-indigo-600 to-blue-600 px-6 py-4">
                <h2 className="text-2xl font-bold text-white">Education</h2>
              </div>
              <div className="p-6">
                <div className="flex flex-wrap justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold text-white">Masters in Computer Science (MCS)</h3>
                  <span className="text-sm text-gray-400 bg-gray-700 px-3 py-1 rounded-full">2020 - 2022</span>
                </div>
                <p className="text-purple-400 font-medium">Virtual University of Pakistan</p>
                <p className="text-gray-400 mt-2">Completed a 2-year MCS program with focus on software development and computer science fundamentals.</p>
              </div>
            </div>
          </div>
        )}

        {/* Projects Tab */}
        {activeTab === 'projects' && (
          <div className="animate-fadeIn">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-800 rounded-2xl shadow-2xl overflow-hidden md:col-span-2">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-4">
                  <h2 className="text-2xl font-bold text-white">Featured Project</h2>
                </div>
                <div className="p-6">
                  <div className="bg-gray-700/50 rounded-xl p-6">
                    <h3 className="text-2xl font-bold text-white mb-2">Wedding Dress Store</h3>
                    <p className="text-blue-400 mb-3">June 2021 - August 2021</p>
                    <p className="text-gray-300 mb-4">
                      Developed and managed a full-featured online store for wedding dresses with 5+ mini projects.
                      Built with modern web technologies ensuring responsive design and smooth user experience.
                    </p>
                    <a 
                      href="https://github.com/rukhsarfatimafida123/wed-dress-store-5-mini-projects" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-gray-700 hover:bg-gray-600 text-white px-5 py-2 rounded-lg transition-colors"
                    >
                      <FaGithub /> View on GitHub →
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-gray-800 rounded-2xl shadow-2xl overflow-hidden">
                <div className="bg-gradient-to-r from-green-600 to-teal-600 px-6 py-4">
                  <h2 className="text-xl font-bold text-white">Mini Projects</h2>
                </div>
                <div className="p-6">
                  <div className="space-y-3">
                    {['Weather App', 'Todo List', 'Calculator', 'Portfolio Website', 'Landing Page'].map(project => (
                      <div key={project} className="flex items-center justify-between py-2 border-b border-gray-700">
                        <span className="text-gray-300 flex items-center gap-2"><FaLaptopCode size={14} /> {project}</span>
                        <span className="text-xs text-gray-500">React + Tailwind</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="bg-gray-800 rounded-2xl shadow-2xl overflow-hidden">
                <div className="bg-gradient-to-r from-pink-600 to-rose-600 px-6 py-4">
                  <h2 className="text-xl font-bold text-white">Design Work</h2>
                </div>
                <div className="p-6">
                  <div className="space-y-3">
                    <div className="py-2 border-b border-gray-700">
                      <span className="text-gray-300 font-medium flex items-center gap-2"><FaPalette /> 3 Educational Books</span>
                      <p className="text-sm text-gray-500 mt-1">For Playgroup, Nursery & Kindergarten - Computing Concepts</p>
                    </div>
                    <div className="py-2 border-b border-gray-700">
                      <span className="text-gray-300 font-medium flex items-center gap-2"><FaVideo /> Video Editing Projects</span>
                      <p className="text-sm text-gray-500 mt-1">Freelance video editing for various clients</p>
                    </div>
                    <div className="py-2">
                      <span className="text-gray-300 font-medium flex items-center gap-2"><FaPenFancy /> Graphic Design</span>
                      <p className="text-sm text-gray-500 mt-1">Logos, banners, and social media posts</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Contact Tab */}
        {activeTab === 'contact' && (
          <div className="animate-fadeIn">
            <div className="bg-gray-800 rounded-2xl shadow-2xl overflow-hidden">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-4">
                <h2 className="text-2xl font-bold text-white">Get In Touch</h2>
              </div>
              <div className="p-6 md:p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-4">Contact Information</h3>
                    <div className="space-y-4">
                      <div className="flex items-center gap-4 text-gray-300">
                        <FaPhoneAlt className="text-blue-400" />
                        <span>+92 (0)311 4085045</span>
                      </div>
                      <div className="flex items-center gap-4 text-gray-300">
                        <FaEnvelope className="text-blue-400" />
                        <span>Rukhfatima19@gmail.com</span>
                      </div>
                      <div className="flex items-center gap-4 text-gray-300">
                        <FaMapMarkerAlt className="text-blue-400" />
                        <span>Purani Jhelum, Sarai Alamgir, Pakistan</span>
                      </div>
                      <div className="flex items-center gap-4 text-gray-300">
                        <FaGithub className="text-blue-400" />
                        <span>github.com/rukhsarfatimafida123</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-700/30 rounded-xl p-5">
                    <h3 className="text-xl font-semibold text-white mb-3">Availability</h3>
                    <p className="text-gray-300 mb-4">
                      I'm currently looking for <span className="text-green-400 font-semibold">Frontend Developer</span> opportunities.
                      Open to full-time, part-time, and freelance work.
                    </p>
                    <div className="inline-block bg-green-500/20 text-green-400 px-4 py-2 rounded-full text-sm">
                      ✓ Available for work
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>

      <footer className="bg-gray-800 border-t border-gray-700 py-6 mt-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-gray-400 text-sm">© 2025 Rukhsar Fatima - Junior Frontend Web Developer</p>
          <p className="text-gray-500 text-xs mt-2">Built with React & Tailwind CSS</p>
        </div>
      </footer>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}

export default RukhsarPortfolio;