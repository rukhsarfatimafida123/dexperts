import pdfImg from "../assets/pdfsmarttools.png";
import civilImg from "../assets/civiliengpro.png";

const DigitalProducts = () => {
  return (
    <section className="w-full bg-gray-200 py-20">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-indigo-800">
            Our Digital Products
          </h2>
          <p className="mt-4 text-gray-700">
            We build practical, high-performance tools to make your digital work smarter and faster.
          </p>
        </div>

        {/* Outer Main Card */}
        <div className="bg-gray-100 rounded-3xl shadow-xl p-10">

          <div className="grid md:grid-cols-2 gap-10">

            {/* ---------- CARD 1 ---------- */}
            <div className="bg-white rounded-2xl shadow-md p-6">

              <div className="bg-gray-100 rounded-xl p-6 flex items-center justify-center">
                <img
                  src={pdfImg}
                  alt="PDF Smart Tools"
                  className="w-full max-w-xs"
                />
              </div>

              <h3 className="mt-6 text-lg font-semibold text-indigo-700">
                PDF Smart Tools
              </h3>

              <p className="mt-3 text-gray-700 text-sm leading-relaxed">
                An all-in-one online platform to compress, convert, edit, merge,
                and protect PDF documents — fast and secure.
              </p>

              <a
                href="https://pdfsmarttools.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-block w-full text-center bg-red-600 hover:bg-red-700 text-white font-medium py-3 rounded-lg transition"
              >
                Visit Website
              </a>
            </div>

            {/* ---------- CARD 2 ---------- */}
            <div className="bg-white rounded-2xl shadow-md p-6">

              <div className="bg-gray-100 rounded-xl p-6 flex items-center justify-center">
                <img
                  src={civilImg}
                  alt="CivilEng Pro"
                  className="w-full max-w-xs"
                />
              </div>

              <h3 className="mt-6 text-lg font-semibold text-indigo-700">
                CivilEng Pro
              </h3>

              <p className="mt-3 text-gray-700 text-sm leading-relaxed">
                Coming soon: intelligent tools for civil engineering estimation,
                planning, and design management — designed for professionals.
              </p>

              <a
                href="#"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="mt-6 inline-block w-full text-center bg-indigo-700 hover:bg-indigo-800 text-white font-medium py-3 rounded-lg transition"
              >
                Launching Soon
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default DigitalProducts;
