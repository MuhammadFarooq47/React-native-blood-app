import React, {useState, useEffect} from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    TextInput,
    StyleSheet,
    Dimensions,
    ScrollView
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import Cards from './Cards';
import { useTheme } from '@react-navigation/native';
import { connect } from 'react-redux';
import db from '@react-native-firebase/firestore';
import {get_data} from '../redux/action/userActions'

const screenWidth = Dimensions.get('window').width

function FeedScreen({ data }) {
    const { colors } = useTheme()
    console.log('CardData ==>>', data)
    const [messages, setMessages] = useState([data]);
    console.log('messages ==>>>', messages)

    const jsonData = JSON.stringify(messages);
    console.log('Json Data here ==>>', jsonData)
    useEffect(() => {
        get_data()
    })

    console.log('Fav.Screen get_data ==>...', get_data())

      
const searchUser = (search) =>{
    // setMessages({
    //     userFiltered: messages.filter(i => i.blood.toLowerCase().includes(search.toLowerCase()))
    // })
}

    return (
        <View>

            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            
                    <Text style={[styles.filter, { color: colors.text }]}> Search by filter </Text>
                    <TextInput placeholder='Filter by blood group...'
                        onChangeText={text => searchUser(text)}
                        placeholderTextColor={colors.text}
                        style={styles.input} />
                    {/* <Text style={[styles.filter, { color: colors.text }]}> Search by filter </Text>
                    <TextInput placeholder='Filter by blood group...'
                        onChangeText={(text) => searchUser(text)}
                        placeholderTextColor={colors.text}
                        style={styles.input} /> */}

                

            </View>
<View style={{ paddingHorizontal: 10, marginBottom: 310 }}>
            <ScrollView >
                {data?.map((data, index) => {
                    return (
                        <Cards key={index}
                            name={data.name}
                            email={data.email}
                            contact={data.contact}
                            blood={data.blood}
                            address={data.address} />
                    )
                })}
            </ScrollView>
                </View>
        </View>
    )
}

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
    filter: {
        fontSize: 32,
        marginBottom: 10,
        marginTop: 30,
        textAlign: 'center'
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
    }
})

const mapStateToProps = (state) => ({
    data: state.root.data
});


export default connect(mapStateToProps, {get_data})(FeedScreen);
