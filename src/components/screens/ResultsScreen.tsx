import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Award, Timer, RotateCcw, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';
import { supabase } from '../../lib/supabase';
import type { Participant } from '../../lib/supabase';

interface Props {
  participant: Participant | null;
  score: number;
  timeTaken: number;
  onReset: () => void;
}

export const ResultsScreen: React.FC<Props> = ({ participant, score, timeTaken, onReset }) => {
  
  useEffect(() => {
    // 1. Tirar MUCHO confeti con los colores de la marca
    const duration = 3000;
    const end = Date.now() + duration;

    const frame = () => {
      confetti({
        particleCount: 5,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ['#1883AB', '#A1C04F', '#218C1D', '#ffffff']
      });
      confetti({
        particleCount: 5,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ['#1883AB', '#A1C04F', '#218C1D', '#ffffff']
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    };
    frame();

    // 2. Intentar guardar en DB si hay participante
    const saveResults = async () => {
      if (participant && participant.name && participant.email) {
        try {
          // Fire and forget
          await supabase.from('participants').insert([
            {
              name: participant.name,
              email: participant.email,
              phone: participant.phone || '',
              score: score,
              time_seconds: timeTaken
            }
          ]);
        } catch (error) {
          console.error("Error saving to db:", error);
        }
      }
    };
    
    saveResults();
  }, [participant, score, timeTaken]);

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 1.1, y: -20 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full max-w-4xl mx-auto p-6 sm:p-8 md:p-10 lg:p-14 glass-panel rounded-[2rem] md:rounded-[2.5rem] text-center"
    >
      <motion.div 
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", bounce: 0.5, delay: 0.3 }}
        className="w-24 h-24 md:w-32 md:h-32 bg-world-cup-green rounded-full mx-auto flex items-center justify-center mb-6 md:mb-10 shadow-[0_0_30px_rgba(33,140,29,0.4)] md:shadow-[0_0_50px_rgba(33,140,29,0.5)] border-4 border-white/20"
      >
        <CheckCircle2 className="text-white w-12 h-12 md:w-20 md:h-20" />
      </motion.div>

      <h1 className="text-4xl sm:text-5xl md:text-7xl font-black mb-3 md:mb-4 text-glow tracking-tight">¡Misión Cumplida!</h1>
      <p className="text-lg sm:text-xl md:text-3xl text-blue-200 mb-8 md:mb-12 font-medium">
        Gracias por participar, <span className="text-world-cup-gold font-bold break-words block sm:inline">{participant?.name || 'Jugador'}</span>
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-8 md:mb-12">
        <motion.div 
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="bg-black/30 rounded-[1.5rem] md:rounded-[2rem] p-6 md:p-10 border border-white/10 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-world-cup-gold/10 to-transparent" />
          <Award className="text-world-cup-gold mx-auto mb-3 md:mb-4 drop-shadow-md w-10 h-10 md:w-12 md:h-12" />
          <div className="text-blue-200 text-lg md:text-2xl font-medium mb-2 md:mb-3">Puntaje Final</div>
          <div className="text-5xl sm:text-6xl md:text-7xl font-black text-world-cup-gold text-glow">{score}</div>
        </motion.div>

        <motion.div 
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="bg-black/30 rounded-[1.5rem] md:rounded-[2rem] p-6 md:p-10 border border-white/10 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-400/10 to-transparent" />
          <Timer className="text-blue-300 mx-auto mb-3 md:mb-4 drop-shadow-md w-10 h-10 md:w-12 md:h-12" />
          <div className="text-blue-200 text-lg md:text-2xl font-medium mb-2 md:mb-3">Tiempo Total</div>
          <div className="text-5xl sm:text-6xl md:text-7xl font-black text-white text-glow">{timeTaken}s</div>
        </motion.div>
      </div>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={onReset}
        className="mx-auto flex w-full md:w-auto items-center justify-center gap-3 md:gap-4 bg-white/10 hover:bg-white/20 border border-white/30 text-white px-6 md:px-10 py-4 md:py-6 rounded-xl md:rounded-[1.5rem] text-xl md:text-2xl font-bold transition-all shadow-lg"
      >
        <RotateCcw className="w-6 h-6 md:w-8 md:h-8" />
        Siguiente Participante
      </motion.button>
    </motion.div>
  );
};
