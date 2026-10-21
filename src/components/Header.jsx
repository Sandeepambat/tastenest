import { useState } from 'react';
import { ChevronDown, Menu, ShoppingBag, X } from 'lucide-react';
import { NAV_LINKS } from '../data/content';
import Logo from './Logo';

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container-x flex h-[72px] items-center justify-between gap-4">
        <Logo />

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {NAV_LINKS.map((l) => (
            <a key={l.label} href={l.href} className="flex items-center gap-1 text-sm font-bold hover:text-brand">
              {l.label}
              {l.dropdown && <ChevronDown size={14} />}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3 sm:gap-4">
          <button className="relative p-1" aria-label="Cart">
            <ShoppingBag size={20} />
            <span className="absolute -right-1 -top-1 grid h-4 w-4 place-items-center rounded-full bg-brand text-[10px] font-bold text-white">
              0
            </span>
          </button>
          <a href="#reserve" className="btn-sun hidden sm:inline-flex">Contact Us</a>
          <button
            className="p-1 lg:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t bg-white lg:hidden" aria-label="Mobile">
          <div className="container-x flex flex-col py-3">
            {NAV_LINKS.map((l) => (
              <a key={l.label} href={l.href} onClick={() => setOpen(false)} className="border-b border-black/5 py-3 text-sm font-bold last:border-0">
                {l.label}
              </a>
            ))}
            <a href="#reserve" onClick={() => setOpen(false)} className="btn-sun mt-3 sm:hidden">Contact Us</a>
          </div>
        </nav>
      )}
    </header>
  );
}
