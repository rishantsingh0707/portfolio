import { useState, useEffect } from 'react';
import { ChevronDown, Download, Github, Linkedin, Mail, ExternalLink, Menu, X } from 'lucide-react';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'skills', 'education', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const skills = [
    'JavaScript', 'TypeScript', 'Node.js', 'Express.js', 'MongoDB', 'PostgreSQL', 
    'React', 'Next.js', 'Python', 'Django', 'Docker', 'AWS'
  ];

  const projects = [
    {
      title: 'E-Commerce API',
      description: 'RESTful API built with Node.js and Express, featuring user authentication, payment processing, and real-time inventory management.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=400',
      github: '#',
      demo: '#',
      tech: ['Node.js', 'Express', 'MongoDB', 'JWT']
    },
    {
      title: 'Task Management System',
      description: 'Full-stack application with React frontend and Django backend, featuring real-time collaboration and advanced project tracking.',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400',
      github: '#',
      demo: '#',
      tech: ['React', 'Django', 'PostgreSQL', 'WebSocket']
    },
    {
      title: 'Data Analytics Dashboard',
      description: 'Interactive dashboard built with React and D3.js for visualizing complex datasets with real-time updates and custom filtering.',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=400',
      github: '#',
      demo: '#',
      tech: ['React', 'D3.js', 'Python', 'FastAPI']
    }
  ];

  return (
    <div className="bg-gray-900 text-white min-h-screen relative overflow-x-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black"></div>
        {/* Animated particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className={`particle absolute w-2 h-2 bg-cyan-400 rounded-full opacity-20 animate-pulse particle-animation particle-${i}`}
          ></div>
        ))}
        {/* Glowing orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-4000"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-gray-900/80 backdrop-blur-md z-50 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Portfolio
              </div>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {['hero', 'about', 'skills', 'education', 'projects', 'contact'].map((section) => (
                  <button
                    key={section}
                    onClick={() => scrollToSection(section)}
                    className={`capitalize px-3 py-2 text-sm font-medium transition-colors ${
                      activeSection === section 
                        ? 'text-cyan-400 border-b-2 border-cyan-400' 
                        : 'text-gray-300 hover:text-cyan-400'
                    }`}
                  >
                    {section === 'hero' ? 'Home' : section}
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-300 hover:text-cyan-400 transition-colors"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-800 border-t border-gray-700">
                {['hero', 'about', 'skills', 'education', 'projects', 'contact'].map((section) => (
                  <button
                    key={section}
                    onClick={() => scrollToSection(section)}
                    className={`capitalize block w-full text-left px-3 py-2 text-base font-medium transition-colors ${
                      activeSection === section 
                        ? 'text-cyan-400 bg-gray-700' 
                        : 'text-gray-300 hover:text-cyan-400 hover:bg-gray-700'
                    }`}
                  >
                    {section === 'hero' ? 'Home' : section}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center relative px-4">
        <div className="text-center max-w-4xl mx-auto z-10">
          <div className="w-48 h-48 mx-auto mb-8 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 p-1 animate-pulse">
            <div className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center">
              <img 
                src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=400" 
                alt="Profile" 
                className="w-full h-full rounded-full object-cover"
              />
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-cyan-200 to-cyan-400 bg-clip-text text-transparent animate-fade-in">
            Alex Johnson
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-gray-300 animate-fade-in-delay">
            Backend Developer | Problem Solver | Tech Enthusiast
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 px-8 py-3 rounded-full font-semibold flex items-center gap-2 transition-all transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25">
              <Download size={20} />
              Download Resume
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white px-8 py-3 rounded-full font-semibold transition-all transform hover:scale-105"
            >
              Contact Me
            </button>
          </div>
          
          <div className="animate-bounce">
            <ChevronDown 
              size={32} 
              className="mx-auto text-cyan-400 cursor-pointer hover:text-cyan-300 transition-colors"
              onClick={() => scrollToSection('about')}
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 relative">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            About Me
          </h2>
          
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 shadow-xl">
            <p className="text-lg leading-relaxed text-gray-300 mb-6">
              I'm a passionate backend developer with 3+ years of experience building scalable web applications and APIs. 
              My journey began with a curiosity for how systems work behind the scenes, and it has evolved into a deep 
              expertise in server-side technologies and database optimization.
            </p>
            <p className="text-lg leading-relaxed text-gray-300">
              When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, 
              or sharing knowledge with the developer community. I believe in writing clean, maintainable code and 
              creating solutions that make a real impact.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <div
                key={skill}
                className={`bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 text-center group hover:border-cyan-500 hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105 hover:bg-gray-800/70 skill-${index}`}
              >
                <div className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors">
                  {skill}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-4 relative">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Education
          </h2>
          
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-400 to-blue-500"></div>
            
            <div className="space-y-12">
              <div className="relative flex items-start">
                <div className="absolute left-6 w-4 h-4 bg-cyan-400 rounded-full border-4 border-gray-900"></div>
                <div className="ml-16 bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <h3 className="text-xl font-bold text-white">Bachelor of Computer Science</h3>
                    <span className="text-cyan-400 font-semibold">2020 - 2024</span>
                  </div>
                  <p className="text-gray-300 mb-2">University of Technology</p>
                  <p className="text-gray-400">GPA: 3.8/4.0 • Graduated Magna Cum Laude</p>
                </div>
              </div>

              <div className="relative flex items-start">
                <div className="absolute left-6 w-4 h-4 bg-cyan-400 rounded-full border-4 border-gray-900"></div>
                <div className="ml-16 bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <h3 className="text-xl font-bold text-white">Full Stack Development Bootcamp</h3>
                    <span className="text-cyan-400 font-semibold">2023</span>
                  </div>
                  <p className="text-gray-300 mb-2">Tech Academy</p>
                  <p className="text-gray-400">Intensive 6-month program focusing on modern web technologies</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.title}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700 group hover:border-cyan-500 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/10 project-card"
                
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span 
                        key={tech}
                        className="px-3 py-1 bg-gray-700 text-cyan-400 text-xs rounded-full border border-gray-600"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-4">
                    <a 
                      href={project.github}
                      className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors text-sm"
                    >
                      <Github size={16} />
                      Code
                    </a>
                    <a 
                      href={project.demo}
                      className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors text-sm"
                    >
                      <ExternalLink size={16} />
                      Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 relative">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Let's Connect</h3>
              <p className="text-gray-300 mb-8 leading-relaxed">
                I'm always interested in new opportunities and exciting projects. 
                Whether you want to discuss a project or just say hello, I'd love to hear from you.
              </p>
              
              <div className="space-y-4">
                <a 
                  href="mailto:alex.johnson@email.com"
                  className="flex items-center gap-4 text-gray-300 hover:text-cyan-400 transition-colors group"
                >
                  <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center group-hover:bg-cyan-500/20 transition-colors">
                    <Mail size={20} />
                  </div>
                  <span>alex.johnson@email.com</span>
                </a>
                
                <a 
                  href="https://linkedin.com/in/alexjohnson"
                  className="flex items-center gap-4 text-gray-300 hover:text-cyan-400 transition-colors group"
                >
                  <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center group-hover:bg-cyan-500/20 transition-colors">
                    <Linkedin size={20} />
                  </div>
                  <span>LinkedIn Profile</span>
                </a>
              </div>
            </div>
            
            <form className="space-y-6">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-cyan-500 focus:outline-none transition-colors"
                />
              </div>
              
              <div className="relative">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-cyan-500 focus:outline-none transition-colors"
                />
              </div>
              
              <div className="relative">
                <textarea
                  placeholder="Your Message"
                  rows={5}
                  className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-cyan-500 focus:outline-none transition-colors resize-none"
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold py-3 rounded-lg transition-all transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800/50 backdrop-blur-sm border-t border-gray-700 py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex justify-center gap-6 mb-6">
            <a 
              href="https://github.com/alexjohnson"
              className="text-gray-400 hover:text-cyan-400 transition-colors p-2 hover:bg-gray-800 rounded-full"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a 
              href="https://linkedin.com/in/alexjohnson"
              className="text-gray-400 hover:text-cyan-400 transition-colors p-2 hover:bg-gray-800 rounded-full"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="mailto:alex.johnson@email.com"
              className="text-gray-400 hover:text-cyan-400 transition-colors p-2 hover:bg-gray-800 rounded-full"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
          </div>
          <p className="text-gray-400 text-sm">
            © 2025 Alex Johnson. All rights reserved. Built with React & Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;