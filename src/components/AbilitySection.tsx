import { worldInfo } from '../data';
import { Sword, Sparkles } from 'lucide-react';

export function AbilitySection() {
  return (
    <div className="w-full max-w-6xl mx-auto space-y-12">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-serif text-stone-100 font-bold tracking-wide">능력 및 경지 (Abilities)</h2>
        <p className="text-stone-400 mt-4 max-w-2xl mx-auto">
          아리시움 대륙을 지배하는 두 가지 거대한 힘의 축, 오러와 마법의 경지에 대한 설명입니다.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Aura Section */}
        <div className="bg-stone-900 border border-stone-800 rounded-3xl p-6 md:p-8">
          <div className="flex items-center space-x-4 mb-8 border-b border-stone-800 pb-4">
            <div className="p-3 bg-stone-800 rounded-xl">
              <Sword className="w-6 h-6 text-stone-300" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-stone-100">오러 (Aura)</h3>
              <p className="text-sm text-stone-400">신체 단련과 체내의 마나를 통제하는 무인의 능력</p>
            </div>
          </div>
          
          <div className="space-y-6">
            {worldInfo.abilities.aura.map((tier, index) => (
              <div key={tier.name} className="relative pl-6">
                <div className="absolute left-0 top-1.5 w-2 h-2 rounded-full bg-stone-600 ring-4 ring-stone-900" />
                {index !== worldInfo.abilities.aura.length - 1 && (
                  <div className="absolute left-1 top-3.5 bottom-[-1.5rem] w-px bg-stone-800" />
                )}
                <h4 className="text-lg font-semibold text-stone-200">{tier.name}</h4>
                <p className="text-sm text-stone-400 mt-1">{tier.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Magic Section */}
        <div className="bg-stone-900 border border-stone-800 rounded-3xl p-6 md:p-8">
          <div className="flex items-center space-x-4 mb-8 border-b border-stone-800 pb-4">
            <div className="p-3 bg-rose-950/50 rounded-xl">
              <Sparkles className="w-6 h-6 text-rose-400" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-stone-100">마법 (Magic)</h3>
              <p className="text-sm text-stone-400">선천적 마나 감응력과 재능을 요구하는 마법사의 힘</p>
            </div>
          </div>
          
          <div className="space-y-6">
            {worldInfo.abilities.magic.map((tier, index) => (
              <div key={tier.name} className="relative pl-6">
                <div className="absolute left-0 top-1.5 w-2 h-2 rounded-full bg-rose-800 ring-4 ring-stone-900" />
                {index !== worldInfo.abilities.magic.length - 1 && (
                  <div className="absolute left-1 top-3.5 bottom-[-1.5rem] w-px bg-stone-800" />
                )}
                <h4 className="text-lg font-semibold text-stone-200">{tier.name}</h4>
                <p className="text-sm text-stone-400 mt-1">{tier.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
