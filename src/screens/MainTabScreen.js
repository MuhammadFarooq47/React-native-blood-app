import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons'
import FeedScreen from './FeedScreen';
import ProfileScreen  from './ProfileScreen';
import ExploreScreen from './ExploreScreen';
import FavrioteScreen from './FavrioteScreen';
import HomeStackScreen from './HomeStackScreen';
import Home from './Home';


const Tab = createMaterialBottomTabNavigator();

function MainTabScreen() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#fff"
      style={{ backgroundColor: 'ff0e2e' }}
    >
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          tabBarColor: '#ff0e2e',
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
          tabBarColor: '#ff0e2e',
          tabBarLabel: 'Register',
          tabBarIcon: ({ color }) => (
            <Icon name="add-circle-outline" color={color} size={26} />
          ),
        }}
      />

<Tab.Screen
        name="Favriote"
        component={FavrioteScreen}
        options={{
          tabBarLabel: 'Search',
          tabBarColor: '#ff0e2e',
          tabBarIcon: ({ color }) => (
            <Icon name="search-outline" color={color} size={26} />
          ),
        }}
      />
     
      <Tab.Screen
        name="Explore"
        component={ExploreScreen}
        options={{
          tabBarLabel: 'About',
          tabBarColor: '#ff0e2e',
          tabBarIcon: ({ color }) => (
            <Icon name="people-circle-outline" color={color} size={26} />
          ),
        }}
      />
       <Tab.Screen
        name="Feed"
        component={FeedScreen}
        options={{
          tabBarLabel: 'Connect',
          tabBarColor: '#ff0e2e',
          tabBarIcon: ({ color }) => (
            <Icon name="call-outline" color={color} size={26} />
          ),
        }}
      />
    
    </Tab.Navigator>
  );
}




export default MainTabScreen;