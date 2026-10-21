import { useState } from 'react';
import { Play, Star } from 'lucide-react';
import { IMG } from '../data/content';
import SmartImage from './SmartImage';

export default function Hero() {
  const [slide, setSlide] = useState(0);

  return (
    <section id="home" className="relative isolate overflow-hidden bg-ink text-white">
      <SmartImage src={IMG.hero} alt="" className="absolute inset-0 -z-20 h-full w-full object-cover" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/85 via-black/60 to-black/20" />

      <div className="container-x grid min-h-[440px] items-center gap-10 py-14 md:min-h-[520px] lg:grid-cols-2">
        <div className="max-w-xl">
          <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl">
            The Perfect Space to Enjoy Fantastic Food
          </h1>
          <p className="mt-4 max-w-sm text-sm text-white/80">
            Festive dining at Farthings where we are strong believers in using the very best produce
          </p>
          <div className="mt-6 flex items-center gap-5">
            <a href="#menu" className="btn-brand px-6">See Our Menus</a>
            <button className="flex items-center gap-3 text-xs font-bold tracking-wider" aria-label="Play video">
              <span className="grid h-11 w-11 place-items-center rounded-full border-2 border-white/80">
                <Play size={16} fill="white" />
              </span>
              VIDEO
            </button>
          </div>
        </div>

        <div className="relative hidden justify-self-end lg:block">
          <div className="relative w-[320px] rounded-xl border-2 border-sun bg-black/40 p-4 backdrop-blur-sm">
            <span className="absolute -top-3 right-6 rounded bg-brand px-2 py-0.5 text-[10px] font-bold">Weekly Special</span>
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-2xl font-extrabold text-sun">$90.85</p>
                <p className="text-sm font-bold">Sicilian Pizza</p>
                <div className="mt-1 flex gap-0.5 text-sun">
                  {Array.from({ length: 5 }).map((_, i) => <Star key={i} size={10} fill="currentColor" />)}
                </div>
              </div>
              <SmartImage src={IMG.heroSpecial} alt="Sicilian pizza" className="h-24 w-24 rounded-full border-4 border-sun object-cover" />
            </div>
          </div>
        </div>
      </div>

      <div className="container-x absolute inset-x-0 bottom-5 flex gap-2" role="tablist" aria-label="Hero slides">
        {[0, 1, 2].map((i) => (
          <button
            key={i}
            role="tab"
            aria-selected={slide === i}
            aria-label={`Slide ${i + 1}`}
            onClick={() => setSlide(i)}
            className={`h-2 w-2 rounded-full ${slide === i ? 'bg-sun' : 'bg-white'}`}
          />
        ))}
      </div>
    </section>
  );
}
