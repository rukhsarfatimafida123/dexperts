import { useState, useEffect } from 'react'

export default function Hero() {
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
  }, [text, isDeleting, loopNum, typingSpeed, professions])

  return (
    <section id="home" className="min-h-screen flex items-center justify-center text-center px-6 py-20">
      <div className="max-w-4xl mx-auto">
        {/* Profile Image Placeholder (optional) */}
        <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-500 p-1 glow">
          <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center">
            <span className="text-4xl">👩‍💻</span>
          </div>
        </div>

        <h2 className="text-5xl md:text-7xl font-bold mb-6">
          Hi, I'm{' '}
          <span className="block bg-gradient-to-r from-indigo-400 via-cyan-400 to-pink-400 bg-clip-text text-transparent animate-gradient">
            Rukhsar Fatima
          </span>
        </h2>

        <div className="text-2xl md:text-3xl text-gray-300 mb-8 h-16">
          <span className="text-cyan-400">{'<'}</span>
          <span className="text-white">{text}</span>
          <span className="text-cyan-400 animate-pulse">|</span>
          <span className="text-cyan-400">{'/>'}</span>
        </div>

        <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed">
          Junior Web Developer focused on creating modern,
          responsive and user-friendly web applications
          using React and Tailwind CSS.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="https://github.com/rukhsarfatimafida123"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-xl bg-gradient-to-r from-indigo-500 to-cyan-500 hover:from-cyan-500 hover:to-indigo-500 text-white font-semibold transition-all duration-300 transform hover:scale-105 glow"
          >
            GitHub Profile
          </a>

          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault()
              document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })
            }}
            className="px-8 py-4 rounded-xl border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-semibold transition-all duration-300 transform hover:scale-105"
          >
            Contact Me
          </a>

          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault()
              document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })
            }}
            className="px-8 py-4 rounded-xl glass text-gray-300 hover:text-white font-semibold transition-all duration-300 transform hover:scale-105"
          >
            View Work
          </a>
        </div>
      </div>
    </section>
  )
}