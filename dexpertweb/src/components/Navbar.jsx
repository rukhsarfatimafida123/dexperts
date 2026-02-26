import { useState, useEffect } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Immigration Solutions", path: "/visa" },
    { name: "Web Development", path: "/web-development" },
    { name: "Graphic Design", path: "/graphic-design" },
    { name: "D-Blogs", path: "/blogs" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) setScrolled(true);
      else setScrolled(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
              <li key={link.path} className="relative group">
                <Link
                  to={link.path}
                  className={`transition duration-300 ${
                    link.name === "Home"
                      ? scrolled
                        ? "text-indigo-800"
                        : "text-black"
                      : scrolled
                      ? "text-black hover:text-indigo-800"
                      : "hover:text-gray-100 hover:brightness-110"
                  }`}
                >
                  {link.name}
                </Link>
                <span
                  className={`absolute left-0 -bottom-1 h-[2px] bg-indigo-800 transition-all duration-300 ${
                    location.pathname === link.path
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }`}
                ></span>
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
              scrolled ? "text-black" : "text-white/100"
            }`}
            onClick={() => setOpen(!open)}
          >
            {open ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div
            className={`md:hidden absolute right-4 top-20 w-52 rounded-xl bg-white shadow-lg transition-all duration-300 z-50`}
          >
            <ul className="flex flex-col gap-4 font-medium p-4 text-black">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    onClick={() => setOpen(false)}
                    className={`block py-2 transition duration-300 ${
                      location.pathname === link.path
                        ? "font-semibold text-indigo-800"
                        : "hover:text-indigo-800"
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="mt-2 inline-block text-center px-6 py-2 rounded-full font-semibold bg-red-500 text-white hover:bg-red-600 transition duration-300"
              >
                Contact Us
              </Link>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;