'use client';

import Link from 'next/link';
import { GithubButton } from './ui/github-button';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-51 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">
        {/* Logo/Brand */}
        <Link href="/" className="text-2xl font-bold text-gray-900 hover:text-gray-700 transition-colors">
          Haikal
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="#about" className="text-gray-600 hover:text-gray-900 transition-colors">
            About
          </Link>
          <Link href="#projects" className="text-gray-600 hover:text-gray-900 transition-colors">
            Projects
          </Link>
          <Link href="#contact" className="text-gray-600 hover:text-gray-900 transition-colors">
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
