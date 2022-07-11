import _ from 'lodash';
import { useEffect, useState } from 'react';
import { getFromLS, setToLS } from '../utils/storage';

export const useTheme = () => {
  const themes = getFromLS('all-themes');
  const [theme, setTheme] = useState(themes.data.dark);
  const [themeLoaded, setThemeLoaded] = useState(false);

  const setMode = (mode) => {
    setToLS('theme', mode);
    setTheme(mode);
  };

  const getFonts = () => {
    const allFonts = _.values(_.mapValues(themes.data, 'font'));
    return allFonts;
  };

  useEffect(() => {
    const localTheme = getFromLS('theme');
    localTheme && setTheme(localTheme);
    setThemeLoaded(true);
  }, []);

  return { theme, themeLoaded, setMode, getFonts };
};
