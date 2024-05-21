export interface Feature {
	name: string;
	id: number;
}

export interface Features {
	features: Feature[];
}

export const featureList: Features = {
	features: [
		{ name: 'Buttons', id: 1 },
		{ name: 'List', id: 2 },
		{ name: 'Sample', id: 3 },
		{ name: 'Custom hooks', id: 4 },
		{ name: 'Custom Fonts sample', id: 5 },
	],
};
