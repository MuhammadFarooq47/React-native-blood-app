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
import { Provider } from 'react-redux';
import store from './src/redux';

const App = () => {
  //password bloodapp1234
  return (
    
    <Provider store={store}>
    <DrawerNavigator />
    </Provider>
  );
};

const styles = StyleSheet.create({
  
});

export default App;
