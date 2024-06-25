import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';

export const Transaction = () => {

    const transactionsData = [
        {id: '1', title: 'Apple Store', category: 'Entertainment', amount:'-$5,99', image: require('../../assets/apple.png')},
        {id: '2', title: 'Spotify', category: 'Music', amount:'-$12,99', image: require('../../assets/spotify.png')},
        {id: '3', title: 'Money Transfer', category: 'Transaction', amount:'$300', image: require('../../assets/moneyTransfer.png')},
        {id: '4', title: 'Apple Store', category: 'Music', amount:'-$88', image: require('../../assets/grocery.png')},
        {id: '5', title: 'Apple Store', category: 'Music', amount:'-$88', image: require('../../assets/grocery.png')},
        {id: '6', title: 'Apple Store', category: 'Music', amount:'-$88', image: require('../../assets/grocery.png')},


    ];

  return (
    <View style={styles.container}>
        <View style={styles.transactionTitleView}>
            <Text style={styles.title}>Transaction</Text>
            <Text style={styles.seeAll}>Sell All</Text>
        </View>

        <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollViewContent}>
            {transactionsData.map((transactions, index) => (
                <View key={index} style={styles.transactionView}>

                    <View style={styles.transactionSection}>

                        <View style={styles.transactionImageAndTitle}>
                            <View style={styles.transactionImageBackground}>
                                <Image 
                                style={styles.transactionImage}
                                source={transactions.image}
                            />
                            </View>

                            <View style={styles.transactionTitleSection}>
                                <Text style={styles.transactionTitle}>{transactions.title}</Text>
                                <Text style={styles.category}>{transactions.category}</Text>
                            </View>
                        </View>

                        <View style={styles.transactionsAmount}>
                            <Text style={styles.transactionTitle}>{transactions.amount}</Text>
                        </View>

                    </View>
                </View>
            ))}
        </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
    paddingHorizontal: 5,
    },
    transactionTitleView: {
     flexDirection: 'row',
    justifyContent: 'space-between',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'left',
    },
    seeAll: {
    fontSize: 15,
    color: '#1994fa',
    fontWeight: 'bold',
    marginTop: 3,
    },
    scrollView: {
    paddingTop: 10,
    width: '100%',
    paddingLeft: 20,
    },
    scrollViewContent: {
    flexGrow: 1,
    },
    transactionSection: {
    flexDirection: 'row',
    justifyContent: 'space-between'
    },
    transactionImageAndTitle: {
    flexDirection: 'row',
    },
    transactionView: {
    padding: 10,
    height: 80,
    borderWidth: 1,
    marginBottom: 10,
    borderRadius: 15,
    fontSize: 20,
    fontWeight: 'bold',
    backgroundColor: 'white',
    borderColor: 'white',
    justifyContent: 'center'
    },
    transactionImageBackground: {
    backgroundColor: "#ecedea",
    height: 65,
    width: 65,
    borderRadius: 40,
    alignItems: "center",
    justifyContent: "center",
    marginRight:10,
    },
    transactionImage: {
    width: 30,
    height: 30,    
    },
    transactionTitleSection: {
    paddingTop: 10,
    paddingRight: 50,
    },
    transactionTitle: {
    textAlign: 'left',
    fontSize: 16,
    fontWeight: 'bold',
    paddingLeft: 10,
    },
    category: {
    textAlign: 'left',
    fontSize: 16,
    color: 'grey',
    paddingLeft: 10,
    paddingTop: 10,
    },
    transactionsAmount: {
    paddingTop: 10
    }
}) 