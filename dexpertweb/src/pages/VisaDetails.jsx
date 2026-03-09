import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { getVisaById } from '../data/visaData';

// Import hero image (adjust path as needed)
import visaHeroImg from '../assets/hero2.jpg'; // Aap apni image yahan use karein

const VisaDetails = () => {
  const { visaType } = useParams();
  const visa = getVisaById(visaType);

  if (!visa) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Visa not found</h2>
          <Link to="/visa" className="text-indigo-600 hover:underline">
            Back to Visa Page
          </Link>
        </div>
      </div>
    );
  }

  // Helper function to get icon based on key
  const getKeyIcon = (key) => {
    switch(key) {
      case 'Visa Duration': return '📅';
      case 'Processing Time': return '⏱️';
      case 'English Requirement': return '🔤';
      case 'Eligibility': return '🎓';
      case 'Marks': return '📊';
      case 'Study Gap': return '⏳';
      default: return '•';
    }
  };

  // Key facts based on visa type (customize as needed)
  const getKeyFacts = () => {
    const facts = [];
    
    if (visa.id.includes('short-term') || visa.id.includes('study')) {
      facts.push(
        { key: 'Visa Duration', value: visa.id.includes('short-term') ? '6 - 11 Months' : 'Full Course Duration' },
        { key: 'Processing Time', value: visa.processingTime || '3-4 Weeks' },
        { key: 'English Requirement', value: visa.id.includes('short-term') ? 'No' : 'IELTS/TOEFL' },
        { key: 'Eligibility', value: 'Matric or Above' },
        { key: 'Marks', value: '60% or Above' },
        { key: 'Study Gap', value: '2 Years or Less' }
      );
    } else {
      facts.push(
        { key: 'Processing Time', value: visa.processingTime || 'Varies' },
        { key: 'Visa Fee', value: visa.fee || 'Contact for fee' }
      );
    }
    
    return facts;
  };

  const keyFacts = getKeyFacts();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* ===== HERO SECTION - Increased height ===== */}
      <section className="relative w-full h-[50vh] md:h-[55vh] lg:h-[60vh] overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: `url(${visaHeroImg})`,
          }}
        >
          {/* Overlay - Indigo with gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 via-indigo-500/40 to-indigo-400/30"></div>
        </div>
        
        {/* Content - Moved down with padding-top */}
        <div className="relative h-full container mx-auto px-4 flex flex-col justify-center pt-16 md:pt-20">
          {/* Breadcrumb - Moved down */}
          <div className="mb-6 md:mb-8">
            <Link 
              to="/visa" 
              className="inline-flex items-center text-indigo-200 hover:text-white text-sm md:text-base transition-colors bg-black/20 backdrop-blur-sm px-4 py-2 rounded-full"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
              </svg>
              Back to All Visas
            </Link>
          </div>
          
          {/* Title with Flag */}
          <div className="flex items-center gap-4">
            <div className="text-6xl md:text-7xl bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/20 shadow-xl">
              {visa.flag}
            </div>
            <div>
              <p className="text-indigo-200 text-lg md:text-xl font-medium mb-2">{visa.country} Visa</p>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                {visa.title}
              </h1>
              {visa.id.includes('short-term') && (
                <p className="text-indigo-200 text-base md:text-lg mt-2 italic">
                  (To study English language courses)
                </p>
              )}
            </div>
          </div>
        </div>
        
        {/* Bottom Wave Effect (optional) */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto">
            <path fill="#f9fafb" fillOpacity="1" d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
          </svg>
        </div>
      </section>

      {/* ===== MAIN CONTENT ===== */}
      <div className="container mx-auto px-4 py-12 -mt-20 relative z-10">
        
        {/* ===== KEY FACTS SECTION - Like screenshot ===== */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12 border border-indigo-100">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
            <span className="w-1.5 h-8 bg-indigo-600 rounded-full mr-3"></span>
            Key Facts:
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {keyFacts.map((fact, index) => (
              <div 
                key={index} 
                className="bg-gradient-to-br from-indigo-50 to-indigo-100/50 rounded-xl p-4 text-center border border-indigo-200 hover:shadow-md transition-shadow"
              >
                <div className="text-2xl mb-2">{getKeyIcon(fact.key)}</div>
                <p className="text-xs text-indigo-600 font-medium uppercase tracking-wider mb-1">{fact.key}</p>
                <p className="text-sm md:text-base font-bold text-gray-800">{fact.value}</p>
              </div>
            ))}
          </div>
          
          {/* Apply Now Button */}
          <div className="mt-8 text-center">
            <Link
              to={`/apply/${visa.id}`}
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-red-600 to-indigo-600 text-white text-lg font-semibold rounded-xl hover:from-indigo-700 hover:to-indigo-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Apply Now
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
              </svg>
            </Link>
          </div>
        </div>

        {/* ===== TWO COLUMN LAYOUT ===== */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* LEFT COLUMN - Main Content (2/3 width) */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Introduction */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-indigo-100">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                <span className="w-1.5 h-8 bg-indigo-600 rounded-full mr-3"></span>
                {visa.id.includes('short-term') ? 'Study English in the UK with a Short-term Study Visa' : 'Overview'}
              </h2>
              <p className="text-gray-700 leading-relaxed text-lg">
                {visa.fullDescription || visa.description}
              </p>
              
              {visa.id.includes('short-term') && (
                <div className="mt-4 bg-indigo-50 p-4 rounded-xl border-l-4 border-indigo-600">
                  <p className="text-indigo-800 font-medium">
                    <span className="font-bold">Duration of Stay:</span> Your visa will allow you to stay in the UK for the entire duration of your course, plus an additional 30 days, with a maximum stay of 11 months.
                  </p>
                </div>
              )}
            </div>

            {/* Visa Process - Step by Step */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-indigo-100">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <span className="w-1.5 h-8 bg-indigo-600 rounded-full mr-3"></span>
                Visa Process:
              </h2>
              
              <div className="space-y-6">
                {visa.process?.map((step, index) => (
                  <div key={index} className="relative">
                    {/* Timeline line (except last) */}
                    {index < visa.process.length - 1 && (
                      <div className="absolute left-5 top-10 bottom-0 w-0.5 bg-indigo-200"></div>
                    )}
                    
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-10 h-10 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold z-10">
                        {index + 1}
                      </div>
                      <div className="flex-1 pb-6">
                        <p className="text-gray-800 font-medium">{step}</p>
                        {/* You can add "What to Do" and "How We Help" sub-points if available in data */}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Eligibility Section */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-indigo-100">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                <span className="w-1.5 h-8 bg-indigo-600 rounded-full mr-3"></span>
                Eligibility
              </h2>
              
              <div className="space-y-4">
                <p className="text-gray-700">To be eligible, you must:</p>
                <ul className="space-y-3">
                  {visa.requirements?.map((req, index) => (
                    <li key={index} className="flex items-start bg-indigo-50/50 p-3 rounded-lg">
                      <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-gray-700">{req}</span>
                    </li>
                  ))}
                </ul>
                
                {visa.id.includes('short-term') && (
                  <div className="mt-4 p-4 bg-yellow-50 rounded-xl border border-yellow-200">
                    <p className="text-yellow-800 font-medium flex items-start">
                      <span className="text-xl mr-2">📌</span>
                      <span>
                        <strong>For applicants under 18:</strong> You must have organized your travel and accommodation in the UK and obtain consent from your parent or guardian to study in the UK.
                      </span>
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN - Sidebar (1/3 width) */}
                    {/* RIGHT COLUMN - Sidebar (1/3 width) */}
          <div className="space-y-8">
            
                        {/* More Visas Card */}
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-indigo-100">
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                <span className="w-1 h-6 bg-indigo-600 rounded-full mr-3"></span>
                UK Visas
              </h3>
              
              <div className="space-y-3">
                <Link to="/visa-details/uk-short-term-study" className="block p-3 bg-indigo-50 rounded-lg hover:bg-indigo-100 transition-colors">
                  <p className="font-medium text-indigo-800">🇬🇧 Short Term Study Visa</p>
                </Link>
                <Link to="/visa-details/uk-sponsorship" className="block p-3 bg-indigo-50 rounded-lg hover:bg-indigo-100 transition-colors">
                  <p className="font-medium text-indigo-800">🇬🇧 UK Visa Sponsorship</p>
                </Link>
                <Link to="/visa-details/uk-student" className="block p-3 bg-indigo-50 rounded-lg hover:bg-indigo-100 transition-colors">
                  <p className="font-medium text-indigo-800">🇬🇧 Student Visa</p>
                </Link>
                <Link to="/visa-details/uk-skilled" className="block p-3 bg-indigo-50 rounded-lg hover:bg-indigo-100 transition-colors">
                  <p className="font-medium text-indigo-800">🇬🇧 Skilled Worker Visa</p>
                </Link>
                <Link to="/visa-details/uk-marriage" className="block p-3 bg-indigo-50 rounded-lg hover:bg-indigo-100 transition-colors">
                  <p className="font-medium text-indigo-800">🇬🇧 Marriage/Partner Visa</p>
                </Link>
                <Link to="/visa-details/uk-visitor" className="block p-3 bg-indigo-50 rounded-lg hover:bg-indigo-100 transition-colors">
                  <p className="font-medium text-indigo-800">🇬🇧 Tourism/Visitor Visa</p>
                </Link>
              </div>
            </div>

            {/* Quick Contact Card */}
            <div className="bg-gradient-to-br from-indigo-600 to-indigo-800 rounded-2xl shadow-lg p-6 text-white">
              <h3 className="text-xl font-bold mb-4">Need Help?</h3>
              <p className="text-indigo-100 mb-4 text-sm">
                Our visa experts are here to assist you with your application.
              </p>
              <Link
                to="/contact"
                className="block w-full bg-white text-indigo-700 text-center font-semibold py-3 rounded-xl hover:bg-indigo-50 transition-colors"
              >
                Contact Us
              </Link>
            </div>

            {/* Restrictions Card - YAHAN PASTE KARO */}
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-indigo-100">
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                <span className="w-1 h-6 bg-red-500 rounded-full mr-3"></span>
                Restrictions
              </h3>
              
              <div className="space-y-3">
                <div className="flex items-start bg-red-50 p-3 rounded-lg">
                  <span className="text-red-500 mr-3 text-lg">🚫</span>
                  <p className="text-sm text-gray-700">Enroll in any other course or change your current course</p>
                </div>
                <div className="flex items-start bg-red-50 p-3 rounded-lg">
                  <span className="text-red-500 mr-3 text-lg">🚫</span>
                  <p className="text-sm text-gray-700">Attend a state-funded school</p>
                </div>
                <div className="flex items-start bg-red-50 p-3 rounded-lg">
                  <span className="text-red-500 mr-3 text-lg">🚫</span>
                  <p className="text-sm text-gray-700">Engage in any form of work (paid/unpaid/internship)</p>
                </div>
                <div className="flex items-start bg-red-50 p-3 rounded-lg">
                  <span className="text-red-500 mr-3 text-lg">🚫</span>
                  <p className="text-sm text-gray-700">Extend your visa beyond 11 months</p>
                </div>
                <div className="flex items-start bg-red-50 p-3 rounded-lg">
                  <span className="text-red-500 mr-3 text-lg">🚫</span>
                  <p className="text-sm text-gray-700">Bring dependents with you</p>
                </div>
                <div className="flex items-start bg-red-50 p-3 rounded-lg">
                  <span className="text-red-500 mr-3 text-lg">🚫</span>
                  <p className="text-sm text-gray-700">Apply for public funds or benefits</p>
                </div>
                <div className="flex items-start bg-red-50 p-3 rounded-lg">
                  <span className="text-red-500 mr-3 text-lg">🚫</span>
                  <p className="text-sm text-gray-700">Work as an intern or volunteer</p>
                </div>
                <div className="flex items-start bg-red-50 p-3 rounded-lg">
                  <span className="text-red-500 mr-3 text-lg">🚫</span>
                  <p className="text-sm text-gray-700">Switch to another visa category from within the UK</p>
                </div>
                <div className="flex items-start bg-red-50 p-3 rounded-lg">
                  <span className="text-red-500 mr-3 text-lg">🚫</span>
                  <p className="text-sm text-gray-700">Access public healthcare (NHS) free of charge</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Subscribe Section (from screenshot) */}
        <div className="mt-12 bg-white rounded-2xl shadow-lg p-8 border border-indigo-100">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Subscribe to our newsletter</h3>
              <p className="text-gray-600">Get latest visa updates and news</p>
            </div>
            <div className="flex w-full md:w-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 md:w-64 px-4 py-3 border border-indigo-200 rounded-l-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <button className="px-6 py-3 bg-indigo-600 text-white rounded-r-xl hover:bg-indigo-700 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisaDetails;