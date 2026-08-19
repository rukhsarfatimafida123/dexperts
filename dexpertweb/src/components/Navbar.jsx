import { useState, useEffect } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link, useLocation } from "react-router-dom";

// Logos
import logoWhite from "../assets/white logo.png";
import logoDark from "../assets/White logo Checking.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Immigration Solutions", path: "/visa" },
    { name: "Digital Products", path: "/digital-products" },
  ];

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <nav
      className={`w-full fixed top-0 left-0 z-50 transition-all duration-500 ease-in-out ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">

         {/* 🔥 LOGO (ULTRA SMOOTH + SAME POSITION) */}
<Link to="/" className="flex items-center">
  <div className="relative flex items-center justify-center h-16 md:h-20 w-[140px] md:w-[180px] overflow-hidden">

    {/* White Logo */}
    <img
      src={logoWhite}
      alt="Logo White"
      className={`absolute top-0 left-0 w-full h-full object-contain
      transition-all duration-700 ease-in-out
      ${scrolled ? "opacity-0 scale-95" : "opacity-100 scale-100"}`}
    />

    {/* Dark Logo */}
    <img
  src={logoDark}
  alt="Logo Dark"
  className={`absolute top-0 left-0
  w-[110%] h-[110%] object-contain
  transition-all duration-700 ease-in-out
  ${scrolled ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
/>

  </div>
</Link>
          {/* Desktop Menu */}
          <ul
            className={`hidden md:flex items-center gap-6 lg:gap-8 text-[15px] font-medium transition-colors duration-500 ${
              scrolled ? "text-black" : "text-white"
            }`}
          >
            {navLinks.map((link) => {
              const isActive =
                link.path === "/"
                  ? location.pathname === "/"
                  : location.pathname.startsWith(link.path);

              return (
                <li key={link.path} className="relative group">
                  <Link
                    to={link.path}
                    className={`transition duration-300 ${
                      isActive
                        ? "text-indigo-800"
                        : scrolled
                        ? "text-black hover:text-indigo-800"
                        : "hover:text-gray-100"
                    }`}
                  >
                    {link.name}
                  </Link>

                  <span
                    className={`absolute left-0 -bottom-1 h-[2px] bg-indigo-800 transition-all duration-300 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </li>
              );
            })}

            {/* CTA Button */}
            <Link
              to="/contact"
              className="ml-4 px-5 md:px-6 py-2 rounded-full font-semibold shadow-md bg-red-500 text-white hover:bg-red-600 transition duration-300"
            >
              Contact Us
            </Link>
          </ul>

          {/* Mobile Button */}
          <button
            className={`md:hidden transition-colors duration-300 ${
              scrolled ? "text-black" : "text-white"
            }`}
            onClick={() => setOpen(!open)}
          >
            {open ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="md:hidden absolute right-4 top-20 w-52 rounded-xl bg-white shadow-lg z-50">
            <ul className="flex flex-col gap-4 font-medium p-4 text-black">
              {navLinks.map((link) => {
                const isActive =
                  link.path === "/"
                    ? location.pathname === "/"
                    : location.pathname.startsWith(link.path);

                return (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      onClick={() => setOpen(false)}
                      className={`block py-2 ${
                        isActive
                          ? "font-semibold text-indigo-800"
                          : "hover:text-indigo-800"
                      }`}
                    >
                      {link.name}
                    </Link>
                  </li>
                );
              })}

              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="mt-2 inline-block text-center px-6 py-2 rounded-full font-semibold bg-red-500 text-white hover:bg-red-600"
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