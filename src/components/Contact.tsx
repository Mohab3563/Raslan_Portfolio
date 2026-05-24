import { useState } from 'react';
import {
  Github,
  Linkedin,
  Youtube,
  Mail,
  MapPin,
  Send,
  CheckCircle,
} from 'lucide-react';

const socialLinks = [
  {
    icon: Github,
    label: 'GitHub',
    handle: '@Mohab-dev',
    href: 'https://github.com/Mohab3563',
    color: 'hover:text-white hover:border-white/30',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    handle: 'Mohab Raslan',
    href: 'https://www.linkedin.com/in/mohab-rabie-246a1b36b/en',
    color: 'hover:text-blue-400 hover:border-blue-400/30',
  },
  {
    icon: Youtube,
    label: 'YouTube',
    handle: 'Mohab Codes',
    href: 'https://youtube.com/@hobast?si=Pgm70MpvsfGIM8ve',
    color: 'hover:text-red-400 hover:border-red-400/30',
  },
  {
    icon: Mail,
    label: 'Email',
    handle: 'mohab3563@gmail.com',
    href: 'mailto:mohab3563@gmail.com',
    color: 'hover:text-cyan-400 hover:border-cyan-400/30',
  },
];

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);

    const phoneNumber = '201115647340'; 

    const message = `
 New Portfolio Message

 Name: ${form.name}
 Email: ${form.email}
 Subject: ${form.subject}

 Message:
${form.message}
    `;

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;

    setTimeout(() => {
      window.open(url, '_blank');

      setLoading(false);
      setSent(true);

      setForm({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 bg-gray-950 relative">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-0 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-cyan-400 text-sm font-semibold uppercase tracking-widest">
            Get In Touch
          </span>

          <h2 className="mt-2 text-4xl sm:text-5xl font-bold text-white">
            Let's Work{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Together
            </span>
          </h2>

          <p className="mt-4 text-gray-400 max-w-xl mx-auto">
            Have a project in mind? I'd love to hear about it.
            Send me a message and let's create something amazing.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* LEFT SIDE (UNCHANGED) */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h3 className="text-white font-semibold text-xl mb-4">
                Contact Info
              </h3>

              <div className="space-y-3 text-gray-400">
                <div className="flex items-center gap-3">
                  <Mail size={16} className="text-cyan-400 shrink-0" />
                  <span>mohab3563@gmail.com</span>
                </div>

                <div className="flex items-center gap-3">
                  <MapPin size={16} className="text-cyan-400 shrink-0" />
                  <span>Cairo, Egypt</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-white font-semibold text-xl mb-4">
                Follow Me
              </h3>

              <div className="space-y-3">
                {socialLinks.map(({ icon: Icon, label, handle, href, color }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-4 p-4 rounded-xl bg-white/3 border border-white/8 text-gray-400 transition-all duration-200 ${color} group`}
                  >
                    <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                      <Icon size={18} />
                    </div>

                    <div>
                      <div className="text-sm font-medium text-white">{label}</div>
                      <div className="text-xs">{handle}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT SIDE (FORM SAME STYLE) */}
          <div className="lg:col-span-3">
            <div className="p-8 rounded-2xl bg-white/3 border border-white/8">
              {sent ? (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mb-4">
                    <CheckCircle size={32} className="text-green-400" />
                  </div>

                  <h3 className="text-white text-xl font-semibold mb-2">
                    Message Sent via WhatsApp!
                  </h3>

                  <p className="text-gray-400 mb-6">
                    Your message has been opened in WhatsApp.
                  </p>

                  <button
                    onClick={() => setSent(false)}
                    className="px-6 py-2.5 rounded-full bg-white/8 border border-white/10 text-gray-300 hover:text-white text-sm transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <input
                      name="name"
                      placeholder="Your Name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-cyan-500/50 focus:bg-white/8 transition-all"
                    />

                    <input
                      name="email"
                      placeholder="Email Address"
                      value={form.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-cyan-500/50 focus:bg-white/8 transition-all"
                    />
                  </div>

                  <input
                    name="subject"
                    placeholder="Subject"
                    value={form.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-cyan-500/50 focus:bg-white/8 transition-all"
                  />

                  <textarea
                    name="message"
                    rows={5}
                    placeholder="Message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-cyan-500/50 focus:bg-white/8 transition-all resize-none"
                  />

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity disabled:opacity-70"
                  >
                    {loading ? (
                      <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                      <>
                        <Send size={16} />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}