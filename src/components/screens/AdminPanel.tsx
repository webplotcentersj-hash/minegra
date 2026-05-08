import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Lock, Download, RefreshCcw, Database } from 'lucide-react';
import { supabase, getCurrentSession, resetGameSession, SYSTEM_EMAIL } from '../../lib/supabase';
import type { Participant, GameSession } from '../../lib/supabase';

export const AdminPanel: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [participants, setParticipants] = useState<Participant[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentSession, setCurrentSession] = useState<GameSession | null>(null);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'admin123') {
      setIsAuthenticated(true);
      fetchData();
    } else {
      alert('Contraseña incorrecta');
    }
  };

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const session = await getCurrentSession();
      setCurrentSession(session);

      let query = supabase
        .from('participants')
        .select('*')
        .neq('email', SYSTEM_EMAIL)
        .order('score', { ascending: false })
        .order('time_seconds', { ascending: true });

      if (session) {
        query = query.gt('created_at', session.created_at);
      }

      const { data, error } = await query;

      if (error) throw error;
      
      if (data) {
        setParticipants(data as Participant[]);
      }
    } catch (error) {
      console.error('Error fetching admin data:', error);
      // Fallback para pruebas si no hay Supabase
      if (participants.length === 0) {
        setParticipants([
          { id: '1', name: "Juan Pérez", email: "juan@ejemplo.com", phone: "+541122334455", company: "Empresa A", score: 4500, time_seconds: 52, created_at: new Date().toISOString() },
          { id: '2', name: "María Gómez", email: "maria@ejemplo.com", phone: "+5491133445566", company: "Institución B", score: 3800, time_seconds: 60, created_at: new Date(Date.now() - 3600000).toISOString() }
        ]);
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = async () => {
    const sessionName = window.prompt('Ingrese el nombre para la nueva sesión (ej. Día 2, Turno Tarde):');
    if (!sessionName) return;

    if (window.confirm(`¿Seguro que deseas reiniciar el ranking y comenzar la sesión "${sessionName}"? Los datos anteriores no se borrarán.`)) {
      setIsLoading(true);
      try {
        await resetGameSession(sessionName);
        await fetchData();
      } catch (error) {
        console.error('Error reset session:', error);
        alert('Hubo un error al reiniciar la sesión');
        setIsLoading(false);
      }
    }
  };

  const downloadCSV = () => {
    if (participants.length === 0) return;

    // Headers
    const headers = ['Nombre', 'Empresa/Institución', 'Email', 'Teléfono', 'Puntaje', 'Tiempo (s)', 'Fecha y Hora'];
    
    // Rows
    const rows = participants.map(p => [
      p.name,
      p.company || '-',
      p.email,
      p.phone,
      p.score?.toString() || '0',
      p.time_seconds?.toString() || '0',
      p.created_at ? new Date(p.created_at).toLocaleString() : '-'
    ]);

    const csvContent = [
      headers.join(','),
      ...rows.map(e => e.join(','))
    ].join('\n');

    // Blob & Download
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', `leads_trivia_${new Date().toISOString().split('T')[0]}.csv`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (!isAuthenticated) {
    return (
      <div className="w-full min-h-screen flex items-center justify-center p-4">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="glass-panel p-10 rounded-3xl max-w-md w-full flex flex-col items-center"
        >
          <div className="w-20 h-20 bg-world-cup-blue rounded-full flex items-center justify-center mb-6 shadow-lg border border-white/20">
            <Lock size={40} className="text-white" />
          </div>
          <h2 className="text-3xl font-bold mb-6 text-glow text-center">Acceso Administrador</h2>
          <form onSubmit={handleLogin} className="w-full flex flex-col gap-4">
            <input 
              type="password" 
              placeholder="Contraseña" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-white/5 border border-white/20 rounded-xl py-4 px-4 text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-world-cup-gold"
            />
            <button 
              type="submit"
              className="w-full bg-white text-world-cup-blue font-bold py-4 rounded-xl hover:bg-gray-200 transition-colors"
            >
              INGRESAR
            </button>
          </form>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="w-full h-screen p-4 md:p-8 flex flex-col">
      <div className={`flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6 md:mb-8 p-4 md:p-6 rounded-2xl border backdrop-blur-md transition-colors ${currentSession ? 'bg-world-cup-blue/20 border-world-cup-blue/40 shadow-[0_0_20px_rgba(24,131,171,0.2)]' : 'bg-black/30 border-white/10'}`}>
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-3 md:gap-4">
            <Database className="text-world-cup-gold w-8 h-8 md:w-10 md:h-10" />
            <h1 className="text-xl md:text-3xl font-bold text-white text-glow">Panel de Administración</h1>
          </div>
          {currentSession && (
            <div className="text-world-cup-green font-bold text-lg md:text-xl ml-11 md:ml-14">
              Sesión Activa: <span className="text-white">{currentSession.name}</span>
            </div>
          )}
        </div>
        <div className="flex flex-wrap sm:flex-nowrap gap-3 md:gap-4 w-full md:w-auto">
          <button 
            onClick={handleReset}
            disabled={isLoading}
            className="flex flex-1 sm:flex-none justify-center items-center gap-2 bg-red-500/20 hover:bg-red-500/40 border border-red-500/50 text-white px-4 md:px-6 py-3 rounded-xl transition-colors disabled:opacity-50"
            title="Borrar ranking público e iniciar nueva sesión"
          >
            Nueva Sesión
          </button>
          <button 
            onClick={fetchData}
            disabled={isLoading}
            className="flex flex-1 sm:flex-none justify-center items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white px-4 md:px-6 py-3 rounded-xl transition-colors disabled:opacity-50"
          >
            <RefreshCcw size={20} className={isLoading ? "animate-spin" : ""} />
            Actualizar
          </button>
          <button 
            onClick={downloadCSV}
            className="flex flex-1 sm:flex-none justify-center items-center gap-2 bg-world-cup-green text-white font-bold px-4 md:px-6 py-3 rounded-xl hover:bg-emerald-600 transition-colors shadow-lg"
          >
            <Download size={20} />
            Exportar CSV
          </button>
        </div>
      </div>

      <div className="glass-panel rounded-2xl overflow-hidden flex-1 flex flex-col min-h-0">
        <div className="overflow-auto flex-1">
          <table className="w-full text-left border-collapse whitespace-nowrap md:whitespace-normal">
            <thead>
              <tr className="bg-white/10 border-b border-white/20">
                <th className="p-4 font-bold text-blue-200">Posición</th>
                <th className="p-4 font-bold text-blue-200">Nombre</th>
                <th className="p-4 font-bold text-blue-200">Empresa</th>
                <th className="p-4 font-bold text-blue-200">Email</th>
                <th className="p-4 font-bold text-blue-200">Teléfono</th>
                <th className="p-4 font-bold text-blue-200 text-right">Puntaje</th>
                <th className="p-4 font-bold text-blue-200 text-right">Tiempo</th>
                <th className="p-4 font-bold text-blue-200">Fecha</th>
              </tr>
            </thead>
            <tbody>
              {participants.map((p, i) => {
                const phoneClean = p.phone.replace(/[^0-9]/g, '');
                const waLink = phoneClean ? `https://wa.me/${phoneClean}` : null;
                return (
                  <tr key={p.id || i} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                    <td className="p-4 text-world-cup-gold font-bold">#{i + 1}</td>
                    <td className="p-4 font-medium text-white">{p.name}</td>
                    <td className="p-4 text-gray-300">{p.company || '-'}</td>
                    <td className="p-4 text-gray-300">{p.email}</td>
                    <td className="p-4 text-gray-300">
                      <div className="flex items-center gap-2">
                        {p.phone}
                        {waLink && (
                          <a href={waLink} target="_blank" rel="noreferrer" className="hover:scale-110 transition-transform" title="Abrir en WhatsApp">
                            <svg viewBox="0 0 24 24" width="24" height="24" fill="#25D366" xmlns="http://www.w3.org/2000/svg">
                              <path d="M17.472 14.38c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.489-1.761-1.663-2.06-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
                            </svg>
                          </a>
                        )}
                      </div>
                    </td>
                    <td className="p-4 font-bold text-world-cup-gold text-right">{p.score}</td>
                    <td className="p-4 text-gray-300 text-right">{p.time_seconds}s</td>
                    <td className="p-4 text-gray-400 text-sm">
                      {p.created_at ? new Date(p.created_at).toLocaleDateString() : '-'}
                    </td>
                  </tr>
                );
              })}
              {participants.length === 0 && !isLoading && (
                <tr>
                  <td colSpan={8} className="p-8 text-center text-gray-400">
                    No hay participantes registrados todavía.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        <div className="bg-black/40 p-4 border-t border-white/10 text-gray-400 text-sm flex justify-between">
          <span>Total de leads: <strong className="text-white">{participants.length}</strong></span>
          <span>Mostrando registros ordenados por puntuación (mejores primero)</span>
        </div>
      </div>
    </div>
  );
};
