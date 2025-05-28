import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export default function PaymentSuccess({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Payment Successful!</Text>
      <Text style={styles.message}>Thank you for your payment. Your transaction has been completed.</Text>
      <Button
        title="Back to Dashboard"
        onPress={() => navigation.navigate('Dashboard')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8fafc',
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#0f172a',
    marginBottom: 16,
  },
  message: {
    fontSize: 16,
    color: '#334155',
    marginBottom: 32,
    textAlign: 'center',
  },
});
