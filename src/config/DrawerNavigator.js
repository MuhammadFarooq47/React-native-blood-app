import React, {useState, useEffect, useMemo, useReducer} from 'react';
import { ActivityIndicator, Button, View, StyleSheet } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer, DarkTheme as NavigationDarkTheme, DefaultTheme as NavigationDefaultTheme   } from '@react-navigation/native';
import {Provider as PaperPovider,DefaultTheme as PaperDefaultTheme, DarkTheme as PaperDarkTheme} from 'react-native-paper';
import Home from '../screens/Home';
import DetailScreen from '../screens/DetailScreen';
import HomeStackScreen from '../screens/HomeStackScreen';
import DetailStackScreen from '../screens/DetailStackScreen';
import MainTabScreen from '../screens/MainTabScreen';
import {DrawerContent} from '../screens/DrawerContent';
import BookMark from '../screens/BookMark';
import Setting from '../screens/SettingScreen';
import Support from '../screens/Support';
import RootStackScreen from '../screens/RootStackScreen';
import {AuthContext} from '../components/context';
import AsyncStorage from '@react-native-async-storage/async-storage';


const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  // const [isloading, setIsLoading] = useState(true);
  // const [userToken, setUserToken] = useState(null);
  const [isDarkTheme, setIsDarkTheme] = useState(false);

 const initialLoginState = {
    isLoading: true,
    userName: null,
    userToken: null
  };

  const CustomDefaultTheme = {
    ...NavigationDefaultTheme,
    ...PaperDefaultTheme,
    colors: {
      ...NavigationDefaultTheme.colors,
      ...PaperDefaultTheme.colors,
      background: '#ffff',
      text: '#333333'
    }
  };

  const CustomDarkTheme = {
    ...NavigationDarkTheme,
    ...PaperDarkTheme,
    colors: {
      ...NavigationDarkTheme.colors,
      ...PaperDarkTheme.colors,
      background: '#333333',
      text: '#ffff'
    }
  };

  const theme = isDarkTheme ? CustomDarkTheme : CustomDefaultTheme;
  const logInReducer = (preState, action) =>{
    switch(action.type){
      case 'RETRIEVE_TOKEN' :
        return {
          ...preState,
          userToken: action.token,
          isLoading: false
        }
        case 'LOGIN' :
         return {
           ...preState,
           userName: action.id,
           userToken: action.token,
           isLoading: false
         }
        case 'LOGOUT' :
         return {
           ...preState,
           userName: null,
           userToken: null,
           isLoading: false
         }
        case 'REGISTER' :
          return {
            ...preState,
            userName: action.id,
            userToken: action.token,
            isLoading: false
          }
    }
  }

  const [loginState, dispatch] = useReducer(logInReducer, initialLoginState);
  console.log(loginState.userToken,'token')
  const authContext = useMemo(() => ({
   signIn: async(foundUser) => {
    //  setUserToken('fgkj');
    //  setIsLoading(false);
    const userToken = String(foundUser[0].userToken);
    const userName = foundUser[0].username;

      try{
        userToken='abcd'
        await AsyncStorage.setItem('userToken', userToken);
      } catch(error) {
        console.log(error)
      }
      
    
    // console.log('user_token', userToken)
    dispatch({type: 'LOGIN', id: userName, token: userToken})
   },
   signOut: async() => {
    //  setUserToken(null);
    //  setIsLoading(false);
    try{
      // userToken='abcd'
      await AsyncStorage.removeItem('userToken');
    } catch(error) {
      console.log(error)
    }
    dispatch({type: 'LOGOUT'})
   },
   signUp: () => {
     setUserToken('fgkj');
     setIsLoading(false)
   }, 

   toggleTheme: () => {
    setIsDarkTheme(isDarkTheme => !isDarkTheme )
   }
  }), []);
  

  useEffect(() => {
    setTimeout(async() => {
      // setIsLoading(false)
      let userToken;
      userToken= null;
      try{
        userToken = await AsyncStorage.getItem('userToken');
      } catch(error) {
        console.log(error)
      }
      // console.log('userToken', userToken)
      dispatch({type: 'REGISTER', token: userToken})
      console.log('objectInfinite')
    }, 1000);
  }, [])
if(loginState.isloading){
  return(
    <View style={[styles.container, styles.horizontal]}>
       <ActivityIndicator size="large" color="#009387" />
    </View>
  )
}

  return (
    <PaperPovider theme={theme}>
    <AuthContext.Provider value={authContext}>
    <NavigationContainer theme={theme}>
      {loginState.userToken === null ? (
         <RootStackScreen />
     
      ) : <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />} >
      <Drawer.Screen name="HomeDrawer" component={MainTabScreen} />
      <Drawer.Screen name="Home" component={HomeStackScreen} />
      <Drawer.Screen name="BookMark" component={BookMark} />
      <Drawer.Screen name="Setting" component={Setting} />
      <Drawer.Screen name="Support" component={Support} />
      </Drawer.Navigator>  }
      
    </NavigationContainer>
    </AuthContext.Provider>
    </PaperPovider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center"
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10
  }
});