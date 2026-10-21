import { useState } from 'react';
import { TESTIMONIALS, IMG } from '../data/content';
import SmartImage from './SmartImage';

export default function Testimonials() {
  const [i, setI] = useState(0);
  const t = TESTIMONIALS[i];

  return (
    <section className="py-16 lg:py-24">
      <div className="container-x grid items-center gap-10 lg:grid-cols-2">
        <div>
          <p className="eyebrow">Testimonials &amp; Reviews</p>
          <h2 className="mt-3 text-3xl font-extrabold leading-tight sm:text-4xl lg:text-[42px]">
            Our Customar<br />Feedbacks
          </h2>

          <figure className="relative mt-6 rounded-lg border-2 border-sun p-5 pb-8 sm:p-6">
            <blockquote className="max-w-sm text-sm leading-relaxed text-ink/70">{t.quote}</blockquote>
            <figcaption className="mt-4 text-sm font-extrabold">{t.name}</figcaption>
            <span className="absolute -bottom-4 right-6 h-9 w-9 rounded-full bg-sun" aria-hidden />
          </figure>

          <div className="dots mt-6" role="tablist" aria-label="Testimonials">
            {TESTIMONIALS.map((_, idx) => (
              <button
                key={idx}
                role="tab"
                aria-selected={i === idx}
                aria-label={`Testimonial ${idx + 1}`}
                onClick={() => setI(idx)}
                className={`h-1.5 w-1.5 rounded-full ${i === idx ? 'bg-brand' : 'bg-ink/30'}`}
              />
            ))}
          </div>
        </div>

        <div className="relative mx-auto grid w-full max-w-md grid-cols-2 gap-4 sm:max-w-lg">
          <SmartImage src={IMG.coffee} alt="Coffee" className="col-start-2 row-start-1 aspect-[4/5] w-full rounded-lg object-cover" />
          <div className="col-start-1 row-start-2 -mt-6 aspect-[4/3] rounded-lg bg-brand" aria-hidden />
          <SmartImage src={IMG.parfait} alt="Berry parfait" className="col-start-2 row-start-2 aspect-square w-full rounded-lg object-cover" />
        </div>
      </div>
    </section>
  );
}
