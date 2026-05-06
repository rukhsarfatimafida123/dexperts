const Projects = () => {
  const projects = [
    {
      title: 'Wedding Dress Store',
      description: 'A modern e-commerce platform for wedding dresses with beautiful UI and smooth animations.',
      link: 'https://github.com/rukhsarfatimafida123/wed-dress-store',
      icon: '👗',
      color: 'from-pink-500 to-rose-500'
    },
    {
      title: 'Mini Web Projects',
      description: 'Collection of small web applications showcasing various frontend skills and interactivity.',
      link: 'https://github.com/rukhsarfatimafida123',
      icon: '🎯',
      color: 'from-cyan-500 to-blue-500'
    },
    {
      title: 'Portfolio Website',
      description: 'Personal portfolio built with React and Tailwind CSS featuring modern design.',
      link: '#',
      icon: '💼',
      color: 'from-purple-500 to-indigo-500'
    },
    {
      title: 'Task Manager App',
      description: 'A responsive task management application with local storage support.',
      link: '#',
      icon: '✅',
      color: 'from-green-500 to-emerald-500'
    }
  ]

  return (
    <section id="projects" className="py-24 px-6 bg-gradient-to-b from-slate-900/50 to-transparent">
      <h2 className="text-5xl font-bold text-center mb-16">
        <span className="bg-gradient-to-r from-indigo-400 via-cyan-400 to-pink-400 bg-clip-text text-transparent">
          Featured Projects
        </span>
      </h2>

      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative glass rounded-2xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300"
          >
            {/* Gradient overlay on hover */}
            <div className={`absolute inset-0 bg-gradient-to-r ${project.color} opacity-0 group-hover:opacity-20 transition-opacity`}></div>
            
            <div className="relative p-8">
              <div className="flex items-start gap-4">
                <span className="text-5xl transform group-hover:scale-110 group-hover:rotate-6 transition-all">
                  {project.icon}
                </span>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex items-center text-cyan-400 font-semibold group-hover:gap-2 transition-all">
                    View Project 
                    <span className="text-xl transform group-hover:translate-x-2 transition-transform">→</span>
                  </div>
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}

export default Projects