// // import React from 'react'
// // import {
// //     View,
// //     Text,
// //     Button,
// //   } from 'react-native';
// //   import Icon from 'react-native-vector-icons/Ionicons'

// // function ProfileScreen({navigation}) {
// //     return (
// //         <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
// //             <Text style={{fontSize:32}}> Profile Screen </Text>
// //             <Button onPress={() => {alert("Profile Screen")} } title="Click Me"/>
// //         </View>
// //     )
// // }

// // export default ProfileScreen;

// import React, {useState,useContext, useEffect} from 'react'
// import {
//     View,
//     Text,
//     Button,
//     Alert,
//     TouchableOpacity,
//     StyleSheet,
//     TextInput,
//     Platform,
//     StatusBar,
//     Dimensions,
//     ScrollView
//   } from 'react-native';
//   import {useTheme} from '@react-navigation/native';
//   import LinearGradient from 'react-native-linear-gradient';
//   import ContcatContext from '../context/contact/contactContext';


//   const screenHeight = Dimensions.get('window').height
//   const screenWidth = Dimensions.get('window').width

// function Form({navigation}) {
//     const {colors} = useTheme();
//     const [data, setData] = useState({
//         name: '',
//         email: '',
//         contact: '',
//         blood: '',
//         address: ''
       
//     });

//     const nameInput = (val) => {
//         setData({
//             ...data,
//             name: val,
//         });
//     }
//     const emailInput = (val) => {
//         setData({
//             ...data,
//             email: val,
//         });
//     }
//     const contactInput = (val) => {
//         setData({
//             ...data,
//             contact: val,
//         });
//     }
//     const bloodInput = (val) => {
//         setData({
//             ...data,
//             blood: val,
//         });
//     }
//     const addressInput = (val) => {
//         setData({
//             ...data,
//             address: val,
//         });
//     }

//     const sendData = () => {
//         console.log("User Data ====>>>",data.name, data.email, data.contact, data.blood, data.address )
//         setData('')
//     }

//     const theme = useTheme()
//     return (
//         <>
//         {/* <StatusBar  barStyle={theme.dark? 'light-content' : 'dark-content'} /> */}
//         <ScrollView>
//         <View style={{flex:1, alignItems: 'center', justifyContent: 'center', marginTop: 70}}>
//             <Text style={{fontSize:32, color: colors.text}}>  Filter  </Text>
           
//             <TouchableOpacity onPress={sendData}
//                     style={[styles.signIn, {
//                         borderColor: '#ff0e2e',
//                         borderWidth: 1,
//                         marginTop: 15
//                     }]}
//                     >
//                         <Text style={[styles.textSign, {
//                             color: '#ff0e2e'
//                         }]}> Register </Text>
//                     </TouchableOpacity>
//         </View>
//         </ScrollView>
//         </>
//     );
// };


// const styles = StyleSheet.create({
//     input: {
//         width: screenWidth*0.9,
//         height: 50,
//         color: 'black',
//         paddingHorizontal:20,
//         margin: 10,
//         borderWidth: 1,
//         borderColor: '#ff0e2e',
//         borderRadius: 10,
    
//     },
//     SignUp: {
//         width: '70%',
//         height: 50,
//         justifyContent: 'center',
//         alignItems: 'center',
//         borderRadius: 10
//     },
//     textSign: {
//         fontSize: 18,
//         fontWeight: 'bold'
//     },
//     signIn: {
//         width: '70%',
//         height: 50,
//         justifyContent: 'center',
//         alignItems: 'center',
//         borderRadius: 10
//     },
//     textSign: {
//         fontSize: 18,
//         fontWeight: 'bold'
//     }
 
// });

// export default Form;

