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
            <Text style={{fontSize:32}}> Favriote Screen </Text>
            <Button onPress={() => navigation.navigate("DetailScreen")} title="Goto Data Screen"/>
        </View>
    )
}

export default FeedScreen;
