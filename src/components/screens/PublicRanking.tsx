import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Trophy, Medal, Crown } from 'lucide-react';
import { supabase } from '../../lib/supabase';
import type { Participant } from '../../lib/supabase';

export const PublicRanking: React.FC = () => {
  const [topPlayers, setTopPlayers] = useState<Participant[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchRanking = async () => {
    try {
      // Usamos limit(10) para traer a los mejores 10
      // Ordenamos por score (descendente) y si hay empate, por tiempo (ascendente)
      const { data, error } = await supabase
        .from('participants')
        .select('*')
        .order('score', { ascending: false })
        .order('time_seconds', { ascending: true })
        .limit(10);

      if (error) throw error;
      
      if (data && data.length > 0) {
        setTopPlayers(data as Participant[]);
      } else {
        setTopPlayers([]);
      }
    } catch (error) {
      console.error('Error fetching ranking:', error);
      // Fallback for demo when Supabase is not configured
      setTopPlayers([
          { name: "Lionel Messi", score: 5000, time_seconds: 45, email: "", phone: "" },
          { name: "Dibu Martínez", score: 4800, time_seconds: 48, email: "", phone: "" },
          { name: "Ángel Di María", score: 4500, time_seconds: 52, email: "", phone: "" }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchRanking();
    
    // Configurar recarga cada 5 segundos
    const interval = setInterval(fetchRanking, 5000);
    return () => clearInterval(interval);
  }, []);

  const podiumOrder = [
    topPlayers[1], // Plata (Izquierda)
    topPlayers[0], // Oro (Centro)
    topPlayers[2]  // Bronce (Derecha)
  ];

  return (
    <div className="w-full min-h-screen p-8 flex flex-col items-center">
      {/* Elementos decorativos */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-20%] left-[20%] w-[40%] h-[40%] rounded-full bg-world-cup-gold/10 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[10%] w-[50%] h-[50%] rounded-full bg-world-cup-blue/30 blur-[120px]" />
      </div>

      <motion.div 
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="flex items-center gap-4 mb-16 mt-8"
      >
        <Trophy size={64} className="text-world-cup-gold gold-glow" />
        <h1 className="text-6xl font-black text-glow">TOP JUGADORES</h1>
        <Trophy size={64} className="text-world-cup-gold gold-glow" />
      </motion.div>

      {isLoading && topPlayers.length === 0 ? (
        <div className="text-2xl text-blue-200 animate-pulse">Cargando ranking...</div>
      ) : topPlayers.length === 0 ? (
        <div className="text-2xl text-blue-200">Aún no hay jugadores registrados.</div>
      ) : (
        <div className="w-full max-w-6xl flex flex-col xl:flex-row gap-12 items-center xl:items-start justify-center">
          
          {/* PODIO (TOP 3) */}
          <div className="flex-1 flex items-end justify-center gap-4 md:gap-8 h-[400px]">
            {podiumOrder.map((player, index) => {
              if (!player) return <div key={index} className="w-32 md:w-40" />; // Espacio vacío si no hay jugador
              
              // Map index to position: 0 -> 2nd, 1 -> 1st, 2 -> 3rd
              const position = index === 0 ? 2 : index === 1 ? 1 : 3;
              const heights = { 1: 'h-64', 2: 'h-48', 3: 'h-36' };
              const colors = { 
                1: 'from-yellow-400 to-yellow-600 border-yellow-300 shadow-[0_0_30px_rgba(250,204,21,0.5)]',
                2: 'from-gray-300 to-gray-500 border-gray-200 shadow-[0_0_20px_rgba(209,213,219,0.4)]',
                3: 'from-amber-600 to-amber-800 border-amber-500 shadow-[0_0_20px_rgba(217,119,6,0.4)]'
              };
              
              return (
                <motion.div 
                  key={`podium-${position}`}
                  layoutId={`player-${player.id || player.name}`}
                  initial={{ opacity: 0, y: 100 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: position * 0.2, type: "spring" }}
                  className="flex flex-col items-center"
                >
                  {/* Avatar / Nombre */}
                  <div className="mb-4 flex flex-col items-center">
                    {position === 1 && <Crown size={48} className="text-yellow-400 mb-2 drop-shadow-[0_0_10px_rgba(250,204,21,0.8)]" />}
                    {position === 2 && <Medal size={40} className="text-gray-300 mb-2" />}
                    {position === 3 && <Medal size={40} className="text-amber-600 mb-2" />}
                    <div className="font-bold text-xl md:text-2xl text-center truncate w-32 md:w-40 text-glow">
                      {player.name.split(' ')[0]}
                    </div>
                    <div className="text-world-cup-gold font-black text-2xl mt-1">{player.score} pts</div>
                  </div>
                  
                  {/* Columna del podio */}
                  <div className={`w-32 md:w-40 rounded-t-xl bg-gradient-to-b border-t-4 ${colors[position as 1|2|3]} ${heights[position as 1|2|3]} flex justify-center items-start pt-6 relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-white/10 backdrop-blur-sm" />
                    <span className="text-5xl font-black text-white/50 relative z-10">{position}</span>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* LISTA (4 al 10) */}
          {topPlayers.length > 3 && (
            <div className="w-full max-w-lg glass-panel rounded-3xl p-6 flex flex-col gap-3">
              <h3 className="text-2xl font-bold text-world-cup-gold mb-2 border-b border-white/10 pb-4">Siguientes Posiciones</h3>
              <AnimatePresence>
                {topPlayers.slice(3).map((player, idx) => {
                  const pos = idx + 4;
                  return (
                    <motion.div 
                      key={`list-${player.id || player.name}`}
                      layout
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="flex items-center justify-between bg-black/40 p-4 rounded-xl border border-white/5 hover:bg-white/5 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center font-bold text-xl text-blue-200">
                          {pos}
                        </div>
                        <div className="font-bold text-xl">{player.name}</div>
                      </div>
                      <div className="text-right">
                        <div className="font-black text-world-cup-gold text-xl">{player.score} pts</div>
                        <div className="text-sm text-gray-400">{player.time_seconds}s</div>
                      </div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
