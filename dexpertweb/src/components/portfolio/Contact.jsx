const Contact = () => {
  const contactInfo = [
    {
      type: 'Email',
      value: 'Rukhfatima19@gmail.com',
      icon: '📧',
      link: 'mailto:Rukhfatima19@gmail.com',
      color: 'from-red-500 to-pink-500'
    },
    {
      type: 'Phone',
      value: '+92 311 4085045',
      icon: '📱',
      link: 'tel:+923114085045',
      color: 'from-green-500 to-emerald-500'
    },
    {
      type: 'GitHub',
      value: '@rukhsarfatimafida123',
      icon: '💻',
      link: 'https://github.com/rukhsarfatimafida123',
      color: 'from-gray-700 to-gray-900'
    },
    {
      type: 'LinkedIn',
      value: 'Rukhsar Fatima',
      icon: '🔗',
      link: '#',
      color: 'from-blue-500 to-cyan-500'
    }
  ]

  return (
    <section id="contact" className="py-24 px-6 bg-gradient-to-b from-slate-900/50 to-transparent">
      <h2 className="text-5xl font-bold text-center mb-16">
        <span className="bg-gradient-to-r from-indigo-400 via-cyan-400 to-pink-400 bg-clip-text text-transparent">
          Get In Touch
        </span>
      </h2>

      <div className="max-w-4xl mx-auto">
        {/* Contact Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {contactInfo.map((info, index) => (
            <a
              key={index}
              href={info.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative glass p-6 rounded-2xl hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${info.color} opacity-0 group-hover:opacity-10 transition-opacity`}></div>
              
              <div className="relative flex items-center gap-4">
                <span className="text-3xl transform group-hover:scale-110 transition-transform">
                  {info.icon}
                </span>
                <div>
                  <p className="text-sm text-gray-400">{info.type}</p>
                  <p className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors">
                    {info.value}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Quick Message Section */}
        <div className="glass rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">Send me a message</h3>
          <p className="text-gray-400 mb-6">
            Feel free to reach out for collaborations or just a friendly hello
          </p>
          <a
            href="mailto:Rukhfatima19@gmail.com"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-indigo-500 to-cyan-500 hover:from-cyan-500 hover:to-indigo-500 text-white font-semibold transition-all duration-300 transform hover:scale-105 glow"
          >
            <span>📨</span>
            Send Email
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact