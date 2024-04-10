import {StyleSheet, Text, View} from 'react-native';
import React, {useCallback} from 'react';
import Button from '../ui-toolkit/Button';
import {useAppNavigation} from '../navigation/useAppNavigation';
import {ButtonType} from '../utils/Constants';

const PostDetailsScreen = () => {
  const navigation = useAppNavigation();

  const onPrimaryPressHandler = useCallback(() => {
    navigation.navigate('TransactionStack');
  }, [navigation]);
  return (
    <View style={styles.container}>
      <Button type={ButtonType.PRIMARY} onPress={onPrimaryPressHandler}>
        <Text>Primary Button</Text>
      </Button>

      <Button type={ButtonType.SECONDARY}>
        <Text>Secondary Button</Text>
      </Button>

      <Button type={ButtonType.LINK}>
        <Text>Link Button</Text>
      </Button>

      <Button type={ButtonType.LARGE_PRIMARY}>
        <Text>Large Primary Button</Text>
      </Button>

      <Button type={ButtonType.LARGE_SECONDARY}>
        <Text>Large Secondary Button</Text>
      </Button>
    </View>
  );
};

export default PostDetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    rowGap: 20,
  },
  primaryStyle: {
    borderRadius: 5,
    backgroundColor: 'red',
    padding: 10,
    alignItems: 'center',
  },
  largePrimaryStyle: {
    borderRadius: 5,
    backgroundColor: 'red',
    padding: 10,
    width: 200,
    alignItems: 'center',
  },
  secondaryStyle: {
    borderColor: '#000',
    borderRadius: 5,
    padding: 10,
    borderWidth: 1,
  },
  largeSecondaryStyle: {
    borderRadius: 8,
    borderColor: 'red',
    borderWidth: 1,
    padding: 10,
    width: 200,
    alignItems: 'center',
  },
  linkStyle1: {
    borderColor: '#000',
    borderRadius: 5,
    backgroundColor: 'transparent',
    padding: 10,
  },
});
