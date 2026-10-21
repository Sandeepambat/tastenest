import { UtensilsCrossed } from 'lucide-react';

export default function Logo({ light = false }) {
  return (
    <a href="#home" className="flex items-center gap-2" aria-label="TasteNest home">
      <span className="grid h-8 w-8 place-items-center rounded-full bg-brand text-white">
        <UtensilsCrossed size={16} />
      </span>
      <span className={`text-xl font-extrabold tracking-tight ${light ? 'text-white' : 'text-ink'}`}>
        Taste<span className={light ? 'text-sun' : 'text-brand'}>Nest</span>
      </span>
    </a>
  );
}
