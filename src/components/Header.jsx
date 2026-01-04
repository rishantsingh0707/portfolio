import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-black/95 backdrop-blur-sm border-b border-gray-800 z-50">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <button
            onClick={() => scrollToSection('home')}
            className="text-2xl font-bold text-gray-300 hover:text-white transition-colors">
            Portfolio
          </button>

          <div className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-300 hover:text-white transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="text-gray-300 hover:text-white transition-colors"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-gray-300 hover:text-white transition-colors"
            >
              Contact
            </button>
            <button
              onClick={() => scrollToSection('education')}
              className="text-gray-300 hover:text-white transition-colors"
            >
              Education
            </button>
          </div>

          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 flex flex-col space-y-4">
            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-300 hover:text-white transition-colors text-left"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="text-gray-300 hover:text-white transition-colors text-left"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-gray-300 hover:text-white transition-colors text-left"
            >
              Contact
            </button>
          </div>
        )}
      </nav>
    </header>
  );
}
