import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function Dining() {
  return (
    <div className="w-full bg-[#1A1A18] min-h-screen text-[#E9E8E1]">
      {/* Cinematic Hero Section */}
      <section className="relative w-full h-screen overflow-hidden">
        <motion.img 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          src="/images/rainforest_dining_1780050032443.png" 
          alt="Rainforest dining" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-[#1A1A18]/90"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6 pt-32">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="flex flex-col items-center"
          >
            <p className="text-[10px] md:text-[12px] tracking-[0.4em] uppercase font-medium mb-6 opacity-80 text-[#D4C3A3]">
              Culinary Sanctuary
            </p>
            <h1 className="font-heading text-5xl md:text-7xl lg:text-[7rem] font-normal leading-[1.05] tracking-[-0.02em] mb-8">
              Dining in the wild.
            </h1>
            <p className="max-w-2xl text-[14px] md:text-[16px] leading-[1.8] opacity-80 font-light">
              Where the untamed beauty of the rainforest meets the refined artistry of slow, seasonal cuisine.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Dining Philosophy Section */}
      <section className="py-24 md:py-32 lg:py-40 px-8 md:px-16 lg:px-[120px] max-w-[1400px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
          <div className="w-full lg:w-1/2 flex flex-col items-start">
            <div className="w-12 h-[1px] bg-[#D4C3A3]/50 mb-8"></div>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl mb-10 leading-[1.1]">
              Rooted in the <br/><span className="text-[#D4C3A3] italic">landscape</span>.
            </h2>
            <p className="text-[15px] leading-[1.9] opacity-80 mb-8 max-w-xl">
              Our culinary philosophy is simple: we follow the rhythm of the seasons. Every dish tells the story of the Malnad region, honoring ancient foraging traditions and local farming practices.
            </p>
            <p className="text-[15px] leading-[1.9] opacity-80 max-w-xl">
              Here, dining is an unhurried ritual. We believe that true luxury is found in the purity of ingredients, the warmth of the hearth, and the profound silence of the forest that surrounds you.
            </p>
          </div>
          <div className="w-full lg:w-1/2 h-[60vh] lg:h-[80vh] overflow-hidden relative">
            <img 
              src="/images/handcrafted_cuisine_1780050049252.png" 
              alt="Handcrafted cuisine" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* The Pavilion Section */}
      <section className="py-24 md:py-32 lg:py-40 bg-[#141412]">
        <div className="max-w-[1400px] mx-auto px-8 md:px-16 lg:px-[120px] flex flex-col-reverse lg:flex-row gap-16 lg:gap-24 items-center">
          <div className="w-full lg:w-[55%] h-[50vh] md:h-[60vh] lg:h-[70vh] relative overflow-hidden">
            <img 
              src="/images/dining_pavilion_1780049996525.png" 
              alt="Dining pavilion" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full lg:w-[45%] flex flex-col items-start">
            <p className="text-[10px] tracking-[0.3em] uppercase font-medium text-[#D4C3A3] mb-6">The Architecture</p>
            <h2 className="font-heading text-4xl md:text-5xl mb-8 leading-[1.1]">The Earth Pavilion</h2>
            <p className="text-[15px] leading-[1.9] opacity-80 mb-10">
              Built entirely from rammed earth and reclaimed timber, our open-air dining pavilion is designed to blur the boundaries between indoors and out. Feel the cool forest breeze, listen to the distant waterfall, and dine under the soft glow of antique brass lamps.
            </p>
            <button className="border border-[#D4C3A3]/40 px-8 py-4 text-[10px] tracking-[0.2em] uppercase font-medium hover:bg-[#D4C3A3] hover:text-[#1A1A18] transition-colors duration-500 flex items-center gap-4">
              Explore Architecture
            </button>
          </div>
        </div>
      </section>

      {/* Signature Moments Section */}
      <section className="py-24 md:py-32 lg:py-40 px-8 md:px-16 lg:px-[120px] max-w-[1400px] mx-auto">
        <div className="text-center mb-20 md:mb-28 flex flex-col items-center">
          <p className="text-[10px] tracking-[0.3em] uppercase font-medium text-[#D4C3A3] mb-6">Experiences</p>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl leading-[1.1]">Signature Dining</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
          <div className="flex flex-col group cursor-pointer">
            <div className="h-[45vh] lg:h-[60vh] overflow-hidden mb-8 relative">
              <img 
                src="/images/candlelit_dining_1780050017068.png" 
                alt="Candlelit Dining" 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
            </div>
            <h3 className="font-heading text-2xl md:text-3xl mb-4 group-hover:text-[#D4C3A3] transition-colors">Intimate Dinners</h3>
            <p className="text-[14px] leading-[1.8] opacity-70">
              Private candlelit dining curated specifically for you, set against the dramatic backdrop of the nocturnal rainforest. A sensory journey of taste and ambiance.
            </p>
          </div>
          
          <div className="flex flex-col group cursor-pointer md:mt-24">
            <div className="h-[45vh] lg:h-[60vh] overflow-hidden mb-8 relative">
              <img 
                src="/images/tea_hills_1780050103470.png" 
                alt="Plantation Tea" 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
            </div>
            <h3 className="font-heading text-2xl md:text-3xl mb-4 group-hover:text-[#D4C3A3] transition-colors">Plantation High Tea</h3>
            <p className="text-[14px] leading-[1.8] opacity-70">
              Afternoons are for pausing. Enjoy artisanal estate teas and delicate pastries on the observation deck as the mist rolls into the valley.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}
