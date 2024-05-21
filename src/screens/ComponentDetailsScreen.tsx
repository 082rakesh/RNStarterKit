import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
const ComponentDetailsScreen = () => {
	return (
		<View style={styles.container}>
			<Text>This is a details page</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		rowGap: 20,
	},
});

export default ComponentDetailsScreen;
