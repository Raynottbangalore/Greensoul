import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { X, ArrowRight, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
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
  malnadSecond,
  newImage,
  dining1,
  dining2,
  dining3
} from '../greenhousefiles';

export default function Gallery() {
  const [filter, setFilter] = useState('all');
  const [dynamicImages, setDynamicImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [categories, setCategories] = useState([{ id: 'all', label: 'All' }]);

  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const heroY = useTransform(scrollYProgress, [0, 0.2], [0, 150]);

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
    { id: 2, category: 'rainforest', src: page1, alt: 'Mist over the Valley' },
    { id: 3, category: 'architecture', src: page5b, alt: 'Tea by the Hills' },
    { id: 4, category: 'landscapes', src: page4, alt: 'Artisan Details' },
    { id: 5, category: 'landscapes', src: page2, alt: 'Morning Walk' },
    { id: 6, category: 'experiences', src: eveningWalk, alt: 'Evening Stroll' },
    { id: 7, category: 'stay', src: page5d, alt: 'Indoor Living' },
    { id: 8, category: 'stay', src: heritageSuite, alt: 'Heritage Suite Exterior' },
    { id: 9, category: 'stay', src: malnadSecond, alt: 'Verandah Living' },
    { id: 10, category: 'rainforest', src: trekWonder, alt: 'Nature Trails' },
    { id: 11, category: 'stay', src: page4b, alt: 'Craftsmanship' },
    { id: 12, category: 'landscapes', src: page5cWonder, alt: 'Scenic Vistas' },
    { id: 13, category: 'architecture', src: page5e, alt: 'Exterior Paths' },
    { id: 14, category: 'rainforest', src: page3, alt: 'Forest Silence' },
    { id: 15, category: 'experiences', src: cycleWonder, alt: 'Plantation Cycling' },
    { id: 16, category: 'stay', src: newImage, alt: 'Stay Experience' },
    { id: 17, category: 'dining', src: dining1, alt: 'Rainforest Dining Experience' },
    { id: 18, category: 'dining', src: dining2, alt: 'Luxury Breakfast Spread' },
    { id: 19, category: 'dining', src: dining3, alt: 'Intimate Fine Dining' }
  ];

  const combinedImages = [...dynamicImages, ...images];

  useEffect(() => {
    const categoriesMap = new Map();
    categoriesMap.set('all', 'All');

    // Ordered base categories as requested
    const baseCategories = ['rainforest', 'architecture', 'stay', 'dining', 'experiences', 'landscapes'];
    baseCategories.forEach(cat => {
      categoriesMap.set(cat, cat.charAt(0).toUpperCase() + cat.slice(1));
    });

    combinedImages.forEach(img => {
      if (img.category && img.category.toLowerCase() !== 'all') {
        const id = img.category.toLowerCase().trim();
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
    <div ref={containerRef} className="w-full bg-[#0B120C] min-h-screen text-[#E4E0D9] font-sans selection:bg-[#9C8A71] selection:text-[#0B120C]">

      {/* SECTION 1: Gallery Hero */}
      <section className="relative w-full h-[100vh] overflow-hidden">
        <motion.div style={{ y: heroY }} className="absolute inset-0 w-full h-full z-0">
          <motion.img
            initial={{ scale: 1.15 }}
            animate={{ scale: 1 }}
            transition={{ duration: 2.5, ease: [0.16, 1, 0.3, 1] }}
            src={page1}
            alt="Gallery Hero - Mist over valley"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#0B120C]/30 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B120C] via-[#0B120C]/20 to-transparent"></div>
        </motion.div>

        <motion.div
          className="absolute inset-0 flex flex-col justify-end items-center pb-24 px-6 text-center z-10"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-4xl"
          >
            <h1 className="font-heading text-6xl md:text-8xl lg:text-[9rem] font-light leading-[0.9] tracking-tight mb-12 text-[#F3E9DC]">
              <span className="font-serif italic font-light text-[#9C8A71]">The</span> Gallery
            </h1>
            <p className="text-[14px] md:text-[16px] tracking-[0.2em] uppercase font-light leading-[2] text-[#A3A19B]">
              A visual journey through mist, earth, architecture, and rainforest living.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="mt-16 flex flex-col items-center text-[#E4E0D9]/70 animate-bounce-slow"
          >
            <span className="text-[9px] tracking-[0.3em] uppercase font-medium mb-3">Discover</span>
            <ChevronDown size={18} strokeWidth={1.5} />
          </motion.div>
        </motion.div>
      </section>

      {/* SECTION 2: Featured Moments */}
      <section className="py-32 md:py-48 px-6 md:px-16 lg:px-[120px] max-w-[1600px] mx-auto">
        <div className="flex flex-col gap-24 md:gap-40">

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="w-full"
          >
            <div className="aspect-[16/9] lg:aspect-[21/9] overflow-hidden group shadow-2xl relative">
              <motion.img
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
                src={page2}
                alt="Morning mist in the estate"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-[#0B120C]/10 group-hover:bg-transparent transition-colors duration-700"></div>
            </div>
            <div className="mt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <h3 className="font-heading text-3xl md:text-4xl tracking-tight text-[#F3E9DC]">Awakening <i className="font-serif italic font-light text-[#9C8A71]">in the clouds</i></h3>
              <p className="text-[10px] tracking-[0.3em] uppercase font-medium text-[#A3A19B]">The Landscape</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="w-full flex flex-col lg:items-end"
          >
            <div className="w-full lg:w-[85%] aspect-[16/9] lg:aspect-[16/7] overflow-hidden group shadow-2xl relative">
              <motion.img
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
                src={eveningWalk}
                alt="Evening walk through the rainforest"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-[#0B120C]/10 group-hover:bg-transparent transition-colors duration-700"></div>
            </div>
            <div className="mt-8 w-full lg:w-[85%] flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <h3 className="font-heading text-3xl md:text-4xl tracking-tight text-[#F3E9DC]">Quiet <i className="font-serif italic font-light text-[#9C8A71]">Explorations</i></h3>
              <p className="text-[10px] tracking-[0.3em] uppercase font-medium text-[#A3A19B]">Experiences</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 3: Curated Collections (Filters) */}
      <section className="pt-20 pb-12 px-6 md:px-16 lg:px-[120px] max-w-[1600px] mx-auto border-t border-[#F3E9DC]/10 relative z-10 bg-[#0B120C]">
        <div className="text-center mb-16">
          <p className="text-[10px] tracking-[0.3em] uppercase font-medium text-[#9C8A71] mb-6 flex items-center justify-center gap-4">
            <span className="w-8 h-[1px] bg-[#9C8A71]"></span>
            Collections
            <span className="w-8 h-[1px] bg-[#9C8A71]"></span>
          </p>
          <h2 className="font-heading text-4xl md:text-5xl leading-[1.05] tracking-tight text-[#F3E9DC]">
            Explore the <span className="font-serif italic font-light text-[#9C8A71]">Archive</span>
          </h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-8 md:gap-12"
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`text-[9px] md:text-[10px] tracking-[0.25em] uppercase font-medium transition-all duration-500 relative ${filter === cat.id ? 'text-[#F3E9DC]' : 'text-[#A3A19B] hover:text-[#F3E9DC]'}`}
            >
              {cat.label}
              {filter === cat.id && (
                <motion.div
                  layoutId="filter-indicator"
                  className="absolute -bottom-3 left-0 right-0 h-[1px] bg-[#9C8A71]"
                />
              )}
            </button>
          ))}
        </motion.div>
      </section>

      {/* SECTION 4: Luxury Masonry Gallery */}
      <section className="px-6 md:px-16 lg:px-[120px] max-w-[1600px] mx-auto pb-32">
        <motion.div
          layout
          className="columns-1 md:columns-2 lg:columns-3 gap-6 md:gap-10 space-y-6 md:space-y-10"
        >
          <AnimatePresence mode="popLayout">
            {filteredImages.map((img, index) => (
              <motion.div
                layout
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.8, delay: (index % 10) * 0.05, ease: [0.16, 1, 0.3, 1] }}
                key={img.id}
                className="relative overflow-hidden group cursor-pointer break-inside-avoid shadow-xl bg-[#101912]"
                onClick={() => setSelectedImage(img)}
              >
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-auto object-cover opacity-90 group-hover:opacity-100"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-[#0B120C]/20 group-hover:bg-transparent transition-colors duration-700"></div>

                {/* Hover overlay text */}
                <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-[#0B120C] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end">
                  <p className="text-[#F3E9DC] font-serif italic text-lg tracking-wide">{img.alt}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* SECTION 6: Signature Visual Stories */}
      <section className="py-32 md:py-48 bg-[#101912]">
        <div className="px-6 md:px-16 lg:px-[120px] max-w-[1600px] mx-auto">
          <div className="text-center mb-24 md:mb-32">
            <h2 className="font-heading text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight text-[#F3E9DC]">
              Visual <span className="font-serif italic font-light text-[#9C8A71]">Stories</span>
            </h2>
          </div>

          <div className="flex flex-col gap-32 lg:gap-48">
            {/* Story 1 */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-0 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                className="lg:col-span-5 z-10 lg:pr-12"
              >
                <p className="text-[10px] tracking-[0.3em] uppercase font-medium text-[#9C8A71] mb-6">Chapter I</p>
                <h3 className="font-heading text-4xl md:text-5xl mb-8 tracking-tight text-[#F3E9DC]">Earth & <i className="font-serif italic font-light text-[#9C8A71]">Architecture</i></h3>
                <p className="text-[15px] leading-[2] font-light text-[#A3A19B] mb-8">
                  Discover how our spaces blend seamlessly into the dense canopy. Built with rammed earth and reclaimed timber, each structure honors the legacy of the Malnad region while providing unparalleled luxury.
                </p>
                <div className="w-16 h-[1px] bg-[#9C8A71]/30"></div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                className="lg:col-span-7 relative"
              >
                <div className="aspect-[4/3] lg:aspect-[16/10] overflow-hidden group shadow-2xl">
                  <img src={earthHeritage1} alt="Earth Architecture" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2s] ease-out" />
                </div>
                {/* Overlapping small image */}
                <div className="hidden lg:block absolute -bottom-16 -left-20 w-64 aspect-[3/4] overflow-hidden shadow-2xl border-4 border-[#101912] z-20">
                  <img src={page4} alt="Architecture Detail" className="w-full h-full object-cover" />
                </div>
              </motion.div>
            </div>

            {/* Story 2 */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-0 items-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                className="lg:col-span-7 relative order-2 lg:order-1"
              >
                <div className="aspect-[4/3] lg:aspect-[16/10] overflow-hidden group shadow-2xl">
                  <img src={trekWonder} alt="Rainforest Trekking" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2s] ease-out" />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                className="lg:col-span-5 z-10 lg:pl-20 order-1 lg:order-2"
              >
                <p className="text-[10px] tracking-[0.3em] uppercase font-medium text-[#9C8A71] mb-6">Chapter II</p>
                <h3 className="font-heading text-4xl md:text-5xl mb-8 tracking-tight text-[#F3E9DC]">Mist & <i className="font-serif italic font-light text-[#9C8A71]">Monsoon</i></h3>
                <p className="text-[15px] leading-[2] font-light text-[#A3A19B] mb-8">
                  The true magic of the estate reveals itself in the quiet mist. Trek through ancient trails, breathe in the petrichor, and let the rhythmic sounds of the forest recalibrate your senses.
                </p>
                <div className="w-16 h-[1px] bg-[#9C8A71]/30"></div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: Closing Section */}
      <section className="relative w-full h-[80vh] min-h-[600px] overflow-hidden">
        <motion.div
          initial={{ scale: 1.1 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2.5, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0 w-full h-full z-0"
        >
          <img
            src={malnadSecond}
            alt="Stay closing view"
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-[#0B120C]/40 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B120C] via-[#0B120C]/40 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-[#0B120C] via-transparent to-transparent"></div>
        </motion.div>

        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="font-heading text-5xl md:text-7xl lg:text-[8rem] font-light leading-[1] tracking-tight mb-8 text-[#F3E9DC]">
              Experience <span className="font-serif italic text-[#9C8A71]">GreenSoul</span>
            </h2>
            <p className="text-[14px] md:text-[16px] tracking-[0.2em] uppercase font-light leading-[2] text-[#A3A19B] mb-12">
              In Person
            </p>

            <Link to="/book" className="group relative inline-flex items-center justify-center p-6">
              <div className="relative flex items-center gap-6 text-[10px] md:text-[11px] tracking-[0.3em] uppercase font-medium text-[#E4E0D9] transition-colors duration-500">
                <span className="w-12 h-[1px] bg-[#9C8A71]/50 group-hover:w-20 group-hover:bg-[#9C8A71] transition-all duration-700 ease-[0.16,1,0.3,1]"></span>
                <span className="relative overflow-hidden flex h-[14px]">
                  <span className="inline-block transform group-hover:-translate-y-full transition-transform duration-500 ease-[0.16,1,0.3,1]">Book Your Escape</span>
                  <span className="absolute top-full left-0 inline-block transform group-hover:-translate-y-full transition-transform duration-500 ease-[0.16,1,0.3,1] text-white">Book Your Escape</span>
                </span>
                <span className="w-12 h-[1px] bg-[#9C8A71]/50 group-hover:w-20 group-hover:bg-[#9C8A71] transition-all duration-700 ease-[0.16,1,0.3,1]"></span>
              </div>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* SECTION 5: Immersive Image Experience (Modal) */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-[100] bg-[#0B120C]/98 flex items-center justify-center p-4 md:p-12 cursor-pointer backdrop-blur-md"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-10 right-10 text-[#A3A19B] hover:text-[#F3E9DC] transition-colors z-[101]"
              onClick={() => setSelectedImage(null)}
            >
              <X size={32} strokeWidth={1} />
            </button>
            <motion.img
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-w-[90vw] max-h-[90vh] object-contain shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
            {selectedImage.alt && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-center"
              >
                <p className="font-serif italic text-xl text-[#F3E9DC] mb-2">{selectedImage.alt}</p>
                <p className="text-[9px] tracking-[0.3em] uppercase text-[#9C8A71]">{selectedImage.category}</p>
              </motion.div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
