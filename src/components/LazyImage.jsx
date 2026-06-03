import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LazyImage({ 
  src, 
  alt, 
  className = "", 
  priority = false, 
  initial = {},
  animate = {},
  transition = {},
  ...props 
}) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <>
      <AnimatePresence>
        {!isLoaded && (
          <motion.div 
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 flex items-center justify-center bg-[#E5E1D6]/5 backdrop-blur-[2px] z-0"
            style={{ pointerEvents: 'none' }}
          >
            <div className="w-6 h-6 border-[1.5px] border-[#9C8A71] border-t-transparent rounded-full animate-spin opacity-80"></div>
          </motion.div>
        )}
      </AnimatePresence>
      
      <motion.img
        src={src}
        alt={alt}
        loading={priority ? "eager" : "lazy"}
        onLoad={() => setIsLoaded(true)}
        className={className}
        initial={{ opacity: 0, ...initial }}
        animate={isLoaded ? { opacity: 1, ...animate } : { opacity: 0, ...initial }} // Note: fallback to initial to prevent animation popping
        transition={{ duration: 0.8, ease: "easeInOut", ...transition }}
        {...props}
      />
    </>
  );
}
