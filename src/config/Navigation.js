// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import DetailScreen from '../screens/DetailScreen';

const Stack = createStackNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" options={{headerStyle:{
            backgroundColor: '#009387',
        },
        headerTintColor: '#fff',
        headerTitleStyle:{
            fontWeight: 'bold',
        }
        }} component={Home} />
        <Stack.Screen name="DetailScreen" 
        options={{headerStyle:{
            backgroundColor: '#009387',
        },
        headerTintColor: '#fff',
        headerTitleStyle:{
            fontWeight: 'bold',
        }
        }}component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;