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
    { name: 'Stay Zones', path: '/admin/stay-zones', icon: <Map size={18} /> },
    { name: 'Gallery', path: '/admin/gallery', icon: <ImageIcon size={18} /> },
    { name: 'Experiences', path: '/admin/experiences', icon: <Compass size={18} /> },
    { name: 'Settings', path: '/admin/settings', icon: <Settings size={18} /> },
  ];

  return (
    <div className="w-64 h-screen bg-[#222620] text-[#E9E8E1] flex flex-col fixed border-r border-white/5">
      <div className="p-8 flex items-center justify-center border-b border-white/5">
        <div className="flex flex-col items-center">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="mb-2 text-[#D4AF37]">
            <path d="M12 2L12 22" />
            <path d="M12 6C16.5 6.5 20 11 20 11C20 11 16 12.5 12 9.5Z" />
            <path d="M12 6C7.5 6.5 4 11 4 11C4 11 8 12.5 12 9.5Z" />
            <path d="M12 16L4 12" />
            <path d="M12 17C7.5 16.5 4 12 4 12C4 12 8 11.5 12 14.5Z" />
            <path d="M12 16L20 12" />
            <path d="M12 17C16.5 16.5 20 12 20 12C20 12 16 11.5 12 14.5Z" />
          </svg>
          <span className="font-heading text-lg tracking-[0.2em] uppercase">Admin</span>
        </div>
      </div>
      
      <div className="flex-1 overflow-y-auto py-6 px-4 space-y-2">
        {navItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) => 
              `flex items-center space-x-3 px-4 py-3 rounded-lg text-xs tracking-widest uppercase transition-all duration-300 ${
                isActive 
                  ? 'bg-[#D4AF37]/10 text-[#D4AF37] font-medium' 
                  : 'text-white/50 hover:text-[#E9E8E1] hover:bg-white/5'
              }`
            }
          >
            {item.icon}
            <span>{item.name}</span>
          </NavLink>
        ))}
      </div>

      <div className="p-4 border-t border-white/5">
        <button 
          onClick={handleLogout}
          className="flex items-center space-x-3 px-4 py-3 w-full rounded-lg text-xs tracking-widest uppercase text-white/50 hover:text-red-400 hover:bg-white/5 transition-all duration-300"
        >
          <LogOut size={18} />
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
}
