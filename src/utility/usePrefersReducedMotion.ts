import { useEffect, useState } from 'react';

const LISTENER_TYPE = 'change';

const usePrefersReducedMotion = () => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

    const listener = () => {
      console.log(mediaQuery.media, mediaQuery.matches);
      setPrefersReducedMotion(true);
    };

    mediaQuery.addEventListener(LISTENER_TYPE, listener);
    
    return () => mediaQuery.removeEventListener(LISTENER_TYPE, listener);
  }, []);

  return prefersReducedMotion;
};

export default usePrefersReducedMotion;
