import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { collection, query, getDocs, orderBy, limit, getCountFromServer } from 'firebase/firestore';
import { db } from '../firebase';
import { useAuth } from '../context/AuthContext';
import { CalendarDays, Map, Image as ImageIcon, Compass } from 'lucide-react';

export default function Dashboard() {
  const { currentUser } = useAuth();
  const [stats, setStats] = useState({ bookings: 0, gallery: 12 });
  const [recentInquiries, setRecentInquiries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const bookingsRef = collection(db, 'bookings');
        
        // Get actual total count
        const countSnapshot = await getCountFromServer(bookingsRef);
        const totalBookings = countSnapshot.data().count;

        // Get 5 most recent for the table
        const q = query(bookingsRef, orderBy('createdAt', 'desc'), limit(5));
        const snapshot = await getDocs(q);
        
        const inquiries = [];
        snapshot.forEach((doc) => {
          inquiries.push({ id: doc.id, ...doc.data() });
        });
        
        const galleryRef = collection(db, 'gallery');
        const galleryCountSnapshot = await getCountFromServer(galleryRef);
        const totalGallery = galleryCountSnapshot.data().count;
        
        setStats({
          bookings: totalBookings, 
          gallery: totalGallery
        });
        
        setRecentInquiries(inquiries);
      } catch (error) {
        console.error("Error fetching admin data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDashboardData();
  }, []);

  const statCards = [
    { title: 'Total Bookings', value: stats.bookings, icon: <CalendarDays size={24} />, color: 'text-blue-400' }
  ];

  if (loading) {
    return <div className="animate-pulse flex space-x-4"><div className="flex-1 space-y-6 py-1"><div className="h-2 bg-white/10 rounded"></div></div></div>;
  }

  return (
    <div className="space-y-10">
      {/* Welcome Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-[#D4C3A3] text-[10px] tracking-[0.3em] uppercase font-medium mb-4">Welcome Back</p>
        <h1 className="font-heading text-4xl lg:text-5xl tracking-[-0.02em] text-[#E9E8E1]">Admin Dashboard</h1>
      </motion.div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {statCards.map((card, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-[#2A3326] border border-[#E9E8E1]/10 p-8 rounded-none shadow-sm"
          >
            <div className="flex justify-between items-start mb-6">
              <div className={`p-3 rounded-none bg-[#E9E8E1]/10 text-[#D4C3A3]`}>
                {card.icon}
              </div>
              <span className="text-4xl font-heading text-[#E9E8E1]">{card.value}</span>
            </div>
            <p className="text-[#E9E8E1]/60 text-[10px] tracking-[0.2em] uppercase font-medium">{card.title}</p>
          </motion.div>
        ))}
      </div>

      {/* Recent Inquiries Table */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="bg-[#2A3326] border border-[#E9E8E1]/10 rounded-none shadow-sm overflow-hidden"
      >
        <div className="p-8 border-b border-[#E9E8E1]/10">
          <h2 className="font-heading text-2xl lg:text-3xl tracking-wide text-[#E9E8E1]">Recent Inquiries</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-[#E9E8E1]/5 text-[10px] tracking-[0.2em] uppercase font-medium text-[#E9E8E1]/60 border-b border-[#E9E8E1]/10">
                <th className="p-6 font-medium">Guest Name</th>
                <th className="p-6 font-medium">Stay Zone</th>
                <th className="p-6 font-medium">Check In</th>
                <th className="p-6 font-medium">Status</th>
              </tr>
            </thead>
            <tbody>
              {recentInquiries.length === 0 ? (
                <tr>
                  <td colSpan="4" className="p-8 text-center text-[#E9E8E1]/60">No recent inquiries found.</td>
                </tr>
              ) : (
                recentInquiries.map((inquiry) => (
                  <tr key={inquiry.id} className="border-b border-[#E9E8E1]/5 hover:bg-[#E9E8E1]/10 transition-colors">
                    <td className="p-6">
                      <p className="font-medium text-[#E9E8E1] text-[15px]">{inquiry.fullName}</p>
                      <p className="text-[11px] text-[#E9E8E1]/60 mt-1">{inquiry.email}</p>
                    </td>
                    <td className="p-6 text-[13px] text-[#E9E8E1]/70">{inquiry.stayZone}</td>
                    <td className="p-6 text-[13px] text-[#E9E8E1]/70">{inquiry.checkIn}</td>
                    <td className="p-6">
                      <span className={`px-4 py-1.5 rounded-none border text-[9px] uppercase tracking-widest ${
                        inquiry.status === 'pending' ? 'bg-[#D4C3A3]/10 text-[#D4C3A3] border-[#D4C3A3]/30' : 
                        inquiry.status === 'confirmed' ? 'bg-[#E9E8E1]/10 text-[#E9E8E1] border-[#E9E8E1]/30' : 
                        'bg-gray-500/10 text-gray-400 border-gray-500/30'
                      }`}>
                        {inquiry.status || 'Pending'}
                      </span>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
  );
}
