import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import {
  eveningWalk,
  trekWonder,
  cycleWonder,
  page1,
  page2,
  page3,
  page5b,
  page5cWonder
} from '../greenhousefiles';

export default function Experiences() {
  const experiences = [
    {
      id: '01',
      title: 'Monsoon Immersion & Mist Mornings',
      desc: 'Watch the valley transform as the monsoon arrives. Heavy rains breathe life into the dormant flora, cascading waterfalls awaken, and the entire landscape turns a vibrant, electric green. Mornings are wrapped in mist, offering a time for quiet reflection from the warmth of your verandah.',
      image: page1
    },
    {
      id: '02',
      title: 'Slow Forest Walks',
      desc: 'Discover the art of doing nothing, surrounded by the wisdom of the ancient forest. Walk through centuries-old trails and let the natural sounds of the rainforest ground you in the present moment.',
      image: eveningWalk
    },
    {
      id: '03',
      title: 'Plantation Experiences',
      desc: 'Learn about the delicate ecosystem of the Western Ghats, spot rare endemic birds, and understand the intricate balance of life in the canopy while cycling or walking through the plantations.',
      image: cycleWonder
    },
    {
      id: '04',
      title: 'Nature Photography',
      desc: 'With endless vistas of hills, unique flora, and stunning wildlife, the landscape serves as a perfect canvas to capture the raw and unfiltered beauty of the Western Ghats.',
      image: trekWonder
    }
  ];

  return (
    <div className="w-full bg-[#E5E1D6] min-h-screen text-[#2c312a]">
      {/* Cinematic Hero Section */}
      <section className="relative w-full h-[90vh] overflow-hidden">
        <motion.img 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          src={page2} 
          alt="Mist mornings" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="flex flex-col items-center text-[#E9E8E1]"
          >
            <p className="text-[10px] md:text-[12px] tracking-[0.4em] uppercase font-medium mb-6 opacity-80 text-[#9C8A71]">
              The Encounters
            </p>
            <h1 className="font-heading text-5xl md:text-7xl lg:text-[7.5rem] font-normal leading-[1.05] tracking-[-0.02em] mb-8">
              Rhythm of nature.
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Intro Text */}
      <section className="py-24 md:py-32 px-8 md:px-16 lg:px-[120px] max-w-[1200px] mx-auto text-center">
        <h2 className="font-heading text-3xl md:text-5xl leading-[1.3] text-[#3a3a32] font-light">
          At GreenSoul, experiences are not scheduled activities, but mindful engagements with the environment. <span className="italic text-[#9C8A71]">Every moment is an invitation to slow down.</span>
        </h2>
      </section>

      {/* Editorial Layout Experiences */}
      <section className="pb-32 px-8 md:px-16 lg:px-[120px] max-w-[1400px] mx-auto flex flex-col gap-32">
        {experiences.map((exp, index) => (
          <div key={exp.id} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-16 lg:gap-24 items-center`}>
            <div className="w-full lg:w-[60%] h-[60vh] lg:h-[85vh] relative overflow-hidden group">
              <img 
                src={exp.image} 
                alt={exp.title} 
                className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105"
              />
            </div>
            <div className="w-full lg:w-[40%] flex flex-col items-start">
              <span className="text-[10px] tracking-[0.3em] uppercase font-medium text-[#9C8A71] mb-8">No. {exp.id}</span>
              <h3 className="font-heading text-4xl md:text-5xl mb-8 leading-[1.1]">{exp.title}</h3>
              <p className="text-[15px] leading-[1.9] opacity-80 mb-10 text-[#4A4D48]">
                {exp.desc}
              </p>
              <button className="text-[10px] tracking-[0.2em] uppercase font-medium flex items-center gap-4 hover:text-[#9C8A71] transition-colors group">
                Discover More
                <ArrowRight size={16} strokeWidth={1.5} className="group-hover:translate-x-2 transition-transform" />
              </button>
            </div>
          </div>
        ))}
      </section>

      {/* Secondary Experiences Grid */}
      <section className="py-24 md:py-32 bg-[#DCD9D0]">
        <div className="max-w-[1400px] mx-auto px-8 md:px-16 lg:px-[120px]">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <h2 className="font-heading text-4xl md:text-6xl leading-[1.1]">Quiet Pursuits</h2>
            <p className="text-[14px] leading-[1.8] opacity-70 max-w-sm">
              Discover the art of doing nothing, surrounded by the wisdom of the ancient forest.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { title: "Stargazing", img: page5cWonder },
              { title: "Tea by the hills", img: page5b },
              { title: "Silence Retreats", img: page3 }
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col group cursor-pointer">
                <div className="h-[40vh] overflow-hidden mb-6 relative">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                </div>
                <h4 className="font-heading text-2xl group-hover:text-[#9C8A71] transition-colors">{item.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
