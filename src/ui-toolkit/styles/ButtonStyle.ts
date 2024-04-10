import {ViewStyle} from 'react-native';
import {Spacing} from '../../themes/Spacing';

const primary: ViewStyle = {
  borderRadius: Spacing.five,
  alignItems: 'center',
  padding: Spacing.ten,
  backgroundColor: 'red',
};

const linkStyle: ViewStyle = {
  backgroundColor: 'transparent', // Color should be used from the colorPalatte file.
  padding: Spacing.ten,
  alignItems: 'center',
};

const secondary = {
  backgroundColor: 'transparent',
  borderWidth: 1,
};
export const ButtonStyle = {
  style: {
    primary,
    largePrimary: {
      ...primary,
      width: 200, // Width can be static or can be based on the screen size, useWindowDimensions hooks can be used to get screen width & height
    },
    secondary: {
      ...primary,
      ...secondary,
    },
    largeSecondary: {
      ...primary,
      ...secondary,
      width: 200,
    },
    link: {
      ...linkStyle,
    },
  },
};
