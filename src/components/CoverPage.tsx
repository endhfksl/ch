import { motion } from 'motion/react';
import { Sparkles } from 'lucide-react';

interface CoverPageProps {
  onEnter: () => void;
}

export function CoverPage({ onEnter }: CoverPageProps) {
  return (
    <div className="min-h-screen bg-stone-950 flex flex-col items-center justify-center relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-stone-900 via-stone-950 to-stone-950" />
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/black-scales.png')] opacity-[0.03] mix-blend-overlay" />
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-rose-900/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-amber-900/10 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="relative z-10 flex flex-col items-center space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="text-center space-y-6"
        >
          <p className="text-rose-500 font-serif italic tracking-widest text-sm md:text-base">
            이세계 로맨틱 코미디 시뮬레이션
          </p>
          <h1 className="text-6xl md:text-8xl font-serif text-stone-100 font-bold tracking-widest drop-shadow-2xl">
            ALTRUJU
          </h1>
          <p className="text-stone-400 text-lg md:text-xl tracking-[0.3em] font-light">
            욕망과 쾌락의 도시, 알트루주
          </p>
        </motion.div>

        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          onClick={onEnter}
          className="group relative px-10 py-4 bg-stone-950/50 hover:bg-stone-900 border border-stone-800 hover:border-rose-900/80 rounded-full text-stone-300 hover:text-stone-100 transition-all duration-500 overflow-hidden shadow-2xl backdrop-blur-sm"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-rose-900/0 via-rose-900/10 to-amber-900/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          <span className="relative flex items-center space-x-3 text-sm md:text-base font-bold tracking-widest">
            <span>입장하기</span>
            <Sparkles className="w-5 h-5 text-rose-700 group-hover:text-rose-400 transition-colors duration-500" />
          </span>
        </motion.button>
      </div>
    </div>
  );
}
