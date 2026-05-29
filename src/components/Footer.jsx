import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-[#1A1A18] text-[#E9E8E1] pt-32 pb-12 px-8 md:px-16 lg:px-[120px]">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-8 mb-32">
        <div className="md:col-span-5 flex flex-col items-start">
          <Link to="/" className="flex flex-col mb-10 group">
            <span className="font-heading text-4xl tracking-widest text-[#E9E8E1] group-hover:opacity-80 transition-opacity">GREENSOUL</span>
            <span className="font-sans text-[10px] tracking-[0.45em] text-[#D4C3A3] mt-2 font-medium">ECOSTAY</span>
          </Link>
          <p className="text-[#E9E8E1]/60 text-[14px] leading-[2] max-w-sm mb-12">
            A conscious ecological retreat hidden in the Western Ghats.<br/>
            Where earth, mist, and silence converge.
          </p>
          <div className="flex gap-8 text-[11px] tracking-[0.2em] uppercase font-medium">
            <a href="#" className="text-[#E9E8E1] hover:text-[#D4C3A3] transition-colors">Instagram</a>
            <a href="#" className="text-[#E9E8E1] hover:text-[#D4C3A3] transition-colors">Facebook</a>
          </div>
        </div>

        <div className="md:col-span-3">
          <h4 className="text-[#D4C3A3] text-[10px] tracking-[0.3em] uppercase font-medium mb-10">Journeys</h4>
          <ul className="space-y-6 text-[#E9E8E1]/70 text-[14px] font-light">
            <li><Link to="/stay" className="hover:text-[#D4C3A3] transition-colors">The Sanctuaries</Link></li>
            <li><Link to="/dining" className="hover:text-[#D4C3A3] transition-colors">Dining Experience</Link></li>
            <li><Link to="/experiences" className="hover:text-[#D4C3A3] transition-colors">Encounters</Link></li>
            <li><Link to="/architecture" className="hover:text-[#D4C3A3] transition-colors">Architecture</Link></li>
            <li><Link to="/gallery" className="hover:text-[#D4C3A3] transition-colors">Gallery</Link></li>
            <li><Link to="/our-story" className="hover:text-[#D4C3A3] transition-colors">Our Story</Link></li>
          </ul>
        </div>

        <div className="md:col-span-4">
          <h4 className="text-[#D4C3A3] text-[10px] tracking-[0.3em] uppercase font-medium mb-10">Sanctuary</h4>
          <ul className="space-y-6 text-[#E9E8E1]/70 text-[14px] font-light">
            <li>Mist Valley Estate,<br/>Chikmagalur, Karnataka</li>
            <li className="pt-4">
              <a href="mailto:reservations@greensoul.com" className="hover:text-[#D4C3A3] transition-colors block mb-2">reservations@greensoul.com</a>
              <a href="tel:+919876543210" className="hover:text-[#D4C3A3] transition-colors">+91 98765 43210</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto border-t border-[#E9E8E1]/10 pt-10 flex flex-col md:flex-row justify-between items-center text-[11px] tracking-[0.1em] text-[#E9E8E1]/40 uppercase font-medium">
        <p>&copy; {new Date().getFullYear()} GreenSoul Ecostay. All Rights Reserved.</p>
        <div className="flex gap-8 mt-6 md:mt-0">
          <a href="#" className="hover:text-[#E9E8E1] transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-[#E9E8E1] transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
