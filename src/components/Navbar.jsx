import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { X, Calendar, User } from 'lucide-react';
import { cn } from '../utils/cn';
import { Link, useLocation } from 'react-router-dom';
import { auth } from '../firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import toast from 'react-hot-toast';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [user, setUser] = useState(null);
  
  const location = useLocation();
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 50);
  });

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Stay', path: '/stay' },
    { name: 'Dining', path: '/dining' },
    { name: 'Experiences', path: '/experiences' },
    { name: 'Our Story', path: '/our-story' },
    { name: 'Contact', path: '/contact' }
  ];

  // Determine if the current page has a dark background at the top, requiring light text initially
  const lightPaths = ['/', '/stay', '/login', '/book', '/gallery', '/my-reservations', '/our-story', '/experiences', '/mist-valley-cottage', '/earth-heritage', '/malnad-house'];
  const isDarkNav = !lightPaths.some(path => location.pathname === path || location.pathname.startsWith(path + '/'));
  const isSolidNav = location.pathname === '/our-story' || location.pathname.startsWith('/our-story/');

  // Text color logic for navbar
  let textColorClass = "text-[#2c312a]";
  if (isSolidNav) {
    textColorClass = "!text-[#F3E9DC]";
  } else if (isDarkNav && !scrolled) {
    textColorClass = "text-[#E5E1D6]";
  }

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          'fixed top-0 w-full z-50 transition-all duration-700 ease-in-out px-4 md:px-12 flex justify-between items-center',
          textColorClass,
          (scrolled || isSolidNav)
            ? 'bg-[#0B120C] py-4 shadow-sm !text-[#F3E9DC]' 
            : (isDarkNav || location.pathname === '/' 
                ? 'bg-gradient-to-b from-black/50 via-black/10 to-transparent py-8 shadow-none' 
                : 'bg-transparent py-8')
        )}
      >
        {/* Left: Logo */}
        <div className="flex-shrink-0 flex items-center">
          <Link 
            to="/" 
            className={cn(
              "flex flex-col items-center group",
              (location.pathname === '/contact' && !scrolled) ? "!text-[#2c312a]" : ""
            )}
          >
            <svg className="w-[28px] h-[28px] md:w-[32px] md:h-[32px] mb-2 group-hover:opacity-70 transition-opacity drop-shadow-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22V2" />
              <path d="M12 11C9.5 8 12 2 12 2C12 2 14.5 8 12 11Z" />
              <path d="M12 12L6 6" />
              <path d="M12 13C8.5 12 6 6 6 6C6 6 10 7 12 10.5Z" />
              <path d="M12 12L18 6" />
              <path d="M12 13C15.5 12 18 6 18 6C18 6 14 7 12 10.5Z" />
              <path d="M12 16L4 12" />
              <path d="M12 17C7.5 16.5 4 12 4 12C4 12 8 11.5 12 14.5Z" />
              <path d="M12 16L20 12" />
              <path d="M12 17C16.5 16.5 20 12 20 12C20 12 16 11.5 12 14.5Z" />
            </svg>
            <div className="flex flex-col items-center drop-shadow-sm">
              <span className="font-heading text-[16px] md:text-xl tracking-[0.2em] font-medium group-hover:opacity-70 transition-opacity leading-none">GREENSOUL</span>
              <span className="font-sans text-[7px] md:text-[8px] tracking-[0.45em] mt-1.5 opacity-90 font-semibold">ECOSTAY</span>
            </div>
          </Link>
        </div>

        {/* Center: Links (Desktop) */}
        <div className="hidden lg:flex items-center space-x-8 lg:space-x-12 absolute left-1/2 -translate-x-1/2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="text-[10px] tracking-[0.2em] uppercase font-medium hover:opacity-70 transition-opacity drop-shadow-sm"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Right: Book Button & Hamburger */}
        <div className="flex items-center space-x-6 md:space-x-8">
          <Link 
            to="/book"
            className="hidden md:flex items-center justify-center px-6 py-2.5 border border-current text-[10px] tracking-[0.2em] uppercase font-medium hover:bg-white hover:text-[#0B120C] transition-all duration-300 drop-shadow-sm"
          >
            Book Your Escape
          </Link>

          <button
            className="flex flex-col justify-between w-[22px] h-[12px] md:w-[28px] md:h-[14px] hover:opacity-70 z-50 transition-opacity cursor-pointer"
            onClick={() => setSidebarOpen(true)}
          >
            <span className="w-full h-[1px] bg-current transition-all duration-300"></span>
            <span className="w-full h-[1px] bg-current transition-all duration-300"></span>
            <span className="w-full h-[1px] bg-current transition-all duration-300"></span>
          </button>
        </div>
      </motion.nav>

      {/* Sidebar Overlay */}
      <AnimatePresence>
        {sidebarOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="fixed inset-0 z-[90] bg-[#141413]/40 backdrop-blur-sm"
              onClick={() => setSidebarOpen(false)}
            />
            
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="fixed top-0 left-0 bottom-0 w-[85vw] md:w-[450px] bg-[#F0EFEA] z-[100] flex flex-col pt-24 px-10 pb-12 overflow-y-auto shadow-2xl"
            >
              <button
                className="absolute top-8 left-10 text-[#2c312a]/50 hover:text-[#2c312a] transition-colors p-2 -ml-2"
                onClick={() => setSidebarOpen(false)}
              >
                <X size={28} strokeWidth={1} />
              </button>
              
              <div className="flex flex-col space-y-6 mt-8 flex-1 lg:hidden">
                {navLinks.map((link, i) => (
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 + (i * 0.05), ease: [0.16, 1, 0.3, 1] }}
                    key={link.name}
                  >
                    <Link
                      to={link.path}
                      className="font-serif text-3xl md:text-4xl text-[#2c312a] hover:text-[#9C8A71] transition-colors duration-300 font-light flex items-center justify-between group"
                      onClick={() => setSidebarOpen(false)}
                    >
                      <span>{link.name}</span>
                    </Link>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="mt-12 pt-8 border-t border-[#2c312a]/10 lg:mt-8 lg:pt-0 lg:border-none"
              >
                {/* Mobile Authentication Links */}
                {user ? (
                  <button 
                    onClick={() => {
                      signOut(auth);
                      toast.success('Successfully signed out!');
                      setSidebarOpen(false);
                    }}
                    className="flex items-center gap-4 text-[10px] tracking-[0.2em] uppercase font-medium text-[#2c312a] hover:text-[#9C8A71] transition-colors mb-6"
                  >
                    <User size={16} strokeWidth={1} />
                    <span>Sign Out</span>
                  </button>
                ) : (
                  <Link 
                    to="/login"
                    className="flex items-center gap-4 text-[10px] tracking-[0.2em] uppercase font-medium text-[#2c312a] hover:text-[#9C8A71] transition-colors mb-6"
                    onClick={() => setSidebarOpen(false)}
                  >
                    <User size={16} strokeWidth={1} />
                    <span>Login</span>
                  </Link>
                )}

                <Link 
                  to="/my-reservations"
                  onClick={() => setSidebarOpen(false)}
                  className="flex items-center gap-4 text-[10px] tracking-[0.2em] uppercase font-medium text-[#2c312a] hover:text-[#9C8A71] transition-colors"
                >
                  <Calendar size={16} strokeWidth={1} />
                  <span>My Reservations</span>
                </Link>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
