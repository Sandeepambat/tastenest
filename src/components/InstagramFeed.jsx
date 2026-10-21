import { Instagram } from 'lucide-react';
import { INSTA_IMAGES } from '../data/content';
import SmartImage from './SmartImage';

export default function InstagramFeed() {
  return (
    <section className="pb-16 lg:pb-24">
      <div className="container-x">
        <div className="relative">
          <div className="grid grid-cols-2 gap-3 opacity-25 sm:grid-cols-4 sm:gap-4">
            {INSTA_IMAGES.map((src, i) => (
              <SmartImage
                key={i}
                src={src}
                alt=""
                className={`w-full rounded-xl object-cover ${i === 1 ? 'aspect-[3/4] sm:row-span-2 sm:aspect-auto sm:h-full' : 'aspect-[4/3]'}`}
              />
            ))}
          </div>
          <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
            <a href="#" aria-label="Instagram" className="grid h-12 w-12 place-items-center rounded-full bg-brand text-white shadow-lg">
              <Instagram size={22} />
            </a>
            <h2 className="mt-3 text-2xl font-extrabold sm:text-4xl">Follow @shawonetc3</h2>
            <p className="mt-1 text-xs text-ink/60">Join our community to inspire your desires</p>
          </div>
        </div>
      </div>
    </section>
  );
}
