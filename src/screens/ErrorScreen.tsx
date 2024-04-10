import {StyleSheet, View} from 'react-native';
import Text from '../ui-toolkit/Text';
import React from 'react';

const ErrorScreen = () => {
  return (
    <View style={styles.container}>
      <Text>
        This is an error screen This is an error screen This is an error screen
        This is an error screen{' '}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
});

export default ErrorScreen;
