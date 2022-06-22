import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import WebFont from 'webfontloader';
import { useTheme } from './theme/useTheme';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './theme/GlobalStyles';
import { clearLS, getFromLS } from './utils/storage';

function App() {
  const { theme, themeLoaded, getFonts, setMode } = useTheme();
  const [selectedTheme, setSelectedTheme] = useState(theme);

  useEffect(() => {
    setSelectedTheme(theme);
  }, [themeLoaded]);

  useEffect(() => {
    WebFont.load({
      google: {
        families: getFonts(),
      },
    });
  });

  return (
    <div className='App'>
      {themeLoaded && (
        <ThemeProvider theme={selectedTheme}>
          <GlobalStyles />
        </ThemeProvider>
      )}
    </div>
  );
}

export default App;
