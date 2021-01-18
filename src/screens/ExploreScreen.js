import React from 'react'
import {
    View,
    Text,
    Button,
  } from 'react-native';
  import Icon from 'react-native-vector-icons/Ionicons'

function ExploreScreen({navigation}) {
    return (
        <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
            <Text style={{fontSize:32}}> Explore Screen </Text>
            <Button onPress={() => navigation.navigate("DetailScreen")} title="Goto Data Screen"/>
        </View>
    )
}

export default ExploreScreen;
