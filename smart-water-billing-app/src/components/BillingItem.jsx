import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const BillingItem = ({ label, value, isTotal = false }) => {
  return (
    <View style={[
      styles.container,
      isTotal && styles.totalContainer
    ]}>
      <Text style={[
        styles.label,
        isTotal && styles.totalLabel
      ]}>
        {label}
      </Text>
      <Text style={[
        styles.value,
        isTotal && styles.totalValue
      ]}>
        KES {value.toFixed(2)}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#e2e8f0',
  },
  totalContainer: {
    borderBottomWidth: 0,
    marginTop: 8,
    paddingTop: 16,
    borderTopWidth: 1,
    borderTopColor: '#e2e8f0',
  },
  label: {
    fontSize: 16,
    color: '#1e293b',
  },
  value: {
    fontSize: 16,
    color: '#1e293b',
    fontWeight: '500',
  },
  totalLabel: {
    fontSize: 18,
    fontWeight: '600',
    color: '#0f172a',
  },
  totalValue: {
    fontSize: 18,
    fontWeight: '700',
    color: '#0f172a',
  },
});

export default BillingItem;
