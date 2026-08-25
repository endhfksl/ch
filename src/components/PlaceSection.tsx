import { factions } from '../data';
import { GlassWater, Spade } from 'lucide-react';

export function PlaceSection() {
  const velvetRouge = factions.find(f => f.name.includes('Velvet'));
  const noire = factions.find(f => f.name.includes('Noire'));

  return (
    <div className="w-full max-w-6xl mx-auto space-y-12">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-serif text-stone-100 font-bold tracking-wide">알트루주의 밤 (Places)</h2>
        <p className="text-stone-400 mt-4 max-w-2xl mx-auto">
          욕망과 쾌락이 모이는 알트루주의 대표적인 두 명소, 벨벳 루즈와 노아르.
        </p>
      </div>

      <div className="space-y-12">
        {/* Velvet Rouge */}
        {velvetRouge && (
          <div className="bg-stone-900 border border-stone-800 rounded-3xl p-6 md:p-8 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-rose-900/10 blur-3xl rounded-full" />
            <div className="relative z-10">
              <div className="flex items-center space-x-4 mb-6">
                <div className="p-3 bg-rose-950 rounded-xl">
                  <GlassWater className="w-8 h-8 text-rose-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-serif font-bold text-rose-500">{velvetRouge.name}</h3>
                  <p className="text-sm text-stone-400 mt-1 max-w-2xl">{velvetRouge.description}</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-sm font-bold text-stone-300 uppercase tracking-wider mb-4 border-b border-stone-800 pb-2">기본 규칙 (Rules)</h4>
                  <ul className="space-y-3">
                    {velvetRouge.rules?.map((rule, idx) => (
                      <li key={idx} className="flex items-start text-sm text-stone-400">
                        <span className="text-rose-500 mr-2">•</span>
                        <span>{rule}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-sm font-bold text-stone-300 uppercase tracking-wider mb-4 border-b border-stone-800 pb-2">등급제 (Tiers)</h4>
                  <div className="space-y-4">
                    {velvetRouge.tiers?.map(tier => (
                      <div key={tier.level} className="bg-stone-950/50 p-4 rounded-xl border border-stone-800/50">
                        <div className="flex justify-between items-center mb-1">
                          <span className="font-bold text-rose-400">{tier.level}</span>
                          <span className="text-xs font-mono text-stone-500">{tier.price}</span>
                        </div>
                        <p className="text-xs text-stone-400 leading-relaxed">{tier.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              {velvetRouge.facilities && (
                <div className="mt-10">
                  <h4 className="text-sm font-bold text-stone-300 uppercase tracking-wider mb-4 border-b border-stone-800 pb-2">시설 안내 (Facilities)</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {velvetRouge.facilities.map(facility => (
                      <div key={facility.name} className="bg-stone-950/40 p-4 rounded-xl border border-stone-800/30">
                        <h5 className="font-bold text-stone-200 mb-1">{facility.name}</h5>
                        <p className="text-xs text-stone-400 leading-relaxed">{facility.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Noire */}
        {noire && (
          <div className="bg-stone-900 border border-stone-800 rounded-3xl p-6 md:p-8 overflow-hidden relative">
            <div className="absolute top-0 left-0 w-64 h-64 bg-amber-900/10 blur-3xl rounded-full" />
            <div className="relative z-10">
              <div className="flex items-center space-x-4 mb-6">
                <div className="p-3 bg-amber-950/50 rounded-xl">
                  <Spade className="w-8 h-8 text-amber-500" />
                </div>
                <div>
                  <h3 className="text-2xl font-serif font-bold text-amber-500">{noire.name}</h3>
                  <p className="text-sm text-stone-400 mt-1 max-w-2xl">{noire.description}</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-sm font-bold text-stone-300 uppercase tracking-wider mb-4 border-b border-stone-800 pb-2">기본 규칙 (Rules)</h4>
                  <ul className="space-y-3">
                    {noire.rules?.map((rule, idx) => (
                      <li key={idx} className="flex items-start text-sm text-stone-400">
                        <span className="text-amber-500 mr-2">•</span>
                        <span>{rule}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-sm font-bold text-stone-300 uppercase tracking-wider mb-4 border-b border-stone-800 pb-2">게임 룰 (Games)</h4>
                  <div className="space-y-4">
                    {noire.games?.map(game => (
                      <div key={game.name} className="bg-stone-950/50 p-4 rounded-xl border border-stone-800/50">
                        <div className="flex justify-between items-center mb-1">
                          <span className="font-bold text-amber-400">{game.name}</span>
                          <span className="text-xs font-mono text-stone-500">{game.betting}</span>
                        </div>
                        <p className="text-xs text-stone-400 leading-relaxed">{game.rules}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              {noire.facilities && (
                <div className="mt-10">
                  <h4 className="text-sm font-bold text-stone-300 uppercase tracking-wider mb-4 border-b border-stone-800 pb-2">시설 안내 (Facilities)</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {noire.facilities.map(facility => (
                      <div key={facility.name} className="bg-stone-950/40 p-4 rounded-xl border border-stone-800/30">
                        <h5 className="font-bold text-stone-200 mb-1">{facility.name}</h5>
                        <p className="text-xs text-stone-400 leading-relaxed">{facility.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
