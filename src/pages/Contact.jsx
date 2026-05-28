import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MapPin, Phone, Mail } from 'lucide-react';

export default function Contact() {
  return (
    <div className="w-full bg-[#E9E8E1] min-h-screen text-[#2c312a]">
      {/* Cinematic Hero Section */}
      <section className="relative w-full h-[60vh] md:h-[70vh] lg:h-[80vh] overflow-hidden">
        <img 
          src="/images/hero_landscape.jpg" 
          alt="Misty landscape" 
          className="absolute inset-0 w-full h-full object-cover scale-105 animate-slow-zoom"
        />
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white pt-20">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-[10px] md:text-[12px] tracking-[0.4em] uppercase font-medium mb-6 opacity-90"
          >
            Connect With Us
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="font-heading text-5xl md:text-6xl lg:text-[6.5rem] font-normal leading-[1.1] tracking-[-0.02em]"
          >
            Begin your journey.
          </motion.h1>
        </div>
      </section>

      {/* Content Container */}
      <section className="max-w-[1400px] mx-auto px-8 md:px-16 lg:px-[120px] py-24 lg:py-32 relative z-10 -mt-10 lg:-mt-20">
        <div className="bg-[#F5F4EF] w-full p-10 md:p-16 lg:p-24 shadow-2xl shadow-black/5 flex flex-col lg:flex-row gap-20 lg:gap-32">
          
          {/* Left: Contact Information */}
          <div className="w-full lg:w-[35%] flex flex-col gap-12 lg:gap-16">
            <div className="w-12 h-[1px] bg-[#2c312a]/30 mb-2"></div>
            
            <div>
              <h3 className="text-[10px] tracking-[0.2em] uppercase font-medium text-[#5a5a52] mb-5 flex items-center gap-3">
                <MapPin size={14} /> Location
              </h3>
              <p className="font-heading text-[1.3rem] opacity-90 leading-[1.7] text-[#3a3a32]">
                GreenSoul Ecostay,<br />
                Mist Valley Estate,<br />
                Chikmagalur, Karnataka 577101
              </p>
            </div>
            
            <div>
              <h3 className="text-[10px] tracking-[0.2em] uppercase font-medium text-[#5a5a52] mb-5 flex items-center gap-3">
                <Phone size={14} /> Reservations
              </h3>
              <p className="font-heading text-[1.3rem] opacity-90 leading-[1.7] text-[#3a3a32]">
                +91 98765 43210<br />
                reservations@greensoul.com
              </p>
            </div>
            
            <div>
              <h3 className="text-[10px] tracking-[0.2em] uppercase font-medium text-[#5a5a52] mb-5">Social</h3>
              <div className="flex flex-col gap-3 font-heading text-[1.3rem] opacity-90 text-[#3a3a32]">
                <a href="#" className="hover:opacity-60 hover:translate-x-1 transition-all w-fit">Instagram</a>
                <a href="#" className="hover:opacity-60 hover:translate-x-1 transition-all w-fit">Facebook</a>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="w-full lg:w-[65%]">
            <form className="flex flex-col gap-14">
              <div className="flex flex-col md:flex-row gap-12">
                <div className="w-full md:w-1/2 flex flex-col gap-3 relative group">
                  <label htmlFor="firstName" className="text-[10px] tracking-[0.2em] uppercase font-medium text-[#5a5a52] ml-1 transition-colors group-focus-within:text-[#2c312a]">First Name</label>
                  <input type="text" id="firstName" className="bg-transparent border-b border-[#2c312a]/20 pb-3 outline-none focus:border-[#2c312a] transition-colors font-heading text-xl px-1" />
                </div>
                <div className="w-full md:w-1/2 flex flex-col gap-3 relative group">
                  <label htmlFor="lastName" className="text-[10px] tracking-[0.2em] uppercase font-medium text-[#5a5a52] ml-1 transition-colors group-focus-within:text-[#2c312a]">Last Name</label>
                  <input type="text" id="lastName" className="bg-transparent border-b border-[#2c312a]/20 pb-3 outline-none focus:border-[#2c312a] transition-colors font-heading text-xl px-1" />
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row gap-12">
                <div className="w-full md:w-1/2 flex flex-col gap-3 relative group">
                  <label htmlFor="email" className="text-[10px] tracking-[0.2em] uppercase font-medium text-[#5a5a52] ml-1 transition-colors group-focus-within:text-[#2c312a]">Email Address</label>
                  <input type="email" id="email" className="bg-transparent border-b border-[#2c312a]/20 pb-3 outline-none focus:border-[#2c312a] transition-colors font-heading text-xl px-1" />
                </div>
                <div className="w-full md:w-1/2 flex flex-col gap-3 relative group">
                  <label htmlFor="phone" className="text-[10px] tracking-[0.2em] uppercase font-medium text-[#5a5a52] ml-1 transition-colors group-focus-within:text-[#2c312a]">Phone Number</label>
                  <input type="tel" id="phone" className="bg-transparent border-b border-[#2c312a]/20 pb-3 outline-none focus:border-[#2c312a] transition-colors font-heading text-xl px-1" />
                </div>
              </div>

              <div className="flex flex-col gap-3 relative group">
                <label htmlFor="message" className="text-[10px] tracking-[0.2em] uppercase font-medium text-[#5a5a52] ml-1 transition-colors group-focus-within:text-[#2c312a]">Your Message</label>
                <textarea id="message" rows="4" className="bg-transparent border-b border-[#2c312a]/20 pb-3 outline-none focus:border-[#2c312a] transition-colors font-heading text-xl resize-none px-1"></textarea>
              </div>

              <div className="pt-8">
                <button type="button" className="border border-[#2c312a]/40 px-10 py-5 text-[10px] tracking-[0.25em] uppercase font-medium hover:bg-[#2c312a] hover:text-[#E9E8E1] transition-all duration-500 flex items-center gap-6 group w-fit">
                  Send Message
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
