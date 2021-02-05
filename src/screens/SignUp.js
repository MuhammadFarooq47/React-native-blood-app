import React, {useState} from 'react';
import {
    View,
    Text,
    Dimensions,
    TouchableOpacity,
    StyleSheet,
    TextInput,
    Platform,
    StatusBar,
    ScrollView,
  } from 'react-native';
  import LinearGradient from 'react-native-linear-gradient';
  import Icon from 'react-native-vector-icons/Ionicons';
  import {useTheme} from 'react-native-paper';
  import * as Animatable from 'react-native-animatable';
  import auth from '@react-native-firebase/auth';


const SignUp = ({navigation}) => {
    const {colors} = useTheme();
    const [data, setData] = useState({
        name: '',
        email: '',
        password: '',
        confirm_password: '',
        check_textInputChange: false,
        secureTextEntry: true,
        confirm_secureTextEntry: true
    });

    const nameInput = (val) => {
        setData({
            ...data,
            name: val,
        });
    }

    const textInputChange = (val) => {
        if (val.length !== 0){
            setData({
                ...data,
                email: val,
                check_textInputChange: true
            })
        }else{
            setData({
                ...data,
                email: val,
                check_textInputChange: false
            })

        }
    };

    const handlePasswordChange = (val) => {
        setData({
            ...data,
            password: val
        })
    };

    const updateSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        })
    }

    const Register = () => {
        {data.email === '' && data.password === ""? alert('Input field cannot be empty.') : 
        auth().createUserWithEmailAndPassword(data.email, data.password)
        .then((result) => {
            console.log(result)
            // history.push('/')
        })
        .catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            alert(errorMessage)
            console.log(errorMessage)
            // ...
        });
        console.log(data.email, 'password ===>>>', data.password )
    }
    }
       

    // const handleConfirmPasswordChange = (val) => {
    //     setData({
    //         ...data,
    //         confirm_password: val
    //     })
    // };
    // const updateConfirmSecureTextEntry = () => {
    //     setData({
    //         ...data,
    //         confirm_secureTextEntry: !data.confirm_secureTextEntry
    //     })
    // }
    return(
        <>
        <View style={styles.container}>
            <StatusBar backgroundColor='#ff0e2e' barStyle='light-content' />
            <View style={styles.header}>
                <Text style={styles.text_header}> Register Now! </Text>
            </View>

            <Animatable.View style={[styles.footer, {backgroundColor: colors.background}]}
                animation='fadeInUpBig'
            >
                <ScrollView>
                <Text style={[styles.text_footer, {color: colors.text}]}> Name </Text>
                <View style={styles.action}>
                    <Icon name='person-outline' size={20} color={colors.text}  />
                    {/* color='#05375a' */}
                    <TextInput placeholder='Enter your full name'
                    onChangeText={(val) => nameInput(val)}
                    style={[styles.textInput, {color: colors.text}]} 
                    autoCapitalize='none' />
                    {data.check_textInputChange ? 
                    <Animatable.View animation='bounceIn'>
                    <Icon  name='checkmark-circle-outline' 
                     color='green'
                     size={20}
                      />
                    </Animatable.View>
                     : null
                    }
                   
                </View>
                <Text style={[styles.text_footer, {color: colors.text}]}> Email </Text>
                <View style={styles.action}>
                    <Icon  name='mail-outline' size={20} color={colors.text} />
                    <TextInput placeholder='Enter your email'
                    onChangeText={(val) => textInputChange(val)}
                    style={[styles.textInput, {color: colors.text}]} 
                    autoCapitalize='none' />
                    {data.check_textInputChange ? 
                    <Animatable.View animation='bounceIn'>
                    <Icon  name='checkmark-circle-outline' 
                     color='green'
                     size={20} />
                    </Animatable.View>
                     : null
                    }
                   
                </View>

                <Text style={[styles.text_footer, {color: colors.text},
               { marginTop: 35}]}> Password </Text>
                <View style={styles.action}>
                    <Icon name='lock-closed-outline' size={20} color={colors.text} />
                    <TextInput placeholder='Enter your password'
                    onChangeText={(val) => handlePasswordChange(val)}
                    secureTextEntry={data.secureTextEntry? true : false}
                    style={[styles.textInput, {color: colors.text}]} 
                    autoCapitalize='none' />
                    <TouchableOpacity onPress={updateSecureTextEntry}>
                        {data.secureTextEntry?
                         <Icon name='eye-off-outline' 
                         color='grey'
                         size={20} />
                         : 
                         <Icon name='eye-outline' 
                         color='grey'
                         size={20} />
                        }
                   
                    </TouchableOpacity>
                   
                </View>

                {/* <Text style={[styles.text_footer, 
               { marginTop: 35}]}> Confirm Password </Text>
                <View style={styles.action}>
                    <Icon name='lock-closed-outline' size={20} color='#05375a' />
                    <TextInput placeholder='Confiorm password'
                    onChangeText={(val) => handleConfirmPasswordChange(val)}
                    secureTextEntry={data.confirm_secureTextEntry? true : false}
                    style={styles.textInput} 
                    autoCapitalize='none' />
                    <TouchableOpacity onPress={updateConfirmSecureTextEntry}>
                        {data.confirm_secureTextEntry?
                         <Icon name='eye-off-outline' 
                         color='grey'
                         size={20} />
                         : 
                         <Icon name='eye-outline' 
                         color='grey'
                         size={20} />
                        }
                   
                    </TouchableOpacity>
                   
                </View> */}

                <View style={styles.button}>
                    <TouchableOpacity style={styles.SignUp} onPress={Register}>
                    <LinearGradient
                    colors={['#ff2e4a', '#ff0627']}
                    style={styles.SignUp}>
                        <Text style={[styles.textSign, {color: '#fff'}]}> Sign Up </Text>
                    </LinearGradient>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigation.navigate("SignIn")}
                    style={[styles.SignUp, {
                        borderColor: '#ff0e2e',
                        borderWidth: 1,
                        marginTop: 15
                    }]}
                    >
                        <Text style={[styles.textSign, {
                            color: '#ff0e2e'
                        }]}> Sign In </Text>
                    </TouchableOpacity>

                </View>
                </ScrollView>
            </Animatable.View>
            
        </View>
        </>
    
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: '#ff0e2e'
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    footer: {
        flex: 3,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 35,
        textAlign: 'center'
    },
    text_footer: {
        color: '#05375a',
        fontSize: 18
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    actionError: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#FF0000',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
    },
    errorMsg: {
        color: '#FF0000',
        fontSize: 14,
    },
    button: {
        alignItems: 'center',
        marginTop: 50
    },
    SignUp: {
        width: '100%',
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

export default SignUp;