// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import DetailScreen from './DetailScreen';
import Icon from 'react-native-vector-icons/Ionicons'

const HomeStack = createStackNavigator();

function DetailStactScreen({navigation}) {
  return (

      <HomeStack.Navigator screenOptions={{headerStyle:{
            backgroundColor: '#2674f7',
        },
        headerTintColor: '#fff',
        headerTitleStyle:{
            fontWeight: 'bold',
        }
        }}>
        <HomeStack.Screen  name="DetailScreen" component={DetailScreen} options={{
            title:'Details',
            headerLeft: () => (
                <Icon
                name="menu-outline" size={30} color='#ffff' backgroundColor='#009387' onPress={() => navigation.openDrawer()}> </Icon> 
            )
        }} />
      </HomeStack.Navigator>
   
  );
}

export default DetailStactScreen;