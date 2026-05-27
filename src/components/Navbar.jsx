import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight, ChevronDown } from 'lucide-react';
import { cn } from '../utils/cn';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Stay', path: '/stay' },
    { name: 'Dining', path: '/dining' },
    { name: 'Experiences', path: '/experiences' },
    { name: 'Our Story', path: '/our-story' },
    { name: 'Contact', path: '/contact' }
  ];

  const isDarkNav = !['/', '/stay', '/our-story', '/experiences'].includes(location.pathname);

  return (
    <>
      <nav
        className={cn(
          'absolute top-0 w-full z-50 transition-all duration-500 py-8 px-8 lg:px-[80px] flex justify-between items-start',
          isDarkNav ? 'text-brand-white' : 'text-[#2c312a]',
          scrolled ? 'bg-white/80 backdrop-blur-md py-4 shadow-sm fixed !text-[#2c312a]' : 'bg-transparent'
        )}
      >
        <Link to="/" className="flex flex-col items-center mt-1 group">
          <svg className="w-[18px] h-[18px] mb-1.5 opacity-80 group-hover:opacity-100 transition-opacity" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 22V8" />
            <path d="M12 16c-3-2-5-4-5-6s2-3 5-3 5 1 5 3-2 4-5 6z" />
            <path d="M12 12c-2-1-3-2-3-3s1-1 3-1" />
            <path d="M12 8c-1-1-2-1.5-2-2.5S11 4 12 4s2 1.5 2 2.5-1 1.5-2 2.5z" />
          </svg>
          <span className="font-heading text-2xl tracking-[0.12em] font-medium group-hover:opacity-80 transition-opacity">GREENSOUL</span>
          <span className="font-body text-[9px] tracking-[0.3em] mt-1 opacity-80 font-medium">ECOSTAY</span>
        </Link>

        <div className="hidden lg:flex items-center space-x-14 mt-4 ml-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="text-[11px] tracking-[0.15em] uppercase font-medium hover:opacity-60 transition-opacity"
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className={cn("flex items-center space-x-10 mt-2", isDarkNav && !scrolled ? "text-brand-white" : "text-[#2c312a]")}>
          <button className="hidden lg:block border border-current/40 px-7 py-3 text-[10px] tracking-[0.15em] uppercase font-medium hover:bg-[#2c312a] hover:text-[#E9E8E1] transition-colors opacity-90">
            Book Your Escape
          </button>
          <button
            className="flex flex-col space-y-[5px] w-8 opacity-80 hover:opacity-100 mt-1"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className={cn("w-full h-[1px] bg-current", isDarkNav && !scrolled ? "bg-brand-white" : scrolled ? "bg-[#2c312a]" : "bg-[#2c312a]")}></span>
            <span className={cn("w-full h-[1px] bg-current", isDarkNav && !scrolled ? "bg-brand-white" : scrolled ? "bg-[#2c312a]" : "bg-[#2c312a]")}></span>
            <span className={cn("w-full h-[1px] bg-current", isDarkNav && !scrolled ? "bg-brand-white" : scrolled ? "bg-[#2c312a]" : "bg-[#2c312a]")}></span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="fixed inset-0 z-50 bg-[#f3e9dc] flex flex-col justify-center items-center text-[#2c312a]"
          >
            <button
              className="absolute top-10 right-10"
              onClick={() => setMobileMenuOpen(false)}
            >
              <X size={32} strokeWidth={1} />
            </button>
            <div className="flex flex-col space-y-8 text-center">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="font-heading text-4xl hover:opacity-60 transition-opacity"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <button className="mt-8 border border-[#2c312a]/30 px-8 py-3 text-[11px] tracking-[0.2em] uppercase font-medium">
                Book Your Escape
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
