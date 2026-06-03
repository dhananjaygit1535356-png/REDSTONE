'use client';
import { motion } from 'motion/react';
import { Star, Linkedin, Twitter, Instagram } from 'lucide-react';
import Image from 'next/image';

const STATS = [
  { label: 'Properties Sold', value: '500+' },
  { label: 'Happy Clients', value: '250+' },
  { label: 'Years Experience', value: '15+' },
];

const AGENTS = [
  { name: 'Elias Thorne', role: 'Senior Partner', img: 'portraitman1' },
  { name: 'Sarah Jenkins', role: 'Luxury Specialist', img: 'portraitwoman1' },
  { name: 'Marcus Cole', role: 'Commercial Director', img: 'portraitman2' },
];

const TESTIMONIALS = [
  { name: 'Amanda P.', quote: 'RedStone Realty made finding our Malibu dream home an absolute pleasure. Their attention to detail and premium service is unmatched.' },
  { name: 'Jonathan R.', quote: 'The most professional and connected agents I have ever worked with. They sold our penthouse in just two weeks off-market.' },
  { name: 'Sophia W.', quote: 'A truly elevated real estate experience. From start to finish, the RedStone team provided white-glove service.' },
];

export function CompanySection() {
  return (
    <section id="agents" className="py-20 w-full relative">
      <div className="absolute inset-0 bg-[#0A0A0A] z-0" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#111111]/30 to-transparent z-0" />

      {/* About Company */}
      <div className="max-w-7xl mx-auto px-6 mb-32 pt-10 relative z-10">
        <div className="lg:w-2/3 mb-16">
          <h2 className="text-xs uppercase tracking-[0.2em] font-bold mb-6">About RedStone</h2>
          <p className="text-sm text-[#B3B3B3] leading-relaxed">
            RedStone Realty is a leading luxury real estate agency helping clients buy, sell, and invest in premium properties globally. Our extensive network and bespoke approach ensure that every transaction is seamlessly executed with the utmost discretion and professionalism.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {STATS.map((stat, i) => (
             <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-[#111111] p-4 border border-white/5 rounded-xl hover:border-[#FF1E1E]/20 transition-all text-center"
             >
               <p className="text-2xl font-bold mb-1 block">{stat.value}</p>
               <p className="text-[9px] uppercase tracking-widest text-[#B3B3B3]">{stat.label}</p>
             </motion.div>
          ))}
        </div>
      </div>

      {/* Testimonials */}
      <div className="max-w-7xl mx-auto px-6 mb-32 relative z-10">
        <h2 className="text-xs uppercase tracking-[0.2em] font-bold mb-12 text-center">Client Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {TESTIMONIALS.map((test, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="bg-[#FF1E1E]/5 border border-[#FF1E1E]/30 p-6 rounded-xl relative hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="flex text-[#FF1E1E] mb-4">
                {[1,2,3,4,5].map(s => <Star key={s} size={14} fill="currentColor" className="mr-1" />)}
              </div>
              <p className="text-[11px] text-[#B3B3B3] italic mb-6 leading-relaxed line-clamp-4">&quot;{test.quote}&quot;</p>
              <div className="font-bold text-[10px] uppercase tracking-widest text-white/90 border-t border-[#FF1E1E]/20 pt-4">{test.name}</div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Meet Our Agents */}
      <div className="max-w-7xl mx-auto px-6 relative z-10">
         <div className="text-center mb-16">
          <h2 className="text-xs uppercase tracking-[0.2em] font-bold mb-4">Meet Our Agents</h2>
          <p className="text-[10px] uppercase tracking-widest text-[#B3B3B3]">The experts behind your next successful acquisition.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {AGENTS.map((agent, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="bg-[#111111] rounded-xl border border-white/5 p-3 overflow-hidden group"
            >
              <div className="relative h-64 w-full overflow-hidden bg-zinc-800 rounded-lg">
                <Image src={`https://picsum.photos/seed/${agent.img}/500/600`} alt={agent.name} fill className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" referrerPolicy="no-referrer" />
              </div>
              <div className="pt-4 pb-2 text-center">
                <h3 className="text-xs uppercase tracking-widest font-bold mb-1 group-hover:text-[#FF1E1E] transition-colors">{agent.name}</h3>
                <p className="text-[9px] uppercase tracking-widest text-[#B3B3B3] mb-4">{agent.role}</p>
                <div className="flex justify-center gap-3">
                  <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full border border-white/10 hover:bg-[#FF1E1E] text-white transition-all transform"><Linkedin size={12}/></a>
                  <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full border border-white/10 hover:bg-[#FF1E1E] text-white transition-all transform"><Twitter size={12}/></a>
                  <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full border border-white/10 hover:bg-[#FF1E1E] text-white transition-all transform"><Instagram size={12}/></a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
