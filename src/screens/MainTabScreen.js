import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons'
import FeedScreen from './FeedScreen';
import ProfileScreen  from './ProfileScreen';
import ExploreScreen from './ExploreScreen';
import FavrioteScreen from './FavrioteScreen';
import HomeStackScreen from './HomeStackScreen';


const Tab = createMaterialBottomTabNavigator();

function MainTabScreen() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#e91e63"
      style={{ backgroundColor: 'tomato' }}
    >
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <Icon name="home-outline" color={color} size={26} />
          ),
        }}
      />
     
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color }) => (
            <Icon name="person-outline" color={color} size={26} />
          ),
        }}
      />

<Tab.Screen
        name="Favriote"
        component={FavrioteScreen}
        options={{
          tabBarLabel: 'Faviorate',
          tabBarIcon: ({ color }) => (
            <Icon name="heart-outline" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Explore"
        component={ExploreScreen}
        options={{
          tabBarLabel: 'Explore',
          tabBarIcon: ({ color }) => (
            <Icon name="aperture-outline" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}




export default MainTabScreen;