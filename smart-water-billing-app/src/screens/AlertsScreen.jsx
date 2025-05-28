/**
 * AlertsScreen.jsx
 * Alerts screen showing list of alert types with toggle filter and detail view placeholder
 * 
 * Libraries used:
 * - nativewind for Tailwind-style styling
 * - react-native-vector-icons for icons
 * 
 * UI only, mock data, no backend or logic
 */

import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Switch } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const alertTypes = [
  { id: 'faulty', name: 'Faulty Meter', color: '#ef4444' },
  { id: 'power', name: 'Power Outage', color: '#f59e0b' },
  { id: 'leak', name: 'Water Leak', color: '#3b82f6' },
  { id: 'billing', name: 'New Billing', color: '#10b981' },
  { id: 'payment', name: 'Payment Received', color: '#8b5cf6' },
  { id: 'password', name: 'Password Changed', color: '#f43f5e' },
];

const alerts = [
  { id: '1', type: 'faulty', title: 'Faulty Meter', message: 'Meter 001 is faulty.', timestamp: '1 hour ago' },
  { id: '2', type: 'power', title: 'Power Outage', message: 'Power outage in your area.', timestamp: '3 hours ago' },
  { id: '3', type: 'leak', title: 'Water Leak', message: 'Leak detected near your meter.', timestamp: '5 hours ago' },
];

export default function AlertsScreen() {
  const [filters, setFilters] = useState(alertTypes.reduce((acc, alert) => ({ ...acc, [alert.id]: true }), {}));

  const toggleFilter = (id) => {
    setFilters(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const filteredAlerts = alerts.filter(a => filters[a.type]);

  const renderFilterItem = ({ item }) => (
    <View style={styles.filterItem}>
      <Switch value={filters[item.id]} onValueChange={() => toggleFilter(item.id)} />
      <Text style={[styles.filterText, { color: item.color }]}>{item.name}</Text>
    </View>
  );

  const renderAlert = ({ item }) => (
    <TouchableOpacity style={styles.alertItem}>
      <View style={[styles.typeIndicator, { backgroundColor: alertTypes.find(a => a.id === item.type)?.color || '#0ea5e9' }]} />
      <View style={styles.alertContent}>
        <Text style={styles.alertTitle}>{item.title}</Text>
        <Text style={styles.alertMessage}>{item.message}</Text>
        <Text style={styles.alertTimestamp}>{item.timestamp}</Text>
      </View>
      <Icon name="chevron-forward" size={20} color="#0ea5e9" />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Alerts</Text>
      <FlatList
        data={alertTypes}
        horizontal
        keyExtractor={item => item.id}
        renderItem={renderFilterItem}
        contentContainerStyle={styles.filtersContainer}
        showsHorizontalScrollIndicator={false}
      />
      <FlatList
        data={filteredAlerts}
        keyExtractor={item => item.id}
        renderItem={renderAlert}
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
  filtersContainer: {
    marginBottom: 16,
  },
  filterItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 16,
  },
  filterText: {
    marginLeft: 8,
    fontSize: 14,
    fontWeight: '600',
  },
  alertItem: {
    flexDirection: 'row',
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
    alignItems: 'center',
  },
  typeIndicator: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginRight: 12,
  },
  alertContent: {
    flex: 1,
  },
  alertTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#0f172a',
  },
  alertMessage: {
    fontSize: 14,
    color: '#64748b',
  },
  alertTimestamp: {
    fontSize: 12,
    color: '#94a3b8',
    marginTop: 4,
  },
});
