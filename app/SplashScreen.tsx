import { View, StyleSheet } from 'react-native';
import LottieView from 'lottie-react-native';

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <LottieView
        source={require('../assets/animations/SplashScreen/CarAnimation.json')}
        autoPlay
        loop
        resizeMode="cover"
        style={styles.animation}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2F80ED',
  },
  animation: {
    width: 300,
    height: 300,
  },
});

export default SplashScreen;
