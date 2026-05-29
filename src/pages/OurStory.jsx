import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { earthHeritage1, page4, page5d, page4b, page5e, heritageSuite } from '../greenhousefiles';

export default function OurStory() {
  return (
    <div className="w-full bg-[#E5E1D6] min-h-screen text-[#2c312a]">
      {/* Hero Section */}
      <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[#3A3F35]">
           <motion.img 
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 2, ease: "easeOut" }}
            src={earthHeritage1} 
            alt="GreenSoul architecture" 
            className="w-full h-full object-cover object-[center_top] opacity-60" 
          />
        </div>
        <div className="relative z-10 text-center px-6 flex flex-col items-center mt-20">
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-[10px] md:text-[12px] tracking-[0.4em] uppercase font-medium mb-8 text-[#D4C3A3]"
          >
            Our Journey
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="font-heading text-5xl md:text-7xl lg:text-[7rem] font-normal leading-[1.05] text-[#E9E8E1] tracking-[-0.02em] mb-8"
          >
            Born from the earth.
          </motion.h1>
        </div>
      </section>

      {/* The Vision Section */}
      <section className="py-24 md:py-32 lg:py-40 px-8 md:px-16 lg:px-[120px] max-w-[1200px] mx-auto text-center flex flex-col items-center">
        <motion.div 
          initial={{ height: 0 }}
          whileInView={{ height: 60 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 1 }}
          className="w-[1px] bg-[#9C8A71] mb-12"
        ></motion.div>
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 1, delay: 0.2 }}
          className="font-heading text-4xl md:text-5xl lg:text-6xl leading-[1.3] text-[#3a3a32] mb-12 max-w-[50rem]"
        >
          "We did not want to build a resort in the forest. We wanted to build a space that belonged to the forest."
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-[12px] tracking-[0.2em] uppercase font-medium text-[#9C8A71]"
        >
          — The Founders
        </motion.p>
      </section>

      {/* Timeline & Craftsmanship */}
      <section className="py-24 md:py-32 bg-[#F0EFEA]">
        <div className="max-w-[1400px] mx-auto px-8 md:px-16 lg:px-[120px] flex flex-col lg:flex-row gap-20 lg:gap-32">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 1 }}
            className="w-full lg:w-[45%] flex flex-col justify-center"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-8 h-[1px] bg-[#9C8A71]/50"></div>
              <p className="text-[10px] tracking-[0.3em] uppercase font-medium text-[#9C8A71]">The Philosophy</p>
            </div>
            <h2 className="font-heading text-4xl md:text-5xl mb-10 leading-[1.1]">Slow architecture.<br/>Timeless design.</h2>
            <div className="space-y-8 text-[15px] leading-[1.9] text-[#4A4D48] opacity-90">
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
          <div className="w-full lg:w-[55%] h-[60vh] lg:h-[90vh] relative overflow-hidden group">
            <motion.img 
              initial={{ scale: 1.05 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5 }}
              src={page4} 
              alt="Artisan craftsmanship" 
              className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105"
            />
          </div>
        </div>
      </section>

      {/* Connection with Nature */}
      <section className="py-24 md:py-32 lg:py-40 px-8 md:px-16 lg:px-[120px] max-w-[1400px] mx-auto">
        <div className="flex flex-col-reverse lg:flex-row gap-16 lg:gap-24 items-center">
          <div className="w-full lg:w-1/2 h-[50vh] md:h-[60vh] lg:h-[70vh] relative overflow-hidden group">
            <motion.img 
              initial={{ scale: 1.05 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5 }}
              src={page5d} 
              alt="Connection with nature" 
              className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105"
            />
          </div>
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 1 }}
            className="w-full lg:w-1/2 flex flex-col items-start"
          >
            <div className="flex items-center gap-4 mb-6">
              <p className="text-[10px] tracking-[0.3em] uppercase font-medium text-[#9C8A71]">Our Habitat</p>
              <div className="w-8 h-[1px] bg-[#9C8A71]/50"></div>
            </div>
            <h2 className="font-heading text-4xl md:text-5xl mb-8 leading-[1.1]">Living alongside<br/>the wild.</h2>
            <p className="text-[15px] leading-[1.9] text-[#4A4D48] opacity-90 mb-10">
              Sustainability is not a buzzword for us; it is our operational baseline. We harvest rainwater, treat wastewater naturally through root-zone systems, and have planted over 5,000 endemic saplings to restore the fragmented canopy. 
            </p>
            <button className="group border border-[#9C8A71]/50 px-8 py-4 text-[#9C8A71] text-[10px] tracking-[0.2em] font-medium uppercase hover:bg-[#9C8A71] hover:text-white transition-all duration-500 flex items-center gap-4">
              Explore Our Sustainability
              <ArrowRight size={14} strokeWidth={1} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Rooted in Tradition (Heritage Suite) */}
      <section className="py-24 md:py-32 bg-[#E9E8E1]">
        <div className="max-w-[1400px] mx-auto px-8 md:px-16 lg:px-[120px] flex flex-col lg:flex-row gap-20 lg:gap-32 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 1 }}
            className="w-full lg:w-[45%] flex flex-col justify-center order-2 lg:order-1"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-8 h-[1px] bg-[#9C8A71]/50"></div>
              <p className="text-[10px] tracking-[0.3em] uppercase font-medium text-[#9C8A71]">The Architecture of Rest</p>
            </div>
            <h2 className="font-heading text-4xl md:text-5xl mb-10 leading-[1.1]">Rooted in<br/>Tradition.</h2>
            <div className="space-y-8 text-[15px] leading-[1.9] text-[#4A4D48] opacity-90">
              <p>
                The Heritage Earth Suites were conceived as an extension of the forest floor. Built with raw, unbaked earth and naturally cooling mud plasters, these spaces breathe with the seasons. 
              </p>
              <p>
                Every element inside speaks of stillness—from the warm tones of locally sourced wood to the soft, diffused light that filters through the verandah. It is an architectural homage to a time when humans built in harmony with nature, not against it.
              </p>
            </div>
          </motion.div>
          <div className="w-full lg:w-[55%] h-[60vh] lg:h-[80vh] relative overflow-hidden group order-1 lg:order-2">
            <motion.img 
              initial={{ scale: 1.05 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5 }}
              src={heritageSuite} 
              alt="Heritage Earth Suite" 
              className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105"
            />
          </div>
        </div>
      </section>

      {/* The Land's Embrace (page4b) */}
      <section className="py-24 md:py-32 lg:py-40 px-8 md:px-16 lg:px-[120px] max-w-[1400px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
          <div className="w-full lg:w-1/2 h-[50vh] md:h-[60vh] lg:h-[70vh] relative overflow-hidden group">
            <motion.img 
              initial={{ scale: 1.05 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5 }}
              src={page4b} 
              alt="The Land's Embrace" 
              className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105"
            />
          </div>
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 1 }}
            className="w-full lg:w-1/2 flex flex-col items-start"
          >
            <div className="flex items-center gap-4 mb-6">
              <p className="text-[10px] tracking-[0.3em] uppercase font-medium text-[#9C8A71]">Cultivating the Wild</p>
              <div className="w-8 h-[1px] bg-[#9C8A71]/50"></div>
            </div>
            <h2 className="font-heading text-4xl md:text-5xl mb-8 leading-[1.1]">The Land's<br/>Embrace.</h2>
            <p className="text-[15px] leading-[1.9] text-[#4A4D48] opacity-90 mb-10">
              When we began laying the pathways across the estate, our rule was simple: we bend to the forest; the forest does not bend to us. Not a single ancient tree was felled to create GreenSoul. Instead, our trails wind organically around the existing flora, creating a labyrinth of natural discovery that invites you to lose yourself in the wild.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Community & Culture (page5e) */}
      <section className="relative py-32 md:py-40 bg-[#3A3F35] text-[#E9E8E1] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <motion.img 
            initial={{ scale: 1.1 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2 }}
            src={page5e} 
            alt="Community and Culture" 
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        <div className="relative z-10 max-w-[800px] mx-auto px-8 md:px-16 text-center flex flex-col items-center">
          <motion.div 
            initial={{ height: 0 }}
            whileInView={{ height: 60 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="w-[1px] bg-[#D4C3A3] mb-12"
          ></motion.div>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-[10px] tracking-[0.3em] uppercase font-medium text-[#D4C3A3] mb-6"
          >
            A Return to Simplicity
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4 }}
            className="font-heading text-4xl md:text-5xl lg:text-6xl mb-8 leading-[1.2]"
          >
            The people who breathe life into the sanctuary.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-[15px] leading-[1.9] opacity-90 max-w-[600px]"
          >
            GreenSoul is not just built on the land; it is built by the people of the land. Our extended family includes the local Malnad artisans who crafted our spaces, the farmers who cultivate our ingredients, and the naturalists who guide our walks. Together, we celebrate a way of life that is vanishing—one rooted in community, heritage, and a deep reverence for the earth.
          </motion.p>
        </div>
      </section>

    </div>
  );
}
