import { StyleSheet, View } from 'react-native';
import { HomeHeader } from '../components/HomeHeader';

const HomeScreen = ({isDarkTheme}) => {
  return (
    <View style={styles.container}>
      <HomeHeader isDarkTheme={isDarkTheme}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default HomeScreen;