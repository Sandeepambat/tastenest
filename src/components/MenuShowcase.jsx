import { useState } from 'react';
import { Beef, Coffee, Donut, Sandwich } from 'lucide-react';
import { MENU_TABS } from '../data/content';
import SmartImage from './SmartImage';

const ICONS = { Donut, Beef, Coffee, Sandwich };

export default function MenuShowcase() {
  const [active, setActive] = useState(MENU_TABS[0].id);
  const tab = MENU_TABS.find((t) => t.id === active);

  return (
    <section id="menu" className="pb-16 lg:pb-24">
      <div className="container-x">
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4" role="tablist" aria-label="Menu categories">
          {MENU_TABS.map((t) => {
            const Icon = ICONS[t.icon];
            const on = t.id === active;
            return (
              <button
                key={t.id}
                role="tab"
                aria-selected={on}
                onClick={() => setActive(t.id)}
                className={`relative flex h-24 w-24 flex-col items-center justify-center gap-2 rounded-lg border text-xs font-bold transition sm:h-28 sm:w-28 ${
                  on ? 'border-brand bg-brand text-white' : 'border-black/10 bg-white hover:border-brand'
                }`}
              >
                <Icon size={28} />
                {t.label}
                {on && <span className="absolute -bottom-2 h-4 w-4 rotate-45 bg-brand" />}
              </button>
            );
          })}
        </div>

        <div className="relative mt-12 rounded-3xl bg-mist px-5 py-8 sm:px-10 lg:ml-12 lg:py-10 lg:pl-72">
          <SmartImage
            src={tab.img}
            alt={tab.title}
            className="mx-auto mb-6 h-52 w-52 rounded-full border-8 border-white object-cover shadow-lg sm:h-60 sm:w-60 lg:absolute lg:-left-16 lg:top-1/2 lg:mb-0 lg:h-64 lg:w-64 lg:-translate-y-1/2"
          />
          <div className="mx-auto max-w-lg lg:mx-0">
            <h3 className="text-2xl font-extrabold">{tab.title}</h3>
            <ul className="mt-4 space-y-3">
              {tab.items.map((i) => (
                <li key={i.name} className="border-b border-dashed border-ink/40 pb-3 last:border-0">
                  <div className="flex items-baseline justify-between gap-4">
                    <span className="text-sm font-extrabold">{i.name}</span>
                    <span className="text-sm font-extrabold">${i.price.toFixed(2)}</span>
                  </div>
                  <p className="text-[11px] text-ink/60">{i.desc}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
