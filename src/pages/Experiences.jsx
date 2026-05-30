import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
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
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const heroY = useTransform(scrollYProgress, [0, 0.2], [0, 150]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);

  const experiences = [
    {
      id: '01',
      title: 'Monsoon Immersion',
      subtitle: '& Mist Mornings',
      desc: 'Watch the valley transform as the monsoon arrives. Heavy rains breathe life into the dormant flora, cascading waterfalls awaken, and the entire landscape turns a vibrant, electric green. Mornings are wrapped in mist, offering a time for quiet reflection from the warmth of your verandah.',
      image: page1
    },
    {
      id: '02',
      title: 'Slow Forest',
      subtitle: 'Walks',
      desc: 'Discover the art of doing nothing, surrounded by the wisdom of the ancient forest. Walk through centuries-old trails and let the natural sounds of the rainforest ground you in the present moment.',
      image: eveningWalk
    },
    {
      id: '03',
      title: 'Plantation',
      subtitle: 'Experiences',
      desc: 'Learn about the delicate ecosystem of the Western Ghats, spot rare endemic birds, and understand the intricate balance of life in the canopy while cycling or walking through the plantations.',
      image: cycleWonder
    },
    {
      id: '04',
      title: 'Nature',
      subtitle: 'Photography',
      desc: 'With endless vistas of hills, unique flora, and stunning wildlife, the landscape serves as a perfect canvas to capture the raw and unfiltered beauty of the Western Ghats.',
      image: trekWonder
    }
  ];

  return (
    <div ref={containerRef} className="w-full bg-[#141413] min-h-screen text-[#E4E0D9] font-sans selection:bg-[#9C8A71] selection:text-[#141413] overflow-x-hidden">
      
      {/* Cinematic Hero Section */}
      <section className="relative w-full h-[110vh] overflow-hidden">
        <motion.div style={{ y: heroY }} className="absolute inset-0 w-full h-full">
          <motion.img 
            initial={{ scale: 1.15 }}
            animate={{ scale: 1 }}
            transition={{ duration: 2.5, ease: [0.16, 1, 0.3, 1] }}
            src={page2} 
            alt="Mist mornings" 
            className="w-full h-full object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#141413] via-transparent to-transparent"></div>
        </motion.div>

        <motion.div 
          style={{ opacity: heroOpacity }}
          className="absolute inset-0 flex flex-col justify-end items-center text-center pb-32 px-6"
        >
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-[10px] md:text-[11px] tracking-[0.4em] uppercase font-medium mb-8 text-[#9C8A71]">
              The Encounters
            </p>
            <h1 className="font-heading text-6xl md:text-8xl lg:text-[10rem] font-light leading-[0.9] tracking-[-0.03em] mb-8 text-white">
              Rhythm of <br/><i className="font-serif italic font-light text-[#9C8A71]">nature.</i>
            </h1>
          </motion.div>
        </motion.div>
      </section>

      {/* Intro Text - Editorial Statement */}
      <section className="py-32 md:py-48 px-6 md:px-16 lg:px-[120px] max-w-[1400px] mx-auto text-center relative z-10">
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
          Experiences are not scheduled activities, but mindful engagements with the environment. <br/><span className="font-serif italic text-[#9C8A71] mt-4 block">Every moment is an invitation to slow down.</span>
        </motion.h2>
      </section>

      {/* Editorial Layout Experiences */}
      <section className="pb-32 px-6 md:px-16 lg:px-[120px] max-w-[1600px] mx-auto">
        {experiences.map((exp, index) => (
          <div key={exp.id} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-16 lg:gap-24 items-center mb-32 lg:mb-48 last:mb-0`}>
            
            <motion.div 
              initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="w-full lg:w-[60%] aspect-[4/5] lg:aspect-[16/10] relative group"
            >
              <div className="w-full h-full overflow-hidden">
                <motion.img 
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                  src={exp.image} 
                  alt={exp.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative block */}
              <div className={`absolute top-1/2 -translate-y-1/2 w-[110%] h-[80%] border border-[#9C8A71]/20 -z-10 pointer-events-none ${index % 2 === 0 ? '-left-[5%]' : '-right-[5%]'}`}></div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="w-full lg:w-[40%] flex flex-col items-start"
            >
              <span className="text-[10px] tracking-[0.3em] uppercase font-medium text-[#9C8A71] mb-8 flex items-center gap-4">
                <span className="w-8 h-[1px] bg-[#9C8A71]"></span>
                No. {exp.id}
              </span>
              <h3 className="font-heading text-5xl md:text-6xl mb-10 leading-[1] tracking-tight">
                {exp.title} <br/><span className="font-serif italic font-light text-[#9C8A71]">{exp.subtitle}</span>
              </h3>
              <p className="text-[15px] leading-[2] text-[#A3A19B] font-light mb-12">
                {exp.desc}
              </p>
              <button className="group flex items-center gap-4 text-[10px] tracking-[0.2em] uppercase font-medium text-white transition-all">
                <span className="pb-1 border-b border-[#9C8A71]/30 group-hover:border-[#9C8A71] transition-colors">Discover More</span>
                <ArrowRight size={14} className="text-[#9C8A71] group-hover:translate-x-2 transition-transform duration-500" />
              </button>
            </motion.div>

          </div>
        ))}
      </section>

      {/* Secondary Experiences - Masonry Grid Style */}
      <section className="py-32 md:py-48 bg-[#1A1A19]">
        <div className="max-w-[1600px] mx-auto px-6 md:px-16 lg:px-[120px]">
          
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
            <h2 className="font-heading text-5xl md:text-7xl leading-[1] tracking-tight">
              Quiet <span className="font-serif italic font-light text-[#9C8A71]">Pursuits</span>
            </h2>
            <p className="text-[14px] leading-[2] font-light max-w-sm text-[#A3A19B]">
              Discover the art of doing nothing, surrounded by the wisdom of the ancient forest.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12">
            {[
              { title: "Stargazing", img: page5cWonder, colSpan: "md:col-span-5", aspect: "aspect-[4/5]" },
              { title: "Tea by the hills", img: page5b, colSpan: "md:col-span-7", aspect: "aspect-[16/10]" },
              { title: "Silence Retreats", img: page3, colSpan: "md:col-span-12", aspect: "aspect-[21/9]" }
            ].map((item, idx) => (
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 1.2, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                key={idx} 
                className={`${item.colSpan} flex flex-col group cursor-pointer`}
              >
                <div className={`w-full ${item.aspect} overflow-hidden mb-8`}>
                  <motion.img 
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                    src={item.img} 
                    alt={item.title} 
                    className="w-full h-full object-cover" 
                  />
                </div>
                <h4 className="font-heading text-3xl md:text-4xl group-hover:text-[#9C8A71] transition-colors duration-500 tracking-tight">
                  {item.title}
                </h4>
              </motion.div>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
}
