import React from 'react'
import { View,Text, StyleSheet } from 'react-native'

export const MyCardsScreen = () => {
  return (
    <View style={styles.container}>
        <Text style={styles.text}>My Cards Screen</Text>
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
        textAlign: 'center'
  }
})