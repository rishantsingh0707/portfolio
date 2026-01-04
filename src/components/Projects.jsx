import { projects } from '../data/projects';
import ProjectCard from './ProjectCard';
import AnimatedBackground from './AnimatedBackground';

export default function Projects() {
  return (
    <section id="projects" className="relative min-h-screen px-6 py-20 bg-black overflow-hidden">
      <AnimatedBackground />
      <div className="relative z-10 container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center">
          My Projects
        </h2>

        <p className="text-gray-400 text-center mb-12 text-lg">
          Check out some of my recent work
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
