import { useState } from 'react';
import { ExternalLink, Github, Star, GitFork } from 'lucide-react';

type Category = 'All' | 'React' | 'Next.js' | 'TypeScript';

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  category: Category;
  stars: number;
  forks: number;
  liveUrl: string;
  repoUrl: string;
  featured?: boolean;
}

const projects: Project[] = [
{
  title: 'Mayo Studio — Interior & Exterior Design Company',
  description: 'A modern website for Mayo Studio, a company specialized in interior and exterior architectural design solutions.',
  image: 'https://i.postimg.cc/JhFpj6nX/mayo.png',
  tags: ['React', 'TypeScript', 'CSS'],
  category: 'React',
  stars: 0,
  forks: 0,
  liveUrl: 'https://mayostudio.netlify.app/',
  repoUrl: 'https://github.com/Mohab3563/mayo_project',
  featured: true,
},
  {
    title: 'DevTask — Project Manager',
    description: 'Kanban-style project management app with drag-and-drop, team collaboration, and real-time updates.',
    image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['React', 'TypeScript', 'Supabase', 'DnD'],
    category: 'React',
    stars: 196,
    forks: 31,
    liveUrl: '#',
    repoUrl: '#',
    featured: true,
  },
  {
    title: 'WeatherScope — Weather App',
    description: 'Beautiful weather application with animated weather icons, forecasts, and geolocation support.',
    image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['React', 'TypeScript', 'OpenWeather API'],
    category: 'React',
    stars: 124,
    forks: 18,
    liveUrl: '#',
    repoUrl: '#',
  },
  {
    title: 'BlogCraft — Content Platform',
    description: 'Modern blog platform with MDX support, dark mode, newsletter integration, and SEO optimization.',
    image: 'https://images.pexels.com/photos/261662/pexels-photo-261662.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Next.js', 'MDX', 'Tailwind', 'SEO'],
    category: 'Next.js',
    stars: 311,
    forks: 56,
    liveUrl: '#',
    repoUrl: '#',
  },
  {
    title: 'CryptoTracker — Dashboard',
    description: 'Real-time cryptocurrency dashboard with charts, portfolio tracker, and price alerts.',
    image: 'https://images.pexels.com/photos/6771900/pexels-photo-6771900.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['React', 'TypeScript', 'Chart.js', 'WebSocket'],
    category: 'TypeScript',
    stars: 178,
    forks: 29,
    liveUrl: '#',
    repoUrl: '#',
  },
  {
    title: 'UIKit Pro — Component Library',
    description: 'A comprehensive React component library with 60+ components, Storybook docs, and full TypeScript support.',
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['TypeScript', 'React', 'Storybook', 'Rollup'],
    category: 'TypeScript',
    stars: 523,
    forks: 87,
    liveUrl: '#',
    repoUrl: '#',
  },
];

const categories: Category[] = ['All', 'React', 'Next.js', 'TypeScript'];

export default function Projects() {
  const [active, setActive] = useState<Category>('All');

  const filtered = active === 'All' ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="projects" className="py-24 bg-gray-900 relative">
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-cyan-600/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-cyan-400 text-sm font-semibold uppercase tracking-widest">Portfolio</span>
          <h2 className="mt-2 text-4xl sm:text-5xl font-bold text-white">
            Featured{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="mt-4 text-gray-400 max-w-xl mx-auto">
            A selection of projects I've built — from side experiments to production-grade applications.
          </p>
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                active === cat
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/20'
                  : 'bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:border-white/20'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project) => (
            <article
              key={project.title}
              className="group rounded-2xl overflow-hidden bg-gray-950 border border-white/8 hover:border-cyan-500/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-cyan-500/10 flex flex-col"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 to-transparent" />
                {project.featured && (
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-cyan-500/90 text-white text-xs font-semibold">
                    Featured
                  </span>
                )}
                {/* Hover overlay with links */}
                <div className="absolute inset-0 bg-gray-950/80 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.liveUrl}
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500 text-white text-sm font-medium hover:bg-cyan-400 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink size={14} />
                    Live Demo
                  </a>
                  <a
                    href={project.repoUrl}
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white text-sm font-medium hover:bg-white/20 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github size={14} />
                    Code
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col flex-1">
                <h3 className="text-white font-semibold text-lg mb-2 group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed flex-1 mb-4">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-0.5 rounded-full bg-white/5 border border-white/8 text-gray-400 text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Stats */}
                <div className="flex items-center gap-4 text-sm text-gray-500 border-t border-white/5 pt-4">
                  <span className="flex items-center gap-1.5 hover:text-yellow-400 transition-colors">
                    <Star size={14} />
                    {project.stars}
                  </span>
                  <span className="flex items-center gap-1.5 hover:text-cyan-400 transition-colors">
                    <GitFork size={14} />
                    {project.forks}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* GitHub CTA */}
        <div className="text-center mt-12">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/15 text-gray-300 hover:text-white hover:border-cyan-500/40 hover:bg-cyan-500/5 transition-all duration-200"
          >
            <Github size={18} />
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
