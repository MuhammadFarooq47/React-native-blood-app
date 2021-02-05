import React from 'react'
import {
  View,
  Text,
  Button,
  TextInput,
  StyleSheet,
  Dimensions,
  ScrollView
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import { Container, Header, Content, Card, CardItem, Body } from "native-base";
//   import { WebView } from 'react-native-webview';

const screenWidth = Dimensions.get('window').width

function Cards({ name, email, contact, blood, address }) {

  return (
    <ScrollView>
      <Card>
        <CardItem header bordered>
          <Text style={styles.text}> Name : {name} </Text>
        </CardItem>
        <CardItem bordered>
          <Body>
            <Text> Email : {email} </Text>
            <Text> Contact No. : {contact}  </Text>
            <Text> Address : {address} </Text>
          </Body>
        </CardItem>
        <CardItem footer bordered>
          <Text style={styles.text}> Blood Group : {blood} </Text>
        </CardItem>
      </Card>
    </ScrollView>

  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 14,
    fontWeight: 'bold',
  }

})

export default Cards;
