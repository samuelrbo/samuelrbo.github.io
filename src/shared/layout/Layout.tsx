import { ReactNode, createContext, useState } from 'react';
import { LayoutTheme } from './layout.enum';

export type LayoutContextProps = {
  theme: string;
  switchToTheme: (theme: LayoutTheme) => void;
};

export const LayoutContext = createContext<LayoutContextProps>(
  {} as LayoutContextProps
);

export const LayoutProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<LayoutTheme>(
    (localStorage.getItem('theme') as LayoutTheme) || LayoutTheme.DARK
  );

  const switchToTheme = (theme: LayoutTheme) => {
    localStorage.setItem('theme', theme);
    setTheme(theme);
  };

  return (
    <LayoutContext.Provider value={{ theme, switchToTheme }}>
      <section className={`container ${theme}`}>{children}</section>
    </LayoutContext.Provider>
  );
};
