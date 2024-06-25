import React from 'react'
import { View,Image, StyleSheet,Text } from 'react-native'

export const Card = () => {
  return (
    <View style={styles.card}>
        <View>
            <Image 
            source={require('../../assets/Card.png')}
            />

            <View style={styles.icons}>
                <View >
                    <View style={styles.search}>
                        <Image
                    source={require('../../assets/send.png')}
                    />
                    </View>
                    
                    <Text style={styles.text}>Sent</Text>
                </View>
                
                <View>
                    <View style={styles.search}>
                        <Image
                            source={require('../../assets/recieve.png')}
                        />
                    </View>

                    <Text style={styles.text}>Receive</Text>
                </View>
                
                <View>
                    <View style={styles.search}>
                        <Image
                            source={require('../../assets/loan.png')}
                        />
                    </View>

                    <Text style={styles.text}>Loan</Text>
                </View>
                
                <View>
                    <View style={styles.search}>
                    <Image
                        source={require('../../assets/topUp.png')}
                    />
                    </View>

                    <Text style={styles.text}>Topup</Text>                    
                </View>
                
      
            </View>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
card: {
    paddingHorizontal: 10,
    alignItems: "center",
    
},
icons: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 30,
},
search: {
    backgroundColor: "#ecedea",
     height: 60,
    width: 60,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    marginRight:10,
    marginBottom: 7,
},
text: {
    marginRight: 11,
    textAlign: "center",
}
})