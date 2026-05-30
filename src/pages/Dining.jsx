import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Dining() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const heroY = useTransform(scrollYProgress, [0, 0.2], [0, 150]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);

  return (
    <div ref={containerRef} className="w-full bg-[#0B120C] min-h-screen text-[#E4E0D9] font-sans selection:bg-[#9C8A71] selection:text-[#0B120C]">
      
      {/* SECTION 1: Luxury Dining Hero */}
      <section className="relative w-full h-[100vh] overflow-hidden">
        <motion.div style={{ y: heroY }} className="absolute inset-0 w-full h-full z-0">
          <motion.img 
            initial={{ scale: 1.15 }}
            animate={{ scale: 1 }}
            transition={{ duration: 2.5, ease: [0.16, 1, 0.3, 1] }}
            src="/images/dining/dining_hero_1780129441131.png" 
            alt="Luxury Rainforest Dining" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#0B120C]/30 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B120C] via-[#0B120C]/20 to-transparent"></div>
        </motion.div>

        <motion.div 
          style={{ opacity: heroOpacity }}
          className="absolute inset-0 flex flex-col justify-end items-center pb-24 px-6 text-center z-10"
        >
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-[10px] tracking-[0.3em] uppercase font-medium mb-6 text-[#9C8A71]">
              Culinary Sanctuary
            </p>
            <h1 className="font-heading text-6xl md:text-8xl lg:text-[9rem] font-light leading-[0.9] tracking-tight mb-16 text-[#F3E9DC]">
              Dining in <br/><i className="font-serif italic font-light text-[#9C8A71]">the wild.</i>
            </h1>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="flex flex-col items-center text-white/70 animate-bounce-slow cursor-pointer"
          >
            <span className="text-[9px] tracking-[0.3em] uppercase font-medium mb-3">Scroll</span>
            <ChevronDown size={18} strokeWidth={1.5} />
          </motion.div>
        </motion.div>
      </section>

      {/* SECTION 2: Dining Philosophy */}
      <section className="py-32 md:py-48 px-6 md:px-16 lg:px-[120px] max-w-[1600px] mx-auto relative bg-[#0B120C] z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5"
          >
            <p className="text-[10px] tracking-[0.3em] uppercase font-medium mb-8 text-[#9C8A71] flex items-center gap-4">
              <span className="w-8 h-[1px] bg-[#9C8A71]"></span>
              The Philosophy
            </p>
            <h2 className="font-heading text-5xl md:text-6xl lg:text-7xl mb-12 leading-[1.05] tracking-tight text-[#F3E9DC]">
              Rooted in the <br/><span className="font-serif italic font-light text-[#9C8A71]">landscape.</span>
            </h2>
            <div className="text-[15px] leading-[2] text-[#A3A19B] font-light space-y-8 max-w-lg">
              <p>
                Our culinary philosophy is simple: we follow the rhythm of the seasons. Every dish tells the story of the Malnad region, honoring ancient foraging traditions and local farming practices.
              </p>
              <p>
                Here, dining is an unhurried ritual. We believe that true luxury is found in the purity of ingredients, the warmth of the hearth, and the profound silence of the forest that surrounds you.
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 lg:col-start-7 relative"
          >
            <div className="aspect-[4/5] overflow-hidden group shadow-2xl">
              <motion.img 
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                src="/images/dining/dining_philosophy_1780129457876.png" 
                alt="Chef plating gourmet dish" 
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 3: Farm To Table Journey */}
      <section className="py-24 md:py-32 px-6 md:px-16 lg:px-[120px] max-w-[1600px] mx-auto bg-[#101912]">
        <div className="flex flex-col lg:flex-row-reverse items-center gap-16 lg:gap-24">
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="w-full lg:w-1/2"
          >
            <p className="text-[10px] tracking-[0.3em] uppercase font-medium mb-8 text-[#9C8A71] flex items-center gap-4">
              <span className="w-8 h-[1px] bg-[#9C8A71]"></span>
              Source to Plate
            </p>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl mb-10 leading-[1.1] tracking-tight text-[#F3E9DC]">
              Harvested with <i className="font-serif italic font-light text-[#9C8A71]">intention.</i>
            </h2>
            <p className="text-[15px] leading-[2] text-[#A3A19B] font-light mb-12">
              Before a dish reaches your table, it begins its journey in the rich, volcanic soil of our estate. We collaborate with local farmers and our own organic gardens to source ingredients at their peak. It is a slow, meticulous process that ensures every bite captures the essence of the Western Ghats.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="w-full lg:w-1/2"
          >
            <div className="aspect-[16/10] lg:aspect-square overflow-hidden group shadow-2xl">
              <motion.img 
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                src="/images/dining/dining_farm_1780129475447.png" 
                alt="Organic harvested vegetables" 
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 4: Signature Culinary Experiences */}
      <section className="py-32 md:py-48 px-6 md:px-16 lg:px-[120px] max-w-[1600px] mx-auto bg-[#0B120C]">
        <div className="text-center mb-24 md:mb-32 flex flex-col items-center">
          <p className="text-[10px] tracking-[0.3em] uppercase font-medium text-[#9C8A71] mb-6 flex items-center justify-center gap-4">
            <span className="w-8 h-[1px] bg-[#9C8A71]"></span>
            The Menu
            <span className="w-8 h-[1px] bg-[#9C8A71]"></span>
          </p>
          <h2 className="font-heading text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight text-[#F3E9DC]">
            Signature <span className="font-serif italic font-light text-[#9C8A71]">Experiences</span>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col group cursor-pointer"
          >
            <div className="aspect-[3/4] overflow-hidden mb-10 shadow-xl relative">
              <motion.img 
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                src="/images/dining/dining_signature_one_1780129489665.png" 
                alt="Gourmet dish" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-[#0B120C]/10 group-hover:bg-transparent transition-colors duration-700"></div>
            </div>
            <h3 className="font-heading text-3xl md:text-4xl lg:text-5xl mb-6 text-[#F3E9DC] group-hover:text-[#9C8A71] transition-colors duration-500 tracking-tight">
              Earth & <i className="font-serif italic font-light text-[#9C8A71] group-hover:text-[#F3E9DC] transition-colors duration-500">Fire</i>
            </h3>
            <p className="text-[15px] leading-[2] text-[#A3A19B] font-light max-w-sm">
              Our signature tasting menu. A sensory journey of taste and ambiance, curated specifically for you, blending modern culinary techniques with ancient open-fire cooking.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col group cursor-pointer md:mt-32 lg:mt-48"
          >
            <div className="aspect-[4/5] overflow-hidden mb-10 shadow-xl relative">
              <motion.img 
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                src="/images/dining/dining_signature_two_1780129506991.png" 
                alt="Handcrafted gourmet cuisine" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-[#0B120C]/10 group-hover:bg-transparent transition-colors duration-700"></div>
            </div>
            <h3 className="font-heading text-3xl md:text-4xl lg:text-5xl mb-6 text-[#F3E9DC] group-hover:text-[#9C8A71] transition-colors duration-500 tracking-tight">
              Forest <i className="font-serif italic font-light text-[#9C8A71] group-hover:text-[#F3E9DC] transition-colors duration-500">Foraging</i>
            </h3>
            <p className="text-[15px] leading-[2] text-[#A3A19B] font-light max-w-sm">
              A deeply immersive dining experience highlighting rare, endemic ingredients sourced from the canopy edge. An exploration of the wild's delicate flavors.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SECTION 5: Atmosphere & Ambience */}
      <section className="relative w-full h-[100vh] min-h-[800px] overflow-hidden">
        <motion.div 
          initial={{ scale: 1.1 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2.5, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0 w-full h-full z-0"
        >
          <img 
            src="/images/dining/dining_ambience_1780129526759.png" 
            alt="Atmosphere and ambience" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#0B120C]/40 mix-blend-multiply"></div>
          <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-[#0B120C] to-transparent"></div>
          <div className="absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-[#0B120C] to-transparent"></div>
        </motion.div>

        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-6 md:px-16 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center"
          >
            <p className="text-[10px] tracking-[0.3em] uppercase font-medium text-[#9C8A71] mb-8">The Ambience</p>
            <h2 className="font-heading text-5xl md:text-6xl lg:text-7xl mb-8 leading-[1.05] tracking-tight text-[#F3E9DC]">
              Illuminated by <br/><i className="font-serif italic font-light text-[#9C8A71]">the night.</i>
            </h2>
            <p className="text-[16px] md:text-[18px] leading-[2] font-light text-[#E4E0D9] opacity-90 mb-10">
              As dusk settles over the estate, the dining pavilion transforms. The boundary between indoors and the rainforest disappears, leaving only the warmth of candlelight, the sound of the distant falls, and the aroma of the evening's harvest.
            </p>
            <Link to="/book" className="group flex items-center justify-center gap-4 text-[10px] tracking-[0.2em] uppercase font-medium text-[#F3E9DC] transition-all">
              <span className="pb-1 border-b border-[#9C8A71]/30 group-hover:border-[#9C8A71] transition-colors">Reserve a Table</span>
              <ArrowRight size={14} className="text-[#9C8A71] group-hover:translate-x-2 transition-transform duration-500" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* SECTION 6: Chef Crafted Moments */}
      <section className="py-32 md:py-48 px-6 md:px-16 lg:px-[120px] max-w-[1600px] mx-auto bg-[#0B120C]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-0 items-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 lg:pr-20 order-2 lg:order-1"
          >
            <div className="aspect-[4/3] lg:aspect-[16/10] overflow-hidden group shadow-2xl">
              <motion.img 
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                src="/images/dining/dining_chef_1780129546289.png" 
                alt="Chef crafting moments" 
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 order-1 lg:order-2"
          >
            <p className="text-[10px] tracking-[0.3em] uppercase font-medium text-[#9C8A71] mb-8 flex items-center gap-4">
              <span className="w-8 h-[1px] bg-[#9C8A71]"></span>
              The Craft
            </p>
            <h2 className="font-heading text-5xl md:text-6xl lg:text-7xl mb-10 leading-[1] tracking-tight text-[#F3E9DC]">
              Mastery in <br/><span className="font-serif italic font-light text-[#9C8A71]">motion.</span>
            </h2>
            <p className="text-[15px] leading-[2] font-light text-[#A3A19B] mb-12">
              Every dish is an expression of our chefs' devotion to the culinary arts. It is a slow, methodical process where technique elevates the raw, untouched beauty of nature's finest ingredients.
            </p>
            <div className="w-16 h-[1px] bg-[#D4C3A3]/20"></div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 7: Closing Experience */}
      <section className="relative w-full h-[80vh] min-h-[600px] overflow-hidden">
        <motion.div 
          initial={{ scale: 1.1 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2.5, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0 w-full h-full z-0"
        >
          <img 
            src="/images/dining/dining_closing_1780129571682.png" 
            alt="Dining closing view" 
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-[#0B120C]/30 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B120C] via-transparent to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-[#0B120C] via-transparent to-transparent"></div>
        </motion.div>

        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="font-heading text-5xl md:text-7xl lg:text-[8rem] font-light leading-[1] tracking-tight mb-12 text-[#F3E9DC]">
              Taste the <span className="font-serif italic text-[#9C8A71]">wild.</span>
            </h2>

            <Link to="/book" className="group relative inline-flex items-center justify-center p-6">
              <div className="relative flex items-center gap-6 text-[10px] md:text-[11px] tracking-[0.3em] uppercase font-medium text-[#E4E0D9] transition-colors duration-500">
                <span className="w-12 h-[1px] bg-[#9C8A71]/50 group-hover:w-20 group-hover:bg-[#9C8A71] transition-all duration-700 ease-[0.16,1,0.3,1]"></span>
                <span className="relative overflow-hidden flex h-[14px]">
                   <span className="inline-block transform group-hover:-translate-y-full transition-transform duration-500 ease-[0.16,1,0.3,1]">Book Your Table</span>
                   <span className="absolute top-full left-0 inline-block transform group-hover:-translate-y-full transition-transform duration-500 ease-[0.16,1,0.3,1] text-white">Book Your Table</span>
                </span>
                <span className="w-12 h-[1px] bg-[#9C8A71]/50 group-hover:w-20 group-hover:bg-[#9C8A71] transition-all duration-700 ease-[0.16,1,0.3,1]"></span>
              </div>
            </Link>
          </motion.div>
        </div>
      </section>

    </div>
  );
}

