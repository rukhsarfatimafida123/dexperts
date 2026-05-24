import { Link } from "react-router-dom";
import { Heart, MessageSquare, Share2, Calendar, ArrowRight } from "lucide-react";
import { useState } from "react";
import newsBg from "../assets/news.jpg"; // Import background image

const LatestNews = () => {
  const [liked, setLiked] = useState({});

  const news = [
    {
      id: 1,
      title: "Study in the UK Without IELTS!",
      date: "04",
      month: "JULY",
      year: "2024",
      description: "No IELTS required for a UK Short Term Study Visa! Enroll in an English course with a sponsoring college. We assist you in applying for the college, handling your admission process, and managing your visa application. Start your UK study journey with our expert support and comprehensive guidance every step of the way!",
      category: "Education",
      likes: 124,
      comments: 18,
      shares: 42
    },
    {
      id: 2,
      title: "UK Work Visa Updates 2024",
      date: "18",
      month: "JULY",
      year: "2024",
      description: "New opportunities for skilled workers in the UK! The UK government has announced changes to the Skilled Worker Visa requirements, making it easier for international professionals to work in the UK. Learn about the new salary thresholds, shortage occupation lists, and how Dexperts can help you secure your UK work visa.",
      category: "Visa Updates",
      likes: 89,
      comments: 12,
      shares: 28
    }
  ];

  const handleLike = (id) => {
    setLiked(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section className="w-full py-24 bg-gradient-to-br from-gray-50 via-white to-indigo-50 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-indigo-200 to-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-indigo-300 to-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* FIRST CARD - Latest News with Background Image */}
          <div className="group relative">
            <div
              className="bg-cover bg-center rounded-2xl shadow-lg overflow-hidden h-full hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              style={{ backgroundImage: `url(${newsBg})` }}
            >
              {/* Dark Overlay for better text readability */}
              <div className=" p-8 h-full flex flex-col justify-center min-h-[400px]">
                <h2 className="text-4xl md:text-5xl font-bold text-black mb-6 leading-tight">
                  Latest{" "}
                  <span className="text-indigo-900">
                    News
                  </span>
                </h2>
                <div className="mt-6 bg-white/40 backdrop-blur-lg rounded-2xl px-6 py-5 shadow-md border border-white/30">
                  <p className="text-indigo-700 text-lg leading-relaxed font-medium">
                    Stay updated with the latest news and insights from Dexperts
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* SECOND & THIRD CARDS - News Cards */}
          {news.map((item) => (
            <div key={item.id} className="group relative">
              {/* Card */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-indigo-100 hover:shadow-2xl transition-all duration-500 h-full flex flex-col hover:-translate-y-2">

                {/* Color Bar at Top */}
                <div className="h-2 bg-gradient-to-r from-indigo-500 via-indigo-600 to-indigo-700"></div>

                {/* Category Badge */}
                <div className="px-6 pt-6">
                  <span className="inline-block bg-indigo-100 text-indigo-700 text-xs font-semibold px-3 py-1 rounded-full">
                    {item.category}
                  </span>
                </div>

                {/* Title */}
                <div className="px-6 pt-3">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 leading-tight group-hover:text-indigo-700 transition-colors duration-300">
                    {item.title}
                  </h3>
                </div>

                {/* Date */}
                <div className="px-6 mt-3 flex items-center gap-2 text-gray-500 text-sm">
                  <Calendar size={14} />
                  <span>{item.date} {item.month}, {item.year}</span>
                </div>

                {/* Description */}
                <div className="px-6 mt-4 flex-grow">
                  <p className="text-gray-600 text-sm leading-relaxed line-clamp-4">
                    {item.description}
                  </p>
                </div>

                {/* Icons Section */}
                <div className="px-6 mt-4 pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-6">
                    {/* Like Button */}
                    <button
                      onClick={() => handleLike(item.id)}
                      className="flex items-center gap-2 text-gray-400 hover:text-red-500 transition-colors"
                    >
                      <Heart
                        size={18}
                        className={liked[item.id] ? 'fill-red-500 text-red-500' : ''}
                      />
                      <span className="text-xs">{liked[item.id] ? item.likes + 1 : item.likes}</span>
                    </button>

                    {/* Comment */}
                    <div className="flex items-center gap-2 text-gray-400">
                      <MessageSquare size={18} />
                      <span className="text-xs">{item.comments}</span>
                    </div>

                    {/* Share */}
                    <div className="flex items-center gap-2 text-gray-400">
                      <Share2 size={18} />
                      <span className="text-xs">{item.shares}</span>
                    </div>
                  </div>
                </div>

                {/* Read More Button */}
                <div className="px-6 pb-6 mt-4">
                  <Link
                    to="/visa"
                    className="inline-flex items-center gap-1 text-indigo-600 font-semibold text-sm hover:text-indigo-800 transition-colors"
                  >
                    READ MORE
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>

              {/* Date Badge */}
              <div className="absolute -top-3 -right-3 bg-gradient-to-br from-red-500 to-red-600 text-white rounded-xl shadow-lg">
                <div className="px-3 py-2 text-center">
                  <p className="text-lg font-bold leading-tight">{item.date}</p>
                  <p className="text-xs font-semibold tracking-wider">{item.month}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CSS for line-clamp */}
      <style jsx>{`
        .line-clamp-4 {
          display: -webkit-box;
          -webkit-line-clamp: 4;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
};

export default LatestNews;