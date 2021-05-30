/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Image} from 'react-native';
const SplashScreen = ({navigation}) => {
  React.useEffect(() => {
    setTimeout(() => {
      navigation.replace('WebView');
    }, 2000);
  }, []);
  return (
    <View style={styles.container}>
      <Image source={require('../Assets/logobig.png')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundImage: {
    // backgroundColor: primaryColor,
    width: '100%',
    height: '100%',
    flex: 1,
  },
});

export default SplashScreen;
