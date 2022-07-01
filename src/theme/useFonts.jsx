import React from 'react';
import { useTheme } from './useTheme';

export const useFonts = () => {
  const { theme } = useTheme();
  const size = {
    h7: 9,
    h6: 11,
    h5: 13,
    h4: 16,
    h3: 19,
    h2: 23,
    h1: 28,
    h33: 33,
    h40: 40,
  };

  const weight = {
    full: '900',
    semi: '600',
    low: '400',
    bold: 'bold',
    normal: 'normal',
  };

  return { size, weight };
};
