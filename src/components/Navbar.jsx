import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { X, Calendar, User, ChevronDown, ConciergeBell } from 'lucide-react';
import { cn } from '../utils/cn';
import { Link, useLocation } from 'react-router-dom';
import { auth } from '../firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import toast from 'react-hot-toast';

export default function Navbar() {
  const langMap = {
    'AR': 'ar',
    'EN': 'en',
    'ES': 'es',
    'FR': 'fr',
    'HE': 'iw',
    'IT': 'it',
    'JP': 'ja',
    'PT': 'pt',
    'RU': 'ru',
    'TR': 'tr',
    'VN': 'vi',
    'ZH': 'zh-CN'
  };

  const getInitialLang = () => {
    const match = document.cookie.match(/googtrans=\/en\/([a-zA-Z-]+)/);
    if (match && match[1]) {
      const code = match[1];
      const found = Object.entries(langMap).find(([key, val]) => val === code);
      return found ? found[0] : 'EN';
    }
    return 'EN';
  };

  const [scrolled, setScrolled] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [selectedLang, setSelectedLang] = useState(getInitialLang());
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  
  const languages = Object.keys(langMap);

  const location = useLocation();
  const { scrollY } = useScroll();

  const handleLanguageChange = (lang) => {
    setSelectedLang(lang);
    setLangDropdownOpen(false);
    
    if (lang === 'EN') {
      document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
      document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=${window.location.hostname};`;
    } else {
      document.cookie = `googtrans=/en/${langMap[lang]}; path=/`;
    }
    
    window.location.reload();
  };

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
    { name: 'Stay', path: '/stay' },
    { name: 'Dining', path: '/dining' },
    { name: 'Experiences', path: '/experiences' },
    { name: 'Our Story', path: '/our-story' },
    { name: 'Gallery', path: '/gallery' }
  ];

  // Determine if the current page has a dark background at the top, requiring light text initially
  const isDarkNav = !['/login', '/book', '/gallery', '/my-reservations'].includes(location.pathname);

  // Text color logic for navbar
  let textColorClass = "text-[#2c312a]";
  if (isDarkNav && !scrolled) {
    textColorClass = "text-[#E5E1D6]";
  } else if (location.pathname === '/' && !scrolled) {
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
          scrolled 
            ? 'bg-[#F0EFEA]/95 backdrop-blur-md py-4 shadow-sm !text-[#2c312a]' 
            : (isDarkNav || location.pathname === '/' 
                ? 'bg-gradient-to-b from-black/50 via-black/10 to-transparent py-6 md:py-8 shadow-none' 
                : 'bg-transparent py-6 md:py-8')
        )}
      >
        {/* Left: Hamburger & Language */}
        <div className="flex-1 flex items-center justify-start gap-4 md:gap-6">
          <button
            className="flex flex-col space-y-[6px] w-6 md:w-[30px] hover:opacity-70 py-2 z-50 transition-opacity items-start"
            onClick={() => setSidebarOpen(true)}
          >
            <span className="w-full h-[1.5px] bg-current transition-all duration-300 drop-shadow-sm"></span>
            <span className="w-[60%] h-[1.5px] bg-current transition-all duration-300 drop-shadow-sm"></span>
            <span className="w-full h-[1.5px] bg-current transition-all duration-300 drop-shadow-sm"></span>
          </button>
          
          <div className="hidden md:flex relative z-[100]">
            {langDropdownOpen && (
              <div 
                className="fixed inset-0 z-[-1]" 
                onClick={() => setLangDropdownOpen(false)}
              />
            )}
            <button 
              onClick={() => setLangDropdownOpen(!langDropdownOpen)}
              className="flex items-center gap-1 hover:opacity-70 cursor-pointer text-[10px] tracking-[0.2em] font-medium uppercase transition-opacity drop-shadow-sm"
            >
              <ChevronDown size={12} strokeWidth={2} className={cn("transition-transform duration-300", langDropdownOpen && "rotate-180")} />
              <span>{selectedLang}</span>
            </button>
            
            <AnimatePresence>
              {langDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 5 }}
                  transition={{ duration: 0.15 }}
                  className="absolute top-full left-0 mt-3 bg-white border border-gray-100 shadow-xl py-0 min-w-[50px] flex flex-col items-center"
                >
                  {languages.map((lang) => (
                    <button
                      key={lang}
                      onClick={() => handleLanguageChange(lang)}
                      className={cn(
                        "w-full px-3 py-2 text-[10px] font-sans transition-colors outline-none",
                        selectedLang === lang 
                          ? "bg-[#1d70b8] text-white" 
                          : "text-gray-800 hover:bg-gray-100"
                      )}
                    >
                      {lang}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Center: Logo */}
        <div className="flex-shrink-0 flex justify-center">
          <Link to="/" className="flex flex-col items-center group">
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

        {/* Right: Actions (Pill Buttons) */}
        <div className="flex-1 flex justify-end items-center space-x-2 md:space-x-6">
          {user ? (
            <button 
              onClick={() => {
                signOut(auth);
                toast.success('Successfully signed out!');
              }}
              className="hidden lg:flex items-center justify-between pl-5 pr-1 py-1 border-[1px] border-current rounded-full text-[9px] md:text-[10px] tracking-[0.15em] uppercase font-medium transition-all duration-300 group hover:opacity-70"
            >
              <span className="mr-3">Sign Out</span>
              <div className={cn(
                "w-[26px] h-[26px] md:w-[30px] md:h-[30px] rounded-full flex items-center justify-center transition-colors",
                textColorClass.includes('E5E1D6') ? "bg-white text-[#2c312a]" : "bg-[#2c312a] text-[#E5E1D6]"
              )}>
                <User size={14} strokeWidth={1.5} />
              </div>
            </button>
          ) : (
            <Link 
              to="/login"
              className="hidden lg:flex items-center justify-between pl-5 pr-1 py-1 border-[1px] border-current rounded-full text-[9px] md:text-[10px] tracking-[0.15em] uppercase font-medium transition-all duration-300 group hover:opacity-70"
            >
              <span className="mr-3">Login</span>
              <div className={cn(
                "w-[26px] h-[26px] md:w-[30px] md:h-[30px] rounded-full flex items-center justify-center transition-colors",
                textColorClass.includes('E5E1D6') ? "bg-white text-[#2c312a]" : "bg-[#2c312a] text-[#E5E1D6]"
              )}>
                <User size={14} strokeWidth={1.5} />
              </div>
            </Link>
          )}

          <Link 
            to="/book"
            className={cn(
              "flex items-center gap-2 md:gap-3 px-3 md:px-5 pr-2 md:pr-4 py-2 md:py-2.5 rounded-full text-[9px] md:text-[10px] tracking-[0.15em] uppercase font-medium transition-all duration-300 shadow-sm",
              "bg-white text-[#2c312a] hover:bg-[#F0EFEA]"
            )}
          >
            <span className="hidden sm:inline">Book Now</span>
            <span className="sm:hidden">Book</span>
            <ConciergeBell size={16} strokeWidth={1.5} className="md:w-[18px] md:h-[18px]" />
          </Link>
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
              
              <div className="flex flex-col space-y-6 mt-8 flex-1">
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
                className="mt-12 pt-8 border-t border-[#2c312a]/10"
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
                    className="lg:hidden flex items-center gap-4 text-[10px] tracking-[0.2em] uppercase font-medium text-[#2c312a] hover:text-[#9C8A71] transition-colors mb-6"
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
