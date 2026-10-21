import { ChefHat } from 'lucide-react';
import { CHEFS } from '../data/content';
import SectionTitle from './SectionTitle';

// Chef photos are placeholders (icon + initials). Replace <ChefAvatar/> with an <img> when the real assets arrive.
function ChefAvatar({ name }) {
  const initials = name.split(' ').map((n) => n[0]).join('');
  return (
    <div className="relative mx-auto grid h-44 w-44 place-items-center rounded-full bg-gradient-to-b from-mist to-white sm:h-52 sm:w-52">
      <ChefHat size={84} strokeWidth={1.25} className="text-ink/80" />
      <span className="absolute bottom-3 grid h-9 w-9 place-items-center rounded-full bg-sun text-xs font-extrabold">{initials}</span>
    </div>
  );
}

export default function Experts() {
  return (
    <section id="experts" className="pb-16 lg:pb-24">
      <div className="container-x">
        <SectionTitle>Meet Our Experts</SectionTitle>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {CHEFS.map((c) => (
            <article key={c.name} className="mx-auto w-full max-w-xs text-center">
              <div className="relative z-10 -mb-14">
                <ChefAvatar name={c.name} />
              </div>
              <div className="rounded-[999px] border-2 border-black/10 px-6 pb-8 pt-20">
                <p className="text-[11px] font-bold text-brand">{c.role}</p>
                <h3 className="mt-1 text-xl font-extrabold">{c.name}</h3>
                <p className="mt-4 font-script text-3xl text-ink/60" aria-hidden>{c.name.split(' ')[0]}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
