import { useState } from "react"
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline"
import { Link, useLocation } from "react-router-dom"

const Navbar = () => {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Immigration Solutions", path: "/visa" },
    { name: "Web Development", path: "/web-development" },
    { name: "Graphic Design", path: "/graphic-design" },
    { name: "D-Blogs", path: "/blogs" },
  ]

  return (
    <nav className="w-full fixed top-0 left-0 z-50 backdrop-blur-md bg-white/80 shadow-md">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <Link to="/" className="flex flex-col group">
            <h1 className="text-3xl font-extrabold leading-none">
              <span className="text-indigo-800 group-hover:text-indigo-900 transition">
                De
              </span>
              <span className="text-orange-500 group-hover:text-orange-600 transition">
                Xperts
              </span>
            </h1>
            <span className="text-xs text-indigo-700 font-medium tracking-wide">
              Your Digital Solutions
            </span>
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-8 text-[15px] font-medium text-gray-700">

            {navLinks.map((link) => (
              <li key={link.path} className="relative group">
                <Link
                  to={link.path}
                  className={`transition duration-300 ${
                    location.pathname === link.path
                      ? "text-indigo-800"
                      : "hover:text-indigo-800"
                  }`}
                >
                  {link.name}
                </Link>

                {/* Animated underline */}
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
              className="ml-4 px-6 py-2 rounded-full bg-orange-500 text-white font-semibold shadow-md hover:bg-orange-600 hover:shadow-lg transition duration-300"
            >
              Contact Us
            </Link>
          </ul>

          {/* Mobile Button */}
          <button
            className="md:hidden text-indigo-800"
            onClick={() => setOpen(!open)}
          >
            {open ? (
              <XMarkIcon className="h-7" />
            ) : (
              <Bars3Icon className="h-7" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="md:hidden pb-6 pt-4 bg-white/90 backdrop-blur-md">
            <ul className="flex flex-col gap-5 text-gray-700 font-medium">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    onClick={() => setOpen(false)}
                    className={`block transition duration-300 ${
                      location.pathname === link.path
                        ? "text-indigo-800"
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
                className="mt-2 inline-block text-center px-6 py-2 rounded-full bg-orange-500 text-white font-semibold shadow-md hover:bg-orange-600 transition duration-300"
              >
                Contact Us
              </Link>
            </ul>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar