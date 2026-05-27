import React from 'react';

export default function OurStory() {
  return (
    <section id="our-story" className="relative flex flex-col lg:flex-row w-full min-h-screen overflow-hidden z-10" style={{ backgroundColor: '#E5E1D6' }}>
      
      {/* Left Content Column */}
      <div className="w-full lg:w-[35%] flex flex-col justify-center pl-8 md:pl-16 lg:pl-[8%] xl:pl-[10%] pr-8 md:pr-12 lg:pr-[4%] py-24 lg:py-20 z-10">
        
        <div className="flex flex-col items-start mb-10">
          <div className="w-6 h-[1px] bg-[#9C8A71] mb-4"></div>
          <span className="text-[#9C8A71] text-[10px] md:text-[11px] tracking-[0.2em] font-medium uppercase">Our Story</span>
        </div>
        
        <h2 className="font-heading text-[#262925] text-[3rem] md:text-[3.5rem] lg:text-[4rem] xl:text-[4.2rem] leading-[1.05] mb-10 font-normal tracking-tight">
          Rooted in the wild.<br />
          Built for slow living.
        </h2>
        
        <div className="text-[#4A4D48] font-body text-[13px] md:text-[14px] leading-[1.85] font-normal max-w-[440px] space-y-7 mb-14">
          <p>
            Hidden within the rainforests and coffee plantations of the Western Ghats, GreenSoul Ecostay is a consciously crafted ecological retreat where architecture, landscape, and biodiversity exist in quiet harmony.
          </p>
          <p>
            Originally envisioned in 2016, the retreat evolved from a deep respect for the land and the timeless building traditions of Malnad.
          </p>
          <p>
            Built using rammed earth walls, handmade adobe blocks, dry-stacked granite stone, reclaimed antiques, and centuries-old roof tiles, GreenSoul was designed not to dominate the landscape—but to belong to it.
          </p>
          <p>
            Here, earth, mist, monsoon, silence, and time shape the experience as much as the architecture itself.
          </p>
        </div>
        
        <button className="group border border-[#9C8A71]/50 px-8 py-4 text-[#9C8A71] text-[10px] tracking-[0.2em] font-medium uppercase hover:bg-[#9C8A71] hover:text-white transition-colors duration-500 flex items-center justify-between w-[240px]">
          <span>Discover the stay</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className="transform group-hover:translate-x-1 transition-transform duration-500">
            <path d="M5 12h14"></path>
            <path d="m15 5 7 7-7 7"></path>
          </svg>
        </button>
        
      </div>

      {/* Right Image Column */}
      <div className="w-full lg:w-[65%] relative min-h-[50vh] lg:min-h-screen overflow-hidden">
        <img 
          src="/images/client_our_story_house_perfect.jpg" 
          alt="GreenSoul architecture" 
          className="w-full h-full object-cover object-left" 
        />
      </div>
      
    </section>
  );
}
