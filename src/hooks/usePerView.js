import { useEffect, useState } from 'react';

const read = () => (window.innerWidth >= 1024 ? 3 : window.innerWidth >= 640 ? 2 : 1);

/** Cards visible per slide: 1 (mobile), 2 (tablet), 3 (desktop). */
export default function usePerView() {
  const [n, setN] = useState(read);
  useEffect(() => {
    const onResize = () => setN(read());
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);
  return n;
}
