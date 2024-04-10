import {useTheme} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text as TextComponent, TextStyle} from 'react-native';
import {Spacing} from '../themes/Spacing';
import {Typography} from '../themes/Typography';
import {TextTypes} from '../utils/Enums';

export type Props = {
  children: React.ReactNode;
  type?: TextTypes;
  style?: TextStyle;
};

const Text: React.FC<Props> = ({
  children,
  type = TextTypes.PRIMARY,
  style = {},
}: Props) => {
  const theme = useTheme();
  return (
    <TextComponent
      style={{
        ...styles[type],
        color: theme.colors.text,
        padding: Spacing.xs,
        ...style,
      }}>
      {children}
    </TextComponent>
  );
};

const styles = StyleSheet.create({
  primary: {
    ...Typography.fontStyle.primary,
  },
  secondary: {
    ...Typography.fontStyle.secondary,
  },
  heading: {
    ...Typography.fontStyle.heading,
  },
});

export default Text;
