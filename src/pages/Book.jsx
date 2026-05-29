import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { doc, setDoc, collection } from 'firebase/firestore';
import { db, auth } from '../firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { trekWonder } from '../greenhousefiles';

export default function Book() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [authChecked, setAuthChecked] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        toast.error('Please login to book your escape');
        navigate('/login');
      } else {
        setAuthChecked(true);
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  if (!authChecked) {
    return <div className="w-full min-h-screen bg-[#E9E8E1] flex justify-center items-center"></div>;
  }

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      const bookingRef = doc(collection(db, 'bookings'));
      await setDoc(bookingRef, {
        ...data,
        status: 'pending',
        createdAt: new Date()
      });
      toast.success('Your retreat request has been received. We will contact you shortly.');
      reset();
    } catch (error) {
      console.error("Error submitting booking: ", error);
      toast.error('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full min-h-screen bg-[#E9E8E1] flex flex-col lg:flex-row overflow-hidden relative">
      
      {/* LEFT SIDE - Cinematic Image */}
      <div className="w-full lg:w-1/2 h-[50vh] lg:h-auto relative">
        <div className="absolute inset-0 bg-black/20 z-10"></div>
        <img 
          src={trekWonder} 
          alt="Luxury Rainforest Retreat" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10"></div>
        
        {/* Subtle Animated Overlays (Mist effect) */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent z-10 mix-blend-overlay"
        ></motion.div>
      </div>

      {/* RIGHT SIDE - Booking Form Card */}
      <div className="w-full lg:w-1/2 min-h-screen flex items-center justify-center py-24 px-6 lg:px-16 xl:px-24 bg-[#F5F4EF] relative z-20">
        
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full max-w-xl"
        >
          <div className="mb-12">
            <p className="text-[10px] tracking-[0.3em] uppercase font-medium text-[#5a5a52] mb-4">
              Book Your Escape
            </p>
            <h1 className="font-heading text-4xl lg:text-5xl font-normal leading-[1.1] tracking-wide text-[#2c312a] mb-6">
              Begin Your Rainforest Retreat
            </h1>
            <p className="text-[#5a5a52] text-[13px] tracking-wide leading-relaxed">
              Hidden within the rainforests and coffee plantations of the Western Ghats, GreenSoul offers a slow-living escape rooted in earth, mist, and silence.
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Full Name */}
              <div className="flex flex-col gap-2 group relative">
                <label className="text-[9px] tracking-[0.2em] uppercase font-medium text-[#5a5a52] ml-1 transition-colors group-focus-within:text-[#D4AF37]">
                  Full Name
                </label>
                <input 
                  type="text"
                  {...register("fullName", { required: "Name is required" })}
                  className="bg-transparent border-b border-[#2c312a]/20 pb-3 outline-none focus:border-[#D4AF37] transition-colors font-heading text-lg px-1 text-[#2c312a]" 
                />
                {errors.fullName && <span className="text-red-500 text-[10px] absolute -bottom-5">{errors.fullName.message}</span>}
              </div>

              {/* Email Address */}
              <div className="flex flex-col gap-2 group relative">
                <label className="text-[9px] tracking-[0.2em] uppercase font-medium text-[#5a5a52] ml-1 transition-colors group-focus-within:text-[#D4AF37]">
                  Email Address
                </label>
                <input 
                  type="email"
                  {...register("email", { 
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address"
                    }
                  })}
                  className="bg-transparent border-b border-[#2c312a]/20 pb-3 outline-none focus:border-[#D4AF37] transition-colors font-heading text-lg px-1 text-[#2c312a]" 
                />
                {errors.email && <span className="text-red-500 text-[10px] absolute -bottom-5">{errors.email.message}</span>}
              </div>

              {/* Phone Number */}
              <div className="flex flex-col gap-2 group relative">
                <label className="text-[9px] tracking-[0.2em] uppercase font-medium text-[#5a5a52] ml-1 transition-colors group-focus-within:text-[#D4AF37]">
                  Phone Number
                </label>
                <input 
                  type="tel"
                  {...register("phone", { required: "Phone is required" })}
                  className="bg-transparent border-b border-[#2c312a]/20 pb-3 outline-none focus:border-[#D4AF37] transition-colors font-heading text-lg px-1 text-[#2c312a]" 
                />
                {errors.phone && <span className="text-red-500 text-[10px] absolute -bottom-5">{errors.phone.message}</span>}
              </div>

              {/* Number of Guests */}
              <div className="flex flex-col gap-2 group relative">
                <label className="text-[9px] tracking-[0.2em] uppercase font-medium text-[#5a5a52] ml-1 transition-colors group-focus-within:text-[#D4AF37]">
                  Number of Guests
                </label>
                <select 
                  {...register("guests", { required: "Please select guests" })}
                  className="bg-transparent border-b border-[#2c312a]/20 pb-3 outline-none focus:border-[#D4AF37] transition-colors font-heading text-lg px-1 text-[#2c312a] appearance-none cursor-pointer" 
                >
                  <option value="" disabled selected className="text-gray-400">Select</option>
                  {[1,2,3,4,5,6].map(num => (
                    <option key={num} value={num} className="text-[#2c312a]">{num} {num === 1 ? 'Guest' : 'Guests'}</option>
                  ))}
                </select>
                {errors.guests && <span className="text-red-500 text-[10px] absolute -bottom-5">{errors.guests.message}</span>}
              </div>

              {/* Check-In Date */}
              <div className="flex flex-col gap-2 group relative">
                <label className="text-[9px] tracking-[0.2em] uppercase font-medium text-[#5a5a52] ml-1 transition-colors group-focus-within:text-[#D4AF37]">
                  Check-In Date
                </label>
                <input 
                  type="date"
                  {...register("checkIn", { required: "Check-In required" })}
                  className="bg-transparent border-b border-[#2c312a]/20 pb-3 outline-none focus:border-[#D4AF37] transition-colors font-heading text-[15px] px-1 text-[#2c312a] cursor-pointer uppercase tracking-widest" 
                />
                {errors.checkIn && <span className="text-red-500 text-[10px] absolute -bottom-5">{errors.checkIn.message}</span>}
              </div>

              {/* Check-Out Date */}
              <div className="flex flex-col gap-2 group relative">
                <label className="text-[9px] tracking-[0.2em] uppercase font-medium text-[#5a5a52] ml-1 transition-colors group-focus-within:text-[#D4AF37]">
                  Check-Out Date
                </label>
                <input 
                  type="date"
                  {...register("checkOut", { required: "Check-Out required" })}
                  className="bg-transparent border-b border-[#2c312a]/20 pb-3 outline-none focus:border-[#D4AF37] transition-colors font-heading text-[15px] px-1 text-[#2c312a] cursor-pointer uppercase tracking-widest" 
                />
                {errors.checkOut && <span className="text-red-500 text-[10px] absolute -bottom-5">{errors.checkOut.message}</span>}
              </div>
            </div>

            {/* Preferred Stay Zone */}
            <div className="flex flex-col gap-2 group relative">
              <label className="text-[9px] tracking-[0.2em] uppercase font-medium text-[#5a5a52] ml-1 transition-colors group-focus-within:text-[#D4AF37]">
                Preferred Stay Zone
              </label>
              <select 
                {...register("stayZone", { required: "Please select a stay zone" })}
                className="bg-transparent border-b border-[#2c312a]/20 pb-3 outline-none focus:border-[#D4AF37] transition-colors font-heading text-lg px-1 text-[#2c312a] appearance-none cursor-pointer" 
              >
                <option value="" disabled selected className="text-gray-400">Select your sanctuary</option>
                <option value="Mist Valley Cottages" className="text-[#2c312a]">Mist Valley Cottages</option>
                <option value="Heritage Earth Suites" className="text-[#2c312a]">Heritage Earth Suites</option>
                <option value="The Malnad Collective" className="text-[#2c312a]">The Malnad Collective</option>
              </select>
              {errors.stayZone && <span className="text-red-500 text-[10px] absolute -bottom-5">{errors.stayZone.message}</span>}
            </div>

            {/* Special Requests */}
            <div className="flex flex-col gap-2 group relative">
              <label className="text-[9px] tracking-[0.2em] uppercase font-medium text-[#5a5a52] ml-1 transition-colors group-focus-within:text-[#D4AF37]">
                Special Requests (Family Retreat, Honeymoon, Food Preferences)
              </label>
              <textarea 
                {...register("specialRequests")}
                rows="3"
                className="bg-transparent border-b border-[#2c312a]/20 pb-2 pt-2 outline-none focus:border-[#D4AF37] transition-colors font-heading text-lg px-1 text-[#2c312a] resize-none"
                placeholder="How can we make your stay memorable?"
              ></textarea>
            </div>

            {/* Submit Button */}
            <motion.button 
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              className="mt-8 w-full border border-[#D4AF37] bg-transparent text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#F5F4EF] px-8 py-5 text-[10px] tracking-[0.2em] uppercase font-medium transition-all duration-500 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Requesting...' : 'Request Your Stay'}
            </motion.button>
          </form>

        </motion.div>
      </div>
    </div>
  );
}
