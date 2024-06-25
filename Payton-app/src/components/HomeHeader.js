import React from "react";
import { View, Text , StyleSheet, Image } from "react-native";
import { Card } from "./Card";
import { Transaction } from "./Transaction";

export const HomeHeader = () => {
    return(
         <View style={styles.container}>
            
            <View style={styles.header}>
                <View style={styles.left}>
                <Image style={styles.profilePicture} 
                    source={require('../../assets/profile.png')}
                />

                <View style={styles.userInfo}>
                    <Text style={styles.title}>Welcome back,</Text>
                    <Text style={styles.subtitle}>Eric Atsu</Text>
                </View> 
                </View>
                    

                <View style={styles.search}>
                    <Image
                        source={require('../../assets/search.png')}
                    />
                </View>
                    
            </View>
                
            <View style={styles.card}>
            <Card />
            </View>

            <View style={styles.transactions}>
                <Transaction />
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
    color: 'grey',
    paddingBottom: 2,
  },
  subtitle: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'left',
  },
  profileView: {
    justifyContent: 'space-between'
  },
  profilePicture: {
    height: 70,
    width: 70,
    marginRight:20,
  },
search: {
    backgroundColor: "#ecedea",
     height: 60,
    width: 60,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    marginRight:10, 
},
card: {
    marginTop:50,
},
transactions: {
    marginTop:30,
}
});