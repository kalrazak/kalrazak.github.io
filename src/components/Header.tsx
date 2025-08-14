'use client';

import Link from 'next/link';
import { GithubButton } from './ui/github-button';

const Header = () => {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <header className="fixed top-0 left-0 right-0 z-11 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">
        {/* Logo/Brand */}
        <Link href="/" className="text-2xl font-bold text-gray-900 hover:text-gray-700 transition-all duration-300 ease-in-out">
          Haikal
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link 
            href="#about" 
            onClick={(e) => scrollToSection(e, 'about')}
            className="text-gray-600 hover:text-gray-900 transition-all duration-300 ease-in-out hover:scale-105"
          >
            About
          </Link>
          <Link 
            href="#projects" 
            onClick={(e) => scrollToSection(e, 'projects')}
            className="text-gray-600 hover:text-gray-900 transition-all duration-300 ease-in-out hover:scale-105"
          >
            Projects
          </Link>
          <Link 
            href="#contact" 
            onClick={(e) => scrollToSection(e, 'contact')}
            className="text-gray-600 hover:text-gray-900 transition-all duration-300 ease-in-out hover:scale-105"
          >
            Contact
          </Link>
        </nav>

        {/* Right side - GitHub button */}
        <div className="flex items-center space-x-4">
          <GithubButton 
            repoUrl="https://github.com/kalrazak"
            label="Star"
            showGithubIcon={true}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
