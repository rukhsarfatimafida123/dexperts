const Footer = () => {
  return (
    <footer className="relative glass py-8 text-center border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4">
        <p className="text-gray-400 mb-4">
          © 2026 Rukhsar Fatima — Web Developer
        </p>
        
        {/* Social Links */}
        <div className="flex justify-center gap-4">
          <a 
            href="https://github.com/rukhsarfatimafida123" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-cyan-400 transition-colors"
          >
            GitHub
          </a>
          <span className="text-gray-600">•</span>
          <a 
            href="#" 
            className="text-gray-400 hover:text-cyan-400 transition-colors"
          >
            LinkedIn
          </a>
          <span className="text-gray-600">•</span>
          <a 
            href="mailto:Rukhfatima19@gmail.com" 
            className="text-gray-400 hover:text-cyan-400 transition-colors"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer