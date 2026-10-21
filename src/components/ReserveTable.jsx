import { useState } from 'react';

const EMPTY = { guests: '', date: '', time: '', name: '', phone: '' };

export default function ReserveTable() {
  const [form, setForm] = useState(EMPTY);
  const [sent, setSent] = useState(false);

  const onChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  const onSubmit = (e) => {
    e.preventDefault();
    // TODO: connect to reservation API
    console.log('Reservation request', form);
    setSent(true);
    setForm(EMPTY);
  };

  const field = 'h-10 w-full rounded bg-white px-3 text-xs text-ink placeholder:text-ink/50 focus:outline-none focus:ring-2 focus:ring-sun';

  return (
    <section id="reserve" className="bg-gradient-to-b from-white from-50% to-mist to-50%">
      <div className="container-x">
        <div className="grid items-center gap-6 rounded-xl bg-brand p-6 text-white sm:p-8 lg:grid-cols-[260px_1fr] lg:gap-10 lg:px-10">
          <div>
            <h2 className="text-3xl font-extrabold uppercase leading-tight sm:text-4xl">Reserve<br />a Table</h2>
            <p className="mt-2 text-xs text-white/80">Discover our New Menu !</p>
          </div>

          <form onSubmit={onSubmit} className="grid gap-3 sm:grid-cols-3">
            <input className={field} name="guests" value={form.guests} onChange={onChange} placeholder="No of Guest" type="number" min="1" required aria-label="Number of guests" />
            <input className={field} name="date" value={form.date} onChange={onChange} placeholder="Date" type="date" required aria-label="Date" />
            <input className={field} name="time" value={form.time} onChange={onChange} placeholder="Time" type="time" required aria-label="Time" />
            <input className={`${field} sm:col-span-1`} name="name" value={form.name} onChange={onChange} placeholder="Full Name" required aria-label="Full name" />
            <input className={`${field} sm:col-span-2`} name="phone" value={form.phone} onChange={onChange} placeholder="Phone No" type="tel" required aria-label="Phone number" />
            <div className="flex items-center justify-between gap-3 sm:col-span-3 sm:justify-end">
              {sent && <p role="status" className="text-xs font-bold">Thanks! We will confirm shortly.</p>}
              <button type="submit" className="btn-sun px-8">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
