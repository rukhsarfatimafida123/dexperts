import bgImage from "../assets/blog-bg.png"

const Services = () => {
  return (
    <section
      className="relative w-full bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Softer Overlay (Image More Visible) */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#2c2f7a]/35 via-[#2c2f7a]/25 to-[#2c2f7a]/35"></div>

      <div className="relative max-w-6xl mx-auto px-10 lg:px-16 py-28 flex flex-col md:flex-row items-center gap-14">

        {/* LEFT CONTENT */}
        <div className="text-white md:w-1/2">
          <h2 className="text-5xl font-extrabold uppercase tracking-wide leading-tight">
            SEE OUR <br /> WORK
          </h2>

          <p className="mt-8 text-[17px] text-gray-200 leading-7">
            At Dexperts, our portfolio showcases our dedication to excellence across 
            various services. We have successfully guided clients through complex 
            visa immigration processes, created stunning web and graphic designs, 
            and provided efficient form filling services. Ready to see what we can do 
            for you?
          </p>

          <a
            href="/contact"
            className="inline-block mt-10 bg-[#ff3c00] hover:bg-[#e63600] text-white px-8 py-4 text-lg font-medium transition duration-300"
          >
            See More Video
          </a>
        </div>
        {/* RIGHT PLAY BUTTON */}
<div className="md:w-1/2 flex justify-start md:justify-center">
  <div className="play-wrapper relative flex items-center justify-center">

    <div className="play-btn relative flex items-center justify-center">
      <div className="triangle"></div>
    </div>

  </div>
</div>


      </div>
    </section>
  )
}

export default Services
