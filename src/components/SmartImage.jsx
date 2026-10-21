import { useState } from 'react';

/** <img> with a graceful food-themed fallback if the URL fails to load. */
export default function SmartImage({ src, alt = '', className = '', fallback = '🍽️' }) {
  const [failed, setFailed] = useState(false);
  if (failed) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`flex items-center justify-center bg-gradient-to-br from-sun/50 to-brand/20 text-4xl ${className}`}
      >
        {fallback}
      </div>
    );
  }
  return <img src={src} alt={alt} loading="lazy" onError={() => setFailed(true)} className={className} />;
}
