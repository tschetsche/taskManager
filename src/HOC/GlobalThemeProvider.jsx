import React, { memo, useState } from 'react';
import { ThemeProvider, createGlobalStyle, StyleSheetManager } from 'styled-components';

export const ThemeContext = React.createContext('');

export const GlobalStyles = createGlobalStyle`
body {
  margin: 0
}`;

export const greenGlobalStyle = {
  baseFontColor: '#424242',
  navbarBackgroundColor: '#2c352b',
  backgroundColor: '#dce0db',
  cardBackgroundColor: '#b6c48e',
  accentBackgroundColor: '#77815b',
  headerFontColor: '#d6ede1',
  accentFontColor: '#0c4c5c',
};

export const blueGlobalStyle = {
  baseFontColor: '#ffffff',
  navbarBackgroundColor: '#113f67',
  backgroundColor: '#e7eaf6',
  cardBackgroundColor: '#a2a8d3',
  accentBackgroundColor: '#38598b',
  headerFontColor: '#dbe4f7',
  accentFontColor: '#142d4c',
};

const GlobalThemeProvider = (props) => {
  const [isThemeGreen, setIsThemeGreen] = useState(false);

  const toggleTheme = () => {
    setIsThemeGreen(!isThemeGreen);
  };

  return (
    <StyleSheetManager disableVendorPrefixes={true}>
      <ThemeProvider theme={isThemeGreen ? greenGlobalStyle : blueGlobalStyle}>
        <ThemeContext.Provider value={toggleTheme}>
          <GlobalStyles />
          {props.children}
        </ThemeContext.Provider>
      </ThemeProvider>
    </StyleSheetManager>
  );
};

export default memo(GlobalThemeProvider);
