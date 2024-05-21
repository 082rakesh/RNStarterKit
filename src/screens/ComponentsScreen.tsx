import { FlatList, StyleSheet, View } from 'react-native';
import React, { useEffect } from 'react';
import { useTheme } from '@react-navigation/native';
import Text from '../ui-toolkit/Text';
import CardView from '../ui-toolkit/CardView';
import { useAppNavigation } from '../navigation/useAppNavigation';
import { TextTypes } from '../utils/Enums';
import { featureList } from '../utils/FeatureData';
import Routes from '../navigation/routes';

const ComponentsScreen = () => {
	const theme = useTheme();
	const navigation = useAppNavigation();

	const onPressHandle = () => {
		navigation.navigate(Routes.pages.compDetailsScreen);
	};

	return (
		<View style={styles.container}>
			<FlatList
				data={featureList.features}
				renderItem={(item) => {
					return (
						<CardView onPress={onPressHandle}>
							<Text
								style={{ color: theme.colors.text }}
								type={TextTypes.PRIMARY}
							>
								{item.item.name}
							</Text>
						</CardView>
					);
				}}
				keyExtractor={(item) => item.id}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});

export default ComponentsScreen;
