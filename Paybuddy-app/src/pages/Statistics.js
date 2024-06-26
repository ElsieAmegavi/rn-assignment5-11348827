import React from 'react'
import { View,Text, StyleSheet } from 'react-native'

export const StatisticsScreen = () => {
  return (
    <View style={styles.container}>
        <Text style={styles.text}>Statistics Page</Text>
    </View>
  );
};

const styles = StyleSheet.create ({
    container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  text: {
  }
})