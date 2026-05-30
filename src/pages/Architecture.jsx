import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function Architecture() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const heroY = useTransform(scrollYProgress, [0, 0.2], [0, 150]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);

  return (
    <div ref={containerRef} className="w-full bg-[#E5E1D6] min-h-screen text-[#2c312a] font-sans selection:bg-[#9C8A71] selection:text-[#E5E1D6]">
      
      {/* Cinematic Hero Section */}
      <section className="relative w-full h-[110vh] overflow-hidden bg-[#2c312a]">
        <motion.div style={{ y: heroY }} className="absolute inset-0 w-full h-full">
          <motion.img 
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 2.5, ease: [0.16, 1, 0.3, 1] }}
            src="/images/architecture_hero_1780051488278.png" 
            alt="Earth architecture" 
            className="w-full h-full object-cover object-[center_top] opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#2c312a] via-black/20 to-transparent"></div>
        </motion.div>

        <motion.div 
          style={{ opacity: heroOpacity }}
          className="absolute inset-0 flex flex-col justify-end items-center text-center pb-32 px-6 md:px-16"
        >
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-[10px] md:text-[11px] tracking-[0.4em] uppercase font-medium mb-8 text-[#D4C3A3]">
              The Blueprint
            </p>
            <h1 className="font-heading text-6xl md:text-8xl lg:text-[10rem] font-light leading-[0.9] tracking-[-0.03em] mb-10 text-white">
              Sculpted by <br/><i className="font-serif italic font-light text-[#D4C3A3]">nature.</i>
            </h1>
          </motion.div>
        </motion.div>
      </section>

      {/* Philosophy Section */}
      <section className="py-32 md:py-48 px-6 md:px-16 lg:px-[120px] max-w-[1400px] mx-auto text-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="w-1 h-12 bg-[#9C8A71] mx-auto mb-16"
        ></motion.div>
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="font-heading text-4xl md:text-5xl lg:text-7xl leading-[1.1] font-light max-w-5xl mx-auto tracking-tight"
        >
          "Architecture should speak of its time and place, but yearn for <span className="font-serif italic text-[#9C8A71]">timelessness</span>. At GreenSoul, the place dictated the architecture."
        </motion.h2>
      </section>

      {/* Materials Section - Editorial Asymmetry */}
      <section className="py-24 md:py-32 bg-[#E9E8E1] relative">
        <div className="max-w-[1600px] mx-auto px-6 md:px-16 lg:px-[120px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-0 items-center">
            
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-5 lg:pr-16 relative z-10"
            >
              <p className="text-[10px] tracking-[0.3em] uppercase font-medium text-[#9C8A71] mb-8">The Materials</p>
              <h2 className="font-heading text-5xl md:text-6xl mb-10 leading-[1] tracking-tight text-[#2c312a]">
                Rammed Earth & <br/><span className="font-serif italic font-light text-[#9C8A71]">Reclaimed Timber</span>
              </h2>
              <div className="space-y-8 text-[15px] leading-[2] font-light text-[#4A4D48] mb-12">
                <p>
                  Our walls are built using the ancient technique of rammed earth. By compressing locally sourced soil, gravel, and a minimal amount of cement into wooden formworks, we created structures that are not only structurally sound but inherently beautiful.
                </p>
                <p>
                  The striations in the walls tell the story of the earth they came from. These thick walls provide exceptional thermal mass, keeping the interiors cool during the tropical summers and warm during the monsoon chills.
                </p>
              </div>
              <button className="group flex items-center gap-4 text-[10px] tracking-[0.2em] uppercase font-medium text-[#2c312a] transition-all">
                <span className="pb-1 border-b border-[#9C8A71]/30 group-hover:border-[#9C8A71] transition-colors">Read The Journal</span>
                <ArrowRight size={14} className="text-[#9C8A71] group-hover:translate-x-2 transition-transform duration-500" />
              </button>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-7 relative"
            >
              <div className="aspect-[4/3] lg:aspect-[16/10] overflow-hidden">
                <motion.img 
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                  src="/images/artisan_craftsmanship_1780050139159.png" 
                  alt="Artisan details" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-[#9C8A71]/10 -z-10 rounded-full blur-3xl"></div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Sustainability Features - Architectural Grid */}
      <section className="py-32 md:py-48 max-w-[1600px] mx-auto px-6 md:px-16 lg:px-[120px]">
        <div className="mb-24 flex justify-between items-end">
          <h2 className="font-heading text-5xl md:text-7xl leading-[1] tracking-tight">
            Design <span className="font-serif italic font-light text-[#9C8A71]">Integrity</span>
          </h2>
          <p className="hidden md:block text-[14px] leading-[2] font-light max-w-sm text-[#4A4D48]">
            Built to disappear back into the earth, leaving nothing but footprints.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-16">
          {[
            { title: "Zero Concrete", span: "Footprint", desc: "Foundations utilize dry-stacked stone to prevent disrupting subterranean water flows." },
            { title: "Passive", span: "Cooling", desc: "Cross-ventilation and thermal mass eliminate the need for artificial air conditioning." },
            { title: "Solar", span: "Integration", desc: "The estate runs predominantly on a discreet solar array hidden in the canopy." },
            { title: "Water", span: "Harvesting", desc: "100% of rainwater is harvested and directed back into the local aquifers." }
          ].map((feature, idx) => (
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 1, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              key={idx} 
              className="flex flex-col border-t border-[#2c312a]/20 pt-8 group"
            >
              <span className="text-[10px] tracking-[0.3em] font-medium text-[#9C8A71] mb-8">0{idx + 1}</span>
              <h3 className="font-heading text-3xl mb-4 group-hover:text-[#9C8A71] transition-colors duration-500">
                {feature.title} <br/><span className="font-serif italic">{feature.span}</span>
              </h3>
              <p className="text-[14px] leading-[2] font-light text-[#4A4D48] mt-auto">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

    </div>
  );
}
