import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { collection, query, getDocs, orderBy } from 'firebase/firestore';
import { db } from '../firebase';
import {
  cycleWonder,
  earthHeritage1,
  eveningWalk,
  page1,
  page2,
  page3,
  page4b,
  page4,
  page5b,
  page5cWonder,
  page5d,
  page5e,
  trekWonder,
  heritageSuite,
  malnadSecond
} from '../greenhousefiles';

export default function Gallery() {
  const [filter, setFilter] = useState('all');
  const [dynamicImages, setDynamicImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

  // Categories are dynamically generated based on images
  const [categories, setCategories] = useState([{ id: 'all', label: 'All' }]);

  useEffect(() => {
    const fetchGallery = async () => {
      try {
        const q = query(collection(db, 'gallery'), orderBy('createdAt', 'desc'));
        const snapshot = await getDocs(q);
        const fetched = [];
        snapshot.forEach((doc) => {
          const data = doc.data();
          fetched.push({
            id: doc.id,
            category: data.category || 'all',
            src: data.url,
            alt: data.name || 'Gallery image'
          });
        });
        setDynamicImages(fetched);
      } catch (error) {
        console.error("Error fetching gallery images:", error);
      }
    };
    fetchGallery();
  }, []);

  const images = [
    { id: 1, category: 'architecture', src: earthHeritage1, alt: 'Earth Heritage Suite' },
    { id: 2, category: 'landscape', src: page1, alt: 'Mist over the Valley' },
    { id: 3, category: 'dining', src: page5b, alt: 'Tea by the Hills' },
    { id: 4, category: 'interiors', src: page4, alt: 'Artisan Details' },
    { id: 5, category: 'landscape', src: page2, alt: 'Morning Walk' },
    { id: 6, category: 'landscape', src: eveningWalk, alt: 'Evening Stroll' },
    { id: 7, category: 'interiors', src: page5d, alt: 'Indoor Living' },
    { id: 8, category: 'architecture', src: heritageSuite, alt: 'Heritage Suite Exterior' },
    { id: 9, category: 'interiors', src: malnadSecond, alt: 'Verandah Living' },
    { id: 10, category: 'landscape', src: trekWonder, alt: 'Nature Trails' },
    { id: 11, category: 'interiors', src: page4b, alt: 'Craftsmanship' },
    { id: 12, category: 'landscape', src: page5cWonder, alt: 'Scenic Vistas' },
    { id: 13, category: 'architecture', src: page5e, alt: 'Exterior Paths' },
    { id: 14, category: 'landscape', src: page3, alt: 'Forest Silence' },
    { id: 15, category: 'landscape', src: cycleWonder, alt: 'Plantation Cycling' }
  ];

  const combinedImages = [...dynamicImages, ...images];
  
  useEffect(() => {
    // Generate dynamic categories from all combined images
    const categoriesMap = new Map();
    categoriesMap.set('all', 'All');
    
    combinedImages.forEach(img => {
      if (img.category && img.category.toLowerCase() !== 'all') {
        const id = img.category.toLowerCase().trim();
        // Capitalize the first letter for the label if we don't already have it
        if (!categoriesMap.has(id)) {
          const label = img.category.charAt(0).toUpperCase() + img.category.slice(1);
          categoriesMap.set(id, label);
        }
      }
    });
    
    setCategories(Array.from(categoriesMap).map(([id, label]) => ({ id, label })));
  }, [dynamicImages]);

  const filteredImages = filter === 'all' ? combinedImages : combinedImages.filter(img => img.category?.toLowerCase().trim() === filter);

  return (
    <div className="w-full bg-[#E5E1D6] min-h-screen text-[#2c312a] pt-32 pb-24">
      {/* Header */}
      <section className="px-8 md:px-16 lg:px-[120px] max-w-[1400px] mx-auto text-center mb-16">
        <p className="text-[10px] md:text-[12px] tracking-[0.4em] uppercase font-medium mb-6 text-[#9C8A71]">
          Visual Journey
        </p>
        <h1 className="font-heading text-5xl md:text-7xl font-normal leading-[1.05] tracking-[-0.02em] mb-12">
          The Gallery
        </h1>
        
        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-8 md:gap-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`text-[10px] tracking-[0.2em] uppercase font-medium transition-colors ${filter === cat.id ? 'text-[#2c312a] border-b border-[#2c312a] pb-1' : 'text-[#2c312a]/50 hover:text-[#2c312a] pb-1 border-b border-transparent'}`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </section>

      {/* Masonry Grid */}
      <section className="px-8 md:px-16 lg:px-[120px] max-w-[1400px] mx-auto">
        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
            {filteredImages.map((img) => (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5 }}
                key={img.id}
                className="relative overflow-hidden group cursor-pointer break-inside-avoid"
              >
                <img 
                  src={img.src} 
                  alt={img.alt} 
                  className="w-full h-auto object-cover transition-transform duration-[1.5s] group-hover:scale-105"
                  loading="lazy"
                />
                <div 
                  className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500"
                  onClick={() => setSelectedImage(img)}
                ></div>
              </motion.div>
            ))}
        </div>
      </section>

      {/* Lightbox / Fullscreen Preview */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4 md:p-12 cursor-pointer"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-8 right-8 text-white/70 hover:text-white transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X size={36} strokeWidth={1} />
            </button>
            <motion.img 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              src={selectedImage.src} 
              alt={selectedImage.alt} 
              className="max-w-full max-h-full object-contain cursor-default"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
