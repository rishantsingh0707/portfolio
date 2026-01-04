import { ChevronDown } from 'lucide-react';
import AnimatedBackground from './AnimatedBackground';

export default function Home() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative h-screen w-full flex items-center justify-center px-6 overflow-hidden bg-black">
      <AnimatedBackground />

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Rishant Singh</span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-400 mb-8 leading-relaxed">
          a Full Stack Developer.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <button
            onClick={() => scrollToSection('projects')}
            className="inline-flex items-center gap-2 px-8 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-colors"
          >
            View My Work
          </button>

          <a
            href="/Rishant_Singh_Resume_2026"
            download="Resume.pdf"
            className="inline-flex items-center gap-2 px-8 py-3 bg-gray-900 border border-gray-800 text-white font-semibold rounded-lg hover:border-gray-700 transition-colors"
          >
            Download Resume
          </a>
        </div>

        <div className="flex justify-center">
          <button
            onClick={() => scrollToSection('about')}
            className="animate-bounce-slow"
          >
            <ChevronDown size={32} className="text-gray-500 hover:text-gray-300 transition-colors" />
          </button>
        </div>
      </div>
    </section>
  );
}
