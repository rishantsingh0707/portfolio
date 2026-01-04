import { Mail, Github, Linkedin } from 'lucide-react';
import AnimatedBackground from './AnimatedBackground';

export default function Contact() {
  return (
    <section id="contact" className="relative min-h-screen flex items-center justify-center px-6 py-20 bg-black overflow-hidden">
      <AnimatedBackground />
      <div className="relative z-10 container mx-auto max-w-4xl text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Get In Touch
        </h2>

        <p className="text-gray-400 text-lg mb-12">
          I'm always open to new opportunities and collaborations
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <a
            href="mailto:rishant3333@gmail.com"
            className="flex items-center gap-3 px-6 py-3 bg-gray-900 border border-gray-800 rounded-lg text-gray-300 hover:text-white hover:border-gray-700 transition-all"
          >
            <Mail size={20} />
            <span>Email Me</span>
          </a>

          <a
            href="https://github.com/rishantsingh0707"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-6 py-3 bg-gray-900 border border-gray-800 rounded-lg text-gray-300 hover:text-white hover:border-gray-700 transition-all"
          >
            <Github size={20} />
            <span>GitHub</span>
          </a>

          <a
            href="https://www.linkedin.com/in/rishant-singh1408"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-6 py-3 bg-gray-900 border border-gray-800 rounded-lg text-gray-300 hover:text-white hover:border-gray-700 transition-all"
          >
            <Linkedin size={20} />
            <span>LinkedIn</span>
          </a>
        </div>

        <footer className="mt-20 pt-8 border-t border-gray-800">
          <p className="text-gray-500">
            © 2026 Rishant Singh. Built with React and Tailwind CSS.
          </p>
        </footer>
      </div>
    </section>
  );
}
