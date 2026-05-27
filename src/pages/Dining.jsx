import React from 'react';

export default function Dining() {
  return (
    <section className="bg-brand-green text-brand-white min-h-screen pt-24">
      {/* Dining Section */}
      <div id="dining" className="grid grid-cols-1 lg:grid-cols-2">
        <div className="bg-[#1A2E20] p-16 md:p-24 lg:p-32 flex flex-col justify-center">
          <p className="text-brand-gold tracking-[0.2em] text-sm uppercase mb-6">Culinary Experience</p>
          <h2 className="font-heading text-4xl md:text-5xl mb-8 leading-tight">Curated Dining Rooted In The Land</h2>
          <p className="text-brand-white/70 font-light leading-relaxed mb-12 text-lg">
            The central dining pavilion, built using rammed earth architecture and filled with carefully curated royal antiques, opens into a lush landscaped garden with a gentle cascading waterfall. The open walk-in kitchen combines professional culinary functionality with authentic regional warmth.
          </p>
          <button className="self-start border border-brand-gold text-brand-gold px-8 py-4 text-sm tracking-widest uppercase hover:bg-brand-gold hover:text-brand-green transition-colors duration-500">
            Discover Our Menu
          </button>
        </div>
        <div className="h-[60vh] lg:h-auto bg-[#0d1b14] relative overflow-hidden">
           {/* Placeholder for dining image - we can use one of the generated ones slightly darkened or colored */}
           <div className="absolute inset-0 bg-brand-green/40 z-10" />
           <img src="/images/dining_pavilion_1779811496432.png" alt="Dining pavilion" className="w-full h-full object-cover scale-105" />
        </div>
      </div>

      {/* Architecture Section */}
      <div id="architecture" className="py-32 px-6 md:px-16 lg:px-24 text-center max-w-5xl mx-auto">
        <p className="text-brand-gold tracking-[0.2em] text-sm uppercase mb-6">Our Philosophy</p>
        <h2 className="font-heading text-5xl md:text-6xl mb-16 leading-tight">Architecture & Sustainability</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
           {['Rammed earth construction', 'Handmade adobe blocks', 'Dry stacked granite walls', 'Upcycled antiques', 'Traditional roofing', 'Climate-sensitive design', 'Low ecological impact', 'Naturally cool interiors'].map((feature, idx) => (
             <div key={idx} className="border border-brand-white/20 p-8 flex items-center justify-center hover:bg-brand-white/5 transition-colors duration-500">
                <span className="font-heading text-lg">{feature}</span>
             </div>
           ))}
        </div>
      </div>
    </section>
  );
}
