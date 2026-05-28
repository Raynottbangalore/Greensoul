import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { collection, query, getDocs, orderBy, limit } from 'firebase/firestore';
import { db } from '../firebase';
import { useAuth } from '../context/AuthContext';
import { CalendarDays, Map, Image as ImageIcon, Compass } from 'lucide-react';

export default function Dashboard() {
  const { currentUser } = useAuth();
  const [stats, setStats] = useState({ bookings: 0, zones: 3, gallery: 12, experiences: 4 });
  const [recentInquiries, setRecentInquiries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const bookingsRef = collection(db, 'bookings');
        const q = query(bookingsRef, orderBy('createdAt', 'desc'), limit(5));
        const snapshot = await getDocs(q);
        
        const inquiries = [];
        snapshot.forEach((doc) => {
          inquiries.push({ id: doc.id, ...doc.data() });
        });
        
        // Mocking total counts for demo, normally would aggregate
        setStats({
          bookings: snapshot.size > 0 ? snapshot.size * 3 : 0, 
          zones: 3,
          gallery: 24,
          experiences: 5
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
    { title: 'Total Bookings', value: stats.bookings, icon: <CalendarDays size={24} />, color: 'text-blue-400' },
    { title: 'Stay Zones', value: stats.zones, icon: <Map size={24} />, color: 'text-green-400' },
    { title: 'Gallery Uploads', value: stats.gallery, icon: <ImageIcon size={24} />, color: 'text-purple-400' },
    { title: 'Experiences', value: stats.experiences, icon: <Compass size={24} />, color: 'text-amber-400' },
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
        <p className="text-[#D4AF37] text-xs tracking-widest uppercase mb-2">Welcome Back</p>
        <h1 className="font-heading text-4xl tracking-wide text-white">Admin Dashboard</h1>
      </motion.div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {statCards.map((card, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white/5 border border-white/10 p-6 rounded-xl backdrop-blur-sm"
          >
            <div className="flex justify-between items-start mb-4">
              <div className={`p-3 rounded-lg bg-white/5 ${card.color}`}>
                {card.icon}
              </div>
              <span className="text-3xl font-heading">{card.value}</span>
            </div>
            <p className="text-white/50 text-sm tracking-wide uppercase">{card.title}</p>
          </motion.div>
        ))}
      </div>

      {/* Recent Inquiries Table */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="bg-white/5 border border-white/10 rounded-xl backdrop-blur-sm overflow-hidden"
      >
        <div className="p-6 border-b border-white/10">
          <h2 className="font-heading text-2xl tracking-wide">Recent Inquiries</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-white/5 text-xs tracking-widest uppercase text-white/50 border-b border-white/10">
                <th className="p-6 font-medium">Guest Name</th>
                <th className="p-6 font-medium">Stay Zone</th>
                <th className="p-6 font-medium">Check In</th>
                <th className="p-6 font-medium">Status</th>
              </tr>
            </thead>
            <tbody>
              {recentInquiries.length === 0 ? (
                <tr>
                  <td colSpan="4" className="p-6 text-center text-white/50">No recent inquiries found.</td>
                </tr>
              ) : (
                recentInquiries.map((inquiry) => (
                  <tr key={inquiry.id} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                    <td className="p-6">
                      <p className="font-medium">{inquiry.fullName}</p>
                      <p className="text-xs text-white/50">{inquiry.email}</p>
                    </td>
                    <td className="p-6 text-sm">{inquiry.stayZone}</td>
                    <td className="p-6 text-sm">{inquiry.checkIn}</td>
                    <td className="p-6">
                      <span className={`px-3 py-1 rounded-full text-[10px] uppercase tracking-wider ${
                        inquiry.status === 'pending' ? 'bg-amber-500/20 text-amber-300' : 
                        inquiry.status === 'confirmed' ? 'bg-green-500/20 text-green-300' : 
                        'bg-white/10 text-white/70'
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
