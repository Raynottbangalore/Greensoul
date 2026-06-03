import React, { useRef } from 'react';
import LazyImage from '../components/LazyImage';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { page3 } from '../greenhousefiles';

export default function Contact() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const heroY = useTransform(scrollYProgress, [0, 0.2], [0, 100]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);

  return (
    <div ref={containerRef} className="w-full bg-[#F3EEE7] min-h-screen text-[#2c312a] font-sans selection:bg-[#8B7C6E] selection:text-[#F3EEE7]">
      
      {/* Cinematic Hero Section */}
      <section className="relative w-full h-[85vh] overflow-hidden bg-[#2c312a]">
        <motion.div style={{ y: heroY }} className="absolute inset-0 w-full h-full">
          <LazyImage 
            initial={{ scale: 1.15 }}
            animate={{ scale: 1 }}
            transition={{ duration: 2.5, ease: [0.16, 1, 0.3, 1] }}
            src={page3} 
            alt="Misty landscape" 
            className="w-full h-full object-cover object-bottom"
          />
        </motion.div>

        <motion.div 
          style={{ opacity: heroOpacity }}
          className="absolute inset-0 flex flex-col justify-end items-center text-center pb-24 px-6 md:px-16"
        >
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-[10px] md:text-[11px] tracking-[0.4em] uppercase font-medium mb-8 text-[#8B7C6E]">
              Connect With Us
            </p>
            <h1 className="font-heading text-6xl md:text-8xl lg:text-[9rem] font-light leading-[0.9] tracking-[-0.03em] mb-4 text-[#F3EEE7]">
              Begin your <span className="font-serif italic font-light text-[#8B7C6E]">journey.</span>
            </h1>
          </motion.div>
        </motion.div>
      </section>

      {/* Content Container - Split Layout */}
      <section className="max-w-[1600px] mx-auto px-6 md:px-16 lg:px-[120px] pb-32 pt-16 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          {/* Left: Contact Information - Editorial Typography */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="w-full lg:w-[35%] flex flex-col justify-between"
          >
            <div className="flex flex-col gap-16 lg:pt-10">
              <div className="group">
                <h3 className="text-[10px] tracking-[0.3em] uppercase font-medium text-[#8B7C6E] mb-6 flex items-center gap-4">
                  <span className="w-8 h-[1px] bg-[#8B7C6E]"></span>
                  The Sanctuary
                </h3>
                <p className="font-heading text-3xl lg:text-4xl leading-[1.4] text-[#2c312a] group-hover:text-[#8B7C6E] transition-colors duration-500">
                  GreenSoul Ecostay,<br />
                  Mist Valley Estate,<br />
                  Chikmagalur, Karnataka 577101
                </p>
              </div>
              
              <div className="group">
                <h3 className="text-[10px] tracking-[0.3em] uppercase font-medium text-[#8B7C6E] mb-6 flex items-center gap-4">
                  <span className="w-8 h-[1px] bg-[#8B7C6E]"></span>
                  Reservations
                </h3>
                <p className="font-heading text-3xl lg:text-4xl leading-[1.4] text-[#2c312a] group-hover:text-[#8B7C6E] transition-colors duration-500">
                  +91 98765 43210<br />
                  reservations@greensoul.com
                </p>
              </div>
              
              <div>
                <h3 className="text-[10px] tracking-[0.3em] uppercase font-medium text-[#8B7C6E] mb-6 flex items-center gap-4">
                  <span className="w-8 h-[1px] bg-[#8B7C6E]"></span>
                  Follow our journey
                </h3>
                <div className="flex gap-8 font-heading text-2xl text-[#2c312a]">
                  <a href="#" className="hover:text-[#8B7C6E] transition-colors pb-1 border-b border-transparent hover:border-[#8B7C6E]">Instagram</a>
                  <a href="#" className="hover:text-[#8B7C6E] transition-colors pb-1 border-b border-transparent hover:border-[#8B7C6E]">Facebook</a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Premium Inquiry Form */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="w-full lg:w-[65%] bg-white p-10 md:p-16 lg:p-24 shadow-sm"
          >
            <h2 className="font-heading text-4xl md:text-5xl mb-16 tracking-tight">
              Inquire about <span className="font-serif italic font-light text-[#8B7C6E]">a stay</span>
            </h2>
            <form className="flex flex-col gap-12">
              <div className="flex flex-col md:flex-row gap-12">
                <div className="w-full md:w-1/2 flex flex-col gap-3 group">
                  <label htmlFor="firstName" className="text-[9px] tracking-[0.25em] uppercase font-medium text-[#8B7C6E] transition-colors group-focus-within:text-[#2c312a]">First Name</label>
                  <input type="text" id="firstName" className="bg-transparent border-b border-[#2c312a]/20 pb-3 outline-none focus:border-[#2c312a] transition-colors font-heading text-xl md:text-2xl" />
                </div>
                <div className="w-full md:w-1/2 flex flex-col gap-3 group">
                  <label htmlFor="lastName" className="text-[9px] tracking-[0.25em] uppercase font-medium text-[#8B7C6E] transition-colors group-focus-within:text-[#2c312a]">Last Name</label>
                  <input type="text" id="lastName" className="bg-transparent border-b border-[#2c312a]/20 pb-3 outline-none focus:border-[#2c312a] transition-colors font-heading text-xl md:text-2xl" />
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row gap-12">
                <div className="w-full md:w-1/2 flex flex-col gap-3 group">
                  <label htmlFor="email" className="text-[9px] tracking-[0.25em] uppercase font-medium text-[#8B7C6E] transition-colors group-focus-within:text-[#2c312a]">Email Address</label>
                  <input type="email" id="email" className="bg-transparent border-b border-[#2c312a]/20 pb-3 outline-none focus:border-[#2c312a] transition-colors font-heading text-xl md:text-2xl" />
                </div>
                <div className="w-full md:w-1/2 flex flex-col gap-3 group">
                  <label htmlFor="phone" className="text-[9px] tracking-[0.25em] uppercase font-medium text-[#8B7C6E] transition-colors group-focus-within:text-[#2c312a]">Phone Number</label>
                  <input type="tel" id="phone" className="bg-transparent border-b border-[#2c312a]/20 pb-3 outline-none focus:border-[#2c312a] transition-colors font-heading text-xl md:text-2xl" />
                </div>
              </div>

              <div className="flex flex-col gap-3 group">
                <label htmlFor="message" className="text-[9px] tracking-[0.25em] uppercase font-medium text-[#8B7C6E] transition-colors group-focus-within:text-[#2c312a]">Your Message</label>
                <textarea id="message" rows="4" className="bg-transparent border-b border-[#2c312a]/20 pb-3 outline-none focus:border-[#2c312a] transition-colors font-heading text-xl md:text-2xl resize-none"></textarea>
              </div>

              <div className="pt-10">
                <button type="button" className="group flex items-center gap-6 text-[11px] tracking-[0.25em] uppercase font-medium text-[#2c312a] transition-all">
                  <span className="pb-1 border-b border-[#2c312a]/30 group-hover:border-[#2c312a] transition-colors">Send Request</span>
                  <ArrowRight size={16} strokeWidth={1.5} className="group-hover:translate-x-2 transition-transform duration-500" />
                </button>
              </div>
            </form>
          </motion.div>
          
        </div>
      </section>
    </div>
  );
}
