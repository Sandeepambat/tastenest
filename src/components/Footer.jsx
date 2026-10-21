import { ChevronRight, Star } from 'lucide-react';
import { FOOTER } from '../data/content';
import Logo from './Logo';

function LinkCol({ title, links }) {
  return (
    <div>
      <h3 className="text-sm font-extrabold">{title}</h3>
      <ul className="mt-4 space-y-2.5">
        {links.map((l) => (
          <li key={l}>
            <a href="#" className="flex items-center gap-1 text-[11px] text-ink/70 hover:text-brand">
              <ChevronRight size={10} />{l}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <footer id="footer" className="bg-mist pt-12">
      <div className="container-x">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[300px_1fr_1fr_1.4fr]">
          <div className="rounded-xl bg-brand p-5 text-white">
            <Logo light />
            <p className="mt-6 text-[11px] font-extrabold text-sun">Tuesday - Saturday: 12:00pm - 23:00pm</p>
            <p className="mt-2 text-[11px] font-extrabold text-sun">Closed on Sunday</p>
            <p className="mt-8 flex items-center gap-1 text-[11px] font-bold">
              5 star rated on TripAdvisor
              <span className="flex text-sun">{Array.from({ length: 5 }).map((_, i) => <Star key={i} size={10} fill="currentColor" />)}</span>
            </p>
          </div>

          <LinkCol title="About" links={FOOTER.about} />
          <LinkCol title="Menu" links={FOOTER.menu} />

          <div>
            <h3 className="text-sm font-extrabold">Newsletter</h3>
            <p className="mt-4 text-[11px] text-ink/70">Get recent news and updates.</p>
            <form onSubmit={(e) => e.preventDefault()} className="mt-3 space-y-3">
              <input type="email" placeholder="Email Address" aria-label="Email address" required className="h-10 w-full rounded border border-black/10 bg-white px-3 text-xs focus:outline-none focus:ring-2 focus:ring-sun" />
              <button type="submit" className="btn-brand px-6">Subscribe</button>
            </form>
          </div>
        </div>

        <div className="mt-12 border-t-4 border-sun" />
        <div className="flex flex-col items-center justify-between gap-2 py-4 text-[10px] font-bold sm:flex-row">
          <p>© 2025 <span className="text-brand">TasteNest</span> | All shawonetc3 Themes</p>
          <div className="flex gap-6"><a href="#">Facebook</a><a href="#">Instagram</a></div>
        </div>
      </div>
    </footer>
  );
}
