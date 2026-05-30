import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full bg-[#0f241b] text-[#E4E0D9] pt-10 pb-6 md:pt-12 md:pb-6 px-6 md:px-16 lg:px-[120px] font-sans selection:bg-[#9C8A71] selection:text-[#0f241b]">
      
      {/* Top Row */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 md:mb-10">
        {/* Left: Logo & Tagline */}
        <div className="mb-8 md:mb-0">
          <Link to="/" className="flex flex-col group mb-4 w-fit">
            <svg className="w-[28px] h-[28px] md:w-[32px] md:h-[32px] mb-2 text-[#9C8A71] group-hover:opacity-80 transition-opacity" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22V2" />
              <path d="M12 11C9.5 8 12 2 12 2C12 2 14.5 8 12 11Z" />
              <path d="M12 12L6 6" />
              <path d="M12 13C8.5 12 6 6 6 6C6 6 10 7 12 10.5Z" />
              <path d="M12 12L18 6" />
              <path d="M12 13C15.5 12 18 6 18 6C18 6 14 7 12 10.5Z" />
              <path d="M12 16L4 12" />
              <path d="M12 17C7.5 16.5 4 12 4 12C4 12 8 11.5 12 14.5Z" />
              <path d="M12 16L20 12" />
              <path d="M12 17C16.5 16.5 20 12 20 12C20 12 16 11.5 12 14.5Z" />
            </svg>
            <div className="flex flex-col">
              <span className="font-heading text-xl tracking-[0.2em] font-light leading-none mb-1">GREENSOUL</span>
              <span className="font-sans text-[8px] tracking-[0.45em] opacity-60 font-semibold uppercase">Ecostay</span>
            </div>
          </Link>
          <p className="font-serif italic text-lg md:text-xl font-light text-[#9C8A71]">
            Luxury In Its Natural Form
          </p>
        </div>

        {/* Right: Book Your Escape */}
        <div className="md:pb-1">
          <Link to="/book" className="group flex items-center gap-4 text-[10px] tracking-[0.2em] uppercase font-medium text-[#E4E0D9] transition-all">
            <span className="pb-1 border-b border-[#9C8A71]/30 group-hover:border-[#9C8A71] transition-colors duration-500">Book Your Escape</span>
            <ArrowRight size={14} strokeWidth={1} className="text-[#9C8A71] group-hover:translate-x-2 transition-transform duration-500" />
          </Link>
        </div>
      </div>

      {/* Middle Row: Navigation */}
      <div className="w-full border-t border-b border-[#E4E0D9]/10 py-6 md:py-6 mb-8 md:mb-10">
        <ul className="flex flex-wrap justify-start md:justify-center gap-x-8 gap-y-6 md:gap-x-16">
          {['Stay', 'Dining', 'Experiences', 'Our Story', 'Gallery'].map((item) => (
            <li key={item}>
              <Link 
                to={`/${item.toLowerCase().replace(' ', '-')}`}
                className="text-[10px] md:text-[11px] tracking-[0.25em] uppercase font-medium text-[#E4E0D9]/60 hover:text-white transition-colors duration-300 relative group py-2 inline-block"
              >
                {item}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-[#9C8A71] group-hover:w-full transition-all duration-500 ease-out"></span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Bottom Row */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-12 lg:gap-0">
        
        {/* Left: Contact Info */}
        <div className="flex flex-col sm:flex-row gap-8 sm:gap-16">
          <div className="flex flex-col gap-3">
            <span className="text-[9px] tracking-[0.2em] uppercase text-[#9C8A71] font-medium">Inquiries</span>
            <a href="mailto:reservations@greensoul.com" className="text-[12px] md:text-[13px] font-light tracking-wider text-[#E4E0D9]/80 hover:text-white transition-colors group w-fit">
              <span className="relative">
                reservations@greensoul.com
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white group-hover:w-full transition-all duration-500 ease-out"></span>
              </span>
            </a>
          </div>
          <div className="flex flex-col gap-3">
            <span className="text-[9px] tracking-[0.2em] uppercase text-[#9C8A71] font-medium">Direct Line</span>
            <a href="tel:+919876543210" className="text-[12px] md:text-[13px] font-light tracking-wider text-[#E4E0D9]/80 hover:text-white transition-colors group w-fit">
              <span className="relative">
                +91 98765 43210
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white group-hover:w-full transition-all duration-500 ease-out"></span>
              </span>
            </a>
          </div>
          <div className="flex flex-col gap-3">
            <span className="text-[9px] tracking-[0.2em] uppercase text-[#9C8A71] font-medium">Location</span>
            <span className="text-[12px] md:text-[13px] font-light tracking-wider text-[#E4E0D9]/80">
              Mist Valley Estate, Chikmagalur
            </span>
          </div>
        </div>

        {/* Center: Socials */}
        <div className="flex gap-8 lg:ml-8">
          <a href="#" className="text-[10px] tracking-[0.2em] uppercase font-medium text-[#E4E0D9]/60 hover:text-white transition-colors">Instagram</a>
          <a href="#" className="text-[10px] tracking-[0.2em] uppercase font-medium text-[#E4E0D9]/60 hover:text-white transition-colors">Facebook</a>
        </div>

        {/* Right: Legal */}
        <div className="flex flex-col items-start lg:items-end gap-3 text-[9px] tracking-[0.15em] uppercase text-[#E4E0D9]/40 font-medium lg:pb-1">
          <span>&copy; {new Date().getFullYear()} Greensoul</span>
          <Link to="/" className="hover:text-[#E4E0D9]/80 transition-colors">Privacy Policy</Link>
        </div>

      </div>

    </footer>
  );
}
