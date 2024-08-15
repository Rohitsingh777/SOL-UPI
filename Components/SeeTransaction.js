import { View } from "react-native";
import TransactionHistory from "./History";
import { useEffect } from "react";

export default function Transactions() {
    const publicKey = 'yhEhzpYLqKDWK1YKF9nHYzT1etUt9nduCsdFkCHCtgc';
    useEffect(()=>{
        console.log(publicKey)
    },[])
    return (
      <View style={{ flex: 1 }}>
        <TransactionHistory publicKey={publicKey} />
      </View>
    );
  }
  