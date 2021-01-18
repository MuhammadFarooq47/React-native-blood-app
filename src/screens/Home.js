import React from 'react'
import {
    View,
    Text,
    Button,
    StatusBar
  } from 'react-native';
  import {useTheme} from '@react-navigation/native';

function Home({navigation}) {
    const {colors} = useTheme();

    const theme = useTheme()
    return (
        <>
        {/* <StatusBar  barStyle={theme.dark? 'light-content' : 'dark-content'} /> */}
        <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
            <Text style={{fontSize:32, color: colors.text}}> Hello React Native </Text>
            <Button onPress={() => {alert("Home Screen")}} title="Click Me"/>
        </View>
        </>
    )
}

export default Home;
