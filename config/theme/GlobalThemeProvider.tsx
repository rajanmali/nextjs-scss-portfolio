import { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';

// Global styles
import GlobalStyle from './globalStyles';

// Theme
import { theme } from './theme';

interface GlobalThemeProviderProps {
  children: ReactNode;
}

export const GlobalThemeProvider = ({ children }: GlobalThemeProviderProps) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    {children}
  </ThemeProvider>
);
