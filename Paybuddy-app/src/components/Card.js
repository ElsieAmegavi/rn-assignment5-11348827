import React from 'react';
import { View, Image, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export const Card = ({ isDarkTheme }) => {
  const cardBackgroundColor = isDarkTheme ? '#161622' : '#fff';
  const textColor = isDarkTheme ? 'grey' : '#000';
  const iconBackgroundColor = isDarkTheme ? '#1e1e2d' : '#ecedea';
  const iconColor = isDarkTheme ? 'white' : 'black';

  return (
    <View style={[styles.card, { backgroundColor: cardBackgroundColor }]}>
      <View>
        <Image
          source={require('../../assets/Card.png')}
        />

        <View style={styles.icons}>

          <View>
            <TouchableOpacity>
              <View style={[styles.search, { backgroundColor: iconBackgroundColor }]}>
                <Icon name="arrow-up" size={20} color={iconColor} />
              </View>
            </TouchableOpacity>

            <Text style={[styles.text, { color: textColor }]}>Sent</Text>
          </View>

          <View>
            <TouchableOpacity>
              <View style={[styles.search, { backgroundColor: iconBackgroundColor }]}>
                <Icon name="arrow-down" size={20} color={iconColor} />
              </View>
            </TouchableOpacity>

            <Text style={[styles.text, { color: textColor }]}>Receive</Text>
          </View>

          <View>
            <TouchableOpacity>
              <View style={[styles.search, { backgroundColor: iconBackgroundColor }]}>
                <FontAwesome name='dollar' size={20} color={iconColor} />
              </View>
            </TouchableOpacity>

            <Text style={[styles.text, { color: textColor }]}>Loan</Text>
          </View>

          <View>
            <TouchableOpacity>
              <View style={[styles.search, { backgroundColor: iconBackgroundColor }]}>
                <Icon name='cloud-upload-outline' size={20} color={iconColor} />
              </View>
            </TouchableOpacity>

            <Text style={[styles.text, { color: textColor }]}>Topup</Text>
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
    borderRadius: 10,
    paddingVertical: 20,
  },
  icons: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 30,
  },
  search: {
    height: 60,
    width: 60,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
    marginBottom: 7,
  },
  text: {
    marginRight: 11,
    textAlign: "center",
    fontSize: 12,
  }
});

export default Card;
