/**
 *  Author: Rakesh
 * Objective: Used for navigation between screens.
 * the project has implementes Tab and Stack navigation, both,
 * title and other props for views.
 */
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RestaurantScreen from '../screens/RestaurantScreen';
import RestaurantDetailsScreen from '../screens/RestaurantDetailsScreen';
import Cart from '../component/Cart';
import ComponentsScreen from '../screens/ComponentsScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useColorScheme } from 'react-native';
import { darkTheme, defaultTheme } from '../themes/Theme';
import { DARK_THEME_TYPE } from '../utils/Constants';
import ComponentDetailsScreen from '../screens/ComponentDetailsScreen';
import Routes from './routes';
import {
	TITLE_COMPONENTS,
	TITLE_COMP_DETAILS,
	TITLE_RESTAURANT,
	TITLE_RES_DETAILS,
} from '../utils/HeaderTitleConstant';

// add required screen setting like whether header shown or not etc..
// navigation bar can be customized using -> headerStyle: {backgroundColor: '#D3D3D3D3'},

const screenOption = {
	gestureEnabled: false,
	headerShown: true,
	headerRight: () => <Cart />,
};

export type ResStackParamList = {
	Restaurant: {};
	RestaurantDetails: { resID: string } | undefined;
};

export type PostStackParamList = {
	Components: {};
	ComponentDetails: { id: string } | undefined;
};

export type RootStackParamList = {
	Restaurant: {};
	RestaurantDetails: { resID: string } | undefined;
	Post: {};
	PostDetails: { id: string } | undefined;
	TransactionStack: string;
};

const MainStack = createNativeStackNavigator();

// these stack is responsible to load tabs
const RestaurantsStack = createNativeStackNavigator();
const ComponentsStack = createNativeStackNavigator();
const BottomTab = createBottomTabNavigator(); // Tab navigator
const TransactionStack = createNativeStackNavigator();

const RestaurantsStackScreens = () => {
	return (
		<RestaurantsStack.Navigator screenOptions={screenOption}>
			<RestaurantsStack.Screen
				name={Routes.pages.restaurantScreen}
				component={RestaurantScreen}
				options={{ title: TITLE_RESTAURANT }}
			/>
			<RestaurantsStack.Screen
				name={Routes.pages.resDetailsScreen}
				component={RestaurantDetailsScreen}
				options={{ title: TITLE_RES_DETAILS }}
			/>
		</RestaurantsStack.Navigator>
	);
};

const ComponentsStackScreens = () => {
	return (
		<ComponentsStack.Navigator screenOptions={screenOption}>
			<ComponentsStack.Screen
				name={Routes.pages.componentsScreen}
				component={ComponentsScreen}
				options={{ title: TITLE_COMPONENTS }}
			/>
			<ComponentsStack.Screen
				name={Routes.pages.compDetailsScreen}
				component={ComponentDetailsScreen}
				options={{ title: TITLE_COMP_DETAILS }}
			/>
		</ComponentsStack.Navigator>
	);
};

const BottomTabNavigator = () => {
	return (
		<BottomTab.Navigator screenOptions={{ headerShown: false }}>
			<BottomTab.Screen
				name={Routes.stacks.restaurantTab}
				component={RestaurantsStackScreens}
			/>
			<BottomTab.Screen
				name='ComponentTab'
				component={ComponentsStackScreens}
				options={{ title: TITLE_COMPONENTS }}
			/>
		</BottomTab.Navigator>
	);
};

const MainStackNavigator = () => {
	return (
		<MainStack.Navigator screenOptions={{ headerShown: false }}>
			<MainStack.Screen
				name={Routes.stacks.tabStack}
				component={BottomTabNavigator}
			/>
		</MainStack.Navigator>
	);
};

const AppNavigation = () => {
	const scheme = useColorScheme();
	return (
		<NavigationContainer
			theme={scheme === DARK_THEME_TYPE ? darkTheme : defaultTheme}
		>
			<MainStackNavigator />
		</NavigationContainer>
	);
};

export default AppNavigation;
