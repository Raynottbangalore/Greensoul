import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { collection, query, getDocs, orderBy, deleteDoc, doc } from 'firebase/firestore';
import { db } from '../firebase';
import { useAuth } from '../context/AuthContext';
import { Eye, Trash2, X } from 'lucide-react';
import toast from 'react-hot-toast';

export default function Bookings() {
  const { currentUser } = useAuth();
  const [inquiries, setInquiries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedBooking, setSelectedBooking] = useState(null);

  const fetchBookings = async () => {
    try {
      const bookingsRef = collection(db, 'bookings');
      const q = query(bookingsRef, orderBy('createdAt', 'desc'));
      const snapshot = await getDocs(q);
      
      const data = [];
      snapshot.forEach((doc) => {
        data.push({ id: doc.id, ...doc.data() });
      });
      
      setInquiries(data);
    } catch (error) {
      console.error("Error fetching bookings:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this booking?")) {
      try {
        await deleteDoc(doc(db, 'bookings', id));
        toast.success("Booking deleted successfully");
        fetchBookings();
      } catch (error) {
        console.error("Error deleting booking:", error);
        toast.error("Failed to delete booking");
      }
    }
  };

  if (loading) {
    return (
      <div className="animate-pulse space-y-6">
        <div className="h-10 bg-[#E9E8E1]/50 w-1/4"></div>
        <div className="h-64 bg-[#E9E8E1]/50 w-full"></div>
      </div>
    );
  }

  return (
    <div className="space-y-10">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-[#D4C3A3] text-[10px] tracking-[0.3em] uppercase font-medium mb-4">Management</p>
        <h1 className="font-heading text-4xl lg:text-5xl tracking-[-0.02em] text-[#E9E8E1]">All Bookings</h1>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="bg-[#2A3326] border border-[#E9E8E1]/10 rounded-none shadow-sm overflow-hidden"
      >
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-[#E9E8E1]/5 text-[10px] tracking-[0.2em] uppercase font-medium text-[#E9E8E1]/60 border-b border-[#E9E8E1]/10">
                <th className="p-6 font-medium">Guest Name</th>
                <th className="p-6 font-medium">Contact</th>
                <th className="p-6 font-medium">Stay Zone</th>
                <th className="p-6 font-medium">Dates</th>
                <th className="p-6 font-medium">Guests</th>
                <th className="p-6 font-medium">Status</th>
                <th className="p-6 font-medium text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {inquiries.length === 0 ? (
                <tr>
                  <td colSpan="6" className="p-8 text-center text-[#E9E8E1]/60">No bookings found.</td>
                </tr>
              ) : (
                inquiries.map((inquiry) => (
                  <tr key={inquiry.id} className="border-b border-[#E9E8E1]/5 hover:bg-[#E9E8E1]/10 transition-colors">
                    <td className="p-6">
                      <p className="font-medium text-[#E9E8E1] text-[15px]">{inquiry.fullName}</p>
                    </td>
                    <td className="p-6 text-[13px] text-[#E9E8E1]/70">
                      <p>{inquiry.email}</p>
                      <p className="text-[11px] text-[#E9E8E1]/50 mt-1">{inquiry.phone}</p>
                    </td>
                    <td className="p-6 text-[13px] text-[#E9E8E1]/70">{inquiry.stayZone}</td>
                    <td className="p-6 text-[13px] text-[#E9E8E1]/70">
                      <p>In: {inquiry.checkIn}</p>
                      <p>Out: {inquiry.checkOut}</p>
                    </td>
                    <td className="p-6 text-[13px] text-[#E9E8E1]/70">
                      <p>{inquiry.guests} Guests</p>
                      {inquiry.specialRequests && (
                        <p className="text-[10px] text-[#E9E8E1]/50 mt-1 italic max-w-[150px] truncate" title={inquiry.specialRequests}>
                          {inquiry.specialRequests}
                        </p>
                      )}
                    </td>
                    <td className="p-6">
                      <span className={`px-4 py-1.5 rounded-none border text-[9px] uppercase tracking-widest ${
                        inquiry.status === 'pending' ? 'bg-[#D4C3A3]/10 text-[#D4C3A3] border-[#D4C3A3]/30' : 
                        inquiry.status === 'confirmed' ? 'bg-[#E9E8E1]/10 text-[#E9E8E1] border-[#E9E8E1]/30' : 
                        'bg-[#D4C3A3]/10 text-[#D4C3A3] border-[#D4C3A3]/30'
                      }`}>
                        {inquiry.status || 'Pending'}
                      </span>
                    </td>
                    <td className="p-6">
                      <div className="flex justify-center gap-4">
                        <button 
                          onClick={() => setSelectedBooking(inquiry)}
                          className="text-blue-400 hover:text-blue-300 transition-colors"
                          title="View Details"
                        >
                          <Eye size={18} />
                        </button>
                        <button 
                          onClick={() => handleDelete(inquiry.id)}
                          className="text-red-400 hover:text-red-300 transition-colors"
                          title="Delete Booking"
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </motion.div>

      {/* Booking Details Modal */}
      <AnimatePresence>
        {selectedBooking && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={() => setSelectedBooking(null)}
          >
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#222A1F] border border-[#E9E8E1]/20 w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl relative"
            >
              <button 
                onClick={() => setSelectedBooking(null)}
                className="absolute top-6 right-6 text-[#E9E8E1]/60 hover:text-[#E9E8E1] transition-colors"
              >
                <X size={24} strokeWidth={1} />
              </button>
              
              <div className="p-10 border-b border-[#E9E8E1]/10">
                <p className="text-[#D4C3A3] text-[10px] tracking-[0.3em] uppercase font-medium mb-2">Booking Details</p>
                <h2 className="font-heading text-3xl text-[#E9E8E1]">{selectedBooking.fullName}</h2>
              </div>
              
              <div className="p-10 grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-12">
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-[#E9E8E1]/50 mb-1">Email</p>
                  <p className="text-[#E9E8E1]">{selectedBooking.email}</p>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-[#E9E8E1]/50 mb-1">Phone</p>
                  <p className="text-[#E9E8E1]">{selectedBooking.phone}</p>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-[#E9E8E1]/50 mb-1">Stay Zone</p>
                  <p className="text-[#E9E8E1] font-medium text-[#D4C3A3]">{selectedBooking.stayZone}</p>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-[#E9E8E1]/50 mb-1">Status</p>
                  <span className="uppercase text-[11px] tracking-widest text-[#E9E8E1]">{selectedBooking.status || 'Pending'}</span>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-[#E9E8E1]/50 mb-1">Check-in</p>
                  <p className="text-[#E9E8E1]">{selectedBooking.checkIn}</p>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-[#E9E8E1]/50 mb-1">Check-out</p>
                  <p className="text-[#E9E8E1]">{selectedBooking.checkOut}</p>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-[#E9E8E1]/50 mb-1">Guests</p>
                  <p className="text-[#E9E8E1]">{selectedBooking.guests}</p>
                </div>
                
                {selectedBooking.specialRequests && (
                  <div className="md:col-span-2 pt-6 border-t border-[#E9E8E1]/10">
                    <p className="text-[10px] uppercase tracking-widest text-[#E9E8E1]/50 mb-2">Special Requests</p>
                    <p className="text-[#E9E8E1] italic text-sm leading-relaxed">{selectedBooking.specialRequests}</p>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
