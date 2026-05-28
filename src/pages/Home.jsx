import React from 'react';
import { ChevronDown } from 'lucide-react';
import Stay from './Stay';

export default function Home() {
  return (
    <>
      <section className="relative min-h-[100vh] w-full flex items-center bg-[#e8e6e1] overflow-hidden">
      
      {/* Background Image - Scaled slightly taller to crop out baked-in scroll text at the bottom */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero_mockup.jpg"
          alt="Rainforest valley"
          className="w-full object-cover object-[center_top]"
          style={{ height: '115%' }}
        />
      </div>

      {/* Top Navbar Blur Overlay to seamlessly hide the baked-in navbar text without affecting colors */}
      <div className="absolute top-0 inset-x-0 h-[250px] z-[5] backdrop-blur-[24px] [mask-image:linear-gradient(to_bottom,black_60%,transparent_100%)]"></div>

      {/* Mist Gradient Overlay to cleanly hide the baked-in text on the left */}
      <div className="absolute inset-0 w-[90%] md:w-[70%] lg:w-[60%] z-[5] backdrop-blur-[20px] [mask-image:linear-gradient(to_right,black_60%,transparent_100%)] bg-gradient-to-r from-[#e4e5e0] via-[#e4e5e0]/80 to-transparent"></div>
      
      {/* Hero Content */}
      <div className="relative z-10 px-8 lg:px-[80px] w-full mx-auto flex flex-col justify-start min-h-[100vh] pt-[22vh] pb-24">
        
        <div className="max-w-2xl text-[#2c312a]">
          <p className="text-[10px] tracking-[0.2em] font-medium uppercase mb-4 opacity-70">
            Rooted in the wild. Made for slow living.
          </p>
          
          <h1 className="font-heading text-[4rem] md:text-[5rem] lg:text-[6.5rem] leading-[1.05] mb-6 font-normal tracking-normal">
            Earthy Luxury<br />
            Inside a Living<br />
            Rainforest
          </h1>
          
          <div className="w-16 h-[1px] bg-[#2c312a]/40 mb-6"></div>
          
          <p className="text-[10px] tracking-[0.2em] font-medium uppercase mb-5 opacity-70">
            Luxury in its natural form
          </p>
          
          <p className="font-heading text-[1.35rem] leading-snug mb-8 opacity-90 max-w-[28rem] tracking-wide text-balance">
            Hidden within the rainforests of the Western Ghats, GreenSoul is a consciously crafted retreat shaped by earth, mist, monsoon, and silence.
          </p>
          
          <button className="border border-[#2c312a]/30 px-8 py-3.5 text-[10px] tracking-[0.15em] font-medium uppercase hover:bg-[#2c312a] hover:text-[#f3e9dc] transition-colors flex items-center gap-4 w-fit">
            DISCOVER GREENSOUL 
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Cinematic Scroll Indicator - HTML rendered for crispness */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center text-white cursor-pointer z-[60] animate-bounce-slow">
        <span className="text-[10px] tracking-[0.3em] uppercase font-medium mb-3 opacity-90 drop-shadow-md">Scroll to explore</span>
        <ChevronDown size={20} strokeWidth={1.5} className="opacity-90 drop-shadow-md" />
      </div>
    </section>
      <Stay />
    </>
  );
}
