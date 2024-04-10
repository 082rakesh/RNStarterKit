import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const TransactionScreen = () => {
  return (
    <View style={styles.container}>
      <Text>This is Transaction screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default TransactionScreen;
