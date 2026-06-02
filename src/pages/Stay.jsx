import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mountain, Leaf, Coffee, ChevronDown } from 'lucide-react';
import { page3, page4b, page5cWonder, newImage } from '../greenhousefiles';

export default function Stay() {
  return (
    <div id="stay" className="w-full bg-[#E9E8E1]">
      {/* STAY PAGE HERO SECTION */}
      <section className="relative min-h-[100vh] w-full flex items-center bg-[#0B120C] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={page3}
            alt="Stay Landscape"
            className="absolute inset-0 w-full h-full object-cover object-bottom"
          />
          {/* Gradients for text legibility and blending */}
          <div className="absolute inset-0 bg-black/20 z-0"></div>
          <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-black/60 to-transparent z-0"></div>
          <div className="absolute inset-y-0 left-0 w-full md:w-2/3 lg:w-1/2 bg-gradient-to-r from-[#0B120C]/90 via-[#0B120C]/50 to-transparent z-0"></div>
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/40 to-transparent z-[50]"></div>
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
              Discover<br/>
              The Stay
            </h1>

            <div className="w-12 h-[1px] bg-[#A3A19B]/40 mb-8 mx-auto md:mx-0"></div>
            
            <p className="text-[10px] tracking-[0.3em] uppercase font-medium text-[#A3A19B] mb-6">
              Three distinct ways to experience GreenSoul
            </p>
            
            <p className="text-[15px] leading-[2] font-light text-[#E4E0D9] max-w-md mb-12">
              Each dwelling has been consciously positioned within the shifting moods of mist, monsoon, forest, and valley — where silence, changing light, and the rhythms of the Western Ghats become part of everyday living.
            </p>

            <button onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })} className="inline-flex items-center gap-4 px-8 py-4 border border-[#A3A19B]/40 text-[10px] tracking-[0.2em] uppercase font-medium text-[#F3E9DC] hover:bg-[#F3E9DC] hover:text-[#0B120C] transition-all duration-500 w-fit group cursor-pointer">
              Explore The Dwellings
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center text-[#F3E9DC] cursor-pointer z-[60] animate-bounce-slow" onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}>
          <span className="text-[10px] tracking-[0.3em] uppercase font-medium mb-3 opacity-90 drop-shadow-md">Scroll to explore</span>
          <ChevronDown size={20} strokeWidth={1.5} className="opacity-90 drop-shadow-md" />
        </div>
      </section>

      {/* Section Title Gap */}
      <div className="w-full pt-32 pb-20 md:pt-48 md:pb-32 flex flex-col items-center justify-center text-center px-6 relative z-10 bg-[#E9E8E1]">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.8 }}
          className="text-[10px] md:text-[12px] tracking-[0.35em] font-medium uppercase mb-6 text-[#5a5a52] opacity-80"
        >
          The Sanctuaries
        </motion.p>
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="font-heading text-[3.5rem] md:text-[5rem] lg:text-[6rem] text-[#2c312a] font-normal leading-[1.1] tracking-[-0.02em]"
        >
          Valley View
        </motion.h2>
        <motion.div 
          initial={{ height: 0 }}
          whileInView={{ height: 100 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 1.2, delay: 0.4 }}
          className="w-[1px] bg-[#2c312a]/20 mt-16"
        ></motion.div>
      </div>

      {/* Mist Valley Cottages Hero Section */}
      <section className="relative min-h-[100vh] w-full flex items-center overflow-hidden pt-12 md:pt-0">
        {/* Background Image - Right aligned */}
        <div className="absolute inset-0 right-0 w-full md:w-[70%] lg:w-[65%] ml-auto z-0">
          <img
            src="/images/mist_valley_opt.jpg"
            alt="Mist Valley Cottage Interior"
            className="w-full h-full object-cover object-[80%_center] md:object-right"
            loading="lazy"
            decoding="async"
          />
        </div>

        {/* Mobile Gradient Overlay (Extended for text readability) */}
        <div 
          className="absolute inset-0 z-[5] w-full pointer-events-none md:hidden"
          style={{ background: 'linear-gradient(to right, #E9E8E1 0%, #E9E8E1 45%, rgba(233, 232, 225, 0.85) 80%, rgba(233, 232, 225, 0) 100%)' }}
        ></div>
        
        {/* Desktop Gradient Overlay */}
        <div className="absolute inset-0 z-[5] w-full bg-gradient-to-r from-[#E9E8E1] from-[35%] lg:from-[40%] to-[#E9E8E1]/0 to-[60%] lg:to-[55%] hidden md:block"></div>

        {/* Content */}
        <div className="relative z-10 px-8 md:px-16 lg:px-[120px] w-full mx-auto flex flex-col justify-center min-h-[100vh] pt-[15vh] pb-24">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="max-w-[34rem] text-[#2c312a]"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-8 h-[1px] bg-[#5a5a52]/40"></div>
              <p className="text-[11px] tracking-[0.2em] font-medium uppercase text-[#5a5a52]">
                Mist Valley Cottages
              </p>
            </div>

            <h2 className="font-heading text-[3.2rem] md:text-[4.2rem] leading-[1.1] mb-8 font-normal text-[#2c312a]">
              Earth-built dwellings<br className="hidden md:block" /> overlooking the shifting<br className="hidden md:block" /> clouds of Murkan Gudda.
            </h2>

            <p className="font-heading text-[1.15rem] leading-[1.8] mb-12 opacity-90 max-w-[30rem]">
              Built using handmade adobe blocks and dry-stacked granite stone, the Mist Valley Cottages sit quietly along the rainforest edge — where monsoon clouds drift through open windows, warm light settles against earthen walls, and the silence of the Western Ghats becomes part of everyday living.
            </p>

            <button className="group border border-[#2c312a]/30 px-7 py-3.5 text-[10px] tracking-[0.15em] font-medium uppercase hover:bg-[#2c312a] hover:text-[#E9E8E1] transition-all duration-500 flex items-center gap-4 w-fit relative overflow-hidden">
              <span className="relative z-10 flex items-center gap-4">
                DISCOVER THE VALLEY COTTAGES
                <ArrowRight size={14} strokeWidth={1} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
          </motion.div>
        </div>
      </section>

      {/* Mist Valley Cottages Features Section */}
      <section className="w-full flex flex-col md:flex-row min-h-[60vh]">
        {/* Left Side: Aerial Image */}
        <div className="w-full md:w-[45%] lg:w-[48%] h-[50vh] md:h-auto overflow-hidden">
          <img
            src="/images/rainforest_view_1779811407333.png"
            alt="Aerial view of Mist Valley Cottages"
            className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-[2s] ease-in-out"
          />
        </div>

        {/* Right Side: Features List */}
        <div className="w-full md:w-[55%] lg:w-[52%] bg-[#ECEADF] p-12 md:p-20 lg:p-28 flex flex-col justify-center relative overflow-hidden">

          {/* Detailed background leaf SVG */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-[0.25] pointer-events-none w-[70%] md:w-[55%] lg:w-[45%] h-[80%] max-h-[600px]">
            <svg viewBox="0 0 300 500" className="w-full h-full text-[#6b6a5d]" fill="none" stroke="currentColor" strokeWidth="0.6" strokeLinecap="round" strokeLinejoin="round">
              <path d="M 50 480 C 120 480 180 350 220 200 C 240 120 260 50 280 20" />
              {/* Bottom right leaf */}
              <path d="M 120 420 C 160 450 220 440 260 380 C 200 390 160 380 120 420" />
              <path d="M 120 420 C 160 415 210 405 260 380" />
              {/* Bottom left leaf */}
              <path d="M 140 370 C 110 340 70 340 40 370 C 70 390 110 390 140 370" />
              <path d="M 140 370 C 110 365 80 365 40 370" />
              {/* Mid right leaf */}
              <path d="M 170 300 C 220 310 270 280 290 230 C 240 250 200 260 170 300" />
              <path d="M 170 300 C 210 285 250 265 290 230" />
              {/* Mid left leaf */}
              <path d="M 190 250 C 150 200 110 180 80 190 C 120 220 150 240 190 250" />
              <path d="M 190 250 C 155 225 120 205 80 190" />
              {/* Top right leaf */}
              <path d="M 210 160 C 260 160 290 120 300 80 C 260 100 230 120 210 160" />
              <path d="M 210 160 C 240 135 270 110 300 80" />
              {/* Top left leaf */}
              <path d="M 230 110 C 200 70 180 40 160 30 C 180 60 200 90 230 110" />
              <path d="M 230 110 C 205 85 180 60 160 30" />
            </svg>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.8 }}
            className="max-w-[420px] mx-auto lg:ml-[12%] relative z-10 flex flex-col"
          >

            {/* Item 1 */}
            <div className="flex items-start gap-7 group">
              <div className="text-[#4a4a40] mt-1 shrink-0 w-8 flex justify-center group-hover:-translate-y-1 transition-transform duration-500">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="7" cy="5" r="1.5" />
                  <path d="M1 15 L 7 8 L 13 15" />
                  <path d="M9 13 L 14 7 L 21 15" />
                  <path d="M2 17 Q 4 16, 6 17 T 10 17 T 14 17 T 18 17 T 22 17" />
                  <path d="M4 19 Q 6 18, 8 19 T 12 19 T 16 19 T 20 19" />
                </svg>
              </div>
              <div className="flex-1 border-b border-[#4a4a40]/20 pb-7 mb-7">
                <h4 className="font-heading text-[13px] tracking-[0.15em] font-medium uppercase text-[#4a4a40] mb-2.5">Hills & Horizons</h4>
                <p className="font-heading text-[#4a4a40]/85 leading-[1.6] text-[1.05rem]">
                  Unfolding views of rolling hills,<br className="hidden md:block" /> rainforest edges, and endless skies.
                </p>
              </div>
            </div>

            {/* Item 2 */}
            <div className="flex items-start gap-7 group">
              <div className="text-[#4a4a40] mt-1 shrink-0 w-8 flex justify-center group-hover:-translate-y-1 transition-transform duration-500">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2 Q 19 9 19 15 A 7 7 0 0 1 5 15 Q 5 9 12 2 Z" />
                  <path d="M12 22 L 12 7" />
                  <path d="M12 17 L 15.5 13.5" />
                  <path d="M12 17 L 8.5 13.5" />
                  <path d="M12 12 L 15 9" />
                  <path d="M12 12 L 9 9" />
                </svg>
              </div>
              <div className="flex-1 border-b border-[#4a4a40]/20 pb-7 mb-7">
                <h4 className="font-heading text-[13px] tracking-[0.15em] font-medium uppercase text-[#4a4a40] mb-2.5">Crafted with Earth</h4>
                <p className="font-heading text-[#4a4a40]/85 leading-[1.6] text-[1.05rem]">
                  Handmade adobe, natural stone,<br className="hidden md:block" /> and local craftsmanship that<br className="hidden md:block" /> age beautifully with nature.
                </p>
              </div>
            </div>

            {/* Item 3 */}
            <div className="flex items-start gap-7 group">
              <div className="text-[#4a4a40] mt-1 shrink-0 w-8 flex justify-center group-hover:-translate-y-1 transition-transform duration-500">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 10 L 4 13 C 4 17, 16 17, 16 13 L 16 10 Z" />
                  <path d="M16 11 C 19 11, 19 14, 16 14" />
                  <path d="M2 17 L 18 17 L 16 19 L 4 19 Z" />
                  <path d="M7 4 Q 8 5.5, 7 7" />
                  <path d="M10 3 Q 11 4.5, 10 6" />
                  <path d="M13 4 Q 14 5.5, 13 7" />
                </svg>
              </div>
              <div className="flex-1">
                <h4 className="font-heading text-[13px] tracking-[0.15em] font-medium uppercase text-[#4a4a40] mb-2.5">Slow by Nature</h4>
                <p className="font-heading text-[#4a4a40]/85 leading-[1.6] text-[1.05rem]">
                  Mornings wrapped in mist, evenings<br className="hidden md:block" /> stitched with birdsong and rain.
                </p>
              </div>
            </div>

          </motion.div>
        </div>
      </section>

      {/* Mist Valley Cottages Details Section */}
      <section className="w-full flex flex-col md:flex-row-reverse items-stretch min-h-[40vh] md:min-h-[45vh] lg:min-h-[50vh] bg-[#E9E8E1]">
        {/* Right Image */}
        <div className="w-full md:w-[50%] lg:w-[42%] h-[50vh] md:h-auto relative">
          <img
            src={page4b}
            alt="Mist Valley Cottage Details"
            className="absolute inset-0 w-full h-full object-cover object-bottom"
          />
        </div>

        {/* Content - Left aligned */}
        <div className="w-full md:w-[50%] lg:flex-1 flex justify-center md:justify-start items-center px-8 py-16 md:py-20 md:px-16 lg:pl-[120px] xl:pl-[160px]">
          <div className="w-full md:max-w-[20rem] flex items-center pr-6 md:pr-10 border-r border-[#2c312a]/30 text-right">
            <p className="font-heading text-[1.1rem] md:text-[1.15rem] leading-[1.8] text-[#4a4a40] opacity-90 w-full">
              Seamlessly blended with the landscape,<br className="hidden md:block" /> where every window frames<br className="hidden md:block" /> the whispering wild.
            </p>
          </div>
        </div>
      </section>

      {/* Section Title Gap */}
      <div className="w-full pt-32 pb-20 md:pt-48 md:pb-32 flex flex-col items-center justify-center text-center px-6 relative z-10 bg-[#E9E8E1]">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.8 }}
          className="text-[10px] md:text-[12px] tracking-[0.35em] font-medium uppercase mb-6 text-[#5a5a52] opacity-80"
        >
          The Sanctuaries
        </motion.p>
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="font-heading text-[3.5rem] md:text-[5rem] lg:text-[6rem] text-[#2c312a] font-normal leading-[1.1] tracking-[-0.02em]"
        >
          Earth Heritage
        </motion.h2>
        <motion.div 
          initial={{ height: 0 }}
          whileInView={{ height: 100 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 1.2, delay: 0.4 }}
          className="w-[1px] bg-[#2c312a]/20 mt-16"
        ></motion.div>
      </div>

      {/* Earth Heritage Suites Hero Section */}
      <section className="relative min-h-[100vh] w-full flex items-center overflow-hidden pt-12 md:pt-0">
        {/* Background Image - Right aligned */}
        <div className="absolute inset-0 right-0 w-full md:w-[85%] lg:w-[80%] ml-auto z-0">
          <img
            src="/images/earth_heritage_opt.jpg"
            alt="Earth Heritage Suites"
            className="w-full h-full object-cover object-right md:object-[70%_center]"
            loading="lazy"
            decoding="async"
          />
        </div>

        {/* Mobile Gradient Overlay (Extended for text readability) */}
        <div 
          className="absolute inset-0 z-[5] w-full pointer-events-none md:hidden"
          style={{ background: 'linear-gradient(to right, #E9E8E1 0%, #E9E8E1 45%, rgba(233, 232, 225, 0.85) 80%, rgba(233, 232, 225, 0) 100%)' }}
        ></div>
        
        {/* Desktop Gradient Overlay */}
        <div className="absolute inset-0 z-[5] w-full bg-gradient-to-r from-[#E9E8E1] from-[30%] lg:from-[32%] to-[#E9E8E1]/0 to-[48%] lg:to-[42%] hidden md:block"></div>

        {/* Content */}
        <div className="relative z-10 px-8 md:px-16 lg:px-[120px] w-full mx-auto flex flex-col justify-center min-h-[100vh] pt-[15vh] pb-16">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="max-w-[34rem] text-[#2c312a]"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-8 h-[1px] bg-[#5a5a52]/40"></div>
              <p className="text-[10px] md:text-[11px] tracking-[0.2em] font-medium uppercase text-[#5a5a52]">
                Earth Heritage Suites
              </p>
            </div>

            <h2 className="font-heading text-[3.2rem] md:text-[4rem] lg:text-[4.8rem] leading-[1.05] mb-8 font-normal text-[#2c312a]">
              Rooted in earth.<br />Designed for<br />togetherness.
            </h2>

            <div className="w-full max-w-[24rem] md:max-w-[28rem] h-[1px] bg-[#2c312a]/20 mb-8 md:mb-10"></div>

            <p className="font-heading text-[1.05rem] md:text-[1.15rem] leading-[1.8] mb-10 md:mb-12 opacity-85 max-w-[26rem] md:max-w-[28rem]">
              Built using handmade adobe walls, mud-plastered interiors, and wide shaded verandahs, the Earth Heritage Suites invite slow mornings, shared conversations, and quiet living beside the rainforest.
            </p>

            <button className="group text-[10px] md:text-[11px] tracking-[0.15em] font-medium uppercase hover:text-[#5a5a52] transition-colors flex items-center gap-4 pb-2 border-b border-[#2c312a]/30 w-fit">
              EXPLORE THE HERITAGE SUITES
              <ArrowRight size={14} strokeWidth={1} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Earth Heritage Suites Details Section */}
      <section className="w-full flex flex-col md:flex-row items-stretch min-h-[40vh] md:min-h-[45vh] lg:min-h-[50vh] bg-[#E9E8E1]">
        {/* Left Image */}
        <div className="w-full md:w-[50%] lg:w-[42%] h-[50vh] md:h-auto relative">
          <img
            src="/images/EarthHeritageiamge2.png"
            alt="Earth Heritage Details"
            className="absolute inset-0 w-full h-full object-cover object-right md:object-[60%_center]"
          />
        </div>

        {/* Content - Right aligned */}
        <div className="w-full md:w-[50%] lg:flex-1 flex justify-center md:justify-end items-center px-8 py-16 md:py-20 md:px-16 lg:pr-[120px] xl:pr-[160px]">
          <div className="w-full md:max-w-[20rem] flex items-center pl-6 md:pl-10 border-l border-[#2c312a]/30">
            <p className="font-heading text-[1.1rem] md:text-[1.15rem] leading-[1.8] text-[#4a4a40] opacity-90">
              Every detail carries the texture<br className="hidden md:block" /> of tradition and the warmth<br className="hidden md:block" /> of human hands.
            </p>
          </div>
        </div>
      </section>

      {/* Section Title Gap */}
      <div className="w-full pt-32 pb-20 md:pt-48 md:pb-32 flex flex-col items-center justify-center text-center px-6 relative z-10 bg-[#E9E8E1]">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.8 }}
          className="text-[10px] md:text-[12px] tracking-[0.35em] font-medium uppercase mb-6 text-[#5a5a52] opacity-80"
        >
          The Sanctuaries
        </motion.p>
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="font-heading text-[3.5rem] md:text-[5rem] lg:text-[6rem] text-[#2c312a] font-normal leading-[1.1] tracking-[-0.02em]"
        >
          Heritage Family Rooms
        </motion.h2>
        <motion.div 
          initial={{ height: 0 }}
          whileInView={{ height: 100 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 1.2, delay: 0.4 }}
          className="w-[1px] bg-[#2c312a]/20 mt-16"
        ></motion.div>
      </div>

      {/* Heritage Family Rooms Hero Section */}
      <section className="w-full flex flex-col-reverse lg:flex-row min-h-[90vh] bg-[#E9E8E1] border-b border-[#2c312a]/10">
        {/* Content Area */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center px-8 md:px-16 lg:px-[100px] xl:px-[120px] py-20 lg:py-0 relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="max-w-[34rem] text-[#2c312a]"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-8 h-[1px] bg-[#5a5a52]/40"></div>
              <p className="text-[10px] md:text-[11px] tracking-[0.2em] font-medium uppercase text-[#5a5a52]">
                Heritage Family Rooms
              </p>
            </div>

            <h2 className="font-heading text-[3.2rem] md:text-[4rem] lg:text-[4.5rem] xl:text-[5rem] leading-[1.05] mb-8 font-normal text-[#2c312a]">
              Crafted for<br />connection<br />and comfort.
            </h2>

            <div className="w-full max-w-[24rem] h-[1px] bg-[#2c312a]/20 mb-8 md:mb-10"></div>

            <p className="font-heading text-[1.05rem] md:text-[1.15rem] leading-[1.8] mb-10 md:mb-12 opacity-85 max-w-[26rem]">
              Spacious and grounded in tradition, the Heritage Family Rooms offer a warm, communal space designed for families to unwind, reconnect, and experience the stillness of the Western Ghats together.
            </p>

            <button className="group text-[10px] md:text-[11px] tracking-[0.15em] font-medium uppercase hover:text-[#5a5a52] transition-colors flex items-center gap-4 pb-2 border-b border-[#2c312a]/30 w-fit">
              EXPLORE THE FAMILY ROOMS
              <ArrowRight size={14} strokeWidth={1} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>

        {/* Image Area */}
        <div className="w-full lg:w-1/2 h-[60vh] lg:h-auto relative">
          <img
            src="/images/family_rooms_opt.jpg"
            alt="Heritage Family Rooms"
            className="absolute inset-0 w-full h-full object-cover object-[center_center]"
            loading="lazy"
            decoding="async"
          />
        </div>
      </section>

      {/* Heritage Family Rooms Details Section */}
      <section className="w-full flex flex-col md:flex-row items-stretch min-h-[40vh] md:min-h-[45vh] lg:min-h-[50vh] bg-[#E9E8E1]">
        {/* Left Image */}
        <div className="w-full md:w-[50%] lg:w-[42%] h-[50vh] md:h-auto relative">
          <img
            src={page5cWonder}
            alt="Heritage Family Rooms Night View"
            className="absolute inset-0 w-full h-full object-cover object-[center_center]"
          />
        </div>

        {/* Content - Right aligned */}
        <div className="w-full md:w-[50%] lg:flex-1 flex justify-center md:justify-end items-center px-8 py-16 md:py-20 md:px-16 lg:pr-[120px] xl:pr-[160px]">
          <div className="w-full md:max-w-[20rem] flex flex-col justify-center pl-6 md:pl-10 border-l border-[#2c312a]/30">
            <h3 className="font-heading text-[1.5rem] md:text-[1.8rem] text-[#2c312a] mb-4">Night View</h3>
            <p className="font-heading text-[1.1rem] md:text-[1.15rem] leading-[1.8] text-[#4a4a40] opacity-90">
              As dusk falls, the family room<br className="hidden md:block" /> transforms into a warm, inviting<br className="hidden md:block" /> sanctuary beneath the stars.
            </p>
          </div>
        </div>
      </section>

      {/* Section Title Gap */}
      <div className="w-full pt-32 pb-20 md:pt-48 md:pb-32 flex flex-col items-center justify-center text-center px-6 relative z-10 bg-[#E9E8E1]">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.8 }}
          className="text-[10px] md:text-[12px] tracking-[0.35em] font-medium uppercase mb-6 text-[#5a5a52] opacity-80"
        >
          The Sanctuaries
        </motion.p>
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="font-heading text-[3.5rem] md:text-[5rem] lg:text-[6rem] text-[#2c312a] font-normal leading-[1.1] tracking-[-0.02em]"
        >
          Malanad House
        </motion.h2>
        <motion.div 
          initial={{ height: 0 }}
          whileInView={{ height: 100 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 1.2, delay: 0.4 }}
          className="w-[1px] bg-[#2c312a]/20 mt-16"
        ></motion.div>
      </div>

      {/* The Malnad House Section */}
      <section className="relative min-h-[100vh] w-full flex items-center overflow-hidden pt-12 md:pt-0 bg-[#E9E8E1]">
        {/* Background Image - Right aligned */}
        <div className="absolute inset-0 right-0 w-full md:w-[85%] lg:w-[80%] ml-auto z-0 pointer-events-none">
          <img
            src={newImage}
            alt="The Malnad House"
            className="w-full h-full object-cover object-right md:object-[60%_center]"
          />
        </div>

        {/* Mobile Gradient Overlay (Extended for text readability) */}
        <div 
          className="absolute inset-0 z-[5] w-full pointer-events-none md:hidden"
          style={{ background: 'linear-gradient(to right, #E9E8E1 0%, #E9E8E1 45%, rgba(233, 232, 225, 0.85) 80%, rgba(233, 232, 225, 0) 100%)' }}
        ></div>
        
        {/* Desktop Gradient Overlay */}
        <div className="absolute inset-0 z-[5] w-full bg-gradient-to-r from-[#E9E8E1] from-[30%] lg:from-[35%] to-[#E9E8E1]/0 to-[60%] lg:to-[55%] hidden md:block"></div>

        {/* Content */}
        <div className="relative z-10 px-8 md:px-16 lg:px-[120px] w-full mx-auto flex flex-col justify-center min-h-[100vh] pt-[15vh] pb-16">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="max-w-[34rem] text-[#2c312a]"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-8 h-[1px] bg-[#5a5a52]/40"></div>
              <p className="text-[10px] md:text-[11px] tracking-[0.2em] font-medium uppercase text-[#5a5a52]">
                The Malanad House
              </p>
            </div>

            <h2 className="font-heading text-[3.2rem] md:text-[4rem] lg:text-[4.5rem] leading-[1.1] mb-8 font-normal text-[#2c312a]">
              Gather beneath<br />rain, forest, and<br />slow evenings.
            </h2>

            <div className="w-12 h-[1px] bg-[#2c312a]/30 mb-8"></div>

            <p className="font-heading text-[1.05rem] md:text-[1.15rem] leading-[1.8] mb-10 md:mb-12 opacity-85 max-w-[26rem] md:max-w-[28rem]">
              Tucked quietly beside the rainforest, the Malnad House was designed for shared living — where long verandahs, earthen walls, drifting mist, and open landscapes invite families, friends, and communities to slow down together.
            </p>

            <button className="group border border-[#2c312a]/30 px-6 py-3.5 text-[10px] tracking-[0.15em] font-medium uppercase hover:bg-[#2c312a] hover:text-[#E9E8E1] transition-colors flex items-center gap-4 w-fit">
              DISCOVER THE MALNAD HOUSE
              <ArrowRight size={14} strokeWidth={1} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* The Malnad House Details Section */}
      <section className="relative w-full flex flex-col md:flex-row items-center justify-between px-8 md:px-16 lg:px-[120px] xl:px-[160px] py-20 lg:py-28 bg-[#F5F4EF]">
        {/* Left Image (Verandah) */}
        <div className="w-full md:w-[38%] lg:w-[35%] mb-12 md:mb-0 shrink-0 overflow-hidden relative" style={{ aspectRatio: '16/9' }}>
          <img
            src="/images/malnadsecondimage.png"
            alt="Verandah view"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>

        {/* Middle Text */}
        <div className="w-full md:w-[30%] lg:w-[28%] flex items-center justify-center md:justify-start mb-12 md:mb-0 shrink-0 md:ml-6 lg:ml-12 xl:ml-16">
          <div className="w-[1px] h-[130px] bg-[#8c8a7c] opacity-50 mr-8 lg:mr-10"></div>
          <div className="flex flex-col gap-3.5">
            <p className="font-heading text-[1.1rem] md:text-[1.2rem] text-[#3a3a32] opacity-90 leading-tight">Shared stories.</p>
            <p className="font-heading text-[1.1rem] md:text-[1.2rem] text-[#3a3a32] opacity-90 leading-tight">Warm tea.</p>
            <p className="font-heading text-[1.1rem] md:text-[1.2rem] text-[#3a3a32] opacity-90 leading-tight">Laughter that lingers.</p>
            <p className="font-heading text-[1.1rem] md:text-[1.2rem] text-[#3a3a32] opacity-90 leading-tight">Memories that stay forever.</p>
          </div>
        </div>

        {/* Right Leaf Illustration */}
        <div className="w-full md:w-[25%] lg:w-[25%] flex justify-end shrink-0 md:pr-4 lg:pr-8">
          <svg viewBox="0 0 500 300" className="w-[18rem] md:w-[22rem] lg:w-[26rem] text-[#8c8a7c] opacity-[0.45]" fill="none" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round">
            {/* Main sweeping stem */}
            <path d="M 100 260 C 200 290 300 230 380 140 C 420 95 450 50 470 20" />

            {/* Bottom-left leaf */}
            <path d="M 170 265 C 130 220 80 220 60 240 C 80 260 130 280 170 265" />
            <path d="M 170 265 C 140 245 100 235 60 240" />
            <path d="M 130 250 C 120 240 110 235 100 235" />
            <path d="M 115 255 C 105 250 95 245 85 245" />

            {/* Bottom-right leaf */}
            <path d="M 230 260 C 280 300 340 290 360 260 C 330 240 280 240 230 260" />
            <path d="M 230 260 C 280 270 320 270 360 260" />
            <path d="M 270 265 C 280 275 290 280 300 280" />
            <path d="M 290 267 C 300 275 310 275 320 275" />

            {/* Mid-left leaf */}
            <path d="M 300 205 C 260 140 230 110 210 110 C 230 140 260 180 300 205" />
            <path d="M 300 205 C 265 165 235 135 210 110" />
            <path d="M 265 170 C 250 155 240 150 230 150" />
            <path d="M 245 185 C 235 175 225 170 215 170" />

            {/* Mid-right leaf */}
            <path d="M 330 190 C 390 210 440 200 460 170 C 430 150 380 160 330 190" />
            <path d="M 330 190 C 380 195 420 185 460 170" />
            <path d="M 370 193 C 385 200 400 200 415 195" />
            <path d="M 390 190 C 405 195 415 190 425 185" />

            {/* Upper-left leaf */}
            <path d="M 390 130 C 370 70 360 40 370 25 C 390 45 400 80 390 130" />
            <path d="M 390 130 C 380 90 375 60 370 25" />
            <path d="M 383 95 C 375 80 370 75 365 75" />

            {/* Upper-right leaf */}
            <path d="M 430 85 C 470 80 500 50 490 25 C 460 35 440 60 430 85" />
            <path d="M 430 85 C 460 70 480 50 490 25" />
            <path d="M 455 70 C 470 65 480 55 485 50" />
          </svg>
        </div>
      </section>
    </div>
  );
}
