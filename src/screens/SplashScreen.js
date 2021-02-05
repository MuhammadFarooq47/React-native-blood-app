import React from 'react';
import {
    View,
    Text,
    Dimensions,
    TouchableOpacity,
    StyleSheet,
  } from 'react-native';
  import LinearGradient from 'react-native-linear-gradient';
  import Icon from 'react-native-vector-icons/Ionicons';
  import * as Animatable from 'react-native-animatable';
  import {useTheme} from '@react-navigation/native';

const SplashScreen = ({navigation}) => {
    const {colors} = useTheme();
    return(
        
        <View style={styles.container}>
            <View style={styles.header}>
                <Animatable.Image 
                animation="bounceIn"
                
                source={require('../images/heartlogo.png')} 
                style={styles.logo} resizeMode='contain' />
            </View>
            <Animatable.View 
            animation="fadeInUpBig"
            style={[styles.footer, {backgroundColor: colors.background}]}>
                <Text style={[styles.title, {color: colors.text}]}> Stay connected with everyone! </Text>
                <Text style={styles.text}> Sign in with account </Text>
                <View style={styles.button}>
                <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
                    <LinearGradient 
                    colors={['#ff2e4a', '#ff0627']}
                    style={styles.signIn}>
                        <Text style={styles.textSign}> Get Started </Text>
                        <Icon name='arrow-forward-outline' color='#ffff' size={20} />
                    </LinearGradient>
                </TouchableOpacity>
                </View>
            </Animatable.View>
           
        </View>
    
    
    )
}

const {height} = Dimensions.get("screen");
const height_logo = height * 0.35;
const screenWidth = Dimensions.get('window').width

const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: '#ff0e2e'
    },
    header: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    footer: {
        flex: 1,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingVertical: 50,
        paddingHorizontal: 30
    },
    logo: {
        width: screenWidth,
        height: height_logo,
    },
    title: {
        color: '#05375a',
        fontSize: 30,
        fontWeight: 'bold'
    },
    text: {
        color: 'grey',
        marginTop:5
    },
    button: {
        alignItems: 'flex-end',
        marginTop: 30
    },
    signIn: {
        width: 150,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        flexDirection: 'row'
    },
    textSign: {
        color: 'white',
        fontWeight: 'bold'
    }
  });

export default SplashScreen;