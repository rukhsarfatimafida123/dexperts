import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  PenTool, 
  Palette, 
  FileText, 
  HardHat, 
  ArrowRight,
  ExternalLink,
  Clock,
  Github,
  Linkedin,
  Twitter,
  Mail
} from 'lucide-react';

// Import hero image
import dpHero from '../assets/dphero3.png';

// Import card background images
import blogBg from '../assets/blog.jpg';
import gdesignBg from '../assets/gdesign.png';
import pdfBg from '../assets/pdf.png';
import civilBg from '../assets/civil.png';

// Import team images
import rukhWebp from '../assets/rukh.webp';
import saimWebp from '../assets/saim.webp';
import ahmedJpg from '../assets/ahmed.jpg';
import aboutBg from '../assets/about-img 2.png';

const DigitalProductspage = () => {
  const navigate = useNavigate();

  const products = [
    {
      id: 'dblogs',
      title: 'D-Blogs',
      description: 'Professional blogging platform for digital creators.',
      Icon: PenTool,
      features: ['SEO Optimized', 'Analytics', 'Monetization', 'Custom Domains'],
      link: '/d-blogs',
      color: 'amber',
      bgImage: blogBg,
      hasPage: true
    },
    {
      id: 'graphic-design',
      title: 'Graphic Design',
      description: 'Premium design templates, logos, and brand kits.',
      Icon: Palette,
      features: ['Logo Design', 'Branding', 'Packaging', 'Social Media'],
      link: '/graphic-design',
      color: 'pink',
      bgImage: gdesignBg,
      hasPage: true
    },
    {
      id: 'pdf-tools',
      title: 'PDF Smart Tools',
      description: 'Edit, convert, and protect PDF documents.',
      Icon: FileText,
      features: ['Compress', 'Convert', 'Merge', 'Protect'],
      link: 'https://pdf.dexperts.co.uk',
      external: true,
      color: 'blue',
      bgImage: pdfBg
    },
    {
      id: 'civileng',
      title: 'CivilEng Pro',
      description: 'Engineering estimation and planning tools.',
      Icon: HardHat,
      features: ['Estimation', 'Planning', 'Management', 'Reports'],
      comingSoon: true,
      color: 'emerald',
      bgImage: civilBg
    }
  ];

  const colorMap = {
    amber: { border: '#f59e0b', glow: 'rgba(245, 158, 11, 0.3)', text: 'text-amber-600', bg: 'bg-amber-50' },
    pink: { border: '#ec4899', glow: 'rgba(236, 72, 153, 0.3)', text: 'text-pink-600', bg: 'bg-pink-50' },
    blue: { border: '#3b82f6', glow: 'rgba(59, 130, 246, 0.3)', text: 'text-blue-600', bg: 'bg-blue-50' },
    emerald: { border: '#10b981', glow: 'rgba(16, 185, 129, 0.3)', text: 'text-emerald-600', bg: 'bg-emerald-50' }
  };

  const handleCardClick = (product) => {
    if (product.comingSoon) return;
    if (product.hasPage) {
      navigate(product.link);
    } else if (product.external) {
      window.open(product.link, '_blank');
    }
  };

  const teamMembers = [
    {
      name: "Rukhsar Fatima",
      role: "Developer",
      image: rukhWebp,
      borderColor: "purple-400",
      social: {
        github: "#",
        linkedin: "#",
        twitter: "#"
      }
    },
    {
      name: "Muhammad Saim Fida",
      role: "Consultant",
      image: saimWebp,
      borderColor: "cyan-400",
      social: {
        github: "#",
        linkedin: "#",
        twitter: "#"
      }
    },
    {
      name: "Ahmed Fida",
      role: "Civil Engineer",
      image: ahmedJpg,
      borderColor: "pink-400",
      social: {
        github: "#",
        linkedin: "#",
        twitter: "#"
      }
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* ===== HERO SECTION ===== */}
      <section className="relative h-[70vh] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${dpHero})` }}
        >
          <div className="absolute inset-0 bg-black/20"></div>
        </div>
        
        <div className="relative h-full container mx-auto px-4 flex flex-col justify-center">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Our Digital Products
            </h1>
            <p className="text-xl text-white/80 max-w-2xl">
              Explore our complete range of digital solutions
            </p>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto">
            <path fill="#ffffff" fillOpacity="1" d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
          </svg>
        </div>
      </section>

      {/* ===== PRODUCTS CARDS ===== */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Products
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Choose the perfect tool for your needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {products.map((product) => {
              const colors = colorMap[product.color];
              
              return (
                <div
                  key={product.id}
                  onClick={() => handleCardClick(product)}
                  className={`
                    group relative bg-white rounded-2xl overflow-hidden
                    transition-all duration-300 hover:shadow-xl cursor-pointer
                    ${product.comingSoon ? 'opacity-80' : ''}
                  `}
                  style={{
                    border: `1px solid ${colors.border}30`,
                  }}
                >
                  {/* Image Container */}
                  <div className="p-3 pb-0">
                    <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                      <img 
                        src={product.bgImage} 
                        alt={product.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      
                      {/* Badge */}
                      {(product.comingSoon || product.external) && (
                        <div className="absolute top-2 left-2">
                          <span className="px-2 py-0.5 bg-black/70 text-white text-[10px] rounded-full backdrop-blur-sm">
                            {product.comingSoon ? 'Soon' : 'External'}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-3">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="text-base font-semibold text-gray-900">
                        {product.title}
                      </h3>
                      {!product.comingSoon && (
                        <span 
                          className="text-sm"
                          style={{ color: colors.border }}
                        >
                          {product.external ? '↗' : '→'}
                        </span>
                      )}
                    </div>

                    <p className="text-xs text-gray-500 mb-2 truncate">
                      {product.description}
                    </p>

                    <div className="flex flex-wrap gap-1">
                      {product.features.slice(0, 2).map((feature, idx) => (
                        <span 
                          key={idx}
                          className="text-[10px] px-2 py-0.5 bg-gray-100 text-gray-600 rounded-full"
                        >
                          {feature}
                        </span>
                      ))}
                      {product.features.length > 2 && (
                        <span className="text-[10px] px-2 py-0.5 bg-gray-100 text-gray-600 rounded-full">
                          +{product.features.length - 2}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== OUR TEAM SECTION - REDESIGNED ===== */}
      <section className="relative py-32 overflow-hidden">
        {/* Background with overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{ backgroundImage: `url(${aboutBg})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/95 via-indigo-900/95 to-purple-900/95"></div>
        </div>

        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-400/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-400/5 rounded-full blur-3xl"></div>
        </div>

        {/* Top right decorative shape */}
        <div className="absolute top-0 right-0 w-[500px] h-[300px] bg-gradient-to-br from-white/10 to-white/5 rounded-bl-[150px] backdrop-blur-sm"></div>

        {/* "Our Team" floating text */}
        <div className="absolute right-10 top-10 text-white/20 text-7xl font-bold uppercase tracking-wider transform rotate-12 hidden lg:block">
          TEAM
        </div>

        <div className="relative container mx-auto px-4 max-w-6xl">
          {/* Section header */}
          <div className="text-center mb-20">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-400 to-blue-400 text-white px-6 py-2 rounded-full text-sm font-semibold mb-6 shadow-lg shadow-cyan-500/30">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
              </span>
              Creative Minds
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Meet Our Expert Team
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto rounded-full"></div>
          </div>

          {/* Team Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="group relative"
              >
                {/* Card */}
                <div className="relative bg-white/10 backdrop-blur-md rounded-3xl p-6 border border-white/20 shadow-2xl hover:bg-white/15 transition-all duration-500 hover:transform hover:-translate-y-2">
                  
                  {/* Card header with gradient border */}
                  <div className="absolute -inset-0.5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur"></div>
                  
                  <div className="relative">
                    {/* Image container */}
                    <div className="relative mb-6">
                      <div className={`w-32 h-32 mx-auto rounded-2xl overflow-hidden border-4 border-${member.borderColor} shadow-xl transform group-hover:scale-105 transition-transform duration-500`}>
                        <img 
                          src={member.image} 
                          alt={member.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      
                      {/* Decorative elements */}
                      <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>

                    {/* Member info */}
                    <div className="text-center mb-4">
                      <h3 className="text-xl font-bold text-white mb-1 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-100 group-hover:to-purple-200 group-hover:bg-clip-text transition-all duration-300">
                        {member.name}
                      </h3>
                      <p className="text-white/70 text-sm font-medium">
                        {member.role}
                      </p>
                    </div>

                    {/* Social links */}
                    <div className="flex justify-center items-center gap-3 pt-4 border-t border-white/10">
                      <a 
                        href={member.social.github}
                        className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white/70 hover:bg-gradient-to-r hover:from-cyan-400 hover:to-purple-400 hover:text-white hover:scale-110 transition-all duration-300"
                      >
                        <Github size={18} />
                      </a>
                      <a 
                        href={member.social.linkedin}
                        className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white/70 hover:bg-gradient-to-r hover:from-cyan-400 hover:to-purple-400 hover:text-white hover:scale-110 transition-all duration-300"
                      >
                        <Linkedin size={18} />
                      </a>
                      <a 
                        href={member.social.twitter}
                        className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white/70 hover:bg-gradient-to-r hover:from-cyan-400 hover:to-purple-400 hover:text-white hover:scale-110 transition-all duration-300"
                      >
                        <Twitter size={18} />
                      </a>
                      <a 
                        href="#"
                        className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white/70 hover:bg-gradient-to-r hover:from-cyan-400 hover:to-purple-400 hover:text-white hover:scale-110 transition-all duration-300"
                      >
                        <Mail size={18} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom line with gradient */}
          <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 mx-auto my-16 rounded-full"></div>

          {/* Bottom text with enhanced styling */}
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-white/80 text-lg leading-relaxed">
              We are a passionate team of creators, developers, and engineers dedicated to building innovative digital solutions. Our diverse expertise allows us to tackle complex challenges and deliver exceptional results for our clients.
            </p>
            
            {/* Stats */}
            <div className="flex justify-center gap-8 mt-10">
              <div className="text-center">
                <div className="text-3xl font-bold text-white">5+</div>
                <div className="text-white/60 text-sm">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">50+</div>
                <div className="text-white/60 text-sm">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">24/7</div>
                <div className="text-white/60 text-sm">Client Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DigitalProductspage;