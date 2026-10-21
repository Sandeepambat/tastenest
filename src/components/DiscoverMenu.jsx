import { DISCOVER } from '../data/content';
import SectionTitle from './SectionTitle';
import SmartImage from './SmartImage';

export default function DiscoverMenu() {
  return (
    <section className="pb-16 lg:pb-24">
      <div className="container-x">
        <SectionTitle>Discover Menu</SectionTitle>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {DISCOVER.map((d) => (
            <article key={d.title} className="relative isolate overflow-hidden rounded-xl border-2 border-sun bg-ink p-6 text-white sm:p-8">
              <SmartImage src={d.img} alt="" className="absolute inset-0 -z-20 h-full w-full object-cover" />
              <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/85 via-black/55 to-transparent" />
              <div className="flex min-h-[150px] flex-col justify-between sm:min-h-[170px]">
                <div>
                  <h3 className="text-2xl font-extrabold sm:text-3xl">{d.title}</h3>
                  <p className="mt-2 max-w-[11rem] text-[11px] text-white/80">{d.desc}</p>
                </div>
                <div className="grid h-16 w-16 place-items-center rounded-full bg-sun text-center text-ink">
                  <span className="text-sm font-extrabold leading-none">
                    ${d.price}
                    <span className="block text-[9px] font-bold">person</span>
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
