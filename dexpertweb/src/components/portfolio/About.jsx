export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-gradient-to-b from-slate-900/50 to-transparent">
      <h2 className="text-4xl font-bold text-center mb-12">
        <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
          About Me
        </span>
      </h2>

      <div className="max-w-4xl mx-auto space-y-6 text-gray-300 leading-relaxed text-lg">
        <p className="hover:translate-x-2 transition-transform duration-300">
          I am an enthusiastic and hardworking Junior Web Developer
          with a Master's degree in Computer Science from
          <span className="text-cyan-400 font-semibold"> Virtual University of Pakistan</span>.
        </p>

        <p className="hover:translate-x-2 transition-transform duration-300">
          I specialize in building responsive and modern websites
          using technologies like HTML, CSS, PHP, JavaScript, React
          and Tailwind CSS. I enjoy designing clean and user-friendly
          interfaces that improve user experience.
        </p>

        <p className="hover:translate-x-2 transition-transform duration-300">
          Along with web development, I also have experience in
          graphic designing, video editing, and content writing.
          I am passionate about learning new technologies and
          working in collaborative environments where I can
          continue to grow as a developer.
        </p>
      </div>

      {/* Decorative Line */}
      <div className="w-24 h-1 bg-gradient-to-r from-indigo-400 to-cyan-400 mx-auto mt-12 rounded-full"></div>
    </section>
  )
}