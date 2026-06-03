import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { page3 } from '../greenhousefiles';
import { Link } from 'react-router-dom';

export default function Stay() {
  return (
    <div id="stay" className="w-full bg-[#E9E8E1]">
      {/* STAY PAGE HERO SECTION */}
      <section className="relative min-h-[100vh] md:min-h-[125vh] lg:min-h-[140vh] w-full flex items-center bg-[#0B120C] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={page3}
            alt="Stay Landscape"
            className="absolute inset-0 w-full h-full object-cover object-[center_60%]"
          />
          {/* Gradients for text legibility and blending */}
          {/* Mobile Mist */}
          <div 
            className="absolute inset-0 z-0 w-full md:hidden"
            style={{ background: 'linear-gradient(to bottom, rgba(233, 232, 225, 0.95) 0%, rgba(233, 232, 225, 0.9) 85%, rgba(233, 232, 225, 0) 100%)' }}
          ></div>
          
          {/* Desktop Mist */}
          <div 
            className="absolute inset-y-0 left-0 w-full md:w-[60%] lg:w-[50%] xl:w-[45%] z-0 hidden md:block"
            style={{ background: 'linear-gradient(to right, rgba(233, 232, 225, 0.9) 0%, rgba(233, 232, 225, 0.75) 40%, rgba(233, 232, 225, 0) 100%)' }}
          ></div>
          
          {/* Top Gradient for Navbar */}
          <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#E9E8E1] via-[#E9E8E1]/80 to-transparent z-0"></div>
        </div>
        
        {/* Hero Content */}
        <div className="relative z-10 w-full px-4 md:px-12 pt-32 md:pt-0 pb-12 flex flex-col items-center md:items-start text-center md:text-left">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="max-w-2xl flex flex-col items-center md:items-start"
          >
            <p className="text-[10px] md:text-[11px] tracking-[0.25em] uppercase font-medium text-[#5a5a52] mb-6">
              Rooted in the wild. Made for slow living.
            </p>
            
            <h1 className="font-heading text-[4rem] sm:text-[4.5rem] md:text-7xl lg:text-[5.5rem] leading-[1.05] tracking-tight text-[#2c312a] mb-8 font-normal">
              Discover<br/>
              The Stay
            </h1>

            <div className="w-12 h-[1px] bg-[#2c312a]/30 mb-8 mx-auto md:mx-0"></div>
            
            <p className="text-[10px] md:text-[11px] tracking-[0.25em] uppercase font-medium text-[#5a5a52] mb-6">
              Three distinct ways to experience GreenSoul
            </p>
            
            <p className="font-body text-[15px] md:text-[1.05rem] leading-[1.9] font-light text-[#4a4a40] max-w-md mb-12">
              Each dwelling has been consciously positioned within the shifting moods of mist, monsoon, forest, and valley — where silence, changing light, and the rhythms of the Western Ghats become part of everyday living.
            </p>

            <Link to="/mist-valley-cottage" className="inline-flex items-center gap-4 px-8 py-4 border border-[#2c312a]/30 text-[10px] md:text-[11px] tracking-[0.2em] uppercase font-medium text-[#2c312a] hover:bg-[#2c312a] hover:text-[#E9E8E1] transition-all duration-500 w-fit group cursor-pointer">
              Explore The Dwellings
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
