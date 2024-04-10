import {DarkTheme, DefaultTheme} from '@react-navigation/native';
import {DarkPalette, LightPalette, Palette} from './Palette';

export type ThemeExtended = {
  colors: ColorPalette;
};

export type ColorPalette = {
  primary: string;
  secondary: string;
  background: string;
  accent: string;
  card: string;
  text: string;
  border: string;
  notification: string;
  white: string;
  black: string;
  grey: string;
  greyLight: string;
  light: {
    primaryLight: string;
    secondaryLight: string;
    accentLight: string;
  };
  dark: {
    primaryDark: string;
    secondaryDark: string;
  };
};

export const defaultTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    ...Palette,
    ...LightPalette,
    customColor: Palette.light.accentLight,
  },
};

export const darkTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    ...Palette,
    ...DarkPalette,
    customColor: Palette.light.primaryLight,
  },
};
