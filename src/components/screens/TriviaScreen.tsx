import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Clock, HelpCircle } from 'lucide-react';
import { questions } from '../../data/questions';
import type { Question } from '../../data/questions';

interface Props {
  onComplete: (score: number, timeTaken: number) => void;
}

export const TriviaScreen: React.FC<Props> = ({ onComplete }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(15);
  const [totalTime, setTotalTime] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isAnswerRevealed, setIsAnswerRevealed] = useState(false);
  const [gameQuestions, setGameQuestions] = useState<Question[]>([]);

  useEffect(() => {
    const shuffled = [...questions].sort(() => 0.5 - Math.random());
    setGameQuestions(shuffled.slice(0, 5));
  }, []);

  const currentQuestion = gameQuestions[currentQuestionIndex];

  useEffect(() => {
    if (!currentQuestion || isAnswerRevealed) return;

    if (timeLeft === 0) {
      handleAnswer(-1); // Time out
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft(prev => prev - 1);
      setTotalTime(prev => prev + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, isAnswerRevealed, currentQuestion]);

  const handleAnswer = (index: number) => {
    if (isAnswerRevealed) return;
    
    setSelectedAnswer(index);
    setIsAnswerRevealed(true);

    if (index === currentQuestion.correctAnswer) {
      setScore(prev => prev + 100 + (timeLeft * 10)); // Bonus for time
    }

    setTimeout(() => {
      if (currentQuestionIndex < gameQuestions.length - 1) {
        setCurrentQuestionIndex(prev => prev + 1);
        setSelectedAnswer(null);
        setIsAnswerRevealed(false);
        setTimeLeft(15);
      } else {
        onComplete(score + (index === currentQuestion.correctAnswer ? 100 + (timeLeft * 10) : 0), totalTime);
      }
    }, 1200); // Reducido para mayor dinamismo
  };

  if (!currentQuestion) return <div className="text-white text-2xl md:text-4xl animate-pulse">Cargando...</div>;

  return (
    <motion.div 
      key="trivia-screen"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-5xl mx-auto flex flex-col gap-4 sm:gap-6 md:gap-8 lg:gap-10 p-4 md:p-6 pb-24 md:pb-6"
    >
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 glass-panel p-4 md:p-6 rounded-2xl md:rounded-[1.5rem]">
        <div className="flex items-center w-full sm:w-auto justify-between sm:justify-start gap-4 bg-white/5 p-2 pr-4 md:p-3 md:pr-6 rounded-xl md:rounded-2xl border border-white/10">
          <div className="w-10 h-10 md:w-12 md:h-12 bg-white/10 rounded-lg md:rounded-xl flex items-center justify-center border border-white/20">
            <HelpCircle className="text-world-cup-gold drop-shadow-[0_0_10px_rgba(161,192,79,0.8)] w-6 h-6 md:w-7 md:h-7" />
          </div>
          <span className="text-xl md:text-3xl font-black text-white tracking-wide">
            {currentQuestionIndex + 1} <span className="text-gray-500 text-lg md:text-2xl">/ {gameQuestions.length}</span>
          </span>
        </div>
        <div className="flex items-center w-full sm:w-auto justify-between sm:justify-end gap-4 md:gap-6">
          <div className="text-lg md:text-2xl text-blue-200 font-medium">Pts: <span className="font-black text-white text-2xl md:text-4xl ml-1 md:ml-2 text-glow">{score}</span></div>
          <div className={`flex items-center gap-2 md:gap-3 text-2xl md:text-4xl font-black px-4 py-2 md:px-6 md:py-4 rounded-xl md:rounded-2xl border ${timeLeft <= 5 ? 'bg-world-cup-red/20 text-world-cup-red border-world-cup-red/50 animate-pulse shadow-[0_0_30px_rgba(230,57,70,0.4)]' : 'glass-panel text-world-cup-gold border-world-cup-gold/30'}`}>
            <Clock className="w-6 h-6 md:w-9 md:h-9" />
            {timeLeft}s
          </div>
        </div>
      </div>

      {/* Pregunta */}
      <div className="glass-panel rounded-3xl md:rounded-[2.5rem] p-6 md:p-14 text-center min-h-[150px] md:min-h-[250px] flex items-center justify-center relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[2px] bg-gradient-to-r from-transparent via-world-cup-gold/50 to-transparent" />
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-black leading-tight text-glow tracking-tight">
          {currentQuestion.question}
        </h2>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-[2px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      </div>

      {/* Opciones */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        {currentQuestion.options.map((option, index) => {
          let btnClass = "glass-button text-base sm:text-lg md:text-2xl p-4 md:p-8 rounded-2xl md:rounded-[1.5rem] text-left font-bold relative overflow-hidden flex items-center gap-4 md:gap-6 ";
          
          if (isAnswerRevealed) {
            if (index === currentQuestion.correctAnswer) {
              btnClass += "bg-world-cup-green/40 border-world-cup-green shadow-[0_0_30px_rgba(33,140,29,0.5)] md:shadow-[0_0_40px_rgba(33,140,29,0.6)]";
            } else if (index === selectedAnswer) {
              btnClass += "bg-world-cup-red/40 border-world-cup-red shadow-[0_0_30px_rgba(230,57,70,0.5)] md:shadow-[0_0_40px_rgba(230,57,70,0.6)]";
            } else {
              btnClass += "opacity-30 grayscale";
            }
          }

          return (
            <motion.button
              key={index}
              whileHover={!isAnswerRevealed ? { scale: 1.02 } : {}}
              whileTap={!isAnswerRevealed ? { scale: 0.98 } : {}}
              className={btnClass}
              onClick={() => handleAnswer(index)}
              disabled={isAnswerRevealed}
            >
              {isAnswerRevealed && index === currentQuestion.correctAnswer && (
                <div className="absolute inset-0 bg-world-cup-green/20 animate-pulse" />
              )}
              <span className="relative z-10 flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-white/10 flex items-center justify-center text-world-cup-gold text-xl md:text-2xl border border-white/20 drop-shadow-md">
                {['A', 'B', 'C', 'D'][index]}
              </span>
              <span className="relative z-10 flex-1 leading-snug">{option}</span>
            </motion.button>
          );
        })}
      </div>
    </motion.div>
  );
};
