import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="bg-indigo-950 text-white rounded-t-3xl">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Top Columns */}
        <div className="grid md:grid-cols-3 gap-10">

          {/* Contact Us */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Contact Us</h3>
            <p className="text-sm text-white/80">
              Let's Discuss your vision with us
            </p>

            {/* Schedule a Call */}
            <button className="bg-white text-indigo-950 py-2 px-5 text-sm font-semibold rounded-full w-max hover:bg-gray-100 transition">
              Schedule a Call
            </button>

            {/* Email Subscribe */}
            <div className="mt-4">
              <input
                type="email"
                placeholder="Your Email"
                className="w-full bg-indigo-950 border-b border-gray-700 outline-none pb-2 text-white placeholder-white mb-2"
              />
              <button className="bg-white text-indigo-950 py-2 px-5 text-sm font-semibold rounded-full w-max hover:bg-gray-100 transition">
                SUBSCRIBE
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              {[
                "Home",
                "Visa & Immigration",
                "Web Development",
                "Graphic Design",
                "D-Blogs",
                "Contact us",
              ].map((item, index) => (
                <li
                  key={index}
                  className="cursor-pointer hover:text-orange-500 transition"
                >
                  › {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Information */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Information</h3>
            <p className="text-sm leading-6 text-white/80">
              Comprehensive Digital Services<br /> for Visa & Immigration,<br /> Graphic Design,<br /> Web Design, and More.
            </p>
          </div>
        </div>

        {/* Middle Contact Info */}
        <div className="flex flex-col items-center mt-10 space-y-2 text-sm text-white/80">
          <div className="flex items-center gap-2">
            <FiMapPin /> 1 Lambton Place, Leeds, LS8 5PF, United Kingdom
          </div>
          <div className="flex items-center gap-2">
            <FiPhone /> +44 7723957343
          </div>
          <div className="flex items-center gap-2">
            <FiMail /> info@dexperts.co.uk
          </div>
        </div>

        {/* Bottom Row */}
        <div className="flex flex-col md:flex-row items-center justify-between mt-6 border-t border-indigo-800 pt-4 gap-4 md:gap-0">
          {/* Social Icons */}
          <div className="flex gap-5 text-xl">
            <a
              href="https://www.facebook.com/YourPage" // Replace with your Facebook URL
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF className="cursor-pointer hover:text-orange-900 transition" />
            </a>

            <a
              href="https://www.instagram.com/YourPage" // Replace with your Instagram URL
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="cursor-pointer hover:text-orange-900 transition" />
            </a>

            <a
              href="https://wa.me/YourNumber" // Replace with your WhatsApp number in international format, e.g., +923001234567
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp className="cursor-pointer hover:text-orange-900 transition" />
            </a>
          </div>

          {/* Rights */}
          <p className="text-sm text-white/50 text-center md:text-right">
            © 2024 All Rights Reserved. Dexperts
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;