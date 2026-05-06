import { 
  FaHtml5, 
  FaCss3Alt, 
  FaJs, 
  FaReact, 
  FaPhp, 
  FaPython, 
  FaDatabase,
  FaPenNib,
  FaVideo 
} from 'react-icons/fa'
import { SiTailwindcss } from 'react-icons/si'

const Skills = () => {
  const skills = [
    { name: 'HTML', icon: <FaHtml5 />, color: 'from-indigo-500 to-purple-500' },
    { name: 'CSS', icon: <FaCss3Alt />, color: 'from-blue-500 to-cyan-500' },
    { name: 'JavaScript', icon: <FaJs />, color: 'from-indigo-500 to-purple-500' },
    { name: 'React', icon: <FaReact />, color: 'from-cyan-500 to-blue-500' },
    { name: 'Tailwind CSS', icon: <SiTailwindcss />, color: 'from-indigo-500 to-purple-500' },
    { name: 'PHP', icon: <FaPhp />, color: 'from-blue-500 to-cyan-500' },
    { name: 'Python', icon: <FaPython />, color: 'from-indigo-500 to-purple-500' },
    { name: 'SQL', icon: <FaDatabase />, color: 'from-blue-500 to-cyan-500' },
    { name: 'Graphic Designing', icon: <FaPenNib />, color: 'from-indigo-500 to-purple-500'},
    { name: 'Video Editing', icon: <FaVideo />, color: 'from-blue-500 to-cyan-500' }
  ]

  return (
    <section id="skills" className="py-24 px-6 bg-gradient-to-b from-slate-900/50 to-transparent">
      <h2 className="text-5xl font-bold text-center mb-16">
        <span className="bg-gradient-to-r from-indigo-400 via-cyan-400 to-pink-400 bg-clip-text text-transparent">
          Technical Skills
        </span>
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-7xl mx-auto">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="group relative glass p-6 rounded-2xl hover:transform hover:scale-105 transition-all duration-300 cursor-pointer"
          >
            {/* Glow effect on hover */}
            <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${skill.color} opacity-0 group-hover:opacity-20 blur-xl transition-opacity`}></div>
            
            {/* Content */}
            <div className="relative text-center">
              <span className="text-4xl mb-3 block transform group-hover:scale-110 transition-transform text-white">
                {skill.icon}
              </span>
              <h3 className="font-semibold text-gray-300 group-hover:text-white transition-colors">
                {skill.name}
              </h3>
              
              {/* Hover progress bar */}
              <div className="absolute top-19 bottom-0 left-0 w-full h-1  rounded-b-2xl overflow-hidden">
                <div className={`h-full bg-gradient-to-r ${skill.color} w-0 group-hover:w-full transition-all duration-500`}></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills