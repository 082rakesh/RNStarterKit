/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React from 'react';
import appStore from './src/redux/appStore';
import {Provider} from 'react-redux';
import AppNavigation from './src/navigation/Navigator';

function App(): React.JSX.Element {
  return (
    <Provider store={appStore}>
      <AppNavigation />
    </Provider>
  );
}

export default App;
