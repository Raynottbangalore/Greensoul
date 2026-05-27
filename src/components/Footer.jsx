import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-[#0d1b14] text-brand-white pt-24 pb-12 px-6 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16 mb-24">
        <div>
          <div className="flex flex-col mb-8">
            <span className="font-heading text-3xl tracking-widest text-brand-white">GREENSOUL</span>
            <span className="font-body text-xs tracking-[0.3em] text-brand-gold mt-1">ECOSTAY</span>
          </div>
          <p className="text-brand-white/50 text-sm leading-relaxed max-w-xs mb-8">
            Luxury In Its Natural Form.<br/>
            Rainforest Eco Retreat In Sakleshpur.<br/>
            Earth • Mist • Monsoon • Slow Living
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-brand-white hover:text-brand-gold transition-colors">Instagram</a>
            <a href="#" className="text-brand-white hover:text-brand-gold transition-colors">Facebook</a>
          </div>
        </div>

        <div>
          <h4 className="text-brand-gold text-xs tracking-[0.2em] uppercase mb-8">Navigation</h4>
          <ul className="space-y-4 text-brand-white/70 text-sm">
            <li><Link to="/stay" className="hover:text-brand-gold transition-colors">The Sanctuaries</Link></li>
            <li><Link to="/dining" className="hover:text-brand-gold transition-colors">Dining Experience</Link></li>
            <li><Link to="/experiences" className="hover:text-brand-gold transition-colors">Experiences</Link></li>
            <li><Link to="/our-story" className="hover:text-brand-gold transition-colors">Brand Story</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-brand-gold text-xs tracking-[0.2em] uppercase mb-8">Contact</h4>
          <ul className="space-y-4 text-brand-white/70 text-sm">
            <li>Sakleshpur, Western Ghats</li>
            <li>Karnataka, India</li>
            <li className="pt-4"><a href="mailto:escape@greensoulecostay.com" className="hover:text-brand-gold transition-colors">escape@greensoulecostay.com</a></li>
            <li><a href="tel:+910000000000" className="hover:text-brand-gold transition-colors">+91 00000 00000</a></li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto border-t border-brand-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-brand-white/30">
        <p>&copy; {new Date().getFullYear()} GreenSoul Ecostay. All Rights Reserved.</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-brand-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-brand-white transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
