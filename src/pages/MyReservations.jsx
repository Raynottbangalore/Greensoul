import React, { useState, useEffect } from 'react';
import { collection, query, where, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { db, auth } from '../firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, ArrowLeft, Users, X } from 'lucide-react';
import toast from 'react-hot-toast';

export default function MyReservations() {
  const [reservations, setReservations] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (!user) {
        navigate('/login');
        return;
      }

      try {
        // Query by typed email (for older bookings)
        const qEmail = query(
          collection(db, 'bookings'),
          where('email', '==', user.email)
        );
        
        // Query by authenticated userId (for robust matching on new bookings)
        const qUserId = query(
          collection(db, 'bookings'),
          where('userId', '==', user.uid)
        );

        const [snapshotEmail, snapshotUserId] = await Promise.all([
          getDocs(qEmail),
          getDocs(qUserId)
        ]);
        
        const mergedData = new Map();
        
        snapshotEmail.docs.forEach(doc => {
          mergedData.set(doc.id, { id: doc.id, ...doc.data() });
        });
        
        snapshotUserId.docs.forEach(doc => {
          mergedData.set(doc.id, { id: doc.id, ...doc.data() });
        });
        
        const resData = Array.from(mergedData.values());
        
        // Sort client side by createdAt descending
        resData.sort((a, b) => {
          const timeA = a.createdAt?.toDate ? a.createdAt.toDate().getTime() : 0;
          const timeB = b.createdAt?.toDate ? b.createdAt.toDate().getTime() : 0;
          return timeB - timeA;
        });
        
        setReservations(resData);
      } catch (error) {
        console.error("Error fetching reservations:", error);
      } finally {
        setLoading(false);
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  const handleCancel = async (id) => {
    if (window.confirm("Are you sure you want to cancel this reservation?")) {
      try {
        await deleteDoc(doc(db, 'bookings', id));
        setReservations(prev => prev.filter(res => res.id !== id));
        toast.success("Reservation cancelled successfully");
      } catch (error) {
        console.error("Error cancelling reservation:", error);
        toast.error("Failed to cancel reservation");
      }
    }
  };

  if (loading) {
    return (
      <div className="w-full min-h-screen bg-[#E9E8E1] flex justify-center items-center">
        <div className="w-8 h-8 border-2 border-[#9C8A71] border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen bg-[#E9E8E1] pt-40 md:pt-48 pb-24 px-6 md:px-16 lg:px-[120px]">
      <div className="max-w-4xl mx-auto">
        <Link to="/" className="relative z-[40] inline-flex items-center gap-2 text-[10px] tracking-[0.2em] uppercase font-medium text-[#5a5a52] hover:text-[#9C8A71] transition-colors mb-12 pointer-events-auto cursor-pointer">
          <ArrowLeft size={14} />
          <span>Return Home</span>
        </Link>

        <h1 className="font-heading text-4xl lg:text-5xl font-light text-[#2c312a] mb-2 tracking-tight">
          My <i className="font-serif italic text-[#9C8A71]">Reservations</i>
        </h1>
        <p className="text-[13px] tracking-wide text-[#5a5a52] font-light mb-12">
          Review your upcoming escapes and past stays at GreenSoul.
        </p>

        {reservations.length === 0 ? (
          <div className="bg-[#F5F4EF] border border-[#2c312a]/10 p-12 text-center rounded-sm">
            <Calendar className="mx-auto text-[#9C8A71] mb-4 opacity-50" size={32} />
            <h3 className="font-heading text-2xl text-[#2c312a] mb-2">No reservations found</h3>
            <p className="text-[13px] text-[#5a5a52] font-light mb-8">You haven't booked any escapes with us yet.</p>
            <Link to="/book" className="relative z-20 inline-block border border-[#9C8A71] text-[#9C8A71] hover:bg-[#9C8A71] hover:text-[#F5F4EF] px-8 py-4 text-[10px] tracking-[0.2em] uppercase font-medium transition-all">
              Book Your Escape
            </Link>
          </div>
        ) : (
          <div className="space-y-6">
            {reservations.map((res, index) => (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                key={res.id} 
                className="bg-[#F5F4EF] border border-[#2c312a]/10 p-6 md:p-8 flex flex-col md:flex-row gap-8 justify-between relative group overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-1 h-full bg-[#9C8A71] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
                
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span className={`px-3 py-1 text-[9px] uppercase tracking-wider font-medium rounded-sm ${
                      res.status === 'confirmed' ? 'bg-green-100 text-green-700' : 
                      res.status === 'rejected' ? 'bg-red-100 text-red-700' : 
                      'bg-yellow-100 text-yellow-700'
                    }`}>
                      {res.status || 'Pending'}
                    </span>
                    <span className="text-[10px] text-[#5a5a52] tracking-wider uppercase">ID: {res.id.slice(0,8)}</span>
                    <span className="text-[10px] text-[#5a5a52] tracking-wider ml-auto">
                      {res.createdAt?.toDate ? res.createdAt.toDate().toLocaleDateString() : ''}
                    </span>
                  </div>
                  
                  <h3 className="font-heading text-2xl md:text-3xl text-[#2c312a] mb-4">
                    {res.stayZone}
                  </h3>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-[#5a5a52]">
                    <div>
                      <p className="text-[9px] uppercase tracking-[0.15em] font-medium mb-1">Check-In</p>
                      <p className="font-heading text-lg text-[#2c312a]">{res.checkIn}</p>
                    </div>
                    <div>
                      <p className="text-[9px] uppercase tracking-[0.15em] font-medium mb-1">Check-Out</p>
                      <p className="font-heading text-lg text-[#2c312a]">{res.checkOut}</p>
                    </div>
                    <div>
                      <p className="text-[9px] uppercase tracking-[0.15em] font-medium mb-1">Guests</p>
                      <p className="font-heading text-lg text-[#2c312a] flex items-center gap-1">
                        <Users size={14} className="text-[#9C8A71]" />
                        {res.guests}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="md:w-1/4 flex flex-col pt-6 md:pt-0 border-t md:border-t-0 md:border-l border-[#2c312a]/10 md:pl-8">
                  <div className="flex-1">
                    <p className="text-[9px] uppercase tracking-[0.15em] font-medium mb-1 text-[#5a5a52]">Guest Name</p>
                    <p className="font-sans text-sm font-medium text-[#2c312a] mb-4">{res.fullName}</p>
                    
                    {res.specialRequests && (
                      <>
                        <p className="text-[9px] uppercase tracking-[0.15em] font-medium mb-1 text-[#5a5a52]">Requests</p>
                        <p className="text-[12px] font-light italic text-[#2c312a] line-clamp-3 mb-4">{res.specialRequests}</p>
                      </>
                    )}
                  </div>

                  <button 
                    onClick={() => handleCancel(res.id)}
                    className="mt-4 w-full border border-red-900/20 text-red-700 hover:bg-red-50 hover:border-red-900/30 px-4 py-2.5 text-[9px] uppercase tracking-[0.2em] font-medium transition-colors rounded-sm flex items-center justify-center gap-2"
                  >
                    <X size={14} />
                    Cancel Booking
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
