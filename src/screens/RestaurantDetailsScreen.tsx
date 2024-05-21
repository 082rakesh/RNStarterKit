import { StyleSheet, View, FlatList } from 'react-native';
import React, { useEffect } from 'react';
import { useRoute } from '@react-navigation/native';
import ResMenu from '../component/ResMenu';
import { Card4 } from '../model/MenuCard';
import { useSelector } from 'react-redux';
import { MainState, useAppDispatch } from '../redux/appStore';
import { APIStatus } from '../utils/Enums';
import { fetchMenuList } from '../redux/restaurantsService';

const RestaurantDetailsScreen = () => {
	const menuList: Card4[] = useSelector((store: MainState) => store.menu.cards);
	const menuStatus = useSelector((store: MainState) => store.menu.status);
	const dispatch = useAppDispatch();

	const { resID } = useRoute().params as { resID: string };
	console.log('resID', resID);

	const startTimer = () => {
		const timer = setInterval(() => {
			console.log('Log in certain interval');
		}, 1000);
	};

	useEffect(() => {
		if (menuStatus === APIStatus.LOADING) {
			dispatch(fetchMenuList(resID));
		}
	}, [dispatch, menuStatus, resID]);

	return (
		<View style={styles.mainContainer}>
			<FlatList
				data={menuList}
				renderItem={(card) => {
					return <ResMenu cardData={card.item} />;
				}}
				key={Math.random()}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	mainContainer: {
		flex: 1,
		backgroundColor: '#D3D3D3',
		rowGap: 20,
	},
});
export default RestaurantDetailsScreen;
