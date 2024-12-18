"use client";

import { createContext, useState, useEffect, useMemo } from 'react';
import { ThemeProvider as NextThemeProvider } from 'next-themes';
import PropTypes from 'prop-types';

interface Theme {
  primaryColor: string;
  secondaryColor: string;
  textColor: string;
  backgroundColor: string;
}

interface ThemeContextType {
  theme: string;
  setTheme: (theme: string) => void;
  currentTheme: Theme;
}

interface ThemeProviderProps {
  attribute?: string;
  defaultTheme?: string;
  enableSystem?: boolean;
  disableTransitionOnChange?: boolean;
  children: React.ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  children,
  ...props
}) => {
  return (
    <NextThemeProvider {...props}>
      {children}
    </NextThemeProvider>
  );
};

export default ThemeProvider;