import React, {useState, useContext, useEffect} from 'react';
import {
    View,
    Text,
    Alert,
    TouchableOpacity,
    StyleSheet,
    TextInput,
    Platform,
    StatusBar
  } from 'react-native';
  import LinearGradient from 'react-native-linear-gradient';
  import Icon from 'react-native-vector-icons/Ionicons';
  import * as Animatable from 'react-native-animatable';
  import {AuthContext} from '../components/context';
  import Users from '../model/Users';
  import {useTheme} from 'react-native-paper';
  import db from "@react-native-firebase/database";
  import auth from '@react-native-firebase/auth';
  


const SignIn = ({navigation}) => {
    const {colors} = useTheme();
    const [data, setData] = useState({
        username: '',
        password: '',
        check_textInputChange: false,
        secureTextEntry: true,
        isValidUser: true,
        isValidPassword: true,
    });

    const {signIn} = useContext(AuthContext);
    

    const textInputChange = (val) => {
        if (val.trim().length >= 4){
            setData({
                ...data,
                username: val,
                check_textInputChange: true,
                isValidUser: true
            })
        }else{
            setData({
                ...data,
                username: val,
                check_textInputChange: false,
                isValidUser: false
            })

        }
    };

    const handlePasswordChange = (val) => {
        if(val.trim().length >= 8){
            setData({
                ...data,
                password: val,
                isValidPassword: true
    
            });
        }else{
            setData({
                ...data,
                password: val,
                isValidPassword: false
    
            })
        }
        
    };

    const updateSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        });
    };
// (userName, password) 
    const loginHandle = ()=> {
        //alert('hello')
        {data.username === '' && data.password === ''? alert('Username or password field cannot be empty.'):
        auth().signInWithEmailAndPassword(data.username, data.password)
        .then((result) => {
        alert('login sucessfully');
        // Alert.alert('Wrong Input', 'Username or password field cannot be empty.', [
        //     {text: 'Okay'}
        // ]);

        // return;
          signIn(data.username, data.password)
          
        })
        .catch(error => {
          if (error.code === 'auth/email-already-in-use') {
            alert('That email address is already in use!');
          }
      
          if (error.code === 'auth/invalid-email') {
            alert('That email address is invalid!');
          }
      
          alert(error);
        }); };
   
        // const foundUser = Users.filter(item => {
        //     return userName === item.username && password === item.password;
        // });

        // console.log('username', userName, 'password', password)
        // db().ref('/').child('users').push(userName)

        // if(data.username.length === 0 || data.password.length === 0 ) {
        //     Alert.alert('Wrong Input', 'Username or password field cannot be empty.', [
        //         {text: 'Okay'}
        //     ]);

        //     return;
        // }
        

        // if(foundUser.length === 0) {
        //     Alert.alert('Invalid User', 'Username or password is incorrect', [
        //         {text: 'Okay'}
        //     ]);

        //     return;
        // }
       
        //signIn(foundUser)
};

const handleValidUser = (val) => {
    if(val.trim().length >= 4){
        setData({
            ...data,
            isValidUser: true
        })
    }else {
        setData({
            ...data,
            isValidUser: false
        })

    }

};

const handleValidPassword = () => {
    if(val.trim().length >= 4){
        setData({
            ...data,
            isValidPassword: true
        })
    }else {
        setData({
            ...data,
            isValidPassword: false
        })

    }

}
    return(
        <>
        <View style={styles.container}>
            <StatusBar backgroundColor='#ff0e2e' barStyle='light-content' />
            <View style={styles.header}>
                <Text style={styles.text_header}> Login </Text>
            </View>

            <Animatable.View style={[styles.footer, {backgroundColor: colors.background}]}
                animation='fadeInUpBig'
            >
                <Text style={[styles.text_footer, {color: colors.text}]}> Email </Text>
                <View style={styles.action}>
                    <Icon name='mail-outline' size={20} color={colors.text} />
                    <TextInput placeholder='Enter your email'
                    onChangeText={(val) => textInputChange(val)}
                    onEndEditing={(e) => handleValidUser(e.nativeEvent.text)}
                    style={[styles.textInput, {color: colors.text}]} 
                    autoCapitalize='none' />
                    {data.check_textInputChange ? 
                    <Animatable.View animation='bounceIn'>
                    <Icon name='checkmark-circle-outline' 
                     color='green'
                     size={20} />
                    </Animatable.View>
                     : null
                    }
                   
                </View>
                {data.isValidUser ? null : 
                <Animatable.View animation='fadeInLeft' duration={500}>
                <Text style={styles.errorMsg}> username must be 4 characters long. </Text>
                </Animatable.View>
                }
                
               

                <Text style={[styles.text_footer,  {color: colors.text},
               { marginTop: 35}]}> Password </Text>

                <View style={styles.action}>
                    <Icon name='lock-closed-outline' size={20} color={colors.text} />
                    <TextInput placeholder='Enter your password'
                    onChangeText={(val) => handlePasswordChange(val)}
                    onEndEditing={(e) => handleValidPassword(e.nativeEvent.text)}
                    secureTextEntry={data.secureTextEntry? true : false}
                    style={[styles.textInput, {color:colors.text}]} 
                    autoCapitalize='none' />
                    <TouchableOpacity onPress={updateSecureTextEntry}>
                        {data.secureTextEntry?
                         <Icon name='eye-off-outline' 
                         color={colors.text}
                         size={20} />
                         : 
                         <Icon name='eye-outline' 
                         color='grey'
                         size={20} />
                        }
                   
                    </TouchableOpacity>
                   
                </View>
                {data.isValidPassword ? null : 
                 <Animatable.View animation='fadeInLeft' duration={500}>
                 <Text style={styles.errorMsg}> Password must be 4 characters long. </Text>
                 </Animatable.View>
                }
               

                <TouchableOpacity>
                    <Text style={{color: '#05375a', marginTop: 15}}> Forgot Password ?  </Text>
                </TouchableOpacity>
                <View style={styles.button}>
                    {/* () => {loginHandle} */}
                    <TouchableOpacity style={styles.signIn}
                    onPress={loginHandle}> 
                    {/* (data.username, data.password) */}
                    <LinearGradient
                    colors={['#ff2e4a', '#ff0627']}
                    style={styles.signIn}>
                        <Text style={[styles.textSign, {color: '#fff'}]}> Sign In </Text>
                    </LinearGradient>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigation.navigate("SignUp")}
                    style={[styles.signIn, {
                        borderColor: '#ff0e2e',
                        borderWidth: 1,
                        marginTop: 15
                    }]}
                    >
                        <Text style={[styles.textSign, {
                            color: '#ff0e2e'
                        }]}> Sign Up </Text>
                    </TouchableOpacity>

                </View>
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
        fontSize: 40,
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        
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
    signIn: {
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

export default SignIn;