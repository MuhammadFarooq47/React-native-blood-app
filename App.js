/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import Navigation from './src/config/Navigation';
import DrawerNavigator from './src/config/DrawerNavigator';

const App = () => {
  return (
    <>
    <DrawerNavigator />
     {/* <Navigation />  */}
    </>
  );
};

const styles = StyleSheet.create({
  
});

export default App;
