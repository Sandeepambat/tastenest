import { NEWS } from '../data/content';
import SectionTitle from './SectionTitle';
import SmartImage from './SmartImage';

export default function RecentNews() {
  return (
    <section id="news" className="py-16 lg:py-24">
      <div className="container-x">
        <SectionTitle>Recent News</SectionTitle>
        <div className="mx-auto mt-10 grid max-w-4xl gap-8 md:grid-cols-2">
          {NEWS.map((n) => (
            <article key={n.title} className="flex items-center gap-4">
              <SmartImage src={n.img} alt={n.title} className="h-28 w-28 shrink-0 rounded-xl object-cover sm:h-32 sm:w-32" />
              <div>
                <span className="inline-block rounded bg-sun px-2 py-0.5 text-[9px] font-extrabold">{n.date}</span>
                <h3 className="mt-2 text-lg font-extrabold leading-snug">{n.title}</h3>
                <div className="mt-3 flex items-center gap-2">
                  <span className="grid h-6 w-6 place-items-center rounded-full bg-mist text-[9px] font-extrabold">
                    {n.author.split(' ').map((p) => p[0]).join('')}
                  </span>
                  <span className="text-[10px] font-bold">{n.author}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
