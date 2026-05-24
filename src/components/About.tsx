import { Code2, Palette, Zap, Users } from 'lucide-react';

const stats = [
  { value: '3+', label: 'Years Experience' },
  { value: '40+', label: 'Projects Completed' },
  { value: '20+', label: 'Happy Clients' },
  { value: '5k+', label: 'GitHub Stars' },
];

const services = [
  {
    icon: Code2,
    title: 'Clean Code',
    description: 'Writing maintainable, scalable, and well-documented code following best practices.',
    color: 'from-cyan-500 to-blue-600',
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Creating visually stunning interfaces with intuitive user experiences.',
    color: 'from-teal-400 to-cyan-600',
  },
  {
    icon: Zap,
    title: 'Performance',
    description: 'Optimizing web apps for speed, SEO, and Core Web Vitals excellence.',
    color: 'from-blue-500 to-teal-500',
  },
  {
    icon: Users,
    title: 'Collaboration',
    description: 'Working effectively with design and backend teams in agile environments.',
    color: 'from-cyan-400 to-blue-500',
  },
];

const techStack = [
  { name: 'React', level: 95 },
  { name: 'TypeScript', level: 88 },
  { name: 'Next.js', level: 85 },
  { name: 'Tailwind CSS', level: 92 },
  { name: 'Node.js', level: 70 },
  { name: 'Figma', level: 78 },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-gray-950 relative">
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-72 h-72 bg-blue-600/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-cyan-400 text-sm font-semibold uppercase tracking-widest">About Me</span>
          <h2 className="mt-2 text-4xl sm:text-5xl font-bold text-white">
            Crafting Digital{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Experiences
            </span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left: Image + Stats */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden aspect-square max-w-sm mx-auto lg:mx-0">
              <img
                src="https://images.pexels.com/photos/4974915/pexels-photo-4974915.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Mohab - Front-End Developer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950/60 to-transparent" />
              {/* Floating badge */}
              <div className="absolute bottom-4 left-4 right-4 bg-gray-900/90 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                <p className="text-white font-semibold">Mohab Al-Rashid</p>
                <p className="text-cyan-400 text-sm">Senior Front-End Developer</p>
              </div>
            </div>
            {/* Decorative border */}
            <div className="absolute -top-4 -left-4 w-full h-full rounded-2xl border-2 border-cyan-500/20 max-w-sm mx-auto lg:mx-0 pointer-events-none" />
          </div>

          {/* Right: Text + Skills */}
          <div>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              I'm a passionate front-end developer with over 3 years of experience building
              modern web applications. I specialize in React and TypeScript, and I love turning
              complex problems into simple, beautiful interfaces.
            </p>
            <p className="text-gray-400 leading-relaxed mb-8">
              When I'm not coding, I create educational content on YouTube about web development,
              helping thousands of developers level up their skills. I believe in open-source and
              sharing knowledge with the community.
            </p>

            {/* Tech Stack */}
            <div className="space-y-3">
              {techStack.map((tech) => (
                <div key={tech.name}>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-300 font-medium">{tech.name}</span>
                    <span className="text-gray-500">{tech.level}%</span>
                  </div>
                  <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full transition-all duration-1000"
                      style={{ width: `${tech.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-20">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="text-center p-6 rounded-2xl bg-white/3 border border-white/8 hover:border-cyan-500/30 hover:bg-cyan-500/5 transition-all duration-300"
            >
              <div className="text-4xl font-extrabold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="text-gray-400 text-sm mt-1">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Services */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="p-6 rounded-2xl bg-white/3 border border-white/8 hover:border-cyan-500/30 hover:bg-white/5 transition-all duration-300 group"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon size={22} className="text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
