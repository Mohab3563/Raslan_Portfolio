import { Code2, Github, Linkedin, Youtube, Heart } from 'lucide-react';

const socialLinks = [
  { icon: Github, href: 'https://github.com/Mohab3563', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/mohab-rabie-246a1b36b/en', label: 'LinkedIn' },
  { icon: Youtube, href: 'https://youtube.com/@hobast?si=Pgm70MpvsfGIM8ve', label: 'YouTube' },
];

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Brand */}
          <a href="#home" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center">
              <Code2 size={16} className="text-white" />
            </div>
            <span className="font-bold text-lg text-white group-hover:text-cyan-400 transition-colors">
              Mohab.dev
            </span>
          </a>

          {/* Nav */}
          <nav className="flex flex-wrap justify-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-400 hover:text-cyan-400 text-sm transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Social */}
          <div className="flex items-center gap-3">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:border-cyan-500/40 hover:bg-cyan-500/10 transition-all duration-200"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/5 text-center text-gray-500 text-sm flex items-center justify-center gap-1.5">
          <span>Built with</span>
          <Heart size={14} className="text-red-500 fill-red-500" />
          <span>by Mohab Raslan &mdash; &copy; {new Date().getFullYear()}</span>
        </div>
      </div>
    </footer>
  );
}
