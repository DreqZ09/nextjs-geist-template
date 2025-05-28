/**
 * Sidebar.jsx
 * Sidebar navigation component for navigating between app screens
 * 
 * Libraries used:
 * - nativewind for Tailwind-style styling
 * - react-native-vector-icons for icons
 * 
 * Usage:
 * Import and include <Sidebar navigation={navigation} /> in your screen components
 */

import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const navItems = [
  { name: 'Dashboard', icon: 'home-outline', screen: 'Dashboard' },
  { name: 'Meters', icon: 'list-outline', screen: 'MeterList' },
  { name: 'Billing', icon: 'card-outline', screen: 'Billing' },
  { name: 'Notifications', icon: 'notifications-outline', screen: 'Notifications' },
  { name: 'Alerts', icon: 'alert-circle-outline', screen: 'Alerts' },
  { name: 'Reports', icon: 'document-text-outline', screen: 'ReportAlert' },
  { name: 'Export History', icon: 'download-outline', screen: 'ExportHistory' },
  { name: 'Profile', icon: 'person-outline', screen: 'Profile' },
  { name: 'Settings', icon: 'settings-outline', screen: 'Settings' },
];

export default function Sidebar({ navigation }) {
  return (
    <View style={styles.container}>
      <ScrollView>
        {navItems.map(item => (
          <TouchableOpacity
            key={item.screen}
            style={styles.navItem}
            onPress={() => navigation.navigate(item.screen)}
          >
            <Icon name={item.icon} size={24} color="#0ea5e9" />
            <Text style={styles.navText}>{item.name}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 200,
    backgroundColor: '#f8fafc',
    borderRightWidth: 1,
    borderRightColor: '#e2e8f0',
    paddingVertical: 24,
  },
  navItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  navText: {
    marginLeft: 12,
    fontSize: 16,
    color: '#0f172a',
  },
});
