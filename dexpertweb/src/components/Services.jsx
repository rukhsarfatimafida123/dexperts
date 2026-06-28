import bgImage from "../assets/sow.jpg";
import { useEffect, useRef } from "react";

const Services = () => {
  const borderRef = useRef(null);

  useEffect(() => {
    const border = borderRef.current;
    if (!border) return;

    let start = null;
    const duration = 3000; // 3 seconds for one full rotation

    const animate = (timestamp) => {
      if (!start) start = timestamp;
      const progress = (timestamp - start) % duration;
      const percentage = (progress / duration) * 100;
      
      // Create conic gradient with white segment that moves
      border.style.background = `conic-gradient(
        from 0deg,
        transparent ${percentage}%,
        white ${percentage}%,
        white ${percentage + 5}%,
        transparent ${percentage + 5}%,
        transparent 100%
      )`;
      
      requestAnimationFrame(animate);
    };

    const animation = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animation);
  }, []);

  return (
    <section
      className="relative w-full bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#1a1d5a]/60 via-[#1a1d5a]/40 to-[#1a1d5a]/50"></div>

      <div className="relative max-w-7xl mx-auto px-8 lg:px-16 py-20 lg:py-32 grid lg:grid-cols-2 gap-12 items-center">

        {/* LEFT CONTENT */}
        <div className="text-white text-center lg:text-left">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
            SEE OUR <br /> WORK
          </h2>
          <p className="mt-6 text-gray-200 text-base sm:text-lg max-w-xl mx-auto lg:mx-0 text-justify">
            At Dexperts, our portfolio showcases our dedication to excellence
            across various services. We have successfully guided clients
            through complex visa immigration processes, created stunning web
            and graphic designs, and provided efficient form filling services.
          </p>
          <button className="mt-8 px-8 py-4 rounded-full bg-gradient-to-r from-amber-600 to-orange-600 hover:scale-105 transition duration-300 font-semibold shadow-lg">
            See More Videos
          </button>
        </div>

        {/* RIGHT SIDE PLAY BUTTON - EXACT MATCH */}
        <div className="flex justify-center lg:justify-end mt-8 lg:mt-0">
          <div className="relative flex items-center justify-center">
            {/* Main button container with indigo to violet gradient and moved inside */}
            <div className="relative flex items-center gap-6 px-8 py-4 rounded-full bg-gradient-to-r from-indigo-600 to-violet-600 shadow-2xl -translate-x-4">
              
              {/* RGB Border Layer */}
              <div className="absolute inset-0 rounded-full p-[2px] bg-gradient-to-r from-[#ff3c00] via-[#00ff00] to-[#0000ff]">
                <div className="w-full h-full rounded-full bg-gradient-to-r from-indigo-600 to-violet-600"></div>
              </div>
              
              {/* Moving White Light Animation */}
              <div
                ref={borderRef}
                className="absolute inset-0 rounded-full"
                style={{
                  mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                  maskComposite: 'exclude',
                  padding: '2px',
                }}
              />
              
              {/* Play icon - on left */}
              <div className="relative z-10 w-12 h-12 rounded-full bg-gradient-to-br from-[#ff3c00] to-[#ff7a00] flex items-center justify-center shadow-lg">
                <div
                  className="ml-[2px]"
                  style={{
                    width: 0,
                    height: 0,
                    borderTop: "8px solid transparent",
                    borderBottom: "8px solid transparent",
                    borderLeft: "12px solid white",
                  }}
                />
              </div>
              
              {/* PLAY text - on right */}
              <span className="relative z-10 text-white font-medium tracking-[0.2em] text-sm">
                PLAY
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Services;