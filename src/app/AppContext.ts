import { createContext } from 'react';

interface AppState {
  hasLoaded: boolean
}

const AppContext = createContext<AppState>({
  hasLoaded: false,
});

export default AppContext;
