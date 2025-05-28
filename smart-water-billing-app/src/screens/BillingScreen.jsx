import React from 'react';
import { View, Text, ScrollView, StyleSheet, Button } from 'react-native';
import BillingItem from '../components/BillingItem';

export default function BillingScreen({ navigation }) {
  const billingDetails = [
    { label: 'Water Usage Charges', value: 1200.00 },
    { label: 'Service Charges', value: 150.00 },
    { label: 'Taxes', value: 100.00 },
  ];

  const totalAmount = billingDetails.reduce((sum, item) => sum + item.value, 0);

  const handlePayment = () => {
    // Simulate payment success
    navigation.navigate('PaymentSuccess');
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Billing Details</Text>
      <View style={styles.billingList}>
        {billingDetails.map((item, index) => (
          <BillingItem
            key={index}
            label={item.label}
            value={item.value}
          />
        ))}
        <BillingItem
          label="Total Amount"
          value={totalAmount}
          isTotal={true}
        />
      </View>
      <View style={styles.paymentButton}>
        <Button title="Pay Now" onPress={handlePayment} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f8fafc',
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#0f172a',
    marginBottom: 24,
  },
  billingList: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    overflow: 'hidden',
  },
  paymentButton: {
    marginTop: 32,
  },
});
