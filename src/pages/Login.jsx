import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate, Link } from 'react-router-dom';
import { auth, googleProvider, db } from '../firebase';
import { signInWithPopup, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import toast from 'react-hot-toast';

export default function Login() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [isSignUp, setIsSignUp] = useState(false);
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const handleAuth = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      setError('');
      
      let user;
      
      if (isSignUp) {
        const result = await createUserWithEmailAndPassword(auth, email, password);
        user = result.user;
        
        await setDoc(doc(db, 'users', user.uid), {
          name: name,
          email: user.email,
          role: 'user',
          createdAt: new Date()
        });
        
        toast.success('Account created successfully!');
        navigate('/');
      } else {
        const result = await signInWithEmailAndPassword(auth, email, password);
        user = result.user;
        
        const userRef = doc(db, 'users', user.uid);
        const userSnap = await getDoc(userRef);
        let role = 'user';
        if (userSnap.exists()) {
          role = userSnap.data().role;
        }
        
        toast.success('Successfully signed in!');
        if (role === 'Admin') {
          navigate('/admin/dashboard');
        } else {
          navigate('/');
        }
      }
    } catch (err) {
      console.error(err);
      setError(err.message || 'Failed to authenticate. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      setLoading(true);
      setError('');
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      
      const userRef = doc(db, 'users', user.uid);
      const userSnap = await getDoc(userRef);
      let role = 'user';
      
      if (!userSnap.exists()) {
        await setDoc(userRef, {
          name: user.displayName,
          email: user.email,
          photoURL: user.photoURL,
          role: 'user',
          createdAt: new Date()
        });
      } else {
        role = userSnap.data().role;
      }
      
      toast.success('Successfully signed in with Google!');
      if (role === 'Admin') {
        navigate('/admin/dashboard');
      } else {
        navigate('/');
      }
    } catch (err) {
      console.error(err);
      setError(err.message || 'Failed to sign in with Google. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full min-h-screen bg-[#E9E8E1] flex items-center justify-center py-32 px-6 relative overflow-hidden">
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-md w-full bg-[#F5F4EF] p-10 md:p-14 shadow-2xl shadow-black/5 relative z-10"
      >
        <div className="text-center mb-12">
          <p className="text-[10px] tracking-[0.3em] uppercase font-medium text-[#5a5a52] mb-4">
            GreenSoul Ecostay
          </p>
          <h1 className="font-heading text-4xl font-normal leading-[1.1] tracking-wide text-[#2c312a]">
            {isSignUp ? 'Create Account' : 'Welcome Back'}
          </h1>
        </div>
        
        {error && (
          <div className="mb-6 p-4 border border-red-500/20 bg-red-50/50 text-red-700 text-[11px] tracking-wide text-center">
            {error}
          </div>
        )}

        <form onSubmit={handleAuth} className="flex flex-col gap-8 mb-10">
          {isSignUp && (
            <div className="flex flex-col gap-2 group relative">
              <label className="text-[9px] tracking-[0.2em] uppercase font-medium text-[#5a5a52] ml-1 transition-colors group-focus-within:text-[#2c312a]">Full Name</label>
              <input 
                type="text" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                required={isSignUp}
                className="bg-transparent border-b border-[#2c312a]/20 pb-3 outline-none focus:border-[#2c312a] transition-colors font-heading text-lg px-1 text-[#2c312a]" 
              />
            </div>
          )}
          
          <div className="flex flex-col gap-2 group relative">
            <label className="text-[9px] tracking-[0.2em] uppercase font-medium text-[#5a5a52] ml-1 transition-colors group-focus-within:text-[#2c312a]">Email Address</label>
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="bg-transparent border-b border-[#2c312a]/20 pb-3 outline-none focus:border-[#2c312a] transition-colors font-heading text-lg px-1 text-[#2c312a]" 
            />
          </div>

          <div className="flex flex-col gap-2 group relative">
            <label className="text-[9px] tracking-[0.2em] uppercase font-medium text-[#5a5a52] ml-1 transition-colors group-focus-within:text-[#2c312a]">Password</label>
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="bg-transparent border-b border-[#2c312a]/20 pb-3 outline-none focus:border-[#2c312a] transition-colors font-heading text-lg px-1 text-[#2c312a]" 
            />
          </div>

          <button 
            type="submit"
            disabled={loading}
            className="mt-2 w-full border border-[#2c312a]/40 text-[#2c312a] px-8 py-4 text-[10px] tracking-[0.2em] uppercase font-medium hover:bg-[#2c312a] hover:text-[#E9E8E1] transition-all disabled:opacity-50"
          >
            {loading ? 'Authenticating...' : (isSignUp ? 'Create Account' : 'Sign In')}
          </button>
        </form>
        
        <div className="relative mb-10 flex items-center justify-center">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-[#2c312a]/10"></div>
          </div>
          <div className="relative bg-[#F5F4EF] px-4 text-[9px] tracking-[0.2em] uppercase font-medium text-[#5a5a52]">
            Or
          </div>
        </div>

        <button 
          type="button"
          onClick={handleGoogleSignIn}
          disabled={loading}
          className="w-full border border-[#2c312a]/20 text-[#2c312a] px-8 py-3.5 text-[10px] tracking-[0.1em] uppercase font-medium hover:bg-white transition-colors flex items-center justify-center gap-4 disabled:opacity-50"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
          </svg>
          Google Sign In
        </button>

        <div className="mt-10 text-center">
          <button 
            type="button"
            onClick={() => setIsSignUp(!isSignUp)}
            className="text-[10px] tracking-[0.1em] text-[#5a5a52] hover:text-[#2c312a] transition-colors uppercase font-medium"
          >
            {isSignUp ? 'Already have an account? Sign in' : "Don't have an account? Create one"}
          </button>
        </div>
      </motion.div>
      
    </div>
  );
}
