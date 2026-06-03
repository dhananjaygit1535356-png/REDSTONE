'use client';
import { motion } from 'motion/react';
import { Menu, X, Hexagon } from 'lucide-react';
import { useState, useEffect } from 'react';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#0A0A0A]/90 backdrop-blur-md border-b border-white/5 py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2 cursor-pointer relative z-[60]">
          <div className="w-8 h-8 bg-gradient-to-br from-[#FF1E1E] to-[#B30000] rotate-45 flex items-center justify-center text-white">
            <Hexagon size={16} fill="currentColor" className="-rotate-45" />
          </div>
          <span className="text-xl font-bold tracking-tighter uppercase">
            REDSTONE<span className="text-[#FF1E1E]">.</span>
          </span>
        </div>

        <div className="hidden md:flex items-center space-x-8">
          {['Home', 'Properties', 'Agents', 'Contact'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="text-[11px] uppercase tracking-widest font-medium opacity-60 hover:opacity-100 transition-opacity">{item}</a>
          ))}
          <a href="#contact" className="px-5 py-2 bg-white text-black text-[10px] uppercase font-bold tracking-widest hover:bg-[#FF1E1E] hover:text-white transition-colors">
            Consultation
          </a>
        </div>

        <button className="md:hidden text-white relative z-[60]" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <motion.div initial={{opacity: 0, y: -20}} animate={{opacity: 1, y: 0}} className="fixed inset-0 w-full h-screen bg-[#0A0A0A]/95 backdrop-blur-xl flex flex-col justify-center items-center space-y-8 md:hidden text-center z-50">
           {['Home', 'Properties', 'Agents', 'Contact'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setIsOpen(false)} className="text-[14px] uppercase tracking-widest font-bold opacity-60 hover:opacity-100 hover:text-white transition-all">{item}</a>
          ))}
           <a href="#contact" onClick={() => setIsOpen(false)} className="mt-8 px-8 py-3 bg-white text-black text-[12px] uppercase font-bold tracking-widest hover:bg-[#FF1E1E] hover:text-white transition-colors">
            Schedule Consultation
          </a>
        </motion.div>
      )}
    </nav>
  );
}
