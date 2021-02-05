// import React from 'react'
// import {
//     View,
//     Text,
//     Button,
//   } from 'react-native';
//   import Icon from 'react-native-vector-icons/Ionicons'

// function ProfileScreen({navigation}) {
//     return (
//         <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
//             <Text style={{fontSize:32}}> Profile Screen </Text>
//             <Button onPress={() => {alert("Profile Screen")} } title="Click Me"/>
//         </View>
//     )
// }

// export default ProfileScreen;

import React, { useState, useContext, useEffect } from 'react'
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
    ScrollView,
    ImageBackground
} from 'react-native';
import { useTheme } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import Card from './FavrioteScreen';
import Cards from './Cards';
import { useStateValue } from './StateProvider';


const screenHeight = Dimensions.get('window').height
const screenWidth = Dimensions.get('window').width

function Feed({ navigation }) {
    const theme = useTheme()
    const { colors } = useTheme();
    const [card, setCard] = useState([])
    const [data, setData] = useState({
        name: '',
        email: '',
        contact: '',
        blood: '',
        address: ''

    });

    const nameInput = (val) => {
        setData({
            ...data,
            name: val,
        });
    }
    const emailInput = (val) => {
        setData({
            ...data,
            email: val,
        });
    }
    const contactInput = (val) => {
        setData({
            ...data,
            contact: val,
        });
    }
    const bloodInput = (val) => {
        setData({
            ...data,
            blood: val,
        });
    }
    const addressInput = (val) => {
        setData({
            ...data,
            address: val,
        });
    }

    const senddata = () => {
        console.log("User data ====>>>", data.name, data.email, data.contact, data.blood, data.address)
        setData('')
    }


    return (
        <>
            {/* <StatusBar  barStyle={theme.dark? 'light-content' : 'dark-content'} /> */}
            <ScrollView>

                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', marginTop: 70 }}>
                    <Text style={[styles.contact, {color: colors.text}]}> Get Connected! </Text>
                    <TextInput  placeholderTextColor="grey" onChangeText={(val) => nameInput(val)} style={[styles.input, {color:colors.text}]} placeholder="Name" />
                    <TextInput  placeholderTextColor="grey" onChangeText={(val) => emailInput(val)} style={[styles.input, {color:colors.text}]} placeholder="Email" />
                    <TextInput  placeholderTextColor="grey" onChangeText={(val) => contactInput(val)} style={[styles.input, {color:colors.text}]} placeholder="Contact No." />
                    <TextInput
                        style={styles.textArea}
                        underlineColorAndroid="transparent"
                        placeholder="Type your message here..."
                        placeholderTextColor="grey"
                        numberOfLines={10}
                        multiline={true}
                    />
                    {/* <Button  onPress={() => {alert("Home Screen")}} title="Click Me"/> */}
                    <TouchableOpacity onPress={senddata}
                        style={[styles.signIn, {
                            borderColor: '#ff0e2e',
                            borderWidth: 1,
                            marginTop: 15
                        }]}
                    >
                        <Text style={[styles.textSign, {
                            color: '#ff0e2e'
                        }]}> Send Message </Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </>
    );
};


const styles = StyleSheet.create({
    input: {
        width: screenWidth * 0.9,
        height: 50,
        color: 'black',
        paddingHorizontal: 20,
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
    },
    textArea: {
        height: 150,
        justifyContent: "center",
        alignItems: 'center',
        width: screenWidth * 0.9,
        // height: 50,
        color: 'black',
        paddingHorizontal: 20,
        margin: 10,
        borderColor: '#ff0e2e',
        borderRadius: 10,
        borderWidth: 1,
    },
    contact: {
        fontSize: 32,
    }


});

export default Feed;

