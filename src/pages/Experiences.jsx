import React from 'react';

export default function Experiences() {
  const experiences = [
    { id: '01', title: 'Monsoon mist', desc: 'Watch the valley disappear and reappear as clouds roll through.' },
    { id: '02', title: 'Valley views', desc: 'Endless horizons of untouched rainforest from your private verandah.' },
    { id: '03', title: 'Earthen architecture', desc: 'Living within walls crafted by hand from the very earth you stand on.' },
    { id: '04', title: 'Antique interiors', desc: 'Curated heritage pieces that tell stories of a forgotten time.' },
    { id: '05', title: 'Forest silence', desc: 'A profound quietude, broken only by birdsong and the wind.' },
    { id: '06', title: 'Curated dining', desc: 'Slow, meaningful meals prepared with local, seasonal ingredients.' },
    { id: '07', title: 'Rainforest biodiversity', desc: 'Discover the rich, vibrant ecosystems thriving right outside your door.' },
    { id: '08', title: 'Slow living', desc: 'Embrace an unhurried pace, letting nature dictate the rhythm of your day.' }
  ];

  return (
    <section id="experiences" className="w-full min-h-screen bg-[#E9E8E1] py-32 md:py-48 flex flex-col justify-center relative overflow-hidden">
      {/* Background subtle elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none opacity-[0.02]">
        <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full">
          <circle cx="80" cy="20" r="40" fill="#2c312a" />
          <circle cx="20" cy="80" r="50" fill="#2c312a" />
          <circle cx="50" cy="50" r="30" fill="#2c312a" />
        </svg>
      </div>

      <div className="px-6 md:px-16 lg:px-[120px] max-w-7xl mx-auto w-full relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-24 md:mb-32 gap-12">
          <div>
            <p className="text-[10px] md:text-[12px] tracking-[0.35em] font-medium uppercase mb-6 text-[#5a5a52] opacity-80">
              The Encounters
            </p>
            <h2 className="font-heading text-[3.5rem] md:text-[5rem] lg:text-[6rem] text-[#2c312a] font-normal leading-[1.05] tracking-[-0.02em]">
              Curated<br/>Experiences
            </h2>
          </div>
          <div className="max-w-[22rem] lg:pb-4 border-l border-[#2c312a]/30 pl-8">
            <p className="font-heading text-[1.15rem] leading-[1.8] text-[#4a4a40] opacity-90">
              A gentle rhythm of living, shaped by the rainforest, quiet traditions, and the art of slowing down.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-16 lg:gap-y-24">
          {experiences.map((exp, index) => (
            <div key={index} className="group relative border-t border-[#2c312a]/20 pt-8 transition-all duration-700 hover:border-[#2c312a]">
              <div className="flex justify-between items-start mb-8">
                <span className="text-[11px] font-medium tracking-[0.2em] text-[#5a5a52] group-hover:text-[#2c312a] transition-colors">{exp.id}</span>
                <span className="opacity-0 group-hover:opacity-100 transition-all duration-700 transform -translate-x-4 group-hover:translate-x-0">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2c312a" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </span>
              </div>
              <h3 className="font-heading text-3xl md:text-4xl text-[#2c312a] font-normal tracking-wide group-hover:italic transition-all duration-700 mb-6">
                {exp.title}
              </h3>
              <p className="font-heading text-[#4a4a40]/80 leading-[1.7] text-[1.05rem] opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700">
                {exp.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
