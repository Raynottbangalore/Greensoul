import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight, ChevronDown } from 'lucide-react';
import { cn } from './utils/cn';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = ['Stay', 'Dining', 'Experiences', 'Our Story', 'Architecture'];

  return (
    <>
      <nav
        className={cn(
          'fixed w-full z-50 transition-all duration-500 py-6 px-8 lg:px-16 flex justify-between items-center',
          scrolled ? 'bg-brand-green/90 backdrop-blur-md py-4' : 'bg-transparent'
        )}
      >
        <div className="flex flex-col items-center">
          <span className="font-heading text-2xl tracking-widest text-brand-white">GREENSOUL</span>
          <span className="font-body text-[10px] tracking-[0.3em] text-brand-gold mt-1">ECOSTAY</span>
        </div>

        <div className="hidden lg:flex items-center space-x-12">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase().replace(' ', '-')}`}
              className="text-sm tracking-widest uppercase hover:text-brand-gold transition-colors duration-300"
            >
              {link}
            </a>
          ))}
          <button className="border border-brand-gold text-brand-gold px-6 py-2 text-sm tracking-widest uppercase hover:bg-brand-gold hover:text-brand-green transition-colors duration-300">
            Book Your Escape
          </button>
        </div>

        <button
          className="lg:hidden text-brand-white"
          onClick={() => setMobileMenuOpen(true)}
        >
          <Menu size={28} />
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="fixed inset-0 z-50 bg-brand-green flex flex-col justify-center items-center"
          >
            <button
              className="absolute top-8 right-8 text-brand-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              <X size={32} />
            </button>
            <div className="flex flex-col space-y-8 text-center">
              {navLinks.map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase().replace(' ', '-')}`}
                  className="font-heading text-3xl text-brand-white hover:text-brand-gold transition-colors duration-300"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link}
                </a>
              ))}
              <button className="mt-8 border border-brand-gold text-brand-gold px-8 py-3 text-lg tracking-widest uppercase">
                Book Your Escape
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-[#07110A]">
      
      {/* LAYER 1: Parallax Base Forest Image (Slow Ken Burns Zoom) */}
      <motion.div
        initial={{ scale: 1.15, y: '0%' }}
        animate={{ scale: 1, y: '-2%' }}
        transition={{ duration: 35, ease: 'easeOut' }}
        className="absolute inset-0 z-0 origin-center"
      >
        <img
          src="/images/hero_landscape.jpg"
          alt="Rainforest valley"
          className="w-full h-full object-cover object-center"
        />
      </motion.div>

      {/* LAYER 2: Moving Deep Fog & Waterfall Mist */}
      <div className="absolute inset-0 z-10 pointer-events-none mix-blend-screen overflow-hidden">
        {/* Main valley cloud rolling right to left */}
        <motion.div
          animate={{ x: ['10%', '-20%'], y: ['5%', '-5%'], opacity: [0.1, 0.4, 0.1] }}
          transition={{ duration: 40, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-[-10%] right-[-10%] w-[120%] h-[50%] bg-brand-white/30 blur-[100px] rounded-full"
        />
        {/* Heavy fog at the base (Waterfall mist simulation) */}
        <motion.div
          animate={{ x: ['-5%', '10%'], scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 30, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-[-20%] left-[-20%] w-[150%] h-[60%] bg-brand-white/40 blur-[120px] rounded-full"
        />
        {/* Thin drifting tea smoke / mist in foreground */}
        <motion.div
          animate={{ x: ['-20%', '30%'], y: ['20%', '-10%'], opacity: [0, 0.2, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
          className="absolute top-[20%] left-[-10%] w-[60%] h-[30%] bg-brand-white/20 blur-[60px] rounded-[100%]"
        />
      </div>

      {/* LAYER 3: Warm Cottage Glowing Lights (Dusk atmosphere) */}
      <div className="absolute inset-0 z-20 pointer-events-none mix-blend-screen">
        {/* Light over the red roof on the left */}
        <motion.div
          animate={{ opacity: [0.3, 0.8, 0.3], scale: [0.9, 1.1, 0.9] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute left-[16.5%] top-[54%] w-3 h-3 rounded-full bg-orange-400 blur-[2px]"
        >
          <div className="absolute inset-0 bg-orange-500/60 blur-[15px] w-24 h-24 -translate-x-1/2 -translate-y-1/2 rounded-full" />
        </motion.div>
        {/* Subtle secondary light reflection lower down */}
        <motion.div
          animate={{ opacity: [0.1, 0.4, 0.1] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          className="absolute left-[18%] top-[62%] w-10 h-10 rounded-full bg-orange-500/30 blur-[20px]"
        />
      </div>

      {/* LAYER 4: Monsoon Rain Atmosphere */}
      <div className="absolute inset-0 z-30 pointer-events-none mix-blend-screen opacity-60">
        <div className="absolute inset-[-20%] animate-rain" />
      </div>

      {/* LAYER 5: Cinematic Color Grading & Dark Vignette */}
      <div className="absolute inset-0 z-40 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-t from-[#051009] via-[#051009]/50 to-[#051009]/80 mix-blend-multiply" />
        <div className="absolute inset-0 bg-[#162C1E]/20 mix-blend-overlay" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#051009]/60 via-transparent to-transparent" />
      </div>

      {/* LAYER 6: Film Grain (Noise texture) */}
      <div className="absolute inset-0 z-50 pointer-events-none opacity-[0.04] mix-blend-overlay overflow-hidden">
        <div 
          className="absolute inset-[-50%] animate-grain"
          style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} 
        />
      </div>

      {/* LAYER 7: Floating Typography & Content */}
      <div className="relative z-50 text-center px-6 max-w-5xl mx-auto flex flex-col items-center mt-16">
        <motion.p
          initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 2, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-brand-gold tracking-[0.4em] text-[10px] md:text-xs uppercase mb-8 drop-shadow-lg"
        >
          Luxury In Its Natural Form
        </motion.p>
        
        <motion.h1
          initial={{ opacity: 0, scale: 0.95, filter: 'blur(20px)' }}
          animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
          transition={{ duration: 2.5, delay: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="font-heading text-6xl md:text-8xl lg:text-[10rem] text-brand-white leading-[0.9] mb-8 tracking-wider drop-shadow-2xl"
        >
          GreenSoul<br />Ecostay
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, delay: 2.2, ease: 'easeOut' }}
          className="text-brand-white/80 font-light max-w-2xl text-xs md:text-sm tracking-[0.2em] uppercase mb-16 leading-relaxed drop-shadow-lg"
        >
          Hidden Within The Rainforests &<br className="hidden md:block" /> Coffee Plantations Of The Western Ghats
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, delay: 2.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="flex flex-col sm:flex-row gap-6 sm:gap-10"
        >
          <button className="border border-brand-white/30 text-brand-white px-10 py-4 text-[10px] tracking-[0.3em] uppercase hover:bg-brand-white hover:text-brand-green transition-all duration-700 backdrop-blur-md bg-brand-green/10">
            Explore The Stay
          </button>
          <button className="bg-brand-gold/90 text-brand-green px-10 py-4 text-[10px] tracking-[0.3em] uppercase hover:bg-brand-white transition-all duration-700 shadow-[0_0_20px_rgba(197,168,128,0.2)]">
            Book Your Escape
          </button>
        </motion.div>
      </div>

      {/* Cinematic Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 4 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center text-brand-white/40 hover:text-brand-white transition-colors duration-500 cursor-pointer z-50"
        onClick={() => document.getElementById('our-story')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <span className="text-[9px] tracking-[0.4em] uppercase mb-4 drop-shadow-md">Discover</span>
        <motion.div
           animate={{ y: [0, 8, 0], opacity: [0.3, 1, 0.3] }}
           transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown size={20} strokeWidth={1} />
        </motion.div>
      </motion.div>
    </section>
  );
}

function BrandStory() {
  return (
    <section id="our-story" className="py-32 px-6 md:px-16 lg:px-24 bg-brand-green text-center">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="font-heading text-3xl md:text-5xl lg:text-6xl text-brand-white leading-relaxed text-balance"
        >
          Built consciously with earth, stone, rain, and time — GreenSoul is a handcrafted eco retreat immersed within one of the world's richest biodiversity landscapes.
        </motion.h2>
      </div>
    </section>
  );
}

function ExperienceSection() {
  const experiences = [
    'Monsoon mist', 'Valley views', 'Earthen architecture',
    'Antique interiors', 'Forest silence', 'Curated dining'
  ];

  return (
    <section id="experiences" className="py-24 bg-brand-green">
      <div className="w-full overflow-hidden flex border-y border-brand-white/10 py-12">
        <motion.div
          animate={{ x: [0, -1035] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          className="flex whitespace-nowrap"
        >
          {[...experiences, ...experiences].map((exp, i) => (
            <div key={i} className="flex items-center px-12">
              <span className="font-heading text-4xl md:text-6xl text-brand-white/30 italic mr-12">•</span>
              <span className="font-heading text-4xl md:text-6xl text-brand-white tracking-wide">{exp}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function StayZones() {
  return (
    <section id="stay" className="py-32 bg-brand-ivory text-brand-green px-6 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <p className="text-brand-gold tracking-[0.2em] text-sm uppercase mb-4">The Sanctuaries</p>
          <h2 className="font-heading text-5xl md:text-6xl">Stay Experiences</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center mb-32">
          <div className="order-2 lg:order-1">
            <h3 className="font-heading text-4xl mb-6">The Mist Valley Cottages</h3>
            <p className="font-body text-brand-green/70 leading-relaxed mb-8 text-lg">
              Perched against unrestricted views of Murkan Gudda and the rolling hills of the Western Ghats, these eco-luxury cottages are designed to dissolve the boundaries between architecture and nature. During monsoon, clouds drift through open windows while evening mist quietly flows through the interiors almost year-round.
            </p>
            <button className="flex items-center text-sm tracking-widest uppercase border-b border-brand-green pb-2 hover:text-brand-gold hover:border-brand-gold transition-colors">
              Explore Cottage <ArrowRight size={16} className="ml-4" />
            </button>
          </div>
          <div className="order-1 lg:order-2">
            <div className="aspect-[4/5] relative overflow-hidden clip-diagonal">
              <img 
                src="/images/rainforest_view_1779811407333.png" 
                alt="Valley view" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center mb-32">
          <div>
            <div className="aspect-[4/5] relative overflow-hidden rounded-t-[100px]">
              <img 
                src="/images/heritage_earth_suite_1779811380883.png" 
                alt="Heritage suite" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div>
            <h3 className="font-heading text-4xl mb-6">The Heritage Earth Suites</h3>
            <p className="font-body text-brand-green/70 leading-relaxed mb-8 text-lg">
              Built as a semi-circular earthen structure using handmade adobe blocks and traditional mud plaster, these rooms remain naturally cool even during peak summer. The expansive curved verandah opens toward endless shades of forest green, offering guests a front-row seat to the changing moods of the rainforest.
            </p>
            <button className="flex items-center text-sm tracking-widest uppercase border-b border-brand-green pb-2 hover:text-brand-gold hover:border-brand-gold transition-colors">
              Explore Suite <ArrowRight size={16} className="ml-4" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="order-2 lg:order-1">
            <h3 className="font-heading text-4xl mb-6">The Malnad Collective</h3>
            <p className="font-body text-brand-green/70 leading-relaxed mb-8 text-lg">
              Positioned privately at the edge of the property, this traditional Malnad-style mud house with classic Mangalore roofing is designed for groups seeking meaningful connection, slow conversations, and immersive nature living.
            </p>
            <button className="flex items-center text-sm tracking-widest uppercase border-b border-brand-green pb-2 hover:text-brand-gold hover:border-brand-gold transition-colors">
              Explore The House <ArrowRight size={16} className="ml-4" />
            </button>
          </div>
          <div className="order-1 lg:order-2 bg-brand-green/5 aspect-[4/5] p-12 flex items-center justify-center">
             <div className="border border-brand-green p-12 text-center w-full h-full flex flex-col justify-center items-center">
                <p className="font-heading italic text-2xl mb-4">"Silence becomes the loudest experience."</p>
                <div className="w-12 h-[1px] bg-brand-green mb-8"></div>
                <p className="text-sm tracking-widest uppercase">For Group Gatherings</p>
             </div>
          </div>
        </div>

      </div>
    </section>
  );
}

function DiningAndArchitecture() {
  return (
    <section className="bg-brand-green text-brand-white">
      {/* Dining Section */}
      <div id="dining" className="grid grid-cols-1 lg:grid-cols-2">
        <div className="bg-[#1A2E20] p-16 md:p-24 lg:p-32 flex flex-col justify-center">
          <p className="text-brand-gold tracking-[0.2em] text-sm uppercase mb-6">Culinary Experience</p>
          <h2 className="font-heading text-4xl md:text-5xl mb-8 leading-tight">Curated Dining Rooted In The Land</h2>
          <p className="text-brand-white/70 font-light leading-relaxed mb-12 text-lg">
            The central dining pavilion, built using rammed earth architecture and filled with carefully curated royal antiques, opens into a lush landscaped garden with a gentle cascading waterfall. The open walk-in kitchen combines professional culinary functionality with authentic regional warmth.
          </p>
          <button className="self-start border border-brand-gold text-brand-gold px-8 py-4 text-sm tracking-widest uppercase hover:bg-brand-gold hover:text-brand-green transition-colors duration-500">
            Discover Our Menu
          </button>
        </div>
        <div className="h-[60vh] lg:h-auto bg-[#0d1b14] relative overflow-hidden">
           {/* Placeholder for dining image - we can use one of the generated ones slightly darkened or colored */}
           <div className="absolute inset-0 bg-brand-green/40 z-10" />
           <img src="/images/dining_pavilion_1779811496432.png" alt="Dining pavilion" className="w-full h-full object-cover scale-105" />
        </div>
      </div>

      {/* Architecture Section */}
      <div id="architecture" className="py-32 px-6 md:px-16 lg:px-24 text-center max-w-5xl mx-auto">
        <p className="text-brand-gold tracking-[0.2em] text-sm uppercase mb-6">Our Philosophy</p>
        <h2 className="font-heading text-5xl md:text-6xl mb-16 leading-tight">Architecture & Sustainability</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
           {['Rammed earth construction', 'Handmade adobe blocks', 'Dry stacked granite walls', 'Upcycled antiques', 'Traditional roofing', 'Climate-sensitive design', 'Low ecological impact', 'Naturally cool interiors'].map((feature, idx) => (
             <div key={idx} className="border border-brand-white/20 p-8 flex items-center justify-center hover:bg-brand-white/5 transition-colors duration-500">
                <span className="font-heading text-lg">{feature}</span>
             </div>
           ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-[#0d1b14] text-brand-white pt-24 pb-12 px-6 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16 mb-24">
        <div>
          <div className="flex flex-col mb-8">
            <span className="font-heading text-3xl tracking-widest text-brand-white">GREENSOUL</span>
            <span className="font-body text-xs tracking-[0.3em] text-brand-gold mt-1">ECOSTAY</span>
          </div>
          <p className="text-brand-white/50 text-sm leading-relaxed max-w-xs mb-8">
            Luxury In Its Natural Form.<br/>
            Rainforest Eco Retreat In Sakleshpur.<br/>
            Earth • Mist • Monsoon • Slow Living
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-brand-white hover:text-brand-gold transition-colors">Instagram</a>
            <a href="#" className="text-brand-white hover:text-brand-gold transition-colors">Facebook</a>
          </div>
        </div>

        <div>
          <h4 className="text-brand-gold text-xs tracking-[0.2em] uppercase mb-8">Navigation</h4>
          <ul className="space-y-4 text-brand-white/70 text-sm">
            <li><a href="#stay" className="hover:text-brand-gold transition-colors">The Sanctuaries</a></li>
            <li><a href="#dining" className="hover:text-brand-gold transition-colors">Dining Experience</a></li>
            <li><a href="#experiences" className="hover:text-brand-gold transition-colors">Experiences</a></li>
            <li><a href="#our-story" className="hover:text-brand-gold transition-colors">Brand Story</a></li>
            <li><a href="#architecture" className="hover:text-brand-gold transition-colors">Architecture</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-brand-gold text-xs tracking-[0.2em] uppercase mb-8">Contact</h4>
          <ul className="space-y-4 text-brand-white/70 text-sm">
            <li>Sakleshpur, Western Ghats</li>
            <li>Karnataka, India</li>
            <li className="pt-4"><a href="mailto:escape@greensoulecostay.com" className="hover:text-brand-gold transition-colors">escape@greensoulecostay.com</a></li>
            <li><a href="tel:+910000000000" className="hover:text-brand-gold transition-colors">+91 00000 00000</a></li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto border-t border-brand-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-brand-white/30">
        <p>&copy; {new Date().getFullYear()} GreenSoul Ecostay. All Rights Reserved.</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-brand-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-brand-white transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}

function App() {
  return (
    <div className="min-h-screen font-body bg-brand-green text-brand-white selection:bg-brand-gold/30 selection:text-brand-white">
      <Navbar />
      <main>
        <Hero />
        <BrandStory />
        <ExperienceSection />
        <StayZones />
        <DiningAndArchitecture />
      </main>
      <Footer />
    </div>
  );
}

export default App;
