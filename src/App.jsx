import React from 'react';
import MainLayout from 'Layouts/MainLayout/MainLayout';
import GlobalModalProvider from 'HOC/GlobalModalProvider';
import GlobalThemeProvider from 'HOC/GlobalThemeProvider';

class App extends React.Component {
  render() {
    return (
      <GlobalThemeProvider>
        <GlobalModalProvider>
          <MainLayout />
        </GlobalModalProvider>
      </GlobalThemeProvider>
    );
  }
}

export default App;
