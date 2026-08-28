import { useState } from 'react';
import { Character } from '../types';
import { cn } from '../lib/utils';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface CharacterCardProps {
  character: Character;
}

const getImageUrl = (code: string, status: number) => 
  `https://pub-629384913ea14407b909cda63624f273.r2.dev/Ch/${code}${status}.png`;

export function CharacterCard({ character }: CharacterCardProps) {
  const [showSecret, setShowSecret] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);

  // Status codes: 1 = Default, 14 = Cheek Pinch, 18 = Signature Pose
  const imageStatuses = [1, 14, 18];
  
  const handleNextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setImageIndex((prev) => (prev + 1) % imageStatuses.length);
  };

  const handlePrevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setImageIndex((prev) => (prev - 1 + imageStatuses.length) % imageStatuses.length);
  };

  return (
    <>
      <div className="bg-stone-900 border border-stone-800 rounded-xl overflow-hidden shadow-xl hover:border-rose-900/50 transition-colors flex flex-col">
        <div 
          className="relative h-64 sm:h-80 cursor-pointer overflow-hidden group bg-stone-950 flex items-center justify-center"
          onClick={() => { setModalOpen(true); setImageIndex(0); }}
        >
          <img 
            src={getImageUrl(character.code, 1)} 
            alt={character.name}
            className="h-full w-full object-cover object-top opacity-90 group-hover:opacity-100 transition-opacity duration-300 group-hover:scale-105"
            onError={(e) => {
              (e.target as HTMLImageElement).src = 'https://via.placeholder.com/400x600/1c1917/f43f5e?text=' + character.name;
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-transparent to-transparent opacity-80" />
          <div className="absolute bottom-3 left-4 flex items-center space-x-2">
            <span className="text-xl font-serif text-stone-100 font-bold">{character.name}</span>
            <span className="text-xs bg-rose-900/40 text-rose-300 px-2 py-0.5 rounded-full border border-rose-800">
              {character.code}
            </span>
          </div>
        </div>

        <div className="p-5 flex-1 flex flex-col space-y-4">
          <div className="grid grid-cols-2 gap-2 text-sm text-stone-400">
            <div><span className="text-stone-500">Age:</span> {character.age}</div>
            <div><span className="text-stone-500">Gender:</span> {character.gender}</div>
            <div className="col-span-2"><span className="text-stone-500">Level:</span> <span className="text-rose-400">{character.level}</span></div>
          </div>
          
          <div>
            <h4 className="text-xs font-semibold text-stone-500 uppercase tracking-wider mb-1">Appearance</h4>
            <p className="text-sm text-stone-300 leading-relaxed">{character.appearance}</p>
          </div>

          <div>
            <h4 className="text-xs font-semibold text-stone-500 uppercase tracking-wider mb-1">Personality & Features</h4>
            <p className="text-sm text-stone-300 leading-relaxed">{character.personality}</p>
            <p className="text-sm text-stone-400 mt-1 leading-relaxed">{character.features}</p>
          </div>

          <div className="pt-2 border-t border-stone-800 mt-auto text-sm">
            <div>
              <span className="text-stone-500 block text-xs">Speech</span>
              <span className="text-stone-300">{character.speech}</span>
            </div>
          </div>

          {character.secret && (
            <div className="pt-2">
              <button 
                onClick={() => setShowSecret(!showSecret)}
                className="w-full py-2 bg-stone-950 hover:bg-stone-800 text-rose-500/80 hover:text-rose-400 border border-stone-800 rounded-lg text-sm font-medium transition-colors"
              >
                {showSecret ? '비밀 숨기기' : '비밀 보기'}
              </button>
              
              <AnimatePresence>
                {showSecret && (
                  <motion.div 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="mt-2 p-3 bg-rose-950/20 border border-rose-900/30 rounded-lg text-sm text-rose-200 leading-relaxed">
                      {character.secret}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )}
        </div>
      </div>

      <AnimatePresence>
        {modalOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setModalOpen(false)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
          >
            <div 
              className="relative w-full max-w-2xl bg-stone-900 rounded-2xl overflow-hidden shadow-2xl border border-stone-700"
              onClick={e => e.stopPropagation()}
            >
              <button 
                onClick={() => setModalOpen(false)}
                className="absolute top-4 right-4 z-10 p-2 bg-black/50 text-white rounded-full hover:bg-rose-600 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative h-[70vh] flex items-center justify-center bg-stone-950">
                <img 
                  src={getImageUrl(character.code, imageStatuses[imageIndex])} 
                  alt={`${character.name} status ${imageStatuses[imageIndex]}`}
                  className="max-h-full max-w-full object-contain"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://via.placeholder.com/600x800/1c1917/f43f5e?text=Image+Not+Found';
                  }}
                />
                
                <div className="absolute inset-y-0 left-0 flex items-center px-4">
                  <button 
                    onClick={handlePrevImage}
                    className="p-3 bg-black/60 text-white rounded-full hover:bg-rose-600 transition-transform hover:scale-110"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                </div>
                
                <div className="absolute inset-y-0 right-0 flex items-center px-4">
                  <button 
                    onClick={handleNextImage}
                    className="p-3 bg-black/60 text-white rounded-full hover:bg-rose-600 transition-transform hover:scale-110"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </div>
              </div>
              
              <div className="p-4 bg-stone-900 border-t border-stone-800 text-center">
                <h3 className="text-lg font-serif text-stone-100">{character.name}</h3>
                <p className="text-sm text-stone-400 mt-1">
                  {imageIndex === 0 && '기본/통상 (1)'}
                  {imageIndex === 1 && '볼꼬집 (14)'}
                  {imageIndex === 2 && '시그니쳐 포즈 (18)'}
                </p>
                <div className="flex justify-center space-x-2 mt-3">
                  {imageStatuses.map((_, idx) => (
                    <div 
                      key={idx}
                      className={cn(
                        "w-2 h-2 rounded-full transition-colors",
                        idx === imageIndex ? "bg-rose-500" : "bg-stone-600"
                      )}
                    />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
