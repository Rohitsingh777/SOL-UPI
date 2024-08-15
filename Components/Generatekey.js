import { View, Text, Button } from "react-native";
import React, { useState } from "react";
import QRCode from "react-native-qrcode-svg";

export default function Generatekey({ navigation }) {
  const { Keypair } = require("@solana/web3.js");
  // let keypair ;
  const [keypair, setKeypair] = useState();
  function Generatekeypair() {
    console.log(`generating this `);
    setKeypair(Keypair.generate());
    console.log(keypair?.secretKey);
  }

  return (
    <View>
      <Text>Generatekey</Text>
      <Text> SECRET : {keypair?.secretKey}</Text>
      <Text> PUBLIC : {JSON.stringify(keypair?.publicKey)}</Text>
      <Button
        title="Generatenew"
        onPress={() => {
          Generatekeypair();
        }}
      ></Button>

      <Button
        title="GOtokeycreate"
        onPress={() => {
          navigation.navigate("Createkey");
        }}
      ></Button>

      <Button
        title="gotreadqr"
        onPress={() => {
          navigation.navigate("ReadQr");
        }}
      ></Button>
       <Button
        title="go to hist"
        onPress={() => {
          navigation.navigate("Hist");
        }}
      ></Button>

      <View>
        <QRCode
          value={JSON.stringify(keypair?.publicKey) || "0"}
          // logo={logoFromFile}
          size={200}
          getRef={(c) => (this.svg = c)}
        />
        <Text> PUBLIC KEY : {JSON.stringify(keypair?.publicKey) || "NAN"}</Text>
      </View>
    </View>
  );
}
