import { Check, Smartphone } from 'lucide-react';
import { IMG } from '../data/content';
import SmartImage from './SmartImage';

const POINTS = ['Higher Reach - Minimal Effort', 'Showcase your Brand', 'Exclusive offers & discounts'];

export default function AppPromo() {
  return (
    <section className="bg-mist">
      <div className="container-x grid items-center gap-10 py-12 lg:grid-cols-2 lg:py-0">
        <div>
          <p className="eyebrow">Best app for foods ordering</p>
          <h2 className="mt-3 text-3xl font-extrabold leading-tight sm:text-4xl">
            Manage Your Restaurant Anytime, Anywhere!
          </h2>
          <ul className="mt-4 space-y-2">
            {POINTS.map((p) => (
              <li key={p} className="flex items-center gap-2 text-[11px] text-ink/70">
                <span className="grid h-3.5 w-3.5 place-items-center rounded-full bg-sun"><Check size={9} strokeWidth={4} /></span>
                {p}
              </li>
            ))}
          </ul>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#" className="btn-brand"><Smartphone size={14} />Google Play</a>
            <a href="#" className="btn bg-ink text-white"><Smartphone size={14} />App Store</a>
          </div>
        </div>

        {/* Right: red blob + phone mock + floating dishes */}
        <div className="relative mx-auto h-[300px] w-full max-w-md sm:h-[340px] lg:ml-auto lg:h-[380px] lg:max-w-none">
          <div className="absolute inset-y-0 right-0 w-[85%] rounded-bl-[120px] rounded-tl-[220px] bg-brand lg:w-full" aria-hidden />
          <div className="absolute left-1/2 top-6 h-[85%] w-36 -translate-x-1/2 rounded-[1.6rem] border-[6px] border-ink bg-white shadow-xl sm:w-40">
            <div className="p-2">
              <p className="text-[9px] font-extrabold">Food</p>
              <SmartImage src={IMG.burger} alt="Burger" className="mt-2 h-20 w-full rounded-lg object-cover" />
              <SmartImage src={IMG.pizza} alt="Pizza" className="mt-2 h-20 w-full rounded-lg object-cover" />
            </div>
          </div>
          <SmartImage src={IMG.pizza} alt="Pizza" className="absolute right-4 top-2 h-20 w-20 rounded-full border-4 border-white object-cover sm:h-24 sm:w-24" />
          <SmartImage src={IMG.salad} alt="Salad" className="absolute bottom-4 right-2 h-20 w-20 rounded-full border-4 border-white object-cover sm:h-24 sm:w-24" />
          <span className="absolute bottom-6 left-4 text-5xl sm:text-6xl" aria-hidden>🛵</span>
        </div>
      </div>
    </section>
  );
}
