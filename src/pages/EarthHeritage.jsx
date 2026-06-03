import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { page5cWonder } from '../greenhousefiles';
import { Link } from 'react-router-dom';

export default function EarthHeritage() {
  return (
    <div className="w-full bg-[#E9E8E1] pt-24 md:pt-32">
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

            <Link to="/malnad-house" className="group text-[10px] md:text-[11px] tracking-[0.15em] font-medium uppercase hover:text-[#5a5a52] transition-colors flex items-center gap-4 pb-2 border-b border-[#2c312a]/30 w-fit">
              EXPLORE THE HERITAGE SUITES
              <ArrowRight size={14} strokeWidth={1} className="group-hover:translate-x-1 transition-transform" />
            </Link>
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
    </div>
  );
}
