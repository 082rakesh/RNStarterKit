import { Pressable, StyleSheet, ViewStyle } from 'react-native';
import React from 'react';
import { Spacing } from '../themes/Spacing';
import { useTheme } from '@react-navigation/native';

export type Props = {
	children: React.ReactElement;
	style?: ViewStyle;
	onPress?: () => void;
	disabled?: boolean;
};

const CardView = ({ children, style = {}, onPress, disabled }: Props) => {
	const theme = useTheme();
	return (
		<Pressable
			disabled={disabled || !onPress}
			style={[styles.container, style, { backgroundColor: theme.colors.card }]}
			onPress={onPress}
		>
			{children}
		</Pressable>
	);
};

const styles = StyleSheet.create({
	container: {
		margin: Spacing.xs,
		borderRadius: 10,
		padding: Spacing.s,
	},
});

export default CardView;
