'use client';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Instagram, Facebook, Linkedin, Hexagon } from 'lucide-react';

export function ContactFooter() {
  return (
    <>
      <section id="contact" className="py-24 max-w-7xl mx-auto px-6 w-full">
        <div className="text-center mb-16">
          <h2 className="text-xs uppercase tracking-[0.2em] font-bold mb-4">Contact Us</h2>
          <p className="text-[10px] uppercase tracking-widest text-[#B3B3B3]">Get in touch with our team of luxury real estate experts.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Info & Map */}
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="flex flex-col gap-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-[#111111] border border-white/5 p-6 rounded-2xl hover:border-[#FF1E1E]/30 transition-colors">
                <MapPin className="text-[#FF1E1E] mb-4 w-8 h-8" />
                <h3 className="font-bold text-lg mb-2 text-white">Office Address</h3>
                <p className="text-[#B3B3B3] text-sm">123 Luxury Avenue,<br/>Beverly Hills, CA 90210</p>
              </div>
              <div className="bg-[#111111] border border-white/5 p-6 rounded-2xl hover:border-[#FF1E1E]/30 transition-colors">
                <Phone className="text-[#FF1E1E] mb-4 w-8 h-8" />
                <h3 className="font-bold text-lg mb-2 text-white">Phone</h3>
                <p className="text-[#B3B3B3] text-sm">+1 (800) LUX-REAL<br/>+1 (310) 555-0198</p>
              </div>
              <div className="bg-[#111111] border border-white/5 p-6 rounded-2xl sm:col-span-2 hover:border-[#FF1E1E]/30 transition-colors">
                <Mail className="text-[#FF1E1E] mb-4 w-8 h-8" />
                <h3 className="font-bold text-lg mb-2 text-white">Email</h3>
                <p className="text-[#B3B3B3] text-sm">inquiries@redstonerealty.com</p>
              </div>
            </div>
            {/* Map Placeholder */}
            <div className="w-full h-64 bg-[#111111] border border-white/5 rounded-2xl overflow-hidden relative group">
               <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/map/800/400')] opacity-30 grayscale object-cover"></div>
               <div className="absolute inset-0 bg-[#0A0A0A]/40 group-hover:bg-transparent transition-all duration-500"></div>
               <div className="absolute inset-0 flex items-center justify-center">
                  <button className="bg-[#0A0A0A]/80 backdrop-blur-md px-6 py-3 rounded-full border border-[#FF1E1E]/30 text-sm font-medium flex items-center shadow-[0_0_20px_rgba(255,30,30,0.2)] hover:bg-[#FF1E1E] hover:text-white transition-colors cursor-pointer">
                     <MapPin className="text-white w-4 h-4 mr-2" /> View on Google Maps
                  </button>
               </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <form className="bg-[#111111] border border-white/5 p-8 rounded-2xl flex flex-col gap-6 shadow-xl relative overflow-hidden">
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#FF1E1E]/10 rounded-full blur-3xl blur-[100px]"></div>
              
              <h3 className="text-xs uppercase tracking-[0.2em] font-bold mb-4">Send a Message</h3>
              <div className="flex flex-col gap-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-[#B3B3B3]">Name</label>
                <input type="text" className="bg-[#0A0A0A] border border-white/10 rounded px-4 py-3 focus:outline-none focus:border-[#FF1E1E]/50 transition-colors text-white text-xs" placeholder="John Doe" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-[#B3B3B3]">Email</label>
                <input type="email" className="bg-[#0A0A0A] border border-white/10 rounded px-4 py-3 focus:outline-none focus:border-[#FF1E1E]/50 transition-colors text-white text-xs" placeholder="john@example.com" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-[#B3B3B3]">Phone</label>
                <input type="tel" className="bg-[#0A0A0A] border border-white/10 rounded px-4 py-3 focus:outline-none focus:border-[#FF1E1E]/50 transition-colors text-white text-xs" placeholder="+1 (555) 000-0000" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-[#B3B3B3]">Message</label>
                <textarea rows={4} className="bg-[#0A0A0A] border border-white/10 rounded px-4 py-3 focus:outline-none focus:border-[#FF1E1E]/50 transition-colors text-white resize-none text-xs" placeholder="How can we help you?"></textarea>
              </div>
              <button type="button" className="w-full bg-gradient-to-r from-[#FF1E1E] to-[#B30000] py-4 rounded text-xs uppercase tracking-[0.2em] font-bold text-white mt-2 hover:shadow-[0_0_20px_rgba(255,30,30,0.4)] transition-all">
                Submit Inquiry
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full border-t border-white/5 bg-[#0A0A0A] py-12 text-[#B3B3B3]">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6 cursor-pointer">
              <div className="w-8 h-8 bg-gradient-to-br from-[#FF1E1E] to-[#B30000] rotate-45 flex items-center justify-center text-white">
                <Hexagon size={16} fill="currentColor" className="-rotate-45" />
              </div>
              <span className="text-xl font-bold tracking-tighter text-white uppercase">REDSTONE<span className="text-[#FF1E1E]">.</span></span>
            </div>
            <p className="text-sm leading-relaxed mb-6 pr-4">Elevating luxury real estate through unrivaled service, exclusive access, and profound market expertise.</p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-[#111111] border border-white/5 flex items-center justify-center hover:bg-[#FF1E1E] hover:text-white transition-colors"><Instagram size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-[#111111] border border-white/5 flex items-center justify-center hover:bg-[#FF1E1E] hover:text-white transition-colors"><Facebook size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-[#111111] border border-white/5 flex items-center justify-center hover:bg-[#FF1E1E] hover:text-white transition-colors"><Linkedin size={18} /></a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#home" className="hover:text-[#FF1E1E] transition-colors">Home</a></li>
              <li><a href="#properties" className="hover:text-[#FF1E1E] transition-colors">Properties</a></li>
              <li><a href="#agents" className="hover:text-[#FF1E1E] transition-colors">Our Agents</a></li>
              <li><a href="#contact" className="hover:text-[#FF1E1E] transition-colors">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Services</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-[#FF1E1E] transition-colors">Property Valuation</a></li>
              <li><a href="#" className="hover:text-[#FF1E1E] transition-colors">Commercial Real Estate</a></li>
              <li><a href="#" className="hover:text-[#FF1E1E] transition-colors">Investment Consulting</a></li>
              <li><a href="#" className="hover:text-[#FF1E1E] transition-colors">Concierge Services</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Newsletter</h4>
            <p className="text-sm mb-4">Subscribe for exclusive off-market listings.</p>
            <div className="flex border border-white/10 rounded-xl overflow-hidden focus-within:border-[#FF1E1E]/50 transition-colors">
              <input type="email" placeholder="Email Address" className="bg-[#111111] px-4 py-3 w-full outline-none text-white text-sm" />
              <button className="bg-gradient-to-r from-[#FF1E1E] to-[#B30000] px-6 text-white font-medium hover:brightness-110 transition-all font-bold">Join</button>
            </div>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[9px] text-[#B3B3B3] uppercase tracking-widest">
          <p>&copy; {new Date().getFullYear()} RedStone Realty. All rights reserved.</p>
          <div className="flex gap-8 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </footer>
    </>
  );
}
