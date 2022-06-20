import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import WebFont from 'webfontloader';
import { useTheme } from './theme/useTheme';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './theme/GlobalStyles';

function App() {
  const { theme, themeLoaded, getFonts } = useTheme();
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
          <header className='App-header'>
            <img src={logo} className='App-logo' alt='logo' />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
              className='App-link'
              href='https://reactjs.org'
              target='_blank'
              rel='noopener noreferrer'
            >
              Learn React
            </a>
          </header>
        </ThemeProvider>
      )}
    </div>
  );
}

export default App;
