import {Image, StyleSheet, View, Text, Pressable} from 'react-native';
import React, {FC, useCallback} from 'react';
import {Info} from '../model/Restaurants';
import {IMG_BASE_URL} from '../utils/Constants';

interface Props {
  resInfo: Info;
  onPressHandle: () => void;
}
const RestaurantCard: FC<Props> = ({resInfo, onPressHandle}) => {
  const {name, avgRating, cuisines, cloudinaryImageId, areaName, costForTwo} =
    resInfo;
  const imageUrl: string = IMG_BASE_URL + cloudinaryImageId;

  const moveToDetails = useCallback(() => {
    onPressHandle();
  }, [onPressHandle]);
  return (
    <Pressable onPress={moveToDetails}>
      <View style={styles.mainContainer}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.imageStyle}
            resizeMode="cover"
            source={{uri: imageUrl}}
          />
        </View>
        <View style={styles.detailsContainer}>
          <Text style={styles.resNameStyle}>{name}</Text>
          <Text style={styles.avgRating}>{avgRating} rating</Text>
          <Text style={styles.cuisinesStyle}>{cuisines.join(', ')}</Text>
          <View style={styles.locationStyle}>
            <Text>{areaName}</Text>
            <Text>{costForTwo}</Text>
          </View>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: 'row',
    columnGap: 20,
    borderRadius: 8,
    backgroundColor: '#D3D3D3',
    margin: 5,
  },
  imageContainer: {
    flex: 2,
    margin: 5,
  },
  detailsContainer: {
    flex: 3,
    marginTop: 10,
    rowGap: 5,
    marginRight: 5,
  },
  imageStyle: {
    width: '100%',
    height: '100%',
  },
  resNameStyle: {
    fontWeight: 'bold',
    fontSize: 22,
  },
  locationStyle: {
    flexDirection: 'row',
    columnGap: 10,
    marginTop: 10,
    marginBottom: 10,
  },
  cuisinesStyle: {
    fontSize: 14,
  },
  avgRating: {
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default React.memo(RestaurantCard);
