import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { RegistrationScreen } from './screens/RegistrationScreen';
import { TriviaScreen } from './screens/TriviaScreen';
import { ResultsScreen } from './screens/ResultsScreen';
import type { Participant } from '../lib/supabase';

type ScreenState = 'REGISTRATION' | 'TRIVIA' | 'RESULTS';

export const ScreenManager: React.FC = () => {
  const [currentScreen, setCurrentScreen] = useState<ScreenState>('REGISTRATION');
  const [participant, setParticipant] = useState<Participant | null>(null);
  const [score, setScore] = useState(0);
  const [timeTaken, setTimeTaken] = useState(0);
  const [showTransition, setShowTransition] = useState(false);

  const handleRegister = (newParticipant: Participant) => {
    setParticipant(newParticipant);
    setCurrentScreen('TRIVIA');
  };

  const handleTriviaComplete = (finalScore: number, finalTime: number) => {
    setScore(finalScore);
    setTimeTaken(finalTime);
    setCurrentScreen('RESULTS');
  };

  const handleReset = () => {
    setShowTransition(true);
    // La limpieza de estado y el cambio a REGISTRATION se harán cuando termine el video
  };

  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-4">
      {/* Decorative background elements for large screens - STADIUM LIGHTS EFFECT */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none bg-world-cup-blue">
        <div className="absolute top-0 left-[20%] w-[60%] h-[30%] bg-blue-400/20 blur-[150px] rounded-full" />
        <div className="absolute top-[-10%] right-[-5%] w-[40%] h-[40%] bg-world-cup-gold/15 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-20%] left-[-10%] w-[50%] h-[50%] bg-world-cup-red/15 blur-[150px] rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-white/[0.02] blur-[100px] rounded-full mix-blend-overlay" />
      </div>

      <AnimatePresence mode="wait">
        {currentScreen === 'REGISTRATION' && (
          <RegistrationScreen key="registration" onRegister={handleRegister} />
        )}
        
        {currentScreen === 'TRIVIA' && (
          <TriviaScreen key="trivia" onComplete={handleTriviaComplete} />
        )}
        
        {currentScreen === 'RESULTS' && (
          <ResultsScreen 
            key="results" 
            participant={participant} 
            score={score} 
            timeTaken={timeTaken}
            onReset={handleReset} 
          />
        )}
      </AnimatePresence>

      {/* Global Footer Branding (Only on Trivia) */}
      {currentScreen === 'TRIVIA' && (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 pointer-events-none"
        >
          <div className="bg-white/85 backdrop-blur-2xl px-10 py-3 rounded-[2rem] shadow-[0_0_50px_rgba(255,255,255,0.15)] border border-white/50 flex items-center justify-center">
            <img 
              src="/greenworking-soluciones-tecnologicas-logo-green-vf-1.png" 
              alt="Greenworking Logo" 
              className="h-7 md:h-10 object-contain drop-shadow-sm saturate-150"
            />
          </div>
        </motion.div>
      )}

      {/* Video Transition Overlay */}
      <AnimatePresence>
        {showTransition && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[100] bg-black flex items-center justify-center"
          >
            <video 
              src="/0505.mp4" 
              autoPlay 
              muted 
              playsInline
              className="w-full h-full object-cover"
              onEnded={() => {
                setShowTransition(false);
                setParticipant(null);
                setScore(0);
                setTimeTaken(0);
                setCurrentScreen('REGISTRATION');
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
