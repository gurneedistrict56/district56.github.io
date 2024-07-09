import { useEffect, useState } from 'react';

const useHasAppLoaded = () => {
  const [hasAppLoaded, setHasAppLoaded] = useState(false);

  useEffect(() => {
    setHasAppLoaded(true);
  }, []);

  return hasAppLoaded;
};

export default useHasAppLoaded;
