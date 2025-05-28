/**
 * PaymentSuccessScreen.jsx
 * Payment success confirmation screen with amount, date, and phone
 * 
 * Libraries used:
 * - nativewind for Tailwind-style styling
 * - react-native-vector-icons for icons
 * 
 * UI only, mock data, no backend or logic
 */

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function PaymentSuccessScreen() {
  const paymentDetails = {
    amount: 'KES 2,010.60',
    date: '2024-06-01 14:30',
    phone: '+254 700 123456',
  };

  return (
    <View style={styles.container}>
      <Icon name="checkmark-circle" size={80} color="#0ea5e9" />
      <Text style={styles.title}>Payment Successful</Text>
      <View style={styles.details}>
        <Text style={styles.detailText}>Amount: {paymentDetails.amount}</Text>
        <Text style={styles.detailText}>Date: {paymentDetails.date}</Text>
        <Text style={styles.detailText}>Phone: {paymentDetails.phone}</Text>
      </View>
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
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#0f172a',
    marginTop: 16,
    marginBottom: 24,
  },
  details: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 24,
    width: '80%',
  },
  detailText: {
    fontSize: 18,
    color: '#0f172a',
    marginBottom: 12,
  },
});
