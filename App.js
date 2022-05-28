/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState, useEffect } from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import messaging from '@react-native-firebase/messaging'

const App: () => Node = () => {
  const [token, setToken] = useState('');
  const getFCMToken = () => {
    messaging().getToken().then((FCMToken) => {
      console.log(FCMToken);
      setToken(FCMToken);
    })
  }
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  useEffect(() => {
    getFCMToken();
  }, [])

  return (
    <SafeAreaView style={backgroundStyle}>
     <Text>Your FCM token is: {token}</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({

});

export default App;
