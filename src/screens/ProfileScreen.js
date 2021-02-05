import React, {useState,useContext, useEffect} from 'react'
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
  import Card from './FavrioteScreen';
  import Cards from './Cards';
  import {set_data} from '../redux/action/userActions';
  import {connect} from 'react-redux';
  import {get_data} from '../redux/action/userActions'

  const screenHeight = Dimensions.get('window').height
  const screenWidth = Dimensions.get('window').width

function Form(props) {
    
    const theme = useTheme()
    const {colors} = useTheme();
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

    // if (data.name === '' && data.email === '' && data.contact === '' && data.blood === '' && data.address === ''){
    //     alert('Please add complete details')
    // }else{
    // }
    
    const userData =  {
        name: data.name,
        email: data.email,
        contact: data.contact,
        blood: data.blood,
        address: data.address
       } 
   

   console.log('ProfileProps ===>>>', props.data)


    return (
        <>
        <StatusBar  barStyle={theme.dark? 'light-content' : 'dark-content'} />
        <ScrollView>
        <View style={{flex:1, alignItems: 'center', justifyContent: 'center', marginTop: 70}}>
            <Text style={{fontSize:32, color: colors.text}}> Add Your Details </Text>
            <TextInput onChangeText={(val) => nameInput(val)}  placeholderTextColor='grey' style={[styles.input, {color:colors.text}]} placeholder="Name" />
            <TextInput onChangeText={(val) => emailInput(val)}  placeholderTextColor='grey' style={[styles.input, {color:colors.text}]} placeholder="Email" />
            <TextInput onChangeText={(val) => contactInput(val)}  placeholderTextColor='grey' style={[styles.input, {color:colors.text}]} placeholder="Contact No." />
            <TextInput onChangeText={(val) => bloodInput(val)}  placeholderTextColor='grey' style={[styles.input, {color:colors.text}]} placeholder="Blood group" />
            <TextInput onChangeText={(val) => addressInput(val)}  placeholderTextColor='grey' style={[styles.input, {color:colors.text}]} placeholder="Address" />

           
            <TouchableOpacity onPress={() => props.set_data(userData)}
                    style={[styles.signIn, {
                        borderColor: '#ff0e2e',
                        borderWidth: 1,
                        marginTop: 15
                    }]}
                    >
                        <Text style={[styles.textSign, {
                            color: '#ff0e2e'
                        }]}> Register </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => props.get_data(userData)}
                    style={[styles.signIn, {
                        borderColor: '#ff0e2e',
                        borderWidth: 1,
                        marginTop: 15
                    }]}
                    >
                        <Text style={[styles.textSign, {
                            color: '#ff0e2e'
                        }]}> Get donor </Text>
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
        borderWidth: 0,
        borderBottomWidth: 1,
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
const mapStateToProps = (state) => ({
    data: state.root.data 
});

// const mapDispatchToProps = (dispatch) => ({
//     set_data : (data) => dispatch(set_data(data))
// })
export default connect(mapStateToProps, {get_data, set_data})(Form);

