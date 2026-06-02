import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import {
  eveningWalk,
  cycleWonder,
  trekWonder,
  eveningWalk2,
  trekCheckDam2,
  poolImage,
  page5d
} from '../greenhousefiles';

export default function Experiences() {
  
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div id="experiences" className="w-full bg-[#E9E8E1] min-h-screen text-[#2c312a] font-sans selection:bg-[#2c312a] selection:text-[#E9E8E1] overflow-x-hidden">
      
      {/* Hero Section */}
      <section className="relative min-h-[100vh] w-full flex items-center overflow-hidden pt-24 pb-16">
        
        {/* Background Image Container */}
        <div className="absolute inset-0 w-full z-0 pointer-events-none">
          <img
            src={eveningWalk}
            alt="Evening Walk at Greensoul"
            className="w-full h-full object-cover object-right"
            loading="lazy"
            decoding="async"
          />
        </div>
        
        {/* Mobile Gradient Overlay (Extended for text readability) */}
        <div 
          className="absolute inset-0 z-[5] w-full pointer-events-none md:hidden"
          style={{ background: 'linear-gradient(to right, #E9E8E1 0%, #E9E8E1 45%, rgba(233, 232, 225, 0.85) 75%, rgba(233, 232, 225, 0) 100%)' }}
        ></div>
        
        {/* Desktop Gradient Overlay (Exactly as requested) */}
        <div 
          className="absolute inset-0 z-[5] w-full pointer-events-none hidden md:block"
          style={{ background: 'linear-gradient(to right, #E9E8E1 0%, #E9E8E1 30%, rgba(233, 232, 225, 0) 45%)' }}
        ></div>

        {/* Content */}
        <div className="relative z-10 w-full px-8 md:px-16 lg:px-[120px] max-w-[1800px] mx-auto flex flex-col justify-center min-h-[70vh]">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="max-w-[34rem]"
          >
            <p className="text-[10px] tracking-[0.25em] font-medium uppercase text-[#5a5a52] mb-6">
              Life at Greensoul
            </p>

            <h1 className="font-heading text-[4rem] md:text-[5rem] lg:text-[5.8rem] leading-[1.05] mb-8 font-normal text-[#2c312a] tracking-tight">
              Live slowly.<br />Breathe deeper.
            </h1>

            <div className="w-12 h-[1px] bg-[#2c312a]/30 mb-8"></div>

            <p className="font-body text-[15px] md:text-[1.05rem] leading-[1.9] mb-12 text-[#4a4a40] font-light max-w-[26rem]">
              Days unfold with the rhythm of the rainforest &mdash; misty mornings, unhurried walks, quiet conversations and starlit skies.<br />This is life, in its natural form.
            </p>

            <button className="group text-[10px] md:text-[11px] tracking-[0.2em] font-medium uppercase text-[#5a5a52] hover:text-[#2c312a] transition-colors flex items-center gap-4 w-fit pb-1">
              DISCOVER LIFE AT GREENSOUL
              <ArrowRight size={14} strokeWidth={1} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Grid Section */}
      <section className="w-full px-8 md:px-16 lg:px-[120px] py-16 md:py-24 lg:py-32 bg-[#E9E8E1] max-w-[1800px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-10 items-center">
          
          {/* Image 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 1, delay: 0 }}
            className="w-full aspect-[4/5] lg:aspect-square overflow-hidden"
          >
            <img 
              src={cycleWonder} 
              alt="Cycling through the estate" 
              className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-[2s] ease-in-out"
              loading="lazy"
              decoding="async"
            />
          </motion.div>
          
          {/* Image 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 1, delay: 0.15 }}
            className="w-full aspect-[4/5] lg:aspect-square overflow-hidden"
          >
            <img 
              src={trekWonder} 
              alt="Trekking through the misty hills" 
              className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-[2s] ease-in-out"
              loading="lazy"
              decoding="async"
            />
          </motion.div>
          
          {/* Image 3 */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="w-full aspect-[4/5] lg:aspect-square overflow-hidden"
          >
            <img 
              src={eveningWalk2} 
              alt="Quiet forest paths" 
              className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-[2s] ease-in-out"
              loading="lazy"
              decoding="async"
            />
          </motion.div>
          
          {/* Text Block */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 1, delay: 0.45 }}
            className="w-full flex flex-col justify-center lg:pl-6 pt-10 lg:pt-0"
          >
            <div className="w-8 h-[1px] bg-[#2c312a]/30 mb-8"></div>
            
            <p className="font-heading italic text-[1.4rem] md:text-[1.6rem] lg:text-[1.8rem] text-[#4a4a40] leading-[1.6] mb-12">
              Moments here are unhurried.<br />
              Rooted in nature.<br />
              Remembered always.
            </p>
            
            <button 
              onClick={() => document.getElementById('explore-section')?.scrollIntoView({ behavior: 'smooth' })}
              className="group text-[10px] tracking-[0.2em] font-medium uppercase text-[#5a5a52] hover:text-[#2c312a] transition-colors flex items-center gap-4 w-fit pb-1"
            >
              EXPLORE EXPERIENCES
              <ArrowRight size={14} strokeWidth={1} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>

        </div>
      </section>

      {/* Experiences and Landscape Section */}
      <section id="explore-section" className="w-full py-24 md:py-32 px-8 md:px-16 lg:px-[120px] bg-[#141413] text-[#E4E0D9]">
        <div className="max-w-[1800px] mx-auto">
          
          <div className="flex flex-col items-center text-center mb-20 md:mb-32">
            <h2 className="font-heading text-5xl md:text-6xl lg:text-7xl leading-[1.1] tracking-tight mb-6">
              Experiences & <span className="font-serif italic text-[#9C8A71] font-light">Landscape</span>
            </h2>
            <div className="w-12 h-[1px] bg-[#9C8A71]/50 mb-8"></div>
            <p className="font-body text-[15px] leading-[2] font-light text-[#A3A19B] max-w-2xl">
              Immerse yourself in the raw beauty of the Western Ghats. From pristine check dams to lush plantation trails, every corner offers a new perspective.
            </p>
          </div>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            
            {/* Large Image 1 - Check Dam */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="lg:col-span-8 group cursor-pointer"
            >
              <div className="w-full aspect-[16/10] overflow-hidden mb-6">
                <img 
                  src={trekCheckDam2} 
                  alt="Trek to Check Dam" 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-[2s] ease-in-out"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <h3 className="font-heading text-3xl md:text-4xl text-[#E4E0D9] group-hover:text-[#9C8A71] transition-colors tracking-tight">
                Trek to Check Dam
              </h3>
            </motion.div>

            {/* Small Image 2 - Page 5 d */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
              className="lg:col-span-4 group cursor-pointer flex flex-col justify-end"
            >
              <div className="w-full aspect-[4/5] overflow-hidden mb-6">
                <img 
                  src={page5d} 
                  alt="Plantation Walk" 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-[2s] ease-in-out"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <h3 className="font-heading text-3xl md:text-4xl text-[#E4E0D9] group-hover:text-[#9C8A71] transition-colors tracking-tight">
                Plantation Trails
              </h3>
            </motion.div>

            {/* Full Width Image - Pool */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="lg:col-span-12 group cursor-pointer mt-8 lg:mt-12"
            >
              <div className="w-full aspect-[21/9] md:aspect-[2.5/1] overflow-hidden mb-6">
                <img 
                  src={poolImage} 
                  alt="Forest Pool" 
                  className="w-full h-full object-cover object-bottom transform group-hover:scale-105 transition-transform duration-[2s] ease-in-out"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <h3 className="font-heading text-3xl md:text-4xl text-[#E4E0D9] group-hover:text-[#9C8A71] transition-colors tracking-tight">
                The Forest Pool
              </h3>
            </motion.div>

          </div>

        </div>
      </section>

    </div>
  );
}
