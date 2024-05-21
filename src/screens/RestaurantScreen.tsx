import React, { useCallback, useEffect } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import { Restaurant } from '../model/Restaurants';
import RestaurantCard from '../component/RestaurantCard';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ResStackParamList } from '../navigation/Navigator';
import { useTheme } from '@react-navigation/native';
import { MainState, useAppDispatch } from '../redux/appStore';
import { useSelector } from 'react-redux';
import { fetchRestaurants } from '../redux/restaurantsService';
import { APIStatus } from '../utils/Enums';
import Routes from '../navigation/routes';
import { useAppNavigation } from '../navigation/useAppNavigation';

type HomeScreenNavigationProp = NativeStackNavigationProp<
	ResStackParamList,
	'Restaurant',
	'RestaurantDetails'
>;

const RestaurantScreen = () => {
	const restrauntList: Restaurant[] = useSelector(
		(store: MainState) => store.restaurants.restaurants
	);
	const resStatus = useSelector((store: MainState) => store.restaurants.status);
	const theme = useTheme();
	const dispatch = useAppDispatch();
	const navigation = useAppNavigation();

	useEffect(() => {
		if (resStatus === APIStatus.LOADING) {
			dispatch(fetchRestaurants());
		}
	}, [dispatch, resStatus]);

	const navigateToDetails = useCallback(
		(infoID: string) => {
			navigation.navigate(Routes.pages.resDetailsScreen, {
				resID: infoID,
			});
		},
		[navigation]
	);

	return (
		<View
			style={(styles.container, { backgroundColor: theme.colors.background })}
		>
			<FlatList
				data={restrauntList}
				renderItem={(itemData) => {
					return (
						<RestaurantCard
							resInfo={itemData.item.info}
							onPressHandle={() => navigateToDetails(itemData.item.info.id)}
						/>
					);
				}}
				keyExtractor={(item) => {
					return item.info.id;
				}}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});

export default RestaurantScreen;
