import { Github, ExternalLink } from 'lucide-react';

export default function ProjectCard({ project }) {
  return (
    <div className="bg-gray-900 border border-gray-800 rounded-lg overflow-hidden hover:border-gray-700 transition-all hover:transform hover:scale-105 duration-300">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-48 object-cover"
      />

      <div className="p-6">
        <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>

        <p className="text-gray-400 mb-4 leading-relaxed">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-black border border-gray-800 rounded text-sm text-gray-300"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-4">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
            >
              <Github size={20} />
              <span>Code</span>
            </a>
          )}

          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
            >
              <ExternalLink size={20} />
              <span>Demo</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
