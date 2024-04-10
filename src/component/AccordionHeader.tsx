import {
  Pressable,
  View,
  Text,
  Image,
  StyleSheet,
  ViewStyle,
} from 'react-native';
import React from 'react';

type Props = {
  title: string;
  totalItem: number;
  handler: () => void;
  style?: ViewStyle;
};
const AccordionHeader = ({title, totalItem, handler, style = {}}: Props) => {
  return (
    <Pressable onPress={handler}>
      <View style={[styles.headerView, {...style}]}>
        <Text style={styles.headerTextStyle}>
          {title} ({totalItem})
        </Text>
        <Image
          style={styles.imageStyle}
          source={require('../assets/images/down-arrow.png')}
        />
      </View>
    </Pressable>
  );
};
const styles = StyleSheet.create({
  headerView: {
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    marginLeft: 10,
    marginRight: 10,
    justifyContent: 'space-between',
    paddingBottom: 20,
  },
  imageStyle: {
    width: 20,
    height: 20,
    marginRight: 15,
    marginTop: 15,
  },
  headerTextStyle: {
    fontWeight: 'bold',
    fontSize: 20,
    paddingLeft: 10,
    paddingTop: 10,
  },
});

export default React.memo(AccordionHeader);
