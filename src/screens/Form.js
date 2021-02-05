import React, {useState} from 'react'
import {
    View,
    Text,
    Button,
    Alert,
    TouchableOpacity,
    StyleSheet,
    TextInput,
    Platform,
    StatusBar,
    Dimensions,
    ScrollView
  } from 'react-native';
  import {useTheme} from '@react-navigation/native';
  import LinearGradient from 'react-native-linear-gradient';


  const screenHeight = Dimensions.get('window').height
  const screenWidth = Dimensions.get('window').width

function Form({navigation}) {
    const {colors} = useTheme();
   

    const theme = useTheme()
    return (
        <>
        {/* <StatusBar  barStyle={theme.dark? 'light-content' : 'dark-content'} /> */}
        <ScrollView>
        <View style={{flex:1, alignItems: 'center', justifyContent: 'center', marginTop: 50}}>
            <Text style={{fontSize:32, color: colors.text}}> Add Your Details </Text>
            <TextInput style={styles.input} placeholder="Name" />
            <TextInput style={styles.input} placeholder="Email" />
            <TextInput style={styles.input} placeholder="Contact No." />
            <TextInput style={styles.input} placeholder="Blood group" />
            <TextInput style={styles.input} placeholder="Address" />
            {/* <Button  onPress={() => {alert("Home Screen")}} title="Click Me"/> */}
            <TouchableOpacity 
                    style={[styles.signIn, {
                        borderColor: '#ff0e2e',
                        borderWidth: 1,
                        marginTop: 15
                    }]}
                    >
                        <Text style={[styles.textSign, {
                            color: '#ff0e2e'
                        }]}> Send Data </Text>
                    </TouchableOpacity>
        </View>
        </ScrollView>
        </>
    );
};


const styles = StyleSheet.create({
    input: {
        width: screenWidth*0.9,
        height: 50,
        color: 'black',
        paddingHorizontal:20,
        margin: 10,
        borderWidth: 1,
        borderColor: '#ff0e2e',
        borderRadius: 10,
    
    },
    SignUp: {
        width: '70%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    signIn: {
        width: '70%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    }
 
});

export default Form;
