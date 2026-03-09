import React from 'react';
import { Link } from 'react-router-dom';

const DigitalProducts = () => {
  // Products data
  const products = [
    {
      id: 'dblogs',
      title: 'D-Blogs',
      description: 'Professional blogging platform for digital creators. Write, publish, and grow your audience.',
      icon: '📝',
      features: ['SEO Optimized', 'Analytics Dashboard', 'Monetization Tools'],
      link: '/blogs',
      color: 'from-purple-600 to-indigo-600'
    },
    {
      id: 'graphic-design',
      title: 'Graphic Design',
      description: 'Premium design templates, logos, brand kits, and social media graphics.',
      icon: '🎨',
      features: ['1000+ Templates', 'Custom Designs', 'Brand Kits'],
      link: '/graphic-design',
      color: 'from-pink-600 to-purple-600'
    },
    {
      id: 'pdf-tools',
      title: 'PDF Smart Tools',
      description: 'All-in-one platform to compress, convert, edit, merge, and protect PDF documents.',
      icon: '📄',
      features: ['Compress PDF', 'Convert to Word', 'Merge Files', 'Password Protect'],
      link: 'https://pdf.dexperts.co.uk',
      external: true,
      color: 'from-blue-600 to-cyan-600'
    },
    {
      id: 'civileng',
      title: 'CivilEng Pro',
      description: 'Intelligent tools for civil engineering estimation, planning, and design management.',
      icon: '🏗️',
      features: ['Quantity Estimation', 'Project Planning', 'Design Management'],
      link: '#',
      comingSoon: true,
      color: 'from-green-600 to-teal-600'
    }
  ];

  // Team data
  const team = [
    { 
      name: 'Sarah Ahmed', 
      role: 'Lead Developer',
      bio: 'Full-stack developer with 8+ years experience.',
      icon: '👩‍💻'
    },
    { 
      name: 'Michael Chen', 
      role: 'UI/UX Designer',
      bio: 'Passionate about creating intuitive user experiences.',
      icon: '👨‍🎨'
    },
    { 
      name: 'Emily Watson', 
      role: 'Product Manager',
      bio: 'Expert in digital product strategy.',
      icon: '👩‍💼'
    },
    { 
      name: 'James Wilson', 
      role: 'Content Manager',
      bio: 'Managing D-Blogs and content strategy.',
      icon: '👨‍💻'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-indigo-900 to-indigo-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Digital Products</h1>
          <p className="text-xl text-indigo-100 max-w-2xl mx-auto">
            Innovative tools and platforms to power your digital journey
          </p>
        </div>
      </div>

      {/* Products Grid */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">What We Offer</h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Explore our range of digital solutions designed to help you succeed
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {products.map((product) => (
            <div 
              key={product.id} 
              className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow"
            >
              {/* Header with gradient */}
              <div className={`h-32 bg-gradient-to-r ${product.color} flex items-center justify-center relative`}>
                {product.comingSoon && (
                  <div className="absolute top-4 right-4 bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-sm font-semibold">
                    Coming Soon
                  </div>
                )}
                <span className="text-6xl">{product.icon}</span>
              </div>
              
              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-3">{product.title}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                
                {/* Features */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-700 mb-2">Key Features:</h4>
                  <div className="flex flex-wrap gap-2">
                    {product.features.map((feature, idx) => (
                      <span 
                        key={idx} 
                        className="px-3 py-1 bg-indigo-50 text-indigo-700 rounded-full text-sm"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Button */}
                {product.comingSoon ? (
                  <button
                    disabled
                    className="w-full px-6 py-3 bg-gray-400 text-white rounded-lg cursor-not-allowed font-semibold"
                  >
                    Coming Soon
                  </button>
                ) : product.external ? (
                  <a
                    href={product.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-full px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors font-semibold"
                  >
                    Visit Website
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                    </svg>
                  </a>
                ) : (
                  <Link
                    to={product.link}
                    className="inline-flex items-center justify-center w-full px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors font-semibold"
                  >
                    Learn More
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Our Team Section - with id="team" for anchor link */}
      <div id="team" className="bg-white py-16 scroll-mt-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">Meet Our Team</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            The talented people behind our digital products
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <div 
                key={index} 
                className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-lg transition-shadow"
              >
                <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 flex items-center justify-center text-white text-4xl">
                  {member.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-1">{member.name}</h3>
                <p className="text-indigo-600 font-medium mb-2">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8 text-indigo-100">
            Explore our products and take your digital presence to the next level
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-white text-indigo-600 rounded-xl font-semibold hover:bg-gray-100 transition-colors"
          >
            Contact Us
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DigitalProducts;