import { ABOUT_CARDS } from '../data/content';
import SmartImage from './SmartImage';

export default function About() {
  return (
    <section id="about" className="py-16 lg:py-24">
      <div className="container-x">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="eyebrow">About the food restaurant</p>
            <h2 className="mt-3 max-w-xs text-3xl font-extrabold leading-tight sm:text-4xl lg:text-[42px]">
              New Ground with Dishes to be Enjoyed
            </h2>
          </div>
          <div>
            <p className="text-xs leading-relaxed text-ink/60">
              Nisl quam nestibulum ac quam nec odio elerne aucan ligula. Orci varius nat ogue pena tibus et ulient monte nascete odio ibne.
              Nisl quam nestibulum ac quam nec odio elerne aucan ligula. Orci varius nat ogue pena tibus et ulient monte nascete odio ibne.
            </p>
            <div className="mt-5 flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-sun text-sm font-extrabold">WJ</span>
              <div>
                <p className="text-sm font-extrabold">Willimes James</p>
                <p className="text-[11px] text-ink/60">Director and Chief Operations Officer</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {ABOUT_CARDS.map((c) => (
            <article
              key={c.title}
              className={`overflow-hidden rounded-2xl border-[3px] border-ink bg-ink ${c.offset ? 'sm:mt-10' : ''}`}
            >
              <div className="relative aspect-[3/4] overflow-hidden rounded-xl border-[3px] border-sun">
                <SmartImage src={c.img} alt={c.title} className="h-full w-full object-cover" />
                <div className="absolute inset-x-0 bottom-0 bg-sun py-3 text-center text-sm font-extrabold">{c.title}</div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
