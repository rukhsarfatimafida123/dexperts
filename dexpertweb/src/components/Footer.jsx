import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa"
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi"

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-10">

          {/* Contact Us */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Contact Us</h3>

            <div className="space-y-3 text-sm text-gray-300">
              <div className="flex items-start gap-2">
                <FiMapPin className="mt-1" />
                <p>
                  1 Lambton Place,<br />
                  Leeds, LS8 5PF,<br />
                  United Kingdom
                </p>
              </div>

              <div className="flex items-center gap-2">
                <FiPhone />
                <p>Call : +44 7723957343</p>
              </div>

              <div className="flex items-center gap-2">
                <FiMail />
                <p>Email : info@dexperts.co.uk</p>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex gap-5 mt-6 text-xl">
              <FaFacebookF className="cursor-pointer hover:text-orange-500 transition" />
              <FaInstagram className="cursor-pointer hover:text-orange-500 transition" />
              <FaWhatsapp className="cursor-pointer hover:text-orange-500 transition" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Quick links</h3>

            <ul className="space-y-3 text-sm text-gray-300">
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

          {/* Info */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Info</h3>

            <p className="text-sm text-gray-300 leading-6">
              Comprehensive Digital Services for Visa & Immigration,
              Graphic Design, Web Design, and More.
            </p>
          </div>

          {/* Subscribe */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Subscribe email</h3>

            <input
              type="email"
              placeholder="Your Email"
              className="w-full bg-transparent border-b border-gray-500 outline-none pb-2 text-sm mb-6"
            />

            <button className="w-full bg-orange-600 hover:bg-orange-700 py-3 text-sm font-semibold transition">
              SUBSCRIBE
            </button>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mt-14 pt-6 text-center text-sm text-gray-400">
          2024 All Rights Reserved. Dexperts
        </div>
      </div>
    </footer>
  )
}

export default Footer
