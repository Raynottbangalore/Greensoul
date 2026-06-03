import React from 'react';
import LazyImage from '../components/LazyImage';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { page2 } from '../greenhousefiles';

export default function OurStory() {
  const navigate = useNavigate();

  return (
    <div className="w-full bg-[#E5E1D6] min-h-screen text-[#2c312a] font-sans selection:bg-[#9C8A71] selection:text-[#E5E1D6]">
      
      {/* Hero Section */}
      <section className="relative w-full flex flex-col-reverse lg:flex-row min-h-screen bg-[#E9E8E1] border-b border-[#2c312a]/10">
        {/* Content Area */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center px-8 md:px-16 lg:px-[80px] xl:px-[120px] py-24 lg:py-32 relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="w-full text-[#2c312a]"
          >


            <h1 className="font-heading text-[3rem] md:text-[4rem] lg:text-[4.5rem] leading-[1.1] mb-12 font-normal text-[#2c312a]">
              Rooted in the wild.<br />Built for slow living.
            </h1>

            <div className="space-y-8 mb-16 max-w-[28rem]">
              <p className="font-heading text-[1.05rem] md:text-[1.1rem] leading-[1.8] opacity-85">
                Hidden within the rainforests and coffee plantations of the Western Ghats, GreenSoul Ecostay is a consciously crafted ecological retreat where architecture, landscape, and biodiversity exist in quiet harmony.
              </p>

              <div className="w-12 h-[1px] bg-[#2c312a]/20"></div>

              <p className="font-heading text-[1.05rem] md:text-[1.1rem] leading-[1.8] opacity-85">
                Originally envisioned in 2016, the retreat evolved from a deep respect for the land and the timeless building traditions of Malnad.
              </p>

              <div className="w-12 h-[1px] bg-[#2c312a]/20"></div>

              <p className="font-heading text-[1.05rem] md:text-[1.1rem] leading-[1.8] opacity-85">
                Built using rammed earth walls, handmade adobe blocks, dry-stacked granite stone, reclaimed antiques, and centuries-old roof tiles, GreenSoul was designed not to dominate the landscape—but to belong to it.
              </p>

              <div className="w-12 h-[1px] bg-[#2c312a]/20"></div>

              <p className="font-heading text-[1.05rem] md:text-[1.1rem] leading-[1.8] opacity-85">
                Here, earth, mist, monsoon, silence, and time shape the experience as much as the architecture itself.
              </p>
            </div>

            <button 
              onClick={() => {
                window.scrollTo(0, 0);
                navigate('/stay');
              }}
              className="group border border-[#8B7C6E]/40 px-8 py-4 text-[10px] tracking-[0.2em] font-medium uppercase hover:bg-[#8B7C6E]/10 transition-all duration-500 flex items-center gap-6 w-fit text-[#8B7C6E]"
            >
              DISCOVER THE STAY
              <ArrowRight size={14} strokeWidth={1} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>

        {/* Image Area */}
        <div className="w-full lg:w-1/2 h-[60vh] lg:h-auto relative overflow-hidden lg:absolute lg:top-0 lg:right-0 lg:bottom-0">
          <LazyImage 
            initial={{ scale: 1.05 }}
            animate={{ scale: 1 }}
            transition={{ duration: 2.5, ease: [0.16, 1, 0.3, 1] }}
            src={page2}
            alt="Our Story"
            className="absolute inset-0 w-full h-full object-cover object-[center_center]"
          />
        </div>

        {/* Floating Inset Image */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="hidden lg:block absolute bottom-8 right-[42%] xl:right-[45%] w-[22vw] max-w-[280px] aspect-[4/5] border-[3px] border-white z-20 shadow-2xl"
        >
          <LazyImage 
            src="/images/client_full_story.jpg" 
            alt="Vintage details" 
            className="w-full h-full object-cover"
          />
        </motion.div>
      </section>

    </div>
  );
}
