/**
 * PaymentWaitScreen.jsx
 * Payment waiting screen with waiting message and spinner
 * 
 * Libraries used:
 * - nativewind for Tailwind-style styling
 * - react-native-vector-icons for icons
 * 
 * UI only, mock data, no backend or logic
 */

import React from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';

export default function PaymentWaitScreen() {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#0ea5e9" />
      <Text style={styles.message}>Hold on tight... Waiting for payment confirmation</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafc',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  message: {
    marginTop: 24,
    fontSize: 18,
    fontWeight: '600',
    color: '#0f172a',
    textAlign: 'center',
  },
});
