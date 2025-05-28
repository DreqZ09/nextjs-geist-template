/**
 * NotificationsScreen.jsx
 * Notifications / Alerts screen with list, filter toggle, and detail view placeholder
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

const notifications = [
  { id: '1', type: 'leak', title: 'Leak Detected', message: 'A leak was detected in your area.', timestamp: '2 hours ago' },
  { id: '2', type: 'billing', title: 'New Bill Generated', message: 'Your bill for May 2024 is ready.', timestamp: '1 day ago' },
  { id: '3', type: 'password', title: 'Password Changed', message: 'Your password was changed successfully.', timestamp: '3 days ago' },
];

export default function NotificationsScreen() {
  const [filters, setFilters] = useState(alertTypes.reduce((acc, alert) => ({ ...acc, [alert.id]: true }), {}));

  const toggleFilter = (id) => {
    setFilters(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const filteredNotifications = notifications.filter(n => filters[n.type]);

  const renderFilterItem = ({ item }) => (
    <View style={styles.filterItem}>
      <Switch value={filters[item.id]} onValueChange={() => toggleFilter(item.id)} />
      <Text style={[styles.filterText, { color: item.color }]}>{item.name}</Text>
    </View>
  );

  const renderNotification = ({ item }) => (
    <TouchableOpacity style={styles.notificationItem}>
      <View style={[styles.typeIndicator, { backgroundColor: alertTypes.find(a => a.id === item.type)?.color || '#0ea5e9' }]} />
      <View style={styles.notificationContent}>
        <Text style={styles.notificationTitle}>{item.title}</Text>
        <Text style={styles.notificationMessage}>{item.message}</Text>
        <Text style={styles.notificationTimestamp}>{item.timestamp}</Text>
      </View>
      <Icon name="chevron-forward" size={20} color="#0ea5e9" />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Notifications</Text>
      <FlatList
        data={alertTypes}
        horizontal
        keyExtractor={item => item.id}
        renderItem={renderFilterItem}
        contentContainerStyle={styles.filtersContainer}
        showsHorizontalScrollIndicator={false}
      />
      <FlatList
        data={filteredNotifications}
        keyExtractor={item => item.id}
        renderItem={renderNotification}
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
  notificationItem: {
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
  notificationContent: {
    flex: 1,
  },
  notificationTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#0f172a',
  },
  notificationMessage: {
    fontSize: 14,
    color: '#64748b',
  },
  notificationTimestamp: {
    fontSize: 12,
    color: '#94a3b8',
    marginTop: 4,
  },
});
