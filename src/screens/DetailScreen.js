import React from 'react'
import {
    View,
    Text,
    Button,
  } from 'react-native';


function DetailScreen({navigation}) {
    return (
        <>
        <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
            <Text style={{fontSize:32}}> Hello DetailScreen </Text>
            <Button title='Goto details screen..... again'
             onPress={() => navigation.push('DetailScreen')} />
            <Button title='Goto Home'
             onPress={() => navigation.navigate('Home')} />
            <Button title='Go back'
             onPress={() => navigation.goBack()} />
            <Button title='Goto first screen'
             onPress={() => navigation.popToTop()} />
        </View>
        </>
    )
}

export default DetailScreen;
