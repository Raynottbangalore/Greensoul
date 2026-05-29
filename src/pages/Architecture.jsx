import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function Architecture() {
  return (
    <div className="w-full bg-[#1A1A18] min-h-screen text-[#E9E8E1]">
      {/* Cinematic Hero Section */}
      <section className="relative w-full h-screen overflow-hidden">
        <motion.img 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          src="/images/architecture_hero_1780051488278.png" 
          alt="Earth architecture" 
          className="absolute inset-0 w-full h-full object-cover object-[center_top]"
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="flex flex-col items-center"
          >
            <p className="text-[10px] md:text-[12px] tracking-[0.4em] uppercase font-medium mb-6 opacity-80 text-[#D4C3A3]">
              The Blueprint
            </p>
            <h1 className="font-heading text-5xl md:text-7xl lg:text-[7.5rem] font-normal leading-[1.05] tracking-[-0.02em] mb-8">
              Sculpted by nature.
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 md:py-32 px-8 md:px-16 lg:px-[120px] max-w-[1200px] mx-auto text-center">
        <div className="w-12 h-[1px] bg-[#D4C3A3]/50 mx-auto mb-12"></div>
        <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl leading-[1.3] font-light mb-10">
          "Architecture should speak of its time and place, but yearn for timelessness. At GreenSoul, the place dictated the architecture."
        </h2>
      </section>

      {/* Materials Section */}
      <section className="py-24 md:py-32 bg-[#141412]">
        <div className="max-w-[1400px] mx-auto px-8 md:px-16 lg:px-[120px] flex flex-col lg:flex-row gap-20 lg:gap-32 items-center">
          <div className="w-full lg:w-[45%] flex flex-col items-start">
            <p className="text-[10px] tracking-[0.3em] uppercase font-medium text-[#D4C3A3] mb-8">The Materials</p>
            <h2 className="font-heading text-4xl md:text-5xl mb-8 leading-[1.1]">Rammed Earth & Reclaimed Timber</h2>
            <div className="space-y-6 text-[15px] leading-[1.9] opacity-80 mb-10 text-[#E9E8E1]">
              <p>
                Our walls are built using the ancient technique of rammed earth. By compressing locally sourced soil, gravel, and a minimal amount of cement into wooden formworks, we created structures that are not only structurally sound but inherently beautiful.
              </p>
              <p>
                The striations in the walls tell the story of the earth they came from. These thick walls provide exceptional thermal mass, keeping the interiors cool during the tropical summers and warm during the monsoon chills.
              </p>
            </div>
            <button className="border border-[#D4C3A3]/40 px-8 py-4 text-[10px] tracking-[0.2em] uppercase font-medium hover:bg-[#D4C3A3] hover:text-[#1A1A18] transition-colors duration-500">
              Read The Journal
            </button>
          </div>
          <div className="w-full lg:w-[55%] h-[60vh] md:h-[70vh] relative overflow-hidden">
            <img 
              src="/images/artisan_craftsmanship_1780050139159.png" 
              alt="Artisan details" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Sustainability Features */}
      <section className="py-24 md:py-40 max-w-[1400px] mx-auto px-8 md:px-16 lg:px-[120px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {[
            { title: "Zero Concrete Footprint", desc: "Foundations utilize dry-stacked stone to prevent disrupting subterranean water flows." },
            { title: "Passive Cooling", desc: "Cross-ventilation and thermal mass eliminate the need for artificial air conditioning." },
            { title: "Solar Integration", desc: "The estate runs predominantly on a discreet solar array hidden in the canopy." },
            { title: "Water Harvesting", desc: "100% of rainwater is harvested and directed back into the local aquifers." }
          ].map((feature, idx) => (
            <div key={idx} className="flex flex-col border-t border-[#D4C3A3]/20 pt-8">
              <span className="text-[10px] tracking-[0.2em] font-medium text-[#D4C3A3] mb-4">0{idx + 1}</span>
              <h3 className="font-heading text-2xl mb-4">{feature.title}</h3>
              <p className="text-[14px] leading-[1.8] opacity-70">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
