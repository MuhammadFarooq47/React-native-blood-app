import React from 'react'
import {
    View,
    Text,
    Button,
  } from 'react-native';
  import Icon from 'react-native-vector-icons/Ionicons'

function ProfileScreen({navigation}) {
    return (
        <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
            <Text style={{fontSize:32}}> Profile Screen </Text>
            <Button onPress={() => {alert("Profile Screen")} } title="Click Me"/>
        </View>
    )
}

export default ProfileScreen;
