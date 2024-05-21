import { Fonts } from './Fonts';

const primary = {
	fontFamily: Fonts.primary,
	fontSize: 16,
};

export const Typography = {
	fontStyle: {
		primary,
		secondary: {
			...primary,
			fontSize: 14,
		},
		heading: {
			...primary,
			fontSize: 24,
			fontWeight: '700',
		},
	},
};
