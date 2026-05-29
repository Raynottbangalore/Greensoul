import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { LayoutDashboard, CalendarDays, Map, Image as ImageIcon, Compass, Building, Star, Settings, LogOut } from 'lucide-react';
import { auth } from '../firebase';
import { signOut } from 'firebase/auth';
import toast from 'react-hot-toast';

export default function Sidebar() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      toast.success("Admin logged out");
      navigate('/login');
    } catch (error) {
      toast.error("Logout failed");
    }
  };

  const navItems = [
    { name: 'Dashboard', path: '/admin/dashboard', icon: <LayoutDashboard size={18} /> },
    { name: 'Bookings', path: '/admin/bookings', icon: <CalendarDays size={18} /> },
    { name: 'Gallery', path: '/admin/gallery', icon: <ImageIcon size={18} /> },
  ];

  return (
    <div className="w-64 h-screen bg-[#222A1F] text-[#E9E8E1] flex flex-col fixed border-r border-[#E9E8E1]/10">
      <div className="p-8 pt-12 flex flex-col items-center justify-center border-b border-[#E9E8E1]/10 pb-12">
        <div className="flex flex-col items-center group cursor-pointer">
          <svg className="w-[34px] h-[34px] mb-2.5 opacity-90 group-hover:opacity-100 transition-opacity" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round">
            {/* Main Stem */}
            <path d="M12 22V2" />
            
            {/* Top Leaf */}
            <path d="M12 11C9.5 8 12 2 12 2C12 2 14.5 8 12 11Z" />
            
            {/* Upper Left Leaf & Vein */}
            <path d="M12 12L6 6" />
            <path d="M12 13C8.5 12 6 6 6 6C6 6 10 7 12 10.5Z" />
            
            {/* Upper Right Leaf & Vein */}
            <path d="M12 12L18 6" />
            <path d="M12 13C15.5 12 18 6 18 6C18 6 14 7 12 10.5Z" />
            
            {/* Lower Left Leaf & Vein */}
            <path d="M12 16L4 12" />
            <path d="M12 17C7.5 16.5 4 12 4 12C4 12 8 11.5 12 14.5Z" />
            
            {/* Lower Right Leaf & Vein */}
            <path d="M12 16L20 12" />
            <path d="M12 17C16.5 16.5 20 12 20 12C20 12 16 11.5 12 14.5Z" />
          </svg>
          <span className="font-heading text-[18px] tracking-[0.2em] font-normal leading-none ml-1 group-hover:opacity-80 transition-opacity text-[#E9E8E1]">GREENSOUL</span>
          <span className="font-sans text-[8px] tracking-[0.45em] mt-2 opacity-70 font-medium ml-1 text-[#E9E8E1]">ADMIN</span>
        </div>
      </div>
      
      <div className="flex-1 overflow-y-auto py-8 px-4 space-y-2">
        {navItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) => 
              `flex items-center space-x-3 px-6 py-3 rounded-none text-[10px] tracking-[0.2em] uppercase transition-all duration-300 ${
                isActive 
                  ? 'bg-[#E9E8E1] text-[#222A1F] font-medium' 
                  : 'text-[#E9E8E1]/60 hover:text-[#E9E8E1] hover:bg-[#E9E8E1]/5'
              }`
            }
          >
            {item.icon}
            <span>{item.name}</span>
          </NavLink>
        ))}
      </div>

      <div className="p-4 border-t border-[#E9E8E1]/10">
        <button 
          onClick={handleLogout}
          className="flex items-center space-x-3 px-6 py-3 w-full rounded-none text-[10px] tracking-[0.2em] uppercase text-[#E9E8E1]/60 hover:text-[#E9E8E1] hover:bg-[#E9E8E1]/5 transition-all duration-300"
        >
          <LogOut size={16} strokeWidth={1.5} />
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
}
