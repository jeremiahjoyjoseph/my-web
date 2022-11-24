import { useEffect, useState } from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import "./App.css";
import MainProvider from "./providers/MainProvider";
import RouteSwitch from "./routes/routeSwitch";
import { GlobalStyles } from "./theme/GlobalStyles";
import { useTheme } from "./hooks/useTheme";

function App() {
  const { theme, themeLoaded } = useTheme();
  const [selectedTheme, setSelectedTheme] = useState();

  useEffect(() => {
    setSelectedTheme(theme);
  }, [theme]);

  // useEffect(() => {
  //   WebFont.load({
  //     google: {
  //       families: getFonts(),
  //     },
  //   });
  // });

  return (
    <div className="App">
      {themeLoaded && (
        <MainProvider>
          <StyledThemeProvider theme={selectedTheme}>
            <GlobalStyles />
            <RouteSwitch />
          </StyledThemeProvider>
        </MainProvider>
      )}
    </div>
  );
}

export default App;
