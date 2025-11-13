import React, { useEffect, useState } from 'react';
import { MenuIcon, XIcon } from 'lucide-react';
export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({
        behavior: 'smooth'
      });
      setIsOpen(false);
    }
  };
  return <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black bg-opacity-90 py-2 shadow-lg' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold text-white">
            <span className="text-red-600">RYANS</span> Restaurant
          </div>
          <div className="hidden md:flex space-x-8">
            {['home', 'about', 'menu', 'gallery', 'contact'].map(item => <button key={item} onClick={() => scrollToSection(item)} className="text-white hover:text-red-500 capitalize transition-colors duration-300">
                {item}
              </button>)}
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white hover:text-red-500 focus:outline-none">
              {isOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      {isOpen && <div className="md:hidden bg-black bg-opacity-95 absolute w-full py-4">
          <div className="flex flex-col items-center space-y-4">
            {['home', 'about', 'menu', 'gallery', 'contact'].map(item => <button key={item} onClick={() => scrollToSection(item)} className="text-white hover:text-red-500 capitalize w-full text-center py-2 transition-colors duration-300">
                {item}
              </button>)}
          </div>
        </div>}
    </nav>;
};