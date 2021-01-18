import React from 'react'
import {
    View,
    Text,
    Button,
  } from 'react-native';
  import Icon from 'react-native-vector-icons/Ionicons'

function FeedScreen({navigation}) {
    return (
        <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
            <Text style={{fontSize:32}}> Feed Screen </Text>
            <Button onPress={() => {alert("Home Screen")}} title="Clicked Me"/>
        </View>
    )
}

export default FeedScreen;
