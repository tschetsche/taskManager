import React from 'react';
import MainLayout from 'Layouts/MainLayout/MainLayout';
import GlobalModalProvider from 'HOC/GlobalModalProvider';
import GlobalThemeProvider from 'HOC/GlobalThemeProvider';
import { Provider } from 'react-redux';
import store from './store/initStore';

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <GlobalThemeProvider>
          <GlobalModalProvider>
            <MainLayout />
          </GlobalModalProvider>
        </GlobalThemeProvider>
      </Provider>
    );
  }
}

export default App;
