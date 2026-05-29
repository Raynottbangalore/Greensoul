import React from 'react';
import { ChevronDown } from 'lucide-react';
import Stay from './Stay';

export default function Home() {
  return (
    <>
      <section className="relative min-h-[100vh] w-full flex items-center bg-[#e8e6e1] overflow-hidden">
      
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          src="/images/rain_tree.mp4"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ transform: 'scale(1.6)', transformOrigin: 'center' }}
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="absolute inset-0 bg-black/30"></div>
      </div>
      
      {/* Hero Content removed as requested */}
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
