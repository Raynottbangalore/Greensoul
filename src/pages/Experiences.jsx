import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function Experiences() {
  const [activeExp, setActiveExp] = useState(0);

  const experiences = [
    { 
      id: '01', 
      title: 'Monsoon mist', 
      desc: 'Watch the valley disappear and reappear as clouds roll through, enveloping the estate in a quiet, ethereal embrace.',
      image: '/images/hero_landscape.jpg'
    },
    { 
      id: '02', 
      title: 'Valley views', 
      desc: 'Endless horizons of untouched wilderness from your private verandah. A profound quietude, broken only by birdsong.',
      image: '/images/rainforest_view_1779811407333.png'
    },
    { 
      id: '03', 
      title: 'Earthen architecture', 
      desc: 'Living within walls crafted by hand from the very earth you stand on. A grounding experience that connects you to ancient traditions.',
      image: '/images/EarthHeritageiamge1.png'
    },
    { 
      id: '04', 
      title: 'Antique interiors', 
      desc: 'Curated heritage pieces that tell stories of a forgotten time. Every detail carries the texture of tradition.',
      image: '/images/antique_interiors_exp.png'
    },
    { 
      id: '05', 
      title: 'Forest silence', 
      desc: 'A profound quietude, broken only by birdsong and the wind. True luxury is the absence of noise.',
      image: '/images/forest_silence_exp.png'
    },
    { 
      id: '06', 
      title: 'Curated dining', 
      desc: 'Slow, meaningful meals prepared with local, seasonal ingredients, served overlooking the untouched rainforest canopy.',
      image: '/images/dining_pavilion_1779811496432.png'
    },
    { 
      id: '07', 
      title: 'Rainforest biodiversity', 
      desc: 'Discover the rich, vibrant ecosystems thriving right outside your door. A living, breathing sanctuary.',
      image: '/images/rainforest_biodiv_exp.png'
    },
    { 
      id: '08', 
      title: 'Slow living', 
      desc: 'Embrace an unhurried pace, letting nature dictate the rhythm of your day. Reconnect with what matters most.',
      image: '/images/slow_living_exp.png'
    }
  ];

  return (
    <section className="relative w-full min-h-screen bg-[#E9E8E1] text-[#2c312a] pt-32 lg:pt-0">
      
      {/* Content Container */}
      <div className="w-full max-w-[1500px] mx-auto px-8 md:px-16 lg:px-[60px] xl:px-[100px] flex flex-col lg:flex-row justify-between items-start relative z-10 pb-20 lg:pb-32 lg:pt-32">
        
        {/* Left Side: Titles List */}
        <div className="w-full lg:w-[52%] flex flex-col py-10 lg:py-10">
          <div>
            <p className="text-[10px] md:text-[12px] tracking-[0.4em] font-medium uppercase mb-16 lg:mb-20 text-[#5a5a52]">
              The Encounters
            </p>
          </div>
          
          <div className="flex flex-col gap-10 md:gap-14">
            {experiences.map((exp, index) => (
              <div 
                key={index}
                onMouseEnter={() => setActiveExp(index)}
                className="group cursor-pointer flex items-center gap-6 md:gap-10 w-fit relative"
              >
                <span className={`text-[10px] md:text-[11px] tracking-[0.2em] font-medium transition-all duration-500 ${activeExp === index ? 'text-[#2c312a]' : 'text-[#2c312a]/30'}`}>
                  {exp.id}
                </span>
                <h2 className={`font-heading text-3xl md:text-5xl lg:text-[3.2rem] xl:text-[3.8rem] font-normal transition-all duration-700 whitespace-nowrap ${activeExp === index ? 'text-[#2c312a] italic translate-x-4 md:translate-x-6' : 'text-[#2c312a]/30 hover:text-[#2c312a]/60'}`}>
                  {exp.title}
                </h2>
                
                {/* Active Indicator Line */}
                {activeExp === index && (
                  <motion.div 
                    layoutId="activeIndicator"
                    className="absolute -left-4 md:-left-8 top-1/2 w-3 md:w-5 h-[1px] bg-[#2c312a]"
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Sticky Image & Description Panel */}
        <div className="w-full lg:w-[42%] h-[60vh] lg:h-[75vh] relative flex flex-col justify-end overflow-hidden shadow-2xl shadow-black/5 bg-[#dcdbd4] mt-16 lg:mt-0 lg:sticky lg:top-[12.5vh]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeExp}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="absolute inset-0 z-0"
            >
              <img 
                src={experiences[activeExp].image} 
                alt={experiences[activeExp].title} 
                className="w-full h-full object-cover object-center"
              />
              {/* Subtle gradient to ensure text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            </motion.div>
          </AnimatePresence>

          {/* Description Overlay */}
          <div className="relative z-10 p-8 md:p-12 flex flex-col gap-6 text-[#E9E8E1]">
            <AnimatePresence mode="wait">
              <motion.div
                key={`desc-${activeExp}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex flex-col gap-6"
              >
                <div className="w-12 h-[1px] bg-[#E9E8E1]/50"></div>
                <p className="font-heading text-[#E9E8E1]/90 leading-[1.8] text-[1.05rem] md:text-[1.2rem] max-w-[26rem]">
                  {experiences[activeExp].desc}
                </p>
                <button className="text-[9px] tracking-[0.2em] uppercase font-medium hover:text-white transition-colors flex items-center gap-4 w-fit mt-2 group">
                  Discover More
                  <ArrowRight size={14} strokeWidth={1} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

      </div>
    </section>
  );
}
