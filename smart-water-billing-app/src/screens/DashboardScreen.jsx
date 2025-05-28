import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import UsageCard from '../components/UsageCard';
import NotificationItem from '../components/NotificationItem';
import { LineChart } from 'react-native-chart-kit';
import { Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;

const data = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [
    {
      data: [20, 45, 28, 80, 99, 43],
      strokeWidth: 2,
      color: (opacity = 1) => `rgba(14, 165, 233, ${opacity})`, // optional
    },
  ],
};

const chartConfig = {
  backgroundGradientFrom: '#f8fafc',
  backgroundGradientTo: '#f8fafc',
  color: (opacity = 1) => `rgba(14, 165, 233, ${opacity})`,
  strokeWidth: 2,
  decimalPlaces: 0,
  propsForDots: {
    r: '4',
    strokeWidth: '2',
    stroke: '#0ea5e9',
  },
};

export default function DashboardScreen({ navigation }) {
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

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Icon name="water" size={100} color="#0ea5e9" />
        <Text style={styles.customerName}>John Doe</Text>
        <Text style={styles.accountId}>Account ID: 123456789</Text>
      </View>
      <UsageCard currentUsage={120} lastMonthUsage={100} percentage={20} />
      <Text style={styles.chartTitle}>Monthly Water Usage</Text>
      <LineChart
        data={data}
        width={screenWidth - 32}
        height={220}
        chartConfig={chartConfig}
        bezier
        style={styles.chart}
      />
      <View style={styles.notificationsHeader}>
        <Text style={styles.notificationsTitle}>Notifications</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Notifications')}>
          <Text style={styles.viewAll}>View All</Text>
        </TouchableOpacity>
      </View>
      {notifications.map((notification) => (
        <NotificationItem
          key={notification.id}
          title={notification.title}
          message={notification.message}
          timestamp={notification.timestamp}
          type={notification.type}
        />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f8fafc',
    flex: 1,
  },
  header: {
    padding: 16,
    backgroundColor: '#ffffff',
    borderBottomColor: '#e2e8f0',
    borderBottomWidth: 1,
    alignItems: 'center',
  },
  customerName: {
    fontSize: 24,
    fontWeight: '700',
    color: '#0f172a',
  },
  accountId: {
    fontSize: 14,
    color: '#64748b',
    marginTop: 4,
  },
  chartTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#0f172a',
    marginLeft: 16,
    marginTop: 24,
    marginBottom: 8,
  },
  chart: {
    marginHorizontal: 16,
    borderRadius: 16,
  },
  notificationsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginTop: 24,
    marginBottom: 8,
  },
  notificationsTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#0f172a',
  },
  viewAll: {
    fontSize: 14,
    color: '#0ea5e9',
  },
});
