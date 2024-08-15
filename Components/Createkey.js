import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import QRCode from 'react-native-qrcode-svg';

export default function Createkey() {

//   let logoFromFile = require('./assets/icon.png');

  const [Keystring , settext ] = useState('')

  return (
    <View style={styles.container}>
      <Text> YOUR PRIVET KEY  </Text>
      <TextInput 
      placeholder='...type something '
      multiline
      // onChange={settext('sdfasfasdasdf')}
      onChangeText={(text) => settext(text)}

      value={Keystring}
      style={styles.textbox}
      >

      </TextInput>

      <View style={styles.QR}>
        <Text>YOUR QR </Text>

        <QRCode
      value={Keystring || '0'}
      // logo={logoFromFile}
        size={200}
      getRef={(c) => (this.svg = c)
     
      }
    />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({ 
  container: {
    paddingTop : 50  ,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  
  },
  textbox: { 
    width : 200,
    height : 100, 
    backgroundColor : 'gray',
    marginBottom : 20 ,

  }
  ,

  QR: { 
    marginTop : 50 ,
    width : 200,
    height : 200, 
    backgroundColor : 'gray'

  }
});
