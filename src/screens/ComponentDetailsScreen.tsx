import { StyleSheet, Text, View } from 'react-native';
import React, { useCallback } from 'react';
import { useAppNavigation } from '../navigation/useAppNavigation';
import { ButtonType } from '../utils/Constants';
import CustomButton from 'rm-ui-widget';
import Routes from '../navigation/routes';

const PostDetailsScreen = () => {
	const navigation = useAppNavigation();

	const onPrimaryPressHandler = () => {
		console.log('onPrimaryPressHandler');
	};

	return (
		<View style={styles.container}>
			<CustomButton type={ButtonType.PRIMARY} onPress={onPrimaryPressHandler}>
				<Text>Primary Button</Text>
			</CustomButton>

			<CustomButton type={ButtonType.SECONDARY}>
				<Text>Secondary Button</Text>
			</CustomButton>

			<CustomButton type={ButtonType.LINK}>
				<Text>Link Button</Text>
			</CustomButton>

			<CustomButton type={ButtonType.LARGE_PRIMARY}>
				<Text>Large Primary Button</Text>
			</CustomButton>
			<CustomButton type={ButtonType.LARGE_SECONDARY}>
				<Text>Custom BUtton</Text>
			</CustomButton>
		</View>
	);
};

export default PostDetailsScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		rowGap: 20,
	},
	primaryStyle: {
		borderRadius: 5,
		backgroundColor: 'red',
		padding: 10,
		alignItems: 'center',
	},
	largePrimaryStyle: {
		borderRadius: 5,
		backgroundColor: 'red',
		padding: 10,
		width: 200,
		alignItems: 'center',
	},
	secondaryStyle: {
		borderColor: '#000',
		borderRadius: 5,
		padding: 10,
		borderWidth: 1,
	},
	largeSecondaryStyle: {
		borderRadius: 8,
		borderColor: 'red',
		borderWidth: 1,
		padding: 10,
		width: 200,
		alignItems: 'center',
	},
	linkStyle1: {
		borderColor: '#000',
		borderRadius: 5,
		backgroundColor: 'transparent',
		padding: 10,
	},
});
