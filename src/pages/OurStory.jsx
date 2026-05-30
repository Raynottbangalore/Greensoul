import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { earthHeritage1, page4, page5d, page4b, page5e, heritageSuite } from '../greenhousefiles';

export default function OurStory() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const heroY = useTransform(scrollYProgress, [0, 0.2], [0, 150]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);

  return (
    <div ref={containerRef} className="w-full bg-[#E5E1D6] min-h-screen text-[#2c312a] font-sans selection:bg-[#9C8A71] selection:text-[#E5E1D6]">
      
      {/* Hero Section */}
      <section className="relative w-full h-[110vh] flex items-center justify-center overflow-hidden bg-[#2c312a]">
        <motion.div style={{ y: heroY }} className="absolute inset-0 w-full h-full">
           <motion.img 
            initial={{ scale: 1.15 }}
            animate={{ scale: 1 }}
            transition={{ duration: 2.5, ease: [0.16, 1, 0.3, 1] }}
            src={earthHeritage1} 
            alt="GreenSoul architecture" 
            className="w-full h-full object-cover object-[center_top]" 
          />
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="absolute inset-x-0 bottom-0 h-[60%] bg-gradient-to-t from-[#2c312a] via-[#2c312a]/50 to-transparent"></div>
        </motion.div>

        <motion.div 
          style={{ opacity: heroOpacity }}
          className="relative z-10 text-center px-6 flex flex-col items-center mt-32"
        >
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-[10px] md:text-[11px] tracking-[0.4em] uppercase font-medium mb-8 text-[#9C8A71]">
              Our Journey
            </p>
            <h1 className="font-heading text-6xl md:text-8xl lg:text-[10rem] font-light leading-[0.9] text-white tracking-[-0.03em] mb-8">
              Born from <br/><i className="font-serif italic font-light text-[#9C8A71]">the earth.</i>
            </h1>
          </motion.div>
        </motion.div>
      </section>

      {/* The Vision Section */}
      <section className="py-32 md:py-48 px-6 md:px-16 lg:px-[120px] max-w-[1400px] mx-auto text-center flex flex-col items-center relative z-10">
        <motion.div 
          initial={{ height: 0 }}
          whileInView={{ height: 60 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="w-[1px] bg-[#9C8A71] mb-16"
        ></motion.div>
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="font-heading text-4xl md:text-5xl lg:text-7xl leading-[1.1] font-light text-[#2c312a] mb-12 max-w-6xl tracking-tight"
        >
          "We did not want to build a resort in the forest. We wanted to build a space that belonged to the <span className="font-serif italic text-[#9C8A71]">forest</span>."
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.5 }}
          className="text-[11px] tracking-[0.25em] uppercase font-medium text-[#9C8A71]"
        >
          — The Founders
        </motion.p>
      </section>

      {/* Timeline & Craftsmanship - Staggered Layout */}
      <section className="py-24 md:py-32 bg-[#F0EFEA] relative">
        <div className="max-w-[1600px] mx-auto px-6 md:px-16 lg:px-[120px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-0 items-center">
            
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-5 lg:pr-16 relative z-10"
            >
              <h3 className="text-[10px] tracking-[0.3em] uppercase font-medium text-[#9C8A71] mb-8 flex items-center gap-4">
                <span className="w-8 h-[1px] bg-[#9C8A71]"></span>
                The Philosophy
              </h3>
              <h2 className="font-heading text-5xl md:text-6xl mb-12 leading-[1] tracking-tight">
                Slow architecture.<br/><span className="font-serif italic font-light text-[#9C8A71]">Timeless design.</span>
              </h2>
              <div className="space-y-8 text-[15px] leading-[2] font-light text-[#4A4D48] mb-12">
                <p>
                  Originally envisioned in 2016, GreenSoul evolved from a profound respect for the land. We spent three years simply studying the rainfall, the wind patterns, and the existing flora before breaking ground.
                </p>
                <p>
                  Every wall is hand-rammed earth, utilizing soil excavated directly from the site. This ancient technique not only naturally regulates temperature but ensures that if abandoned, the structures would simply melt back into the earth they came from.
                </p>
                <p>
                  Local artisans spent thousands of hours carving reclaimed timber, setting dry-stacked granite, and arranging antique Mangalore tiles. There is no artificial perfection here; there is only the authentic, beautiful irregularity of the human hand.
                </p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-7"
            >
              <div className="aspect-[4/5] lg:aspect-[3/4] overflow-hidden group">
                <motion.img 
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                  src={page4} 
                  alt="Artisan craftsmanship" 
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Connection with Nature - Reverse Staggered */}
      <section className="py-32 md:py-48 px-6 md:px-16 lg:px-[120px] max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-0 items-center">
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 lg:pr-16 order-2 lg:order-1"
          >
            <div className="aspect-[16/10] overflow-hidden group">
              <motion.img 
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                src={page5d} 
                alt="Connection with nature" 
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 lg:pl-16 order-1 lg:order-2"
          >
            <h3 className="text-[10px] tracking-[0.3em] uppercase font-medium text-[#9C8A71] mb-8 flex items-center gap-4">
              <span className="w-8 h-[1px] bg-[#9C8A71]"></span>
              Our Habitat
            </h3>
            <h2 className="font-heading text-5xl md:text-6xl mb-10 leading-[1] tracking-tight">
              Living alongside<br/><span className="font-serif italic font-light text-[#9C8A71]">the wild.</span>
            </h2>
            <p className="text-[15px] leading-[2] font-light text-[#4A4D48] mb-12">
              Sustainability is not a buzzword for us; it is our operational baseline. We harvest rainwater, treat wastewater naturally through root-zone systems, and have planted over 5,000 endemic saplings to restore the fragmented canopy. 
            </p>
            <button className="group flex items-center gap-4 text-[10px] tracking-[0.2em] uppercase font-medium text-[#2c312a] transition-all">
              <span className="pb-1 border-b border-[#9C8A71]/30 group-hover:border-[#9C8A71] transition-colors">Explore Our Sustainability</span>
              <ArrowRight size={14} className="text-[#9C8A71] group-hover:translate-x-2 transition-transform duration-500" />
            </button>
          </motion.div>

        </div>
      </section>

      {/* Rooted in Tradition (Heritage Suite) */}
      <section className="py-24 md:py-32 bg-[#E9E8E1]">
        <div className="max-w-[1600px] mx-auto px-6 md:px-16 lg:px-[120px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-0 items-center">
            
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-5 lg:pr-16"
            >
              <h3 className="text-[10px] tracking-[0.3em] uppercase font-medium text-[#9C8A71] mb-8 flex items-center gap-4">
                <span className="w-8 h-[1px] bg-[#9C8A71]"></span>
                The Architecture of Rest
              </h3>
              <h2 className="font-heading text-5xl md:text-6xl mb-12 leading-[1] tracking-tight">
                Rooted in<br/><span className="font-serif italic font-light text-[#9C8A71]">Tradition.</span>
              </h2>
              <div className="space-y-8 text-[15px] leading-[2] font-light text-[#4A4D48]">
                <p>
                  The Heritage Earth Suites were conceived as an extension of the forest floor. Built with raw, unbaked earth and naturally cooling mud plasters, these spaces breathe with the seasons. 
                </p>
                <p>
                  Every element inside speaks of stillness—from the warm tones of locally sourced wood to the soft, diffused light that filters through the verandah. It is an architectural homage to a time when humans built in harmony with nature, not against it.
                </p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-7"
            >
              <div className="aspect-[4/3] lg:aspect-[16/10] overflow-hidden group">
                <motion.img 
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                  src={heritageSuite} 
                  alt="Heritage Earth Suite" 
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* The Land's Embrace (page4b) */}
      <section className="py-32 md:py-48 px-6 md:px-16 lg:px-[120px] max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-0 items-center">
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 lg:pr-16 order-2 lg:order-1"
          >
            <div className="aspect-[3/4] lg:aspect-[4/5] overflow-hidden group">
              <motion.img 
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                src={page4b} 
                alt="The Land's Embrace" 
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 lg:pl-16 order-1 lg:order-2"
          >
            <h3 className="text-[10px] tracking-[0.3em] uppercase font-medium text-[#9C8A71] mb-8 flex items-center gap-4">
              <span className="w-8 h-[1px] bg-[#9C8A71]"></span>
              Cultivating the Wild
            </h3>
            <h2 className="font-heading text-5xl md:text-6xl mb-10 leading-[1] tracking-tight">
              The Land's<br/><span className="font-serif italic font-light text-[#9C8A71]">Embrace.</span>
            </h2>
            <p className="text-[15px] leading-[2] font-light text-[#4A4D48]">
              When we began laying the pathways across the estate, our rule was simple: we bend to the forest; the forest does not bend to us. Not a single ancient tree was felled to create GreenSoul. Instead, our trails wind organically around the existing flora, creating a labyrinth of natural discovery that invites you to lose yourself in the wild.
            </p>
          </motion.div>

        </div>
      </section>

      {/* Community & Culture (page5e) - Cinematic Finale */}
      <section className="relative py-48 md:py-64 bg-[#1A1A19] text-[#E4E0D9] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <motion.img 
            initial={{ scale: 1.1 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2.5, ease: [0.16, 1, 0.3, 1] }}
            src={page5e} 
            alt="Community and Culture" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A19] via-transparent to-[#1A1A19]"></div>
        </div>
        
        <div className="relative z-10 max-w-[1000px] mx-auto px-6 md:px-16 text-center flex flex-col items-center">
          <motion.div 
            initial={{ height: 0 }}
            whileInView={{ height: 60 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="w-[1px] bg-[#D4C3A3] mb-12"
          ></motion.div>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-[10px] tracking-[0.3em] uppercase font-medium text-[#D4C3A3] mb-8"
          >
            A Return to Simplicity
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="font-heading text-5xl md:text-6xl lg:text-7xl mb-12 leading-[1.05] tracking-tight"
          >
            The people who breathe <br/><span className="font-serif italic font-light text-[#D4C3A3]">life into the sanctuary.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-[15px] leading-[2] font-light opacity-80 max-w-2xl"
          >
            GreenSoul is not just built on the land; it is built by the people of the land. Our extended family includes the local Malnad artisans who crafted our spaces, the farmers who cultivate our ingredients, and the naturalists who guide our walks. Together, we celebrate a way of life that is vanishing—one rooted in community, heritage, and a deep reverence for the earth.
          </motion.p>
        </div>
      </section>

    </div>
  );
}
