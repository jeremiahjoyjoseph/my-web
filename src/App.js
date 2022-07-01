import { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import WebFont from 'webfontloader';
import './App.css';
import MainProvider from './providers/MainProvider';
import { GlobalStyles } from './theme/GlobalStyles';
import { useTheme } from './theme/useTheme';

function App() {
  const { theme, themeLoaded, getFonts } = useTheme();
  const [selectedTheme, setSelectedTheme] = useState();

  useEffect(() => {
    setSelectedTheme(theme);
  }, [theme]);

  useEffect(() => {
    WebFont.load({
      google: {
        families: getFonts(),
      },
    });
  });

  return (
    <MainProvider>
      <div className='App'>
        {themeLoaded && (
          <ThemeProvider theme={selectedTheme}>
            <GlobalStyles />
          </ThemeProvider>
        )}
      </div>
    </MainProvider>
  );
}

export default App;
