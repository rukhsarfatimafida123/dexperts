import aboutSmall from "../assets/logo2.png";
import aboutLarge from "../assets/about-img 2.png";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  const handleReadMore = () => {
    navigate("/contact");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="w-full py-20 relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
      
      {/* Abstract Shape Background */}
      <div className="absolute top-[-100px] left-[-100px] w-[500px] h-[500px] bg-indigo-100 rounded-full mix-blend-multiply opacity-20 pointer-events-none"></div>
      <div className="absolute bottom-[-150px] right-[-150px] w-[600px] h-[600px] bg-pink-100 rounded-full mix-blend-multiply opacity-20 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-center gap-20 relative z-10">

        {/* LEFT IMAGES */}
        <div className="relative flex justify-center md:justify-start">

          {/* Large Image */}
          <div className="w-[340px] md:w-[380px] rounded-2xl overflow-hidden shadow-xl transform transition-transform duration-700 hover:scale-105">
            <img
              src={aboutLarge}
              alt="About Large"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Small Image */}
          <div className="absolute bottom-[-30px] left-[-30px] w-[180px] md:w-[200px] rounded-2xl overflow-hidden shadow-2xl">
            <img
              src={aboutSmall}
              alt="About Small"
              className="w-full h-full object-cover"
            />
          </div>

        </div>

        {/* RIGHT CONTENT */}
        <div className="md:w-1/2 flex flex-col items-start text-left">
          <h2 className="text-4xl md:text-5xl font-bold text-indigo-800 mb-6">
            About Us
          </h2>

          <p className="text-gray-700 leading-relaxed text-base md:text-lg">
            At Experts, we specialize in delivering a wide range of digital
            solutions tailored to meet your needs. We assist with visa
            immigration processes, ensuring a smooth and hassle-free
            experience. Our creative professionals excel in web and graphic
            design, bringing your vision to life. Additionally, we offer
            efficient form filling services, saving you time and effort on
            paperwork.
          </p>

          <button
            onClick={handleReadMore}
            className="mt-8 bg-red-700 text-white px-8 py-3 rounded-md font-semibold hover:bg-red-800 transition shadow-md"
          >
            Read More →
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;