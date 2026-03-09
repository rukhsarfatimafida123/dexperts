import { useState, useEffect } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Immigration Solutions", path: "/visa" },
    { name: "Web Development", path: "/web-development" },
    { 
      name: "Digital Products", 
      path: "/digital-products",
      dropdown: [
        { name: "Dashboard", path: "/digital-products", description: "Overview of all products" },
        { name: "D-Blogs", path: "/blogs", description: "Professional blogging platform", icon: "📝" },
        { name: "Graphic Design", path: "/graphic-design", description: "Design templates & brand kits", icon: "🎨" },
        { name: "PDF Smart Tools", path: "https://pdf.dexperts.co.uk", external: true, description: "Edit, convert, compress PDF", icon: "📄" },
        { name: "CivilEng Pro", path: "#", comingSoon: true, description: "Engineering tools", icon: "🏗️" },
        { name: "Our Team", path: "/digital-products#team", description: "Meet our experts", icon: "👥" }
      ]
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) setScrolled(true);
      else setScrolled(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown on route change
  useEffect(() => {
    setProductsOpen(false);
    setOpen(false);
  }, [location.pathname]);

  return (
    <nav
      className={`w-full fixed top-0 left-0 z-50 backdrop-blur-md transition-all duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-transparent shadow-none"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">

          {/* Logo Text */}
          <Link to="/" className="flex flex-col group">
            <h1 className="text-3xl md:text-4xl font-extrabold leading-none">
              <span
                className={`transition-colors duration-300 ${
                  scrolled ? "text-indigo-800" : "text-indigo-600"
                }`}
              >
                De
              </span>
              <span className="text-red-500">Xperts</span>
            </h1>
            <span
              className={`text-xs md:text-sm font-medium tracking-wide transition-colors duration-300 ${
                scrolled ? "text-gray-700" : "text-white/90"
              }`}
            >
              Your Digital Solutions
            </span>
          </Link>

          {/* Desktop Menu */}
          <ul
            className={`hidden md:flex items-center gap-6 lg:gap-8 text-[15px] font-medium transition-colors duration-300 ${
              scrolled ? "text-black" : "text-white"
            }`}
          >
            {navLinks.map((link) => (
              <li key={link.path} className="relative">
                {link.dropdown ? (
                  // Dropdown for Digital Products - Fixed Version
                  <div
                    className="relative"
                    onMouseEnter={() => setProductsOpen(true)}
                    onMouseLeave={() => setProductsOpen(false)}
                  >
                    <button
                      className={`flex items-center gap-1 px-3 py-2 rounded-lg transition-all duration-300 ${
                        productsOpen ? "bg-indigo-50 text-indigo-800" : ""
                      } ${
                        scrolled
                          ? "text-black hover:text-indigo-800"
                          : "hover:text-gray-100"
                      }`}
                    >
                      {link.name}
                      <svg
                        className={`w-4 h-4 transition-transform duration-300 ${
                          productsOpen ? "rotate-180" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                      </svg>
                    </button>

                    {/* Dropdown Menu - Professional Design */}
                    {productsOpen && (
                      <div className="absolute left-0 mt-2 w-80 bg-white rounded-2xl shadow-2xl py-3 border border-gray-100 overflow-hidden">
                        {/* Header */}
                        <div className="px-4 py-2 bg-gradient-to-r from-indigo-50 to-purple-50 border-b border-gray-100">
                          <p className="text-sm font-semibold text-indigo-800">Digital Products</p>
                          <p className="text-xs text-gray-500">Explore our complete range</p>
                        </div>
                        
                        {/* Dropdown Items */}
                        <div className="py-2">
                          {link.dropdown.map((item) => (
                            <div key={item.name}>
                              {item.external ? (
                                <a
                                  href={item.path}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="flex items-start px-4 py-3 hover:bg-indigo-50 transition-colors group"
                                  onClick={() => setProductsOpen(false)}
                                >
                                  <span className="text-xl mr-3">{item.icon || '🔗'}</span>
                                  <div className="flex-1">
                                    <div className="flex items-center justify-between">
                                      <span className="font-medium text-gray-800 group-hover:text-indigo-800">
                                        {item.name}
                                      </span>
                                      <span className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">
                                        External
                                      </span>
                                    </div>
                                    <p className="text-xs text-gray-500 mt-0.5">{item.description}</p>
                                  </div>
                                </a>
                              ) : item.comingSoon ? (
                                <div className="flex items-start px-4 py-3 opacity-70 cursor-not-allowed">
                                  <span className="text-xl mr-3">{item.icon || '🔜'}</span>
                                  <div className="flex-1">
                                    <div className="flex items-center justify-between">
                                      <span className="font-medium text-gray-500">{item.name}</span>
                                      <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded-full">
                                        Coming Soon
                                      </span>
                                    </div>
                                    <p className="text-xs text-gray-400 mt-0.5">{item.description}</p>
                                  </div>
                                </div>
                              ) : (
                                <Link
                                  to={item.path}
                                  className="flex items-start px-4 py-3 hover:bg-indigo-50 transition-colors group"
                                  onClick={() => setProductsOpen(false)}
                                >
                                  <span className="text-xl mr-3">{item.icon || '📦'}</span>
                                  <div className="flex-1">
                                    <span className="font-medium text-gray-800 group-hover:text-indigo-800">
                                      {item.name}
                                    </span>
                                    <p className="text-xs text-gray-500 mt-0.5">{item.description}</p>
                                  </div>
                                </Link>
                              )}
                            </div>
                          ))}
                        </div>
                        
                        {/* Footer */}
                        <div className="px-4 py-3 bg-gray-50 border-t border-gray-100">
                          <Link
                            to="/digital-products"
                            className="flex items-center justify-between text-sm text-indigo-600 hover:text-indigo-800 font-medium"
                            onClick={() => setProductsOpen(false)}
                          >
                            View All Products
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                            </svg>
                          </Link>
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  // Normal Links
                  <Link
                    to={link.path}
                    className={`relative px-3 py-2 rounded-lg transition-all duration-300 ${
                      location.pathname === link.path
                        ? "text-indigo-800 font-semibold"
                        : scrolled
                        ? "text-black hover:text-indigo-800"
                        : "hover:text-gray-100"
                    }`}
                  >
                    {link.name}
                    {location.pathname === link.path && (
                      <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-indigo-600 rounded-full"></span>
                    )}
                  </Link>
                )}
              </li>
            ))}

            {/* CTA Button */}
            <Link
              to="/contact"
              className="ml-4 px-5 md:px-6 py-2 rounded-full font-semibold shadow-md bg-red-500 text-white hover:bg-red-600 hover:shadow-lg transition duration-300"
            >
              Contact Us
            </Link>
          </ul>

          {/* Mobile Hamburger */}
          <button
            className={`md:hidden transition-colors duration-300 ${
              scrolled ? "text-black" : "text-white"
            }`}
            onClick={() => setOpen(!open)}
          >
            {open ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="md:hidden absolute right-4 top-20 w-80 rounded-2xl bg-white shadow-2xl transition-all duration-300 z-50 border border-gray-100">
            <div className="p-4">
              {/* Mobile Menu Header */}
              <div className="mb-4 pb-3 border-b border-gray-100">
                <p className="text-sm font-semibold text-indigo-800">Menu</p>
                <p className="text-xs text-gray-500">Navigate to sections</p>
              </div>

              {/* Menu Items */}
              <div className="space-y-1">
                <Link
                  to="/"
                  onClick={() => setOpen(false)}
                  className="flex items-center px-4 py-3 rounded-xl hover:bg-indigo-50 transition-colors"
                >
                  <span className="text-xl mr-3">🏠</span>
                  <div>
                    <p className="font-medium text-gray-800">Home</p>
                    <p className="text-xs text-gray-500">Back to homepage</p>
                  </div>
                </Link>

                <Link
                  to="/visa"
                  onClick={() => setOpen(false)}
                  className="flex items-center px-4 py-3 rounded-xl hover:bg-indigo-50 transition-colors"
                >
                  <span className="text-xl mr-3">🛂</span>
                  <div>
                    <p className="font-medium text-gray-800">Immigration Solutions</p>
                    <p className="text-xs text-gray-500">Visa & immigration services</p>
                  </div>
                </Link>

                <Link
                  to="/web-development"
                  onClick={() => setOpen(false)}
                  className="flex items-center px-4 py-3 rounded-xl hover:bg-indigo-50 transition-colors"
                >
                  <span className="text-xl mr-3">💻</span>
                  <div>
                    <p className="font-medium text-gray-800">Web Development</p>
                    <p className="text-xs text-gray-500">Custom websites & apps</p>
                  </div>
                </Link>

                {/* Digital Products Section */}
                <div className="mt-4 pt-3 border-t border-gray-100">
                  <p className="text-sm font-semibold text-indigo-800 mb-2 px-2">Digital Products</p>
                  <div className="space-y-1">
                    <Link
                      to="/digital-products"
                      onClick={() => setOpen(false)}
                      className="flex items-center px-4 py-3 rounded-xl hover:bg-indigo-50 transition-colors"
                    >
                      <span className="text-xl mr-3">📊</span>
                      <div>
                        <p className="font-medium text-gray-800">Dashboard</p>
                        <p className="text-xs text-gray-500">All products overview</p>
                      </div>
                    </Link>
                    <Link
                      to="/blogs"
                      onClick={() => setOpen(false)}
                      className="flex items-center px-4 py-3 rounded-xl hover:bg-indigo-50 transition-colors"
                    >
                      <span className="text-xl mr-3">📝</span>
                      <div>
                        <p className="font-medium text-gray-800">D-Blogs</p>
                        <p className="text-xs text-gray-500">Blogging platform</p>
                      </div>
                    </Link>
                    <Link
                      to="/graphic-design"
                      onClick={() => setOpen(false)}
                      className="flex items-center px-4 py-3 rounded-xl hover:bg-indigo-50 transition-colors"
                    >
                      <span className="text-xl mr-3">🎨</span>
                      <div>
                        <p className="font-medium text-gray-800">Graphic Design</p>
                        <p className="text-xs text-gray-500">Templates & brand kits</p>
                      </div>
                    </Link>
                    <a
                      href="https://pdf.dexperts.co.uk"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center px-4 py-3 rounded-xl hover:bg-indigo-50 transition-colors"
                      onClick={() => setOpen(false)}
                    >
                      <span className="text-xl mr-3">📄</span>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <p className="font-medium text-gray-800">PDF Smart Tools</p>
                          <span className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">
                            External
                          </span>
                        </div>
                        <p className="text-xs text-gray-500">Edit, convert PDFs</p>
                      </div>
                    </a>
                    <div className="flex items-center px-4 py-3 opacity-70">
                      <span className="text-xl mr-3">🏗️</span>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <p className="font-medium text-gray-500">CivilEng Pro</p>
                          <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded-full">
                            Soon
                          </span>
                        </div>
                        <p className="text-xs text-gray-400">Engineering tools</p>
                      </div>
                    </div>
                    <Link
                      to="/digital-products#team"
                      onClick={() => setOpen(false)}
                      className="flex items-center px-4 py-3 rounded-xl hover:bg-indigo-50 transition-colors"
                    >
                      <span className="text-xl mr-3">👥</span>
                      <div>
                        <p className="font-medium text-gray-800">Our Team</p>
                        <p className="text-xs text-gray-500">Meet the experts</p>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Contact Button */}
              <div className="mt-6 pt-4 border-t border-gray-100">
                <Link
                  to="/contact"
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-center w-full px-6 py-3 rounded-xl font-semibold bg-red-500 text-white hover:bg-red-600 transition-colors"
                >
                  <span className="mr-2">📞</span>
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;