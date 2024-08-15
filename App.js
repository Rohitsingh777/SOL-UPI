import "react-native-get-random-values";
import { Buffer } from "buffer";
global.Buffer = Buffer;

import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import Createkey from './Components/Createkey';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Generatekey from "./Components/Generatekey";
import Readqr from "./Components/Readqr";
import Transactions from "./Components/SeeTransaction";
const Stack = createNativeStackNavigator();



export default function App() {
  // let logoFromFile = require('./assets/icon.png');
  // const [Keystring , settext ] = useState('')

  // return (
  //   <View style={styles.container}>
  //     <Text> YOUR PRIVET KEY  </Text>
  //     <TextInput 
  //     placeholder='...type something '
  //     multiline
  //     // onChange={settext('sdfasfasdasdf')}
  //     onChangeText={(text) => settext(text)}

  //     value={Keystring}
  //     style={styles.textbox}
  //     >

  //     </TextInput>

  //     <View style={styles.QR}>
  //       <Text>YOUR QR </Text>

  //       <QRCode
  //     value={Keystring || '0'}
  //     // logo={logoFromFile}
  //       size={200}
  //     getRef={(c) => (this.svg = c)
     
  //     }
  //   />
  //     </View>

  //   </View>
  // );


  return(
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Generatekey">
      <Stack.Screen name="Createkey" component={Createkey} />
      <Stack.Screen name="Generatekey" component={Generatekey} />
      <Stack.Screen name="ReadQr" component={Readqr} />
      <Stack.Screen name="Hist" component={Transactions} />


    </Stack.Navigator>
  </NavigationContainer>
   
  )



}
