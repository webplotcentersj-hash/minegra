import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Mail, Phone, ArrowRight } from 'lucide-react';
import type { Participant } from '../../lib/supabase';

interface Props {
  onRegister: (participant: Participant) => void;
}

export const RegistrationScreen: React.FC<Props> = ({ onRegister }) => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name.trim() && formData.email.trim()) {
      onRegister(formData);
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 1.05, y: -20 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="w-full max-w-3xl mx-auto p-4 sm:p-8 lg:p-12 glass-panel rounded-2xl md:rounded-[2rem]"
    >
      <div className="flex flex-col items-center mb-6 md:mb-10">
        <motion.div 
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", bounce: 0.4, delay: 0.2 }}
          className="relative mb-4 md:mb-8"
        >
          <div className="absolute inset-0 bg-world-cup-gold/30 blur-xl md:blur-3xl rounded-[2rem] md:rounded-[3rem] scale-110 md:scale-125" />
          <div className="relative bg-white/95 border border-white/40 px-6 py-4 md:px-10 md:py-8 rounded-xl md:rounded-[2rem] backdrop-blur-md shadow-2xl flex items-center justify-center">
            <img 
              src="/greenworking-soluciones-tecnologicas-logo-green-vf-1.png" 
              alt="Greenworking Logo" 
              className="h-12 sm:h-16 md:h-28 object-contain"
            />
          </div>
        </motion.div>
        
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black mb-2 md:mb-3 text-glow tracking-tight text-center">
          Gran <span className="text-world-cup-gold">Trivia</span>
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-blue-200 font-medium tracking-wide text-center">
          Demuestra cuánto sabes y gana premios
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
        <div className="space-y-3 md:space-y-4">
          <div className="relative group">
            <div className="absolute left-3 md:left-4 top-1/2 -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 bg-white/10 rounded-lg md:rounded-xl flex items-center justify-center border border-white/10 group-focus-within:border-world-cup-gold/50 group-focus-within:bg-world-cup-gold/20 transition-all">
              <User className="text-blue-200 group-focus-within:text-world-cup-gold transition-colors w-4 h-4 md:w-5 md:h-5" />
            </div>
            <input 
              type="text" 
              required
              placeholder="Nombre completo" 
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              className="glass-input w-full rounded-xl md:rounded-2xl py-3 pl-14 pr-4 md:py-4 md:pl-16 md:pr-6 text-white placeholder-blue-300/50 focus:outline-none focus:ring-2 focus:ring-world-cup-gold focus:border-transparent text-base md:text-xl font-medium"
            />
          </div>
          <div className="relative group">
            <div className="absolute left-3 md:left-4 top-1/2 -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 bg-white/10 rounded-lg md:rounded-xl flex items-center justify-center border border-white/10 group-focus-within:border-world-cup-gold/50 group-focus-within:bg-world-cup-gold/20 transition-all">
              <Mail className="text-blue-200 group-focus-within:text-world-cup-gold transition-colors w-4 h-4 md:w-5 md:h-5" />
            </div>
            <input 
              type="email" 
              required
              placeholder="Correo electrónico" 
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              className="glass-input w-full rounded-xl md:rounded-2xl py-3 pl-14 pr-4 md:py-4 md:pl-16 md:pr-6 text-white placeholder-blue-300/50 focus:outline-none focus:ring-2 focus:ring-world-cup-gold focus:border-transparent text-base md:text-xl font-medium"
            />
          </div>
          <div className="relative group">
            <div className="absolute left-3 md:left-4 top-1/2 -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 bg-white/10 rounded-lg md:rounded-xl flex items-center justify-center border border-white/10 group-focus-within:border-world-cup-gold/50 group-focus-within:bg-world-cup-gold/20 transition-all">
              <Phone className="text-blue-200 group-focus-within:text-world-cup-gold transition-colors w-4 h-4 md:w-5 md:h-5" />
            </div>
            <input 
              type="tel" 
              required
              placeholder="Teléfono" 
              value={formData.phone}
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
              className="glass-input w-full rounded-xl md:rounded-2xl py-3 pl-14 pr-4 md:py-4 md:pl-16 md:pr-6 text-white placeholder-blue-300/50 focus:outline-none focus:ring-2 focus:ring-world-cup-gold focus:border-transparent text-base md:text-xl font-medium"
            />
          </div>
        </div>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          type="submit"
          className="w-full mt-6 md:mt-8 bg-gradient-to-r from-brand-blue to-world-cup-gold text-white font-black text-lg md:text-2xl py-4 md:py-5 rounded-xl md:rounded-2xl shadow-[0_0_20px_rgba(161,192,79,0.3)] hover:shadow-[0_0_40px_rgba(161,192,79,0.5)] md:shadow-[0_0_30px_rgba(161,192,79,0.3)] md:hover:shadow-[0_0_50px_rgba(161,192,79,0.5)] flex items-center justify-center gap-3 md:gap-4 transition-all relative overflow-hidden group"
        >
          <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
          <span className="relative z-10 drop-shadow-md">COMENZAR TRIVIA</span>
          <ArrowRight className="relative z-10 w-6 h-6 md:w-7 md:h-7" />
        </motion.button>
      </form>
    </motion.div>
  );
};
