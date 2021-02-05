import React, { useState } from 'react'
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    StyleSheet,
    Platform,
    StatusBar,
    Dimensions,
    ScrollView
} from 'react-native';
import { useTheme } from '@react-navigation/native';
import { RadioButton } from 'react-native-paper';
import Form from './Form';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';

const screenHeight = Dimensions.get('window').height
const screenWidth = Dimensions.get('window').width
const {height} = Dimensions.get("screen");
const height_logo = height * 0.45;

function Home({ navigation }) {
    const { colors } = useTheme();


    const theme = useTheme()
    return (
        <>
            <View style={styles.container}>
                <StatusBar backgroundColor='#ff0e2e' barStyle='light-content' />
                <View style={styles.header}>
                    <Text style={styles.text_header}> Who the blood is for & why donate? </Text>
                </View>

                <Animatable.View style={[styles.footer, { backgroundColor: colors.background }]}
                    animation='fadeInUpBig'
                >
                    <ScrollView>
                        <Image 
                        source={require('../images/gif.gif')} 
                        style={styles.logo} resizeMode="cover" />
                        <Text style={styles.footer_text}>
                            Every day blood transfusions take place that saves lives of many people all over the world. About 5 million Americans need a blood transfusion. Donating blood is good for the health of donors as well as those who need it.
                            Health benefits of donating blood include good health and reduced risk of cancer and hemochromatosis. It helps in reducing the risk of damage to liver and pancreas. Donating blood may help in improving cardiovascular health and reducing obesity. if you takecare life of people and your helth as well so Register in our blood donation group.
                    </Text>


                        <View style={styles.button}>
                            {/* () => {loginHandle} */}
                            <TouchableOpacity 
                            onPress={() => navigation.navigate("Profile")}
                            style={styles.signIn}>
                                <LinearGradient
                                    colors={['#ff2e4a', '#ff0627']}
                                    style={styles.signIn}>
                                    <Text style={[styles.textSign, { color: '#fff' }]}> Register Now </Text>
                                </LinearGradient>
                            </TouchableOpacity>
                            
                            {/* <TouchableOpacity
                            
                                style={[styles.signIn, {
                                    borderColor: '#ff0e2e',
                                    borderWidth: 1,
                                    marginTop: 15
                                }]}
                            >
                                <Text style={[styles.textSign, {
                                    color: '#ff0e2e'
                                }]}> Sign Up </Text>
                            </TouchableOpacity> */}
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
        paddingHorizontal: 10,
        paddingVertical: 30
    },
    text_header: {
        color: '#fff',
        // fontWeight: 'bold',
        fontSize: 34,
        fontFamily: 'DancingScript-Bold'
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
        marginTop: 30
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
    },
    footer_text: {
        fontSize: 16,
        color: 'grey',
        paddingHorizontal: 20,
        marginTop: 20,
        fontFamily: 'Handlee-Regular',
    },
    logo: {
        width: '100%',
        height: height_logo,
    },
});
export default Home;
