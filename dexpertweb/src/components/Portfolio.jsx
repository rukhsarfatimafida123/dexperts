const Portfolio = () => {
  const portfolioItems = [
    { title: "Visa Immigration" },
    { title: "Web Design" },
    { title: "Graphic Design" },
    { title: "Form Filling" },
  ];

  return (
    <section className="relative w-full bg-gray-950 py-24 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-indigo-800 opacity-20 blur-3xl rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Our Portfolio
          </h2>
          <p className="text-gray-400 mt-6 max-w-3xl mx-auto text-lg">
            Explore our diverse portfolio showcasing excellence in visa
            immigration, web development, graphic design, and digital services.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {portfolioItems.map((item, index) => (
            <div
              key={index}
              className="relative group rounded-2xl overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 shadow-xl hover:shadow-indigo-700/40 transition duration-500"
            >
              {/* Background Effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/80 via-indigo-900/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>

              {/* Content */}
              <div className="relative p-8 h-72 flex flex-col justify-between">
                <div>
                  <div className="w-16 h-16 bg-indigo-700/30 rounded-full flex items-center justify-center text-white text-2xl">
                    ✦
                  </div>

                  <h3 className="mt-6 text-xl font-semibold text-white">
                    {item.title}
                  </h3>
                </div>

                <button className="mt-6 text-sm font-medium text-indigo-400 group-hover:text-white transition">
                  View Project →
                </button>
              </div>

              {/* Hover Border Animation */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-indigo-500 rounded-2xl transition duration-500"></div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Portfolio;