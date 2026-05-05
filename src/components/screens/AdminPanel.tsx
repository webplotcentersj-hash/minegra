import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Lock, Download, RefreshCcw, Database } from 'lucide-react';
import { supabase } from '../../lib/supabase';
import type { Participant } from '../../lib/supabase';

export const AdminPanel: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [participants, setParticipants] = useState<Participant[]>([]);
  const [isLoading, setIsLoading] = useState(false);

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
      const { data, error } = await supabase
        .from('participants')
        .select('*')
        .order('score', { ascending: false })
        .order('time_seconds', { ascending: true });

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
    <div className="w-full min-h-screen p-4 md:p-8 flex flex-col">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6 md:mb-8 bg-black/30 p-4 md:p-6 rounded-2xl border border-white/10 backdrop-blur-md">
        <div className="flex items-center gap-3 md:gap-4">
          <Database className="text-world-cup-gold w-8 h-8 md:w-10 md:h-10" />
          <h1 className="text-xl md:text-3xl font-bold text-white text-glow">Panel de Administración - Leads</h1>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 md:gap-4 w-full md:w-auto">
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

      <div className="glass-panel rounded-2xl overflow-hidden flex-1 flex flex-col">
        <div className="overflow-x-auto flex-1">
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
                          <a href={waLink} target="_blank" rel="noreferrer" className="text-green-400 hover:text-green-300 transition-colors" title="Abrir en WhatsApp">
                            <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="css-i6dzq1"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
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
