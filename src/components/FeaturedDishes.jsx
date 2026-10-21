import { useState } from 'react';
import { ShoppingBag } from 'lucide-react';
import { DISHES } from '../data/content';
import usePerView from '../hooks/usePerView';
import SectionTitle from './SectionTitle';
import SmartImage from './SmartImage';

export default function FeaturedDishes() {
  const perView = usePerView();
  const pages = Math.ceil(DISHES.length / perView);
  const [page, setPage] = useState(0);
  const current = Math.min(page, pages - 1);
  const start = Math.min(current * perView, DISHES.length - perView);
  const visible = DISHES.slice(start, start + perView);

  return (
    <section id="featured" className="bg-mist pb-16 pt-12 lg:pb-24">
      <div className="container-x">
        <SectionTitle>Featured Dishes</SectionTitle>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((d) => (
            <article key={d.name} className="rounded-xl border-2 border-sun bg-white p-3">
              <div className="relative grid place-items-center py-4">
                <span className="absolute left-0 top-0 grid h-9 w-9 place-items-center rounded-full bg-sun text-[9px] font-extrabold">SALE</span>
                <span className="absolute h-28 w-44 rounded-full bg-brand" aria-hidden />
                <SmartImage src={d.img} alt={d.name} className="relative h-32 w-32 rounded-full object-cover" />
              </div>
              <div className="flex items-end justify-between px-1 pb-1 pt-2">
                <div>
                  <h3 className="text-xs font-extrabold">{d.name}</h3>
                  <p className="mt-1 text-sm font-extrabold">
                    <span className="mr-1 text-[10px] font-semibold text-ink/50 line-through">${d.oldPrice.toFixed(2)}</span>
                    ${d.price.toFixed(2)}
                  </p>
                </div>
                <button className="grid h-8 w-8 place-items-center rounded-md bg-sun" aria-label={`Add ${d.name} to cart`}>
                  <ShoppingBag size={14} />
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="dots mt-8 justify-center" role="tablist" aria-label="Featured dishes pages">
          {Array.from({ length: pages }).map((_, i) => (
            <button
              key={i}
              role="tab"
              aria-selected={current === i}
              aria-label={`Page ${i + 1}`}
              onClick={() => setPage(i)}
              className={`h-1.5 w-1.5 rounded-full ${current === i ? 'bg-brand' : 'bg-ink/30'}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
