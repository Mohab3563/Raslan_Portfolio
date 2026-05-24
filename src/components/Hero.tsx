import { ArrowDown, Github, Linkedin, Youtube, Download } from 'lucide-react';

const socialLinks = [
  { icon: Github, href: 'https://github.com/Mohab3563', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/mohab-rabie-246a1b36b/en', label: 'LinkedIn' },
  { icon: Youtube, href: 'https://youtube.com/@hobast?si=Pgm70MpvsfGIM8ve', label: 'YouTube' },
];

const skills = ['React', 'TypeScript', 'Tailwind CSS', 'Next.js', 'Node.js', 'Figma'];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden overflow-x-hidden pt-16"
    >
      {/* BACKGROUND WRAPPER */}
      <div className="absolute inset-0 bg-gray-950 overflow-hidden">
        
        {/* Blobs (fixed sizes for mobile safety) */}
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-teal-500/5 rounded-full blur-3xl" />
      </div>

      {/* GRID OVERLAY (safe version) */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none overflow-hidden"
        style={{
          backgroundImage:
            'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
          backgroundSize: '60px 60px',
          width: '100%',
          height: '100%',
        }}
      />

      {/* CONTENT */}
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-8">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          Available for Freelance & Full-time
        </div>

        {/* Title */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight mb-6">
          <span className="text-white">Hi, I'm </span>
          <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-blue-500 bg-clip-text text-transparent">
            Mohab
          </span>
          <br />
          <span className="text-white text-4xl sm:text-5xl lg:text-6xl">
            Front-End Developer
          </span>
        </h1>

        {/* Description */}
        <p className="text-gray-400 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          I craft pixel-perfect, high-performance web experiences using modern
          technologies. Turning complex ideas into elegant, accessible interfaces.
        </p>

        {/* Skills */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {skills.map((skill) => (
            <span
              key={skill}
              className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300 text-sm hover:border-cyan-500/40 hover:text-cyan-400 transition-all duration-200"
            >
              {skill}
            </span>
          ))}
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <a
            href="#projects"
            className="px-8 py-3.5 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold hover:scale-105 transition-transform duration-200 shadow-lg shadow-cyan-500/25"
          >
            View My Work
          </a>

          <a
            href="https://drive.google.com/file/d/1uaz6nIqSB4J4MjA8yiDciOKADZ_1wTaP/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3.5 rounded-full border border-white/20 text-white font-semibold hover:border-cyan-500/50 hover:bg-white/5 transition-all duration-200 flex items-center gap-2"
          >
            <Download size={16} />
            Download CV
          </a>
        </div>

        {/* Social */}
        <div className="flex items-center justify-center gap-4 mb-16">
          {socialLinks.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:border-cyan-500/40 hover:bg-cyan-500/10 transition-all duration-200"
            >
              <Icon size={18} />
            </a>
          ))}
        </div>

        {/* Scroll */}
        <a
          href="#about"
          className="inline-flex flex-col items-center gap-2 text-gray-500 hover:text-cyan-400 transition-colors group"
        >
          <span className="text-xs tracking-widest uppercase">Scroll Down</span>
          <ArrowDown size={16} className="animate-bounce group-hover:text-cyan-400" />
        </a>
      </div>
    </section>
  );
}