import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function Contact() {
  return (
    <div className="w-full bg-[#E5E1D6] min-h-screen text-[#2c312a]">
      {/* Cinematic Hero Section */}
      <section className="relative w-full h-[70vh] md:h-[80vh] overflow-hidden">
        <motion.img 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          src="/images/gallery_resort_1780050156435.png" 
          alt="Misty landscape" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-[#E9E8E1] px-6">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-[10px] md:text-[12px] tracking-[0.4em] uppercase font-medium mb-6 opacity-90 text-[#D4C3A3]"
          >
            Connect With Us
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="font-heading text-5xl md:text-7xl lg:text-[7.5rem] font-normal leading-[1.05] tracking-[-0.02em]"
          >
            Begin your journey.
          </motion.h1>
        </div>
      </section>

      {/* Content Container */}
      <section className="max-w-[1400px] mx-auto px-8 md:px-16 lg:px-[120px] py-24 lg:py-32 relative z-10">
        <div className="flex flex-col lg:flex-row gap-20 lg:gap-32">
          
          {/* Left: Contact Information */}
          <div className="w-full lg:w-[40%] flex flex-col gap-16">
            <div className="w-12 h-[1px] bg-[#2c312a]/30"></div>
            
            <div className="flex flex-col gap-12">
              <div className="group">
                <h3 className="text-[10px] tracking-[0.3em] uppercase font-medium text-[#9C8A71] mb-4">
                  The Sanctuary
                </h3>
                <p className="font-heading text-2xl lg:text-3xl leading-[1.6] text-[#3a3a32] group-hover:text-[#9C8A71] transition-colors">
                  GreenSoul Ecostay,<br />
                  Mist Valley Estate,<br />
                  Chikmagalur, Karnataka 577101
                </p>
              </div>
              
              <div className="group">
                <h3 className="text-[10px] tracking-[0.3em] uppercase font-medium text-[#9C8A71] mb-4">
                  Reservations
                </h3>
                <p className="font-heading text-2xl lg:text-3xl leading-[1.6] text-[#3a3a32] group-hover:text-[#9C8A71] transition-colors">
                  +91 98765 43210<br />
                  reservations@greensoul.com
                </p>
              </div>
              
              <div>
                <h3 className="text-[10px] tracking-[0.3em] uppercase font-medium text-[#9C8A71] mb-4">Follow our journey</h3>
                <div className="flex gap-8 font-heading text-xl text-[#3a3a32]">
                  <a href="#" className="hover:text-[#9C8A71] transition-colors pb-1 border-b border-transparent hover:border-[#9C8A71]">Instagram</a>
                  <a href="#" className="hover:text-[#9C8A71] transition-colors pb-1 border-b border-transparent hover:border-[#9C8A71]">Facebook</a>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="w-full lg:w-[60%] bg-[#F0EFEA] p-12 md:p-16 lg:p-20 border border-[#2c312a]/5 shadow-xl">
            <h2 className="font-heading text-4xl mb-12">Inquire about a stay</h2>
            <form className="flex flex-col gap-12">
              <div className="flex flex-col md:flex-row gap-10">
                <div className="w-full md:w-1/2 flex flex-col gap-4 group">
                  <label htmlFor="firstName" className="text-[10px] tracking-[0.2em] uppercase font-medium text-[#9C8A71] transition-colors group-focus-within:text-[#2c312a]">First Name</label>
                  <input type="text" id="firstName" className="bg-transparent border-b border-[#2c312a]/20 pb-3 outline-none focus:border-[#2c312a] transition-colors font-heading text-xl" />
                </div>
                <div className="w-full md:w-1/2 flex flex-col gap-4 group">
                  <label htmlFor="lastName" className="text-[10px] tracking-[0.2em] uppercase font-medium text-[#9C8A71] transition-colors group-focus-within:text-[#2c312a]">Last Name</label>
                  <input type="text" id="lastName" className="bg-transparent border-b border-[#2c312a]/20 pb-3 outline-none focus:border-[#2c312a] transition-colors font-heading text-xl" />
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row gap-10">
                <div className="w-full md:w-1/2 flex flex-col gap-4 group">
                  <label htmlFor="email" className="text-[10px] tracking-[0.2em] uppercase font-medium text-[#9C8A71] transition-colors group-focus-within:text-[#2c312a]">Email Address</label>
                  <input type="email" id="email" className="bg-transparent border-b border-[#2c312a]/20 pb-3 outline-none focus:border-[#2c312a] transition-colors font-heading text-xl" />
                </div>
                <div className="w-full md:w-1/2 flex flex-col gap-4 group">
                  <label htmlFor="phone" className="text-[10px] tracking-[0.2em] uppercase font-medium text-[#9C8A71] transition-colors group-focus-within:text-[#2c312a]">Phone Number</label>
                  <input type="tel" id="phone" className="bg-transparent border-b border-[#2c312a]/20 pb-3 outline-none focus:border-[#2c312a] transition-colors font-heading text-xl" />
                </div>
              </div>

              <div className="flex flex-col gap-4 group">
                <label htmlFor="message" className="text-[10px] tracking-[0.2em] uppercase font-medium text-[#9C8A71] transition-colors group-focus-within:text-[#2c312a]">Your Message</label>
                <textarea id="message" rows="3" className="bg-transparent border-b border-[#2c312a]/20 pb-3 outline-none focus:border-[#2c312a] transition-colors font-heading text-xl resize-none"></textarea>
              </div>

              <div className="pt-8">
                <button type="button" className="border border-[#2c312a]/40 px-12 py-5 text-[10px] tracking-[0.25em] uppercase font-medium hover:bg-[#2c312a] hover:text-[#E9E8E1] transition-all duration-500 flex items-center gap-6 group w-fit">
                  Send Request
                  <ArrowRight size={14} strokeWidth={1} className="group-hover:translate-x-2 transition-transform duration-500" />
                </button>
              </div>
            </form>
          </div>
          
        </div>
      </section>
    </div>
  );
}
