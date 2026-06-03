'use client';
import { motion } from 'motion/react';
import { Search, MapPin, Home, DollarSign, Bed } from 'lucide-react';
import Image from 'next/image';

export function HeroSearch() {
  return (
    <section id="home" className="relative w-full h-[95vh] min-h-[700px] flex flex-col items-center justify-center pt-20">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://picsum.photos/seed/luxurymansion/1920/1080"
          alt="Luxury Property"
          fill
          className="object-cover"
          referrerPolicy="no-referrer"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/80 via-[#0A0A0A]/60 to-[#0A0A0A] z-10" />
      </div>

      <div className="relative z-20 max-w-4xl mx-auto px-4 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
          className="text-5xl md:text-7xl font-light tracking-tighter mb-6 drop-shadow-lg leading-none"
        >
          Find Your Dream<br/><span className="font-bold italic text-transparent bg-clip-text bg-gradient-to-r from-[#FF1E1E] to-[#B30000]">Property.</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
          className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-10 drop-shadow-md"
        >
          Luxury Homes, Apartments, and Commercial Properties Across Prime Locations
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a href="#properties" className="px-6 py-3 bg-gradient-to-r from-[#FF1E1E] to-[#B30000] text-[12px] uppercase font-bold tracking-widest shadow-[0_0_20px_rgba(255,30,30,0.3)] hover:shadow-[0_0_30px_rgba(255,30,30,0.6)] hover:-translate-y-1 transition-all">
            Explore Portfolio
          </a>
          <a href="#contact" className="px-6 py-3 border border-white/20 bg-white/5 text-[12px] uppercase font-bold tracking-widest hover:bg-white/10 hover:-translate-y-1 transition-all">
            Watch Film
          </a>
        </motion.div>
      </div>

      {/* Search Bar - Positioned at bottom overlapping next section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }}
        className="absolute -bottom-24 w-full max-w-5xl px-4 z-30"
      >
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl flex flex-col md:flex-row gap-4">
          <div className="flex-1 flex items-center bg-black/40 border border-white/5 rounded px-4 py-3">
            <MapPin className="text-[#B3B3B3] w-5 h-5 mr-3 flex-shrink-0" />
            <input type="text" placeholder="Location" className="bg-transparent border-none outline-none w-full text-white placeholder:text-[#B3B3B3] text-xs font-bold" />
          </div>
          <div className="flex-1 flex items-center bg-black/40 border border-white/5 rounded px-4 py-3">
            <Home className="text-[#B3B3B3] w-5 h-5 mr-3 flex-shrink-0" />
            <select className="bg-transparent border-none outline-none w-full text-white appearance-none cursor-pointer text-xs font-bold">
              <option value="" className="bg-[#111111]">Property Type</option>
              <option value="house" className="bg-[#111111]">House</option>
              <option value="apartment" className="bg-[#111111]">Apartment</option>
              <option value="villa" className="bg-[#111111]">Villa</option>
            </select>
          </div>
          <div className="flex-1 flex items-center bg-black/40 border border-white/5 rounded px-4 py-3">
            <DollarSign className="text-[#B3B3B3] w-5 h-5 mr-3 flex-shrink-0" />
            <select className="bg-transparent border-none outline-none w-full text-white appearance-none cursor-pointer text-xs font-bold">
              <option value="" className="bg-[#111111]">Budget</option>
              <option value="0-500k" className="bg-[#111111]">$0 - $500k</option>
              <option value="500k-1m" className="bg-[#111111]">$500k - $1M</option>
              <option value="1m+" className="bg-[#111111]">$1M+</option>
            </select>
          </div>
          <div className="flex-1 flex items-center bg-black/40 border border-white/5 rounded px-4 py-3">
            <Bed className="text-[#B3B3B3] w-5 h-5 mr-3 flex-shrink-0" />
            <select className="bg-transparent border-none outline-none w-full text-white appearance-none cursor-pointer text-xs font-bold">
              <option value="" className="bg-[#111111]">Bedrooms</option>
              <option value="1" className="bg-[#111111]">1+</option>
              <option value="2" className="bg-[#111111]">2+</option>
              <option value="3" className="bg-[#111111]">3+</option>
              <option value="4" className="bg-[#111111]">4+</option>
            </select>
          </div>
          <button className="bg-gradient-to-r from-[#FF1E1E] to-[#B30000] p-4 rounded hover:shadow-[0_0_20px_rgba(255,30,30,0.5)] transition-all flex items-center justify-center">
            <Search className="text-white w-6 h-6" />
          </button>
        </div>
      </motion.div>
    </section>
  );
}
