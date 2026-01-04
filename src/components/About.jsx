import profileImage from '../assets/Profile_photo.jpg';
import AnimatedBackground from './AnimatedBackground';

export default function About() {
  return (
    <section id="about" className="relative min-h-screen flex items-center justify-center px-6 py-20 bg-black overflow-hidden">
      <AnimatedBackground />
      <div className="relative z-10 container mx-auto max-w-4xl">
        <div className="flex flex-col items-center text-center">
          <img
            src={profileImage}
            alt="Profile"
            className="size-60 rounded-full object-cover border-4 border-gray-800 mb-8"
          />

          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Hi, I'm <span className="text-gray-400">Rishant Singh</span>
          </h2>

          <p className="text-lg text-gray-300 leading-relaxed max-w-2xl mb-8">
            I build beautiful, functional web applications with modern technologies.
            Passionate about creating seamless user experiences and writing clean,
            maintainable code. Always learning, always building.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <span className="px-4 py-2 bg-gray-900 border border-gray-800 rounded-lg text-gray-300">
              React
            </span>
            <span className="px-4 py-2 bg-gray-900 border border-gray-800 rounded-lg text-gray-300">
              JavaScript
            </span>
            <span className="px-4 py-2 bg-gray-900 border border-gray-800 rounded-lg text-gray-300">
              Tailwind CSS
            </span>
            <span className="px-4 py-2 bg-gray-900 border border-gray-800 rounded-lg text-gray-300">
              Node.js
            </span>
            <span className="px-4 py-2 bg-gray-900 border border-gray-800 rounded-lg text-gray-300">
              MongoDB
            </span>
            <span className="px-4 py-2 bg-gray-900 border border-gray-800 rounded-lg text-gray-300">
              HTML
            </span>
            <span className="px-4 py-2 bg-gray-900 border border-gray-800 rounded-lg text-gray-300">
              Zustand
            </span>
            <span className="px-4 py-2 bg-gray-900 border border-gray-800 rounded-lg text-gray-300">
              Axios
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
