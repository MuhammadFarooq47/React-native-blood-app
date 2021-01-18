import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import SplashScreen from './SplashScreen';
import SignIn from './SignIn';
import SignUp from './SignUp';

const RootStack = createStackNavigator();

const RootStackScreen = () => {
    return(
        <RootStack.Navigator headerMode='none'>
        <RootStack.Screen name='SplashScreen' component={SplashScreen} />
        <RootStack.Screen name='SignIn' component={SignIn} />
        <RootStack.Screen name='SignUp' component={SignUp} />
    </RootStack.Navigator>
    )
   
}

export default RootStackScreen;