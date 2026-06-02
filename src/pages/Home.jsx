import React, { useRef } from 'react';
import { motion, useScroll } from 'framer-motion';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import {
  cycleWonder,
  eveningWalk,
  page1,
  page2,
  page3,
  page4b,
  page4,
  page5b,
  page5cWonder,
  page5d,
  page5e,
  trekWonder,
  heritageSuite,
  malnadSecond,
  earthHeritage1,
  newImage,
  diningImage,
  dining1,
  dining2,
  dining3,
  poolImage
} from '../greenhousefiles';

export default function Home() {
  const containerRef = useRef(null);
  

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <div ref={containerRef} className="w-full bg-[#0B120C] text-[#E4E0D9] font-sans selection:bg-[#9C8A71] selection:text-[#0B120C]">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[100vh] w-full flex items-center bg-[#0B120C] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero_landscape.jpg"
            alt="GreenSoul Landscape"
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* Gradients for text legibility and blending */}
          <div className="absolute inset-0 bg-black/20 z-0"></div>
          <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-black/60 to-transparent z-0"></div>
          <div className="absolute inset-y-0 left-0 w-full md:w-2/3 lg:w-1/2 bg-gradient-to-r from-[#0B120C]/90 via-[#0B120C]/50 to-transparent z-0"></div>
          <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#0B120C] to-transparent z-[50]"></div>
        </div>
        
        {/* Hero Content */}
        <div className="relative z-10 w-full px-4 md:px-12 pt-24 flex flex-col items-center md:items-start text-center md:text-left">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="max-w-2xl flex flex-col items-center md:items-start"
          >
            <p className="text-[10px] tracking-[0.3em] uppercase font-medium text-[#A3A19B] mb-6">
              Rooted in the wild. Made for slow living.
            </p>
            
            <h1 className="font-heading text-6xl md:text-7xl lg:text-[5.5rem] leading-[1.05] tracking-tight text-[#F3E9DC] mb-8">
              Earthy Luxury<br/>
              Inside a Living<br/>
              Rainforest
            </h1>

            <div className="w-12 h-[1px] bg-[#A3A19B]/40 mb-8 mx-auto md:mx-0"></div>
            
            <p className="text-[10px] tracking-[0.3em] uppercase font-medium text-[#A3A19B] mb-6">
              Luxury in its natural form
            </p>
            
            <p className="text-[15px] leading-[2] font-light text-[#E4E0D9] max-w-md mb-12">
              Hidden within the rainforests of the Western Ghats, GreenSoul is a consciously crafted retreat shaped by earth, mist, monsoon, and silence.
            </p>

            <Link to="/our-story" className="inline-flex items-center gap-4 px-8 py-4 border border-[#A3A19B]/40 text-[10px] tracking-[0.2em] uppercase font-medium text-[#F3E9DC] hover:bg-[#F3E9DC] hover:text-[#0B120C] transition-all duration-500 w-fit group">
              Discover GreenSoul
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <div 
          className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center text-white cursor-pointer z-[60] animate-bounce-slow" 
          onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
        >
          <span className="text-[10px] tracking-[0.3em] uppercase font-medium mb-3 opacity-90 drop-shadow-md">Scroll to explore</span>
          <ChevronDown size={20} strokeWidth={1.5} className="opacity-90 drop-shadow-md" />
        </div>
      </section>

      {/* 2. STAY SECTION */}
      <section className="relative py-24 md:py-32 px-6 md:px-16 lg:px-[120px] max-w-[1600px] mx-auto z-10">
        <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <p className="text-[10px] tracking-[0.3em] uppercase font-medium text-[#9C8A71] mb-6 flex items-center gap-4">
              <span className="w-8 h-[1px] bg-[#9C8A71]"></span>
              Stay
            </p>
            <h2 className="font-heading text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight text-[#F3E9DC]">
              Sanctuaries of <br/><span className="font-serif italic font-light text-[#9C8A71]">rest.</span>
            </h2>
          </div>
          <Link to="/stay" className="group flex items-center gap-4 text-[10px] tracking-[0.2em] uppercase font-medium text-[#F3E9DC] transition-all pb-2">
            <span className="pb-1 border-b border-[#9C8A71]/30 group-hover:border-[#9C8A71] transition-colors">Explore Stay</span>
            <ArrowRight size={14} className="text-[#9C8A71] group-hover:translate-x-2 transition-transform duration-500" />
          </Link>
        </div>

        {/* Mist Valley Cottages */}
        <div className="mb-32 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 1 }} className="flex flex-col gap-8">
                <div className="aspect-[4/5] overflow-hidden">
                    <img src="/images/Mist Valley Cottages.png" alt="Mist Valley Cottage" className="w-full h-full object-cover" />
                </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 1 }} className="flex flex-col">
                <div className="aspect-[16/10] overflow-hidden mb-12">
                    <img src={page4} alt="Mist Valley Views" className="w-full h-full object-cover" />
                </div>
                <h3 className="font-heading text-4xl mb-4 text-[#F3E9DC] tracking-tight">Mist Valley Cottages</h3>
                <p className="text-[15px] leading-[2] text-[#A3A19B] font-light max-w-md">Elevated amongst ancient trees, providing undisturbed views of the rolling mists and vibrant rainforest life.</p>
            </motion.div>
        </div>

        {/* Heritage Villa */}
        <div className="mb-32 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 1 }} className="flex flex-col order-2 lg:order-1">
                <h3 className="font-heading text-4xl mb-4 text-[#F3E9DC] tracking-tight">Heritage Villa</h3>
                <p className="text-[15px] leading-[2] text-[#A3A19B] font-light max-w-md mb-12">Crafted from earth and reclaimed timber, offering spacious living with interiors that breathe naturally.</p>
                <div className="aspect-[16/10] overflow-hidden">
                    <img src="/images/earth_heritage_opt.jpg" alt="Heritage Villa Exterior" className="w-full h-full object-cover" />
                </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 1 }} className="order-1 lg:order-2 flex flex-col gap-8">
                <div className="aspect-[4/5] overflow-hidden">
                    <img src={page5cWonder} alt="Heritage Villa Interior" className="w-full h-full object-cover" />
                </div>
            </motion.div>
        </div>

        {/* The Malnad Collective */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 1 }} className="flex flex-col gap-8">
                <div className="aspect-[4/5] overflow-hidden">
                    <img src={newImage} alt="The Malnad Collective Detail" className="w-full h-full object-cover" />
                </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 1 }} className="flex flex-col">
                <div className="aspect-[4/3] overflow-hidden mb-12">
                    <img src={malnadSecond} alt="The Malnad Collective" className="w-full h-full object-cover" />
                </div>
                <h3 className="font-heading text-4xl mb-4 text-[#F3E9DC] tracking-tight">The Malnad Collective</h3>
                <p className="text-[15px] leading-[2] text-[#A3A19B] font-light max-w-md">Designed for shared living with sweeping verandahs right next to the deep rainforest edge.</p>
            </motion.div>
        </div>
      </section>

      {/* 3. DINING SECTION */}
      <section className="relative py-32 bg-[#101511]">
        <div className="max-w-[1600px] mx-auto px-6 md:px-16 lg:px-[120px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 1 }}>
              <p className="text-[10px] tracking-[0.3em] uppercase font-medium text-[#9C8A71] mb-6 flex items-center gap-4">
                <span className="w-8 h-[1px] bg-[#9C8A71]"></span>
                Dining
              </p>
              <h2 className="font-heading text-5xl md:text-6xl lg:text-7xl mb-8 leading-[1.05] tracking-tight text-[#F3E9DC]">
                Foraged & <br/><span className="font-serif italic font-light text-[#9C8A71]">Fire-cooked.</span>
              </h2>
              <p className="text-[15px] leading-[2] font-light text-[#A3A19B] mb-12 max-w-md">
                Honoring ancient foraging traditions, our culinary experiences blend the rich flavors of the Malnad region with an unhurried, atmospheric setting.
              </p>
              <Link to="/dining" className="group flex items-center gap-4 text-[10px] tracking-[0.2em] uppercase font-medium text-[#F3E9DC] transition-all w-fit">
                <span className="pb-1 border-b border-[#9C8A71]/30 group-hover:border-[#9C8A71] transition-colors">Explore Dining</span>
                <ArrowRight size={14} className="text-[#9C8A71] group-hover:translate-x-2 transition-transform duration-500" />
              </Link>
            </motion.div>
            
            <div className="grid grid-cols-2 gap-6">
                <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1 }} className="flex flex-col gap-6 translate-y-12">
                    <img src={diningImage} alt="Dining Atmosphere" className="w-full aspect-[4/5] object-cover" />
                    <img src={dining2} alt="Dining Experience" className="w-full aspect-square object-cover" />
                </motion.div>
                <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.2 }} className="flex flex-col gap-6">
                    <img src={dining1} alt="Cuisine Detail" className="w-full aspect-square object-cover" />
                    <img src={dining3} alt="Cuisine Close-up" className="w-full aspect-[4/5] object-cover" />
                </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. POOL & LANDSCAPE SECTION */}
      <section className="relative py-32 bg-[#090C09]">
        <div className="max-w-[1600px] mx-auto px-6 md:px-16 lg:px-[120px]">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-24">
            <div>
              <p className="text-[10px] tracking-[0.3em] uppercase font-medium text-[#9C8A71] mb-6 flex items-center gap-4">
                <span className="w-8 h-[1px] bg-[#9C8A71]"></span>
                Pool & Landscape
              </p>
              <h2 className="font-heading text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight text-[#F3E9DC]">
                Reflections of <br/><span className="font-serif italic font-light text-[#9C8A71]">nature.</span>
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 1 }} className="lg:col-span-8 aspect-[16/9] lg:aspect-auto">
                <img src={poolImage} alt="Luxury Swimming Pool" className="w-full h-full object-cover" />
            </motion.div>
            <div className="lg:col-span-4 flex flex-col gap-8">
                <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 1 }} className="aspect-square">
                    <img src={page1} alt="Rainforest Pond" className="w-full h-full object-cover" />
                </motion.div>
                <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.2 }} className="aspect-square">
                    <img src={cycleWonder} alt="Rolling Hills Landscape" className="w-full h-full object-cover" />
                </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. LIFE AT GREENSOUL SECTION */}
      <section className="py-32 bg-[#0B120C]">
        <div className="max-w-[1600px] mx-auto px-6 md:px-16 lg:px-[120px]">
          <div className="text-center mb-24 flex flex-col items-center">
            <p className="text-[10px] tracking-[0.3em] uppercase font-medium text-[#9C8A71] mb-6 flex items-center gap-4">
              <span className="w-8 h-[1px] bg-[#9C8A71]"></span>
              Life at GreenSoul
              <span className="w-8 h-[1px] bg-[#9C8A71]"></span>
            </p>
            <h2 className="font-heading text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight text-[#F3E9DC] max-w-2xl">
              Embrace the <span className="font-serif italic font-light text-[#9C8A71]">quiet.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
             <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1 }} className="flex flex-col gap-6 lg:mt-12">
                <img src={page5b} alt="Tea Moments" className="w-full aspect-[4/5] object-cover" />
                <p className="text-[#A3A19B] font-light text-[14px]">Morning tea amidst the mist</p>
             </motion.div>
             <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.1 }} className="flex flex-col gap-6">
                <img src={page1} alt="Rainfall" className="w-full aspect-[3/4] object-cover" />
                <p className="text-[#A3A19B] font-light text-[14px]">Monsoon immersion & rainfall</p>
             </motion.div>
             <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.2 }} className="flex flex-col gap-6 lg:mt-24">
                <img src={page5e} alt="Slow Living" className="w-full aspect-square object-cover object-right" />
                <p className="text-[#A3A19B] font-light text-[14px]">Family moments & slow living</p>
             </motion.div>
             <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.3 }} className="flex flex-col gap-6 lg:mt-8">
                <img src={page5d} alt="Architecture Details" className="w-full aspect-[4/5] object-cover" />
                <p className="text-[#A3A19B] font-light text-[14px]">Nature-integrated architecture</p>
             </motion.div>
          </div>
        </div>
      </section>

      {/* 6. EXPERIENCES SECTION */}
      <section className="relative py-32 bg-[#0E1410]">
        <div className="max-w-[1600px] mx-auto px-6 md:px-16 lg:px-[120px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 1 }}>
                <div className="grid grid-cols-2 gap-4">
                    <img src={eveningWalk} alt="Forest Walks" className="w-full aspect-[4/5] object-cover translate-y-8" />
                    <img src={page5cWonder} alt="Stargazing" className="w-full aspect-[3/4] object-cover" />
                    <img src={trekWonder} alt="Plantation Experiences" className="w-full aspect-square object-cover translate-y-8" />
                    <img src={page1} alt="Monsoon Immersion" className="w-full aspect-square object-cover" />
                </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 1 }} className="lg:pl-12">
              <p className="text-[10px] tracking-[0.3em] uppercase font-medium text-[#9C8A71] mb-6 flex items-center gap-4">
                <span className="w-8 h-[1px] bg-[#9C8A71]"></span>
                Experiences
              </p>
              <h2 className="font-heading text-5xl md:text-6xl lg:text-7xl mb-8 leading-[1.05] tracking-tight text-[#F3E9DC]">
                Slow <br/><span className="font-serif italic font-light text-[#9C8A71]">Pursuits.</span>
              </h2>
              <ul className="flex flex-col gap-4 mb-12 text-[#E4E0D9] font-light text-[15px]">
                <li className="flex items-center gap-4"><span className="w-1.5 h-1.5 rounded-full bg-[#9C8A71]"></span> Forest Walks</li>
                <li className="flex items-center gap-4"><span className="w-1.5 h-1.5 rounded-full bg-[#9C8A71]"></span> Stargazing</li>
                <li className="flex items-center gap-4"><span className="w-1.5 h-1.5 rounded-full bg-[#9C8A71]"></span> Plantation Experiences</li>
                <li className="flex items-center gap-4"><span className="w-1.5 h-1.5 rounded-full bg-[#9C8A71]"></span> Monsoon Immersion</li>
              </ul>
              <Link to="/experiences" className="group flex items-center gap-4 text-[10px] tracking-[0.2em] uppercase font-medium text-[#F3E9DC] transition-all w-fit">
                <span className="pb-1 border-b border-[#9C8A71]/30 group-hover:border-[#9C8A71] transition-colors">Explore Experiences</span>
                <ArrowRight size={14} className="text-[#9C8A71] group-hover:translate-x-2 transition-transform duration-500" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 7. OUR STORY SECTION */}
      <section className="py-32 bg-[#0B120C]">
        <div className="max-w-[1600px] mx-auto px-6 md:px-16 lg:px-[120px] text-center max-w-4xl">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1 }} className="flex flex-col items-center">
              <p className="text-[10px] tracking-[0.3em] uppercase font-medium text-[#9C8A71] mb-6 flex items-center justify-center gap-4">
                <span className="w-8 h-[1px] bg-[#9C8A71]"></span>
                Our Story
                <span className="w-8 h-[1px] bg-[#9C8A71]"></span>
              </p>
              <h2 className="font-heading text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight mb-10 text-[#F3E9DC]">
                Rooted in <br/><span className="font-serif italic font-light text-[#9C8A71]">philosophy.</span>
              </h2>
              <p className="text-[16px] leading-[2] font-light text-[#A3A19B] mb-12">
                GreenSoul is a testament to sustainable living. We believe in architecture that bends to the forest, fostering a profound connection with nature without leaving a heavy footprint behind.
              </p>
              <Link to="/our-story" className="group flex items-center gap-4 text-[10px] tracking-[0.2em] uppercase font-medium text-[#F3E9DC] transition-all justify-center w-fit mx-auto">
                <span className="pb-1 border-b border-[#9C8A71]/30 group-hover:border-[#9C8A71] transition-colors">Discover Our Story</span>
                <ArrowRight size={14} className="text-[#9C8A71] group-hover:translate-x-2 transition-transform duration-500" />
              </Link>
            </motion.div>
        </div>
      </section>

      {/* 8. BOOK YOUR ESCAPE CTA SECTION */}
      <section className="relative py-40 bg-[#0B120C] overflow-hidden flex items-center justify-center text-center">
         <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#050806] pointer-events-none z-0"></div>
         <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1.2 }} className="relative z-10 px-6">
            <h2 className="font-heading text-6xl md:text-8xl lg:text-[8rem] leading-[1] tracking-tight text-[#F3E9DC] mb-12">
               Ready to <br/><i className="font-serif italic font-light text-[#9C8A71]">escape?</i>
            </h2>
            <Link to="/book" className="inline-flex items-center justify-center px-12 py-5 bg-[#9C8A71] text-[#0B120C] text-[11px] tracking-[0.2em] uppercase font-bold hover:bg-[#F3E9DC] transition-colors duration-500">
               Book Your Escape
            </Link>
         </motion.div>
      </section>

    </div>
  );
}
