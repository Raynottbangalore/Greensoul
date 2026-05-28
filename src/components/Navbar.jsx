import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight, ChevronDown } from 'lucide-react';
import { cn } from '../utils/cn';
import { Link, useLocation } from 'react-router-dom';
import { auth } from '../firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import toast from 'react-hot-toast';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [user, setUser] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const navLinks = [
    { name: 'Stay', path: '/stay' },
    { name: 'Dining', path: '/dining' },
    { name: 'Experiences', path: '/experiences' },
    { name: 'Our Story', path: '/our-story' },
    { name: 'Contact', path: '/contact' }
  ];

  const isDarkNav = !['/', '/stay', '/our-story', '/experiences', '/contact', '/login'].includes(location.pathname);

  let rightSideTextColor = "text-[#2c312a]";
  if (isDarkNav && !scrolled) {
    rightSideTextColor = location.pathname === '/book' ? "text-brand-white lg:text-[#2c312a]" : "text-brand-white";
  } else if (location.pathname === '/' && !scrolled) {
    rightSideTextColor = "text-brand-white";
  }

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
          <svg className="w-[34px] h-[34px] mb-2.5 opacity-90 group-hover:opacity-100 transition-opacity" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round">
            {/* Main Stem */}
            <path d="M12 22V2" />
            
            {/* Top Leaf */}
            <path d="M12 11C9.5 8 12 2 12 2C12 2 14.5 8 12 11Z" />
            
            {/* Upper Left Leaf & Vein */}
            <path d="M12 12L6 6" />
            <path d="M12 13C8.5 12 6 6 6 6C6 6 10 7 12 10.5Z" />
            
            {/* Upper Right Leaf & Vein */}
            <path d="M12 12L18 6" />
            <path d="M12 13C15.5 12 18 6 18 6C18 6 14 7 12 10.5Z" />
            
            {/* Lower Left Leaf & Vein */}
            <path d="M12 16L4 12" />
            <path d="M12 17C7.5 16.5 4 12 4 12C4 12 8 11.5 12 14.5Z" />
            
            {/* Lower Right Leaf & Vein */}
            <path d="M12 16L20 12" />
            <path d="M12 17C16.5 16.5 20 12 20 12C20 12 16 11.5 12 14.5Z" />
          </svg>
          <span className="font-heading text-[26px] tracking-[0.2em] font-normal group-hover:opacity-80 transition-opacity leading-none ml-1">GREENSOUL</span>
          <span className="font-sans text-[10px] tracking-[0.45em] mt-3 opacity-70 font-medium ml-2">ECOSTAY</span>
        </Link>

        <div className="hidden lg:flex items-center space-x-14 mt-4 ml-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={cn(
                "text-[11px] tracking-[0.15em] uppercase font-medium hover:opacity-60 transition-opacity",
                location.pathname === '/book' && !scrolled && (link.name === 'Our Story' || link.name === 'Contact') ? "lg:text-[#2c312a]" : ""
              )}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className={cn("flex items-center space-x-8 mt-2", rightSideTextColor)}>
          {user ? (
            <button 
              onClick={() => {
                signOut(auth);
                toast.success('Successfully signed out!');
              }}
              className="hidden lg:block text-[10px] tracking-[0.15em] uppercase font-medium opacity-80 hover:opacity-100 transition-opacity"
            >
              Sign Out
            </button>
          ) : (
            <Link 
              to="/login"
              className="hidden lg:block text-[10px] tracking-[0.15em] uppercase font-medium opacity-80 hover:opacity-100 transition-opacity"
            >
              Sign In
            </Link>
          )}
          <Link 
            to="/book"
            className={cn(
              "hidden lg:block border border-current/40 px-7 py-3 text-[10px] tracking-[0.15em] uppercase font-medium transition-colors opacity-90",
              (isDarkNav && !scrolled && location.pathname !== '/book') || (location.pathname === '/' && !scrolled) 
                ? "hover:bg-brand-white hover:text-[#2c312a]" 
                : "hover:bg-[#2c312a] hover:text-brand-white"
            )}
          >
            Book Your Escape
          </Link>
          <button
            className="lg:hidden flex flex-col space-y-[5px] w-8 opacity-80 hover:opacity-100 mt-1"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="w-full h-[1px] bg-current"></span>
            <span className="w-full h-[1px] bg-current"></span>
            <span className="w-full h-[1px] bg-current"></span>
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
              <Link 
                to="/book"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-8 border border-[#2c312a]/30 px-8 py-3 text-[11px] tracking-[0.2em] uppercase font-medium hover:bg-[#2c312a] hover:text-white transition-colors"
              >
                Book Your Escape
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
