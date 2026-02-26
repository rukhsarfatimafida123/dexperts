import { Link } from "react-router-dom";
import { Heart, MessageSquare, Share2 } from "lucide-react";

const LatestNews = () => {
  const news = [1, 2];

  return (
    <section className="w-full py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row gap-8">

        {/* LEFT SIDE RECTANGLE */}
        <div className="md:w-1/4 flex flex-col justify-start bg-indigo-50 p-6 rounded-2xl shadow-md h-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-indigo-800 mb-6">
            Latest News
          </h2>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed">
            Stay updated with the latest news and insights from Dexperts
          </p>
        </div>

        {/* RIGHT SIDE CARDS */}
        <div className="md:w-3/4 flex gap-12 overflow-x-auto scrollbar-hide">

          {news.map((item) => (
            <div key={item} className="flex-shrink-0 w-72 md:w-80 relative group">

              {/* Card */}
              <div className="bg-white p-6 md:p-8 shadow-lg rounded-xl border border-red-200 hover:shadow-2xl hover:-translate-y-1 transition-transform duration-300 h-full flex flex-col justify-between">
                <h3 className="text-xl md:text-2xl font-semibold text-gray-900">
                  Study in the UK Without IELTS!
                </h3>

                {/* Icons */}
                <div className="flex items-center gap-6 mt-4 text-gray-400">
                  <div className="flex items-center gap-2 text-sm">
                    <Heart size={16} />
                    <span>Like</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <MessageSquare size={16} />
                    <span>Comment</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Share2 size={16} />
                    <span>Share</span>
                  </div>
                </div>

                {/* Content */}
                <p className="mt-4 text-gray-800 text-sm leading-relaxed flex-grow">
                  No IELTS required for a UK Short Term Study Visa! Enroll
                  in an English course with a sponsoring college. We assist
                  you in applying for the college, handling your admission
                  process, and managing your visa application. Start your
                  UK study journey with our expert support and
                  comprehensive guidance every step of the way!
                </p>

                {/* Read More Button (smaller) */}
                <Link
                  to="/visa"
                  className="inline-block mt-8 bg-indigo-700 hover:bg-indigo-800 text-white font-semibold px-3 py-1.5 rounded-md transition text-sm"
                >
                  READ MORE
                </Link>
              </div>

              {/* Date Badge */}
              <div className="absolute top-9 -right-4 bg-red-600 text-white text-xs font-semibold px-3 py-2 text-center rounded-lg">
                <p>04</p>
                <p>JULY</p>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default LatestNews;