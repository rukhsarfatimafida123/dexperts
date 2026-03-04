import React, { useState } from "react";
import { Mail, Phone, MapPin, ChevronDown, Search } from "lucide-react";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import contactBg from "../assets/blog-bg.png";
import ReactCountryFlag from "react-country-flag";

const ContactPage = () => {
    const [selectedCountry, setSelectedCountry] = useState({
        code: "GB",
        dialCode: "+44",
        name: "United Kingdom"
    });

    const [isOpen, setIsOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");

    // Complete countries data with dial codes
    const countries = [
        { code: "AF", dialCode: "+93", name: "Afghanistan" },
        { code: "AL", dialCode: "+355", name: "Albania" },
        { code: "DZ", dialCode: "+213", name: "Algeria" },
        { code: "AD", dialCode: "+376", name: "Andorra" },
        { code: "AO", dialCode: "+244", name: "Angola" },
        { code: "AG", dialCode: "+1", name: "Antigua and Barbuda" },
        { code: "AR", dialCode: "+54", name: "Argentina" },
        { code: "AM", dialCode: "+374", name: "Armenia" },
        { code: "AU", dialCode: "+61", name: "Australia" },
        { code: "AT", dialCode: "+43", name: "Austria" },
        { code: "AZ", dialCode: "+994", name: "Azerbaijan" },
        { code: "BS", dialCode: "+1", name: "Bahamas" },
        { code: "BH", dialCode: "+973", name: "Bahrain" },
        { code: "BD", dialCode: "+880", name: "Bangladesh" },
        { code: "BB", dialCode: "+1", name: "Barbados" },
        { code: "BY", dialCode: "+375", name: "Belarus" },
        { code: "BE", dialCode: "+32", name: "Belgium" },
        { code: "BZ", dialCode: "+501", name: "Belize" },
        { code: "BJ", dialCode: "+229", name: "Benin" },
        { code: "BT", dialCode: "+975", name: "Bhutan" },
        { code: "BO", dialCode: "+591", name: "Bolivia" },
        { code: "BA", dialCode: "+387", name: "Bosnia and Herzegovina" },
        { code: "BW", dialCode: "+267", name: "Botswana" },
        { code: "BR", dialCode: "+55", name: "Brazil" },
        { code: "BN", dialCode: "+673", name: "Brunei" },
        { code: "BG", dialCode: "+359", name: "Bulgaria" },
        { code: "BF", dialCode: "+226", name: "Burkina Faso" },
        { code: "BI", dialCode: "+257", name: "Burundi" },
        { code: "KH", dialCode: "+855", name: "Cambodia" },
        { code: "CM", dialCode: "+237", name: "Cameroon" },
        { code: "CA", dialCode: "+1", name: "Canada" },
        { code: "CV", dialCode: "+238", name: "Cape Verde" },
        { code: "CF", dialCode: "+236", name: "Central African Republic" },
        { code: "TD", dialCode: "+235", name: "Chad" },
        { code: "CL", dialCode: "+56", name: "Chile" },
        { code: "CN", dialCode: "+86", name: "China" },
        { code: "CO", dialCode: "+57", name: "Colombia" },
        { code: "KM", dialCode: "+269", name: "Comoros" },
        { code: "CG", dialCode: "+242", name: "Congo" },
        { code: "CR", dialCode: "+506", name: "Costa Rica" },
        { code: "HR", dialCode: "+385", name: "Croatia" },
        { code: "CU", dialCode: "+53", name: "Cuba" },
        { code: "CY", dialCode: "+357", name: "Cyprus" },
        { code: "CZ", dialCode: "+420", name: "Czech Republic" },
        { code: "DK", dialCode: "+45", name: "Denmark" },
        { code: "DJ", dialCode: "+253", name: "Djibouti" },
        { code: "DM", dialCode: "+1", name: "Dominica" },
        { code: "DO", dialCode: "+1", name: "Dominican Republic" },
        { code: "EC", dialCode: "+593", name: "Ecuador" },
        { code: "EG", dialCode: "+20", name: "Egypt" },
        { code: "SV", dialCode: "+503", name: "El Salvador" },
        { code: "GQ", dialCode: "+240", name: "Equatorial Guinea" },
        { code: "ER", dialCode: "+291", name: "Eritrea" },
        { code: "EE", dialCode: "+372", name: "Estonia" },
        { code: "SZ", dialCode: "+268", name: "Eswatini" },
        { code: "ET", dialCode: "+251", name: "Ethiopia" },
        { code: "FJ", dialCode: "+679", name: "Fiji" },
        { code: "FI", dialCode: "+358", name: "Finland" },
        { code: "FR", dialCode: "+33", name: "France" },
        { code: "GA", dialCode: "+241", name: "Gabon" },
        { code: "GM", dialCode: "+220", name: "Gambia" },
        { code: "GE", dialCode: "+995", name: "Georgia" },
        { code: "DE", dialCode: "+49", name: "Germany" },
        { code: "GH", dialCode: "+233", name: "Ghana" },
        { code: "GR", dialCode: "+30", name: "Greece" },
        { code: "GD", dialCode: "+1", name: "Grenada" },
        { code: "GT", dialCode: "+502", name: "Guatemala" },
        { code: "GN", dialCode: "+224", name: "Guinea" },
        { code: "GW", dialCode: "+245", name: "Guinea-Bissau" },
        { code: "GY", dialCode: "+592", name: "Guyana" },
        { code: "HT", dialCode: "+509", name: "Haiti" },
        { code: "HN", dialCode: "+504", name: "Honduras" },
        { code: "HU", dialCode: "+36", name: "Hungary" },
        { code: "IS", dialCode: "+354", name: "Iceland" },
        { code: "IN", dialCode: "+91", name: "India" },
        { code: "ID", dialCode: "+62", name: "Indonesia" },
        { code: "IR", dialCode: "+98", name: "Iran" },
        { code: "IQ", dialCode: "+964", name: "Iraq" },
        { code: "IE", dialCode: "+353", name: "Ireland" },
        { code: "IL", dialCode: "+972", name: "Israel" },
        { code: "IT", dialCode: "+39", name: "Italy" },
        { code: "JM", dialCode: "+1", name: "Jamaica" },
        { code: "JP", dialCode: "+81", name: "Japan" },
        { code: "JO", dialCode: "+962", name: "Jordan" },
        { code: "KZ", dialCode: "+7", name: "Kazakhstan" },
        { code: "KE", dialCode: "+254", name: "Kenya" },
        { code: "KI", dialCode: "+686", name: "Kiribati" },
        { code: "KW", dialCode: "+965", name: "Kuwait" },
        { code: "KG", dialCode: "+996", name: "Kyrgyzstan" },
        { code: "LA", dialCode: "+856", name: "Laos" },
        { code: "LV", dialCode: "+371", name: "Latvia" },
        { code: "LB", dialCode: "+961", name: "Lebanon" },
        { code: "LS", dialCode: "+266", name: "Lesotho" },
        { code: "LR", dialCode: "+231", name: "Liberia" },
        { code: "LY", dialCode: "+218", name: "Libya" },
        { code: "LI", dialCode: "+423", name: "Liechtenstein" },
        { code: "LT", dialCode: "+370", name: "Lithuania" },
        { code: "LU", dialCode: "+352", name: "Luxembourg" },
        { code: "MG", dialCode: "+261", name: "Madagascar" },
        { code: "MW", dialCode: "+265", name: "Malawi" },
        { code: "MY", dialCode: "+60", name: "Malaysia" },
        { code: "MV", dialCode: "+960", name: "Maldives" },
        { code: "ML", dialCode: "+223", name: "Mali" },
        { code: "MT", dialCode: "+356", name: "Malta" },
        { code: "MH", dialCode: "+692", name: "Marshall Islands" },
        { code: "MR", dialCode: "+222", name: "Mauritania" },
        { code: "MU", dialCode: "+230", name: "Mauritius" },
        { code: "MX", dialCode: "+52", name: "Mexico" },
        { code: "FM", dialCode: "+691", name: "Micronesia" },
        { code: "MD", dialCode: "+373", name: "Moldova" },
        { code: "MC", dialCode: "+377", name: "Monaco" },
        { code: "MN", dialCode: "+976", name: "Mongolia" },
        { code: "ME", dialCode: "+382", name: "Montenegro" },
        { code: "MA", dialCode: "+212", name: "Morocco" },
        { code: "MZ", dialCode: "+258", name: "Mozambique" },
        { code: "MM", dialCode: "+95", name: "Myanmar" },
        { code: "NA", dialCode: "+264", name: "Namibia" },
        { code: "NR", dialCode: "+674", name: "Nauru" },
        { code: "NP", dialCode: "+977", name: "Nepal" },
        { code: "NL", dialCode: "+31", name: "Netherlands" },
        { code: "NZ", dialCode: "+64", name: "New Zealand" },
        { code: "NI", dialCode: "+505", name: "Nicaragua" },
        { code: "NE", dialCode: "+227", name: "Niger" },
        { code: "NG", dialCode: "+234", name: "Nigeria" },
        { code: "KP", dialCode: "+850", name: "North Korea" },
        { code: "MK", dialCode: "+389", name: "North Macedonia" },
        { code: "NO", dialCode: "+47", name: "Norway" },
        { code: "OM", dialCode: "+968", name: "Oman" },
        { code: "PK", dialCode: "+92", name: "Pakistan" },
        { code: "PW", dialCode: "+680", name: "Palau" },
        { code: "PS", dialCode: "+970", name: "Palestine" },
        { code: "PA", dialCode: "+507", name: "Panama" },
        { code: "PG", dialCode: "+675", name: "Papua New Guinea" },
        { code: "PY", dialCode: "+595", name: "Paraguay" },
        { code: "PE", dialCode: "+51", name: "Peru" },
        { code: "PH", dialCode: "+63", name: "Philippines" },
        { code: "PL", dialCode: "+48", name: "Poland" },
        { code: "PT", dialCode: "+351", name: "Portugal" },
        { code: "QA", dialCode: "+974", name: "Qatar" },
        { code: "RO", dialCode: "+40", name: "Romania" },
        { code: "RU", dialCode: "+7", name: "Russia" },
        { code: "RW", dialCode: "+250", name: "Rwanda" },
        { code: "KN", dialCode: "+1", name: "Saint Kitts and Nevis" },
        { code: "LC", dialCode: "+1", name: "Saint Lucia" },
        { code: "VC", dialCode: "+1", name: "Saint Vincent and the Grenadines" },
        { code: "WS", dialCode: "+685", name: "Samoa" },
        { code: "SM", dialCode: "+378", name: "San Marino" },
        { code: "ST", dialCode: "+239", name: "Sao Tome and Principe" },
        { code: "SA", dialCode: "+966", name: "Saudi Arabia" },
        { code: "SN", dialCode: "+221", name: "Senegal" },
        { code: "RS", dialCode: "+381", name: "Serbia" },
        { code: "SC", dialCode: "+248", name: "Seychelles" },
        { code: "SL", dialCode: "+232", name: "Sierra Leone" },
        { code: "SG", dialCode: "+65", name: "Singapore" },
        { code: "SK", dialCode: "+421", name: "Slovakia" },
        { code: "SI", dialCode: "+386", name: "Slovenia" },
        { code: "SB", dialCode: "+677", name: "Solomon Islands" },
        { code: "SO", dialCode: "+252", name: "Somalia" },
        { code: "ZA", dialCode: "+27", name: "South Africa" },
        { code: "KR", dialCode: "+82", name: "South Korea" },
        { code: "SS", dialCode: "+211", name: "South Sudan" },
        { code: "ES", dialCode: "+34", name: "Spain" },
        { code: "LK", dialCode: "+94", name: "Sri Lanka" },
        { code: "SD", dialCode: "+249", name: "Sudan" },
        { code: "SR", dialCode: "+597", name: "Suriname" },
        { code: "SE", dialCode: "+46", name: "Sweden" },
        { code: "CH", dialCode: "+41", name: "Switzerland" },
        { code: "SY", dialCode: "+963", name: "Syria" },
        { code: "TW", dialCode: "+886", name: "Taiwan" },
        { code: "TJ", dialCode: "+992", name: "Tajikistan" },
        { code: "TZ", dialCode: "+255", name: "Tanzania" },
        { code: "TH", dialCode: "+66", name: "Thailand" },
        { code: "TL", dialCode: "+670", name: "Timor-Leste" },
        { code: "TG", dialCode: "+228", name: "Togo" },
        { code: "TO", dialCode: "+676", name: "Tonga" },
        { code: "TT", dialCode: "+1", name: "Trinidad and Tobago" },
        { code: "TN", dialCode: "+216", name: "Tunisia" },
        { code: "TR", dialCode: "+90", name: "Turkey" },
        { code: "TM", dialCode: "+993", name: "Turkmenistan" },
        { code: "TV", dialCode: "+688", name: "Tuvalu" },
        { code: "UG", dialCode: "+256", name: "Uganda" },
        { code: "UA", dialCode: "+380", name: "Ukraine" },
        { code: "AE", dialCode: "+971", name: "United Arab Emirates" },
        { code: "GB", dialCode: "+44", name: "United Kingdom" },
        { code: "US", dialCode: "+1", name: "United States" },
        { code: "UY", dialCode: "+598", name: "Uruguay" },
        { code: "UZ", dialCode: "+998", name: "Uzbekistan" },
        { code: "VU", dialCode: "+678", name: "Vanuatu" },
        { code: "VA", dialCode: "+379", name: "Vatican City" },
        { code: "VE", dialCode: "+58", name: "Venezuela" },
        { code: "VN", dialCode: "+84", name: "Vietnam" },
        { code: "YE", dialCode: "+967", name: "Yemen" },
        { code: "ZM", dialCode: "+260", name: "Zambia" },
        { code: "ZW", dialCode: "+263", name: "Zimbabwe" }
    ].sort((a, b) => a.name.localeCompare(b.name));

    // Filter countries based on search
    const filteredCountries = countries.filter(country =>
        country.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        country.dialCode.includes(searchTerm) ||
        country.code.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="w-full">

            {/* ================= HERO SECTION ================= */}
            <section
                className="relative w-full h-[60vh] md:h-[70vh] bg-cover bg-center flex items-center justify-center"
                style={{ backgroundImage: `url(${contactBg})` }}
            >
                <div className="absolute inset-0 "></div>
                <div className="relative z-10 text-center text-white px-6">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
                        Contact Us
                    </h1>
                    <p className="mt-4 text-sm sm:text-base md:text-lg max-w-2xl mx-auto text-indigo-200">
                        Let's discuss how we can grow your business together.
                    </p>
                    <div className="w-20 h-1 bg-red-600 mx-auto mt-6 rounded-full"></div>
                </div>
            </section>

            {/* ================= CONTACT INFO & FORM SECTION ================= */}
            <div className="py-20 bg-indigo-50">
                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">

                    {/* Get in Touch Heading */}
                    <h2 className="text-3xl md:text-4xl font-bold text-indigo-900 mb-12">
                        Get in touch
                    </h2>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

                        {/* Left Side - Single Contact Info Card */}
                        <div>
                            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 space-y-8">

                                {/* Visit Us */}
                                <div>
                                    <h3 className="text-xl font-semibold text-indigo-900 mb-2 flex items-center">
                                        <MapPin className="text-red-600 mr-2" size={24} />
                                        Visit us
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed pl-8">
                                        1 Lambton Place,
                                        Leeds, LS8 5PF,<br />
                                        United Kingdom
                                    </p>
                                </div>

                                {/* Call Us */}
                                <div>
                                    <h3 className="text-xl font-semibold text-indigo-900 mb-2 flex items-center">
                                        <Phone className="text-red-600 mr-2" size={24} />
                                        Call us
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed pl-8">
                                        <a href="tel:+4407723957343" className="hover:text-red-600 transition">
                                            +44 (0)772 395 7343
                                        </a>
                                    </p>
                                </div>

                                {/* WhatsApp */}
                                <div>
                                    <h3 className="text-xl font-semibold text-indigo-900 mb-2 flex items-center">
                                        <FaWhatsapp className="text-red-600 mr-2" size={24} />
                                        WhatsApp
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed pl-8">
                                        <a
                                            href="https://wa.me/447723957343"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="hover:text-red-600 transition"
                                        >
                                            +44 (0)772 395 7343
                                        </a>
                                    </p>
                                </div>

                                {/* Email */}
                                <div>
                                    <h3 className="text-xl font-semibold text-indigo-900 mb-2 flex items-center">
                                        <Mail className="text-red-600 mr-2" size={24} />
                                        E-Mail
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed pl-8">
                                        <a href="mailto:info@dexperts.co.uk" className="hover:text-red-600 transition">
                                            info@dexperts.co.uk
                                        </a>
                                    </p>
                                </div>

                                {/* Social Media - Only Instagram, Facebook, WhatsApp */}
                                {/* Social Media - Only Instagram, Facebook, WhatsApp */}
                                <div>
                                    <h3 className="text-xl font-semibold text-indigo-900 mb-4 flex items-center">
                                        <span className="mr-2">🌐</span>
                                        Social media
                                    </h3>
                                    <div className="flex space-x-4 pl-8">
                                        <a
                                            href="https://facebook.com"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-900 hover:bg-red-600 hover:text-white transition duration-300"
                                            aria-label="Facebook"
                                        >
                                            <FaFacebookF size={20} />
                                        </a>
                                        <a
                                            href="https://instagram.com"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-900 hover:bg-red-600 hover:text-white transition duration-300"
                                            aria-label="Instagram"
                                        >
                                            <FaInstagram size={20} />
                                        </a>
                                        <a
                                            href="https://wa.me/447723957343"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-900 hover:bg-red-600 hover:text-white transition duration-300"
                                            aria-label="WhatsApp"
                                        >
                                            <FaWhatsapp size={20} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Side - Form */}
                        <div>
                            <form className="bg-white shadow-2xl p-8 rounded-2xl space-y-6 border border-indigo-100">

                                {/* First Name & Last Name Row */}
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                                        <input
                                            type="text"
                                            placeholder="John"
                                            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-700"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                                        <input
                                            type="text"
                                            placeholder="Doe"
                                            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-700"
                                            required
                                        />
                                    </div>
                                </div>

                                {/* Email */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                                    <input
                                        type="email"
                                        placeholder="john.doe@example.com"
                                        className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-700"
                                        required
                                    />
                                </div>

                                {/* Phone Number with Country Code Selector and Flag */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                                    <div className="flex relative">
                                        {/* Custom Country Selector with Flag */}
                                        <div className="relative">
                                            <button
                                                type="button"
                                                onClick={() => setIsOpen(!isOpen)}
                                                className="flex items-center justify-between w-32 border border-gray-300 p-3 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-indigo-700 bg-gray-50 hover:bg-gray-100 transition"
                                            >
                                                <div className="flex items-center space-x-2">
                                                    <ReactCountryFlag
                                                        countryCode={selectedCountry.code}
                                                        svg
                                                        style={{
                                                            width: '1.5em',
                                                            height: '1.5em',
                                                        }}
                                                        className="rounded-sm"
                                                    />
                                                    <span className="text-sm">{selectedCountry.dialCode}</span>
                                                </div>
                                                <ChevronDown size={16} className="text-gray-500" />
                                            </button>

                                            {/* Dropdown Menu with Search */}
                                            {isOpen && (
                                                <div className="absolute top-full left-0 mt-1 w-80 bg-white border border-gray-200 rounded-lg shadow-xl z-50">
                                                    {/* Search Input */}
                                                    <div className="p-3 border-b border-gray-200">
                                                        <div className="flex items-center bg-gray-50 rounded-lg px-3 py-2">
                                                            <Search size={18} className="text-gray-400 mr-2" />
                                                            <input
                                                                type="text"
                                                                placeholder="Search country or code..."
                                                                className="w-full bg-transparent border-none focus:outline-none text-sm"
                                                                value={searchTerm}
                                                                onChange={(e) => setSearchTerm(e.target.value)}
                                                            />
                                                        </div>
                                                    </div>

                                                    {/* Countries List */}
                                                    <div className="max-h-80 overflow-y-auto">
                                                        {filteredCountries.length > 0 ? (
                                                            filteredCountries.map((country) => (
                                                                <button
                                                                    key={country.code}
                                                                    type="button"
                                                                    className="flex items-center space-x-3 w-full px-4 py-3 hover:bg-indigo-50 transition text-left border-b border-gray-50 last:border-0"
                                                                    onClick={() => {
                                                                        setSelectedCountry(country);
                                                                        setIsOpen(false);
                                                                        setSearchTerm("");
                                                                    }}
                                                                >
                                                                    <ReactCountryFlag
                                                                        countryCode={country.code}
                                                                        svg
                                                                        style={{
                                                                            width: '1.5em',
                                                                            height: '1.5em',
                                                                        }}
                                                                        className="rounded-sm"
                                                                    />
                                                                    <span className="flex-1 text-sm">{country.name}</span>
                                                                    <span className="text-sm text-gray-500">{country.dialCode}</span>
                                                                </button>
                                                            ))
                                                        ) : (
                                                            <div className="px-4 py-8 text-center text-gray-500">
                                                                No countries found
                                                            </div>
                                                        )}
                                                    </div>

                                                    {/* Country Count */}
                                                    <div className="p-3 border-t border-gray-200 bg-gray-50 text-xs text-gray-500">
                                                        {filteredCountries.length} countries available
                                                    </div>
                                                </div>
                                            )}
                                        </div>

                                        {/* Phone Number Input */}
                                        <input
                                            type="tel"
                                            placeholder="7723 957343"
                                            className="flex-1 border border-gray-300 p-3 rounded-r-lg focus:outline-none focus:ring-2 focus:ring-indigo-700"
                                            required
                                        />
                                    </div>
                                </div>

                                {/* Message */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                                    <textarea
                                        rows="4"
                                        placeholder="Tell us what we can help you with"
                                        className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-700"
                                        required
                                    ></textarea>
                                </div>

                                {/* Checkbox */}
                                <div className="flex items-start">
                                    <input
                                        type="checkbox"
                                        className="mt-1 mr-3"
                                        id="privacy"
                                    />
                                    <label htmlFor="privacy" className="text-sm text-gray-600">
                                        I'd like to receive more information about company. I understand and agree to the Privacy Policy
                                    </label>
                                </div>

                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    className="w-full bg-red-600 text-white py-3 rounded-lg font-semibold hover:bg-red-700 transition duration-300"
                                >
                                    Send Message
                                </button>

                            </form>
                        </div>
                    </div>
                </div>
            </div>

            {/* ================= MAP SECTION (CARD STYLE) ================= */}
            <div className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
                    <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-indigo-100">
                        <div className="h-[400px] md:h-[450px]">
                            <iframe
                                title="Google Map"
                                src="https://maps.google.com/maps?q=Leeds,+LS8+5PF,+United+Kingdom&t=&z=13&ie=UTF8&iwloc=&output=embed"
                                className="w-full h-full border-0"
                                loading="lazy"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ContactPage;