import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { newImage } from '../greenhousefiles';
import { Link } from 'react-router-dom';

export default function MalanadHouse() {
  return (
    <div className="w-full bg-[#E9E8E1] pt-24 md:pt-32">
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

            <Link to="/experiences" className="group border border-[#2c312a]/30 px-6 py-3.5 text-[10px] tracking-[0.15em] font-medium uppercase hover:bg-[#2c312a] hover:text-[#E9E8E1] transition-colors flex items-center gap-4 w-fit">
              DISCOVER THE MALNAD HOUSE
              <ArrowRight size={14} strokeWidth={1} className="group-hover:translate-x-1 transition-transform" />
            </Link>
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
