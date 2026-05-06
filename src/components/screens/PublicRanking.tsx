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
          { name: "Lionel Messi", score: 5000, time_seconds: 45, email: "", phone: "", company: "Inter Miami" },
          { name: "Dibu Martínez", score: 4800, time_seconds: 48, email: "", phone: "", company: "Aston Villa" },
          { name: "Ángel Di María", score: 4500, time_seconds: 52, email: "", phone: "", company: "Benfica" },
          { name: "Julián Álvarez", score: 4200, time_seconds: 55, email: "", phone: "", company: "Man City" },
          { name: "Enzo Fernández", score: 4000, time_seconds: 58, email: "", phone: "", company: "Chelsea" },
          { name: "Alexis Mac Allister", score: 3900, time_seconds: 60, email: "", phone: "", company: "Liverpool" },
          { name: "Cuti Romero", score: 3800, time_seconds: 62, email: "", phone: "", company: "Tottenham" }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchRanking();
    
    // Suscripción en tiempo real a Supabase
    const channel = supabase.channel('custom-all-channel')
      .on(
        'postgres_changes',
        { event: '*', schema: 'public', table: 'participants' },
        () => {
          fetchRanking();
        }
      )
      .subscribe();

    // Fallback polling de seguridad por si falla el realtime
    const interval = setInterval(fetchRanking, 10000);
    
    return () => {
      clearInterval(interval);
      supabase.removeChannel(channel);
    };
  }, []);

  const podiumOrder = [
    topPlayers[1], // Plata (Izquierda)
    topPlayers[0], // Oro (Centro)
    topPlayers[2]  // Bronce (Derecha)
  ];

  return (
    <div className="w-full h-screen p-2 sm:p-4 md:p-6 flex flex-col items-center overflow-hidden relative">
      {/* Elementos decorativos */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-20%] left-[10%] w-[50%] h-[50%] rounded-full bg-brand-blue/20 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[10%] w-[50%] h-[50%] rounded-full bg-world-cup-gold/10 blur-[120px]" />
      </div>

      <div className="w-full max-w-7xl mt-2 flex flex-col gap-4 relative z-10 h-full max-h-full">
        
        {/* ENCABEZADO INTEGRADO */}
        <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-2 glass-panel rounded-xl md:rounded-2xl p-4 md:px-8 md:py-4 relative overflow-hidden shrink-0">
           <div className="absolute inset-0 bg-gradient-to-r from-brand-blue/10 to-transparent"></div>
           <div className="flex items-center gap-4 relative z-10">
             <Trophy className="text-yellow-400 gold-glow w-10 h-10 md:w-14 md:h-14" />
             <h1 className="text-3xl md:text-5xl font-black text-glow tracking-tight text-center sm:text-left">RANKING GLOBAL</h1>
           </div>
           
           <div className="flex items-center gap-4 relative z-10">
              <div className="flex items-center gap-2 bg-black/40 backdrop-blur-md px-4 py-2 rounded-full border border-red-500/30 shadow-[0_0_15px_rgba(239,68,68,0.2)]">
                <div className="w-3 h-3 rounded-full bg-red-500 animate-pulse shadow-[0_0_10px_rgba(239,68,68,0.8)]"></div>
                <span className="text-red-500 font-bold tracking-widest text-sm md:text-base">EN VIVO</span>
              </div>
           </div>
        </div>

        {/* CONTENEDOR PRINCIPAL DASHBOARD */}
        <div className="glass-panel rounded-2xl md:rounded-3xl p-4 md:p-8 w-full flex flex-col xl:flex-row gap-8 md:gap-12 items-center xl:items-start justify-center flex-1 relative overflow-hidden">
          
          <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent pointer-events-none"></div>

          {isLoading && topPlayers.length === 0 ? (
            <div className="absolute inset-0 flex items-center justify-center text-xl md:text-2xl text-blue-200 animate-pulse">Cargando ranking...</div>
          ) : topPlayers.length === 0 ? (
            <div className="absolute inset-0 flex items-center justify-center text-xl md:text-2xl text-blue-200">Aún no hay jugadores registrados.</div>
          ) : (
            <>
              {/* PODIO (TOP 3) */}
              <div className="flex-1 flex items-end justify-center gap-2 sm:gap-4 md:gap-6 h-full min-h-[250px] md:min-h-[350px] relative z-10 w-full xl:w-auto pb-4">
                {podiumOrder.map((player, index) => {
                  if (!player) return <div key={index} className="w-24 sm:w-28 md:w-44" />; 
                  
                  const position = index === 0 ? 2 : index === 1 ? 1 : 3;
                  const heights = { 1: 'h-48 md:h-64', 2: 'h-36 md:h-48', 3: 'h-24 md:h-36' };
                  const colors = { 
                    1: 'from-yellow-400/90 to-yellow-600/80 border-yellow-300 shadow-[0_0_60px_rgba(250,204,21,0.8),inset_0_0_20px_rgba(250,204,21,0.5)]',
                    2: 'from-gray-300/90 to-gray-500/80 border-gray-200 shadow-[0_0_50px_rgba(209,213,219,0.6),inset_0_0_20px_rgba(209,213,219,0.4)]',
                    3: 'from-amber-500/90 to-amber-700/80 border-amber-400 shadow-[0_0_50px_rgba(217,119,6,0.6),inset_0_0_20px_rgba(217,119,6,0.4)]'
                  };
                  
                  return (
                    <motion.div 
                      key={`podium-${position}`}
                      layoutId={`player-${player.id || player.name}`}
                      initial={{ opacity: 0, y: 100 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: position * 0.2, type: "spring", stiffness: 100 }}
                      className="flex flex-col items-center group cursor-default"
                    >
                      {/* Avatar / Nombre */}
                      <div className="mb-4 flex flex-col items-center relative transition-transform duration-300 group-hover:-translate-y-2">
                        <div className="absolute -inset-4 bg-white/5 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        {position === 1 && <Crown className="text-yellow-400 mb-2 drop-shadow-[0_0_25px_rgba(250,204,21,1)] w-12 h-12 md:w-16 md:h-16" />}
                        {position === 2 && <Medal className="text-gray-300 mb-2 drop-shadow-[0_0_10px_rgba(209,213,219,0.6)] w-10 h-10 md:w-12 md:h-12" />}
                        {position === 3 && <Medal className="text-amber-600 mb-2 drop-shadow-[0_0_10px_rgba(217,119,6,0.6)] w-10 h-10 md:w-12 md:h-12" />}
                        <div className="font-black text-xl md:text-3xl text-center truncate w-24 sm:w-28 md:w-44 text-glow">
                          {player.name.split(' ')[0]}
                        </div>
                        <div className="text-world-cup-gold font-bold text-lg md:text-2xl mt-1 bg-black/40 px-3 py-1 rounded-full border border-white/10 backdrop-blur-sm shadow-lg">
                          {player.score} pts
                        </div>
                      </div>
                      
                      {/* Columna del podio */}
                      <div className={`w-24 sm:w-28 md:w-44 rounded-t-xl md:rounded-t-2xl bg-gradient-to-b border-t-2 md:border-t-4 backdrop-blur-md ${colors[position as 1|2|3]} ${heights[position as 1|2|3]} flex justify-center items-start pt-4 md:pt-6 relative overflow-hidden transition-all duration-300 group-hover:brightness-110`}>
                        <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent" />
                        <div className="absolute top-0 left-0 w-full h-[1px] bg-white/50" />
                        <span className="text-4xl md:text-7xl font-black text-white/40 drop-shadow-md relative z-10">{position}</span>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* LISTA (4 al 10) */}
              {topPlayers.length > 3 && (
                <div className="w-full xl:w-[450px] flex flex-col gap-3 relative z-10">
                  <div className="flex items-center gap-3 mb-2 px-2">
                    <div className="w-1.5 h-6 bg-brand-blue rounded-full"></div>
                    <h3 className="text-xl md:text-2xl font-bold text-white/90">Siguientes Posiciones</h3>
                  </div>
                  
                  <div className="flex flex-col gap-2">
                    <AnimatePresence>
                      {topPlayers.slice(3).map((player, idx) => {
                        const pos = idx + 4;
                        return (
                          <motion.div 
                            key={`list-${player.id || player.name}`}
                            layout
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.5 + (idx * 0.1), type: "spring" }}
                            className="group flex items-center justify-between bg-black/30 p-2 md:p-3 rounded-xl border border-white/5 hover:border-brand-blue/30 hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
                          >
                            <div className="flex items-center gap-4">
                              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/5 border border-white/10 group-hover:border-brand-blue/50 flex items-center justify-center font-black text-lg md:text-xl text-white/70 group-hover:text-white transition-colors">
                                {pos}
                              </div>
                              <div className="font-bold text-lg md:text-xl truncate max-w-[140px] sm:max-w-[200px] md:max-w-[180px] group-hover:text-glow transition-all">
                                {player.name}
                              </div>
                            </div>
                            <div className="text-right flex flex-col justify-center">
                              <div className="font-black text-world-cup-gold text-lg md:text-xl leading-none">{player.score} pts</div>
                              <div className="text-xs md:text-sm text-gray-400 mt-1">{player.time_seconds}s</div>
                            </div>
                          </motion.div>
                        );
                      })}
                    </AnimatePresence>
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>

      {/* FOOTER INTEGRADO CON LOGO */}
      <div className="w-full pt-2 pb-2 flex justify-center relative z-10 shrink-0 mt-auto">
        <div className="glass-panel px-6 md:px-8 py-2 md:py-3 rounded-full border border-white/10 flex items-center gap-3 md:gap-4 hover:bg-white/5 transition-colors">
          <span className="text-white/40 text-xs md:text-sm font-medium tracking-wider">POWERED BY</span>
          <img 
            src="/greenworking-soluciones-tecnologicas-logo-green-vf-1.png" 
            alt="Greenworking Logo" 
            className="h-6 md:h-8 object-contain brightness-0 invert opacity-80 transition-opacity hover:opacity-100"
          />
        </div>
      </div>

    </div>
  );
};
