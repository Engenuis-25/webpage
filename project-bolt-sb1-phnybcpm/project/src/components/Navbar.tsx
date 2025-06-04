import React, { useState, useEffect } from 'react';
import { Menu, X, CircleDot } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Logo scrolled={scrolled} />
          </div>

          <div className="hidden md:flex space-x-8">
            <NavLink href="#home" scrolled={scrolled}>Home</NavLink>
            <NavLink href="#services" scrolled={scrolled}>Services</NavLink>
            <NavLink href="#vision" scrolled={scrolled}>Vision</NavLink>
            <NavLink href="#mission" scrolled={scrolled}>Mission</NavLink>
            <NavLink href="#values" scrolled={scrolled}>Values</NavLink>
            <NavLink href="#contact" scrolled={scrolled}>Contact</NavLink>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-md focus:outline-none ${
                scrolled ? 'text-primary-500' : 'text-white'
              }`}
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      <div 
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isOpen 
            ? 'max-h-screen opacity-100 bg-white shadow-lg' 
            : 'max-h-0 opacity-0 overflow-hidden'
        }`}
      >
        <div className="px-4 pt-2 pb-4 space-y-1">
          <MobileNavLink href="#home" onClick={() => setIsOpen(false)}>Home</MobileNavLink>
          <MobileNavLink href="#services" onClick={() => setIsOpen(false)}>Services</MobileNavLink>
          <MobileNavLink href="#vision" onClick={() => setIsOpen(false)}>Vision</MobileNavLink>
          <MobileNavLink href="#mission" onClick={() => setIsOpen(false)}>Mission</MobileNavLink>
          <MobileNavLink href="#values" onClick={() => setIsOpen(false)}>Values</MobileNavLink>
          <MobileNavLink href="#contact" onClick={() => setIsOpen(false)}>Contact</MobileNavLink>
        </div>
      </div>
    </nav>
  );
};

const Logo = ({ scrolled }: { scrolled: boolean }) => {
  return (
    <div className="flex items-center space-x-2 group">
      <div className={`
        w-12 h-12 relative flex items-center justify-center
        transform transition-all duration-500 ease-in-out
        group-hover:scale-110
      `}>
        <CircleDot 
          className={`
            w-10 h-10 
            ${scrolled ? 'text-primary-500' : 'text-secondary-300'} 
            animate-float
            transition-colors duration-300
            group-hover:text-primary-500
          `} 
        />
      </div>
      <span className={`
        text-xl font-bold 
        transition-all duration-300
        ${scrolled ? 'text-primary-500' : 'text-white'}
        group-hover:text-primary-500
      `}>
        Engenuis
      </span>
    </div>
  );
};

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  scrolled: boolean;
}

const NavLink = ({ href, children, scrolled }: NavLinkProps) => {
  return (
    <a
      href={href}
      className={`
        font-medium 
        transition-colors duration-300 
        hover:text-primary-500
        ${scrolled ? 'text-gray-800' : 'text-white'}
      `}
    >
      {children}
    </a>
  );
};

interface MobileNavLinkProps {
  href: string;
  children: React.ReactNode;
  onClick: () => void;
}

const MobileNavLink = ({ href, children, onClick }: MobileNavLinkProps) => {
  return (
    <a
      href={href}
      onClick={onClick}
      className="block py-2 px-3 text-gray-800 font-medium hover:bg-primary-50 rounded-md"
    >
      {children}
    </a>
  );
};

export default Navbar;