import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { page4b } from '../greenhousefiles';
import { Link } from 'react-router-dom';

export default function MistValleyCottage() {
  return (
    <div className="w-full bg-[#E9E8E1] pt-24 md:pt-32">

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

            <Link to="/earth-heritage" className="group border border-[#2c312a]/30 px-7 py-3.5 text-[10px] tracking-[0.15em] font-medium uppercase hover:bg-[#2c312a] hover:text-[#E9E8E1] transition-all duration-500 flex items-center gap-4 w-fit relative overflow-hidden">
              <span className="relative z-10 flex items-center gap-4">
                DISCOVER THE VALLEY COTTAGES
                <ArrowRight size={14} strokeWidth={1} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
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
    </div>
  );
}
