import { Image, Pressable, StyleSheet, Text, View, Alert } from 'react-native';
import React from 'react';
import { useSelector } from 'react-redux';
import { Info } from '../model/MenuCard';
import { MainState } from '../redux/appStore';

const Cart = () => {
	const cartItems: Info[] = useSelector((store: MainState) => store.cart.items);
	return (
		<Pressable onPress={() => Alert.alert('Cart presses')}>
			<View style={styles.container}>
				<Text style={styles.cartItemStyle}>{cartItems.length}</Text>
				<Image
					style={styles.imageStyle}
					source={require('../assets/images/cart-icon.png')}
				/>
			</View>
		</Pressable>
	);
};

const styles = StyleSheet.create({
	imageStyle: {
		width: 35,
		height: 35,
		marginTop: -10,
	},
	container: {
		flexDirection: 'column',
	},
	cartItemStyle: {
		marginLeft: 8,
	},
});
export default React.memo(Cart);
