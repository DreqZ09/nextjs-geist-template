/**
 * MeterListScreen.jsx
 * Meter List screen showing scrollable list of meters with reading and balance
 * 
 * Libraries used:
 * - nativewind for Tailwind-style styling
 * - react-native-vector-icons for icons
 * 
 * UI only, mock data, no backend or logic
 */

import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const meters = [
  { id: '1', name: 'Meter 001', reading: 223.4, balance: 1500.50 },
  { id: '2', name: 'Meter 002', reading: 180.2, balance: 1200.00 },
  { id: '3', name: 'Meter 003', reading: 300.0, balance: 2000.75 },
];

export default function MeterListScreen({ navigation }) {
  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('MeterDetail', { meterId: item.id })}>
      <View>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.reading}>Reading: {item.reading} m³</Text>
      </View>
      <View style={styles.balanceContainer}>
        <Text style={styles.balanceLabel}>Balance</Text>
        <Text style={styles.balanceValue}>KES {item.balance.toFixed(2)}</Text>
        <Icon name="chevron-forward" size={20} color="#0ea5e9" />
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Meters</Text>
      <FlatList
        data={meters}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        contentContainerStyle={{ paddingBottom: 24 }}
      />
    </View>
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
  item: {
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  name: {
    fontSize: 18,
    fontWeight: '600',
    color: '#0f172a',
  },
  reading: {
    fontSize: 14,
    color: '#64748b',
    marginTop: 4,
  },
  balanceContainer: {
    alignItems: 'flex-end',
  },
  balanceLabel: {
    fontSize: 12,
    color: '#94a3b8',
  },
  balanceValue: {
    fontSize: 16,
    fontWeight: '700',
    color: '#0ea5e9',
  },
});
