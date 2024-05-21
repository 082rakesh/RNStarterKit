/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React from 'react';
import appStore from '../redux/appStore';
import { Provider } from 'react-redux';
import AppNavigation from '../navigation/Navigator';

function App(): React.JSX.Element {
	return (
		<Provider store={appStore}>
			<AppNavigation />
		</Provider>
	);
}

export default App;
