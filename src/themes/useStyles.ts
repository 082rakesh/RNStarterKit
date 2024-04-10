import {StyleSheet, useWindowDimensions} from 'react-native';

export const useStyles = () => {
  const {width, height} = useWindowDimensions();
  return StyleSheet.create({
    container: {flex: 1, flexDirection: 'row'},
    left: {
      width: width > 500 ? 200 : 100,
      height: height > 500 ? 300 : 200,
      backgroundColor: 'red',
    },
    right: {flex: 1, backgroundColor: 'gray'},
    widthStyle: {width: width * 0.8},
  });
};
