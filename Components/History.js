import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { Connection, PublicKey } from '@solana/web3.js';
import { Buffer } from 'buffer';

// Required for Buffer in React Native
global.Buffer = Buffer;

const SOLANA_CLUSTER_URL = 'https://api.mainnet-beta.solana.com'; // Solana mainnet cluster

const TransactionHistory = ({ publicKey }) => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const connection = new Connection(SOLANA_CLUSTER_URL);
        const pubKey = new PublicKey(publicKey);
        
        // Fetch confirmed signatures for the address
        const signatures = await connection.getConfirmedSignaturesForAddress2(pubKey);

        // Fetch the transaction details using the signatures
        const transactionPromises = signatures.map(sig =>
          connection.getParsedConfirmedTransaction(sig.signature)
        );
        const transactionDetails = await Promise.all(transactionPromises);

        setTransactions(transactionDetails);
      } catch (error) {
        console.error('Error fetching transactions:', error);
      }
    };

    fetchTransactions();
  }, [publicKey]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Transaction History</Text>
      <FlatList
        data={transactions}
        keyExtractor={(item) => item.transaction.signatures[0]}
        renderItem={({ item }) => (
          <View style={styles.transaction}>
            <Text>Signature: {item.transaction.signatures[0]}</Text>
            <Text>Block Time: {new Date(item.blockTime * 1000).toLocaleString()}</Text>
            <Text>Fee: {item.meta.fee} lamports</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  transaction: {
    marginBottom: 15,
    padding: 15,
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
  },
});

export default TransactionHistory;
