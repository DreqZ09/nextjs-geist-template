/**
 * BillingScreen.jsx
 * Billing Summary screen with breakdown, paybill instructions, and payment methods
 * 
 * Libraries used:
 * - nativewind for Tailwind-style styling
 * - react-native-vector-icons for icons
 * 
 * UI only, mock data, no backend or logic
 */

import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const paymentMethods = [
  { id: 'mpesa', name: 'MPESA', icon: 'logo-mpesa' },
  { id: 'qr', name: 'QR Code', icon: 'qr-code-outline' },
  { id: 'va', name: 'Virtual Account', icon: 'wallet-outline' },
  { id: 'bank', name: 'Bank Transfer', icon: 'bank-outline' },
];

export default function BillingScreen({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Billing Summary</Text>
      <View style={styles.summaryBox}>
        <View style={styles.row}>
          <Text style={styles.label}>Units Consumed:</Text>
          <Text style={styles.value}>223.4 m³</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Tariff:</Text>
          <Text style={styles.value}>KES 9.00 / m³</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Total Amount:</Text>
          <Text style={styles.value}>KES 2,010.60</Text>
        </View>
      </View>

      <Text style={styles.sectionTitle}>Paybill Instructions</Text>
      <View style={styles.instructionsBox}>
        <View style={styles.row}>
          <Text style={styles.label}>Paybill Number:</Text>
          <Text style={styles.value}>123456</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Account Number:</Text>
          <Text style={styles.value}>987654321</Text>
        </View>
      </View>

      <Text style={styles.sectionTitle}>Payment Methods</Text>
      <View style={styles.paymentMethodsContainer}>
        {paymentMethods.map(method => (
          <TouchableOpacity key={method.id} style={styles.paymentMethod} onPress={() => alert(`Selected ${method.name}`)}>
            <Icon name={method.icon} size={32} color="#0ea5e9" />
            <Text style={styles.paymentMethodText}>{method.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafc',
    padding: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#0f172a',
    marginBottom: 16,
  },
  summaryBox: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 16,
    marginBottom: 24,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  label: {
    fontSize: 16,
    color: '#64748b',
  },
  value: {
    fontSize: 16,
    fontWeight: '700',
    color: '#0f172a',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#0f172a',
    marginBottom: 12,
  },
  instructionsBox: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 16,
    marginBottom: 24,
  },
  paymentMethodsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  paymentMethod: {
    alignItems: 'center',
  },
  paymentMethodText: {
    marginTop: 8,
    fontSize: 14,
    color: '#0f172a',
  },
});
