import React, { useRef, useState } from 'react';
import { motion, useScroll } from 'framer-motion';
import { ChevronDown, ArrowRight, Loader2 } from 'lucide-react';
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
  heritageSuite,
  malnadSecond
} from '../greenhousefiles';
export default function Home() {
  const containerRef = useRef(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <div ref={containerRef} className="w-full bg-[#0B120C] text-[#E4E0D9] font-sans selection:bg-[#9C8A71] selection:text-[#0B120C]">
      {/* Hero Section - Exactly as it is */}
      <section className="relative min-h-[100vh] w-full flex items-center bg-[#0B120C] overflow-hidden">
        <div className="absolute inset-0 z-0 flex items-center justify-center">
          {!isVideoLoaded && (
            <div className="absolute z-10 flex flex-col items-center justify-center text-[#9C8A71]">
              <Loader2 className="w-8 h-8 animate-spin mb-4" />
              <span className="text-[10px] tracking-[0.3em] uppercase font-medium">Loading...</span>
            </div>
          )}
          <video
            src="/images/rain_tree.mp4"
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${isVideoLoaded ? 'opacity-100' : 'opacity-0'}`}
            style={{ transform: 'scale(1.6)', transformOrigin: 'center' }}
            autoPlay
            loop
            muted
            playsInline
            onCanPlay={() => setIsVideoLoaded(true)}
          />
          <div className="absolute inset-0 bg-black/20 z-0"></div>
          <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-black/60 to-transparent z-0"></div>
        </div>
        
        {/* Transition Gradient overlay at the bottom of the hero to blend into dark forest */}
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#0B120C] to-transparent z-[50]"></div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center text-white cursor-pointer z-[60] animate-bounce-slow">
          <span className="text-[10px] tracking-[0.3em] uppercase font-medium mb-3 opacity-90 drop-shadow-md">Scroll to explore</span>
          <ChevronDown size={20} strokeWidth={1.5} className="opacity-90 drop-shadow-md" />
        </div>
      </section>

      {/* Chapter 1: The GreenSoul Story */}
      <section className="relative py-32 md:py-48 px-6 md:px-16 lg:px-[120px] max-w-[1600px] mx-auto z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="w-full lg:w-1/2 z-10"
          >
            <p className="text-[10px] tracking-[0.3em] uppercase font-medium text-[#9C8A71] mb-8 flex items-center gap-4">
              <span className="w-8 h-[1px] bg-[#9C8A71]"></span>
              Chapter 1
            </p>
            <h2 className="font-heading text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight mb-10 text-[#F3E9DC]">
              A sanctuary born <br/><span className="font-serif italic font-light text-[#9C8A71]">from the mist.</span>
            </h2>
            <p className="text-[15px] leading-[2] font-light text-[#A3A19B] max-w-lg mb-12">
              Hidden deep within the untouched ridges of the Western Ghats, GreenSoul is a testament to slow living. We did not carve a resort into the mountains; we wove a sanctuary into the existing rainforest canopy, allowing nature to dictate every architectural line.
            </p>
            <Link to="/our-story" className="group flex items-center gap-4 text-[10px] tracking-[0.2em] uppercase font-medium text-[#F3E9DC] transition-all w-fit">
              <span className="pb-1 border-b border-[#9C8A71]/30 group-hover:border-[#9C8A71] transition-colors">Our Story</span>
              <ArrowRight size={14} className="text-[#9C8A71] group-hover:translate-x-2 transition-transform duration-500" />
            </Link>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="aspect-[4/5] lg:aspect-[3/4] overflow-hidden group shadow-2xl w-full max-w-[500px] ml-auto">
              <motion.img 
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                src={page2} 
                alt="Mist Valley" 
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Chapter 2: Living with Nature */}
      <section className="relative w-full h-[100vh] min-h-[800px] overflow-hidden">
        <motion.div 
          initial={{ scale: 1.1 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2.5, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0 w-full h-full"
        >
          <img src={page1} alt="Monsoon Immersion" className="w-full h-full object-cover opacity-60" loading="lazy" />
          <div className="absolute inset-0 bg-[#0B120C]/30 mix-blend-multiply"></div>
          <div className="absolute inset-y-0 left-0 w-full md:w-2/3 bg-gradient-to-r from-[#0B120C] via-[#0B120C]/60 to-transparent"></div>
          <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#0B120C] to-transparent"></div>
          <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-[#0B120C] to-transparent"></div>
        </motion.div>

        <div className="relative z-10 h-full flex flex-col justify-center px-6 md:px-16 lg:px-[120px] max-w-[1600px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-[10px] tracking-[0.3em] uppercase font-medium text-[#9C8A71] mb-8">Chapter 2</p>
            <h2 className="font-heading text-6xl md:text-7xl lg:text-[7rem] leading-[1] tracking-tight mb-8 text-white max-w-3xl">
              Surrender to <br/><i className="font-serif italic font-light text-[#9C8A71]">the wild.</i>
            </h2>
            <p className="text-[16px] md:text-[18px] leading-[2] font-light text-[#E4E0D9] max-w-lg opacity-90">
              Let the rhythm of the monsoon dictate your day. Wake up to the song of the Malabar whistling thrush, trace the mist rolling over the canopy, and sleep under ancient ficus trees.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Chapter 3: The Sanctuaries */}
      <section className="py-32 md:py-48 px-6 md:px-16 lg:px-[120px] max-w-[1600px] mx-auto bg-[#0B120C]">
        <div className="flex flex-col items-center text-center mb-24 md:mb-32">
          <p className="text-[10px] tracking-[0.3em] uppercase font-medium text-[#9C8A71] mb-6 flex items-center justify-center gap-4">
            <span className="w-8 h-[1px] bg-[#9C8A71]"></span>
            Chapter 3
            <span className="w-8 h-[1px] bg-[#9C8A71]"></span>
          </p>
          <h2 className="font-heading text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight text-[#F3E9DC]">
            The Sanctuaries
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col group cursor-pointer"
          >
            <div className="aspect-[4/5] overflow-hidden mb-10 relative">
              <motion.img 
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                src={heritageSuite} 
                alt="Earth Heritage Suites" 
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-[#0B120C]/10 group-hover:bg-transparent transition-colors duration-700"></div>
            </div>
            <h3 className="font-heading text-3xl md:text-4xl lg:text-5xl mb-6 text-[#F3E9DC] group-hover:text-[#9C8A71] transition-colors duration-500 tracking-tight">
              Earth Heritage <i className="font-serif italic font-light text-[#9C8A71] group-hover:text-[#F3E9DC] transition-colors duration-500">Suites</i>
            </h3>
            <p className="text-[15px] leading-[2] text-[#A3A19B] font-light max-w-md mb-8">
              Rooted in earth, designed for togetherness. Built using handmade adobe walls and mud-plastered interiors that naturally breathe with the seasons.
            </p>
            <Link to="/stay" className="flex items-center gap-4 text-[10px] tracking-[0.2em] uppercase font-medium text-[#F3E9DC] transition-all w-fit">
              <span className="pb-1 border-b border-[#9C8A71]/30 group-hover:border-[#9C8A71] transition-colors">Explore Suite</span>
              <ArrowRight size={14} className="text-[#9C8A71] group-hover:translate-x-2 transition-transform duration-500" />
            </Link>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col group cursor-pointer md:mt-32"
          >
            <div className="aspect-[3/4] overflow-hidden mb-10 relative">
              <motion.img 
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                src={malnadSecond} 
                alt="The Malnad House" 
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-[#0B120C]/10 group-hover:bg-transparent transition-colors duration-700"></div>
            </div>
            <h3 className="font-heading text-3xl md:text-4xl lg:text-5xl mb-6 text-[#F3E9DC] group-hover:text-[#9C8A71] transition-colors duration-500 tracking-tight">
              The Malnad <i className="font-serif italic font-light text-[#9C8A71] group-hover:text-[#F3E9DC] transition-colors duration-500">House</i>
            </h3>
            <p className="text-[15px] leading-[2] text-[#A3A19B] font-light max-w-md mb-8">
              Tucked quietly beside the rainforest edge, designed for shared living with long sweeping verandahs and open courtyards.
            </p>
            <Link to="/stay" className="flex items-center gap-4 text-[10px] tracking-[0.2em] uppercase font-medium text-[#F3E9DC] transition-all w-fit">
              <span className="pb-1 border-b border-[#9C8A71]/30 group-hover:border-[#9C8A71] transition-colors">Explore House</span>
              <ArrowRight size={14} className="text-[#9C8A71] group-hover:translate-x-2 transition-transform duration-500" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Chapter 4: Rainforest Experiences */}
      <section className="py-24 bg-[#101912]">
        <div className="max-w-[1600px] mx-auto px-6 md:px-16 lg:px-[120px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-0 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-5 lg:pr-16 order-2 lg:order-1"
            >
              <p className="text-[10px] tracking-[0.3em] uppercase font-medium text-[#9C8A71] mb-8 flex items-center gap-4">
                <span className="w-8 h-[1px] bg-[#9C8A71]"></span>
                Chapter 4
              </p>
              <h2 className="font-heading text-5xl md:text-6xl lg:text-7xl mb-10 leading-[1] tracking-tight">
                Slow <br/><span className="font-serif italic font-light text-[#9C8A71]">Pursuits</span>
              </h2>
              <div className="space-y-8 text-[15px] leading-[2] font-light text-[#A3A19B] mb-12">
                <p>
                  Experiences here are not scheduled activities, but mindful engagements with the environment. Walk through centuries-old trails, trace the path of endemic birds, or simply lose yourself in the profound silence of the valley.
                </p>
              </div>
              <Link to="/experiences" className="group flex items-center gap-4 text-[10px] tracking-[0.2em] uppercase font-medium text-[#F3E9DC] transition-all w-fit">
                <span className="pb-1 border-b border-[#9C8A71]/30 group-hover:border-[#9C8A71] transition-colors">View Experiences</span>
                <ArrowRight size={14} className="text-[#9C8A71] group-hover:translate-x-2 transition-transform duration-500" />
              </Link>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-7 order-1 lg:order-2"
            >
              <div className="grid grid-cols-2 gap-4 md:gap-8">
                <div className="flex flex-col gap-4 md:gap-8 translate-y-12">
                  <div className="aspect-[3/4] overflow-hidden group shadow-xl">
                    <motion.img whileHover={{ scale: 1.05 }} transition={{ duration: 1.5 }} src={eveningWalk} alt="Evening Walk" className="w-full h-full object-cover" loading="lazy" />
                  </div>
                  <div className="aspect-square overflow-hidden group shadow-xl">
                    <motion.img whileHover={{ scale: 1.05 }} transition={{ duration: 1.5 }} src={page5b} alt="Tea by the hills" className="w-full h-full object-cover" loading="lazy" />
                  </div>
                </div>
                <div className="flex flex-col gap-4 md:gap-8">
                  <div className="aspect-square overflow-hidden group shadow-xl">
                    <motion.img whileHover={{ scale: 1.05 }} transition={{ duration: 1.5 }} src={cycleWonder} alt="Cycling" className="w-full h-full object-cover" loading="lazy" />
                  </div>
                  <div className="aspect-[3/4] overflow-hidden group shadow-xl">
                    <motion.img whileHover={{ scale: 1.05 }} transition={{ duration: 1.5 }} src={page5cWonder} alt="Stargazing" className="w-full h-full object-cover" loading="lazy" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Chapter 5: Dining in Nature */}
      <section className="relative w-full h-[100vh] min-h-[800px] overflow-hidden">
        <div className="absolute inset-0 w-full h-full z-0">
          <motion.img 
            initial={{ scale: 1.1 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2.5, ease: [0.16, 1, 0.3, 1] }}
            src={page3} 
            alt="Dining" 
            className="w-full h-full object-cover opacity-60"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-[#0B120C]/50 mix-blend-multiply"></div>
          <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-[#0B120C] to-transparent"></div>
          <div className="absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-[#101912] to-transparent"></div>
        </div>

        <div className="relative z-10 h-full flex flex-col justify-center items-center max-w-[1000px] mx-auto px-6 md:px-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center"
          >
            <p className="text-[10px] tracking-[0.3em] uppercase font-medium text-[#9C8A71] mb-8">Chapter 5</p>
            <h2 className="font-heading text-6xl md:text-7xl lg:text-[7rem] mb-12 leading-[1.05] tracking-tight text-[#F3E9DC]">
              Foraged from <br/><span className="font-serif italic font-light text-[#9C8A71]">the forest.</span>
            </h2>
            <p className="text-[16px] md:text-[18px] leading-[2] font-light text-[#E4E0D9] opacity-90 max-w-2xl mb-12">
              Dining at GreenSoul is an unhurried ritual. Every dish tells the story of the Malnad region, honoring ancient foraging traditions and local farming practices under the open sky.
            </p>
            <Link to="/dining" className="group flex items-center gap-4 text-[10px] tracking-[0.2em] uppercase font-medium text-[#F3E9DC] transition-all">
              <span className="pb-1 border-b border-[#9C8A71]/30 group-hover:border-[#9C8A71] transition-colors">Culinary Journey</span>
              <ArrowRight size={14} className="text-[#9C8A71] group-hover:translate-x-2 transition-transform duration-500" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Chapter 6: Architecture & Earth */}
      <section className="py-32 md:py-48 px-6 md:px-16 lg:px-[120px] max-w-[1600px] mx-auto bg-[#0B120C]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-0 items-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 lg:pr-16"
          >
            <div className="aspect-[4/3] lg:aspect-[16/10] overflow-hidden group shadow-2xl">
              <motion.img 
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                src={page4} 
                alt="Earth Architecture" 
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 lg:pl-16"
          >
            <p className="text-[10px] tracking-[0.3em] uppercase font-medium text-[#9C8A71] mb-8 flex items-center gap-4">
              <span className="w-8 h-[1px] bg-[#9C8A71]"></span>
              Chapter 6
            </p>
            <h2 className="font-heading text-5xl md:text-6xl lg:text-7xl mb-10 leading-[1] tracking-tight text-[#F3E9DC]">
              Built to <br/><span className="font-serif italic font-light text-[#9C8A71]">disappear.</span>
            </h2>
            <p className="text-[15px] leading-[2] font-light text-[#A3A19B] mb-12">
              Our architecture is a homage to the earth. Crafted from rammed earth, reclaimed timber, and natural stone, the spaces breathe with the seasons and seamlessly blend into the landscape. We bend to the forest; the forest does not bend to us.
            </p>
            <Link to="/architecture" className="group flex items-center gap-4 text-[10px] tracking-[0.2em] uppercase font-medium text-[#F3E9DC] transition-all w-fit">
              <span className="pb-1 border-b border-[#9C8A71]/30 group-hover:border-[#9C8A71] transition-colors">The Architecture</span>
              <ArrowRight size={14} className="text-[#9C8A71] group-hover:translate-x-2 transition-transform duration-500" />
            </Link>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
