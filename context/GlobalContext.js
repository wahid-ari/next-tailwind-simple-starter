import { createContext, useContext, useState } from 'react';
import { ThemeProvider } from 'next-themes';

export const GlobalContext = createContext(null);

export function GlobalProvider({ children }) {
  const [showNav, setShowNav] = useState(false);

  return (
    <GlobalContext.Provider value={{ showNav, setShowNav }}>
      <ThemeProvider
        attribute='class'
        storageKey='theme'
        enableSystem={false}
        defaultTheme='light'
        disableTransitionOnChange
      >
        {children}
      </ThemeProvider>
    </GlobalContext.Provider>
  );
}

export function useShowNav() {
  const context = useContext(GlobalContext);
  if (context === undefined) {
    throw new Error('useShowNav must be used within a GlobalProvider');
  }
  return context;
}
