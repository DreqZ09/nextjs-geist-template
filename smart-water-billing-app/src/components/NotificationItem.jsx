import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const NotificationItem = ({ title, message, timestamp, type }) => {
  // Map notification type to icon and color
  const iconMap = {
    leak: { name: 'water-damage', color: '#ef4444' },
    billing: { name: 'receipt', color: '#0ea5e9' },
    password: { name: 'lock', color: '#f59e0b' },
    default: { name: 'notifications', color: '#64748b' },
  };

  const { name, color } = iconMap[type] || iconMap.default;

  return (
    <View style={styles.container}>
      <Icon name={name} size={28} color={color} style={styles.icon} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.message}>{message}</Text>
        <Text style={styles.timestamp}>{timestamp}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 16,
    borderBottomColor: '#e2e8f0',
    borderBottomWidth: 1,
    backgroundColor: '#ffffff',
  },
  icon: {
    marginRight: 12,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: '#0f172a',
    marginBottom: 4,
  },
  message: {
    fontSize: 14,
    color: '#475569',
    marginBottom: 4,
  },
  timestamp: {
    fontSize: 12,
    color: '#94a3b8',
  },
});

export default NotificationItem;
