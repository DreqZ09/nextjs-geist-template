import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import NotificationItem from '../components/NotificationItem';

const notifications = [
  {
    id: '1',
    title: 'Leak Detected',
    message: 'A leak was detected in your area.',
    timestamp: '2 hours ago',
    type: 'leak',
  },
  {
    id: '2',
    title: 'New Bill Generated',
    message: 'Your bill for May 2024 is ready.',
    timestamp: '1 day ago',
    type: 'billing',
  },
  {
    id: '3',
    title: 'Password Changed',
    message: 'Your password was changed successfully.',
    timestamp: '3 days ago',
    type: 'password',
  },
];

export default function NotificationsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Notifications</Text>
      <FlatList
        data={notifications}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <NotificationItem
            title={item.title}
            message={item.message}
            timestamp={item.timestamp}
            type={item.type}
          />
        )}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafc',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#0f172a',
    marginBottom: 16,
  },
  listContent: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    overflow: 'hidden',
  },
});
