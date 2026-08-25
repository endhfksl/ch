import { worldInfo } from '../data';
import { MapPin } from 'lucide-react';
import { cn } from '../lib/utils';

export function MapSection() {
  return (
    <div className="w-full space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-serif text-stone-100 font-bold mb-4 tracking-wide">아리시움 대륙 (Aricium Continent)</h2>
        <p className="text-stone-400 max-w-2xl mx-auto leading-relaxed">
          하나로 이루어진 거대한 대륙. 다양한 종족이 모여 각자의 도시국가를 이루고 살아갑니다.
        </p>
      </div>

      <div className="relative w-full max-w-5xl mx-auto aspect-[4/3] sm:aspect-[16/9] bg-stone-900 border border-stone-800 rounded-3xl overflow-hidden shadow-2xl p-4 sm:p-8 flex items-center justify-center">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-stone-800 via-stone-900 to-stone-950 opacity-80" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/black-scales.png')] opacity-20 mix-blend-overlay" />
        
        <div className="relative w-full h-full border border-rose-900/30 rounded-xl bg-stone-950/40 p-4">
          <div className="absolute inset-0 overflow-hidden rounded-xl">
             <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:40px_40px] opacity-10" />
          </div>

          {/* Map markers based on description */}
          <div className="absolute top-[20%] left-[50%] -translate-x-1/2 -translate-y-1/2 group">
            <div className="relative flex flex-col items-center">
              <MapPin className="text-amber-500 w-8 h-8 drop-shadow-md z-10" />
              <span className="mt-1 px-3 py-1 bg-black/70 rounded-full border border-amber-900/50 text-amber-200 text-sm font-bold shadow-lg">정온 (Jeong-on)</span>
              <div className="absolute top-12 opacity-0 group-hover:opacity-100 transition-opacity w-48 bg-stone-900 border border-stone-700 rounded-lg p-3 text-xs text-stone-300 z-20 pointer-events-none shadow-xl">
                수인의 도시. 실력우상주의. 북부 대평원.
              </div>
            </div>
          </div>

          <div className="absolute top-[50%] left-[20%] -translate-x-1/2 -translate-y-1/2 group">
            <div className="relative flex flex-col items-center">
              <MapPin className="text-green-500 w-8 h-8 drop-shadow-md z-10" />
              <span className="mt-1 px-3 py-1 bg-black/70 rounded-full border border-green-900/50 text-green-200 text-sm font-bold shadow-lg">알테 (Alte)</span>
              <div className="absolute top-12 opacity-0 group-hover:opacity-100 transition-opacity w-48 bg-stone-900 border border-stone-700 rounded-lg p-3 text-xs text-stone-300 z-20 pointer-events-none shadow-xl">
                엘프의 유일한 도시. 외부인 경계. 서쪽 대산림.
              </div>
            </div>
          </div>

          <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 group">
            <div className="relative flex flex-col items-center">
              <MapPin className="text-stone-300 w-10 h-10 drop-shadow-md z-10" />
              <span className="mt-1 px-3 py-1 bg-black/70 rounded-full border border-stone-600 text-stone-100 text-base font-bold shadow-lg">로엔 (Roen)</span>
              <div className="absolute top-14 opacity-0 group-hover:opacity-100 transition-opacity w-48 bg-stone-900 border border-stone-700 rounded-lg p-3 text-xs text-stone-300 z-20 pointer-events-none shadow-xl">
                대표적인 인간의 도시. 중앙 위치.
              </div>
            </div>
          </div>

          <div className="absolute top-[50%] left-[80%] -translate-x-1/2 -translate-y-1/2 group">
            <div className="relative flex flex-col items-center">
              <MapPin className="text-blue-400 w-8 h-8 drop-shadow-md z-10" />
              <span className="mt-1 px-3 py-1 bg-black/70 rounded-full border border-blue-900/50 text-blue-200 text-sm font-bold shadow-lg">산포르 (Sanpor)</span>
              <div className="absolute top-12 opacity-0 group-hover:opacity-100 transition-opacity w-48 bg-stone-900 border border-stone-700 rounded-lg p-3 text-xs text-stone-300 z-20 pointer-events-none shadow-xl">
                어인의 도시. 고도마도학. 동부 해양도시.
              </div>
            </div>
          </div>

          <div className="absolute top-[80%] left-[50%] -translate-x-1/2 -translate-y-1/2 group">
            <div className="relative flex flex-col items-center">
              <MapPin className="text-rose-500 w-10 h-10 drop-shadow-md z-10" />
              <span className="mt-1 px-3 py-1 bg-black/70 rounded-full border border-rose-900 text-rose-300 text-base font-bold shadow-lg">알트루주 (Altruju)</span>
              <div className="absolute top-14 opacity-0 group-hover:opacity-100 transition-opacity w-56 bg-stone-900 border border-stone-700 rounded-lg p-3 text-xs text-stone-300 z-20 pointer-events-none shadow-xl">
                다양한 종족이 모인 환락의 도시. 벨벳 루즈와 노아르가 위치함.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {worldInfo.cities.map(city => (
          <div key={city.name} className="bg-stone-900/50 border border-stone-800 p-5 rounded-2xl">
            <div className="flex items-center space-x-3 mb-2">
              <MapPin className="w-5 h-5 text-stone-500" />
              <h3 className="text-lg font-bold text-stone-200">{city.name}</h3>
            </div>
            <p className="text-xs text-rose-400 mb-3">{city.location}</p>
            <p className="text-sm text-stone-400 leading-relaxed">{city.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
