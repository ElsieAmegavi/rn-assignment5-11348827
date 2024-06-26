import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Card } from "./Card";
import { Transaction } from "./Transaction";

export const HomeHeader = ({ isDarkTheme }) => {
  const headerBackground = isDarkTheme ? '#161622' : '#fff';
  const titleColor = isDarkTheme ? '#ccc' : 'grey';
  const subtitleColor = isDarkTheme ? '#fff' : '#000';
  const searchBackgroundColor = isDarkTheme ? '#1e1e2d' : '#ecedea';

  return (
    <View style={[styles.container, { backgroundColor: headerBackground }]}>
      <View style={styles.header}>
        <View style={styles.left}>
          <Image
            style={styles.profilePicture}
            source={require('../../assets/profile.png')}
          />

          <View style={styles.userInfo}>
            <Text style={[styles.title, { color: titleColor }]}>Welcome back,</Text>
            <Text style={[styles.subtitle, { color: subtitleColor }]}>Eric Atsu</Text>
          </View>
        </View>

        <View style={[styles.search, { backgroundColor: searchBackgroundColor }]}>
          <Image
            source={require('../../assets/search.png')}
          />
        </View>
      </View>

      <View style={styles.card}>
        <Card isDarkTheme={isDarkTheme}/>
      </View>

      <View style={styles.transactions}>
        <Transaction isDarkTheme={isDarkTheme}/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    paddingTop: 80,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  left: {
    flexDirection: "row"
  },
  userInfo: {
    marginTop: 10,
  },
  title: {
    fontSize: 20,
    paddingBottom: 2,
  },
  subtitle: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'left',
  },
  profilePicture: {
    height: 70,
    width: 70,
    marginRight: 20,
  },
  search: {
    height: 60,
    width: 60,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },
  card: {
    marginTop: 20,
  },
  transactions: {
    marginTop: 30,
  }
});

export default HomeHeader;
