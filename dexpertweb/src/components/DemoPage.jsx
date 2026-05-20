import React from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";

const demoData = {
  "wedding-dress-store": {
    title: "Wedding Dress Store",
    screenshots: [
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1200&auto=format&fit=crop",
    ],
  },
  "portfolio-website": {
    title: "Portfolio Website",
    screenshots: [
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop",
    ],
  },
  "business-landing": {
    title: "Business Landing Page",
    screenshots: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
    ],
  },
  "task-manager": {
    title: "Task Manager App",
    screenshots: [
      "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=1200&auto=format&fit=crop",
    ],
  },
};

const DemoPage = () => {
  const { projectId } = useParams();
  const project = demoData[projectId];

  if (!project) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <h1 className="text-3xl text-gray-900">Project not found</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-cyan-500 to-indigo-500 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {project.title} - Demo
          </h1>
          <p className="text-white/90 text-lg">Project Screenshots</p>
        </div>
      </div>

      {/* Screenshots Grid */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-8">
          {project.screenshots.map((screenshot, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-200"
            >
              <img
                src={screenshot}
                alt={`${project.title} screenshot ${index + 1}`}
                className="w-full h-80 object-cover"
              />
              <div className="p-4">
                <p className="text-gray-600 font-medium">
                  Screenshot {index + 1}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="/web-development"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gray-900 text-white hover:bg-gray-800 transition-colors"
          >
            ← Back to Projects
          </a>
        </div>
      </div>
    </div>
  );
};

export default DemoPage;