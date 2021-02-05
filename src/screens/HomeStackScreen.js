// In App.js in a new project

import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './Home';
import Icon from 'react-native-vector-icons/Ionicons'


const HomeStack = createStackNavigator();

function HomeStaackScreen({navigation}) {
  return (
    
      <HomeStack.Navigator 
      screenOptions={{headerStyle:{
        backgroundColor: '#ff0e2e',
    },
    headerTintColor: '#fff',
    headerTitleStyle:{
        fontWeight: 'bold',
    }
    }}>
        <HomeStack.Screen name="Home" component={Home} options={{
            title:'Home',
            headerLeft: () => (
                <Icon
                name="menu-outline" size={30} color='#ffff' backgroundColor='#ff0e2e' onPress={() => navigation.openDrawer()}> </Icon> 
            )
        }} />
      </HomeStack.Navigator>

  );
}

export default HomeStaackScreen;