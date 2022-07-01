import { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import WebFont from 'webfontloader';
import './App.css';
import MainProvider from './providers/MainProvider';
import RouteSwitch from './routes/routeSwitch';
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
    <div className='App'>
      {themeLoaded && (
        <MainProvider>
          <ThemeProvider theme={selectedTheme}>
            <GlobalStyles />
            <RouteSwitch />
          </ThemeProvider>
        </MainProvider>
      )}
    </div>
  );
}

export default App;
