import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const UsageCard = ({ currentUsage, lastMonthUsage, percentage }) => {
  const isIncrease = percentage > 0;

  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Text style={styles.title}>Water Usage</Text>
        <Icon name="droplet" size={24} color="#0ea5e9" />
      </View>
      
      <Text style={styles.currentUsage}>{currentUsage || 'N/A'} m³</Text>
      <Text style={styles.period}>This Month</Text>
      
      <View style={styles.comparison}>
        <Icon 
          name={isIncrease ? "arrow-up" : "arrow-down"} 
          size={16} 
          color={isIncrease ? "#ef4444" : "#22c55e"}
        />
        <Text style={[
          styles.percentage,
          { color: isIncrease ? "#ef4444" : "#22c55e" }
        ]}>
          {Math.abs(percentage)}% {isIncrease ? 'more' : 'less'} than last month
        </Text>
      </View>
      
      <Text style={styles.lastMonth}>
        Last Month: {lastMonthUsage || 'N/A'} m³
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 20,
    marginHorizontal: 16,
    marginVertical: 8,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: '#0f172a',
  },
  currentUsage: {
    fontSize: 36,
    fontWeight: '700',
    color: '#0f172a',
    marginBottom: 4,
  },
  period: {
    fontSize: 14,
    color: '#64748b',
    marginBottom: 16,
  },
  comparison: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  percentage: {
    fontSize: 14,
    fontWeight: '500',
    marginLeft: 4,
  },
  lastMonth: {
    fontSize: 14,
    color: '#64748b',
  },
});

export default UsageCard;
