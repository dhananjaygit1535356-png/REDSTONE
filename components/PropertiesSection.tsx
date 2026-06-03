'use client';
import { motion } from 'motion/react';
import { MapPin, Bed, Bath, Square, Shield, Map, Award, Headset } from 'lucide-react';
import Image from 'next/image';

const PROPERTIES = [
  { id: 1, title: 'Beverly Hills Mansion', price: '$8,500,000', loc: 'Los Angeles, CA', beds: 6, baths: 8, area: '10,500', img: 'property6' },
  { id: 2, title: 'Modern Cliffside Villa', price: '$5,250,000', loc: 'Malibu, CA', beds: 4, baths: 5, area: '6,200', img: 'villa1' },
  { id: 3, title: 'Downtown Penthouse', price: '$4,100,000', loc: 'New York, NY', beds: 3, baths: 3, area: '3,800', img: 'penthouse2' },
  { id: 4, title: 'Oceanfront Estate', price: '$12,900,000', loc: 'Miami, FL', beds: 7, baths: 9, area: '14,000', img: 'oceanfront7' },
  { id: 5, title: 'Alpine Chalet', price: '$3,850,000', loc: 'Aspen, CO', beds: 5, baths: 6, area: '5,500', img: 'chalet' },
  { id: 6, title: 'Smart Home Resort', price: '$6,400,000', loc: 'Austin, TX', beds: 5, baths: 6, area: '7,100', img: 'smarthome1' }
];

const FEATURES = [
  { icon: Award, title: 'Trusted Agents', desc: 'Industry leading professionals at your side.' },
  { icon: Shield, title: 'Verified Listings', desc: 'Every property is meticulously vetted.' },
  { icon: Map, title: 'Premium Locations', desc: 'Curated properties in the most desirable areas.' },
  { icon: Headset, title: '24/7 Support', desc: 'Round-the-clock concierge level service.' },
];

export function PropertiesSection() {
  return (
    <section id="properties" className="pt-40 pb-20 px-6 max-w-7xl mx-auto w-full">
      <div className="text-center mb-16">
        <h2 className="text-xs uppercase tracking-[0.2em] font-bold mb-4">Featured Collections</h2>
        <p className="text-[10px] uppercase tracking-widest text-[#B3B3B3] mx-auto">Explore our exclusive collection of luxury homes tailored for the ultimate living experience.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PROPERTIES.map((prop, i) => (
          <motion.div
            key={prop.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{ y: -10 }}
            className="bg-[#111111] p-3 rounded-xl border border-white/5 hover:border-[#FF1E1E]/50 hover:shadow-[0_0_30px_rgba(255,30,30,0.15)] transition-all duration-300 group"
          >
            <div className="relative h-48 w-full overflow-hidden rounded-lg mb-3">
              <Image src={`https://picsum.photos/seed/${prop.img}/600/400`} alt={prop.title} fill className="object-cover group-hover:scale-110 transition-transform duration-700" referrerPolicy="no-referrer" />
              <div className="absolute top-2 right-2 bg-black/60 backdrop-blur px-2 py-1 rounded border border-white/10 text-[8px] uppercase tracking-widest font-bold">For Sale</div>
            </div>
            <div className="px-1 text-left">
              <div className="flex justify-between items-start mb-1">
                <h3 className="text-sm font-bold group-hover:text-[#FF1E1E] transition-colors">{prop.title}</h3>
                <span className="text-[#FF1E1E] text-xs font-bold">{prop.price}</span>
              </div>
              <div className="flex items-center text-[10px] text-[#B3B3B3] mb-4">
                <MapPin size={10} className="mr-1 text-[#FF1E1E]" />
                <span>{prop.loc}</span>
              </div>
              <div className="flex justify-between items-center py-2 border-t border-white/5 text-[#B3B3B3] text-[9px] uppercase tracking-widest">
                <div className="flex items-center gap-1"><Bed size={12}/> {prop.beds} Beds</div>
                <div className="flex items-center gap-1"><Bath size={12}/> {prop.baths} Baths</div>
                <div className="flex items-center gap-1"><Square size={12}/> {prop.area} sqft</div>
              </div>
              <button className="w-full mt-2 py-2 text-[10px] uppercase font-bold tracking-widest border border-white/10 group-hover:bg-[#FF1E1E] group-hover:border-transparent transition-all">
                Details
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Why Choose Us */}
      <div className="mt-32">
        <div className="text-center mb-16">
          <h2 className="text-xs uppercase tracking-[0.2em] font-bold mb-4">Why Choose Us</h2>
          <p className="text-[10px] uppercase tracking-widest text-[#B3B3B3]">The RedStone Advantage</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURES.map((feat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-[#111111] p-6 rounded-xl border border-white/5 hover:border-[#FF1E1E]/40 group transition-all duration-300 text-center"
            >
              <div className="w-12 h-12 mx-auto bg-black border border-white/10 rounded flex items-center justify-center mb-4 shadow-[0_0_15px_rgba(255,30,30,0.05)] group-hover:bg-[#FF1E1E]/10 group-hover:border-[#FF1E1E]/50 group-hover:rotate-6 transition-all duration-300">
                <feat.icon className="w-6 h-6 text-[#FF1E1E]" />
              </div>
              <h3 className="text-xs font-bold uppercase tracking-widest mb-2">{feat.title}</h3>
              <p className="text-[#B3B3B3] text-[10px] leading-relaxed">{feat.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
