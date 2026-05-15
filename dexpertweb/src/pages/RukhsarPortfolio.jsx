import { useState, useEffect } from 'react'
import { 
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaPhp, FaPython, FaDatabase, FaPenNib, FaVideo 
} from 'react-icons/fa'
import { SiTailwindcss } from 'react-icons/si'

export default function RukhsarPortfolio() {
  const [scrolled, setScrolled] = useState(false)

  // Navbar scroll effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (e, id) => {
    e.preventDefault()
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  // Hero typing effect
  const [text, setText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [loopNum, setLoopNum] = useState(0)
  const [typingSpeed, setTypingSpeed] = useState(150)

  const professions = ['Web Developer', 'React Specialist', 'UI Enthusiast', 'Problem Solver']

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % professions.length
      const fullText = professions[i]

      setText(isDeleting
        ? fullText.substring(0, text.length - 1)
        : fullText.substring(0, text.length + 1)
      )

      setTypingSpeed(isDeleting ? 50 : 150)

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 2000)
      } else if (isDeleting && text === '') {
        setIsDeleting(false)
        setLoopNum(loopNum + 1)
      }
    }

    const timer = setTimeout(handleTyping, typingSpeed)
    return () => clearTimeout(timer)
  }, [text, isDeleting, loopNum, typingSpeed])

  const skills = [
    { name: 'HTML', icon: <FaHtml5 />, color: 'from-indigo-500 to-purple-500' },
    { name: 'CSS', icon: <FaCss3Alt />, color: 'from-blue-500 to-cyan-500' },
    { name: 'JavaScript', icon: <FaJs />, color: 'from-indigo-500 to-purple-500' },
    { name: 'React', icon: <FaReact />, color: 'from-cyan-500 to-blue-500' },
    { name: 'Tailwind CSS', icon: <SiTailwindcss />, color: 'from-indigo-500 to-purple-500' },
    { name: 'PHP', icon: <FaPhp />, color: 'from-blue-500 to-cyan-500' },
    { name: 'Python', icon: <FaPython />, color: 'from-indigo-500 to-purple-500' },
    { name: 'SQL', icon: <FaDatabase />, color: 'from-blue-500 to-cyan-500' },
    { name: 'Graphic Designing', icon: <FaPenNib />, color: 'from-indigo-500 to-purple-500' },
    { name: 'Video Editing', icon: <FaVideo />, color: 'from-blue-500 to-cyan-500' }
  ]

  const projects = [
    {
      title: 'Wedding Dress Store',
      description: 'Modern e-commerce platform for wedding dresses.',
      link: 'https://github.com/rukhsarfatimafida123/wed-dress-store',
      icon: '👗',
      color: 'from-pink-500 to-rose-500'
    },
    {
      title: 'Mini Web Projects',
      description: 'Small frontend projects collection.',
      link: 'https://github.com/rukhsarfatimafida123',
      icon: '🎯',
      color: 'from-cyan-500 to-blue-500'
    }
  ]

  const contactInfo = [
    { type: 'Email', value: 'Rukhfatima19@gmail.com', link: 'mailto:Rukhfatima19@gmail.com', icon: '📧' },
    { type: 'Phone', value: '+92 311 4085045', link: 'tel:+923114085045', icon: '📱' },
    { type: 'GitHub', value: '@rukhsarfatimafida123', link: 'https://github.com/rukhsarfatimafida123', icon: '💻' }
  ]

  return (
    <div>

      {/* NAVBAR */}
      <nav className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'glass py-3' : 'bg-transparent py-5'} px-8`}>
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-cyan-400 to-pink-400">
            Rukhsar.dev
          </h1>

          <ul className="hidden md:flex gap-6 text-gray-300">
            {['home','about','skills','projects','contact'].map((id)=>(
              <li key={id}>
                <a onClick={(e)=>scrollToSection(e,id)} href={`#${id}`} className="hover:text-cyan-400">
                  {id.toUpperCase()}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* HERO */}
      <section id="home" className="min-h-screen flex flex-col justify-center items-center text-center px-6">
        <h2 className="text-5xl font-bold">Hi, I'm <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-cyan-400 to-pink-400">
            Rukhsar Fatima
          </span>
        </h2>

        <h3 className="text-2xl mt-6 text-cyan-400">
          {text}
        </h3>

        <p className="text-gray-400 max-w-xl mt-6">
          Junior Web Developer focused on React & Tailwind CSS
        </p>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-20 px-6 text-gray-300">
        <h2 className="text-4xl text-center mb-10 text-cyan-400">About Me</h2>
        <p className="max-w-3xl mx-auto">
          I am a Junior Web Developer with experience in HTML, CSS, JavaScript, React, Tailwind CSS...
        </p>
      </section>

      {/* SKILLS */}
      <section id="skills" className="py-20 px-6">
        <h2 className="text-4xl text-center mb-10 text-cyan-400">Skills</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {skills.map((s,i)=>(
            <div key={i} className="glass p-4 text-center">
              <div className="text-3xl">{s.icon}</div>
              <p className="text-gray-300 mt-2">{s.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="py-20 px-6">
        <h2 className="text-4xl text-center mb-10 text-cyan-400">Projects</h2>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p,i)=>(
            <a key={i} href={p.link} target="_blank" className="glass p-6">
              <div className="text-3xl">{p.icon}</div>
              <h3 className="text-xl text-white">{p.title}</h3>
              <p className="text-gray-400">{p.description}</p>
            </a>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-20 px-6 text-center">
        <h2 className="text-4xl text-cyan-400 mb-10">Contact</h2>

        {contactInfo.map((c,i)=>(
          <a key={i} href={c.link} className="block text-gray-300 mb-4">
            {c.icon} {c.value}
          </a>
        ))}
      </section>

      {/* FOOTER */}
      <footer className="py-10 text-center text-gray-500">
        © 2026 Rukhsar Fatima
      </footer>

    </div>
  )
}