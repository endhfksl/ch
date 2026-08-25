/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { characters, worldInfo } from './data';
import { CharacterCard } from './components/CharacterCard';
import { MapSection } from './components/MapSection';
import { AbilitySection } from './components/AbilitySection';
import { PlaceSection } from './components/PlaceSection';
import { CoverPage } from './components/CoverPage';
import { cn } from './lib/utils';
import { motion, AnimatePresence } from 'motion/react';
import { Map as MapIcon, Users, ScrollText, Castle } from 'lucide-react';

type Tab = 'world' | 'places' | 'abilities' | 'characters';

export default function App() {
  const [hasEntered, setHasEntered] = useState(false);
  const [activeTab, setActiveTab] = useState<Tab>('world');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const velvetRougeChars = characters.filter(c => c.faction === 'Velvet Rouge');
  const noireChars = characters.filter(c => c.faction === 'Noire');
  const otherChars = characters.filter(c => c.faction === 'Others');

  const navItems = [
    { id: 'world', label: '세계관 및 지도', icon: MapIcon },
    { id: 'places', label: '알트루주의 밤', icon: Castle },
    { id: 'abilities', label: '능력과 경지', icon: ScrollText },
    { id: 'characters', label: '등장인물', icon: Users },
  ] as const;

  return (
    <AnimatePresence mode="wait">
      {!hasEntered ? (
        <motion.div 
          key="cover" 
          exit={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }} 
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <CoverPage onEnter={() => setHasEntered(true)} />
        </motion.div>
      ) : (
        <motion.div 
          key="main" 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 0.8, delay: 0.2 }}
          className="min-h-screen bg-stone-950 text-stone-300 selection:bg-rose-900/50 font-sans"
        >
          {/* Header / Nav */}
      <header className={cn(
        "fixed top-0 inset-x-0 z-40 transition-all duration-300 border-b",
        scrolled 
          ? "bg-stone-950/80 backdrop-blur-md border-stone-800 py-3 shadow-lg" 
          : "bg-transparent border-transparent py-5"
      )}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <h1 className="text-2xl font-serif font-bold text-stone-100 tracking-widest flex items-center">
            <span className="text-rose-500 mr-2">✦</span> ALTRUJU
          </h1>
          <nav className="flex space-x-1 sm:space-x-2 overflow-x-auto max-w-full pb-2 md:pb-0 scrollbar-hide">
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className={cn(
                  "flex items-center px-4 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap",
                  activeTab === item.id
                    ? "bg-rose-900/40 text-rose-300 border border-rose-800/50 shadow-inner"
                    : "text-stone-400 hover:text-stone-200 hover:bg-stone-900 border border-transparent"
                )}
              >
                <item.icon className="w-4 h-4 mr-2" />
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto min-h-screen flex flex-col">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="flex-1 w-full"
          >
            {activeTab === 'world' && (
              <div className="space-y-16">
                <div className="text-center max-w-3xl mx-auto space-y-6">
                  <h2 className="text-4xl font-serif text-stone-100 font-bold leading-tight">
                    아리시움 대륙에 오신 것을 <br /> 환영합니다
                  </h2>
                  <p className="text-lg text-stone-400 leading-relaxed">
                    {worldInfo.summary}
                  </p>
                </div>
                
                <MapSection />
                
                <div className="max-w-5xl mx-auto pt-8">
                  <h3 className="text-2xl font-serif font-bold text-stone-100 text-center mb-8 border-b border-stone-800 pb-4">대륙의 종족들</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {worldInfo.races.map(race => (
                      <div key={race.name} className="bg-stone-900 border border-stone-800 p-4 rounded-xl hover:border-stone-700 transition-colors">
                        <h4 className="font-bold text-rose-400 mb-1">{race.name}</h4>
                        <p className="text-sm text-stone-400">{race.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'places' && <PlaceSection />}
            
            {activeTab === 'abilities' && <AbilitySection />}
            
            {activeTab === 'characters' && (
              <div className="space-y-16">
                <div className="text-center">
                  <h2 className="text-3xl font-serif text-stone-100 font-bold tracking-wide">등장인물 (Characters)</h2>
                  <p className="text-stone-400 mt-4 max-w-2xl mx-auto">
                    알트루주를 수놓는 다양한 인물들의 이야기. 카드를 클릭하여 갤러리를 확인할 수 있습니다.
                  </p>
                </div>

                {/* Velvet Rouge */}
                <section>
                  <div className="flex items-center space-x-4 mb-8">
                    <h3 className="text-2xl font-serif font-bold text-rose-500">벨벳 루즈</h3>
                    <div className="h-px bg-stone-800 flex-1" />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {velvetRougeChars.map(char => (
                      <CharacterCard key={char.id} character={char} />
                    ))}
                  </div>
                </section>

                {/* Noire */}
                <section>
                  <div className="flex items-center space-x-4 mb-8">
                    <h3 className="text-2xl font-serif font-bold text-amber-500">노아르</h3>
                    <div className="h-px bg-stone-800 flex-1" />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {noireChars.map(char => (
                      <CharacterCard key={char.id} character={char} />
                    ))}
                  </div>
                </section>

                {/* Others */}
                <section>
                  <div className="flex items-center space-x-4 mb-8">
                    <h3 className="text-2xl font-serif font-bold text-stone-300">그 외의 인물들</h3>
                    <div className="h-px bg-stone-800 flex-1" />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {otherChars.map(char => (
                      <CharacterCard key={char.id} character={char} />
                    ))}
                  </div>
                </section>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </main>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
